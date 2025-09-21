import {prisma} from "@/libs/prismaClient";
import { NextResponse,NextRequest } from "next/server";

export async function GET(){
    const trainings = await prisma.trainings.findMany();
    return NextResponse.json(trainings);
}

export async function POST(request:NextRequest){
    const { title, description, managerId, url } = await request.json();
    const newTraining = await prisma.trainings.create({
        data:{
                title,
                description,
                managerId,
                url   
         }
    });
    return NextResponse.json(newTraining);
}

