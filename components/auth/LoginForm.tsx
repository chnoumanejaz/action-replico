'use client';
import { login } from '@/actions/login';
import { LoginSchema, TLoginSchema } from '@/schema/auth-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import FormError from '../FormError';
import FormSuccess from '../FormSuccess';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import CardWrapper from './CardWrapper';
import { FiLogIn } from 'react-icons/fi';
import { FaSpinner } from 'react-icons/fa';
import { toast } from '../ui/use-toast';

const LoginForm = () => {
  const form = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  function onSubmit(data: TLoginSchema) {
    setError('');
    setSuccess('');

    startTransition(() => {
      login(data).then(data => {
        setError(data?.error);
        if (data?.success) {
          form.reset();
          toast({
            title: 'Logged In Successfully!',
          });
          return;
        }
        if (data?.error) {
          toast({
            title: data?.error,
          });
          return;
        }
      });
    });
  }

  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Dont have an account?"
      backButtonHref="/auth/register"
      showSocial>
      {/* Login form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4 mb-1">
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="name25@example.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="********"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Link
            href="/auth/reset"
            className="text-muted-foreground hover:underline hover:underline-offset-2">
            Forgot password?
          </Link>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? (
              <FaSpinner className="mr-3 h-4 w-4 animate-spin" />
            ) : (
              <FiLogIn className="mr-3 h-4 w-4" />
            )}
            {isPending ? 'Logging in...' : 'Login Now'}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
