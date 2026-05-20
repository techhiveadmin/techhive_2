import {
  ShieldCheck,
  Bug,
  Activity,
  Smartphone,
  Lock,
  GitBranch,
  Cpu,
  Target,
  TrendingUp,
  CheckCircle,
} from 'lucide-react';
import { ServicePageLayout } from './_layout/ServicePageLayout';

export default function QaAutomation() {
  return (
    <ServicePageLayout
      eyebrow="QA Automation Services"
      title={
        <>
          Production-grade QA automation for{' '}
          <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            banking and fintech
          </span>
        </>
      }
      subtitle="End-to-end automated testing that catches defects before your customers do — built for regulated, high-throughput financial platforms."
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920"
      overview={{
        eyebrow: 'Overview',
        heading: "Automation that's worthy of production",
        paragraphs: [
          "Banking platforms can't afford the kind of defects that mocked-up tests miss.",
          'TechHive builds automation suites that run against real-world transaction flows: card payments, account opening, transfers, reconciliation, KYC, and the dozen edge cases QA teams typically skip.',
          'The result: stable releases, fewer war rooms, and a regression suite that grows in value every sprint.',
        ],
      }}
      capabilities={{
        eyebrow: 'What We Automate',
        heading: 'Test coverage across the financial stack',
        items: [
          {
            icon: CheckCircle,
            title: 'UAT & Regression',
            description:
              'Automated business acceptance tests that run nightly — catching regressions before release branches go live.',
          },
          {
            icon: Cpu,
            title: 'API Testing',
            description:
              'REST, SOAP, and ISO 8583 message validation. Contract testing for microservices and partner integrations.',
          },
          {
            icon: Activity,
            title: 'E2E Transaction Flows',
            description:
              'Card authorisation, switching, settlement, reconciliation — full transaction lifecycle validation.',
          },
          {
            icon: TrendingUp,
            title: 'Performance & Load',
            description:
              "Peak-day simulations for high-throughput systems. Know your platform's limits before your customers do.",
          },
          {
            icon: Lock,
            title: 'Security Testing',
            description:
              'OWASP, PCI-DSS aligned scans built into pipelines. Static, dynamic, and dependency analysis.',
          },
          {
            icon: Smartphone,
            title: 'Mobile App Testing',
            description:
              'Real-device automation for iOS and Android banking apps — across OS versions, networks, and device profiles.',
          },
        ],
      }}
      whyUs={{
        eyebrow: 'Why TechHive',
        heading: 'QA built by people who ship financial platforms',
        items: [
          {
            icon: ShieldCheck,
            title: 'Banking Domain QA-First',
            description:
              'Engineers who already understand ISO 8583, 3DS, settlement windows, and reconciliation. No ramp-up tax.',
          },
          {
            icon: GitBranch,
            title: 'Pipeline-Native',
            description:
              "Automation integrated into your CI/CD — not run manually before each release. Fast feedback, every commit.",
          },
          {
            icon: Smartphone,
            title: 'Real Device Coverage',
            description:
              "Physical iOS and Android device labs. Emulator-only QA misses the bugs your customers actually hit.",
          },
          {
            icon: Target,
            title: 'Defect Leakage SLAs',
            description:
              "Measurable quality outcomes, not just coverage percentages. We commit to defect leakage targets and report against them.",
          },
        ],
      }}
      process={{
        eyebrow: 'How It Works',
        heading: 'From audit to ongoing operation',
        steps: [
          {
            number: '01',
            title: 'Audit',
            description: 'Assess current coverage, defect leakage, and pipeline maturity.',
          },
          {
            number: '02',
            title: 'Strategy',
            description: 'Prioritised automation roadmap aligned to your release cadence.',
          },
          {
            number: '03',
            title: 'Build',
            description: 'Automation suites integrated directly into your CI/CD.',
          },
          {
            number: '04',
            title: 'Operate',
            description: 'Ongoing maintenance, expansion, and quality reporting.',
          },
        ],
      }}
      cta={{
        heading: 'Tired of defects shipping to production?',
        subtitle:
          "Talk to our QA automation team. We'll audit your current setup and propose a plan that pays for itself in avoided incidents.",
        primaryText: 'Get a QA Audit',
      }}
    />
  );
}
