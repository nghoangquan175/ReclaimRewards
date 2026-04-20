import React from 'react';
import { ServiceCard } from '../_block/ServiceCard';
import { Button } from '@/components/ui/Button';

/**
 * HomeServices section implementing the "How it works" block.
 * Based on Figma node 307:5665.
 */
export default function HomeServices() {
  const steps = [
    {
      step: 1,
      title: 'Register',
      description: 'Scan the QR or hit the button. Register your business during May and June 2026.',
      iconSrc: '/images/service-steps/step-1.png',
    },
    {
      step: 2,
      title: 'Recover and return',
      description: 'Return refrigerant via participating wholesalers (Airefrig Australia and Actrol) between 1 July 2026 and 30 June 2027.',
      iconSrc: '/images/service-steps/step-2.png',
    },
    {
      step: 3,
      title: 'Earn rewards',
      description: 'Every extra kg earns points. Return more to unlock travel incentives.',
      iconSrc: '/images/service-steps/step-3.png',
    },
  ];

  return (
    <section className="bg-grey50 py-20 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto max-w-[1440px] flex flex-col gap-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 overflow-hidden">
          <h2 className="HeadingLBold text-blue950 max-w-xl">
            How it works
          </h2>
          <Button 
            variant="primary" 
            theme="on-light" 
            icon="arrow_forward"
          >
            Register your business
          </Button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item) => (
            <ServiceCard 
              key={item.step}
              step={item.step}
              title={item.title}
              description={item.description}
              iconSrc={item.iconSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
