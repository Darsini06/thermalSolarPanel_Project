import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const body = await req.json();
        const { email, password } = body;

        // VALIDATION
        if (!email || !password) {
            return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
        }

        // SIMULATION: In a real app, you would:
        // 1. Find user by email in DB
        // 2. Compare hashed password
        // 3. Generate a JWT token

        // For now, let's allow any valid-looking email/pass
        if (email.includes("@") && password.length >= 6) {
            return NextResponse.json({
                success: true,
                message: "Login successful!",
                user: { email, name: "User" },
                token: "mock-jwt-token"
            }, { status: 200 });
        } else {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
