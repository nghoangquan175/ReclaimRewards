import React from 'react';
import HomeBanner from './_components/HomeBanner';
import HomeServices from './_components/HomeServices';
import HomeRewards from './_components/HomeRewards';
import HomeEligibility from './_components/HomeEligibility';
import HomeJapanTrip from './_components/HomeJapanTrip';
import HomeSustainability from './_components/HomeSustainability';
import HomeFAQsection from './_components/HomeFAQsection';
import HomeRegistration from './_components/HomeRegistration';

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
      <HomeBanner />

      {/* Registration Form Section */}
      <HomeRegistration />

      {/* Program Steps / Services Section */}
      <HomeServices />

      {/* Rewards Overview Section */}
      <HomeRewards />

      {/* Eligibility Section */}
      <HomeEligibility />

      {/* Japan Trip Details Section */}
      <HomeJapanTrip />

      {/* Sustainability / Why it Matters Section */}
      <HomeSustainability />

      {/* FAQ Section */}
      <HomeFAQsection />

    </div>
  );
}
