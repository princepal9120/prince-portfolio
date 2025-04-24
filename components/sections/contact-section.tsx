"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FadeIn from "@/components/animations/fade-in";
import {
  Mail,
  SendHorizontal,
  Github,
  Linkedin,
  Twitter,
  Copy,
  Check,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Message sent successfully!");
    form.reset();
  }

  const copyEmail = () => {
    navigator.clipboard.writeText("princepal9120@gmail.com");
    setCopied(true);
    toast.success("Email copied to clipboard!");

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="flex items-center gap-2 mb-2">
            <Mail className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Contact</h2>
          </div>
          <p className="text-muted-foreground mb-8">Get in touch with me</p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn delay={0.1}>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message"
                              rows={5}
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full gap-2">
                      Send Message
                      <SendHorizontal className="h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="font-medium">Email</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-md">
                    <span className="text-muted-foreground">
                      princepal9120@gmail.com
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={copyEmail}
                      aria-label="Copy email"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <Separator className="my-6" />

                <div>
                  <h4 className="font-medium mb-4">Connect with me</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center p-4 border rounded-md hover:border-primary/50 transition-colors"
                    >
                      <Github className="h-6 w-6 mb-2" />
                      <span className="text-sm text-muted-foreground">
                        GitHub
                      </span>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center p-4 border rounded-md hover:border-primary/50 transition-colors"
                    >
                      <Linkedin className="h-6 w-6 mb-2" />
                      <span className="text-sm text-muted-foreground">
                        LinkedIn
                      </span>
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center p-4 border rounded-md hover:border-primary/50 transition-colors"
                    >
                      <Twitter className="h-6 w-6 mb-2" />
                      <span className="text-sm text-muted-foreground">
                        Twitter
                      </span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
