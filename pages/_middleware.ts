import { NextResponse } from "next/server";

const signedPages = ["/", "/playlist", "/library"];

export default function middleware(req) {
  if (signedPages.find((page) => page === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.redirect("/signin");
    }
  }
}
