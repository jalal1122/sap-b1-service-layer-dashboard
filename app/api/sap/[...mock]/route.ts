import { NextRequest, NextResponse } from "next/server";
import { businessPartners, items, salesOrders } from "@/lib/b1/mock-db";
import { applyOData } from "@/lib/b1/odata-parser";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ mock: string[] }> }
) {
  const resolvedParams = await params;
  const pathParts = resolvedParams.mock;
  const endpoint = pathParts[0];

  const searchParams = request.nextUrl.searchParams;

  let data: any[] = [];

  switch (endpoint) {
    case "BusinessPartners":
      data = businessPartners;
      break;
    case "Items":
      data = items;
      break;
    case "Orders":
      data = salesOrders;
      break;
    default:
      return NextResponse.json(
        { error: { code: -1000, message: { lang: "en-us", value: "Invalid endpoint" } } },
        { status: 404 }
      );
  }

  // Apply OData query parameters
  const result = applyOData(data, searchParams);

  return NextResponse.json({
    "odata.metadata": `https://mock-b1:50000/b1s/v1/$metadata#${endpoint}`,
    value: result,
  });
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ mock: string[] }> }
) {
  const resolvedParams = await params;
  const pathParts = resolvedParams.mock;
  const endpoint = pathParts[0];

  if (endpoint === "Login") {
    // Mock login response
    const res = NextResponse.json({
      SessionId: "mock-session-id-" + Date.now(),
      Version: "10.0",
      SessionTimeout: 30,
    });
    
    // Set a dummy cookie
    res.cookies.set("B1SESSION", "mock-session-id-" + Date.now(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 30, // 30 mins
      path: "/",
    });
    
    return res;
  }

  if (endpoint === "Logout") {
    const res = NextResponse.redirect(new URL("/login", request.url));
    res.cookies.delete("B1SESSION");
    return res;
  }

  return NextResponse.json(
    { error: { code: -1000, message: { lang: "en-us", value: "Not supported" } } },
    { status: 400 }
  );
}
