import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReporteService } from '../../Servicios/reporte.service';
import Swal from 'sweetalert2';
import {IReporte} from '../../model/reporte';
@Component({
  selector: 'app-reportes-list',
  templateUrl: './reportes-list.component.html',
  styleUrls: ['./reportes-list.component.css']
})
export class ReportesListComponent implements OnInit {
  titularAlerta: string ='';
  listreporte =  new Array<IReporte>();
  nombreS = "";
  constructor(private ruta: Router, private servicioReporte: ReporteService) {}

  ngOnInit() {
    this.listar_reportes();
  }

  listar_reportes() {
    this.servicioReporte.getListadoReporte().subscribe(
      data => {
        this.listreporte = data;
        //console.log('listado de cargos: ' + this.listcargos)
      }
    );
  }
  eliminar_Reporte( id:number ): void{
    Swal.fire({
      title: '¿Está seguro?',
      text: '¿Seguro desea eliminar el reporte: ' + id + '?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicioReporte.deleteReporte(id);
        Swal.fire(
          'Borrado!',
          'Se elimino el reporte',
          'success'
        );
      }
    });

  }
  editar_reporte(myReport: IReporte): void {
    this.ruta.navigate(['formulario']);
  }

  add_reporte(): void {
    this.ruta.navigate(['formulario']);
  }

}
