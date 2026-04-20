import React from 'react';
import HomeBanner from './_components/HomeBanner';
import HomeServices from './_components/HomeServices';
import HomeRewards from './_components/HomeRewards';
import HomeBenefit from './_components/HomeBenefit';
import HomeEligibility from './_components/HomeEligibility';
import HomeFAQsection from './_components/HomeFAQsection';
import HomeRegistration from './_components/HomeRegistration';

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
      <HomeBanner />

      {/* Program Steps / Services Section */}
      <HomeServices />

      {/* Rewards Overview Section */}
      <HomeRewards />

      {/* Benefits / Why Choose Section */}
      <HomeBenefit />

      {/* Eligibility Section */}
      <HomeEligibility />

      {/* FAQ Section */}
      <HomeFAQsection />

      {/* Registration Form Section */}
      <HomeRegistration />
    </div>
  );
}
