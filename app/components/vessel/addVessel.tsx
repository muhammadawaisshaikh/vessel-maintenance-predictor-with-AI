'use client';

import React, { useState } from 'react';
import useVesselStore from '@/store/vessel-details.store';
import { useRouter } from 'next/navigation';
import { DocumentArrowUpIcon } from '@heroicons/react/16/solid';
import { generatePredictionReport } from '@/core/api/vessel';

const AddVesselComp: React.FC<any> = () => {
  const router = useRouter();
  const vesselStore = useVesselStore();

  const [shipId, setShipId] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [vesselId, setVesselId] = useState('');
  const [componentId, setComponentId] = useState('');
  const [excelFile, setExcelFile] = useState<any | null>(null);

  const shippingCompanies = ['Saudi Ignition Marine'];
  const carrierVessels = ['Vessel 87', 'Vessel 91', 'Vessel 98'];
  const components = ['Propeller', 'Side Thruster', 'Filter'];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setExcelFile(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!excelFile) {
      console.error('No Excel file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', excelFile);

    let payload = {
      shipId: shipId,
      shippingCompanyName: companyName,
      carrierVessel: vesselId,
      vesselComponent: componentId
    };

    try {
      if (shipId && companyName && vesselId && componentId) {
        vesselStore.setVessel(payload);
        router.push('/vessel/details');
      } else {
        alert('Unable to Predict, Vessel Details are unavailable!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <section className="bg-gray-800 py-16 relative flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center z-0 h-full" style={{ backgroundImage: "url('https://www.seamagazine.com/wordpress/wp-content/uploads/2023/09/p2.jpg')", mixBlendMode: "difference" }}></div>
        <div className="max-w-7xl mx-auto text-center px-4 mt-16 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Generate Prediction Report
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Vessel Maintenance Predictor
          </p>
        </div>
      </section>

      <div className='bg-white shadow-md py-32'>
        <form onSubmit={handleSubmit} className="mx-auto p-6 container grid grid-cols-3 gap-4">
          <div className="mb-4">
            <label htmlFor="shipId" className="block text-gray-700">Ship ID</label>
            <input type="text" id="shipId" value={shipId} onChange={(e) => setShipId(e.target.value)} className="w-full px-4 py-2 border rounded mt-1" />
          </div>

          <div className="mb-4">
            <label htmlFor="companyName" className="block text-gray-700">Shipping Company Name</label>
            <select id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="w-full px-4 py-2 border rounded mt-1">
              <option value="">Select Shipping Company</option>
              {
                shippingCompanies.map((company, index) => (
                  <option key={index} value={company}>{company}</option>
                ))
              }
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="vesselId" className="block text-gray-700">Carrier Vessel</label>
            <select id="vesselId" value={vesselId} onChange={(e) => setVesselId(e.target.value)} className="w-full px-4 py-2 border rounded mt-1">
              <option value="">Select Carrier Vessel</option>
              {
                carrierVessels.map((vessel, index) => (
                  <option key={index} value={vessel}>{vessel}</option>
                ))
              }
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="componentId" className="block text-gray-700">Vessel Component</label>
            <select id="componentId" value={componentId} onChange={(e) => setComponentId(e.target.value)} className="w-full px-4 py-2 border rounded mt-1">
              <option value="">Select Component</option>
              {
                components.map((component, index) => (
                  <option key={index} value={component}>{component}</option>
                ))
              }
            </select>
          </div>

          <div className="mb-4">
            <input
              type="file"
              accept=".xlsx, .xls"
              id="excelInput"
              onChange={handleFileChange}
              className="hidden"
            />
            <label htmlFor="excelInput" className='flex items-center rounded-lg my-4 shadow-lg p-2'>
              <DocumentArrowUpIcon className='text-green-800 w-10 h-10' />
              <span className='ml-4'>
                {!excelFile && 'Upload Excel File'}
                {excelFile && `Selected File: ${excelFile.name}`}
              </span>
            </label>
          </div>

          <div className="mb-4 py-6">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Generate Vessel Maintenance Report</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddVesselComp;