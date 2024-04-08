import { Metadata } from 'next'
import Image from 'next/image';
import LoginForm from '@/app/components/auth/loginForm';

export const metadata: Metadata = {
  title: 'Login',
}

export default function Login() {
  return (
    <main className="min-h-screen">
      <section className="bg-gray-800 py-16 relative flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center z-0 h-full" style={{ backgroundImage: "url('https://maintenanceandcure.com/wp-content/uploads/2020/09/surveyor-inspection-ship-repair-from-tablet.jpg')", mixBlendMode: "difference" }}></div>
        <div className="max-w-7xl mx-auto text-center px-4 mt-16 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Vessel Maintenance Prediction AI
          </h2>
        </div>
      </section>

      <div className="w-full">
        <LoginForm />
      </div>
    </main>
  );
}
