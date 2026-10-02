export function isEmailConfigured(config) {
  return Boolean(config.serviceId && config.templateId && config.publicKey);
}

export async function sendContactEmail(values, config, request = fetch) {
  if (!isEmailConfigured(config)) {
    throw new Error("The contact form is not available yet. Please use the email link below.");
  }
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();
  if (!name || name.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || !message || message.length > 5000) {
    throw new Error("Please enter your name, a valid email address, and a message (up to 5,000 characters).");
  }
  let response;
  try {
    response = await request("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: AbortSignal.timeout(15000),
      body: JSON.stringify({
        service_id: config.serviceId,
        template_id: config.templateId,
        user_id: config.publicKey,
        template_params: { from_name: name, reply_to: email, message },
      }),
    });
  } catch {
    throw new Error("We couldn't confirm delivery. Please check your connection or use the email link below.");
  }
  if (!response.ok) {
    throw new Error(response.status === 429
      ? "Too many requests right now. Please wait a moment before trying again."
      : "Your message couldn't be sent. Please try again later or use the email link below.");
  }
}
