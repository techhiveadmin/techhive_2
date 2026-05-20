import { BrowserRouter, Routes, Route } from 'react-router';

import Home from './pages/Home';
import StaffAugmentation from './pages/StaffAugmentation';
import QaAutomation from './pages/QaAutomation';
import FintechSoftware from './pages/FintechSoftware';
import BankingSoftware from './pages/BankingSoftware';
import PaymentGateway from './pages/PaymentGateway';
import MobileFintech from './pages/MobileFintech';
import UxAudit from './pages/UxAudit';
import UiUxFintech from './pages/UiUxFintech';
import BlogStaffAugmentationVsOutsourcing from './pages/BlogStaffAugmentationVsOutsourcing';

// QA Automation sub-pages
import QaFintech from './pages/QaFintech';
import QaBanking from './pages/QaBanking';
import QaPaymentGateways from './pages/QaPaymentGateways';
import QaPciDss from './pages/QaPciDss';
import QaOpenBanking from './pages/QaOpenBanking';
import QaPerformanceTesting from './pages/QaPerformanceTesting';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staff-augmentation" element={<StaffAugmentation />} />
        <Route path="/qa-automation" element={<QaAutomation />} />

        {/* QA Automation sub-pages */}
        <Route path="/qa-automation/fintech" element={<QaFintech />} />
        <Route path="/qa-automation/banking" element={<QaBanking />} />
        <Route path="/qa-automation/payment-gateways" element={<QaPaymentGateways />} />
        <Route path="/qa-automation/pci-dss" element={<QaPciDss />} />
        <Route path="/qa-automation/open-banking" element={<QaOpenBanking />} />
        <Route path="/qa-automation/performance-testing" element={<QaPerformanceTesting />} />

        <Route path="/software-development/fintech" element={<FintechSoftware />} />
        <Route path="/software-development/banking" element={<BankingSoftware />} />
        <Route path="/software-development/payment-gateway" element={<PaymentGateway />} />
        <Route path="/software-development/mobile-app/fintech" element={<MobileFintech />} />
        <Route path="/ui-ux-design/ux-audit" element={<UxAudit />} />
        <Route path="/ui-ux-design/fintech" element={<UiUxFintech />} />
        <Route path="/blog/staff-augmentation-vs-outsourcing" element={<BlogStaffAugmentationVsOutsourcing />} />
      </Routes>
    </BrowserRouter>
  );
}
