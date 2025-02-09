import { NextResponse } from "next/server";
import { PRODUCTS } from "~lib/mock";

export async function GET() {
  return NextResponse.json(PRODUCTS);
}
