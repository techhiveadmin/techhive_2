import {
  Database,
  Smartphone,
  CreditCard,
  TrendingUp,
  FileCheck,
  RefreshCw,
  ShieldCheck,
  Activity,
  Search,
  ClipboardCheck,
} from 'lucide-react';
import { ServicePageLayout } from './_layout/ServicePageLayout';

export default function QaBanking() {
  return (
    <ServicePageLayout
      eyebrow="Banking QA Automation"
      title={
        <>
          QA automation for{' '}
          <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            banking platforms
          </span>
        </>
      }
      subtitle="Automated testing for core banking, customer channels, and back-office systems — built with the audit trail your compliance team needs."
      heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920"
      overview={{
        eyebrow: 'Overview',
        heading: 'QA worthy of a regulated bank',
        paragraphs: [
          "Banking releases happen under more scrutiny than most software ever sees. Operations, compliance, audit, and the regulator all have opinions — and rightly so.",
          "TechHive builds banking automation suites that respect those constraints from sprint one. Tests aren't just about catching bugs; they're about producing the evidence trail that gets a release signed off.",
          "From core banking regression to mobile channels to back-office workflows, we cover the surfaces that customers touch and the systems regulators ask about.",
        ],
      }}
      capabilities={{
        eyebrow: 'What We Automate',
        heading: 'Coverage from core to channels',
        items: [
          {
            icon: Database,
            title: 'Core Banking Regression',
            description:
              'Day-end batches, postings, EOD reports, and core-to-channel integrations — automated and continuously validated.',
          },
          {
            icon: Smartphone,
            title: 'Internet & Mobile Banking E2E',
            description:
              'Logins, transfers, statements, beneficiary management — across web, iOS, and Android with real-device coverage.',
          },
          {
            icon: CreditCard,
            title: 'Card Management Testing',
            description:
              'Issuing, activation, controls, limits, and dispute workflows tested across debit, credit, and prepaid programmes.',
          },
          {
            icon: TrendingUp,
            title: 'Treasury & Limits',
            description:
              'Position management, limit breaches, and settlement validation — including ISO 20022 message flows.',
          },
          {
            icon: FileCheck,
            title: 'Audit Trail Verification',
            description:
              'Every transaction logged correctly, timestamps consistent, and trails reconcilable under regulatory review.',
          },
          {
            icon: RefreshCw,
            title: 'DR & Failover Drills',
            description:
              'Automated resilience tests — confirm your bank stays online when components fail, not just when everything works.',
          },
        ],
      }}
      whyUs={{
        eyebrow: 'Why TechHive',
        heading: 'QA that thinks like the regulator does',
        items: [
          {
            icon: ShieldCheck,
            title: 'Compliance-First QA',
            description:
              'Test design starts with the audit posture — coverage chosen to satisfy regulators, not just QA dashboards.',
          },
          {
            icon: Activity,
            title: 'Resilience Validation',
            description:
              'Failover, DR, and chaos scenarios automated — because the regulator will ask about your DR posture eventually.',
          },
          {
            icon: Search,
            title: 'Independent Validation',
            description:
              'Separate, unbiased validation of vendor-built core platforms — outside scrutiny your in-house team can\'t provide.',
          },
          {
            icon: ClipboardCheck,
            title: 'Banking-Domain Engineers',
            description:
              'QA engineers who already speak ledgers, GL postings, and ISO message formats — no long ramp-up tax.',
          },
        ],
      }}
      process={{
        eyebrow: 'How It Works',
        heading: 'Assessment to sustained quality',
        steps: [
          { number: '01', title: 'Assess', description: 'Current coverage, defect leakage, regulatory posture, and pipeline gaps.' },
          { number: '02', title: 'Strategy', description: 'Banking-aware automation roadmap aligned to release windows and audits.' },
          { number: '03', title: 'Build', description: 'Suites integrated into your CI/CD with audit-grade evidence outputs.' },
          { number: '04', title: 'Operate', description: 'Ongoing maintenance, regulatory updates, and quality reporting.' },
        ],
      }}
      cta={{
        heading: 'Modernising or hardening your bank platform?',
        subtitle:
          "Talk to a QA team that has done it before — without compromising compliance, customers, or your release deadlines.",
        primaryText: 'Schedule a Banking QA Review',
      }}
    />
  );
}
