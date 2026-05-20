import {
  Smartphone,
  Wallet,
  CreditCard,
  Fingerprint,
  Bell,
  Wifi,
  ShieldCheck,
  Lock,
  CheckCircle,
  Activity,
} from 'lucide-react';
import { ServicePageLayout } from './_layout/ServicePageLayout';

export default function MobileFintech() {
  return (
    <ServicePageLayout
      eyebrow="Fintech Mobile App Development"
      title={
        <>
          Mobile banking and fintech apps{' '}
          <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            customers actually want to use
          </span>
        </>
      }
      subtitle="Native iOS, Android, and cross-platform fintech apps — built with the security, performance, and polish your customers expect."
      heroImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1920"
      overview={{
        eyebrow: 'Overview',
        heading: 'Mobile is where fintech is won or lost',
        paragraphs: [
          'Customers compare your mobile app to the best app on their phone, not the best bank. The bar is consumer-grade, every time.',
          'TechHive builds fintech mobile apps that meet that bar — fast, secure, accessible, and resilient on the patchy connectivity your customers actually have.',
          'From digital wallets to full mobile banking, we ship apps that pass app store review, security audit, and the customer experience test.',
        ],
      }}
      capabilities={{
        eyebrow: 'What We Build',
        heading: 'Mobile experiences for every fintech product',
        items: [
          {
            icon: Smartphone,
            title: 'Mobile Banking Apps',
            description:
              'Accounts, payments, transfers, statements, and support — the full banking app experience.',
          },
          {
            icon: Wallet,
            title: 'Digital Wallets',
            description:
              'Onboarding, KYC, balances, P2P transfers, and merchant payments in a wallet-first experience.',
          },
          {
            icon: CreditCard,
            title: 'Card Control Apps',
            description:
              'Issuing, freezing, limit changes, and dispute workflows in the customer\'s hand.',
          },
          {
            icon: Fingerprint,
            title: 'Biometric Auth',
            description:
              'Face ID, Touch ID, and in-app behavioural signals — secure auth that feels effortless.',
          },
          {
            icon: Bell,
            title: 'Push & In-App Messaging',
            description:
              'Secure, actionable, segmented notifications and in-app messaging — without the spam.',
          },
          {
            icon: Wifi,
            title: 'Offline & Patchy Network',
            description:
              'Resilient flows for emerging markets — graceful handling of dropouts, timeouts, and slow links.',
          },
        ],
      }}
      whyUs={{
        eyebrow: 'Why TechHive',
        heading: 'Mobile teams that have shipped fintech apps before',
        items: [
          {
            icon: CheckCircle,
            title: 'Native + Cross-Platform Fluency',
            description:
              'Swift, Kotlin, React Native, Flutter — we pick the right tool, not the trendy one.',
          },
          {
            icon: Lock,
            title: 'Security from Sprint One',
            description:
              'Certificate pinning, jailbreak detection, secure key storage — security baked in, not retrofitted.',
          },
          {
            icon: ShieldCheck,
            title: 'App Store Survivors',
            description:
              'Apps that pass Apple and Google review first time. We know the financial-services review pitfalls.',
          },
          {
            icon: Activity,
            title: 'Real-Device QA Labs',
            description:
              'Testing on phones your customers actually carry — not just the latest flagship.',
          },
        ],
      }}
      process={{
        eyebrow: 'How We Deliver',
        heading: 'Design to store launch',
        steps: [
          {
            number: '01',
            title: 'Design',
            description: 'Flows, IA, accessibility, brand — built around your customer.',
          },
          {
            number: '02',
            title: 'Build',
            description: 'Native or cross-platform delivery with embedded automation.',
          },
          {
            number: '03',
            title: 'Harden',
            description: 'Security review, performance testing, and store submission prep.',
          },
          {
            number: '04',
            title: 'Launch',
            description: 'Phased rollout, crash monitoring, and iteration in production.',
          },
        ],
      }}
      cta={{
        heading: 'Building a fintech mobile app?',
        subtitle:
          "Whether it's a greenfield wallet or a banking app refresh, our team can take it from idea to App Store.",
        primaryText: "Let's Build It",
      }}
    />
  );
}
