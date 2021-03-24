
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {IReporte} from '../model/reporte';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private url = environment.apiHost;

  constructor(private httpClient: HttpClient) {
  }
  // Obtener todos los reporte
  getListadoReporte(): Observable<IReporte[]>{
    return this.httpClient.get<IReporte[]>(this.url + '/ ').pipe();
  }
  // obtener reporte segun id
  getReporte(id: number): Observable <IReporte>{
    return this.httpClient.get<IReporte>(this.url + '/' + id);
  }
  // Crea un nuevo  reporte
  crearReporte(newReporte: IReporte): Observable<IReporte>{
    return this.httpClient.post<IReporte>( this.url, newReporte);
  }
  // Actualiza un reporte
  actualizarReporte(myReporte: IReporte): Observable<IReporte>{
    return this.httpClient.put<IReporte>( this.url + '/' + myReporte.id, myReporte );
  }
  // Elimina un reporte segun id
  deleteReporte(id: number): Observable<IReporte>{
    return this.httpClient.delete<IReporte>( this.url + '/' + id);
  }

}
