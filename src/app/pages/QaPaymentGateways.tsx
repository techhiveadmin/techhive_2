import {
  Cpu,
  ShieldCheck,
  RefreshCw,
  FileSpreadsheet,
  Network,
  AlertCircle,
  CreditCard,
  Lock,
  Layers,
  Target,
} from 'lucide-react';
import { ServicePageLayout } from './_layout/ServicePageLayout';

export default function QaPaymentGateways() {
  return (
    <ServicePageLayout
      eyebrow="Payment Gateway Testing"
      title={
        <>
          Test payment integrations like you'll{' '}
          <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            run them in production
          </span>
        </>
      }
      subtitle="End-to-end QA automation for card payments, 3DS flows, refunds, settlements, and reconciliation — across acquirers, switches, and PSPs."
      heroImage="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=1920"
      overview={{
        eyebrow: 'Overview',
        heading: 'Payment QA where it actually breaks',
        paragraphs: [
          "Payment integrations rarely break on the happy path. They break on the 3DS challenge that times out, the refund that doesn't reconcile, the retry that doubles a charge.",
          "TechHive builds automation suites that target exactly those edge cases — across ISO 8583 messages, 3DS 2 flows, multi-acquirer routing, and the long tail of failure modes that production reveals.",
          "The result: fewer escalations from finance, fewer chargebacks from confused customers, and a release process that doesn't hold its breath every settlement window.",
        ],
      }}
      capabilities={{
        eyebrow: 'What We Test',
        heading: 'The full payment lifecycle',
        items: [
          {
            icon: Cpu,
            title: 'ISO 8583 Message Validation',
            description:
              'Field-level, message-type, and network-level testing — including stand-in, reversal, and partial-approval flows.',
          },
          {
            icon: ShieldCheck,
            title: '3D Secure 2 Flows',
            description:
              'Frictionless and challenge journeys, exemption logic, fallback handling — across issuers and schemes.',
          },
          {
            icon: RefreshCw,
            title: 'Refunds & Reversals',
            description:
              'Partial, full, time-bounded, and cross-day refund scenarios with reconciliation impact verified.',
          },
          {
            icon: FileSpreadsheet,
            title: 'Reconciliation Testing',
            description:
              'Daily settlement matching, exception handling, and finance-grade reports validated end-to-end.',
          },
          {
            icon: Network,
            title: 'Multi-Acquirer Routing',
            description:
              'Routing rules, fallback logic, and cost-optimisation paths tested across acquirer combinations.',
          },
          {
            icon: AlertCircle,
            title: 'Idempotency & Retries',
            description:
              'Network failures, duplicate prevention, partial-failure scenarios — the tests that prevent double charges.',
          },
        ],
      }}
      whyUs={{
        eyebrow: 'Why TechHive',
        heading: 'Payment QA built by engineers who ship payments',
        items: [
          {
            icon: CreditCard,
            title: 'Multi-Gateway Experience',
            description:
              "We've tested integrations across Visa, Mastercard, regional schemes, PSPs, and direct switch links. We know where the corners cut.",
          },
          {
            icon: Lock,
            title: 'PCI-DSS Aware',
            description:
              'Test design that respects PCI scope — no PANs floating in test fixtures, no audit findings waiting to happen.',
          },
          {
            icon: Layers,
            title: 'ISO Message Fluency',
            description:
              'Engineers who treat ISO 8583 and ISO 20022 as a first language, not a specification to be learned mid-sprint.',
          },
          {
            icon: Target,
            title: 'Edge-Case Obsession',
            description:
              "We hunt for the failure modes you haven't thought of yet — and codify them into your regression suite.",
          },
        ],
      }}
      process={{
        eyebrow: 'How It Works',
        heading: 'Scope to live transactions',
        steps: [
          { number: '01', title: 'Scope', description: 'Gateway, schemes, channels, and certification requirements mapped.' },
          { number: '02', title: 'Strategy', description: 'Test plan covering happy path, edge cases, and certification flows.' },
          { number: '03', title: 'Build', description: 'Automated suites integrated into CI/CD with gateway-specific fixtures.' },
          { number: '04', title: 'Operate', description: 'Ongoing certification cycles, scheme updates, and regression growth.' },
        ],
      }}
      cta={{
        heading: 'Worried about your next payment release?',
        subtitle:
          "Get a payment-specific QA review. We'll show you the failure modes your current suite doesn't cover.",
        primaryText: 'Review My Payment QA',
      }}
    />
  );
}
