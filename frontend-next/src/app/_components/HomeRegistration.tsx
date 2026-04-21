'use client';

import React from 'react';
import Image from 'next/image';
import { InputText } from '@/components/ui/InputText';
import { Checkbox } from '@/components/ui/Checkbox';
import { ButtonPrimaryOnLight } from '@/components/ui/ButtonPrimaryOnLight';
import { IconArrowRight } from '@/components/ui/icons/IconArrowRight';

/**
 * HomeRegistration section implementing the "Register your business" form.
 * Based on Figma node 307:6027.
 */
export default function HomeRegistration() {
    return (
        <section className="bg-grey50 py-[60px] px-6 md:px-12 lg:px-[40px] flex justify-center overflow-visible">
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
                            <InputText
                                label="First Name"
                                placeholder="Daniel"
                            />
                            <InputText
                                label="Last Name"
                                placeholder="Works"
                            />
                        </div>

                        {/* Email and Mobile (2 columns) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            <InputText
                                label="Work Email"
                                placeholder="daniel@gmail.com"
                            // helperText="it should be an organisation email"
                            />
                            <InputText
                                label="Mobile Number"
                                placeholder="+01 234 567 890"
                            />
                        </div>

                        {/* Leaderboard Alias */}
                        <InputText
                            label="Leaderboard Alias"
                            placeholder="Pick a fun alias. Inappropriate names may be removed or lead to disqualification."
                        />

                        {/* Company Info (2 columns) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <InputText
                                label="Company Name"
                                placeholder="Input"
                            />
                            <InputText
                                label="Company ABN Number"
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


                            <InputText
                                label="If Other"
                                placeholder="Input"
                            />
                            <InputText
                                label="Refrigerant Trading Authorisation (RTA) number (AU Licence Number)"
                                placeholder="AU-00000"
                            />


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
                            <ButtonPrimaryOnLight
                                className="w-full md:w-fit py-4 rounded-full"
                            >
                                Join the challenge
                            </ButtonPrimaryOnLight>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
}
