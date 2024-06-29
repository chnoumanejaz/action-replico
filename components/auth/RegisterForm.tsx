'use client';
import { register } from '@/actions/register';
import { RegisterSchema, TRegisterSchema } from '@/schema/auth-schema';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { FaSpinner } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import { toast } from '../ui/use-toast';

const RegisterForm = () => {
  const form = useForm<TRegisterSchema>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  });

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  function onSubmit(data: TRegisterSchema) {
    setError('');
    setSuccess('');

    startTransition(() => {
      register(data).then(data => {
        setError(data.error);
        setSuccess(data.success);
        if (data.success) {
          form.reset();
          toast({
            title: 'Account created Successfully!',
          });
          return;
        }
        if (data.error) {
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
      headerLabel="Create an account"
      backButtonLabel="Already have an account?"
      backButtonHref="/auth/login"
      showSocial>
      {/* Register form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Enter your name here"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                      type="email"
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
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? (
              <FaSpinner className="mr-3 h-4 w-4 animate-spin" />
            ) : (
              <FiLogIn className="mr-3 h-4 w-4" />
            )}

            {isPending ? 'Creating an account...' : 'Create an account'}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default RegisterForm;

/* TODO: add an eye on the password field */
