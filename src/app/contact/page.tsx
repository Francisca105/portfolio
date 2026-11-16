import type { Metadata } from "next";
import { ContactView } from "@/components/contact/contact-view";
import { PageTransition } from "@/components/page-transition";
import { getPortfolioData } from "@/lib/get-portfolio-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Francisca Almeida: email, GitHub and LinkedIn.",
};

export default function ContactPage() {
  const data = getPortfolioData();

  return (
    <PageTransition>
      <ContactView data={data} />
    </PageTransition>
  );
}
