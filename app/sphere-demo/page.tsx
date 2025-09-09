import ThreeDSphereSection from '@/components/ThreeDSphereSection';

export default function ThreeDSpherePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sphere-navy-dark via-sphere-navy-medium to-sphere-navy-light">
      <ThreeDSphereSection />
    </main>
  );
}

export const metadata = {
  title: '3D Sphere Demo - Infinity Engineerings',
  description: 'Interactive 3D sphere showcasing innovative fire protection systems',
};