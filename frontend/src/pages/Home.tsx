import React from 'react';
import { Hero } from '../components/home/Hero';
import { StatsBar } from '../components/home/StatsBar';
import { TherapeuticCategories } from '../components/home/TherapeuticCategories';
import { QualityCommitment } from '../components/home/QualityCommitment';
import { FeaturedProductsSection } from '../components/home/FeaturedProductsSection';
import { EnquiryCTA } from '../components/home/EnquiryCTA';
import { FAQSection } from '../components/home/FAQSection';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <StatsBar />
      <TherapeuticCategories />
      <QualityCommitment />
      <FeaturedProductsSection />
      <EnquiryCTA />
      <FAQSection />
    </div>
  );
};
