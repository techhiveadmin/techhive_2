import {
  Building2,
  Database,
  TrendingUp,
  CreditCard,
  ShieldAlert,
  ClipboardCheck,
  ShieldCheck,
  Activity,
  Users,
  Search,
} from 'lucide-react';
import { ServicePageLayout } from './_layout/ServicePageLayout';

export default function BankingSoftware() {
  return (
    <ServicePageLayout
      eyebrow="Banking Software Development"
      title={
        <>
          Banking software built for regulators,{' '}
          <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            scaled for customers
          </span>
        </>
      }
      subtitle="Secure, compliant, and resilient banking platforms — engineered for the realities of regulated financial institutions."
      heroImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920"
      overview={{
        eyebrow: 'Overview',
        heading: 'Engineered for the regulated reality of banking',
        paragraphs: [
          'Banks operate under constraints most product teams never see: capital reporting, AML obligations, audit trails, and disaster recovery commitments.',
          'TechHive builds banking software that respects those constraints from day one — not bolted on the week before a regulator visit.',
          'From digital channels to back-office automation, we deliver platforms your operations, compliance, and audit teams can all sign off on.',
        ],
      }}
      capabilities={{
        eyebrow: 'What We Build for Banks',
        heading: 'Channels, cores, and the systems behind them',
        items: [
          {
            icon: Building2,
            title: 'Internet & Mobile Banking',
            description:
              'Customer-facing channels with biometric authentication, transaction history, and self-service support.',
          },
          {
            icon: Database,
            title: 'Core Banking Modernisation',
            description:
              'Incremental migration off legacy cores — without the all-or-nothing risk of a big-bang rollout.',
          },
          {
            icon: TrendingUp,
            title: 'Treasury & Trading',
            description:
              'Real-time position keeping, limit management, settlement workflows for treasury operations.',
          },
          {
            icon: CreditCard,
            title: 'Card Management',
            description:
              'Issuing, tokenisation, controls, and dispute workflows for debit, credit, and prepaid programmes.',
          },
          {
            icon: ShieldAlert,
            title: 'AML & Compliance Tooling',
            description:
              'Sanctions screening, transaction monitoring, and SAR/STR workflows aligned to regulatory expectations.',
          },
          {
            icon: ClipboardCheck,
            title: 'Internal Banking Operations',
            description:
              'Workflow automation, audit dashboards, and reconciliation tools for back-office teams.',
          },
        ],
      }}
      whyUs={{
        eyebrow: 'Why TechHive',
        heading: 'Built to pass audits, not just demos',
        items: [
          {
            icon: ShieldCheck,
            title: 'Compliance-First Engineering',
            description:
              'Architectures designed with the regulator in the room. Audit posture is a design constraint, not an afterthought.',
          },
          {
            icon: Activity,
            title: 'Resilience as Default',
            description:
              'Disaster recovery, failover, and observability baked into every system — because uptime is the product.',
          },
          {
            icon: Users,
            title: 'Domain-Fluent Teams',
            description:
              'Analysts and engineers who speak banking. No long ramp-up explaining what a debit-credit ledger is.',
          },
          {
            icon: Search,
            title: 'Independent QA',
            description:
              'Separate, unbiased validation of every release. Vendor builds get genuine outside scrutiny.',
          },
        ],
      }}
      process={{
        eyebrow: 'How We Deliver',
        heading: 'Assessment to sustained operation',
        steps: [
          {
            number: '01',
            title: 'Assess',
            description: 'Current platform, regulatory posture, and gap analysis.',
          },
          {
            number: '02',
            title: 'Design',
            description: 'Secure, compliant, modular architecture with clear migration paths.',
          },
          {
            number: '03',
            title: 'Deliver',
            description: 'Staged rollouts with parallel testing and dual-running where needed.',
          },
          {
            number: '04',
            title: 'Sustain',
            description: 'Ongoing maintenance, audits, regulatory updates, and enhancements.',
          },
        ],
      }}
      cta={{
        heading: 'Modernising your bank?',
        subtitle:
          "Talk to a team that has done it before — without breaking compliance, customers, or your delivery deadlines.",
        primaryText: 'Schedule a Discovery Call',
      }}
    />
  );
}
