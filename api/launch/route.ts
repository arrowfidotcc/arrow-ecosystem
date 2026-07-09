import { NextResponse } from "next/server";

export async function POST(request: Request) {

  const body = await request.json();

  return NextResponse.json({
    success: true,
    token: body.name,
    network: "Robinhood EVM",
    status: "Deployment Started"
  });

}
