import {
  Wallet,
  CreditCard,
  Banknote,
  Database,
  Network,
  ShieldAlert,
  ShieldCheck,
  FileCheck,
  Layers,
  Cpu,
} from 'lucide-react';
import { ServicePageLayout } from './_layout/ServicePageLayout';

export default function FintechSoftware() {
  return (
    <ServicePageLayout
      eyebrow="Fintech Software Development"
      title={
        <>
          Build fintech platforms that{' '}
          <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            scale with your customers
          </span>
        </>
      }
      subtitle="End-to-end fintech software development for banks, NBFIs, payment companies, and digital-first financial startups."
      heroImage="https://images.unsplash.com/photo-1763568258330-039d2f3dfc76?auto=format&fit=crop&q=80&w=1920"
      overview={{
        eyebrow: 'Overview',
        heading: 'From MVP to multi-million-transaction platforms',
        paragraphs: [
          'Fintech engineering is unforgiving. One mishandled edge case can mean a regulatory finding, a fraud loss, or a customer who never returns.',
          'TechHive builds platforms with that reality baked in: secure-by-default architectures, audit-ready logging, and the kind of test discipline that financial regulators expect.',
          "Whether you're launching a digital wallet or modernising a core banking stack, our teams have built it before.",
        ],
      }}
      capabilities={{
        eyebrow: 'What We Build',
        heading: 'Fintech platforms across every category',
        items: [
          {
            icon: Wallet,
            title: 'Digital Wallets & Neobanking',
            description:
              'Onboarding, KYC, ledgers, balances, P2P transfers — the full customer-facing wallet stack.',
          },
          {
            icon: CreditCard,
            title: 'Payment Platforms',
            description:
              'Switching, acquiring, settlement, and reconciliation — built around ISO 8583 and modern APIs.',
          },
          {
            icon: Banknote,
            title: 'Lending & Credit',
            description:
              'Origination, decisioning, disbursement, and collections — with audit-ready data trails.',
          },
          {
            icon: Database,
            title: 'Core Banking Modernisation',
            description:
              'Incremental migration off legacy cores, with API enablement and zero-downtime rollouts.',
          },
          {
            icon: Network,
            title: 'Open Banking & APIs',
            description:
              'PSD2-style APIs, data-sharing platforms, and developer portals built for partners and aggregators.',
          },
          {
            icon: ShieldAlert,
            title: 'Fraud & Risk',
            description:
              'Real-time scoring, rules engines, and case management — purpose-built for financial fraud.',
          },
        ],
      }}
      whyUs={{
        eyebrow: 'Why TechHive',
        heading: 'Engineering that respects financial reality',
        items: [
          {
            icon: ShieldCheck,
            title: 'Regulator-Aware Engineering',
            description:
              'Secure-by-default architectures. Every design decision tested against the compliance bar from day one.',
          },
          {
            icon: Cpu,
            title: 'Production-Tested Patterns',
            description:
              "We've shipped what you're about to build. We bring the lessons learned, not just frameworks.",
          },
          {
            icon: Layers,
            title: 'ISO Message Fluency',
            description:
              'ISO 8583, ISO 20022, SWIFT formats handled by engineers who treat them as a first language.',
          },
          {
            icon: FileCheck,
            title: 'Built for Audit',
            description:
              'Every transaction logged, traceable, and replayable. Audit and reconciliation teams sleep better.',
          },
        ],
      }}
      process={{
        eyebrow: 'How We Deliver',
        heading: 'Discovery to live production',
        steps: [
          {
            number: '01',
            title: 'Discovery',
            description: 'Business model, compliance scope, integration points, success metrics.',
          },
          {
            number: '02',
            title: 'Architect',
            description: 'Secure, scalable, audit-ready blueprint with clear delivery milestones.',
          },
          {
            number: '03',
            title: 'Build',
            description: 'Agile delivery with embedded QA, security, and DevOps from sprint one.',
          },
          {
            number: '04',
            title: 'Launch',
            description: 'Production handover, monitoring, and ongoing iteration support.',
          },
        ],
      }}
      cta={{
        heading: "Have a fintech platform to build?",
        subtitle:
          "Whether it's an MVP or a multi-region modernisation, we'd love to scope it with you.",
        primaryText: 'Start a Conversation',
      }}
    />
  );
}
