import {prisma} from '@/libs/prismaClient';
import { NextResponse, NextRequest } from 'next/server';


export async function GET(){
    const shifts = await prisma.shift.findMany();
    return NextResponse.json(shifts);
}

export async function POST(request: NextRequest) {
    const { name, startTime, endTime } = await request.json();
    const newShift = await prisma.shift.create({
        data: {
            name,
            startTime,
            endTime,
        },
    });
    return NextResponse.json(newShift);
}