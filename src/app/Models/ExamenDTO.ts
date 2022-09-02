import { RegistroPbiExamenDetalleDTO } from "./ExamenDetalleDTO";

export interface RegistroPbiExamenDTO{
  id:number,
  idSimuladorPbiModo:number,
  nombreExamen:string,
  tiempo:number,
  idAspNetUsers?:string,
  usuario?:string,
  estadoExamen?:number,
  puntaje?:number,
  desempenio?:number,
  percentil?:number,
  idSimuladorPbiTarea?:number,
  idSimuladorPbiDominio:number
}
export interface RegistroPbiExamenRespuestaDTO{
  id:number,
  idSimuladorPbiModo:number,
  nombreExamen:string,
  tiempo:number,
  idAspNetUsers?:string,
  usuario?:string,
  estadoExamen?:number,
  puntaje?:number,
  desempenio?:number,
  percentil?:number,
  respuestaDetalle: Array<RegistroPbiExamenDetalleDTO>,
  idSimuladorTipoRespuesta:number
}
export interface ExamenIntentoDTO{
  Intento1:number;
  Intento2:number;
  Intento3:number;
  Intento4:number;
  Intento5:number;
  Intento6:number;
  Intento7:number;
  Intento8:number;
  Intento9:number;
  Intento10:number;
}
