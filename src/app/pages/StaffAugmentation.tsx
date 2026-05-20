import {
  Users,
  Code,
  Smartphone,
  Server,
  Layout,
  Briefcase,
  Zap,
  Rocket,
  Target,
  Layers,
} from 'lucide-react';
import { ServicePageLayout } from './_layout/ServicePageLayout';

export default function StaffAugmentation() {
  return (
    <ServicePageLayout
      eyebrow="IT Staff Augmentation"
      title={
        <>
          Scale your tech team with{' '}
          <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            banking-ready engineers
          </span>
        </>
      }
      subtitle="Embed pre-vetted developers, QA engineers, and architects with deep fintech experience — without the lead times of traditional hiring."
      heroImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920"
      overview={{
        eyebrow: 'Overview',
        heading: 'Augment your team. Accelerate your delivery.',
        paragraphs: [
          'Traditional hiring takes months. By the time you onboard, your roadmap has already slipped.',
          'TechHive gives you direct access to pre-vetted engineers with real banking, payments, and digital platform experience — ready to plug into your existing teams and ship in days, not quarters.',
          "We don't just send CVs. We embed delivery-ready talent that operates as an extension of your organisation.",
        ],
      }}
      capabilities={{
        eyebrow: 'Roles We Mobilise',
        heading: 'Specialists across the fintech stack',
        subheading:
          "Whether you need a single specialist or a full squad, we've got the bench.",
        items: [
          {
            icon: Target,
            title: 'QA & Automation Engineers',
            description:
              'Selenium, Cypress, Playwright, TestComplete, REST Assured — fluent in banking-grade test discipline.',
          },
          {
            icon: Server,
            title: 'Backend Engineers',
            description:
              'Java, .NET, Node.js, Python, Go. Microservices, event-driven systems, secure-by-default APIs.',
          },
          {
            icon: Code,
            title: 'Frontend Engineers',
            description:
              'React, Angular, Vue, Next.js. Performance-first, accessible interfaces ready for production.',
          },
          {
            icon: Smartphone,
            title: 'Mobile Developers',
            description:
              'Native iOS, Android, plus React Native and Flutter — including secure banking and wallet apps.',
          },
          {
            icon: Layers,
            title: 'DevOps & SRE',
            description:
              'AWS, Azure, GCP, Kubernetes, Terraform. CI/CD, observability, and resilience engineering.',
          },
          {
            icon: Briefcase,
            title: 'Fintech Business Analysts',
            description:
              'ISO 8583, ISO 20022, SWIFT, AML, KYC — analysts who already speak your domain.',
          },
        ],
      }}
      whyUs={{
        eyebrow: 'Why TechHive',
        heading: 'Not just talent. Delivery-ready talent.',
        items: [
          {
            icon: Users,
            title: 'Fintech-Specific Bench',
            description:
              "Engineers with hands-on experience on real bank and payment platforms — not generalists learning your domain on your budget.",
          },
          {
            icon: Rocket,
            title: '48-Hour Shortlists',
            description:
              "Profiles in your inbox within two business days. No three-month searches, no candidate shortages, no surprises.",
          },
          {
            icon: Layout,
            title: 'Embedded Delivery Culture',
            description:
              'Our people are accountable to outcomes, not timesheets. They take ownership the way your in-house team does.',
          },
          {
            icon: Zap,
            title: 'Flexible Engagement',
            description:
              'Short bursts, long-term squads, or scale-up-and-down models — we shape the engagement around your roadmap.',
          },
        ],
      }}
      process={{
        eyebrow: 'How It Works',
        heading: 'From kickoff to delivery in days, not quarters',
        steps: [
          {
            number: '01',
            title: 'Discovery',
            description: 'Understand your roles, stack, scope, and timeline.',
          },
          {
            number: '02',
            title: 'Shortlist',
            description: 'Pre-vetted CVs within 48 hours, matched to your needs.',
          },
          {
            number: '03',
            title: 'Onboard',
            description: 'Fast onboarding into your workflows, tools, and standards.',
          },
          {
            number: '04',
            title: 'Deliver',
            description: 'Embedded ownership of outcomes, with full delivery visibility.',
          },
        ],
      }}
      cta={{
        heading: 'Ready to scale your team without the wait?',
        subtitle:
          "Tell us what you need — we'll shortlist engineers within 48 hours.",
        primaryText: 'Request a Shortlist',
      }}
    />
  );
}
