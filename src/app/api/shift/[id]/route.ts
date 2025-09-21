import {prisma} from "@/libs/prismaClient";
import { NextResponse,NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const role = await prisma.shift.findUnique({
        where: { id: Number(id) },
    });
    return NextResponse.json(role);
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const { name, startTime, endTime} = await request.json();
    const updatedRole = await prisma.shift.update({
        where: { id: Number(id) },
        data: {name, startTime, endTime },
    });
    return NextResponse.json(updatedRole);
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const deleteShift = await prisma.shift.delete({
        where: { id: Number(id) },
    });
    return NextResponse.json({ message: 'Role deleted successfully', deleteShift} );
}