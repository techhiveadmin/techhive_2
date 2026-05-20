import {
  TrendingUp,
  Activity,
  Zap,
  Clock,
  Database,
  BarChart3,
  Target,
  Cpu,
  Search,
  AlertCircle,
} from 'lucide-react';
import { ServicePageLayout } from './_layout/ServicePageLayout';

export default function QaPerformanceTesting() {
  return (
    <ServicePageLayout
      eyebrow="Performance & Load Testing"
      title={
        <>
          Know your platform's limits{' '}
          <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
            before your customers do
          </span>
        </>
      }
      subtitle="Performance, load, stress, and soak testing — engineered for high-throughput banking and fintech platforms that can't afford to be slow."
      heroImage="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1920"
      overview={{
        eyebrow: 'Overview',
        heading: "Find the breaking point on your terms, not theirs"
        ,
        paragraphs: [
          "Customers don't tolerate a slow bank. A two-second checkout lag becomes an abandoned transaction. A salary day that takes the mobile app down becomes a press incident.",
          "TechHive performance tests target the load profiles your platform actually faces — payday spikes, end-of-day batches, Black Friday peaks, regulator-driven reporting cycles.",
          "We don't just hit you with synthetic load and call it done. We profile DBs, cache layers, downstream calls, and the architectural choices that determine whether scaling works or hurts.",
        ],
      }}
      capabilities={{
        eyebrow: 'What We Run',
        heading: 'Load profiles that mirror reality',
        items: [
          {
            icon: TrendingUp,
            title: 'Peak-Day Simulations',
            description:
              'Black Friday, payday, salary disbursement loads — modelled from real production traffic patterns.',
          },
          {
            icon: Activity,
            title: 'Sustained Throughput Testing',
            description:
              'Steady-state TPS validation across hours — confirming your platform holds the line, not just the spike.',
          },
          {
            icon: Zap,
            title: 'Stress to Breaking Point',
            description:
              'Find the wall before customers do — controlled stress to identify capacity ceilings and failure modes.',
          },
          {
            icon: Clock,
            title: 'Soak & Endurance',
            description:
              'Multi-hour runs to surface memory leaks, connection pool exhaustion, and slow-burn degradation patterns.',
          },
          {
            icon: Database,
            title: 'DB & Cache Profiling',
            description:
              'Slow query identification, cache hit rate analysis, lock contention — the layer where most issues actually live.',
          },
          {
            icon: BarChart3,
            title: 'Capacity Planning Reports',
            description:
              'Hardware / cloud sizing recommendations with cost trade-offs — data-driven scaling decisions, not guesses.',
          },
        ],
      }}
      whyUs={{
        eyebrow: 'Why TechHive',
        heading: 'Performance work that ends in answers, not just graphs',
        items: [
          {
            icon: Target,
            title: 'Realistic Load Modelling',
            description:
              "Profiles built from your actual production traffic, not generic 'ramp 1000 users' scripts that miss real behaviour.",
          },
          {
            icon: Cpu,
            title: 'Full-Stack Profiling',
            description:
              "We profile the database, the cache, the network, the JVM, the queue — not just the front-door HTTP layer.",
          },
          {
            icon: Search,
            title: 'Root-Cause Focus',
            description:
              "Tests come with root-cause analysis — not just 'p99 is high', but 'this query takes 4s under load because of an unindexed join'.",
          },
          {
            icon: AlertCircle,
            title: 'Continuous Performance',
            description:
              "Performance gates in CI/CD — catch regressions per commit, not at the end of a sprint when fixes are expensive.",
          },
        ],
      }}
      process={{
        eyebrow: 'How It Works',
        heading: 'Baseline to continuous performance',
        steps: [
          { number: '01', title: 'Profile', description: 'Production traffic analysis, target load profiles, success criteria defined.' },
          { number: '02', title: 'Build', description: 'Realistic load scenarios with data fixtures matching your real customer mix.' },
          { number: '03', title: 'Run', description: 'Multi-phase performance, stress, and soak runs with full-stack instrumentation.' },
          { number: '04', title: 'Sustain', description: 'Performance gates in CI/CD plus periodic deep-dive load campaigns.' },
        ],
      }}
      cta={{
        heading: "Bracing for a high-traffic event?",
        subtitle:
          "Let us load-test your platform before the real customers do. We'll find the issues — and the fixes.",
        primaryText: 'Plan a Load Test',
      }}
    />
  );
}
