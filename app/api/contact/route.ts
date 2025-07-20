import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createClient } from '@/lib/supabase/client';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(1, { message: 'Please enter a subject' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
  phone: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const body = contactFormSchema.parse(json);

    // Use Supabase client to insert contact message
    const supabase = createClient();
    const { data, error } = await supabase.from('Contact').insert([
      {
        name: body.name,
        email: body.email,
        phone: body.phone || null,
        subject: body.subject,
        message: body.message,
      },
    ]).select().single();

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error saving contact:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Validation error', details: error.issues },
        { status: 422 }
      );
    }
    let errorMessage = 'Something went wrong. Please try again later.';
    let errorDetails = undefined;
    if (error instanceof Error) {
      errorMessage = error.message;
      if (process.env.NODE_ENV === 'development') {
        errorDetails = error.stack;
      }
    }
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage,
        details: errorDetails
      },
      { status: 500 }
    );
  }
}

export const dynamic = 'force-dynamic';
