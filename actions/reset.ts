'use server';

import { getUserByEmail } from '@/data/user';
import { db } from '@/lib/db';
import { ResetSchema, TResetSchema } from '@/schema/auth-schema';
import bcrypt from 'bcryptjs';

export const reset = async (data: TResetSchema) => {
  const validatedField = ResetSchema.safeParse(data);

  if (!validatedField.success) {
    return { error: 'Invalid email!' };
  }

  const { email, password } = validatedField.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: 'No account found with this email account!' };
  }

  await db.user.update({
    where: { id: existingUser.id },
    data: {
      password: hashedPassword,
    },
  });

  return {
    success: 'Your password is successfuly recovered! Login to continue',
  };
};
