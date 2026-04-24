const API_KEY = process.env.MAILCHIMP_API_KEY;
const SERVER = process.env.MAILCHIMP_SERVER_PREFIX;
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

if (!API_KEY || !SERVER || !AUDIENCE_ID) {
  console.error('Missing MAILCHIMP_API_KEY, MAILCHIMP_SERVER_PREFIX or MAILCHIMP_AUDIENCE_ID in .env.local');
  process.exit(1);
}

const BASE = `https://${SERVER}.api.mailchimp.com/3.0`;
const AUTH = 'Basic ' + Buffer.from(`anystring:${API_KEY}`).toString('base64');

const DESIRED_FIELDS = [
  { tag: 'ALIAS',    name: 'Leaderboard Alias', type: 'text' },
  { tag: 'ABN',      name: 'Company ABN',       type: 'text' },
  { tag: 'RTA',      name: 'RTA Number',        type: 'text' },
  { tag: 'WHOLES',   name: 'Wholesalers',       type: 'text' },
  { tag: 'OTHWHOLE', name: 'Other Wholesaler',  type: 'text' },
];

async function mc(path, init) {
  const res = await fetch(`${BASE}${path}`, {
    ...init,
    headers: { Authorization: AUTH, 'Content-Type': 'application/json', ...(init?.headers || {}) },
  });
  const text = await res.text();
  let body;
  try { body = JSON.parse(text); } catch { body = text; }
  if (!res.ok) throw new Error(`${res.status} — ${JSON.stringify(body)}`);
  return body;
}

(async () => {
  console.log(`Checking existing merge fields for audience ${AUDIENCE_ID}...\n`);
  const { merge_fields } = await mc(`/lists/${AUDIENCE_ID}/merge-fields?count=100`);
  const existingTags = new Set(merge_fields.map((f) => f.tag));

  for (const field of DESIRED_FIELDS) {
    if (existingTags.has(field.tag)) {
      console.log(`  [skip]   ${field.tag.padEnd(10)} already exists`);
      continue;
    }
    try {
      const created = await mc(`/lists/${AUDIENCE_ID}/merge-fields`, {
        method: 'POST',
        body: JSON.stringify(field),
      });
      console.log(`  [create] ${created.tag.padEnd(10)} "${created.name}" (${created.type})`);
    } catch (err) {
      console.error(`  [error]  ${field.tag}: ${err.message}`);
    }
  }

  console.log('\nFinal state:');
  const after = await mc(`/lists/${AUDIENCE_ID}/merge-fields?count=100`);
  for (const f of after.merge_fields) {
    console.log(`  - ${f.tag.padEnd(10)} ${f.type.padEnd(10)} "${f.name}"`);
  }
  console.log();
})().catch((err) => {
  console.error('\nERROR:', err.message, '\n');
  process.exit(1);
});
