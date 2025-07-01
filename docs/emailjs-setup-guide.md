# EmailJS Setup Guide for Contact Form

To make your contact form send real emails to kareem.magdy5@gmail.com, follow these steps:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (recommended)
4. Connect your Gmail account (kareem.magdy5@gmail.com)
5. Note down your **Service ID** (something like "service_xxxxxxx")

## Step 3: Create Email Template
1. Go to "Email Templates" in dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Hello Kareem,

You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio website
```

4. Save the template and note down your **Template ID** (something like "template_xxxxxxx")

## Step 4: Get Your Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (something like "xxxxxxxxxxxxxxx")

## Step 5: Update Your Portfolio Code
Open `script.js` and replace these placeholders:

```javascript
// Replace these three values:
emailjs.init("YOUR_PUBLIC_KEY");           // Your public key
emailjs.send('YOUR_SERVICE_ID',            // Your service ID  
            'YOUR_TEMPLATE_ID',            // Your template ID
```

## Step 6: Test Your Contact Form
1. Refresh your portfolio website
2. Fill out the contact form
3. Submit it
4. Check kareem.magdy5@gmail.com for the email!

## Example Configuration:
```javascript
// Example (replace with your actual IDs):
emailjs.init("user_aBcDeFgHiJkLmNoP");
emailjs.send('service_gmail_123', 'template_contact_456', templateParams)
```

## Troubleshooting:
- **Emails not arriving?** Check spam folder
- **Console errors?** Verify all IDs are correct
- **Rate limits?** Free plan allows 200 emails/month
- **Need help?** EmailJS has great documentation

## Security Note:
- Public key is safe to expose in frontend code
- Service ID and Template ID are also safe to expose
- Never expose private keys in frontend code

Once configured, your contact form will send real emails to kareem.magdy5@gmail.com! 🎉
