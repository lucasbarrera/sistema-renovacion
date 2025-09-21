import {prisma} from "@/libs/prismaClient";
import { NextResponse,NextRequest } from "next/server";

export async function GET() {
    const trainings = await prisma.projects.findMany();
    return NextResponse.json(trainings);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
const { name, description, teamId, documents } = body;
const newTraining = await prisma.projects.create({
    data: {
        name,
        description,
        teamId,
        documents,
    },
});
    return NextResponse.json(newTraining);
}