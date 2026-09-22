import nodemailer from 'nodemailer';
import { IEnquiry } from '../models/Enquiry.js';

export const sendEnquiryNotificationEmail = async (enquiry: IEnquiry): Promise<boolean> => {
  try {
    const host = process.env.EMAIL_HOST || 'smtp.gmail.com';
    const port = Number(process.env.EMAIL_PORT) || 587;
    const user = process.env.EMAIL_USER || 'enquiry@torancelifescience.com';
    const pass = process.env.EMAIL_PASS || 'smtp_app_password_placeholder';
    const companyEmail = process.env.BUSINESS_NOTIFY_EMAIL || 'info@torancelifescience.com';

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

    const mailOptions = {
      from: `"Torance Trade Desk" <${user}>`,
      to: companyEmail,
      replyTo: enquiry.email,
      subject: `[New Business Enquiry - ${enquiry.enquiryType}] from ${enquiry.fullName} (${enquiry.city})`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #0F172A; max-width: 600px; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px;">
          <div style="background-color: #0F172A; padding: 16px; border-radius: 8px; color: white; text-align: center;">
            <h2 style="margin: 0; font-size: 20px;">TORANCE LIFE SCIENCE PVT. LTD.</h2>
            <p style="margin: 4px 0 0; font-size: 12px; color: #38BDF8;">Trade & Commercial Enquiry Notification</p>
          </div>

          <div style="padding: 20px 0;">
            <h3 style="color: #0284C7; margin-top: 0;">Enquiry Details</h3>
            <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
              <tr>
                <td style="padding: 6px 0; font-weight: bold; width: 140px;">Enquiry Type:</td>
                <td style="padding: 6px 0; color: #0369A1; font-weight: bold;">${enquiry.enquiryType}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: bold;">Full Name:</td>
                <td style="padding: 6px 0;">${enquiry.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: bold;">Email:</td>
                <td style="padding: 6px 0;"><a href="mailto:${enquiry.email}">${enquiry.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: bold;">Phone:</td>
                <td style="padding: 6px 0;"><a href="tel:${enquiry.phone}">${enquiry.phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: bold;">Company:</td>
                <td style="padding: 6px 0;">${enquiry.companyName || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: bold;">Location:</td>
                <td style="padding: 6px 0;">${enquiry.city}, ${enquiry.state || ''} ${enquiry.country}</td>
              </tr>
            </table>

            <div style="margin-top: 16px; background-color: #F8FAFC; border-left: 4px solid #0EA5E9; padding: 12px; font-size: 13px;">
              <strong>Message Content:</strong>
              <p style="margin: 6px 0 0; font-family: monospace; white-space: pre-wrap;">${enquiry.message}</p>
            </div>
          </div>

          <div style="border-top: 1px solid #E2E8F0; pt: 12px; font-size: 11px; color: #64748B; text-align: center;">
            This is an automated trade inquiry notification from <a href="http://localhost:5173">Torance Life Science Corporate Portal</a>.
          </div>
        </div>
      `,
    };

    // If using placeholder password, log simulation instead of throwing error
    if (pass === 'smtp_app_password_placeholder') {
      console.log(`[Email Notification Simulated] Target: ${companyEmail} | Enquiry ID: ${enquiry._id}`);
      return true;
    }

    await transporter.sendMail(mailOptions);
    console.log(`[Email Notification Sent] Successfully dispatched notification for Enquiry ID: ${enquiry._id}`);
    return true;
  } catch (error) {
    console.warn(`[Email Notification Warning] Failed to send SMTP email:`, (error as Error).message);
    return false;
  }
};
