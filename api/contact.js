import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
    return;
  }

  try {
    const { name, email, subject, message, phone, website, fax } = req.body || {};

    if (website || fax) {
      res.status(200).json({
        success: true,
        message: 'Your message has been sent successfully.'
      });
      return;
    }

    if (!name || name.length < 2) {
      res.status(400).json({ success: false, message: 'Please enter your name.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
      return;
    }

    if (!subject || subject.length < 2) {
      res.status(400).json({ success: false, message: 'Please enter a subject.' });
      return;
    }

    if (!message || message.length < 5) {
      res.status(400).json({ success: false, message: 'Message must be at least 5 characters.' });
      return;
    }

    const host = process.env.EMAIL_HOST || process.env.SMTP_HOST || 'smtp.gmail.com';
    const port = Number(process.env.EMAIL_PORT || process.env.SMTP_PORT) || 587;
    const user = process.env.EMAIL_USER || process.env.SMTP_USER || 'yashbhandari696@gmail.com';
    const rawPass = process.env.EMAIL_PASS || process.env.SMTP_PASSWORD || 'txit nyoj xglb ifnb';
    const pass = rawPass.replace(/\s+/g, '');
    const managerEmail = process.env.MANAGER_EMAIL || process.env.BUSINESS_NOTIFY_EMAIL || 'rishukumarctps@gmail.com';

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
      tls: { rejectUnauthorized: false },
      connectionTimeout: 10000,
      socketTimeout: 10000
    });

    const mailOptions = {
      from: `"Website Contact Form" <${user}>`,
      to: managerEmail,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nSubject: ${subject}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully.'
    });
  } catch (err) {
    console.error('[Vercel Contact API Error]:', err);
    res.status(500).json({
      success: false,
      message: 'Unable to send your message right now.'
    });
  }
}
