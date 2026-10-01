import nodemailer from 'nodemailer';
import { IEnquiry } from '../models/Enquiry.js';

/**
 * Dispatches a professional HTML business notification email to the Company Manager
 * 
 * Rules:
 * - TO: Manager / Company Email (from process.env.MANAGER_EMAIL or process.env.BUSINESS_NOTIFY_EMAIL)
 * - REPLY-TO: Customer Email (enquiry.email) -> Clicking Reply replies directly to customer
 * - SUBJECT: New Business Enquiry - [Enquiry Type] - [Full Name]
 * - NEVER log SMTP secrets or expose manager credentials to customer
 */
export const sendEnquiryNotificationEmail = async (enquiry: IEnquiry): Promise<boolean> => {
  try {
    const host = process.env.EMAIL_HOST || 'smtp.gmail.com';
    const port = Number(process.env.EMAIL_PORT) || 587;
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const managerEmail = process.env.MANAGER_EMAIL || process.env.BUSINESS_NOTIFY_EMAIL || 'info@torancelifescience.com';

    // If SMTP credentials are missing or default placeholder, log safe warning and return false
    if (!user || !pass || pass === 'smtp_app_password_placeholder') {
      console.log(`[Email Notice] SMTP credentials missing/placeholder. Enquiry saved to DB. ID: ${enquiry._id}`);
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

    const formattedDate = new Date(enquiry.createdAt || Date.now()).toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium'
    });

    const mailOptions = {
      from: `"Torrance Trade Desk" <${user}>`,
      to: managerEmail,
      replyTo: enquiry.email,
      subject: `New Business Enquiry - ${enquiry.enquiryType} - ${enquiry.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #0F172A; max-width: 650px; border: 1px solid #E2E8F0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          
          {/* Header */}
          <div style="background-color: #0F172A; padding: 24px; color: white; text-align: center; border-bottom: 4px solid #0284C7;">
            <h2 style="margin: 0; font-size: 22px; tracking-tight: uppercase; letter-spacing: 1px;">TORRANCE LIFE SCIENCE PVT. LTD.</h2>
            <p style="margin: 6px 0 0; font-size: 13px; color: #38BDF8; font-weight: bold;">OFFICIAL BUSINESS ENQUIRY NOTIFICATION</p>
          </div>

          {/* Details Body */}
          <div style="padding: 28px; bg-white;">
            <div style="margin-bottom: 20px; padding: 12px 16px; background-color: #F0F9FF; border: 1px solid #BAE6FD; border-radius: 8px; color: #0369A1; font-size: 13px; font-weight: bold;">
              📩 Category: ${enquiry.enquiryType} Segment Inquiry
            </div>

            <table style="width: 100%; font-size: 14px; border-collapse: collapse; margin-bottom: 24px;">
              <tr style="border-bottom: 1px solid #F1F5F9;">
                <td style="padding: 10px 0; font-weight: bold; color: #64748B; width: 180px;">Enquiry Type:</td>
                <td style="padding: 10px 0; color: #0284C7; font-weight: bold;">${enquiry.enquiryType}</td>
              </tr>
              <tr style="border-bottom: 1px solid #F1F5F9;">
                <td style="padding: 10px 0; font-weight: bold; color: #64748B;">Full Name:</td>
                <td style="padding: 10px 0; font-weight: bold; color: #0F172A;">${enquiry.fullName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #F1F5F9;">
                <td style="padding: 10px 0; font-weight: bold; color: #64748B;">Customer Email:</td>
                <td style="padding: 10px 0;"><a href="mailto:${enquiry.email}" style="color: #0284C7; text-decoration: none; font-weight: bold;">${enquiry.email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #F1F5F9;">
                <td style="padding: 10px 0; font-weight: bold; color: #64748B;">Phone / WhatsApp:</td>
                <td style="padding: 10px 0;"><a href="tel:${enquiry.phone}" style="color: #0F172A; font-weight: bold; text-decoration: none;">${enquiry.phone}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #F1F5F9;">
                <td style="padding: 10px 0; font-weight: bold; color: #64748B;">Company / Organization:</td>
                <td style="padding: 10px 0; color: #0F172A;">${enquiry.companyName || 'Individual Inquiry'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #F1F5F9;">
                <td style="padding: 10px 0; font-weight: bold; color: #64748B;">Location:</td>
                <td style="padding: 10px 0; color: #0F172A;">${enquiry.city}${enquiry.state ? `, ${enquiry.state}` : ''}, ${enquiry.country || 'India'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #64748B;">Submission Date:</td>
                <td style="padding: 10px 0; color: #64748B; font-size: 13px;">${formattedDate}</td>
              </tr>
            </table>

            {/* Message Box */}
            <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-left: 4px solid #0284C7; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
              <h4 style="margin: 0 0 8px; color: #475569; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Inquiry Message:</h4>
              <p style="margin: 0; font-size: 14px; color: #0F172A; leading-relaxed: true; white-space: pre-wrap;">${enquiry.message}</p>
            </div>

            {/* Direct Reply CTA Button */}
            <div style="text-align: center; padding-top: 12px;">
              <a 
                href="mailto:${enquiry.email}?subject=Re: New Business Enquiry - ${encodeURIComponent(enquiry.enquiryType)}"
                style="display: inline-block; padding: 14px 28px; background-color: #0284C7; color: white; text-decoration: none; font-weight: bold; font-size: 14px; border-radius: 10px; shadow: 0 2px 4px rgba(0,0,0,0.1);"
              >
                ✉️ Reply to Customer (${enquiry.email})
              </a>
            </div>

          </div>

          {/* Footer */}
          <div style="background-color: #F8FAFC; padding: 16px; border-top: 1px solid #E2E8F0; font-size: 11px; color: #64748B; text-align: center;">
            Official Corporate Automated Notification • Torrance Life Science Pvt. Ltd.
          </div>

        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`[Email Sent] Successfully delivered inquiry notification to Manager (${managerEmail}) for Enquiry ID: ${enquiry._id}`);
    return true;
  } catch (error: any) {
    console.warn(`[Email Delivery Failed]:`, error.message || error);
    return false;
  }
};
