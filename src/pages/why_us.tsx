import { PageTransition } from '../components/PageTransition';

import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';


const WhyUs = () => {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-nzx-green to-nzx-green-mid py-24 text-center">
        <AnimatedSection>
          <h1 className="font-heading text-4xl md:text-5xl text-white mb-4">What Do We Offer?</h1>
          <div className="font-body text-white/80 text-sm">
            <Link to="/" className="hover:text-nzx-gold transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>Why Us?</span>
          </div>
        </AnimatedSection>
      </section>

      {/* Main Content Sections */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <AnimatedSection delay={0.1}>
            <div className="bg-white border text-left p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full border-t-4 border-t-nzx-gold">
              <div className="text-nzx-green-mid text-4xl mb-4">💡</div>
              <h3 className="font-heading text-2xl text-nzx-dark mb-4">INNOVATION AT THE CORE</h3>
              <p className="font-body text-nzx-mid leading-relaxed text-justify">
                Innovation is the heartbeat of SAKASH AGRO TECH PVT. LTD. Our team of agronomists, chemists, and experts collaborate tirelessly to craft state-of-the-art crop nutrition solutions. Through cutting-edge research and technology, we formulate products that amplify plant health, elevate yields, and promote sustainable farming practices.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white border text-left p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full border-t-4 border-t-nzx-gold">
              <div className="text-nzx-green-mid text-4xl mb-4">🎯</div>
              <h3 className="font-heading text-2xl text-nzx-dark mb-4">PRECISION AND PERFORMANCE</h3>
              <p className="font-body text-nzx-mid leading-relaxed text-justify">
                Our commitment to precision extends to every aspect of our offerings. We understand that each plant's needs are unique, and that's why our solutions are meticulously tailored to optimize growth at every stage. Whether it's enhancing nutrient uptake or unlocking the potential of plant through unique foliar solutions, our products deliver remarkable results.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="bg-white border text-left p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full border-t-4 border-t-nzx-gold">
              <div className="text-nzx-green-mid text-4xl mb-4">🌱</div>
              <h3 className="font-heading text-2xl text-nzx-dark mb-4">CULTIVATING SUSTAINABILITY</h3>
              <p className="font-body text-nzx-mid leading-relaxed text-justify">
                SAKASH AGRO TECH PVT. LTD. is more than a manufacturer; we are stewards of the environment. Our focus on sustainability guides our every decision. By developing biostimulants, organic fertilizers, and micronutrients that nourish plants while minimizing ecological impact, we contribute to a healthier planet and a more resilient ecosystem.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="bg-white border text-left p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full border-t-4 border-t-nzx-gold">
              <div className="text-nzx-green-mid text-4xl mb-4">🤝</div>
              <h3 className="font-heading text-2xl text-nzx-dark mb-4">EMPOWERING GROWERS</h3>
              <p className="font-body text-nzx-mid leading-relaxed text-justify">
                We believe that knowledge is the key to progress. Our team is dedicated to empowering farmers with the information they need to make informed choices. Through personalized guidance and expert support, we ensure that every grower reaps the maximum benefits from our solutions.
              </p>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-20 bg-nzx-green-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl text-nzx-green mb-6">CULTIVATING EXCELLENCE, GROWING FUTURE</h2>
            <div className="w-24 h-1 bg-nzx-gold mx-auto mb-8"></div>
            <p className="font-body text-nzx-dark text-lg leading-relaxed">
              <strong>SAKASH AGRO TECH PVT. LTD.</strong> is a symbol of dedication, innovation, and progress. As we continue to push the boundaries of agricultural science, we envision a future where sustainable farming practices yield bountiful harvests, thriving ecosystems, and prosperous communities.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};


const TransitionWrapper = () => (
  <PageTransition>
    <WhyUs />
  </PageTransition>
);
export default TransitionWrapper;
