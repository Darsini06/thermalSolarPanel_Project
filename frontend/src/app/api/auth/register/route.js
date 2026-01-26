import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, password } = body;

        // VALIDATION (Simple)
        if (!firstName || !email || !password) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // SIMULATION: In a real app, you would:
        // 1. Check if user already exists in DB
        // 2. Hash the password (bcrypt)
        // 3. Save user to DB

        console.log("Registering user:", { firstName, lastName, email });

        // Mock success
        return NextResponse.json({
            success: true,
            message: "Account created successfully!",
            user: { firstName, email },
            token: "mock-jwt-token-reg"
        }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
