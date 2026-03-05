/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ServiceCards from './components/ServiceCards';
import Method from './components/Method';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-nude-principal font-sans selection:bg-dourado selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <ServiceCards />
        <Method />
        <Services />
        <Testimonials />
        <Location />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

