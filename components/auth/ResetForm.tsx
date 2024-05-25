'use client';
import { reset } from '@/actions/reset';
import { ResetSchema, TResetSchema } from '@/schema/auth-schema';
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
import { MdOutlineLockReset } from 'react-icons/md';
import { toast } from '../ui/use-toast';

const ResetForm = () => {
  const form = useForm<TResetSchema>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: '',
    },
  });

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  function onSubmit(data: TResetSchema) {
    setError('');
    setSuccess('');

    startTransition(() => {
      reset(data).then(data => {
        setError(data?.error);
        setSuccess(data?.success);
        if (data.success) {
          form.reset();
          toast({
            title: 'Password recovered Successfully!',
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
      headerLabel="Forgot your password?"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login">
      {/* Reset form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
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
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Enter your new password ******"
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
              <MdOutlineLockReset className="mr-3 h-4 w-4" />
            )}
            {isPending ? 'Resetting...' : 'Reset password'}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default ResetForm;
