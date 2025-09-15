'use server';

/**
 * @fileOverview Analyzes contact form data to suggest personalized content or services for prospective clients.
 *
 * - personalizedQuoteSuggestions - A function that processes contact form data and returns personalized suggestions.
 * - PersonalizedQuoteSuggestionsInput - The input type for the personalizedQuoteSuggestions function.
 * - PersonalizedQuoteSuggestionsOutput - The return type for the personalizedQuoteSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedQuoteSuggestionsInputSchema = z.object({
  name: z.string().describe('The name of the prospective client.'),
  email: z.string().email().describe('The email address of the prospective client.'),
  company: z.string().optional().describe('The company of the prospective client, if applicable.'),
  serviceOfInterest: z.string().describe('The service the client is interested in (e.g., Asphalt, Interlock).'),
  projectDetails: z.string().describe('Detailed description of the project the client is planning.'),
});
export type PersonalizedQuoteSuggestionsInput = z.infer<typeof PersonalizedQuoteSuggestionsInputSchema>;

const PersonalizedQuoteSuggestionsOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('A list of personalized content or service suggestions for the client.'),
});
export type PersonalizedQuoteSuggestionsOutput = z.infer<typeof PersonalizedQuoteSuggestionsOutputSchema>;

export async function personalizedQuoteSuggestions(input: PersonalizedQuoteSuggestionsInput): Promise<PersonalizedQuoteSuggestionsOutput> {
  return personalizedQuoteSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedQuoteSuggestionsPrompt',
  input: {schema: PersonalizedQuoteSuggestionsInputSchema},
  output: {schema: PersonalizedQuoteSuggestionsOutputSchema},
  prompt: `You are an AI assistant specialized in providing personalized suggestions for prospective clients based on their contact form submissions.

  Analyze the following information provided by the client and generate a list of suggestions for content or services that would be most relevant to them.

  Client Name: {{{name}}}
  Email: {{{email}}}
  Company: {{{company}}}
  Service of Interest: {{{serviceOfInterest}}}
  Project Details: {{{projectDetails}}}

  Provide a list of suggestions that are tailored to the client's specific needs and interests. The suggestions should be concise and actionable.
  Return the suggestions as a JSON array of strings.
  `,
});

const personalizedQuoteSuggestionsFlow = ai.defineFlow(
  {
    name: 'personalizedQuoteSuggestionsFlow',
    inputSchema: PersonalizedQuoteSuggestionsInputSchema,
    outputSchema: PersonalizedQuoteSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
