import {prisma} from "@/libs/prismaClient";
import { NextResponse,NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const team = await prisma.team.findUnique({
        where: { id: Number(id) },
    });
    return NextResponse.json(team);
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const { name } = await request.json();
    const updatedTeam = await prisma.team.update({
        where: { id: Number(id) },
        data: {name },
    });
    return NextResponse.json(updatedTeam);
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const deleteTeam = await prisma.team.delete({
        where: { id: Number(id) },
    });
    return NextResponse.json(deleteTeam)
}

