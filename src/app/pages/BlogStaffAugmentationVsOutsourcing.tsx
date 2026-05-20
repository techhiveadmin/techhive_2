import { CheckCircle, XCircle } from 'lucide-react';
import { BlogPostLayout } from './_layout/BlogPostLayout';

export default function BlogStaffAugmentationVsOutsourcing() {
  return (
    <BlogPostLayout
      category="Talent & Delivery"
      title="Staff Augmentation vs Outsourcing: Which Engagement Model Fits Your Project?"
      subtitle="Both deliver external talent. They are not the same thing. Here's how to choose the right model for your roadmap, risk profile, and team."
      date="May 2025"
      readTime="8 min read"
    >
      <div className="space-y-8 text-gray-800 leading-relaxed text-base sm:text-lg">
        <p>
          When a banking or fintech team needs to ship faster than headcount allows,
          two options dominate the conversation: <strong>staff augmentation</strong>{' '}
          and <strong>outsourcing</strong>. They are often spoken about
          interchangeably, but they solve different problems, carry different risks,
          and produce very different outcomes.
        </p>
        <p>
          Picking the wrong model is one of the most expensive mistakes in delivery.
          This guide breaks down both, with a clear framework to choose between them.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 pt-6 border-t border-gray-200">
          What is Staff Augmentation?
        </h2>
        <p>
          Staff augmentation means bringing external engineers into{' '}
          <em>your</em> team. They report through your delivery manager, attend your
          stand-ups, use your tools, and follow your engineering standards. You stay
          in control of architecture, sprint priorities, and the definition of done.
        </p>
        <p>
          The augmentation partner's job is to source, vet, and retain the right
          talent — not to deliver a defined scope. Your team owns the outcome.
        </p>
        <p>
          <strong>Common signals it fits:</strong> you have an in-house team that
          knows the domain, your scope is evolving, or you need specific skills
          (mobile, security, ISO 8583) for a specific sprint window.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 pt-6 border-t border-gray-200">
          What is Outsourcing?
        </h2>
        <p>
          Outsourcing means handing over a <em>defined deliverable</em> — a feature, a
          platform, a migration — to an external partner who takes ownership of the
          full delivery. The partner brings their own delivery manager, their own
          process, their own quality standards.
        </p>
        <p>
          You agree the scope, the milestones, and the acceptance criteria.{' '}
          <em>They</em> own how it gets built.
        </p>
        <p>
          <strong>Common signals it fits:</strong> the scope is well-defined, your
          in-house team is fully loaded on other work, the technology is outside your
          team's expertise, or the work has a fixed, clearly scoped budget.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 pt-6 border-t border-gray-200">
          Side-by-Side Comparison
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm not-prose">
          <table className="w-full text-sm sm:text-base">
            <thead>
              <tr className="bg-gradient-to-br from-gray-900 to-black text-white">
                <th className="text-left p-4 font-bold">Dimension</th>
                <th className="text-left p-4 font-bold">Staff Augmentation</th>
                <th className="text-left p-4 font-bold">Outsourcing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="p-4 font-semibold text-gray-900">Ownership of delivery</td>
                <td className="p-4 text-gray-700">You</td>
                <td className="p-4 text-gray-700">The partner</td>
              </tr>
              <tr className="bg-amber-50/30">
                <td className="p-4 font-semibold text-gray-900">Best for scope</td>
                <td className="p-4 text-gray-700">Evolving, agile</td>
                <td className="p-4 text-gray-700">Defined, contracted</td>
              </tr>
              <tr className="bg-white">
                <td className="p-4 font-semibold text-gray-900">Control over process</td>
                <td className="p-4 text-gray-700">Full</td>
                <td className="p-4 text-gray-700">Partial (via SLAs)</td>
              </tr>
              <tr className="bg-amber-50/30">
                <td className="p-4 font-semibold text-gray-900">Onboarding speed</td>
                <td className="p-4 text-gray-700">Days</td>
                <td className="p-4 text-gray-700">Weeks (discovery)</td>
              </tr>
              <tr className="bg-white">
                <td className="p-4 font-semibold text-gray-900">Cost model</td>
                <td className="p-4 text-gray-700">Time &amp; materials</td>
                <td className="p-4 text-gray-700">Fixed-price or milestone</td>
              </tr>
              <tr className="bg-amber-50/30">
                <td className="p-4 font-semibold text-gray-900">Knowledge retention</td>
                <td className="p-4 text-gray-700">Stays with you</td>
                <td className="p-4 text-gray-700">Risks leaving with partner</td>
              </tr>
              <tr className="bg-white">
                <td className="p-4 font-semibold text-gray-900">Flexibility</td>
                <td className="p-4 text-gray-700">High — scale up/down</td>
                <td className="p-4 text-gray-700">Low — change requests cost</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 pt-6 border-t border-gray-200">
          When Staff Augmentation Is the Right Call
        </h2>
        <ul className="space-y-3 not-prose">
          {[
            'Your in-house team is the long-term owner of the platform.',
            'You need niche skills (3DS, ISO 8583, biometric auth) for a defined window.',
            'Scope is moving — priorities shift sprint to sprint.',
            'You care about retaining the domain knowledge after the engagement ends.',
            "You've experienced past outsourcing where the deliverable met spec but missed intent.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 pt-6 border-t border-gray-200">
          When Outsourcing Is the Right Call
        </h2>
        <ul className="space-y-3 not-prose">
          {[
            'Scope is fully defined and unlikely to change much.',
            'The technology is outside your team\'s comfort zone.',
            'You need a self-contained team to ship something parallel to in-house work.',
            'Budget needs predictability — a fixed-price contract serves your governance.',
            "The deliverable has a clear acceptance criteria — \"it does X, measured by Y.\"",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 pt-6 border-t border-gray-200">
          The Common Failure Modes
        </h2>
        <p>
          Most engagement-model failures come from picking outsourcing when scope is
          still evolving, or staff augmentation when the buyer wants to hand off
          delivery ownership. Some symptoms:
        </p>
        <ul className="space-y-3 not-prose">
          {[
            'Outsourcing a discovery-phase project — endless change requests, missed intent.',
            'Augmenting staff when the in-house team is too small to lead — the augmented engineers wait for direction that never comes.',
            'Treating either model as "just resources" — both succeed or fail on the quality of integration with your team.',
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 pt-6 border-t border-gray-200">
          A Common Hybrid
        </h2>
        <p>
          In practice, many fintech engagements blend both. A typical pattern: an
          outsourced squad delivers an initial platform module against a defined
          scope, then transitions into a staff-augmentation model where individual
          engineers stay embedded with your team for ongoing iteration.
        </p>
        <p>
          The trick is being explicit about <em>when</em> the transition happens and{' '}
          <em>who</em> owns delivery on either side of it.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 pt-6 border-t border-gray-200">
          How TechHive Helps You Choose
        </h2>
        <p>
          TechHive offers both models — and we have strong opinions about which one
          fits which situation. In a 30-minute scoping call, we typically map out:
        </p>
        <ul className="space-y-3 not-prose">
          {[
            'Whether your scope is defined enough to outsource cleanly.',
            "Where your in-house team's bandwidth and domain knowledge actually sit.",
            'Which combination of roles and engagement durations match your roadmap.',
            "What the realistic onboarding curve looks like for the engineers you'll need.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-start">
              <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          The right answer is rarely "more bodies." It is usually a precise match
          between engagement model, scope clarity, and the shape of your existing
          team. Get that right, and execution follows.
        </p>
      </div>
    </BlogPostLayout>
  );
}
