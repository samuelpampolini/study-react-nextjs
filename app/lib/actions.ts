'use server';

import { z } from 'zod';
import pool from './db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string()
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });
 
export async function createInvoice(formData: FormData) {
    const { customerId, amount, status } = CreateInvoice.parse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    });

    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];

    await pool.query(`INSERT INTO invoices (customer_id, amount, status, date) VALUES ($1, $2, $3, $4)`,
        [customerId, amountInCents, status, date]
    );

    // below a way to consume big forms and get the raw data.
    //const rawFormData = Object.fromEntries(formData.entries())

    // test it out
    //console.log(rawFormData);
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
}

const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export async function updateInvoice(id: string, formData: FormData) {
    const { customerId, amount, status } = UpdateInvoice.parse({
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    });
   
    const amountInCents = amount * 100;
   
    await pool.query(`UPDATE invoices
        SET customer_id = $1, amount = $2, status = $3
        WHERE id = $4`,
        [customerId, amountInCents, status, id]
    );
   
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
  }

  export async function deleteInvoice(id: string) {
    await pool.query("DELETE FROM invoices WHERE id = $1",
        [id]
    );
    revalidatePath('/dashboard/invoices');
  }