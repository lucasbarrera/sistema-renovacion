import {prisma} from '@/libs/prismaClient';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(request:NextRequest,{params}:{params:{id:string}}){
    const {id} = params;
    const training = await prisma.trainings.findUnique({
        where:{
            id:Number(id)}
    });
    return NextResponse.json(training);
}

export async function PUT(request:NextRequest,{params}:{params:{id:string}}){
    const {id} = params;
    const { title, description, managerId , url} = await request.json();
    const training = await prisma.trainings.update({ where:{ id:Number(id) },
    data:{ title, description, managerId , url} });
    return NextResponse.json(training);
}

export async function DELETE(request:NextRequest,{params}:{params:{id:string}}){
    const {id} = params;
    const training = await prisma.trainings.delete({
        where:{
            id:Number(id)}
    });
    return NextResponse.json(training);
}