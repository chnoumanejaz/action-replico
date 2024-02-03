'use server';

import { signIn } from '@/auth';
import { getUserByEmail } from '@/data/user';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { LoginSchema, TLoginSchema } from '@/schema/auth-schema';
import { AuthError } from 'next-auth';

export const login = async (data: TLoginSchema) => {
  const validatedFields = LoginSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: 'Invalid fields data' };
  }

  const {
    data: { email, password },
  } = validatedFields;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return {
      error: 'Seems like you entered wrong details! Please check and try again',
    };
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid email or password!' };
        default:
          return { error: 'Oh, Something went wrong!' };
      }
    }

    throw error;
  }

  return { success: 'Logged in successfully!' };
};
