import { useForm, Controller } from 'react-hook-form';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Field, FieldLabel, FieldError } from '@/components/ui/field';
import { toast } from 'sonner';

import { staggerContainer } from '@/lib/animations';
import { SectionHeaders } from '@/components/SectionHeaders';
import { Button } from '@/components/ui/button';
import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from 'react';

type ContactFormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

export const Contact = () => {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    },
    mode: 'onTouched',
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaKey, setCaptchaKey] = useState(0);

  const onSubmit = async (values: ContactFormValues) => {
    if (!captchaToken) {
      toast.error('Please verify that you are not a robot.');
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: values.name,
          company: values.company,
          email: values.email,
          phone: values.phone,
          message: values.message,
          'g-recaptcha-response': captchaToken,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      toast.success('Message sent successfully!');
      form.reset();
      setCaptchaToken(null);
      setCaptchaKey((prev) => prev + 1);
    } catch (error) {
      console.error('EmailJS Error:', error);

      toast.error('Failed to send message. Please try again.');
      setCaptchaToken(null);
      setCaptchaKey((prev) => prev + 1);
    }
  };

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0.1)}
      className='mt-20 scroll-mt-10'
      id='contact'
    >
      <SectionHeaders
        subtitle='Contact'
        title="Let's make something awesome together!"
      />

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full mx-auto space-y-4 mt-10'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {/* Name */}
          <Controller
            name='name'
            control={form.control}
            rules={{ required: 'Name is required.' }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  placeholder='Your Name'
                  className='border-0'
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Company */}
          <Controller
            name='company'
            control={form.control}
            rules={{ required: 'Company name is required.' }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Company</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  placeholder='Company Name'
                  className='border-0'
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Email */}
          <Controller
            name='email'
            control={form.control}
            rules={{
              required: 'Email is required.',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address.',
              },
            }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type='email'
                  placeholder='you@example.com'
                  className='border-0'
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Phone */}
          <Controller
            name='phone'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Phone</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type='tel'
                  placeholder='+1234567890'
                  className='border-0'
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Message */}
          <Controller
            name='message'
            control={form.control}
            rules={{ required: 'Message is required.' }}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                className='md:col-span-2'
              >
                <FieldLabel htmlFor={field.name}>Message</FieldLabel>
                <Textarea
                  {...field}
                  id={field.name}
                  placeholder='Write your message ...'
                  className='min-h-36 border-0'
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        <ReCAPTCHA
          key={captchaKey}
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
          onChange={setCaptchaToken}
          onExpired={() => setCaptchaToken(null)}
          className='mt-6'
        />

        <Button
          type='submit'
          size='lg'
          disabled={form.formState.isSubmitting || !captchaToken}
        >
          {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </motion.section>
  );
};
