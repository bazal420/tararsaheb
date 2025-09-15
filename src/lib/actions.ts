'use server';

import { z } from 'zod';
import { sendQuoteRequestEmail } from '@/ai/flows/send-quote-request-email';
import { personalizedQuoteSuggestions } from '@/ai/flows/personalized-quote-suggestions';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  company: z.string().optional(),
  serviceOfInterest: z.string({ required_error: 'Please select a service.' }).min(1, { message: 'Please select a service.' }),
  projectDetails: z.string().min(10, { message: 'Project details must be at least 10 characters.' }),
});

export async function handleContactForm(prevState: any, formData: FormData) {
  const validatedFields = formSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company') || undefined,
    serviceOfInterest: formData.get('serviceOfInterest'),
    projectDetails: formData.get('projectDetails'),
  });

  if (!validatedFields.success) {
    const errorMessage = validatedFields.error.issues.map((issue) => issue.message).join(', ');
    return {
      message: errorMessage || 'Invalid form data. Please check your entries.',
      success: false,
    };
  }
  
  const data = validatedFields.data;

  try {
    await sendQuoteRequestEmail(data);
    console.log('Quote request email sent for:', data.email);

    // This can be run in the background without blocking the response
    personalizedQuoteSuggestions(data).catch(console.error);

    return {
      message: 'Thank you for your inquiry! We will get back to you soon.',
      success: true,
    };
  } catch (error) {
    console.error('Error processing contact form:', error);
    return {
      message: 'An unexpected error occurred. Please try again later.',
      success: false,
    };
  }
}
