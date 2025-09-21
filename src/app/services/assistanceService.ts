import {prisma} from "@/libs/prismaClient";

// Buscar todas las asistencias de un personal por DNI
export const getAssistanceByDni = async (dni: string) => {
  const personal = await prisma.personal.findFirst({
    where: { dni },
    include: { assistance: true },
  });
  return personal?.assistance || [];
};

// Crear asistencia usando DNI
export const createAssistanceByDni = async (dni: string, data: {
  entryTime: Date;
  exitTime?: Date;
  observations?: string;
}) => {
  const personal = await prisma.personal.findFirst({ where: { dni } });
  if (!personal) throw new Error("No existe personal con ese DNI");

  return prisma.assistance.create({
    data: {
      ...data,
      personalId: personal.id,
    },
  });
};

// Actualizar asistencia por ID pero validando DNI
export const updateAssistanceByDni = async (dni: string, assistanceId: number, data: any) => {
  const personal = await prisma.personal.findFirst({
    where: { dni },
    include: { assistance: true },
  });

  if (!personal) throw new Error("No existe personal con ese DNI");

  const asistencia = personal.assistance.find(a => a.id === assistanceId);
  if (!asistencia) throw new Error("La asistencia no pertenece a este DNI");

  return prisma.assistance.update({
    where: { id: assistanceId },
    data,
  });
};
