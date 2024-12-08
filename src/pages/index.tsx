import ComparisonSection from '@/components/ComparisonSection';
import FAQ from '@/components/FAQ';
import FeaturesSection from '@/components/Features';
import Navigation from '@/components/Navigation';
import StepsSection from '@/components/StepsSection';
import Testemonials from '@/components/Testemonials';
import { Star } from 'lucide-react';
import { useRouter } from 'next/router'



const Home = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white">
      <Navigation showActions={false} />

      {/* Hero Section - Mobile First */}
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6">
            Home Repairs Made Effortless
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
            Most trusted home services company in Vancouver
          </p>
          <button
            onClick={() => window.open('/services', '_current')}
            className="w-full md:w-auto bg-black text-white px-6 py-3 rounded-lg text-lg font-medium">
            Get Your Quote Now
          </button>
          <div className="mt-6 flex items-center gap-2 justify-center md:justify-start">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-600 text-sm md:text-base">1000+ Happy Homeowners</span>
          </div>
        </div>
        <div className="w-full md:w-[500px] lg:w-[600px]">
          <img
            src="https://azhandyman.ca/wp-content/uploads/2024/08/Slider3-scaled.jpg"
            alt="Handyman Service"
            className="mask-stripes object-cover object-left-center w-full h-full"
          />
        </div>
      </section>
      <ComparisonSection />
      <StepsSection />
      <Testemonials />
      <FAQ />

      {/* CTA Section */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform How You Handle Home Repairs?
          </h2>
          <p className="text-gray-400 mb-8 text-sm md:text-base">
            Join thousands of happy homeowners who&apos;ve simplified their home maintenance
          </p>
          <button
            onClick={() => router.push('/services')}
            className="w-full md:w-auto bg-white text-black px-6 py-3 rounded-lg text-lg font-medium">
            Get Started Now
          </button>
        </div>
      </section>

    </div>
  )
};

export default Home
