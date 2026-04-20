'use client';

import React from 'react';
import Image from 'next/image';
import { RegisterInput } from '@/components/ui/RegisterInput';
import { Checkbox } from '@/components/ui/Checkbox';
import { Button } from '@/components/ui/Button';

/**
 * HomeRegistration section implementing the "Register your business" form.
 * Based on Figma node 307:6027.
 */
export default function HomeRegistration() {
    return (
        <section className="bg-grey100 py-[60px] px-6 md:px-12 lg:px-[40px] flex justify-center overflow-visible">
            {/* Decorative center wrapper to allow icon overflow */}
            <div className="relative w-full max-w-[900px] mt-12 md:mt-0">

                {/* Top Decorative Icons */}
                <div className="absolute top-[-54px] left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                    <div className="relative w-[138px] h-[120px]">
                        <Image
                            src="/images/reg-vector.svg"
                            alt=""
                            fill
                            className="object-contain"
                        />
                        <div className="absolute left-[39px] top-[30px] size-[60px]">
                            <Image
                                src="/images/reg-icon.svg"
                                alt="Registration Icon"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Main Form Container */}
                <div className="bg-white rounded-[24px] px-6 md:px-10 pt-[100px] pb-[40px] shadow-sm flex flex-col gap-10 items-center">

                    <h2 className="HeadingMBold text-blue950 text-center w-full">
                        Register your business
                    </h2>

                    <form className="w-full flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>

                        {/* Name Fields (2 columns) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <RegisterInput
                                label="First Name"
                                variant="blue"
                                placeholder="Daniel"
                            />
                            <RegisterInput
                                label="Last Name"
                                variant="blue"
                                placeholder="Works"
                            />
                        </div>

                        {/* Email and Mobile (2 columns) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            <RegisterInput
                                label="Work Email"
                                variant="pink"
                                placeholder="daniel@gmail.com"
                                helperText="it should be an organisation email"
                            />
                            <RegisterInput
                                label="Mobile Number"
                                variant="grey"
                                placeholder="0000 000 000"
                            />
                        </div>

                        {/* Leaderboard Alias */}
                        <RegisterInput
                            label="Leaderboard Alias"
                            variant="grey"
                            placeholder="Pick a fun alias. Inappropriate names may be removed or lead to disqualification."
                        />

                        {/* Company Info (2 columns) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <RegisterInput
                                label="Company Name"
                                variant="grey"
                                placeholder="Input"
                            />
                            <RegisterInput
                                label="Company ABN Number"
                                variant="grey"
                                placeholder="Must contain 11 digits"
                            />
                        </div>

                        {/* Wholesaler Question */}
                        <div className="flex flex-col gap-8">
                            <p className="ContentMRegular text-grey950">
                                Which wholesaler do you typically return reclaim cylinders through? (check all that apply)
                            </p>
                            <div className="flex flex-wrap gap-8">
                                <div className="bg-grey50 rounded-[8px] pl-3 pr-6 py-3 flex items-center gap-4">
                                    <Checkbox />
                                    <span className="ContentMRegular text-grey950">Airefrig</span>
                                </div>
                                <div className="bg-grey50 rounded-[8px] pl-3 pr-6 py-3 flex items-center gap-4">
                                    <Checkbox />
                                    <span className="ContentMRegular text-grey950">Actrol/Reece</span>
                                </div>
                                <div className="bg-grey50 rounded-[8px] pl-3 pr-6 py-3 flex items-center gap-4">
                                    <Checkbox />
                                    <span className="ContentMRegular text-grey950">Other</span>
                                </div>
                            </div>
                        </div>

                        {/* Other Input & RTA Number */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <RegisterInput
                                label="If Other"
                                variant="grey"
                                placeholder="Input"
                            />
                            <RegisterInput
                                label="Refrigerant Trading Authorisation (RTA) number (AU Licence Number)"
                                variant="grey"
                                placeholder="AU-00000"
                            />
                        </div>

                        {/* Confirmation Statements */}
                        <div className="flex flex-col gap-6 pt-2">
                            <Checkbox label="I confirm I am 18 years or older" />
                            <Checkbox label="I confirm I am the owner, director, or authorised representative of the business" />
                            <Checkbox label="I understand that my leaderboard alias will be displayed publicly." />
                            <Checkbox label="I agree to the Terms & Conditions and acknowledge that my personal information will be collected and used in accordance with the A-Gas Privacy Policy." />
                            <Checkbox label="I consent to A-Gas requesting program-related information from participating wholesalers, including total reclaim volumes, for the purpose of administering the program and verifying refrigerant returns." />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center pt-4">
                            <Button className="w-full md:w-fit px-8 py-4 rounded-full">
                                Join the challenge
                            </Button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
}
