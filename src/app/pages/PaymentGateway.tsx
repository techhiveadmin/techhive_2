import {
  CreditCard,
  ShieldCheck,
  Globe,
  RefreshCw,
  FileSpreadsheet,
  ShieldAlert,
  Lock,
  Network,
  ClipboardCheck,
  AlertCircle,
} from 'lucide-react';
import { ServicePageLayout } from './_layout/ServicePageLayout';

export default function PaymentGateway() {
  return (
    <ServicePageLayout
      eyebrow="Payment Gateway Integration"
      title={
        <>
          Payment gateway integration{' '}
          <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            done right the first time
          </span>
        </>
      }
      subtitle="Secure, PCI-compliant payment integrations for web, mobile, and omnichannel platforms — built by engineers who have shipped payment flows in production."
      heroImage="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=1920"
      overview={{
        eyebrow: 'Overview',
        heading: 'Payments are harder than they look',
        paragraphs: [
          'Card payment integrations look simple in the SDK docs — and then 3DS challenges fail silently, refunds get stuck in reconciliation, and a settlement-day outage costs you customers.',
          'TechHive engineers have integrated dozens of gateways across acquirers, switches, and global PSPs. We know where the corners cut.',
          'We deliver integrations that handle the happy path, the edge cases, and the audit trail your finance team needs.',
        ],
      }}
      capabilities={{
        eyebrow: 'What We Integrate',
        heading: 'Card payments, alternative methods, and everything in between',
        items: [
          {
            icon: CreditCard,
            title: 'Card Acquiring & Tokenisation',
            description:
              'Visa, Mastercard, Amex, and regional schemes — with network tokenisation and vaulting support.',
          },
          {
            icon: ShieldCheck,
            title: '3D Secure 2',
            description:
              'Frictionless flows, challenge handling, and exemption logic that maximise approval rates.',
          },
          {
            icon: Globe,
            title: 'Alternative Payments',
            description:
              'Wallets, account-to-account, buy-now-pay-later, and QR-based payments across regions.',
          },
          {
            icon: RefreshCw,
            title: 'Recurring & Subscription',
            description:
              'Vaulting, intelligent retries, dunning workflows, and lifecycle event handling.',
          },
          {
            icon: FileSpreadsheet,
            title: 'Reconciliation & Reporting',
            description:
              'Daily settlement matching, exception handling, and finance-grade reports out of the box.',
          },
          {
            icon: ShieldAlert,
            title: 'Fraud & Risk Integration',
            description:
              'Real-time scoring, 3DS routing decisions, and rules engines tuned to your risk appetite.',
          },
        ],
      }}
      whyUs={{
        eyebrow: 'Why TechHive',
        heading: "We've shipped payments. We know the corners.",
        items: [
          {
            icon: Lock,
            title: 'PCI-DSS Aware Engineering',
            description:
              'Scope-minimising integrations by design. We reduce your PCI footprint without reducing your capability.',
          },
          {
            icon: Network,
            title: 'Multi-Acquirer Experience',
            description:
              'Local schemes, international PSPs, and direct switch integrations — fluent across the landscape.',
          },
          {
            icon: ClipboardCheck,
            title: 'Built for Reconciliation',
            description:
              'Clean, structured audit trails. Your finance team will thank you.',
          },
          {
            icon: AlertCircle,
            title: 'Failure-Mode Tested',
            description:
              'Timeouts, retries, idempotency, partial failures — every edge handled, not assumed away.',
          },
        ],
      }}
      process={{
        eyebrow: 'How We Deliver',
        heading: 'From gateway selection to live transactions',
        steps: [
          {
            number: '01',
            title: 'Scope',
            description: 'Gateway selection, PCI scope, and integration points mapped.',
          },
          {
            number: '02',
            title: 'Build',
            description: 'Integration with comprehensive automated tests from sprint one.',
          },
          {
            number: '03',
            title: 'Certify',
            description: 'UAT with gateway partner, security validation, and PCI evidence.',
          },
          {
            number: '04',
            title: 'Launch',
            description: 'Staged go-live with reconciliation monitoring and live tuning.',
          },
        ],
      }}
      cta={{
        heading: 'Need a payment integration that just works?',
        subtitle:
          "Tell us which gateway, which channels, and which markets — we'll scope it and start shipping.",
        primaryText: 'Scope My Integration',
      }}
    />
  );
}
