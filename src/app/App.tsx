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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staff-augmentation" element={<StaffAugmentation />} />
        <Route path="/software-development/fintech" element={<FintechSoftware />} />
        <Route path="/qa-automation" element={<QaAutomation />} />
        <Route path="/ui-ux-design/ux-audit" element={<UxAudit />} />
        <Route path="/software-development/banking" element={<BankingSoftware />} />
        <Route path="/blog/staff-augmentation-vs-outsourcing" element={<BlogStaffAugmentationVsOutsourcing />} />
        <Route path="/software-development/payment-gateway" element={<PaymentGateway />} />
        <Route path="/software-development/mobile-app/fintech" element={<MobileFintech />} />
        <Route path="/ui-ux-design/fintech" element={<UiUxFintech />} />
      </Routes>
    </BrowserRouter>
  );
}
