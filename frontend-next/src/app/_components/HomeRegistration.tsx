'use client';

import React from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { InputText } from '@/components/ui/InputText';
import { Checkbox } from '@/components/ui/Checkbox';
import { ButtonPrimaryOnLight } from '@/components/ui/ButtonPrimaryOnLight';
import NotificationPopup from '@/components/ui/NotificationPopup';
import japanIcon from '@/assets/icons/japan.svg';
import { useState } from 'react';

// Define the validation schema
const registrationSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address').min(1, 'Email is required'),
    phone: z.string().min(1, 'Phone number is required'),
    leaderboardAlias: z.string().min(1, 'Leaderboard alias is required'),
    companyName: z.string().min(1, 'Company name is required'),
    abn: z.string().length(11, 'ABN must be exactly 11 digits').regex(/^\d+$/, 'ABN must only contain digits'),
    wholesalers: z.array(z.string()).min(1, 'Please select at least one wholesaler'),
    otherWholesaler: z.string().optional(),
    rtaNumber: z.string().min(1, 'RTA number is required').regex(/^AU/i, 'RTA number must start with "AU"'),
    is18OrOlder: z.boolean().refine((val) => val === true, {
        message: 'You must be at least 18 years old',
    }),
    isAuthorised: z.boolean().refine((val) => val === true, {
        message: 'You must be an authorised representative',
    }),
    publicAliasConsent: z.boolean().refine((val) => val === true, {
        message: 'You must consent to the public alias display',
    }),
    termsConsent: z.boolean().refine((val) => val === true, {
        message: 'You must agree to the Terms & Conditions',
    }),
    dataConsent: z.boolean().refine((val) => val === true, {
        message: 'You must consent to data sharing for verification',
    }),
});

type RegistrationFormValues = z.infer<typeof registrationSchema>;

/**
 * HomeRegistration section implementing the "Register your business" form.
 * Updated with React Hook Form and Zod validation.
 */
export default function HomeRegistration() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
    } = useForm<RegistrationFormValues>({
        resolver: zodResolver(registrationSchema),
        defaultValues: {
            wholesalers: [],
            is18OrOlder: false as any,
            isAuthorised: false as any,
            publicAliasConsent: false as any,
            termsConsent: false as any,
            dataConsent: false as any,
        },
    });

    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const onSubmit = (data: RegistrationFormValues) => {
        console.log('Form Submitted:', data);
        setShowSuccessPopup(true);
    };

    const selectedWholesalers = watch('wholesalers');

    const handleWholesalerToggle = (wholesaler: string) => {
        const current = selectedWholesalers || [];
        if (current.includes(wholesaler)) {
            setValue('wholesalers', current.filter(w => w !== wholesaler));
        } else {
            setValue('wholesalers', [...current, wholesaler]);
        }
    };

    return (
        <section id="registration" className="bg-grey100 py-[60px] px-6 md:px-10 flex justify-center">
            <div className="w-full max-w-[845px] flex flex-col items-center">

                {/* Top Header Bar */}
                <div className="bg-blue950 w-full h-[80px] flex items-center justify-between px-3 md:px-5 lg:px-10 rounded-t-[24px] overflow-hidden">
                    <div className="flex items-center gap-1">
                        <div className="ContentXLBold text-white whitespace-nowrap">
                            WIN A TRIP TO
                        </div>
                        {/* Japan Logo Icon */}
                        <div className="relative w-[100px] md:w-[130px] h-[32px] md:h-[40px]">
                            <Image
                                src={japanIcon}
                                alt="Japan"
                                width={107}
                                height={40}
                                className="object-contain object-left"
                            />
                        </div>
                    </div>
                    <span className="ContentXLBold text-white whitespace-nowrap">
                        RETURN FLIGHTS FOR TWO INCLUDED
                    </span>
                </div>

                {/* Main Form Container */}
                <div className="bg-white w-full rounded-b-[24px] p-4 md:p-5 lg:p-10 shadow-sm flex flex-col gap-10 items-center">

                    <h2 className="HeadingLBold md:text-[36px] text-blue950 text-center w-full">
                        Register Your Business
                    </h2>

                    <form className="w-full flex flex-col gap-10" onSubmit={handleSubmit(onSubmit)}>

                        <div className="flex flex-col gap-10">
                            {/* Name Fields (2 columns) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-8">
                                <InputText
                                    label="First Name"
                                    placeholder="Daniel"
                                    variant="grey"
                                    {...register('firstName')}
                                    error={!!errors.firstName}
                                    helperText={errors.firstName?.message}
                                />
                                <InputText
                                    label="Last Name"
                                    placeholder="Works"
                                    variant="grey"
                                    {...register('lastName')}
                                    error={!!errors.lastName}
                                    helperText={errors.lastName?.message}
                                />
                            </div>

                            {/* Email and Phone (2 columns) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-8">
                                <InputText
                                    label="Work Email"
                                    placeholder="daniel@gmail.com"
                                    variant="grey"
                                    {...register('email')}
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                />
                                <InputText
                                    label="Work Phone"
                                    placeholder="0000 000 000"
                                    variant="grey"
                                    {...register('phone')}
                                    error={!!errors.phone}
                                    helperText={errors.phone?.message}
                                />
                            </div>

                            {/* Leaderboard Alias */}
                            <InputText
                                label="Leaderboard Alias"
                                placeholder="Pick a fun alias. Inappropriate names may be removed or lead to disqualification."
                                variant="grey"
                                {...register('leaderboardAlias')}
                                error={!!errors.leaderboardAlias}
                                helperText={errors.leaderboardAlias?.message}
                            />

                            {/* Company Info (2 columns) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-8">
                                <InputText
                                    label="Company Name"
                                    placeholder="Input"
                                    variant="grey"
                                    {...register('companyName')}
                                    error={!!errors.companyName}
                                    helperText={errors.companyName?.message}
                                />
                                <InputText
                                    label="Company ABN Number"
                                    placeholder="Must contain 11 digits"
                                    variant="grey"
                                    {...register('abn')}
                                    error={!!errors.abn}
                                    helperText={errors.abn?.message}
                                />
                            </div>

                            {/* Wholesaler Question */}
                            <div className="flex flex-col gap-6">
                                <p className="ContentMRegular text-grey950">
                                    Which wholesaler do you typically return reclaim cylinders through? (check all that apply)
                                </p>
                                <div className="flex flex-wrap items-center gap-4 md:gap-5 lg:gap-8">
                                    <div className="bg-grey50 rounded-[8px] pl-3 pr-6 py-3 flex items-center gap-4">
                                        <Checkbox
                                            label="Actrol/Reece"
                                            checked={selectedWholesalers.includes('Actrol/Reece')}
                                            onChange={() => handleWholesalerToggle('Actrol/Reece')}
                                        />
                                    </div>
                                    <div className="bg-grey50 rounded-[8px] pl-3 pr-6 py-3 flex items-center gap-4">
                                        <Checkbox
                                            label="Airefrig"
                                            checked={selectedWholesalers.includes('Airefrig')}
                                            onChange={() => handleWholesalerToggle('Airefrig')}
                                        />
                                    </div>
                                    <div className="bg-grey50 rounded-[8px] pl-3 pr-6 py-3 flex items-center gap-4">
                                        <Checkbox
                                            label="Other"
                                            checked={selectedWholesalers.includes('Other')}
                                            onChange={() => handleWholesalerToggle('Other')}
                                        />
                                    </div>
                                    <div className="flex-1 flex items-center gap-3">
                                        <span className="ContentMRegular text-grey950 whitespace-nowrap">If Other</span>
                                        <InputText
                                            placeholder="Input"
                                            variant="grey"
                                            className="!gap-0"
                                            {...register('otherWholesaler')}
                                            disabled={!selectedWholesalers.includes('Other')}
                                        />
                                    </div>
                                </div>
                                {errors.wholesalers && (
                                    <p className="ContentSRegular text-magenta950">{errors.wholesalers.message}</p>
                                )}
                            </div>

                            {/* RTA Number */}
                            <InputText
                                label="Refrigerant Trading Authorisation (RTA) number (AU Licence Number)"
                                placeholder="AU"
                                variant="grey"
                                className="font-bold placeholder:font-bold"
                                {...register('rtaNumber')}
                                error={!!errors.rtaNumber}
                                helperText={errors.rtaNumber?.message}
                            />
                        </div>

                        {/* Confirmation Statements */}
                        <div className="flex flex-col gap-6 pt-2">
                            <div className="flex flex-col gap-2">
                                <Checkbox
                                    label="I confirm I am 18 years or older"
                                    {...register('is18OrOlder')}
                                />
                                {errors.is18OrOlder && <p className="ContentSRegular text-magenta950 ml-9">{errors.is18OrOlder.message}</p>}
                            </div>

                            <div className="flex flex-col gap-2">
                                <Checkbox
                                    label="I confirm I am the owner, director, or authorised representative of the business"
                                    {...register('isAuthorised')}
                                />
                                {errors.isAuthorised && <p className="ContentSRegular text-magenta950 ml-9">{errors.isAuthorised.message}</p>}
                            </div>

                            <div className="flex flex-col gap-2">
                                <Checkbox
                                    label="I understand that my leaderboard alias will be displayed publicly."
                                    {...register('publicAliasConsent')}
                                />
                                {errors.publicAliasConsent && <p className="ContentSRegular text-magenta950 ml-9">{errors.publicAliasConsent.message}</p>}
                            </div>

                            <div className="flex flex-col gap-2">
                                <Checkbox
                                    {...register('termsConsent')}
                                    label={
                                        <p className="ContentMRegular text-grey950">
                                            I agree to the <a href="#" className="text-magenta600 underline">Terms & Conditions</a> and acknowledge that my personal information will be collected and used in accordance with the <a href="#" className="text-magenta600 underline">A-Gas Privacy Policy.</a>
                                        </p>
                                    }
                                />
                                {errors.termsConsent && <p className="ContentSRegular text-magenta950 ml-9">{errors.termsConsent.message}</p>}
                            </div>

                            <div className="flex flex-col gap-2">
                                <Checkbox
                                    label="I consent to A-Gas requesting program-related information from participating wholesalers, including total reclaim volumes, for the purpose of administering the program and verifying refrigerant returns."
                                    {...register('dataConsent')}
                                />
                                {errors.dataConsent && <p className="ContentSRegular text-magenta950 ml-9">{errors.dataConsent.message}</p>}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center pt-4">
                            <ButtonPrimaryOnLight
                                type="submit"
                                size="large"
                                className="w-full md:w-fit "
                            >
                                <p className="text-[22.4px]">Join The Challenge</p>
                            </ButtonPrimaryOnLight>
                        </div>

                    </form>
                </div>
            </div>

            {/* Success Notification Popup */}
            {showSuccessPopup && (
                <div className="fixed inset-0 z-[9999] flex items-end justify-center bg-blue300/80">
                    <div className="w-full max-w-[900px] flex justify-center px-4 md:px-0">
                        <NotificationPopup
                            onClose={() => setShowSuccessPopup(false)}
                            onFollowFacebook={() => window.open('https://www.facebook.com/', '_blank')}
                            onFollowLinkedin={() => window.open('https://www.linkedin.com/', '_blank')}
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
