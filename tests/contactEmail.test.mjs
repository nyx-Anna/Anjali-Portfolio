import test from 'node:test';
import assert from 'node:assert/strict';
import { sendContactEmail } from '../src/lib/contactEmail.js';

const config = { serviceId: 'service_test', templateId: 'template_test', publicKey: 'public_test' };
const values = { name: ' Visitor ', email: ' visitor@example.com ', message: ' Hello Anjali ' };

test('sends trimmed fields and the public configuration to EmailJS', async () => {
  let calls = 0;
  await sendContactEmail(values, config, async (url, options) => {
    calls++;
    assert.equal(url, 'https://api.emailjs.com/api/v1.0/email/send');
    assert.equal(options.method, 'POST');
    assert.deepEqual(JSON.parse(options.body), {
      service_id: 'service_test', template_id: 'template_test', user_id: 'public_test',
      template_params: { from_name: 'Visitor', reply_to: 'visitor@example.com', message: 'Hello Anjali' },
    });
    return { ok: true };
  });
  assert.equal(calls, 1);
});

test('does not send with missing configuration or invalid input', async () => {
  const noRequest = async () => assert.fail('A request must not be made');
  await assert.rejects(sendContactEmail(values, {}, noRequest), /not available/);
  for (const invalid of [{ name: ' ' }, { email: 'invalid' }, { message: ' ' }, { message: 'x'.repeat(5001) }]) {
    await assert.rejects(sendContactEmail({ ...values, ...invalid }, config, noRequest), /Please enter/);
  }
});

test('handles rejected requests and rate limits without claiming success', async () => {
  await assert.rejects(sendContactEmail(values, config, async () => ({ ok: false, status: 400 })), /couldn't be sent/);
  await assert.rejects(sendContactEmail(values, config, async () => ({ ok: false, status: 429 })), /Too many requests/);
});

test('handles network failure or timeout without claiming delivery', async () => {
  await assert.rejects(sendContactEmail(values, config, async () => { throw new Error('offline'); }), /couldn't confirm delivery/);
});
