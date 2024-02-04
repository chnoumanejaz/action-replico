'use client';
import { settings } from '@/actions/settings';
import FormError from '@/components/FormError';
import FormSuccess from '@/components/FormSuccess';
import PageWrapper from '@/components/portal/PageWrapper';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCurrentUser } from '@/hooks/auth/useCurrentUser';
import { SettingSchema, TSettingSchema } from '@/schema/auth-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import { SetStateAction, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { FaSave, FaSpinner } from 'react-icons/fa';
import { TbStatusChange } from 'react-icons/tb';

const AccountSettingPage = () => {
  const [isPending, startTransition] = useTransition();
  const user = useCurrentUser();
  const { update } = useSession();

  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const form = useForm<TSettingSchema>({
    resolver: zodResolver(SettingSchema),
    defaultValues: {
      name: user?.name || undefined,
      email: user?.email || undefined,
      password: undefined,
      newPassword: undefined,
    },
  });

  const handleUpdate = (data: TSettingSchema) => {
    setError('');
    setSuccess('');
    startTransition(() => {
      settings(data)
        .then(
          async (data: {
            error: SetStateAction<string | undefined>;
            success: SetStateAction<string | undefined>;
          }) => {
            if (data.error) {
              setError(data.error);
            } else {
              setSuccess(data.success);
              update();
            }
          }
        )
        .catch(() => setError('Something went wrong! try again'));
    });
  };

  return (
    <PageWrapper
      title="Account Settings"
      subheading="Make the changes with your account">
      <Tabs defaultValue="account">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you&apos;re
                done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Form {...form}>
                <form
                  className="space-y-6"
                  onSubmit={form.handleSubmit(handleUpdate)}>
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Name:</FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                {...field}
                                placeholder="Enter a name"
                                disabled={isPending}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />

                    {user?.isOAuth === false && (
                      <>
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => {
                            return (
                              <FormItem>
                                <FormLabel>Email:</FormLabel>
                                <FormControl>
                                  <Input
                                    {...field}
                                    placeholder="Enter a new email"
                                    disabled={isPending}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            );
                          }}
                        />
                      </>
                    )}
                  </div>
                  <FormError message={error} />
                  <FormSuccess message={success} />
                  <Button type="submit" disabled={isPending} className="w-full">
                    {isPending ? (
                      <FaSpinner className="h-5 w-5 mr-2 animate-spin" />
                    ) : (
                      <FaSave className="h-5 w-5 mr-2" />
                    )}
                    {!isPending ? 'Save Changes' : 'Saving changes...'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. Make sure to remember your password!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Form {...form}>
                <form
                  className="space-y-6"
                  onSubmit={form.handleSubmit(handleUpdate)}>
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Current Password:</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Enter old password"
                                disabled={isPending}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />

                    <FormField
                      control={form.control}
                      name="newPassword"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>New Password:</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Enter new password"
                                disabled={isPending}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  </div>
                  <FormError message={error} />
                  <FormSuccess message={success} />
                  <Button type="submit" disabled={isPending} className="w-full">
                    {isPending ? (
                      <FaSpinner className="h-5 w-5 mr-2 animate-spin" />
                    ) : (
                      <TbStatusChange className="h-5 w-5 mr-2" />
                    )}
                    {!isPending ? 'Change Password' : 'Changing Password...'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </PageWrapper>
  );
};

export default AccountSettingPage;
