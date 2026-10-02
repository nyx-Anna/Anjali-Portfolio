# Activate your portfolio contact form

The code is ready to use EmailJS. Live delivery still needs your account setup.

## 1. Connect your email service

1. Create an account at https://www.emailjs.com/ and open the dashboard.
2. Under Email Services, add your preferred email provider and connect your account using EmailJS's instructions.
3. Copy the Service ID.

## 2. Create your email template

Create a template under Email Templates with these settings:

- To Email: jhaanju236@gmail.com (enter this as a fixed recipient).
- From Name: {{from_name}}
- From Email: use the connected service's default email address.
- Reply-To: {{reply_to}}
- Subject: Portfolio enquiry from {{from_name}}

Email body:

    New message from your portfolio

    Name: {{from_name}}
    Email: {{reply_to}}

    Message:
    {{message}}

Save and copy the Template ID. Keep double braces for these variables. Do not put a visitor-controlled variable in the To Email field.

## 3. Add your three settings

Find your Public Key in the EmailJS account settings.

Copy `.env.example` to a new file named `.env.local` in the same folder as package.json. Fill it in:

    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key

These are browser-visible configuration values. Never put a password, private key, or SMTP credentials in a VITE\_ variable. `.env.local` is excluded from Git.

## 4. Run and test

1. Install dependencies with `npm install` if this is a fresh copy.
2. Stop and restart the development server using `npm run dev` after changing the settings.
3. Open the local address shown by Vite and scroll to Contact.
4. Enter your name, an email you control, and a short test message; click Send Message.
5. Confirm the success notice, then check the recipient inbox and spam folder. EmailJS Email History can help diagnose delivery problems.
6. Reply to the delivered email and confirm Reply-To points to the address entered in the form.

The form only clears its fields after EmailJS accepts the request. Failed requests keep your text so you can retry. An acceptance response does not guarantee inbox placement.

## 5. When deploying

Add the same three VITE*EMAILJS*\* environment variables in your hosting project's settings, then rebuild/redeploy. Vite reads these settings at build time.

Where available in your EmailJS account, restrict allowed origins to your actual portfolio domain and the local development origin you use. Account-side controls are necessary for abuse protection; the form's duplicate-submit guard is only a user-interface safeguard.

## Included validation

The integration has automated checks for trimmed template parameters, invalid input, missing configuration, provider errors, rate limits, and network failures. These use a simulated service and do not send email. Run them with `npm run test:contact`.

A real delivery test requires your configured EmailJS account and is still pending.

Official references:

- https://www.emailjs.com/docs/tutorial/creating-email-template/
- https://www.emailjs.com/docs/rest-api/send/
