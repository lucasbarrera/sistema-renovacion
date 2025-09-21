import {prisma} from '@/libs/prismaClient';
import { NextResponse, NextRequest } from 'next/server';

export async function GET() {
    const roles = await prisma.role.findMany();
    return NextResponse.json(roles);
}

export async function POST(request: NextRequest) {
    const { name } = await request.json();
    const newRole = await prisma.role.create({
        data: {
            name,
        },
    });
    return NextResponse.json(newRole);
}