import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set CORS headers for Vercel
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
    const { 
      fullName, 
      name, 
      email, 
      phone, 
      companyName, 
      enquiryType, 
      city, 
      state, 
      country, 
      message, 
      website, 
      fax 
    } = req.body || {};

    // Anti-spam Honeypot Check
    if (website || fax) {
      res.status(200).json({
        success: true,
        message: 'Your enquiry has been submitted successfully. Our team will contact you shortly.'
      });
      return;
    }

    const customerName = fullName || name;
    const customerEmail = email ? email.trim() : '';
    const customerPhone = phone ? phone.trim() : '';
    const type = enquiryType || 'General';
    const location = `${city || ''}${state ? ', ' + state : ''}, ${country || 'India'}`;
    const mailMsg = message ? message.trim() : '';

    if (!customerName || customerName.length < 2) {
      res.status(400).json({ success: false, message: 'Please enter your full name (at least 2 characters).' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!customerEmail || !emailRegex.test(customerEmail)) {
      res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
      return;
    }

    if (!customerPhone || customerPhone.replace(/[^0-9]/g, '').length < 7) {
      res.status(400).json({ success: false, message: 'Please enter a valid phone or WhatsApp number.' });
      return;
    }

    if (!mailMsg || mailMsg.length < 5) {
      res.status(400).json({ success: false, message: 'Inquiry message must be at least 5 characters.' });
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

    const formattedDate = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium'
    });

    const mailOptions = {
      from: `"Torrance Trade Desk" <${user}>`,
      to: managerEmail,
      replyTo: customerEmail,
      subject: `New Business Enquiry - ${type} - ${customerName}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #0F172A; max-width: 650px; border: 1px solid #E2E8F0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); margin: 0 auto;">
          <div style="background-color: #0F172A; padding: 24px; color: white; text-align: center; border-bottom: 4px solid #0284C7;">
            <h2 style="margin: 0; font-size: 22px; text-transform: uppercase; letter-spacing: 1px;">TORRANCE LIFE SCIENCE PVT. LTD.</h2>
            <p style="margin: 6px 0 0; font-size: 13px; color: #38BDF8; font-weight: bold;">OFFICIAL BUSINESS ENQUIRY NOTIFICATION</p>
          </div>
          <div style="padding: 28px; background-color: #FFFFFF;">
            <div style="margin-bottom: 20px; padding: 12px 16px; background-color: #F0F9FF; border: 1px solid #BAE6FD; border-radius: 8px; color: #0369A1; font-size: 13px; font-weight: bold;">
              📩 Category: ${type} Segment Inquiry
            </div>
            <table style="width: 100%; font-size: 14px; border-collapse: collapse; margin-bottom: 24px;">
              <tr style="border-bottom: 1px solid #F1F5F9;">
                <td style="padding: 10px 0; font-weight: bold; color: #64748B; width: 180px;">Enquiry Type:</td>
                <td style="padding: 10px 0; color: #0284C7; font-weight: bold;">${type}</td>
              </tr>
              <tr style="border-bottom: 1px solid #F1F5F9;">
                <td style="padding: 10px 0; font-weight: bold; color: #64748B;">Full Name:</td>
                <td style="padding: 10px 0; font-weight: bold; color: #0F172A;">${customerName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #F1F5F9;">
                <td style="padding: 10px 0; font-weight: bold; color: #64748B;">Customer Email:</td>
                <td style="padding: 10px 0;"><a href="mailto:${customerEmail}" style="color: #0284C7; text-decoration: none; font-weight: bold;">${customerEmail}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #F1F5F9;">
                <td style="padding: 10px 0; font-weight: bold; color: #64748B;">Phone / WhatsApp:</td>
                <td style="padding: 10px 0;"><a href="tel:${customerPhone}" style="color: #0F172A; font-weight: bold; text-decoration: none;">${customerPhone}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #F1F5F9;">
                <td style="padding: 10px 0; font-weight: bold; color: #64748B;">Company / Organization:</td>
                <td style="padding: 10px 0; color: #0F172A;">${companyName || 'Individual Inquiry'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #F1F5F9;">
                <td style="padding: 10px 0; font-weight: bold; color: #64748B;">Location:</td>
                <td style="padding: 10px 0; color: #0F172A;">${location}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #64748B;">Submission Date:</td>
                <td style="padding: 10px 0; color: #64748B; font-size: 13px;">${formattedDate}</td>
              </tr>
            </table>
            <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-left: 4px solid #0284C7; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
              <h4 style="margin: 0 0 8px; color: #475569; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Inquiry Message:</h4>
              <p style="margin: 0; font-size: 14px; color: #0F172A; line-height: 1.6; white-space: pre-wrap;">${mailMsg}</p>
            </div>
            <div style="text-align: center; padding-top: 12px;">
              <a href="mailto:${customerEmail}?subject=Re: New Business Enquiry - ${encodeURIComponent(type)}" style="display: inline-block; padding: 14px 28px; background-color: #0284C7; color: white; text-decoration: none; font-weight: bold; font-size: 14px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                ✉️ Reply to Customer (${customerEmail})
              </a>
            </div>
          </div>
          <div style="background-color: #F8FAFC; padding: 16px; border-top: 1px solid #E2E8F0; font-size: 11px; color: #64748B; text-align: center;">
            Official Corporate Automated Notification • Torrance Life Science Pvt. Ltd.
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      success: true,
      message: 'Your enquiry has been submitted successfully. Our team will contact you shortly.'
    });
  } catch (err) {
    console.error('[Vercel Serverless Function Error]:', err);
    res.status(500).json({
      success: false,
      message: 'Unable to submit your enquiry right now. Please try again later.'
    });
  }
}
