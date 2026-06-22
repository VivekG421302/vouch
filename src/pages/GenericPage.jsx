import { AnimatedSection } from '../components/ui/AnimatedSection';

export function GenericPage({ title, content }) {
  return (
    <section className="py-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <h1 className="text-4xl font-bold mb-8 font-display">
            <span className="text-blue-grad">{title}</span>
          </h1>
          <div className="glass rounded-3xl p-8 border border-[var(--border)]">
            <div className="prose prose-invert max-w-none text-[var(--text2)] leading-relaxed">
              {content}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}


