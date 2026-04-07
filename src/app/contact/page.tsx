"use client";

import { useData } from "@/hooks/use-data";
import { Loading } from "@/components/loading";
import { PageTransition } from "@/components/page-transition";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Copy, Check, Github, Linkedin, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const { data, isLoading, isError } = useData();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    if (data) {
      await navigator.clipboard.writeText(data.basics.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (isLoading) return <Loading />;
  if (isError || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">
          Failed to load data. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-3xl mx-auto w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              {"Let's Connect"}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              {"I'm always open to discussing new opportunities, collaborations, or just having a chat about tech."}
            </p>
          </motion.div>

          {/* Main Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                {/* Email Section */}
                <motion.button
                  onClick={copyEmail}
                  className="w-full p-8 sm:p-12 text-center hover:bg-primary/5 transition-colors cursor-pointer group"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <Mail className="h-8 w-8" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Click to copy email
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors break-all">
                    {data.basics.contact.email}
                  </h2>
                  <div className="mt-4 flex items-center justify-center gap-2 text-primary">
                    {copied ? (
                      <>
                        <Check className="h-5 w-5" />
                        <span className="font-medium">Copied to clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-5 w-5" />
                        <span className="font-medium">Copy email</span>
                      </>
                    )}
                  </div>
                </motion.button>

                {/* Divider */}
                <div className="border-t border-border/50" />

                {/* Location */}
                <div className="p-6 text-center">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <MapPin className="h-5 w-5" />
                    <span>{data.basics.contact.location}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border/50" />

                {/* Social Links */}
                <div className="p-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto gap-3"
                  >
                    <a
                      href={data.basics.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-6 w-6" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto gap-3"
                  >
                    <a
                      href={data.basics.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-6 w-6" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground">
              Prefer a formal introduction?{" "}
              <a
                href="/cv.pdf"
                download
                className="text-primary hover:underline"
              >
                Download my CV
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
