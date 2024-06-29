'use server';

import { db } from '@/lib/db';
import { ClassificationSchema, TClassificationSchema } from '@/schema/common';

export const classHistory = async (data: TClassificationSchema) => {
  try {
    console.log('data:', data);
    const validatedFields = ClassificationSchema.safeParse(data);

    if (!validatedFields.success) {
      return { error: 'Invalid fields data' };
    }

    const {
      data: { confidence, name, user_Id, video },
    } = validatedFields;

    const newClassification = await db.classification.create({
      data: { confidence, name, user_Id, video },
    });
    return { success: 'History created successfully!', newClassification };
  } catch (error) {
    console.error('Error storing classification:', error);
    throw new Error('Failed to create classification');
  }
};
