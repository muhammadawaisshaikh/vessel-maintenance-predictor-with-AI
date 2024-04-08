import { Metadata } from 'next'
import { ArrowTrendingUpIcon, ShieldCheckIcon, BoltIcon } from '@heroicons/react/16/solid';

export const metadata: Metadata = {
  title: 'Home',
}

const Home: React.FC = () => {
  return (
    <main className="min-h-screen">
      <div className="bg-gray-100">
        <main className="mt-0">
          <section className="bg-gray-800 py-16 relative min-h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center z-0 h-full" style={{ backgroundImage: "url('https://sbntech.com/wp-content/uploads/2022/08/Picture-1v2.jpg')", mixBlendMode: "difference" }}></div>
            <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                The #1 end-to-end Vessel Maintenance Predictor with AI
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                All components you need to tell the story of your Vessel. In one place.
              </p>
              <div className="mt-8">
                <a href="#" className="inline-block bg-indigo-500 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-600">
                  Get Started
                </a>
              </div>
            </div>
          </section>

          <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-extrabold text-gray-900 text-center">Why Choose Our Vessel Maintenance Predictor?</h2>
              <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
                <div className="flex flex-col text-center items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-500 text-white">
                      <ArrowTrendingUpIcon className='p-2' />
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-900">Efficiency</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Predict maintenance needs accurately, enhancing operational efficiency and minimizing downtime.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col text-center items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-500 text-white">
                      <BoltIcon className='p-2' />
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-900">Quicker</h3>
                    <p className="mt-2 text-base text-gray-500">
                      AI-driven insights enable swift decision-making, ensuring rapid response to maintenance requirements.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col text-center items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-500 text-white">
                      <ShieldCheckIcon className='p-2' />
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-900">Reliability</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Trust in our AI-powered maintenance predictions for reliable vessel operations and enhanced safety.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="cardGridStack" className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="title-container col-12 mb-16">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center">Our Vessel Maintenance Services</h2>
              </div>
              <div className="card-grid-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="wp-block-aero-cards col-span-1">
                  <a className="card-container block" href="/commercial/services/truengine" target="_self" rel="noopener">
                    <div className="card-image-block h-72">
                      <img className="img-fluid h-full object-cover" src="https://wayl.eu/media/things-to-know-maintenance.jpg" alt="GE Aerospace Image" />
                    </div>
                    <div className="card-body mt-4">
                      <h4 className="card-title heading-200 mb-2 font-bold">Planned Maintenance</h4>
                      <p className="card-sub-text body-2">Helping you maximize asset value with greater operational assurance.</p>
                    </div>
                  </a>
                </div>
                <div className="wp-block-aero-cards col-span-1">
                  <a className="card-container block" href="/commercial/services/on-wing-support" target="_self" rel="noopener">
                    <div className="card-image-block h-72">
                      <img className="img-fluid h-full object-cover" src="https://wayl.eu/media/maintenance-wayl-1.jpg" alt="GE Aerospace Image" />
                    </div>
                    <div className="card-body mt-4">
                      <h4 className="card-title heading-200 mb-2 font-bold">Modularized ship management</h4>
                      <p className="card-sub-text body-2">Flexible value-added repairs when you need it, where you need it.</p>
                    </div>
                  </a>
                </div>
                <div className="wp-block-aero-cards col-span-1">
                  <a className="card-container block" href="/commercial/services/on-wing-support" target="_self" rel="noopener">
                    <div className="card-image-block h-72">
                      <img className="img-fluid h-full object-cover" src="https://t4.ftcdn.net/jpg/03/88/66/25/360_F_388662510_v4BK8jPXstLx5CD140sob43Y1qxWUZ3G.jpg" alt="GE Aerospace Image" />
                    </div>
                    <div className="card-body mt-4">
                      <h4 className="card-title heading-200 mb-2 font-bold">Corrective / Breakdown Maintenance</h4>
                      <p className="card-sub-text body-2">Ensure retention of the highest level of performance and residual value.</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>


        </main>
      </div>
    </main>
  );
}

export default Home;