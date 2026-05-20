import {
  CheckCircle,
  Network,
  FileCheck,
  ShieldCheck,
  AlertCircle,
  Bell,
  Cpu,
  Globe,
  Layers,
  Target,
} from 'lucide-react';
import { ServicePageLayout } from './_layout/ServicePageLayout';

export default function QaOpenBanking() {
  return (
    <ServicePageLayout
      eyebrow="Open Banking API Testing"
      title={
        <>
          API testing for{' '}
          <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            open banking and PSD2-style platforms
          </span>
        </>
      }
      subtitle="Automated validation of consent, accounts, payments, and identity APIs — across conformance, performance, and security."
      heroImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1920"
      overview={{
        eyebrow: 'Overview',
        heading: 'Open banking testing, end to end',
        paragraphs: [
          "Open banking APIs aren't just another REST surface. Consent lifecycles, strong customer authentication, and conformance to standards like OBIE, Berlin Group, or FAPI 2.0 add layers no generic API testing tool handles well.",
          "TechHive builds automation that treats open banking with the seriousness it deserves — covering happy paths, regulatory exemptions, idempotency, and the security postures regulators expect.",
          "Whether you're a bank exposing APIs or a TPP consuming them, our suites give you continuous confidence in conformance.",
        ],
      }}
      capabilities={{
        eyebrow: 'What We Test',
        heading: 'Across consent, accounts, payments, and identity',
        items: [
          {
            icon: CheckCircle,
            title: 'Consent Flow Automation',
            description:
              'Authorisation, consent grants, revocation, and lifecycle expiry — tested across user journeys and edge cases.',
          },
          {
            icon: Network,
            title: 'AISP / PISP / CBPII Coverage',
            description:
              'Account information, payment initiation, and confirmation of funds endpoints — full role-based coverage.',
          },
          {
            icon: FileCheck,
            title: 'Spec Conformance',
            description:
              'OBIE, Berlin Group, FAPI 2.0, and STET conformance suites — automated regression against the latest spec versions.',
          },
          {
            icon: ShieldCheck,
            title: 'Strong Customer Authentication',
            description:
              'SCA flows, exemption logic (low-value, trusted beneficiaries), and re-authentication scenarios validated.',
          },
          {
            icon: AlertCircle,
            title: 'Idempotency & Rate Limits',
            description:
              'Idempotency-key handling, rate-limit headers, and throttling behaviour tested under realistic load.',
          },
          {
            icon: Bell,
            title: 'Webhook & Callback Validation',
            description:
              'Signed callbacks, delivery retries, signature verification — the surfaces that fail silently in production.',
          },
        ],
      }}
      whyUs={{
        eyebrow: 'Why TechHive',
        heading: "API testing by engineers who've built open banking",
        items: [
          {
            icon: Cpu,
            title: 'Spec-Fluent Engineers',
            description:
              'QA engineers who read OBIE specs the way most read documentation — fluently, and with strong opinions about ambiguity.',
          },
          {
            icon: Globe,
            title: 'Multi-Standard Coverage',
            description:
              'Whether your APIs follow OBIE, Berlin Group, STET, or FAPI 2.0 — our team has tested them all.',
          },
          {
            icon: Layers,
            title: 'Contract-First Approach',
            description:
              'OpenAPI / JSON Schema validation built into every test run — catch contract drift before consumers notice.',
          },
          {
            icon: Target,
            title: 'Security-Aware Testing',
            description:
              'OAuth 2.0, mTLS, JWS signing — security primitives tested as first-class concerns, not afterthoughts.',
          },
        ],
      }}
      process={{
        eyebrow: 'How It Works',
        heading: 'Audit to continuous conformance',
        steps: [
          { number: '01', title: 'Audit', description: 'Current API coverage, conformance posture, and consumer integrations mapped.' },
          { number: '02', title: 'Strategy', description: 'Test plan aligned to your standard (OBIE / Berlin Group / FAPI) and roadmap.' },
          { number: '03', title: 'Build', description: 'Automated conformance, security, and performance suites integrated into CI/CD.' },
          { number: '04', title: 'Operate', description: 'Ongoing regression as specs evolve and consumer surface grows.' },
        ],
      }}
      cta={{
        heading: 'Exposing or consuming open banking APIs?',
        subtitle:
          "Let us audit your API testing posture and propose a conformance suite that keeps you ahead of regulator change.",
        primaryText: 'Get an Open Banking QA Audit',
      }}
    />
  );
}
