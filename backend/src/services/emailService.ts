import nodemailer from 'nodemailer';

interface SendContactEmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
}

// Helper to escape HTML characters in dynamic user inputs for safe email rendering
const escapeHtml = (text: string): string => {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

export const sendContactEmail = async ({
  name,
  email,
  subject,
  message,
  phone
}: SendContactEmailParams): Promise<boolean> => {
  // Support both SMTP_* and EMAIL_* naming conventions for flexibility
  const host = process.env.SMTP_HOST || process.env.EMAIL_HOST || 'smtp.gmail.com';
  const port = Number(process.env.SMTP_PORT || process.env.EMAIL_PORT) || 587;
  const user = process.env.SMTP_USER || process.env.EMAIL_USER;
  const pass = process.env.SMTP_PASSWORD || process.env.EMAIL_PASS;
  
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || process.env.MANAGER_EMAIL || process.env.BUSINESS_NOTIFY_EMAIL || 'support@torancelifescience.com';
  const fromEmail = process.env.CONTACT_FROM_EMAIL || (user ? `Website Contact Form <${user}>` : `Website Contact Form <no-reply@torancelifescience.com>`);

  // If credentials are missing or default placeholder, log safe server warning and return false
  if (!user || !pass || pass === 'smtp_app_password_placeholder' || pass === '********') {
    console.warn('[Email Service Notice] SMTP credentials missing or configured as placeholder. Email delivery skipped.');
    return false;
  }

  // Create Nodemailer Transporter
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });

  // Safely escape user inputs for HTML email body
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safePhone = phone ? escapeHtml(phone) : 'N/A';
  const safeMessage = escapeHtml(message);

  const formattedDate = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium'
  });

  // HTML Email Body
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; color: #0F172A; max-width: 650px; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
      <div style="background-color: #0F172A; padding: 20px; color: white; text-align: center; border-bottom: 4px solid #0284C7;">
        <h2 style="margin: 0; font-size: 20px; tracking-tight: uppercase;">TORRANCE LIFE SCIENCE</h2>
        <p style="margin: 4px 0 0; font-size: 12px; color: #38BDF8; font-weight: bold;">NEW CONTACT US SUBMISSION</p>
      </div>

      <div style="padding: 24px; background-color: #FFFFFF;">
        <table style="width: 100%; font-size: 14px; border-collapse: collapse; margin-bottom: 20px;">
          <tr style="border-bottom: 1px solid #F1F5F9;">
            <td style="padding: 8px 0; font-weight: bold; color: #64748B; width: 140px;">Name:</td>
            <td style="padding: 8px 0; font-weight: bold; color: #0F172A;">${safeName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #F1F5F9;">
            <td style="padding: 8px 0; font-weight: bold; color: #64748B;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #0284C7; font-weight: bold; text-decoration: none;">${safeEmail}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #F1F5F9;">
            <td style="padding: 8px 0; font-weight: bold; color: #64748B;">Phone:</td>
            <td style="padding: 8px 0; color: #0F172A;">${safePhone}</td>
          </tr>
          <tr style="border-bottom: 1px solid #F1F5F9;">
            <td style="padding: 8px 0; font-weight: bold; color: #64748B;">Subject:</td>
            <td style="padding: 8px 0; font-weight: bold; color: #0284C7;">${safeSubject}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #64748B;">Date:</td>
            <td style="padding: 8px 0; color: #64748B; font-size: 12px;">${formattedDate}</td>
          </tr>
        </table>

        <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-left: 4px solid #0284C7; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
          <h4 style="margin: 0 0 8px; color: #475569; font-size: 11px; text-transform: uppercase;">Message Body:</h4>
          <p style="margin: 0; font-size: 14px; color: #0F172A; white-space: pre-wrap; font-family: monospace;">${safeMessage}</p>
        </div>

        <div style="text-align: center; padding-top: 8px;">
          <a href="mailto:${safeEmail}?subject=Re: ${encodeURIComponent(subject)}" style="display: inline-block; padding: 12px 24px; background-color: #0284C7; color: white; text-decoration: none; font-weight: bold; font-size: 13px; border-radius: 8px;">
            Reply to Visitor (${safeEmail})
          </a>
        </div>
      </div>

      <div style="background-color: #F8FAFC; padding: 12px; border-top: 1px solid #E2E8F0; font-size: 11px; color: #64748B; text-align: center;">
        Automated Contact Submission • Torrance Life Science Website
      </div>
    </div>
  `;

  // Plain-text fallback for non-HTML email clients
  const textContent = `New Contact Us Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Subject: ${subject}
Date: ${formattedDate}

Message:
${message}
`;

  const mailOptions = {
    from: fromEmail,
    to: receiverEmail,
    replyTo: email, // Visitor email used strictly as Reply-To
    subject: `Contact Form: ${subject}`,
    text: textContent,
    html: htmlContent
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`[Email Service] Contact form message successfully sent to ${receiverEmail}`);
    return true;
  } catch (error: any) {
    // Log technical error securely without revealing SMTP password or credentials
    console.error('[Email Service Error] Failed to dispatch SMTP email:', error.message || 'SMTP connection failure');
    return false;
  }
};
