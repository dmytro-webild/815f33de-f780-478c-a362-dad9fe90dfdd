"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import LegalSection from '@/components/legal/LegalSection';

export default function CompliancePage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="compact"
        sizing="mediumSizeLargeTitles"
        background="aurora"
        cardStyle="outline"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "/" },
            { name: "About", id: "/#about" },
            { name: "Compliance", id: "/compliance" },
            { name: "Contact", id: "/#contact" },
            { name: "Join Now", id: "/join-now" },
          ]}
          brandName="UTlogistics"
          button={{ text: "Join Now", href: "/join-now" }}
        />

        <LegalSection
          layout="page"
          title="Compliance & Safety"
          subtitle="Our commitment to operational standards and regulatory excellence."
          sections={[
            {
              heading: "Regulatory Adherence",              content: { type: "paragraph", text: "UTlogistics strictly adheres to all FMCSA guidelines and DOT regulations. We maintain rigorous standards for vehicle maintenance, driver documentation, and hours-of-service compliance to ensure the highest levels of safety on the road." }
            },
            {
              heading: "Safety Protocols",              content: { type: "list", items: ["Monthly fleet safety audits", "Mandatory ELD training for all drivers", "Strict load securement verification", "Driver performance monitoring programs"] }
            },
            {
              heading: "Our Promise",              content: { type: "paragraph", text: "We prioritize the safety of our drivers and the public above all else. Our compliance program is not just about meeting legal requirements; it's about setting a benchmark for professional excellence in the logistics industry." }
            }
          ]}
        />

        <FooterBaseCard
          logoText="UTlogistics"
          columns={[
            { title: "Company", items: [{ label: "About Us", href: "/#about" }, { label: "Careers", href: "/#feature" }] },
            { title: "Resources", items: [{ label: "FAQ", href: "/#faq" }, { label: "Compliance", href: "/compliance" }] },
            { title: "Contact", items: [{ label: "Join Now", href: "/join-now" }] },
          ]}
          copyrightText="© 2025 UTlogistics. MC# 123456 | DOT# 654321"
        />
      </ReactLenis>
    </ThemeProvider>
  );
}