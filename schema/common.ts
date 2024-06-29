import { z } from 'zod';

export const ClassificationSchema = z.object({
  name: z.string().min(1, { message: 'Please enter a valid email address' }),
  confidence: z.string(),
  user_Id: z.string(),
  video: z.string().min(1, {
    message: 'Video is required',
  }),
});
export type TClassificationSchema = z.infer<typeof ClassificationSchema>;
