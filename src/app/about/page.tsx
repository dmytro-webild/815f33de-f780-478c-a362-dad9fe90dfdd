"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

export default function AboutPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarLayoutFloatingInline
          navItems={[{ name: "Home", id: "/" }, { name: "About Us", id: "/about" }, { name: "Careers", id: "/careers" }, { name: "FAQ", id: "/faq" }, { name: "Compliance", id: "/compliance" }, { name: "Join Now", id: "/join-now" }]}
          brandName="UTlogistics"
        />
        <MediaAbout
          title="About UTlogistics"
          description="We are a premier partner of Amazon Relay, dedicated to excellence in logistics and supply chain management."
        />
        <FooterBaseCard
          logoText="UTlogistics"
          columns={[{ title: "Company", items: [{ label: "About Us", href: "/about" }, { label: "Careers", href: "/careers" }] }, { title: "Resources", items: [{ label: "FAQ", href: "/faq" }, { label: "Compliance", href: "/compliance" }] }, { title: "Contact", items: [{ label: "Join Now", href: "/join-now" }] }]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}