import { NextRequest, NextResponse } from "next/server"

// POST /api/blog/auth
// Body: { password: string }
// Returns: { token: string } or 401
export async function POST(req: NextRequest) {
  const { password } = await req.json()

  if (!process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "ADMIN_SECRET not configured" }, { status: 500 })
  }

  if (password !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 })
  }

  // Return the secret as the bearer token (simple but sufficient for single-admin use)
  return NextResponse.json({ token: process.env.ADMIN_SECRET })
}
