import React from 'react';
import { Hero } from '../components/home/Hero';
import { TherapeuticCategories } from '../components/home/TherapeuticCategories';
import { FeaturedProductsSection } from '../components/home/FeaturedProductsSection';
import { QualityCommitment } from '../components/home/QualityCommitment';
import { EnquiryCTA } from '../components/home/EnquiryCTA';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <TherapeuticCategories />
      <FeaturedProductsSection />
      <QualityCommitment />
      <EnquiryCTA />
    </div>
  );
};
