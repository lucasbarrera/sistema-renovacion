import {prisma} from '@/libs/prismaClient'
import {NextRequest, NextResponse} from 'next/server'

export async function GET() {
    const assistances = await prisma.assistance.findMany()
    return NextResponse.json(assistances)
}


export async function POST(request: Request) {
    const {entryTime, personalId} = await request.json()
    const newAssistance = await prisma.assistance.create({
        data: {
            entryTime,
            personalId
        }
    })
    return NextResponse.json(newAssistance)
}