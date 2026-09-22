import { Request, Response } from 'express';

export const uploadProductImage = async (req: Request, res: Response): Promise<void> => {
  try {
    const { imageBase64, filename } = req.body;

    if (!imageBase64) {
      res.status(400).json({ success: false, message: 'Image data missing in upload payload.' });
      return;
    }

    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    // If Cloudinary credentials are provided, upload to Cloudinary CDN
    if (cloudName && apiKey && apiSecret && cloudName !== 'replace_with_cloudinary_cloud_name') {
      const cloudinary = await import('cloudinary');
      cloudinary.v2.config({
        cloud_name: cloudName,
        api_key: apiKey,
        api_secret: apiSecret,
      });

      const uploadRes = await cloudinary.v2.uploader.upload(imageBase64, {
        folder: 'torance_products',
        public_id: filename ? filename.replace(/[^a-z0-9]/gi, '_') : undefined,
      });

      res.json({
        success: true,
        message: 'Image uploaded to Cloudinary CDN successfully',
        imageUrl: uploadRes.secure_url,
      });
      return;
    }

    // Fallback mode if Cloudinary credentials are pending:
    // Echo back data URI or placeholder CDN image
    res.json({
      success: true,
      message: 'Image payload received. Cloudinary credentials can be set in .env for production CDN storage.',
      imageUrl: imageBase64.startsWith('data:image') ? imageBase64 : `https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800`,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};
