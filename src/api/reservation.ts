import { apiFetch } from "./client";

export interface CreateReservationDto {
    nombre: string;
    apellido: string;
    correo: string;
    celular: string;

    barrio: string;
    direccion: string;
    llegada: string | null;
    apartamento: string | null;

    tipoDocumento: string;
    numeroDocumento: string;

    referido: string;
    planServicio: string;
    requerimientos: string | null;
    fechas: string[];
    hora: string;
}

export async function createReservation(
  data: CreateReservationDto
) {
    console.log("Creating reservation with data:", data);
    const response = await apiFetch("/email", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return response;
}