import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    const user = process.env.ADMIN_BASIC_AUTH_USER ?? 'moworks';
    const pass = process.env.ADMIN_BASIC_AUTH_PASS ?? '2026';
    const expected = 'Basic ' + Buffer.from(`${user}:${pass}`).toString('base64');

    const header = request.headers.get('authorization');
    if (header === expected) {
        return NextResponse.next();
    }

    return new NextResponse('Authentication required', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Admin", charset="UTF-8"' },
    });
}

export const config = {
    matcher: '/admin/:path*',
};
