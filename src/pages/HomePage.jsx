import { HeroSection } from '../components/sections/HeroSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { AuditTypesSection } from '../components/sections/AuditTypesSection';
import { FTRSection } from '../components/sections/FTRSection';
import { DashboardsSection } from '../components/sections/DashboardsSection';
import { FinanceSection } from '../components/sections/FinanceSection';
import { CTASection } from '../components/sections/CTASection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AuditTypesSection />
      <FTRSection />
      <DashboardsSection />
      <FinanceSection />
      <CTASection />
    </>
  );
}


