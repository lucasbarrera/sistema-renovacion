import {prisma} from '@/libs/prismaClient';
import { NextResponse,NextRequest } from 'next/server'; 


export async function GET(request:NextRequest,{params}:{params:{id:string}}){
    const {id} = params;
    const personal = await prisma.personal.findUnique({
        where:{
            id:Number(id)}
    });
    return NextResponse.json(personal);
}

export async function PUT(request:NextRequest,{params}:{params:{id:string}}){
    const {id} = params;
    const { name, lastName, email, dni, address, phone, teamId } = await request.json();
    const personal = await prisma.personal.update({ where:{ id:Number(id) },
    data:{ name, lastName, email, dni, address, phone, teamId } });
    return NextResponse.json(personal);
}

export async function DELETE(request:NextRequest,{params}:{params:{id:string}}){
    const {id} = params;
    const personal = await prisma.personal.delete({
        where:{
            id:Number(id)}
    });
    return NextResponse.json(personal);
}