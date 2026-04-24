import React from 'react';

export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

export const faqData: FAQItem[] = [
  {
    question: "What is the Reclaim Rewards program?",
    answer: "The Reclaim Rewards program is a 12month incentive initiative designed to encourage HVACR contractors and businesses to return recovered refrigerant for reclaim. Participants earn recognition and rewards based on the kilograms of refrigerant they return through participating wholesalers during the program period."
  },
  {
    question: "Who can participate in the program?",
    answer: "Australian HVAC-R businesses with a valid ABN and Refrigerant Trading Authorisation/Australian Licence, registered for the program."
  },
  {
    question: "Is there a cost to participate?",
    answer: "No. Participation in the Reclaim Rewards program is free."
  },
  {
    question: "How long does the program run?",
    answer: (
      <ul className="list-disc pl-5 flex flex-col gap-1">
        <li>The program runs for 12 months:</li>
        <li>Registration period: 1 May – 30 June 2026 (2 months)</li>
        <li>Return Period: 1 July 2026 – 30 June 2027 (12 months)</li>
      </ul>
    )
  },
  {
    question: "When is the registration deadline?",
    answer: "Registrations must be completed before 30 June 2026."
  },
  {
    question: "Where must refrigerant be returned?",
    answer: "Refrigerant must be returned via our participating wholesalers Actrol and/or Airefrig using standard reclaim cylinder return channels."
  },
  {
    question: "What is the leaderboard?",
    answer: "The leaderboard displays participant aliases and their returned refrigerant volumes. The leaderboard allows participants to track their progress and see how they are ranked compared to other participating businesses."
  },
  {
    question: "What do participating businesses need to do?",
    answer: (
      <div className="flex flex-col gap-2">
        <p>Participants must:</p>
        <ul className="list-disc pl-5 flex flex-col gap-1">
          <li>Register before 30 June 2026</li>
          <li>Return recovered refrigerant during the program period</li>
          <li>Use participating wholesalers</li>
          <li>Follow standard reclaim cylinder return procedures</li>
        </ul>
      </div>
    )
  },
  {
    question: "What happens if cylinders are returned outside participating wholesalers?",
    answer: "Returns outside participating wholesalers will not be eligible for reclaim rewards."
  },
  {
    question: "Who should participants contact for help?",
    answer: "Participants should contact their participating wholesaler branch representative. Additional help can be provided by contacting A-Gas customer service team on CustomerService.AU@agas.com"
  }
];
