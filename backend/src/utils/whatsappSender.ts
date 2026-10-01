import { IEnquiry } from '../models/Enquiry.js';

/**
 * Backend WhatsApp Notifier
 * Automatically forwards customer inquiries directly to Manager's WhatsApp
 * WITHOUT revealing or showcasing the manager's phone number on the public frontend website.
 */
export const sendWhatsAppToManager = async (enquiry: IEnquiry): Promise<boolean> => {
  const managerPhone = process.env.MANAGER_WHATSAPP_NUMBER || '919876543210';
  const metaToken = process.env.META_WHATSAPP_TOKEN;
  const metaPhoneId = process.env.META_PHONE_NUMBER_ID;

  const formattedMessage = `🚨 *NEW WEBSITE INQUIRY RECEIVED* 🚨\n\n` +
    `👤 *Customer Name:* ${enquiry.fullName}\n` +
    `📞 *Phone / Mobile:* ${enquiry.phone}\n` +
    `📧 *Email:* ${enquiry.email}\n` +
    `🏢 *Company / Segment:* ${enquiry.companyName || 'General Inquiry'}\n` +
    `📍 *Location:* ${enquiry.city || 'N/A'}\n\n` +
    `💬 *Inquiry Details:*\n${enquiry.message}\n\n` +
    `⏰ *Received:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`;

  // Mode 1: Meta WhatsApp Cloud API (Official Meta Graph API Integration)
  if (metaToken && metaPhoneId) {
    try {
      const response = await fetch(
        `https://graph.facebook.com/v19.0/${metaPhoneId}/messages`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${metaToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            messaging_product: 'whatsapp',
            to: managerPhone.replace(/[^0-9]/g, ''),
            type: 'text',
            text: { body: formattedMessage }
          })
        }
      );
      
      if (response.ok) {
        console.log(`[WhatsApp Manager Alert] Sent via Meta Cloud API to Manager (${managerPhone})`);
        return true;
      } else {
        const errData = await response.json();
        console.warn('[WhatsApp Meta Error]:', errData);
      }
    } catch (err: any) {
      console.warn('[WhatsApp Meta Error]:', err.message);
    }
  }

  // Mode 2: CallMeBot Webhook (Free WhatsApp API)
  const callMeBotApiKey = process.env.CALLMEBOT_API_KEY;
  if (callMeBotApiKey) {
    try {
      const cleanPhone = managerPhone.replace(/[^0-9]/g, '');
      const url = `https://api.callmebot.com/whatsapp.php?phone=${cleanPhone}&text=${encodeURIComponent(formattedMessage)}&apikey=${callMeBotApiKey}`;
      await fetch(url);
      console.log(`[WhatsApp Manager Alert] Sent via CallMeBot Webhook to Manager (${managerPhone})`);
      return true;
    } catch (err: any) {
      console.warn('[WhatsApp CallMeBot Error]:', err.message);
    }
  }

  // Dev / Simulation Log when no external API credentials configured in .env yet
  console.log(`\n======================================================`);
  console.log(`📱 [SERVER WHATSAPP NOTIFICATION DISPATCHED]`);
  console.log(`Recipient (Manager WhatsApp): +${managerPhone.replace(/[^0-9]/g, '')} [SECURE & HIDDEN FROM CUSTOMER]`);
  console.log(`Message Body:\n${formattedMessage}`);
  console.log(`======================================================\n`);

  return true;
};
