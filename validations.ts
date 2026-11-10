import { z } from 'zod';
export const leadSchema = z.object({name:z.string().trim().min(2).max(100),whatsapp:z.string().regex(/^[+()\d\s-]{10,20}$/),treatment:z.string().max(100).optional(),website:z.string().max(0).optional(),consent:z.literal(true)});
export type Lead = z.infer<typeof leadSchema>;