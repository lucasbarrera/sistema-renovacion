import {prisma} from "@/libs/prismaClient";
import { NextResponse,NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const role = await prisma.role.findUnique({
        where: { id: Number(id) },
    });
    return NextResponse.json(role);
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const {name} = await request.json();
    const updatedRole = await prisma.role.update({
        where: { id: Number(id) },
        data: {
            name
        },
    });
    return NextResponse.json(updatedRole);
}