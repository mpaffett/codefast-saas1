import { NextResponse } from "next/server";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import { mongo } from "mongoose";

export async function POST(req) {
  const body = await req.json();

  if (!body.successUrl || !body.cancelUrl) {
    return NextResponse.json(
      { error: "Success and cancel URLs are required" },
      { status: 400 }
    );
  }

  const session = await auth();

  await connectMongo();

  const user = await User.findById(session.user.id);
}
