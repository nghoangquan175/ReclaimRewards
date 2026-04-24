import { registrationSchema } from '@/lib/registrationSchema';

const CONSENT_TAGS: Record<string, string> = {
    is18OrOlder: 'consent:18-or-older',
    isAuthorised: 'consent:authorised-rep',
    publicAliasConsent: 'consent:public-alias',
    termsConsent: 'consent:terms-privacy',
    dataConsent: 'consent:data-sharing',
};

const PROGRAM_TAG = 'japan-trip-challenge';

export async function POST(request: Request) {
    const apiKey = process.env.MAILCHIMP_API_KEY;
    const server = process.env.MAILCHIMP_SERVER_PREFIX;
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
    const optinMode = process.env.MAILCHIMP_OPTIN_MODE === 'pending' ? 'pending' : 'subscribed';

    if (!apiKey || !server || !audienceId) {
        console.error('[register] Missing Mailchimp env vars');
        return Response.json({ error: 'Server is not configured' }, { status: 500 });
    }

    let payload: unknown;
    try {
        payload = await request.json();
    } catch {
        return Response.json({ error: 'Invalid JSON' }, { status: 400 });
    }

    const parsed = registrationSchema.safeParse(payload);
    if (!parsed.success) {
        return Response.json(
            { error: 'Validation failed', issues: parsed.error.issues },
            { status: 400 }
        );
    }
    const data = parsed.data;

    const tags = [
        PROGRAM_TAG,
        ...Object.entries(CONSENT_TAGS)
            .filter(([key]) => data[key as keyof typeof data] === true)
            .map(([, tag]) => tag),
    ];

    const mcBody = {
        email_address: data.email,
        status: optinMode,
        merge_fields: {
            FNAME: data.firstName,
            LNAME: data.lastName,
            PHONE: data.phone,
            ALIAS: data.leaderboardAlias,
            COMPANY: data.companyName,
            ABN: data.abn,
            RTA: data.rtaNumber,
            WHOLES: data.wholesalers.join(', '),
            OTHWHOLE: data.otherWholesaler ?? '',
        },
        tags,
    };

    const auth = 'Basic ' + Buffer.from(`anystring:${apiKey}`).toString('base64');
    const mcRes = await fetch(`https://${server}.api.mailchimp.com/3.0/lists/${audienceId}/members`, {
        method: 'POST',
        headers: { Authorization: auth, 'Content-Type': 'application/json' },
        body: JSON.stringify(mcBody),
    });

    if (mcRes.ok) {
        return Response.json({ ok: true, mode: optinMode });
    }

    const errText = await mcRes.text();
    let errBody: { title?: string; detail?: string } = {};
    try { errBody = JSON.parse(errText); } catch { /* empty */ }

    if (mcRes.status === 400 && errBody.title === 'Member Exists') {
        return Response.json(
            { error: 'This email is already registered.' },
            { status: 409 }
        );
    }

    console.error('[register] Mailchimp error', mcRes.status, errBody);
    return Response.json(
        { error: 'Registration failed. Please try again.' },
        { status: 502 }
    );
}
