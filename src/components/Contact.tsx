'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    const serviceID = 'service_klf4p8h';
    const templateID = 'template_omft54k';
    const publicKey = 'CLFP4f4l-DHeen9E8';

    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      subject: values.subject,
      message: values.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      () => {
        toast({
          title: 'Message Sent!',
          description: 'Your message has been sent successfully.',
        });
        form.reset();
        setIsSubmitting(false);
      },
      (error) => {
        toast({
          title: 'Error',
          description: 'Something went wrong. Please try again.',
        });
        console.error('EmailJS Error:', error);
        setIsSubmitting(false);
      }
    );
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-accent mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Email</h4>
                  <a href="mailto:toqaosama86@gmail.com" className="text-foreground/70 hover:text-accent transition-colors">
                    toqaosama86@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-accent mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Phone</h4>
                  <a href="tel:+201155388410" className="text-foreground/70 hover:text-accent transition-colors">
                    +(20) 01155388410
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-accent mt-1" />
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Location</h4>
                  <p className="text-foreground/70">Cairo, Egypt</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/toqaosama" target="_blank" rel="noopener noreferrer" className="bg-card p-3 rounded-full hover:bg-accent hover:text-white transition-colors" aria-label="GitHub">
                  {/* GitHub Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.48 2 2 6.7 2 12.5c0 4.6 2.9 8.5 6.8 9.9.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.4-3.4-1.4-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.5 2.3 1.1 2.8.8.1-.7.4-1.1.7-1.4-2.3-.3-4.6-1.2-4.6-5.1 0-1.1.4-2 1-2.7 0-.2-.3-1.1.1-2.2 0 0 .8-.3 2.7 1a9.5 9.5 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .4 1.1.1 2 .1 2.2.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.7 5.1.4.4.8 1.1.8 2.3v3.4c0 .3.2.6.7.5a10 10 0 0 0 6.8-9.9C22 6.7 17.52 2 12 2z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/toqa-osama-7b19b9225/" target="_blank" rel="noopener noreferrer" className="bg-card p-3 rounded-full hover:bg-accent hover:text-white transition-colors" aria-label="LinkedIn">
                  {/* LinkedIn Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href="https://x.com/toqa681" target="_blank" rel="noopener noreferrer" className="bg-card p-3 rounded-full hover:bg-accent hover:text-white transition-colors" aria-label="Twitter">
                  {/* Twitter/X Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card shadow-sm rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {['name', 'email', 'subject', 'message'].map((fieldName) => (
                  <FormField
                    key={fieldName}
                    control={form.control}
                    name={fieldName as keyof z.infer<typeof formSchema>}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}</FormLabel>
                        <FormControl>
                          {fieldName === 'message' ? (
                            <Textarea placeholder="Your message..." rows={5} {...field} />
                          ) : (
                            <Input placeholder={`Your ${fieldName}`} {...field} />
                          )}
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
