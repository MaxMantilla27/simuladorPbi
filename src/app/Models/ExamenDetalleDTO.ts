export interface RegistroPbiExamenDetalleDTO{
  id:number,
  idSimuladorPbiExamen:number,
  idSimuladorPbiDominio:number,
  idSimuladorPbiTarea?:number,
  idSimuladorPbiPregunta:number,
  ejecutado:boolean,
  idSimuladorPbiPreguntaRespuesta?:number,
  puntaje?:number,
  idAspNetUsers:string,
  usuario:string
}
