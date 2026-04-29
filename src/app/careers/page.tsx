"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Truck, LayoutDashboard, Wrench, Cpu } from "lucide-react";

export default function CareersPage() {
  return (
    <ThemeProvider>
      <ReactLenis root>
        <NavbarLayoutFloatingInline
          navItems={[{ name: "Home", id: "/" }, { name: "About Us", id: "/about" }, { name: "Careers", id: "/careers" }, { name: "FAQ", id: "/faq" }, { name: "Compliance", id: "/compliance" }, { name: "Join Now", id: "/join-now" }]}
          brandName="UTlogistics"
        />
        <FeatureCardTwentySix
          title="Join Our Team"
          description="Explore high-impact career opportunities with a growing logistics leader."
          features={[
            { title: "Driver Roles", description: "Competitive pay and benefits.", buttonIcon: Truck },
            { title: "Dispatch Roles", description: "Performance-based growth.", buttonIcon: LayoutDashboard },
            { title: "Technician Roles", description: "Maintaining top-tier fleets.", buttonIcon: Wrench },
            { title: "Logistics Analyst", description: "Data-driven operations.", buttonIcon: Cpu }
          ]}
        />
        <FooterBaseCard
          logoText="UTlogistics"
          columns={[{ title: "Company", items: [{ label: "About Us", href: "/about" }, { label: "Careers", href: "/careers" }] }, { title: "Resources", items: [{ label: "FAQ", href: "/faq" }, { label: "Compliance", href: "/compliance" }] }, { title: "Contact", items: [{ label: "Join Now", href: "/join-now" }] }]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}