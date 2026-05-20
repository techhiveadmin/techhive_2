import {
  Wallet,
  Activity,
  UserCheck,
  Bell,
  Coins,
  ShieldAlert,
  ShieldCheck,
  Layers,
  FileCheck,
  Bug,
} from 'lucide-react';
import { ServicePageLayout } from './_layout/ServicePageLayout';

export default function QaFintech() {
  return (
    <ServicePageLayout
      eyebrow="Fintech QA Automation"
      title={
        <>
          QA automation built for{' '}
          <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            fintech edge cases
          </span>
        </>
      }
      subtitle="Specialised test automation for digital wallets, neobanks, lending platforms, and the financial workflows that simply can't fail."
      heroImage="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1920"
      overview={{
        eyebrow: 'Overview',
        heading: 'Fintech testing is not generic testing',
        paragraphs: [
          "Generic QA frameworks fall apart the moment your test data hits a real ledger. Balances need to reconcile. Transactions need to be idempotent. Notifications need to fire exactly once.",
          "TechHive builds fintech-aware automation that respects the constraints your platform actually operates under — money in, money out, audit trail intact, every time.",
          "From digital wallets to lending workflows, our test suites catch the regressions that matter before they reach customers or regulators.",
        ],
      }}
      capabilities={{
        eyebrow: 'What We Automate',
        heading: 'Coverage for the workflows that move money',
        items: [
          {
            icon: Wallet,
            title: 'Ledger Consistency',
            description:
              'Multi-step ledger transactions validated for balance integrity, audit trail, and double-spend prevention.',
          },
          {
            icon: Activity,
            title: 'P2P & Wallet Transactions',
            description:
              'Automated coverage of transfers, top-ups, withdrawals, and the long tail of edge cases that real users hit.',
          },
          {
            icon: UserCheck,
            title: 'KYC & Onboarding',
            description:
              'End-to-end automation of customer onboarding journeys — document, liveness, and sanctions screening.',
          },
          {
            icon: Bell,
            title: 'Notification & Event Bus',
            description:
              'Validation of webhooks, push notifications, and event-driven delivery across all transactional triggers.',
          },
          {
            icon: Coins,
            title: 'Multi-Currency & FX',
            description:
              'Rate handling, conversion accuracy, and regulator-compliant rounding rules tested across currency pairs.',
          },
          {
            icon: ShieldAlert,
            title: 'Fraud Detection Regression',
            description:
              'Continuous regression of fraud rules, scoring thresholds, and decisioning flows — without breaking detection.',
          },
        ],
      }}
      whyUs={{
        eyebrow: 'Why TechHive',
        heading: 'Fintech QA, not generic QA',
        items: [
          {
            icon: ShieldCheck,
            title: 'Fintech Domain QA-First',
            description:
              'Engineers fluent in wallets, ledgers, lending, and the regulator-aware design patterns behind them.',
          },
          {
            icon: Layers,
            title: 'Production-Realistic Test Data',
            description:
              'Synthetic data generators that mirror the messiness of real customer behaviour, not just happy-path scripts.',
          },
          {
            icon: FileCheck,
            title: 'Audit-Ready Evidence',
            description:
              'Every test run leaves a structured artefact — useful to your QA team, your auditor, and your regulator alike.',
          },
          {
            icon: Bug,
            title: 'Continuous Regression',
            description:
              'Suites that grow in value every sprint — defects caught once stay caught, not re-introduced under deadline pressure.',
          },
        ],
      }}
      process={{
        eyebrow: 'How It Works',
        heading: 'Audit to ongoing operation',
        steps: [
          { number: '01', title: 'Audit', description: 'Assess current coverage, defect leakage, and pipeline maturity.' },
          { number: '02', title: 'Strategy', description: 'Prioritised fintech automation roadmap aligned to release cadence.' },
          { number: '03', title: 'Build', description: 'Suites integrated into your CI/CD with fintech-specific data fixtures.' },
          { number: '04', title: 'Operate', description: 'Ongoing maintenance, expansion, and quality reporting.' },
        ],
      }}
      cta={{
        heading: 'Building or scaling a fintech platform?',
        subtitle:
          "Let our fintech QA team review your current setup and propose automation that catches the bugs your users notice first.",
        primaryText: 'Get a Fintech QA Audit',
      }}
    />
  );
}
