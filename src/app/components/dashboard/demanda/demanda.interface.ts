import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export interface DemandaInterface {
    id: string;
    fecha: string;
    hora: string;
    seguimiento: string;
    detalle: string;
    usuario_id: string;
    tipo_demanda_id: string;
    caso_id: string;

}