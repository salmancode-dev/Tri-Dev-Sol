import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Common components
import Layout from './components/Layout';

// Main pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

// Blog pages
import BlogList from './pages/Blog/BlogList';
import BlogSingle from './pages/Blog/BlogSingle';

// Legal pages
import TermsConditions from './pages/Legal/TermsConditions';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';

// Services pages
import ServicesOverview from './pages/Services/ServicesOverview';
import CustomWebDevelopment from './pages/Services/CustomWebDevelopment';
import MvpDevelopment from './pages/Services/MvpDevelopment';
import WhiteLabelFrontend from './pages/Services/WhiteLabelFrontend';
import AiIntegration from './pages/Services/AiIntegration';
import ApiIntegration from './pages/Services/ApiIntegration';
import EcommerceDevelopment from './pages/Services/EcommerceDevelopment';
import LandingPages from './pages/Services/LandingPages';

// Industries pages
import IndustriesOverview from './pages/Industries/IndustriesOverview';
import Startups from './pages/Industries/Startups';
import RealEstate from './pages/Industries/RealEstate';
import ProfessionalServices from './pages/Industries/ProfessionalServices';
import Construction from './pages/Industries/Construction';
import Healthcare from './pages/Industries/Healthcare';
import Logistics from './pages/Industries/Logistics';
import EcommerceIndustry from './pages/Industries/EcommerceIndustry';
import Hospitality from './pages/Industries/Hospitality';
import Education from './pages/Industries/Education';
import Fitness from './pages/Industries/Fitness';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Main sections */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          
          {/* Blog paths */}
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogSingle />} />

          {/* Legal paths */}
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* Services routes */}
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/services/custom-web-app" element={<CustomWebDevelopment />} />
          <Route path="/services/mvp-development" element={<MvpDevelopment />} />
          <Route path="/services/white-label-frontend" element={<WhiteLabelFrontend />} />
          <Route path="/services/ai-integration" element={<AiIntegration />} />
          <Route path="/services/api-integration" element={<ApiIntegration />} />
          <Route path="/services/ecommerce-development" element={<EcommerceDevelopment />} />
          <Route path="/services/landing-pages" element={<LandingPages />} />

          {/* Industries routes */}
          <Route path="/industries" element={<IndustriesOverview />} />
          <Route path="/industries/startups" element={<Startups />} />
          <Route path="/industries/real-estate" element={<RealEstate />} />
          <Route path="/industries/professional-services" element={<ProfessionalServices />} />
          <Route path="/industries/construction" element={<Construction />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/logistics" element={<Logistics />} />
          <Route path="/industries/ecommerce" element={<EcommerceIndustry />} />
          <Route path="/industries/hospitality" element={<Hospitality />} />
          <Route path="/industries/education" element={<Education />} />
          <Route path="/industries/fitness" element={<Fitness />} />

          {/* Catch-all fallback redirect to home */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
