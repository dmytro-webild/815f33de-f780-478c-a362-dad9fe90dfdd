"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { CheckCircle, DollarSign, Headphones, Truck } from "lucide-react";

export default function LandingPage() {
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
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Careers",
          id: "feature",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="UTlogistics"
      button={{
        text: "Drive for Us",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "plain",
      }}
      title="Scaling the Future of Freight."
      description="UTlogistics offers top-tier opportunities for CDL drivers and dispatchers. Join our partnership with Amazon Relay and drive success with us."
      buttons={[
        {
          text: "Drive for Us",
          href: "#contact",
        },
      ]}
      carouselItems={[
        {
          id: "1",
          imageSrc: "http://img.b2bpic.net/free-photo/transportation-truck-delivering-cargo-container-multiple-lane-highway-generative-ai_188544-8156.jpg",
          imageAlt: "semi truck highway sunrise",
        },
        {
          id: "2",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-equipped-computer-lab_23-2149241207.jpg",
          imageAlt: "logistics interface dashboard analytics",
        },
        {
          id: "3",
          imageSrc: "http://img.b2bpic.net/free-photo/truck-interior-dashboard-steering-wheel_23-2152009003.jpg",
          imageAlt: "truck cabin technology interior",
        },
        {
          id: "4",
          imageSrc: "http://img.b2bpic.net/free-photo/long-line-semi-trucks-industrial-loading-dock_84443-73903.jpg",
          imageAlt: "logistics hub aerial view",
        },
        {
          id: "5",
          imageSrc: "http://img.b2bpic.net/free-photo/men-looking-inside-truck-side-view_23-2149426537.jpg",
          imageAlt: "freight container loading",
        },
        {
          id: "6",
          imageSrc: "http://img.b2bpic.net/free-photo/shipping-logistics-with-truck-airplane-sunset_23-2151998717.jpg",
          imageAlt: "truck on highway motion blur",
        },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      metrics={[
        {
          id: "1",
          value: "99%",
          title: "On-Time Delivery",
          description: "Consistently meeting strict Amazon Relay schedules.",
          icon: CheckCircle,
        },
        {
          id: "2",
          value: "24/7",
          title: "Dispatch Support",
          description: "Always available for route optimization and help.",
          icon: Headphones,
        },
        {
          id: "3",
          value: "500+",
          title: "Loads Completed",
          description: "Robust load capacity every single month.",
          icon: Truck,
        },
        {
          id: "4",
          value: "$X,XXX",
          title: "Weekly Gross",
          description: "Top-tier earning potential per truck.",
          icon: DollarSign,
        },
      ]}
      title="Industry-Leading Reliability"
      description="We deliver efficiency and consistent growth for all our partners."
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="The Amazon Relay Advantage"
      description="We specialize in Amazon Relay efficiency. Experience the 'Drop & Hook' advantage and our commitment to 'No-Touch Freight.' Our modern equipment and technology-first approach streamline the logistics process for both drivers and dispatchers."
      imageSrc="http://img.b2bpic.net/free-photo/professional-female-driver-operating-vehicle_23-2150248780.jpg"
      imageAlt="logistics dispatch team working"
    />
  </div>

  <div id="feature" data-section="feature">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "For CDL Drivers",
          description: "Top-tier pay, modern 2022+ Freightliner fleet, and flexible home time guaranteed.",
          buttonIcon: "Truck",
          imageSrc: "http://img.b2bpic.net/free-photo/doctor-provides-cancer-screening-guidance-patient-office_482257-126373.jpg",
        },
        {
          title: "For Dispatchers",
          description: "High-volume load boards, performance-based commissions, and industry-leading TMS tools.",
          buttonIcon: "LayoutDashboard",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-photovoltaics-factory-expert-conducting-experiments-using-tablet_482257-117956.jpg",
        },
        {
          title: "Modern Equipment",
          description: "We maintain top-of-the-line Dry Vans and Reefers for efficient long-haul journeys.",
          buttonIcon: "Wrench",
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-female-courier-unloading-packages-from-delivery-truck_637285-2169.jpg",
        },
        {
          title: "Tech-First Dispatch",
          description: "Utilize advanced TMS tools to manage high-volume routes with ease and precision.",
          buttonIcon: "Cpu",
          imageSrc: "http://img.b2bpic.net/free-photo/truck-loading-port_1127-374.jpg",
        },
      ]}
      title="Dual-Path Careers"
      description="Explore roles that fit your expertise and goals."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      members={[
        {
          id: "1",
          name: "Sarah Miller",
          role: "Operations Manager",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-businesswoman-manager-talking-coworker-office-sitting-with-laptop_1258-194648.jpg",
        },
        {
          id: "2",
          name: "David Chen",
          role: "Head of Dispatch",
          imageSrc: "http://img.b2bpic.net/free-photo/working-businesswoman-taxi_329181-15250.jpg",
        },
        {
          id: "3",
          name: "Marcus Johnson",
          role: "Fleet Manager",
          imageSrc: "http://img.b2bpic.net/free-photo/delivery-driver-smiling-white-van_23-2151998675.jpg",
        },
      ]}
      title="Leadership Focused on Growth"
      description="Our team ensures that UTlogistics remains at the forefront of the logistics industry."
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="UTlogistics has been the most professional carrier I've driven for. The equipment is always in perfect condition and the dispatch support is genuinely there for you."
      rating={5}
      author="James Peterson"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/young-male-worker-standing-warehouse_107420-96552.jpg",
          alt: "truck driver portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-handsome-smiling-businessman-work-office_1163-5523.jpg",
          alt: "logistics dispatcher portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-positive-smiling-truck-serviceman-standing-by-truck-vehicle-workshop_342744-1300.jpg",
          alt: "truck driver confidence",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-man-with-helmet_23-2149214310.jpg",
          alt: "logistics manager professional",
        },
        {
          src: "http://img.b2bpic.net/free-photo/man-with-helmet-working-logistic_23-2148886821.jpg",
          alt: "transportation worker happy",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "What equipment do you operate?",
          content: "We primarily operate 2022+ Freightliners, alongside a well-maintained fleet of Dry Vans and Reefers.",
        },
        {
          id: "q2",
          title: "Are you partnered with Amazon Relay?",
          content: "Yes, we are a proud Amazon Relay partner, specializing in high-efficiency Drop & Hook freight.",
        },
        {
          id: "q3",
          title: "What are the driver perks?",
          content: "Top-tier pay, newer equipment, and flexible home-time policies designed with driver well-being in mind.",
        },
        {
          id: "q4",
          title: "How do I apply?",
          content: "Simply click the 'Drive for Us' button on our page, and fill out our streamlined contact form for a recruiter to get in touch.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/abstract-blur-shipping-crane-cargo-background_74190-4276.jpg"
      title="Common Questions"
      description="Learn more about our operations, equipment, and driver requirements."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Join UTlogistics"
      description="Ready to scale your career? Connect with us today."
      inputs={[
        {
          name: "fullName",
          type: "text",
          placeholder: "Full Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Phone Number",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Let us know your interest (Driver or Dispatcher).",
        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/aerial-view-bridge-creek-powerlines-with-cars-road_181624-24539.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="UTlogistics"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Careers",
              href: "#feature",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Compliance",
              href: "#",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Join Now",
              href: "#contact",
            },
          ],
        },
      ]}
      copyrightText="© 2025 UTlogistics. MC# 123456 | DOT# 654321"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
