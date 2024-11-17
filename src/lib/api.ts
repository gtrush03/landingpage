import axios from 'axios';
import { z } from 'zod';

// Define the webhook URL
const WEBHOOK_URL = 'https://ahess.app.n8n.cloud/webhook/9242af6d-62b3-411a-8aae-3631f47e61d1';

// Zod schema to validate the email input
export const EmailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

// TypeScript type inferred from Zod schema
export type EmailSubscription = z.infer<typeof EmailSchema>;

// Function to send a POST request to the n8n webhook
export async function subscribeToNewsletter(data: EmailSubscription): Promise<void> {
  try {
    // Validate the input using Zod
    const validatedData = EmailSchema.parse(data);

    // Send a POST request with the validated email data
    const response = await axios.post(WEBHOOK_URL, validatedData, {
      headers: {
        'Content-Type': 'application/json', // Ensure the correct content type
      },
    });

    console.log('Webhook Response:', response.data); // Log success response
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Handle validation errors
      throw new Error(error.errors[0].message);
    }

    console.error('Error Sending Request:', error); // Log detailed error
    throw new Error('Failed to subscribe. Please try again later.');
  }
}