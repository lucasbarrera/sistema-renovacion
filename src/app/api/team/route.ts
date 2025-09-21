import {prisma} from "@/libs/prismaClient";
import { NextResponse,NextRequest } from "next/server";

export async function GET(){
    const teams = await prisma.team.findMany();
    return NextResponse.json(teams);
}

export async function POST(request: NextRequest) {
    const { name } = await request.json();
    const newTeam = await prisma.team.create({
        data: {
            name,
        },
    });
    return NextResponse.json(newTeam);
}
