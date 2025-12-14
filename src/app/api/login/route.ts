import { prisma } from '@/libs/prismaClient';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || 'supersecreto'; // Usa una variable de entorno en producción

export async function POST(request: Request) {
    const { email, password } = await request.json();
    const personal = await prisma.personal.findUnique({ where: { email }, include: { role: true } });
    if (personal && personal.password === password) {
        // Generar el token con los datos necesarios
        const token = jwt.sign(
            {
                id: personal.id,
                name: personal.name,
                email: personal.email,                role: personal.role?.name
            },
            JWT_SECRET,
            { expiresIn: '1d' }
        );

        // Devolver el token en una cookie httpOnly
        const response = NextResponse.json({
            mensaje: 'Login exitoso',
            logedpersonal: {
                id: personal.id,
                name: personal.name,
                email: personal.email,
                role: personal.role?.name
            }
        });
        response.cookies.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24 // 1 día
        });
        return response;
    } else {
        return NextResponse.json({ mensaje: 'Credenciales incorrectas' }, { status: 401 });
    }
}