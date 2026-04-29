"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import LegalSection from '@/components/legal/LegalSection';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

export default function CompliancePage() {
  return (
    <ThemeProvider defaultButtonVariant="hover-magnetic" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <NavbarLayoutFloatingInline
          navItems={[{ name: "Home", id: "/" }, { name: "About Us", id: "/about" }, { name: "Careers", id: "/careers" }, { name: "FAQ", id: "/faq" }, { name: "Compliance", id: "/compliance" }, { name: "Join Now", id: "/join-now" }]}
          brandName="UTlogistics"
          button={{ text: "Get Started" }}
        />
        <LegalSection
          layout="page"
          title="Compliance & Safety"
          sections={[{ heading: "Operating Standards", content: [{ type: "paragraph", text: "We adhere to all DOT and safety regulations." }] }]}
        />
        <FooterBaseCard
          logoText="UTlogistics"
          columns={[{ title: "Company", items: [{ label: "About Us", href: "/about" }, { label: "Careers", href: "/careers" }] }, { title: "Resources", items: [{ label: "FAQ", href: "/faq" }, { label: "Compliance", href: "/compliance" }] }, { title: "Contact", items: [{ label: "Join Now", href: "/join-now" }] }]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}