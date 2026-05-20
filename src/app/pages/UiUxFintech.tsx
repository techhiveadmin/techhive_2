import {
  Smartphone,
  UserCheck,
  CreditCard,
  LayoutDashboard,
  Palette,
  TrendingUp,
  ShieldCheck,
  Accessibility,
  Layers,
  GitBranch,
} from 'lucide-react';
import { ServicePageLayout } from './_layout/ServicePageLayout';

export default function UiUxFintech() {
  return (
    <ServicePageLayout
      eyebrow="Fintech UI/UX Design"
      title={
        <>
          UI/UX design built for fintech —{' '}
          <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            not retrofitted from generic templates
          </span>
        </>
      }
      subtitle="Design that earns trust, simplifies the complex, and converts — purpose-built for banking, payments, and financial products."
      heroImage="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1920"
      overview={{
        eyebrow: 'Overview',
        heading: 'Fintech UX is its own discipline',
        paragraphs: [
          "Designing a fintech product isn't designing a delivery app with money flows bolted on. Trust, clarity, regulation, and security shape every screen.",
          'TechHive UI/UX teams specialise in fintech: account opening, transaction histories, dispute flows, dashboards dense with numbers — the screens that decide whether customers feel confident or anxious.',
          'We design products that feel as safe as a bank and as easy as a chat app.',
        ],
      }}
      capabilities={{
        eyebrow: 'What We Design',
        heading: 'Across every surface of your fintech product',
        items: [
          {
            icon: Smartphone,
            title: 'Mobile Banking Apps',
            description:
              'Accounts, transfers, statements, support — designed for one-handed use and accessibility by default.',
          },
          {
            icon: UserCheck,
            title: 'Onboarding & KYC',
            description:
              'Frictionless yet compliant journeys — drop-offs cut without compromising regulatory needs.',
          },
          {
            icon: CreditCard,
            title: 'Payments & Checkout',
            description:
              'High-conversion checkout flows tuned for your acquirers, schemes, and 3DS journeys.',
          },
          {
            icon: LayoutDashboard,
            title: 'Dashboards & Back Office',
            description:
              'Dense, numeric data made readable for ops, risk, and finance teams.',
          },
          {
            icon: Palette,
            title: 'Design Systems',
            description:
              'Fintech-grade tokens, components, and governance — design that scales with the team.',
          },
          {
            icon: TrendingUp,
            title: 'Wealth & Investor Products',
            description:
              'Portfolio views, risk visualisations, and trading interfaces that respect user expertise.',
          },
        ],
      }}
      whyUs={{
        eyebrow: 'Why TechHive',
        heading: 'Designers who already speak fintech',
        items: [
          {
            icon: ShieldCheck,
            title: 'Fintech-Specialised Designers',
            description:
              "Not generalists figuring out finance for the first time. Our team has shipped wallets, banking apps, and trading platforms.",
          },
          {
            icon: Layers,
            title: 'Compliance-Aware Design',
            description:
              'KYC, AML, disclosures, consent — patterns designed to satisfy compliance and customers simultaneously.',
          },
          {
            icon: Accessibility,
            title: 'Built-In Accessibility',
            description:
              "WCAG 2.2 AA as a baseline, not a fix-it-later sprint. Inclusive by default.",
          },
          {
            icon: GitBranch,
            title: 'Engineering-Coupled Handover',
            description:
              "Design systems that ship — coupled to your engineering stack, not just a pretty Figma file.",
          },
        ],
      }}
      process={{
        eyebrow: 'How We Deliver',
        heading: 'Discovery to engineering handover',
        steps: [
          {
            number: '01',
            title: 'Discover',
            description: 'Users, business goals, and regulatory constraints mapped together.',
          },
          {
            number: '02',
            title: 'Design',
            description: 'Flows, wireframes, hi-fi, prototype, and validation with real users.',
          },
          {
            number: '03',
            title: 'System',
            description: 'Design system, tokens, components, and governance for scale.',
          },
          {
            number: '04',
            title: 'Ship',
            description: 'Engineering handover, QA pairing, and post-launch iteration.',
          },
        ],
      }}
      cta={{
        heading: "Designing a fintech product?",
        subtitle:
          "Let's talk about how a fintech-specialised design team can elevate your customer experience.",
        primaryText: 'Start a Design Engagement',
      }}
    />
  );
}
