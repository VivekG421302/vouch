import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme.jsx';
import { Layout } from './components/ui/Layout';
import { HomePage } from './pages/HomePage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { JourneyPage } from './pages/JourneyPage';
import { AuditMapPage } from './pages/AuditMapPage';
import { ConfigPage } from './pages/ConfigPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { GenericPage } from './pages/GenericPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { CareerPage } from './pages/CareerPage';
import { DashboardsPage } from './pages/DashboardsPage';
import { FinancePage } from './pages/FinancePage';

function RootLayout() {
  return (
    <ThemeProvider>
      <Layout>
        <Outlet />
      </Layout>
    </ThemeProvider>
  );
}

// Content components for generic pages
function SecurityContent() {
  return (
    <div className="space-y-4">
      <p>At Vouch, security is our top priority. We implement industry-leading measures to protect your data:</p>
      <ul className="list-disc ml-6 space-y-2">
        <li>AES-256 encryption for all data at rest and in transit</li>
        <li>SOC 2 Type II certified data centers</li>
        <li>Regular third-party security audits</li>
        <li>Biometric data is hashed and never stored in plain text</li>
        <li>Role-based access control (RBAC) with audit logging</li>
        <li>GDPR and DPDP Act 2023 compliant data handling</li>
      </ul>
      <h3 className="text-lg font-semibold text-[var(--text)] mt-6">Infrastructure Security</h3>
      <p>Our infrastructure is hosted on AWS Mumbai region with multi-AZ redundancy. All data is encrypted at rest using AWS KMS and in transit using TLS 1.3.</p>
    </div>
  );
}

function EnterpriseContent() {
  return (
    <div className="space-y-4">
      <p>Vouch Enterprise is designed for large audit networks with complex requirements:</p>
      <ul className="list-disc ml-6 space-y-2">
        <li>Dedicated account manager and priority support</li>
        <li>Custom SLA with 99.99% uptime guarantee</li>
        <li>White-label branding options</li>
        <li>Advanced API access with rate limits tailored to your needs</li>
        <li>On-premise deployment options available</li>
        <li>Custom integrations with legacy ERP systems</li>
      </ul>
      <h3 className="text-lg font-semibold text-[var(--text)] mt-6">Enterprise Support</h3>
      <p>Get a dedicated technical account manager, quarterly business reviews, and 24/7 phone support with guaranteed 15-minute response times.</p>
    </div>
  );
}

function BlogContent() {
  return (
    <div className="space-y-4">
      <p>Welcome to the Vouch Blog — your source for insights on audit automation, compliance updates, and best practices for CA firms.</p>
      <h3 className="text-lg font-semibold text-[var(--text)] mt-6">Latest Articles</h3>
      <div className="space-y-4">
        {[
          { title: 'How AI is Transforming Field Audits in 2026', date: 'June 15, 2026', read: '5 min read' },
          { title: 'GST Compliance Checklist for Q2 2026', date: 'June 10, 2026', read: '8 min read' },
          { title: 'The Future of Biometric Attendance in Audit', date: 'June 5, 2026', read: '6 min read' },
          { title: 'Reducing Audit Fraud with Geo-Fencing', date: 'May 28, 2026', read: '4 min read' },
        ].map((article, i) => (
          <div key={i} className="glass rounded-xl p-4 border border-[var(--border)] hover:border-blue-500/30 transition-colors cursor-pointer">
            <div className="font-medium text-[var(--text)]">{article.title}</div>
            <div className="text-xs text-[var(--text2)] mt-1">{article.date} • {article.read}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PrivacyContent() {
  return (
    <div className="space-y-4">
      <p>Last updated: January 1, 2026</p>
      <p>Vouch Technologies is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information.</p>
      <h3 className="text-lg font-semibold text-[var(--text)] mt-6">Data Collection</h3>
      <p>We collect information necessary to provide our services, including:</p>
      <ul className="list-disc ml-6 space-y-2">
        <li>Account registration information</li>
        <li>KYC documents (Aadhaar, PAN) for verification</li>
        <li>GPS location data during active audits</li>
        <li>Biometric data (selfies) for attendance verification</li>
      </ul>
      <h3 className="text-lg font-semibold text-[var(--text)] mt-6">Data Usage</h3>
      <p>Your data is used solely for providing audit automation services. We never sell your data to third parties. All data is stored within India as per DPDP Act 2023 requirements.</p>
    </div>
  );
}

function TermsContent() {
  return (
    <div className="space-y-4">
      <p>Last updated: January 1, 2026</p>
      <p>By using Vouch, you agree to these terms and conditions. Please read them carefully.</p>
      <h3 className="text-lg font-semibold text-[var(--text)] mt-6">Service Usage</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li>You must be a registered CA firm or auditor to use the platform</li>
        <li>All GPS data must be accurate and not manipulated</li>
        <li>You are responsible for maintaining account security</li>
        <li>Service fees are billed monthly based on your selected plan</li>
      </ul>
      <h3 className="text-lg font-semibold text-[var(--text)] mt-6">Liability</h3>
      <p>Vouch is a tool to assist audit operations. Final audit responsibility remains with the Chartered Accountant and the audit firm. Vouch does not assume liability for audit outcomes.</p>
    </div>
  );
}

function GSTContent() {
  return (
    <div className="space-y-4">
      <p>Vouch is fully compliant with Indian GST regulations:</p>
      <ul className="list-disc ml-6 space-y-2">
        <li>GSTIN: 27AABCU9603R1ZX</li>
        <li>All invoices include proper HSN codes</li>
        <li>CGST/SGST split for intra-state transactions</li>
        <li>IGST for inter-state transactions</li>
        <li>E-invoice QR code generation for B2B transactions</li>
        <li>GSTR-1 and GSTR-3B reconciliation support</li>
      </ul>
      <h3 className="text-lg font-semibold text-[var(--text)] mt-6">Invoice Features</h3>
      <p>Our GST invoice engine automatically detects the correct HSN code based on service type, applies the appropriate tax rate, and generates e-invoices with IRN for all B2B transactions above Rs.50,000.</p>
    </div>
  );
}

function DataLocalizationContent() {
  return (
    <div className="space-y-4">
      <p>Vouch stores all customer data within Indian borders, complying with RBI and government data localization requirements:</p>
      <ul className="list-disc ml-6 space-y-2">
        <li>Primary data center: AWS Mumbai region</li>
        <li>Disaster recovery: AWS Hyderabad region</li>
        <li>No data is transferred outside India without explicit consent</li>
        <li>Regular compliance audits by third-party assessors</li>
        <li>DPDP Act 2023 compliant data handling</li>
      </ul>
      <h3 className="text-lg font-semibold text-[var(--text)] mt-6">Data Residency</h3>
      <p>All personal data, financial records, audit logs, and KYC documents are stored exclusively in Indian data centers. Our backup and disaster recovery systems are also located within India.</p>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'features', element: <FeaturesPage /> },
      { path: 'career', element: <CareerPage /> },
      { path: 'dashboards', element: <DashboardsPage /> },
      { path: 'finance', element: <FinancePage /> },
      { path: 'pricing', element: <PricingPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'faq', element: <FAQPage /> },
      { path: 'journey', element: <JourneyPage /> },
      { path: 'audit-map', element: <AuditMapPage /> },
      { path: 'config', element: <ConfigPage /> },
      { path: 'security', element: <GenericPage title="Security" content={<SecurityContent />} /> },
      { path: 'enterprise', element: <GenericPage title="Enterprise" content={<EnterpriseContent />} /> },
      { path: 'blog', element: <GenericPage title="Blog" content={<BlogContent />} /> },
      { path: 'careers', element: <GenericPage title="Careers" content={<div />} /> },
      { path: 'privacy', element: <GenericPage title="Privacy Policy" content={<PrivacyContent />} /> },
      { path: 'terms', element: <GenericPage title="Terms of Service" content={<TermsContent />} /> },
      { path: 'gst', element: <GenericPage title="GST Compliance" content={<GSTContent />} /> },
      { path: 'data-localization', element: <GenericPage title="Data Localization" content={<DataLocalizationContent />} /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
