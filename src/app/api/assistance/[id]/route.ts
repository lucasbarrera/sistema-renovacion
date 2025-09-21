import {prisma} from "@/libs/prismaClient";
import { NextResponse,NextRequest } from "next/server";

export async function GET(request:NextRequest,{params}:{params:{id:string}}){
    const {id} = params;
    const assistance = await prisma.assistance.findUnique({
        where:{
            id:Number(id)}
    });
    return NextResponse.json(assistance);
}

export async function PUT(request:NextRequest,{params}:{params:{id:string}}){
    const {id} = params;
    const {  observations, personalId } = await request.json();
    const assistance = await prisma.assistance.update({ where:{ id:Number(id) },
    data:{ observations, personalId } });
    return NextResponse.json(assistance);
}

export async function DELETE(request:NextRequest,{params}:{params:{id:string}}){
    const {id} = params;
    const assistance = await prisma.assistance.delete({
        where:{
            id:Number(id)}
    });
    return NextResponse.json(assistance);
}