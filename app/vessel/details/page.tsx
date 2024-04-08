import { Metadata } from 'next';
import VesselDetailsComp from '@/app/components/vessel/vesselDetails';

export const metadata: Metadata = {
  title: 'Vessel Prediction Report',
}
 
const VesselDetails: React.FC = () => {
  return (
    <main className="min-h-screen">
      <VesselDetailsComp />
    </main>
  );
}
export default VesselDetails;