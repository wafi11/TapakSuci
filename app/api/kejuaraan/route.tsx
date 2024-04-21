import getCurrentUser from "@/app/actions/getCurrenUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismDb";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }
  if (currentUser.role === "USER") {
    return NextResponse.error();
  }
  if (currentUser.role === "WASIT") {
    return NextResponse.error();
  }

  const body = await request.json();
  const { nama, lokasi, category, startDate, endDate } = body;

  Object.keys(body).forEach((value) => {
    if (!body[value]) {
      return NextResponse.error();
    }
  });

  const listing = await prisma.kejuaraan.create({
    data: {
      nama,
      lokasi,
      category,
      startDate,
      endDate,
      userId: currentUser.id,
    },
  });
  console.log(listing);
  return NextResponse.json(listing);
}
