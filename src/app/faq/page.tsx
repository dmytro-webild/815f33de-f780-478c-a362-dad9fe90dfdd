"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

export default function FAQPage() {
  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <NavbarLayoutFloatingInline
          navItems={[{ name: "Home", id: "/" }, { name: "About Us", id: "/about" }, { name: "Careers", id: "/careers" }, { name: "FAQ", id: "/faq" }, { name: "Compliance", id: "/compliance" }, { name: "Join Now", id: "/join-now" }]}
          brandName="UTlogistics"
          button={{ text: "Get Started" }}
        />
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about working with us."
          faqs={[{ id: "1", title: "How do I join?", content: "Apply through our Join Now page." }, { id: "2", title: "Are there benefits?", content: "Yes, comprehensive benefits packages are included." }]} 
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
        <FooterBaseCard
          logoText="UTlogistics"
          columns={[{ title: "Company", items: [{ label: "About Us", href: "/about" }, { label: "Careers", href: "/careers" }] }, { title: "Resources", items: [{ label: "FAQ", href: "/faq" }, { label: "Compliance", href: "/compliance" }] }, { title: "Contact", items: [{ label: "Join Now", href: "/join-now" }] }]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}