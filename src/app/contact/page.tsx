import { ContactView } from "@/components/contact/contact-view";
import { PageTransition } from "@/components/page-transition";
import { getPortfolioData } from "@/lib/get-portfolio-data";

export default function ContactPage() {
  const data = getPortfolioData();

  return (
    <PageTransition>
      <ContactView data={data} />
    </PageTransition>
  );
}
