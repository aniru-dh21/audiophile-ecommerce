import { NextRequest, NextResponse } from "next/server";
import { navList } from "./lib/navList";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/product") {
    return NextResponse.rewrite(new URL("/product/headphones", req.url));
  }
  if (req.nextUrl.pathname.startsWith("/product")) {
    const slug = req.nextUrl.pathname.split("/")[2];
    const slugValid = navList.find((item) => item.title === slug);
    if (!slugValid) {
      return NextResponse.rewrite(new URL("/404", req.url));
    }
  }
}
