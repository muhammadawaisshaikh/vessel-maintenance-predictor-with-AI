import { Metadata } from 'next'
import AddVesselComp from '@/app/components/vessel/addVessel';

export const metadata: Metadata = {
  title: 'Generate Prediction Report',
}
 
const AddVessel: React.FC = () => {
  return (
    <main className="min-h-screen">
      <AddVesselComp />
    </main>
  );
}
export default AddVessel;