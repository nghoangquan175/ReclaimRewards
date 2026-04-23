import React from 'react';

export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

export const faqData: FAQItem[] = [
  {
    question: "What is the Reclaim Rewards program?",
    answer: "Reclaim Rewards is an incentive program designed to reward HVAC-R businesses for returning recovered refrigerant. By achieving growth targets above your baseline, you can earn points redeemable for vouchers and qualify for major travel incentives."
  },
  {
    question: "Who can participate in the program?",
    answer: "The program is open to all registered Australian businesses with a valid ABN and a current RTA AU licence. Participants must return refrigerant through participating wholesalers such as Airefrig Australia or Actrol."
  },
  {
    question: "Is there a cost to participate?",
    answer: "No, participation in the Reclaim Rewards program is completely free for eligible businesses. Simply register your business details to start tracking your returns and earning rewards."
  },
  {
    question: "How long does the program run?",
    answer: "The current program period runs from 1 July 2026 to 30 June 2027. Registration typically occurs in the months leading up to the start of the return period."
  },
  {
    question: "When is the registration deadline?",
    answer: "Businesses should register by 30 June 2026 to ensure all returns from the start of the program period are tracked correctly. Please check your confirmation email for specific verification deadlines."
  },
  {
    question: "Where must refrigerant be returned?",
    answer: "Refrigerant must be returned through participating wholesaler branches, specifically Airefrig Australia and Actrol. Ensure your returns are logged against your registered business ABN."
  },
  {
    question: "What is the leaderboard?",
    answer: "The leaderboard is a live ranking system that shows how your business compares to others in the program based on total reclaim volume and growth. Top performers on the leaderboard qualify for the Japan trip."
  },
  {
    question: "What do participating businesses need to do?",
    answer: "Participants need to register their business, recover refrigerant during their normal operations, and return it to participating wholesalers. No additional paperwork is required for tracking once registered."
  },
  {
    question: "What happens if cylinders are returned outside participating wholesalers?",
    answer: "Returns made to non-participating wholesalers or under different account details will not be tracked toward your Reclaim Rewards total or contribute to your growth target."
  },
  {
    question: "Who should participants contact for help?",
    answer: "For any questions regarding your registration, baseline volume, or point balance, please contact the Reclaim Rewards program team via the contact form or through your local A-Gas representative."
  }
];
