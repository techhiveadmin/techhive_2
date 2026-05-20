import {
  Lock,
  KeyRound,
  Network,
  UserCheck,
  Bug,
  FileCheck,
  ShieldCheck,
  ClipboardCheck,
  Search,
  Layers,
} from 'lucide-react';
import { ServicePageLayout } from './_layout/ServicePageLayout';

export default function QaPciDss() {
  return (
    <ServicePageLayout
      eyebrow="PCI-DSS Compliance Testing"
      title={
        <>
          PCI-DSS testing that produces{' '}
          <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            audit-ready evidence
          </span>
        </>
      }
      subtitle="Compliance-aware test design, scope-minimising automation, and structured evidence for your QSA — built by engineers who've passed PCI audits in production."
      heroImage="https://images.unsplash.com/photo-1614064548237-02f16ec78e8a?auto=format&fit=crop&q=80&w=1920"
      overview={{
        eyebrow: 'Overview',
        heading: 'PCI testing without the audit-week panic',
        paragraphs: [
          "Most teams discover their PCI gaps the week before the QSA arrives. By then, fixes are expensive and evidence is incomplete.",
          "TechHive builds PCI-DSS testing into your normal QA pipeline — every commit validates that PANs aren't leaking, tokens are scoped correctly, and segmentation holds. Audit week becomes a paperwork exercise, not a fire drill.",
          "We design tests with your QSA's questions in mind, and produce evidence artefacts they actually accept.",
        ],
      }}
      capabilities={{
        eyebrow: 'What We Test',
        heading: 'Coverage across the PCI scope',
        items: [
          {
            icon: Lock,
            title: 'PAN Handling Validation',
            description:
              'Storage, masking, transmission, and exposure tests — every place a PAN could leak, monitored continuously.',
          },
          {
            icon: KeyRound,
            title: 'Token Vault Testing',
            description:
              'Tokenisation accuracy, detokenisation scope, vault access controls, and key rotation validated.',
          },
          {
            icon: Network,
            title: 'Network Segmentation',
            description:
              'Boundary tests confirming CDE isolation, with scope-reduction validation for QSA-acceptable evidence.',
          },
          {
            icon: UserCheck,
            title: 'Access Control & Audit Logs',
            description:
              'Role-based access verification, least-privilege enforcement, and audit log integrity confirmed.',
          },
          {
            icon: Bug,
            title: 'Vulnerability Scan Automation',
            description:
              'Continuous SAST, DAST, and dependency scans built into CI/CD — with PCI-specific rule sets.',
          },
          {
            icon: FileCheck,
            title: 'Evidence Generation',
            description:
              'Audit-ready artefacts produced automatically — test results, logs, screenshots, scan outputs — formatted for QSA review.',
          },
        ],
      }}
      whyUs={{
        eyebrow: 'Why TechHive',
        heading: 'PCI testing that passes audits, not just dashboards',
        items: [
          {
            icon: ShieldCheck,
            title: 'PCI-Aware Test Design',
            description:
              'Tests built with QSA questions in mind — coverage chosen to satisfy specific PCI requirements, mapped directly to controls.',
          },
          {
            icon: ClipboardCheck,
            title: 'QSA-Friendly Evidence',
            description:
              'We produce evidence in formats QSAs actually accept — no last-minute re-formatting before assessment week.',
          },
          {
            icon: Search,
            title: 'Independent Validation',
            description:
              'External scrutiny on your PCI posture — finding issues before the assessor does, not after.',
          },
          {
            icon: Layers,
            title: 'Scope Reduction',
            description:
              'We design tests that confirm segmentation and reduce in-scope systems — keeping your PCI footprint small.',
          },
        ],
      }}
      process={{
        eyebrow: 'How It Works',
        heading: 'Gap analysis to continuous compliance',
        steps: [
          { number: '01', title: 'Assess', description: 'Current PCI posture, scope, and gap analysis against the latest standard.' },
          { number: '02', title: 'Design', description: 'Test plan mapped to specific PCI requirements and control evidence needs.' },
          { number: '03', title: 'Build', description: 'Automated tests integrated into CI/CD with evidence generation built in.' },
          { number: '04', title: 'Sustain', description: 'Continuous compliance — every release evidenced, every change validated.' },
        ],
      }}
      cta={{
        heading: 'PCI audit on the horizon?',
        subtitle:
          "Talk to our team. We'll review your current testing posture and identify the gaps before your QSA does.",
        primaryText: 'Book a PCI Readiness Review',
      }}
    />
  );
}
