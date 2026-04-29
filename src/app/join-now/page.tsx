"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

export default function JoinNowPage() {
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
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
            navItems={[
              { name: "Home", id: "/" },
              { name: "About", id: "/about" },
              { name: "Careers", id: "/careers" },
              { name: "Contact", id: "/contact" },
              { name: "Join Now", id: "/join-now" },
            ]}
            brandName="UTlogistics"
            button={{ text: "Join Now", href: "/join-now" }}
          />
        </div>

        <div id="contact" data-section="contact" style={{ paddingTop: "100px" }}>
          <ContactSplitForm
            useInvertedBackground={true}
            title="Join UTlogistics"
            description="Complete the form below to start your journey with us."
            inputs={[
              { name: "fullName", type: "text", placeholder: "Full Name", required: true },
              { name: "email", type: "email", placeholder: "Email Address", required: true },
              { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            ]}
            textarea={{ name: "message", placeholder: "Let us know your interest (Driver or Dispatcher).", rows: 4 }}
            imageSrc="http://img.b2bpic.net/free-photo/aerial-view-bridge-creek-powerlines-with-cars-road_181624-24539.jpg"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="UTlogistics"
            columns={[
              { title: "Company", items: [{ label: "About Us", href: "/about" }, { label: "Careers", href: "/careers" }] },
              { title: "Resources", items: [{ label: "FAQ", href: "/faq" }, { label: "Compliance", href: "#" }] },
              { title: "Contact", items: [{ label: "Join Now", href: "/join-now" }] },
            ]}
            copyrightText="© 2025 UTlogistics. MC# 123456 | DOT# 654321"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}