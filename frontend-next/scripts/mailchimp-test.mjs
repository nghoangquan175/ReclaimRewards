const API_KEY = process.env.MAILCHIMP_API_KEY;
const SERVER = process.env.MAILCHIMP_SERVER_PREFIX;
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

if (!API_KEY || !SERVER) {
  console.error('Missing MAILCHIMP_API_KEY or MAILCHIMP_SERVER_PREFIX in .env.local');
  process.exit(1);
}

const BASE = `https://${SERVER}.api.mailchimp.com/3.0`;
const AUTH = 'Basic ' + Buffer.from(`anystring:${API_KEY}`).toString('base64');

async function mc(path) {
  const res = await fetch(`${BASE}${path}`, { headers: { Authorization: AUTH } });
  const text = await res.text();
  let body;
  try { body = JSON.parse(text); } catch { body = text; }
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText} — ${JSON.stringify(body)}`);
  }
  return body;
}

(async () => {
  console.log(`\n[1/3] Ping ${BASE}/ping`);
  const ping = await mc('/ping');
  console.log('    ->', ping.health_status);

  console.log(`\n[2/3] GET /lists (your audiences)`);
  const { lists } = await mc('/lists?count=50&fields=lists.id,lists.name,lists.stats.member_count');
  if (!lists.length) {
    console.log('    (no audiences found — create one in Mailchimp dashboard first)');
  } else {
    for (const l of lists) {
      console.log(`    - ${l.id}  "${l.name}"  (${l.stats.member_count} members)`);
    }
    console.log(`\n    Copy the id of the audience you want to use into .env.local as MAILCHIMP_AUDIENCE_ID`);
  }

  if (AUDIENCE_ID) {
    console.log(`\n[3/3] GET /lists/${AUDIENCE_ID}/merge-fields`);
    const { merge_fields } = await mc(`/lists/${AUDIENCE_ID}/merge-fields?count=100`);
    if (!merge_fields.length) {
      console.log('    (no merge fields)');
    } else {
      for (const f of merge_fields) {
        console.log(`    - ${f.tag.padEnd(10)} ${f.type.padEnd(10)} "${f.name}"`);
      }
    }
  } else {
    console.log(`\n[3/3] Skipped (set MAILCHIMP_AUDIENCE_ID in .env.local to list existing merge fields)`);
  }

  console.log('\nDone.\n');
})().catch((err) => {
  console.error('\nERROR:', err.message, '\n');
  process.exit(1);
});
