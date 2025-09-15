'use server';

/**
 * @fileOverview Sends a quote request email.
 *
 * - sendQuoteRequestEmail - A function that sends an email with quote request details.
 * - SendQuoteRequestEmailInput - The input type for the sendQuoteRequestEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import * as nodemailer from 'nodemailer';

const SendQuoteRequestEmailInputSchema = z.object({
  name: z.string().describe('The name of the prospective client.'),
  email: z.string().email().describe('The email address of the prospective client.'),
  company: z.string().optional().describe('The company of the prospective client, if applicable.'),
  serviceOfInterest: z.string().describe('The service the client is interested in.'),
  projectDetails: z.string().describe('Detailed description of the project the client is planning.'),
});
export type SendQuoteRequestEmailInput = z.infer<typeof SendQuoteRequestEmailInputSchema>;

export async function sendQuoteRequestEmail(input: SendQuoteRequestEmailInput): Promise<void> {
  await sendQuoteRequestEmailFlow(input);
}

// This tool is a placeholder. In a real-world scenario, you would use a proper email service.
// For this example, we'll use nodemailer with a dummy account.
const sendEmailTool = ai.defineTool(
  {
    name: 'sendEmailTool',
    description: 'Sends an email with the provided content.',
    inputSchema: z.object({
      to: z.string(),
      subject: z.string(),
      html: z.string(),
    }),
    outputSchema: z.void(),
  },
  async ({ to, subject, html }) => {
    // Note: This uses a test account from ethereal.email.
    // In a production environment, you should use a proper SMTP provider.
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'maddison53@ethereal.email', // generated ethereal user
        pass: 'jn7jnAPss4f63QBp6D', // generated ethereal password
      },
    });

    const info = await transporter.sendMail({
      from: '"Quote Request Bot" <no-reply@yourcompany.com>',
      to,
      subject,
      html,
    });
    
    console.log('Message sent: %s', info.messageId);
    // You can see the email preview at:
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  }
);


const prompt = ai.definePrompt({
  name: 'quoteRequestEmailPrompt',
  input: { schema: SendQuoteRequestEmailInputSchema },
  output: { schema: z.object({ to: z.string(), subject: z.string(), html: z.string() }) },
  prompt: `You are an AI assistant that formats quote requests into professional HTML emails.
  
  The email should be sent to the address specified in the environment variable QUOTE_REQUEST_EMAIL.
  The subject of the email should be "New Quote Request from {{name}}".

  The body of the email should be a well-formatted HTML document that includes all the details from the contact form.

  Client Name: {{{name}}}
  Email: {{{email}}}
  Company: {{{company}}}
  Service of Interest: {{{serviceOfInterest}}}
  Project Details: {{{projectDetails}}}
  `,
});

const sendQuoteRequestEmailFlow = ai.defineFlow(
  {
    name: 'sendQuoteRequestEmailFlow',
    inputSchema: SendQuoteRequestEmailInputSchema,
    outputSchema: z.void(),
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Could not generate email content.');
    }
    
    const toEmail = process.env.QUOTE_REQUEST_EMAIL;
    if (!toEmail) {
        throw new Error('QUOTE_REQUEST_EMAIL environment variable is not set.');
    }

    await sendEmailTool({ to: toEmail, subject: output.subject, html: output.html });
  }
);
