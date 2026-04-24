export const dynamic = 'force-static';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">{title}</h2>
            {children}
        </section>
    );
}

function Code({ children }: { children: React.ReactNode }) {
    return (
        <code className="font-mono text-sm bg-gray-100 text-gray-900 px-1.5 py-0.5 rounded">
            {children}
        </code>
    );
}

function CodeBlock({ children }: { children: React.ReactNode }) {
    return (
        <pre className="font-mono text-xs md:text-sm bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
            {children}
        </pre>
    );
}

export default function AdminGuidelinePage() {
    return (
        <main className="min-h-screen bg-gray-50 px-4 md:px-8 pt-[96px] md:pt-[104px] pb-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Integration Guideline</h1>
                    <p className="text-gray-600">
                        Reference for devs deploying this project, the Mailchimp owner reviewing stored data,
                        and testers verifying the registration flow.
                    </p>
                </div>

                {/* ───── DEVELOPERS ───── */}
                <Section title="1. For Developers — Deployment Configuration">
                    <p className="text-gray-700 mb-4">
                        Copy <Code>.env.sample</Code> to <Code>.env.local</Code> (dev) or configure the following
                        environment variables on your hosting provider (prod). All values are server-side only —
                        never exposed to the browser.
                    </p>

                    <div className="overflow-x-auto rounded-lg border border-gray-200 mb-4">
                        <table className="min-w-full text-sm">
                            <thead className="bg-gray-100 text-left">
                                <tr>
                                    <th className="px-4 py-3 font-semibold text-gray-700">Variable</th>
                                    <th className="px-4 py-3 font-semibold text-gray-700">Required</th>
                                    <th className="px-4 py-3 font-semibold text-gray-700">Description</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 bg-white">
                                <tr>
                                    <td className="px-4 py-3"><Code>MAILCHIMP_API_KEY</Code></td>
                                    <td className="px-4 py-3 text-red-700 font-medium">Yes</td>
                                    <td className="px-4 py-3 text-gray-700">
                                        From Mailchimp → Account → Extras → API keys. Format:{' '}
                                        <Code>xxxxxxxx-us7</Code>.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3"><Code>MAILCHIMP_SERVER_PREFIX</Code></td>
                                    <td className="px-4 py-3 text-red-700 font-medium">Yes</td>
                                    <td className="px-4 py-3 text-gray-700">
                                        The suffix after the dash in the API key (e.g. <Code>us7</Code>).
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3"><Code>MAILCHIMP_AUDIENCE_ID</Code></td>
                                    <td className="px-4 py-3 text-red-700 font-medium">Yes</td>
                                    <td className="px-4 py-3 text-gray-700">
                                        From Audience → Settings → Audience name and defaults. E.g.{' '}
                                        <Code>bdae58f387</Code>.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3"><Code>MAILCHIMP_OPTIN_MODE</Code></td>
                                    <td className="px-4 py-3 text-gray-600">Optional</td>
                                    <td className="px-4 py-3 text-gray-700">
                                        <Code>subscribed</Code> (default, single opt-in) or <Code>pending</Code>{' '}
                                        (double opt-in, sends confirmation email).
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3"><Code>ADMIN_BASIC_AUTH_USER</Code></td>
                                    <td className="px-4 py-3 text-red-700 font-medium">Yes</td>
                                    <td className="px-4 py-3 text-gray-700">
                                        Username for Basic Auth on <Code>/admin/*</Code>. Currently{' '}
                                        <Code>moworks</Code>.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3"><Code>ADMIN_BASIC_AUTH_PASS</Code></td>
                                    <td className="px-4 py-3 text-red-700 font-medium">Yes</td>
                                    <td className="px-4 py-3 text-gray-700">
                                        Password for Basic Auth on <Code>/admin/*</Code>. Currently <Code>2026</Code>.
                                        <span className="block text-red-700 text-xs mt-1">
                                            Change before production and store as a secret.
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="font-semibold text-gray-900 mt-6 mb-2">First-time setup (per audience)</h3>
                    <p className="text-gray-700 mb-2">
                        Run the merge-field setup script once against each Mailchimp audience you target. It is
                        idempotent — safe to re-run.
                    </p>
                    <CodeBlock>{`node --env-file=.env.local scripts/mailchimp-setup-fields.mjs`}</CodeBlock>

                    <h3 className="font-semibold text-gray-900 mt-6 mb-2">Connection smoke test</h3>
                    <CodeBlock>{`node --env-file=.env.local scripts/mailchimp-test.mjs`}</CodeBlock>

                    <h3 className="font-semibold text-gray-900 mt-6 mb-2">Relevant source files</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li><Code>src/app/api/register/route.ts</Code> — form submission handler</li>
                        <li><Code>src/lib/registrationSchema.ts</Code> — Zod validation (shared client + server)</li>
                        <li><Code>src/app/_components/HomeRegistration.tsx</Code> — form UI</li>
                        <li><Code>src/proxy.ts</Code> — Basic auth for <Code>/admin/*</Code> (Next 16 middleware)</li>
                        <li><Code>src/app/admin/records/page.tsx</Code> — this dashboard</li>
                    </ul>
                </Section>

                {/* ───── MAILCHIMP OWNER ───── */}
                <Section title="2. For the Mailchimp Owner — How We Store Data">
                    <p className="text-gray-700 mb-4">
                        Every successful form submission creates (or updates) a member in the audience below.
                        Form fields map to Mailchimp <strong>merge fields</strong>. Consent checkboxes and program
                        membership are stored as <strong>tags</strong> so they can be used for segmentation.
                    </p>

                    <div className="rounded-md border border-yellow-200 bg-yellow-50 px-4 py-3 mb-6 text-sm text-yellow-900">
                        <strong>Do not rename or delete these merge-field tags.</strong> The app writes to them by tag.
                        Renaming the display name in Mailchimp is fine; changing the tag (e.g. <Code>ABN</Code>) will
                        break submissions.
                    </div>

                    <h3 className="font-semibold text-gray-900 mb-2">Merge fields</h3>
                    <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6">
                        <table className="min-w-full text-sm">
                            <thead className="bg-gray-100 text-left">
                                <tr>
                                    <th className="px-4 py-3 font-semibold text-gray-700">Form label</th>
                                    <th className="px-4 py-3 font-semibold text-gray-700">Mailchimp tag</th>
                                    <th className="px-4 py-3 font-semibold text-gray-700">Type</th>
                                    <th className="px-4 py-3 font-semibold text-gray-700">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 bg-white">
                                <tr>
                                    <td className="px-4 py-3">Work Email</td>
                                    <td className="px-4 py-3"><Code>email_address</Code></td>
                                    <td className="px-4 py-3">built-in</td>
                                    <td className="px-4 py-3 text-gray-700">Unique key in the audience</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3">First Name</td>
                                    <td className="px-4 py-3"><Code>FNAME</Code></td>
                                    <td className="px-4 py-3">text</td>
                                    <td className="px-4 py-3 text-gray-700">—</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3">Last Name</td>
                                    <td className="px-4 py-3"><Code>LNAME</Code></td>
                                    <td className="px-4 py-3">text</td>
                                    <td className="px-4 py-3 text-gray-700">—</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3">Work Phone</td>
                                    <td className="px-4 py-3"><Code>PHONE</Code></td>
                                    <td className="px-4 py-3">phone</td>
                                    <td className="px-4 py-3 text-gray-700">—</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3">Leaderboard Alias</td>
                                    <td className="px-4 py-3"><Code>ALIAS</Code></td>
                                    <td className="px-4 py-3">text</td>
                                    <td className="px-4 py-3 text-gray-700">Public-facing display name</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3">Company Name</td>
                                    <td className="px-4 py-3"><Code>COMPANY</Code></td>
                                    <td className="px-4 py-3">text</td>
                                    <td className="px-4 py-3 text-gray-700">—</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3">Company ABN</td>
                                    <td className="px-4 py-3"><Code>ABN</Code></td>
                                    <td className="px-4 py-3">text</td>
                                    <td className="px-4 py-3 text-gray-700">Stored as text to preserve leading zeros (11 digits)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3">RTA Number</td>
                                    <td className="px-4 py-3"><Code>RTA</Code></td>
                                    <td className="px-4 py-3">text</td>
                                    <td className="px-4 py-3 text-gray-700">Must start with <Code>AU</Code></td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3">Wholesalers (selection)</td>
                                    <td className="px-4 py-3"><Code>WHOLES</Code></td>
                                    <td className="px-4 py-3">text</td>
                                    <td className="px-4 py-3 text-gray-700">
                                        Comma-joined, e.g. <Code>Actrol/Reece, Airefrig, Other</Code>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3">Other Wholesaler</td>
                                    <td className="px-4 py-3"><Code>OTHWHOLE</Code></td>
                                    <td className="px-4 py-3">text</td>
                                    <td className="px-4 py-3 text-gray-700">
                                        Only populated when the “Other” box is ticked
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="font-semibold text-gray-900 mb-2">Tags</h3>
                    <p className="text-gray-700 mb-3">
                        Tags are applied only when the corresponding checkbox is ticked. Since the form currently
                        requires all five consents to submit, all five tags will be present on every successful
                        registration. They exist as tags (not merge fields) so Mailchimp segments can filter by
                        them natively.
                    </p>
                    <div className="overflow-x-auto rounded-lg border border-gray-200 mb-4">
                        <table className="min-w-full text-sm">
                            <thead className="bg-gray-100 text-left">
                                <tr>
                                    <th className="px-4 py-3 font-semibold text-gray-700">Tag</th>
                                    <th className="px-4 py-3 font-semibold text-gray-700">Meaning</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 bg-white">
                                <tr>
                                    <td className="px-4 py-3"><Code>japan-trip-challenge</Code></td>
                                    <td className="px-4 py-3 text-gray-700">Program enrolment marker (added to every submitter)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3"><Code>consent:18-or-older</Code></td>
                                    <td className="px-4 py-3 text-gray-700">Confirms age ≥ 18</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3"><Code>consent:authorised-rep</Code></td>
                                    <td className="px-4 py-3 text-gray-700">Confirms owner/director/authorised representative status</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3"><Code>consent:public-alias</Code></td>
                                    <td className="px-4 py-3 text-gray-700">Consents to public display of leaderboard alias</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3"><Code>consent:terms-privacy</Code></td>
                                    <td className="px-4 py-3 text-gray-700">Accepts Terms &amp; Conditions and Privacy Policy</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3"><Code>consent:data-sharing</Code></td>
                                    <td className="px-4 py-3 text-gray-700">Consents to A-Gas requesting reclaim data from wholesalers</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="font-semibold text-gray-900 mt-6 mb-2">Subscription status</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-2">
                        <li>
                            <Code>subscribed</Code> — default. The member is active immediately; no confirmation email is sent.
                        </li>
                        <li>
                            <Code>pending</Code> — requires the member to click the confirmation email before
                            becoming <Code>subscribed</Code>. Controlled by the <Code>MAILCHIMP_OPTIN_MODE</Code> env var.
                        </li>
                    </ul>

                    <h3 className="font-semibold text-gray-900 mt-6 mb-2">Duplicate handling</h3>
                    <p className="text-gray-700">
                        Mailchimp uses email as the unique key. If a user tries to register with an email that
                        already exists, the API responds <Code>409</Code> and the form shows “This email is
                        already registered.” The existing member is not overwritten.
                    </p>
                </Section>

                {/* ───── TESTER ───── */}
                <Section title="3. For Testers — How to Verify the Flow">
                    <h3 className="font-semibold text-gray-900 mb-2">Access</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
                        <li>Public form: <Code>/#registration</Code> on the home page</li>
                        <li>Admin dashboard: <Code>/admin/records</Code> (Basic Auth)</li>
                        <li>This guideline: <Code>/admin/guideline</Code> (Basic Auth)</li>
                    </ul>

                    <h3 className="font-semibold text-gray-900 mb-2">Happy path</h3>
                    <ol className="list-decimal pl-6 text-gray-700 space-y-1 mb-4">
                        <li>Open the home page and scroll to “Register Your Business”.</li>
                        <li>Use a fresh, valid email (e.g. <Code>yourname+test1@domain.com</Code>).</li>
                        <li>Fill all fields, tick all five consents, submit.</li>
                        <li>Expect the success popup to appear.</li>
                        <li>Open <Code>/admin/records</Code> — the new record should appear at the top
                            with all merge fields populated and all six tags (program + five consents).</li>
                        <li>Verify the same in Mailchimp → Audience → All contacts.</li>
                    </ol>

                    <h3 className="font-semibold text-gray-900 mb-2">Validation cases to cover</h3>
                    <div className="overflow-x-auto rounded-lg border border-gray-200 mb-4">
                        <table className="min-w-full text-sm">
                            <thead className="bg-gray-100 text-left">
                                <tr>
                                    <th className="px-4 py-3 font-semibold text-gray-700">Scenario</th>
                                    <th className="px-4 py-3 font-semibold text-gray-700">Expected result</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 bg-white">
                                <tr>
                                    <td className="px-4 py-3">Submit with an empty required field</td>
                                    <td className="px-4 py-3 text-gray-700">Field-level red helper text, no submission</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3">Invalid email format (e.g. <Code>foo@bar</Code>)</td>
                                    <td className="px-4 py-3 text-gray-700">“Invalid email address” shown</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3">ABN not exactly 11 digits or contains letters</td>
                                    <td className="px-4 py-3 text-gray-700">ABN validation error shown</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3">RTA does not start with <Code>AU</Code></td>
                                    <td className="px-4 py-3 text-gray-700">RTA validation error shown</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3">No wholesaler selected</td>
                                    <td className="px-4 py-3 text-gray-700">“Please select at least one wholesaler”</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3">Tick “Other” but leave the Other field empty</td>
                                    <td className="px-4 py-3 text-gray-700">Submit allowed (field is optional); <Code>OTHWHOLE</Code> empty in Mailchimp</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3">Any consent unchecked</td>
                                    <td className="px-4 py-3 text-gray-700">Corresponding consent error shown, submit blocked</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3">Resubmit with an already-used email</td>
                                    <td className="px-4 py-3 text-gray-700">Error banner: “This email is already registered.”</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3">Network offline during submit</td>
                                    <td className="px-4 py-3 text-gray-700">Error banner: “Network error. Please check your connection…”</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="font-semibold text-gray-900 mb-2">Double opt-in test (staging only)</h3>
                    <p className="text-gray-700 mb-2">
                        If <Code>MAILCHIMP_OPTIN_MODE=pending</Code> is set:
                    </p>
                    <ol className="list-decimal pl-6 text-gray-700 space-y-1 mb-4">
                        <li>Submit the form with a real inbox.</li>
                        <li>In <Code>/admin/records</Code> the member should appear with status <Code>pending</Code>.</li>
                        <li>Click the confirmation link in the email inbox.</li>
                        <li>Refresh <Code>/admin/records</Code>; status flips to <Code>subscribed</Code>.</li>
                    </ol>

                    <h3 className="font-semibold text-gray-900 mb-2">Admin auth test</h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Open <Code>/admin/records</Code> in a private window → browser prompts for credentials.</li>
                        <li>Wrong credentials → <Code>401 Unauthorized</Code>.</li>
                        <li>Correct credentials → dashboard loads.</li>
                        <li>Public pages (<Code>/</Code>, <Code>/terms-conditions</Code>) remain accessible without auth.</li>
                    </ul>
                </Section>

                <p className="text-xs text-gray-500 mt-8">
                    Last updated with the current deployment configuration. If any of the above drifts from
                    the running code, the code is the source of truth — update this page to match.
                </p>
            </div>
        </main>
    );
}
