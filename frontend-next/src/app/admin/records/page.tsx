export const dynamic = 'force-dynamic';

type Member = {
    id: string;
    email_address: string;
    status: string;
    timestamp_opt: string | null;
    timestamp_signup: string | null;
    last_changed: string | null;
    merge_fields: Record<string, string>;
    tags: { id: number; name: string }[];
};

async function fetchMembers(): Promise<{ members: Member[]; total: number } | { error: string }> {
    const apiKey = process.env.MAILCHIMP_API_KEY;
    const server = process.env.MAILCHIMP_SERVER_PREFIX;
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!apiKey || !server || !audienceId) {
        return { error: 'Mailchimp env vars are not configured.' };
    }

    const auth = 'Basic ' + Buffer.from(`anystring:${apiKey}`).toString('base64');
    const url = new URL(`https://${server}.api.mailchimp.com/3.0/lists/${audienceId}/members`);
    url.searchParams.set('count', '50');
    url.searchParams.set('sort_field', 'timestamp_opt');
    url.searchParams.set('sort_dir', 'DESC');

    const res = await fetch(url, { headers: { Authorization: auth }, cache: 'no-store' });
    if (!res.ok) {
        return { error: `Mailchimp responded ${res.status}` };
    }
    const body = await res.json();
    return { members: body.members ?? [], total: body.total_items ?? 0 };
}

function formatDate(iso: string | null): string {
    if (!iso) return '—';
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return '—';
    return d.toLocaleString('en-AU', { dateStyle: 'medium', timeStyle: 'short' });
}

function StatusPill({ status }: { status: string }) {
    const color =
        status === 'subscribed' ? 'bg-green-100 text-green-800'
        : status === 'pending' ? 'bg-yellow-100 text-yellow-800'
        : status === 'unsubscribed' ? 'bg-gray-200 text-gray-700'
        : 'bg-red-100 text-red-800';
    return <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${color}`}>{status}</span>;
}

export default async function AdminRecordsPage() {
    const result = await fetchMembers();

    if ('error' in result) {
        return (
            <main className="min-h-screen bg-gray-50 px-4 md:px-8 pt-[96px] md:pt-[104px] pb-8">
                <div className="max-w-4xl mx-auto bg-white rounded-lg p-6 shadow">
                    <h1 className="text-2xl font-bold text-red-700 mb-2">Error</h1>
                    <p className="text-gray-700">{result.error}</p>
                </div>
            </main>
        );
    }

    const { members, total } = result;

    return (
        <main className="min-h-screen bg-gray-50 px-4 md:px-8 pt-[96px] md:pt-[104px] pb-8">
            <div className="w-full">
                <div className="flex items-baseline justify-between mb-3">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Registrations</h1>
                    <p className="text-sm text-gray-600">
                        Showing {members.length} of {total} {total === 1 ? 'record' : 'records'}
                    </p>
                </div>
                <div className="mb-6 rounded-md border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-900">
                    <span className="font-semibold">Real-time:</span> this page fetches live data from the connected Mailchimp account on every load. No caching — refresh the page to see the latest registrations.
                </div>

                {members.length === 0 ? (
                    <div className="bg-white rounded-lg p-10 shadow text-center text-gray-500">
                        No records yet.
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow overflow-x-auto">
                        <table className="min-w-full text-sm">
                            <thead className="bg-gray-100 text-left text-gray-700">
                                <tr>
                                    <th className="px-4 py-3 font-semibold">Email</th>
                                    <th className="px-4 py-3 font-semibold">Name</th>
                                    <th className="px-4 py-3 font-semibold">Company</th>
                                    <th className="px-4 py-3 font-semibold">ABN</th>
                                    <th className="px-4 py-3 font-semibold">RTA</th>
                                    <th className="px-4 py-3 font-semibold">Phone</th>
                                    <th className="px-4 py-3 font-semibold">Alias</th>
                                    <th className="px-4 py-3 font-semibold">Wholesalers</th>
                                    <th className="px-4 py-3 font-semibold">Tags / Consents</th>
                                    <th className="px-4 py-3 font-semibold">Status</th>
                                    <th className="px-4 py-3 font-semibold">Opted In</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {members.map((m) => {
                                    const mf = m.merge_fields ?? {};
                                    const wholes = mf.WHOLES || '';
                                    const other = mf.OTHWHOLE ? ` (${mf.OTHWHOLE})` : '';
                                    return (
                                        <tr key={m.id} className="hover:bg-gray-50">
                                            <td className="px-4 py-3 text-gray-900">{m.email_address}</td>
                                            <td className="px-4 py-3 text-gray-700">
                                                {[mf.FNAME, mf.LNAME].filter(Boolean).join(' ') || '—'}
                                            </td>
                                            <td className="px-4 py-3 text-gray-700">{mf.COMPANY || '—'}</td>
                                            <td className="px-4 py-3 text-gray-700 font-mono text-xs">{mf.ABN || '—'}</td>
                                            <td className="px-4 py-3 text-gray-700 font-mono text-xs">{mf.RTA || '—'}</td>
                                            <td className="px-4 py-3 text-gray-700">{mf.PHONE || '—'}</td>
                                            <td className="px-4 py-3 text-gray-700">{mf.ALIAS || '—'}</td>
                                            <td className="px-4 py-3 text-gray-700">{wholes ? `${wholes}${other}` : '—'}</td>
                                            <td className="px-4 py-3">
                                                {m.tags && m.tags.length > 0 ? (
                                                    <div className="flex flex-wrap gap-1 max-w-[260px]">
                                                        {m.tags.map((t) => (
                                                            <span
                                                                key={t.id}
                                                                className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-xs whitespace-nowrap"
                                                            >
                                                                {t.name}
                                                            </span>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <span className="text-gray-400">—</span>
                                                )}
                                            </td>
                                            <td className="px-4 py-3"><StatusPill status={m.status} /></td>
                                            <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                                                {formatDate(m.timestamp_opt ?? m.timestamp_signup)}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}

                <p className="text-xs text-gray-500 mt-4">Sorted by most recent opt-in.</p>
            </div>
        </main>
    );
}
