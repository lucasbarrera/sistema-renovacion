import {prisma} from '@/libs/prismaClient'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const project = await prisma.projects.findUnique({
        where: { id: Number(id) },
    })
    return NextResponse.json(project);
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    const body = await request.json();
    const updatedProject = await prisma.projects.update({
        where: { id: Number(id) },
        data: body,
    });
    return NextResponse.json(updatedProject);
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;
    await prisma.projects.delete({
        where: { id: Number(id) },
    })
    return NextResponse.json({ message: 'Project deleted successfully' });
}