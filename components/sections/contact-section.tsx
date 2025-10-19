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
import { motion } from "framer-motion";

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
    <section id="contact" className="py-4">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-center gap-2 mb-2">
            <Mail className="h-5 w-5 text-cyan-400" />
            <h2 className="text-2xl md:text-3xl font-bold">Get in Touch</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            Open to opportunities and collaborations
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          <FadeIn delay={0.1}>
            <Card className="border-cyan-400/20 hover:border-cyan-400/40 transition-colors">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-3"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium">Full Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your full name"
                              className="bg-background/50 border-muted-foreground/20 focus:border-cyan-400"
                              {...field}
                            />
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
                          <FormLabel className="text-sm font-medium">Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your email"
                              className="bg-background/50 border-muted-foreground/20 focus:border-cyan-400"
                              {...field}
                            />
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
                          <FormLabel className="text-sm font-medium">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Write your message here..."
                              rows={5}
                              className="resize-none bg-background/50 border-muted-foreground/20 focus:border-cyan-400"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full gap-2 bg-cyan-400 hover:bg-cyan-500 text-black font-semibold"
                    >
                      Submit
                      <SendHorizontal className="h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="border-cyan-400/20 hover:border-cyan-400/40 transition-colors">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-4">
                  Contact Information
                </h3>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="h-5 w-5 text-cyan-400" />
                    <span className="font-medium">Email</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/30 border border-muted-foreground/20 rounded-lg hover:border-cyan-400/30 transition-colors">
                    <span className="text-sm text-muted-foreground">
                      princepal9120@gmail.com
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={copyEmail}
                      aria-label="Copy email"
                      className="hover:bg-cyan-400/10 hover:text-cyan-400"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-cyan-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="h-5 w-5 text-cyan-400" />
                    <span className="font-medium">Phone No</span>
                  </div>
                  <div className="p-2 bg-muted/30 border border-muted-foreground/20 rounded-lg">
                    <span className="text-sm text-muted-foreground">
                      +1 234 567 8900
                    </span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div>
                  <h4 className="font-medium mb-3">Follow me</h4>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/princepal9120"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-muted-foreground/20 rounded-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition-all"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href="https://linkedin.com/in/prince9120"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-muted-foreground/20 rounded-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition-all"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="https://twitter.com/prince_twets"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-muted-foreground/20 rounded-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition-all"
                    >
                      <Twitter className="h-5 w-5" />
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
