'use client';

import React, { useEffect, useState } from 'react';
import useLoadingStore from '@/store/LoadingStore';
import useVesselStore from '@/store/vessel-details.store';
import Image from 'next/image';

import PLOT_1 from '@/public/images/Plot_1.png'
import PLOT_2 from '@/public/images/Plot_2.png'
import PLOT_3 from '@/public/images/Plot_3.png'
import PLOT_4 from '@/public/images/Plot_4.png'
import PLOT_5 from '@/public/images/Plot_5.png'

const VesselDetailsComp: React.FC<any> = () => {
  const vesselStore = useVesselStore();
  const loadingStore = useLoadingStore();

  useEffect(() => {
    loadingStore.setIsLoading(true);

    setTimeout(() => {
      loadingStore.setIsLoading(false);
    }, 2000);
  }, [])

  return (
    <div>
      <section className="bg-gray-800 py-16 relative flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center z-0 h-full" style={{ backgroundImage: "url('https://www.seamagazine.com/wordpress/wp-content/uploads/2023/09/p2.jpg')", mixBlendMode: "difference" }}></div>
        <div className="max-w-7xl mx-auto text-center px-4 mt-16 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Vessel Maintenance Prediction Report
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            <strong>Ship ID</strong>: {vesselStore.vessel.shipId}
          </p>
          <p className="mt-4 text-lg text-gray-300">
            <strong>Shipping Company Name</strong>: {vesselStore.vessel.shippingCompanyName}
          </p>
          <p className="mt-4 text-lg text-gray-300">
            <strong>Carrier Vessel</strong>: {vesselStore.vessel.carrierVessel}
          </p>
          <p className="mt-4 text-lg text-gray-300">
            <strong>Vessel Component</strong>: {vesselStore.vessel.vesselComponent}
          </p>
          <p className="mt-4 text-lg text-gray-300">
            <strong>Prediction Date</strong>: {new Date().toISOString()}
          </p>
        </div>
      </section>

      <div className='bg-white shadow-md py-32'>
        <div className='plot-1 mx-32'>
          <Image src={PLOT_1} alt='PLOT_1' className='block m-auto' />
        </div>

        <div className='plot-2 pt-16 mx-32'>
          <Image src={PLOT_5} alt='PLOT_5' className='block m-auto' />
        </div>

        <div className='plot-2 pt-16 mx-32'>
          <Image src={PLOT_2} alt='PLOT_2' className='block m-auto' />
        </div>

        <div className='text-center p-8 shadow-lg rounded mx-32 mt-16'>
          <h3 className='font-bold text-2xl mb-4'>Results from Kolmogorov-Smirnov test:Kolmogorov-Smirnov statistic: 0.04769819839964129</h3>
          <h4>Kolmogorov-Smirnov critical value: 0.13402791648569978</h4>
          <p>At the 0.05 significance level, we can ACCEPT the hypothesis that the data comes from a weibull distribution (α=232.6955,β=1.4507)</p>
        </div>

        <div className='text-center p-8 shadow-lg rounded mx-32 mt-16'>
          <h3 className='font-bold text-2xl mb-4'>Results from optimal_replacement_time:</h3>
          <h4>The minimum cost per unit time is 342.25</h4>
          <p>The optimal replacement time is 128.58</p>
        </div>

        <div className='plot-2 pt-16 flex flex-wrap mx-32'>
          <Image src={PLOT_3} alt='PLOT_3' className='block m-auto w-1/2' />
          <Image src={PLOT_4} alt='PLOT_4' className='block m-auto w-1/2' />
        </div>
      </div>
    </div>
  );
}
export default VesselDetailsComp;