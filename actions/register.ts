'use server';

import { getUserByEmail } from '@/data/user';
import { db } from '@/lib/db';
import { RegisterSchema, TRegisterSchema } from '@/schema/auth-schema';
import bcrypt from 'bcryptjs';

export const register = async (data: TRegisterSchema) => {
  const validatedFields = RegisterSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: 'Invalid fields data' };
  }

  const {
    data: { email, name, password },
  } = validatedFields;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) return { error: 'Email already taken! Please use another' };

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: 'Account created successfully! Login to continue' };
};
