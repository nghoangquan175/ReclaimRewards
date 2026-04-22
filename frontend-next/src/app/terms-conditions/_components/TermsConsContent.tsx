import React from 'react';

/**
 * TermsConsContent implementing the main text content for the Terms & Conditions.
 * Based on Figma node 550:3718.
 */
export default function TermsConsContent() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-[1440px] px-100 flex justify-center">

        {/* Content Column - Centered with large horizontal padding on desktop to match Figma px-[400px] */}
        <div className="flex flex-col gap-10 text-grey950">

          {/* Promoter */}
          <div className="flex flex-col gap-6">
            <h4 className="ContentLBold">Promoter</h4>
            <p className="ContentLRegular">
              A-Gas (Australia) Pty Limited (ABN 18 066 273 247), 9 -11 Oxford Road, Laverton North, VIC 3026.
            </p>
          </div>

          {/* Registration Period */}
          <div className="flex flex-col gap-6">
            <h4 className="ContentLBold">Registration Period</h4>
            <p className="ContentLRegular">
              12.01am (AEST) on 01/05/2026 to 11.59pm (AEST) on 30/06/2026.
            </p>
          </div>

          {/* Return Period */}
          <div className="flex flex-col gap-6">
            <h4 className="ContentLBold">Return Period</h4>
            <p className="ContentLRegular">
              12.01am (AEST) on 01/07/2026 to 11.59pm (AEST) on 30/06/2027.
            </p>
          </div>

          {/* Who can enter? */}
          <div className="flex flex-col gap-6">
            <h4 className="ContentLBold">Who can enter?</h4>
            <div className="flex flex-col gap-6 ContentLRegular">
              <p>Only Australian residents who:</p>
              <ul className="flex flex-col gap-6 px-10 list-none">
                <li><span className="ContentLBold">(a) </span>are aged 18 or over;</li>
                <li><span className="ContentLBold">(b) </span>have an Australian Business with a valid ABN;</li>
                <li><span className="ContentLBold">(c) </span>are licensed air-conditioning and refrigeration businesses operating within Australia (with a Refrigerant Trading Authorisation/Australian Licence no.);</li>
                <li><span className="ContentLBold">(d) </span>are successfully registered to take part in the A-Gas Reclaim Rewards Program <span className="ContentLBold">(Program)</span> and have an account with a participating channel partner; and</li>
                <li><span className="ContentLBold">(e) </span>can travel to Tokyo, Japan to take a Tier 2/Tier 3 prize in 2027/2028 (exact dates to be confirmed by the Promoter).</li>
                <p>(each, an eligible <span className="ContentLBold">Participating Business).</span></p>
              </ul>
              <p>
                Participation in the Program does not alter or replace any existing reclaim program arrangements between Participating Businesses and their wholesaler partners.
              </p>
              <p>
                All existing terms and conditions, and operational processes that apply to a Participating Business’ existing refrigerant reclaim programs with the wholesaler will continue to apply throughout the duration of the Program, except where explicitly stated otherwise within the relevant terms.
              </p>
            </div>
          </div>

          {/* Who can't enter? */}
          <div className="flex flex-col gap-6">
            <h4 className="ContentLBold">Who can't enter?</h4>
            <div className="flex flex-col gap-6 ContentLRegular">
              <p>Directors, officers, management and employees of:</p>
              <ul className="flex flex-col gap-6 px-10 list-none">
                <li><span className="ContentLBold">(a) </span>the Promoter; and</li>
                <li><span className="ContentLBold">(b) </span>the agencies, companies or participating premises associated with the Program</li>
              </ul>
            </div>
          </div>

          {/* Where will the competition run? */}
          <div className="flex flex-col gap-6">
            <h4 className="ContentLBold">Where will the competition run?</h4>
            <div className="flex flex-col gap-6 ContentLRegular">
              <p>
                The Program will run through an approved channel partners (such as Reece Group via Actrol and Reece HVAC stores) and Airefrig Australia in Australia <span className="ContentLBold">(Channel Partners).</span>
              </p>
              <p>For clarity, a Participating Business:</p>
              <ul className="flex flex-col gap-6 px-10 list-disc marker:font-bold">
                <li>must have an account with a Channel Partner to return reclaimed refrigerant (Reclaimed Refrigerant) to qualify for the Program. Where the Participating Business does not have an existing account, they must create one before returning the Reclaimed Refrigerant; and</li>
                <li>may return Reclaimed Refrigerant through more than one Channel Partner.</li>
              </ul>
              <p>
                Where the Participating Business returns Reclaimed Refrigerant through more than one Channel Partner, it is the Participating Business’ responsibility to ensure that the account holder and relevant account holder details are the same, accurate, and up to date for each Channel Partner.
              </p>
              <p>
                The Promoter may add additional Channel Partners at their discretion and will notify any Participating Business via email.
              </p>
            </div>
          </div>

          {/* Website */}
          <div className="flex flex-col gap-6">
            <h4 className="ContentLBold">Website</h4>
            <a
              href="https://reclaimrewards.agas.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ContentLRegular text-[#ec008c] underline"
            >
              https://reclaimrewards.agas.com/
            </a>
          </div>

          {/* Registration Steps */}
          <div className="flex flex-col gap-6">
            <h4 className="ContentLBold">Registration Steps</h4>
            <div className="flex flex-col gap-6 ContentLRegular">
              <p>To register for the Program, a Participating Business must:</p>
              <ol className="flex flex-col gap-6 px-10 list-decimal marker:font-bold">
                <li>
                  <span className="ContentLBold">Register</span><br />
                  Scan the QR code on promotional material or visit the Website and complete the registration form. As part of the registration process, Participating Businesses must nominate an alias to represent their business on the Program leaderboard.
                </li>
                <li>
                  <span className="ContentLBold">Submit Application</span><br />
                  Click Submit at the bottom of the form. A confirmation page will appear acknowledging that your application has been received.
                </li>
                <li>
                  <span className="ContentLBold">Provide Baseline Volume (if required)</span><br />
                  If you select “Other” as your usual reclaim wholesaler, you will be prompted to provide your total reclaim volume for the previous 12 months. This will be used to establish your baseline volume.
                </li>
                <li>
                  <span className="ContentLBold">Application Review</span><br />
                  Your registration will be reviewed by the Promoter.
                </li>
              </ol>
            </div>
          </div>

          {/* Confirmation and Next Steps */}
          <div className="flex flex-col gap-6">
            <h4 className="ContentLBold">Confirmation and Next Steps</h4>
            <div className="flex flex-col gap-6 ContentLRegular">
              <p>
                Once approved, you will receive a confirmation email outlining the next steps. This email confirms that your business and ABN are registered and eligible to participate in the Program.
              </p>
              <p>
                For clarity, registration for the Program must be completed by a company director, or a representative of the Participating Business with the explicit approval of the company director.
              </p>
            </div>
          </div>

          {/* Entry instructions */}
          <div className="flex flex-col gap-6">
            <h4 className="ContentLBold">Entry instructions</h4>
            <div className="flex flex-col gap-6 ContentLRegular">
              <p>To enter, a Participating Business must:</p>
              <ul className="flex flex-col gap-6 px-10 list-none">
                <li><span className="ContentLBold">(a) </span>during the Registration Period, successfully register their business to take part in the Program by following the Registration Steps above;</li>
                <li><span className="ContentLBold">(b) </span>ensure they have or create an account with an approved Channel Partner to be able to make Eligible Refrigerant Return/s and to qualify for the Program; then</li>
                <li><span className="ContentLBold">(c) </span>before the end of the Return Period, make Eligible Reclaimed Refrigerant Returns.</li>
              </ul>
            </div>
          </div>

          {/* Qualifying Return Volumes */}
          <div className="flex flex-col gap-6">
            <h4 className="ContentLBold">Qualifying Return Volumes</h4>
            <div className="flex flex-col gap-6 ContentLRegular">
              <p>All Participating Business are eligible for Tier 1 prizes.</p>
              <p>To be eligible to receive a Tier 2 prize, a Participating Business must:</p>
              <ul className="flex flex-col gap-6 px-10 list-none">
                <li><span className="ContentLBold">(a) </span>increase their returned Reclaimed Refrigerant volumes by at least 20% compared with the previous financial year’s returned volume (01/07/2025 to 30/06/2026) <span className="ContentLBold">(Baseline Volume Requirement)</span>; and</li>
                <li><span className="ContentLBold">(b) </span>have between 3 and 10 tonnes in return volume for the Return Period.</li>
              </ul>
              <p>To be eligible to receive a Tier 3 prize, a Participating Business must:</p>
              <ul className="flex flex-col gap-6 px-10 list-none">
                <li><span className="ContentLBold">(c) </span>meet the Baseline Volume Requirement; and</li>
                <li><span className="ContentLBold">(d) </span>return 10 tonnes in volume for the Return Period.</li>
              </ul>
            </div>
          </div>

          {/* Documentation */}
          <div className="flex flex-col gap-6">
            <h4 className="ContentLBold">Documentation</h4>
            <div className="flex flex-col gap-6 ContentLRegular">
              <p>
                Where a Participating Business has historically returned Refrigerant through wholesalers other than a Channel Partner, the Promoter will require documentation verifying the Participating Business’ previous financial year’s returned volume. Acceptable documentation may include:
              </p>
              <ul className="flex flex-col gap-2 px-10 list-disc marker:font-bold">
                <li>wholesaler return records;</li>
                <li>cylinder documentation;</li>
                <li>other verifiable records approved by the Promoter.</li>
              </ul>
              <p>For clarity:</p>
              <ul className="flex flex-col gap-2 px-10 list-disc marker:font-bold">
                <li>Documentation must be provided to the Promoter upon request and in a form acceptable to the Promoter;</li>
                <li>If no documentation is provided when requested, then the Participating Business is not eligible to win a prize; and</li>
              </ul>
              <p>
                If a Participating Business claims no reclaim history, then the Promoter will reserve the right to disqualify the business from eligibility.
              </p>
            </div>
          </div>

          {/* Qualifying Return Volume Measurement */}
          <div className="flex flex-col gap-6">
            <h4 className="ContentLBold">Qualifying Return Volume Measurement</h4>
            <div className="flex flex-col gap-6 ContentLRegular">
              <p>Returned Refrigerant volumes will be recorded based on the Promoter’s intake records including:</p>
              <ul className="flex flex-col gap-2 px-10 list-disc marker:font-bold">
                <li>cylinder receipt documentation;</li>
                <li>weight verification processes; and</li>
                <li>internal A-Gas tracking systems.</li>
              </ul>
              <p>Only Reclaim Refrigerant volumes confirmed by the Promoter during the reclaim intake process will count toward Qualifying Return Volume.</p>
              <p>For example, if a cylinder is weighed and the refrigerant volume was noted by the Participating Business before they returned the cylinder to a wholesaler. This would be considered an unconfirmed Return Volume and would not be included in the Qualifying Return Volume.</p>
              <p>Participating Businesses are responsible for ensuring cylinders are properly sealed and handled prior to return. The Promoter and Channel Partners will not be responsible for any Refrigerant lost due to leaking, damaged, lost, or improperly sealed cylinders.</p>
              <p>Where returned cylinders contain oil, water, other non-Refrigerant materials or substances, these components will be excluded from the Qualifying Return Volume totals.</p>
              <p>The Promoter’s testing and weight verification is final.</p>
            </div>
          </div>

          {/* Eligible Refrigerant Returns */}
          <div className="flex flex-col gap-6">
            <h4 className="ContentLBold">Eligible Refrigerant Returns</h4>
            <div className="flex flex-col gap-6 ContentLRegular">
              <p>
                The Promoter will accept all Reclaimed Refrigerant returned through the A-Gas reclaim process as cumulative volume toward the Qualifying Return Volume.
              </p>
              <ul className="flex flex-col gap-2 px-10 list-disc marker:font-bold">
                <li>All Reclaimed Refrigerant types are eligible, including mixed Refrigerant streams and Refrigerants containing, hydrochlorofluorocarbons (HCFCs), hydrofluorocarbons (HFCs), hydrofluoroolefins (HFOs) and hydrofluorocarbon blends (HFC blends).</li>
                <li>No Reclaimed Refrigerant purity requirements or stream classification requirements apply for the purposes of determining Qualifying Return Volumes.</li>
                <li>Where returned cylinders contain oil, water, or other non-Refrigerant materials or substances, the Promoter will determine the estimated Refrigerant content through its standard reclaim intake processes.</li>
                <li>Any oil, water, or other non-Refrigerant components or substances, will be excluded from the recorded Qualifying Return Volume.</li>
                <li>Only the estimated Reclaimed Refrigerant content will be counted toward the accumulated Program total.</li>
              </ul>
              <p>The Promoters determination of the Qualifying Return Volume is final.</p>
            </div>
          </div>

          {/* How many winners... */}
          <div className="flex flex-col gap-6">
            <h4 className="ContentLBold">How many winners will there be and how will they be chosen?</h4>
            <div className="flex flex-col gap-6 ContentLRegular">
              <p>This is a game of skill, chance plays no part in awarding a prize.</p>
              <div className="flex flex-col gap-6 px-10">
                <p className="ContentLBold">Tier 1</p>
                <p>For clarity, all Participating Business are eligible for Tier 1 prizes, subject to the allocated Reclaim Points being exhausted as set out below.</p>
                <p className="ContentLBold">Tier 2 and Tier 3</p>
                <p>There will be up to 5 winners (across Tier 2 and Tier 3, in any combination) determined in respect of this Program.</p>
                <p>To be eligible to win, Participating Businesses must first meet the Baseline Volume Requirement and Qualifying Return Volume.</p>
                <p>Winners will then be determined based on the highest returned volumes achieved during the Return Period.</p>
                <p>In the event of a tiebreaker, if more than 1 Participating Business returns the same total volume of Reclaimed Refrigerant, the highest volume increase percentage compared to their baseline volume will win the tiebreaker.</p>
                <p>
                  The Promoter may judge additional reserve entries and record them in order, in case a winning entry/entrant is deemed invalid or a prize is unclaimed <span className="ContentLBold">(Reserve Entrants).</span>
                </p>
              </div>
            </div>
          </div>

          {/* What can the business win? */}
          <div className="flex flex-col gap-6">
            <h4 className="ContentLBold">What can the business win?</h4>
            <div className="flex flex-col gap-6 ContentLRegular">
              <p>There are 3 tiers of prizing available, based on Qualifying Return Volumes achieved during the Return Period.</p>
              <div className="flex flex-col gap-6 px-10">
                <p className="ContentLBold">Tier 1 – Reclaim Points</p>
                <ul className="flex flex-col gap-6 px-5 list-disc marker:font-bold">
                  <li>Participating Businesses will receive 1 Reclaim Point for every kilogram of Reclaimed Refrigerant returned during the Return Period that exceeds their total reclaim volume from the previous financial year (01/07/2025 to 30/06/2026).</li>
                  <li>A minimum of 50 Reclaim Points and a maximum of 1,000 Reclaim Points can be claimed per Participating Business for the duration of the Program (12 months) and for up to 1,000kg of additional Reclaimed Refrigerant returned.</li>
                  <li>150,000 points are allocated to this part of the Program (Tier 1) across all Participating Businesses. Once the 150,000 Reclaim Points allocation is exhausted, no additional Reclaim Points will be awarded.</li>
                  <li>Each Reclaim Point has a monetary value of $0.50.</li>
                  <li>Reclaim Points cannot be rolled over into the following financial year.</li>
                  <li>Tier 1 Reclaim Points allocation will be calculated and rewards distributed by 30th September 2027 after the conclusion of the Program.</li>
                  <li>Participating Businesses will be notified via email and asked to claim their Reclaim Points.</li>
                  <li>The Promoter reserves the right to increase the Reclaim Points allocation at any time during the Program at their discretion.</li>
                  <li>The Promoter reserves the right to change the value of each Reclaim Point, at their discretion, by providing the participant written notice.</li>
                </ul>
                <p><span className="ContentLBold">Tier 2 - </span>Win a trip to Japan including two return economy class flights valued at up to $15,000.</p>
                <p><span className="ContentLBold">Tier 3 - </span>Win a trip to Japan including two return business class flights valued at up to $20,000.</p>
              </div>
              <p>For more Tier 2/Tier 3 prize information, please see the ‘Travel prize’ section below.</p>
              <p>Each Participating Business may only win one travel prize under the Program.</p>
              <p className="ContentLBold">Where a Participating Business qualifies for multiple prize within Tier 2 and Tier 3, they will receive the highest applicable prize only.</p>
            </div>
          </div>

          {/* Travel prize */}
          <div className="flex flex-col gap-6">
            <h4 className="ContentLBold">Travel prize</h4>
            <div className="flex flex-col gap-6 ContentLRegular">
              <p>If you win a Tier 2 or Tier 3 prize, your prize will be a trip for you and 1 adult companion to Tokyo, Japan valued at up to $15,000 (Tier 2)/$20,000 (Tier 3) (exact travel dates to be confirmed by the Promoter) which includes the following for you and your companion:</p>
              <ul className="flex flex-col gap-6 px-10 list-none">
                <li><span className="ContentLBold">(a) </span>return economy (Tier 2) or business (Tier 3) airfares (including airfare taxes) from your nearest Australian capital city to Tokyo, Japan and return transfers between the relevant Tokyo airport and the accommodation;</li>
                <li><span className="ContentLBold">(b) </span>6 nights accommodation in a minimum 3 star hotel including daily breakfast (as determined by the Promoter); and</li>
                <li><span className="ContentLBold">(c) </span>organised group activities, such as one site tour to the A-Gas Japan processing facility in Chiba, Japan.</li>
              </ul>
              <p className="ContentLBold">
                The Travel prize is subject to any applicable law or guidelines including in relation to a pandemic, any travel/government restrictions/directives, border closures, health advice and the like.
              </p>
              <p>
                For the avoidance of doubt, the travel prize winner and their companion must travel together to take the prize, and must make their own way to and from the relevant departure point and return point at their own expense.
              </p>
              <p>
                By accepting or participating in the travel prize, you must ensure that your companion is provided with a copy of these Terms and Conditions, and that your companion agrees with and will at all times comply with these Terms and Conditions.
              </p>
            </div>
          </div>

          {/* Total prize pool */}
          <div className="flex flex-col gap-6">
            <h4 className="ContentLBold">Total prize pool</h4>
            <div className="flex flex-col gap-2 ContentLRegular">
              <p>The Tier 1 prize pool is valued at up to $75,000.</p>
              <p>The Tier 2 and Tier 3 prize pool is valued at up to $100,000.</p>
              <p>The overall total prize pool is valued at up to $175,000.</p>
            </div>
          </div>

          {/* How many times can a business enter? */}
          <div className="flex flex-col gap-6">
            <h4 className="ContentLBold">How many times can a business enter?</h4>
            <div className="flex flex-col gap-6 ContentLRegular">
              <p>Entry is based on the registered Participating Business entity.</p>
              <p>Where a company operates multiple legally registered entities (for example separate ABNs across different states) and each entity registers independently, each registered entity will be treated as a separate Participating Business.</p>
              <p>
                The Promoter reserves the right to verify the legitimacy of separate business registrations. You must provide all reasonably required information to enable the Promoter to do this.
              </p>
            </div>
          </div>

          {/* How and when will the winner/s be informed? */}
          <div className="flex flex-col gap-6">
            <h4 className="ContentLBold">How and when will the winner/s be informed?</h4>
            <div className="flex flex-col gap-6 ContentLRegular">
              <p>
                Winning Participating Businesses will be notified by phone and in writing by email within 7 days of determination via the email and phone number associated with their Program account.
              </p>
              <p>Winner determination will take place by 30th September 2027.</p>
            </div>
          </div>

          {/* Who will the prize go to? */}
          <div className="flex flex-col gap-6">
            <h4 className="ContentLBold">Who will the prize go to?</h4>
            <div className="flex flex-col gap-6 ContentLRegular">
              <p>
                The prize will be awarded to the principal of the winning Participating Business <span className="ContentLBold">(Principal).</span>
              </p>
              <p>
                The Principal must advise the Promoter, within the time period specified by the Promoter, who is nominated as the winner of the prize.
              </p>
              <p>
                The Principal can nominate themselves, or choose another person at the Participating Business to be the winner. If the Principal nominates another person to be the winner, they must only nominate an adult who can take the prize. The nominated person will be known as the winner for the purposes of these Terms and Conditions and is deemed to accept these Terms and Conditions once they confirm their nomination in the format reasonably required by the Promoter.
              </p>
              <p>
                For clarity, the nominated person cannot be an immediate family member of the Principal unless they are already employed by the Participating Business.
              </p>
              <p>
                Where a Business has multiple Principals and those Principals disagree about who is the entrant (or if there is confusion for any reason), the Promoter may decide which of them wins the prize. The Promoter's decision is final in this regard.
              </p>
            </div>
          </div>

          {/* Unclaimed prize/s */}
          <div className="flex flex-col gap-6">
            <h4 className="ContentLBold">Unclaimed prize/s</h4>
            <div className="flex flex-col gap-6 ContentLRegular">
              <p><span className="ContentLBold">Prize claim date:</span> By the time and date stated in the winner notification email.</p>
              <p>
                If a prize has not been accepted or claimed by the prize claim date in the winner notification email or if, after making all reasonable attempts, the winner can't be contacted (or a winner does not contact the Promoter) by the prize claim date above, the relevant entry/ies will be discarded and the Promoter will re-award the relevant prize/s to the next Participating Business who returned the highest volume of refrigerant during the Return Period as set out in these Terms and Conditions and/or withdraw the prize as unawarded. Any such winner/s will be informed in writing via email.
              </p>
            </div>
          </div>

          {/* Collection and use of your personal information */}
          <div className="flex flex-col gap-6">
            <h4 className="ContentLBold">Collection and use of your personal information</h4>
            <div className="flex flex-col gap-6 ContentLRegular">
              <p>
                If you are a winner, you/your Participating Business and (if applicable) your companion/s must take part in all publicity, photography and other promotional activity as the Promoter requires, without any compensation. You consent, and must obtain all relevant consents regarding other relevant individuals at your Participating Business, and your companion/s, to the Promoter using your respective name/s and image/s and indicia in any promotional or advertising activity.
              </p>
              <p>
                The Promoter may collect your/your companion/s' personal information, or personal information about other relevant individuals at your Participating Business directly or through the Promoter's agents or contractors. The Promoter will use that personal information to conduct and manage the Program. The Promoter may disclose that personal information to the Promoter's related companies, agents and contractors to assist in conducting this Program, communicating with you/your companions or storing data. This may include disclosures to organisations outside Australia including in places such as Japan.
              </p>
              <p>
                By entering, you consent to receive email or SMS messages from the Promoter without any functional unsubscribe facility if they relate primarily to the conduct of this Program.
              </p>
              <p>
                The Promoter’s Privacy Policy (see <a href="http://www.agas.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="underline">www.agas.com/privacy-policy/</a>) includes information about:
              </p>
              <ul className="flex flex-col gap-6 px-10 list-none">
                <li><span className="ContentLBold">(a) </span>how to seek access to the personal information the Promoter holds about you and seek correction of the information; and</li>
                <li><span className="ContentLBold">(b) </span>how to complain about a privacy breach and how the Promoter will deal with such a complaint.</li>
              </ul>
            </div>
          </div>

          {/* General Terms */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6 ContentLRegular">
              <ol className="flex flex-col gap-6 px-10 list-decimal" start={11}>
                <li>These Terms and Conditions incorporate and must be read together with the details outlined in the table above. Information about prizes and how to enter forms part of these Terms and Conditions. By entering, you accept these Terms and Conditions.</li>
              </ol>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="ContentLBold">Registration</h4>
            <div className="flex flex-col gap-6 ContentLRegular">
              <ol className="flex flex-col gap-6 px-10 list-decimal" start={12}>
                <li>Your registration must be received during the Registration Period and will be deemed to be received only when received by the Promoter. You will receive a return message confirming your registration. The Promoter is not liable for any problems with communications networks outside its reasonable control. You are responsible for your own costs associated with entering. If you enter using automatically generated entries or multiple phone numbers/email addresses/addresses/aliases, you may be disqualified.</li>
              </ol>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="ContentLBold">Prizes</h4>
            <div className="flex flex-col gap-6 ContentLRegular">
              <ol className="flex flex-col gap-6 px-10 list-decimal" start={13}>
                <li>
                  Prizes and all elements of prizes must be taken as specified, as and when offered and cannot be altered or changed in any way by you or will be forfeited, and if forfeited, the Promoter will not be liable. If you forfeit the prize or any element of the prize for whatever reason, you will not be given cash or any alternative prize as a substitute. Prize/s are subject to any additional terms and conditions imposed by the relevant supplier or the Promoter, including, as relevant:
                  <ul className="flex flex-col gap-6 mt-2 pl-6 list-none">
                    <li><span className="ContentLBold">(a) </span>validity period/s;</li>
                    <li><span className="ContentLBold">(b) </span>booking and availability of flights, accommodation and events;</li>
                    <li><span className="ContentLBold">(c) </span>conditions of travel and conditions of entry into any event venues (including behaviour requirements, health and safety requirements and applicable dress codes);</li>
                    <li><span className="ContentLBold">(d) </span>conditions of ticket validity and any restrictions on ticket on-sale or transfer;</li>
                    <li><span className="ContentLBold">(e) </span>travel dates and specified travel exclusion periods;</li>
                    <li><span className="ContentLBold">(f) </span>any additional fees (payable by you) relating to changes made by you/your companion to a travel/event prize after it has been booked;</li>
                    <li><span className="ContentLBold">(g) </span>the requirement to obtain all necessary documents to travel to any overseas location specified, including a current and valid passport and any visas required; and</li>
                    <li><span className="ContentLBold">(h) </span>a requirement to present your credit card when checking in to accommodation.</li>
                  </ul>
                </li>
                <li>You/your companion/s are responsible for all other unspecified costs related to the prize, including meals, transport, insurance (including excesses), in-room charges, additional taxes, mobile or data plans, costs associated with ongoing use of the prize, etc. Event tickets can only be used once and will be deemed invalid if copied. The Promoter does not control entry to the relevant event location. The winner/s must keep their tickets safe and the Promoter will not replace lost or stolen tickets.</li>
                <li>The Promoter is not responsible for any dispute between you and any person with whom you choose to, or choose not to, share a prize.</li>
                <li>Where relevant, the Promoter accepts no responsibility if one or more of the events or activities awarded as part of the prize are abandoned, called off or postponed for any reason beyond the Promoter's reasonable control. In that case you/your companion/s forfeit your entitlement to that event/activity and the Promoter may provide another item of equal or higher value.</li>
              </ol>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="ContentLBold">General</h4>
            <div className="flex flex-col gap-6 ContentLRegular">
              <ol className="flex flex-col gap-6 px-10 list-decimal" start={17}>
                <li>Any material failure by you or (if applicable) your companion/s to comply with the conditions imposed by the prize supplier(s) may result in the prize being cancelled or withdrawn without liability for the Promoter or the prize supplier(s).</li>
                <li>For event-based/travel prizes, you and (if applicable) your companion/s accept that some aspects of the prize may be inherently risky and that the prize may involve dangerous activities.</li>
                <li>If specified, in order to participate in the activity/activities awarded as part of the prize, you/your companion/s must comply with any applicable conditions (e.g. height, weight, health and fitness requirements). You must ensure that you/your companion/s are healthy and fit enough to take the prize. You/your companion/s must follow all requirements of the people responsible for managing the relevant activity/ies.</li>
              </ol>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6 ContentLRegular">
              <p>
                110. You/your companion/s must, if required by the Promoter, sign disclaimer and release forms provided by the Promoter in favour of the Promoter and other parties before taking the prize. If you or any companion/s do not sign, your entry will be deemed invalid and you will lose any entitlement to a prize.
              </p>
              <p>
                111. If you or your entry are deemed by the Promoter to breach these Terms and Conditions materially including if the prize is on set dates and you are unable to take the prize on the relevant date/s, your entry (or at the Promoter's discretion, all of your entries) may be discarded. The Promoter may, at any time, require you to produce documentation to establish to the Promoter's reasonable satisfaction the validity of your entries and/or verifying your identity (including documentation establishing your identity, age, place of residence and place of employment). Failure by the Promoter to enforce any of its rights at any stage does not waive those rights.
              </p>
              <div>
                112. You must not:
                <ul className="flex flex-col gap-6 mt-6 px-10 list-none">
                  <li><span className="ContentLBold">(a) </span>tamper with the entry process (including but not limited to manipulating the system via bots, script use, or any other means to circumvent the entry process);</li>
                  <li><span className="ContentLBold">(b) </span>engage in any conduct that may jeopardise the fair and proper conduct of the competition;</li>
                  <li><span className="ContentLBold">(c) </span>act in a disruptive, annoying, threatening, abusive or harassing manner;</li>
                  <li><span className="ContentLBold">(d) </span>do anything that may diminish the good name or reputation of the Promoter or any of its related entities or of the agencies or companies associated with this competition;</li>
                  <li><span className="ContentLBold">(e) </span>breach any law; or</li>
                  <li><span className="ContentLBold">(f) </span>behave in a way that is otherwise inappropriate.</li>
                </ul>
              </div>
              <p>
                113. If companion/s can take the prize with you, you are responsible for your companion/s and the Promoter may disqualify all entries from, and prohibit further participation in this competition by, you or any or all of your companion/s if they materially breach these conditions, whether or not legally bound by them.
              </p>
              <p>
                114. If you (or your companion/s, if applicable), in the reasonable opinion of the Promoter (and/or a medical professional, as relevant to the circumstances), are intoxicated, under the influence of alcohol or any other drug, behave aggressively or offensively, or behave in a manner which may diminish the good name or reputation of the Promoter or any of its related entities or the agencies or companies associated with this competition, is contrary to law or is otherwise inappropriate, the Promoter may cancel the prize or restrict you (and your companion/s) from participating in any elements of the prize, at its discretion.
              </p>
              <p>
                115. The Promoter is not liable for entries, prize claims or correspondence that are misplaced, misdirected, delayed, lost, incomplete, illegible or incorrectly submitted for reasons outside the Promoter's reasonable control.
              </p>
              <p>
                116. If any dispute arises between you and the Promoter concerning the conduct of this competition or claiming a prize, the Promoter will take reasonable steps to consider your point of view, taking into account any facts or evidence you put forward, and to respond to it fairly within a reasonable time. In all other respects, the Promoter’s decision in connection with all aspects of this competition is final.
              </p>
              <p>
                117. Prizes cannot be transferred or exchanged nor redeemed for cash. Without limiting any other term of these Terms and Conditions, all prizes (and elements of prizes) must be taken as and when specified, or will be forfeited with no replacement. The prize values are correct as at the date of preparing these Terms and Conditions and include any applicable GST. The Promoter is not responsible for any change in prize value. You agree that if a prize (or element of a prize) is unavailable for any reason the Promoter may provide another item of equal or higher value.
              </p>
              <p>
                118. By entering, you request that your full address not be published.
              </p>
              <p>
                119. If this competition cannot run as planned for any reason beyond the Promoter's control (for example due to software, hardware or communications issues, unauthorised intervention, tampering, fraud or technical failure, government directives, a pandemic, public health orders and the like), the Promoter may end, change, suspend or cancel the competition or disqualify affected entries/entrants.
              </p>
              <p>
                120. The Promoter is not responsible for any tax implications arising from you winning a prize. You should seek independent financial advice. If for GST purposes this competition results in any supply being made for non-monetary consideration, you must follow the Australian Taxation Office’s stated view that where the parties are at arm’s length, goods and services exchanged are of equal GST inclusive market values.
              </p>
            </div>
          </div>

          {/* Liability */}
          <div className="flex flex-col gap-6">
            <h4 className="ContentLBold">Liability</h4>
            <div className="flex flex-col gap-6 ContentLRegular">
              <p>
                121. You may have consumer rights under statute including under the Competition and Consumer Act 2010 (Cth), which may be relevant to any issue or problem you encounter in relation to this competition and cannot be excluded or restricted. Nothing in these Terms and Conditions excludes or restricts those rights. See <a href="http://www.accc.gov.au" target="_blank" rel="noopener noreferrer" className="underline">www.accc.gov.au</a> for more information about those rights.
              </p>
              <p>
                122. Subject to the previous paragraph, the Promoter and the agencies and companies associated with this competition are not liable (including in negligence) for any loss (including indirect, special or consequential loss or loss of profits), expense, damage, personal injury (including allergies, skin conditions or other reactions, as relevant), illness or death suffered in connection with this competition or any prize, except for any liability which under statute cannot be excluded (in which case that liability is limited to the greatest extent allowed by law).
              </p>
              <p>
                123. Without limiting the previous paragraphs, the Promoter and the agencies and companies associated with this competition are not liable for any loss of, damage to or delay in delivery of prize/s, or for any damage that occurs to displayed prize/s (where relevant), due to circumstances beyond the Promoter's reasonable control. Unless otherwise specified, prize/s will only be delivered to addresses in Australia.
              </p>
              <p>
                124. This competition is in no way sponsored, endorsed or administered by, or associated with any social media platform, including Facebook, Instagram and X. You provide your information to the Promoter and not to any social media platform. You completely release any relevant social media platforms from any and all liability.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
