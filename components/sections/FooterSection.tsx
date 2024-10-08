'use client';
import { TEAM_MEMBERS } from '@/data/landingPageData';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { FaFacebook } from 'react-icons/fa';
import { z } from 'zod';
import Logo from '../common/Logo';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { useState } from 'react';

const FormSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
});

const FooterSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'Thank you for joining us!',
      description: (
        <p className="mt-1">
          You will now recieve the updates from us directly in your inbox. 🎉{' '}
        </p>
      ),
    });

    setSubmitted(true);
    form.reset();
  }

  return (
    <footer className="md:p-10 md:pb-0 p-4 mt-6 bg-primary/5">
      <div className="flex flex-wrap md:flex-nowrap justify-between md:gap-8 gap-3">
        <div className="md:w-1/2 w-full space-y-4 order-2">
          <Logo />

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter the email..."
                        {...field}
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {submitted ? (
                <Button className="w-full" disabled>
                  Your Joined Newsletter successfully! 🎉
                </Button>
              ) : (
                <Button type="submit" className="w-full">
                  Join Newsletter
                </Button>
              )}
            </form>
          </Form>
        </div>
        <div className="flex gap-10 md:gap-32 w-full">
          <div>
            <h3 className="font-semibold mb-3">Animate Modal</h3>
            <ul className="space-y-2 dark:text-white/80 dark:hover:text-white transition-colors">
              <li className="hover:translate-x-1 transition-transform cursor-pointer">
                <Link href="/auth/register">Register</Link>
              </li>
              <li className="hover:translate-x-1 transition-transform cursor-pointer">
                Pricing
              </li>
              <li className="hover:translate-x-1 transition-transform cursor-pointer">
                Contact us
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Contact Team</h3>
            <ul className="space-y-2 dark:text-white/80 dark:hover:text-white transition-colors">
              {TEAM_MEMBERS.map(member => (
                <li
                  key={member.id}
                  className="hover:translate-x-1 transition-transform cursor-pointer">
                  {member.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <h3 className="font-semibold mb-3">Join Socials</h3>
          <div className="space-x-2">
            <Button variant="outline" size="icon">
              <GitHubLogoIcon className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <FaFacebook className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <TwitterLogoIcon className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <InstagramLogoIcon className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-muted-foreground text-sm py-3">
            Please feel free to contact our team in case you face any difficulty
            and have fun with your 3D animations journey! :)
          </p>
        </div>
      </div>
      <div className="text-center text-muted-foreground text-sm mt-8 mb-1">
        Copyright 2023-2024 © Action Replico. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
