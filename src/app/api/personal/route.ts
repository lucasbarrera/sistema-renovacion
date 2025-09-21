import { prisma } from "@/libs/prismaClient";
import { personal } from "@/libs/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;
    const dni = searchParams.get("dni");
    const lastName = searchParams.get("lastName");

    let where: any = {};
    if (dni) where.dni = dni;
    if (lastName) where.lastName = lastName;

    const personal = await prisma.personal.findMany({ where, include: { assistance: true, team: true }
     });
    return NextResponse.json(personal);
}

export async function POST(request: NextRequest) {
    const { name, lastName, email, dni, address, phone, teamId }:personal = await request.json();
    const newPersonal = await prisma.personal.create({
        data: { name, lastName, email, dni, address, phone, teamId}
    });
    return NextResponse.json(newPersonal);
}

