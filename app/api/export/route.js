import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req) {
  try {
    const data = await req.json();
    console.log("Data:", JSON.stringify(data, null, 2));

    return NextResponse.json(
      { message: "Data received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { message: "Error processing request" },
      { status: 500 }
    );
  }
}
