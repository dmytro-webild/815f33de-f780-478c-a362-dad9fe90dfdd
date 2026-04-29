"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';

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

        <div className="pt-32 pb-20">
          <ContactSplitForm
            useInvertedBackground={true}
            title="Start Your Career Today"
            description="Join our growing team of professionals and start driving success with UTlogistics. Fill out the application below to get started."
            inputs={[
              { name: "fullName", type: "text", placeholder: "Full Name", required: true },
              { name: "email", type: "email", placeholder: "Email Address", required: true },
              { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
              { name: "experience", type: "text", placeholder: "CDL Class / Years of Experience", required: true },
            ]}
            textarea={{ name: "message", placeholder: "Tell us about your background and why you want to join UTlogistics.", rows: 4 }}
            imageSrc="http://img.b2bpic.net/free-photo/truck-driver-holding-truck-key-parking_23-2148858277.jpg"
            imageAlt="truck driver application"
          />
        </div>

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