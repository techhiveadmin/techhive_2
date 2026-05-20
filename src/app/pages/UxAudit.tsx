import {
  Search,
  Accessibility,
  Map,
  TrendingDown,
  Smartphone,
  BarChart3,
  ShieldCheck,
  FileCheck,
  Target,
  Layers,
} from 'lucide-react';
import { ServicePageLayout } from './_layout/ServicePageLayout';

export default function UxAudit() {
  return (
    <ServicePageLayout
      eyebrow="UX Audit Services"
      title={
        <>
          Find what's costing you conversions —{' '}
          <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            before your competitors do
          </span>
        </>
      }
      subtitle="Comprehensive UX audits that uncover friction, accessibility gaps, and the small frustrations quietly draining your funnel."
      heroImage="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=1920"
      overview={{
        eyebrow: 'Overview',
        heading: "Your funnel is leaking. We'll show you where."
        ,
        paragraphs: [
          "Every digital product has friction it doesn't see. The team stops noticing the form field that doesn't autofill, the error message that doesn't help, the journey that takes one tap too many.",
          'TechHive UX audits surface those gaps with structured methods — heuristic evaluation, accessibility scans, journey mapping, and (where appropriate) moderated user testing.',
          'You walk away with prioritised, evidence-backed fixes that actually move metrics.',
        ],
      }}
      capabilities={{
        eyebrow: "What's in a TechHive Audit",
        heading: 'Multi-method evaluation across your product',
        items: [
          {
            icon: Search,
            title: 'Heuristic Evaluation',
            description:
              "Nielsen-Norman aligned review across your key flows, by senior auditors who've audited fintech before.",
          },
          {
            icon: Accessibility,
            title: 'Accessibility Audit',
            description:
              'WCAG 2.2 AA compliance check with prioritised, developer-ready fixes.',
          },
          {
            icon: Map,
            title: 'Journey Mapping',
            description:
              'End-to-end customer journeys with friction surfaced at every step — from acquisition to retention.',
          },
          {
            icon: TrendingDown,
            title: 'Conversion Funnel Analysis',
            description:
              'Drop-off hotspots backed by your analytics data — not just opinions.',
          },
          {
            icon: Smartphone,
            title: 'Mobile-First Review',
            description:
              'Touch targets, responsive issues, performance, gesture conflicts on real devices.',
          },
          {
            icon: BarChart3,
            title: 'Competitive Benchmark',
            description:
              'How your experience stacks against category leaders — with patterns worth borrowing.',
          },
        ],
      }}
      whyUs={{
        eyebrow: 'Why TechHive',
        heading: 'Audits that lead to action — not 80-slide PDFs nobody reads',
        items: [
          {
            icon: ShieldCheck,
            title: 'Banking-Specific Lens',
            description:
              'We know what trust, security cues, and clarity require in financial products. Generic UX templates miss this.',
          },
          {
            icon: FileCheck,
            title: 'Evidence-Backed',
            description:
              'Every finding tied to a heuristic, standard, or data point. No "we just feel this is wrong."',
          },
          {
            icon: Target,
            title: 'Prioritised Fixes',
            description:
              "Not 200 issues. The 20 that matter — ranked by effort vs impact, ready for your next sprint.",
          },
          {
            icon: Layers,
            title: 'Designer + Analyst Pairs',
            description:
              'Qualitative depth plus quantitative rigour — every audit pairs a senior designer with a data analyst.',
          },
        ],
      }}
      process={{
        eyebrow: 'How It Works',
        heading: 'Scope to actionable roadmap',
        steps: [
          {
            number: '01',
            title: 'Scope',
            description: 'Flows, audiences, business goals, and success metrics aligned.',
          },
          {
            number: '02',
            title: 'Audit',
            description: 'Multi-method evaluation by experienced senior auditors.',
          },
          {
            number: '03',
            title: 'Report',
            description: 'Findings, severity ratings, and recommended fixes with mocks where useful.',
          },
          {
            number: '04',
            title: 'Roadmap',
            description: 'Prioritised plan with effort vs impact — ready to ship.',
          },
        ],
      }}
      cta={{
        heading: 'Want to know where your UX is losing customers?',
        subtitle:
          "Book a scoping call. We'll review your product and outline what a TechHive audit would uncover.",
        primaryText: 'Book a UX Audit',
      }}
    />
  );
}
