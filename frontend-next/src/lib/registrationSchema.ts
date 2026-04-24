import * as z from 'zod';

export const registrationSchema = z.object({
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

export type RegistrationFormValues = z.infer<typeof registrationSchema>;
