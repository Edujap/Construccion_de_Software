import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import { ReporteService } from '../../Servicios/reporte.service';
import Swal from 'sweetalert2';
import {IReporte} from '../../model/reporte';
@Component({
  selector: 'app-reportes-new',
  templateUrl: './reportes-new.component.html',
  styleUrls: ['./reportes-new.component.css']
})

export class ReportesNewComponent implements OnInit {
  form: FormGroup;
  selectEstado: string = "";
  selectCargo: string = "";

  listcargos =  new Array<IReporte>();
  constructor(private ruta: Router, private servicioReporte: ReporteService, private route: ActivatedRoute) {

    this.form = new FormGroup({
      Id_Usuario: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
      //Id_Usuario: new FormControl('', [Validators.email]),
      Reporte: new FormControl('', [Validators.required]),

    });
    this.form.valueChanges
      .subscribe(value => {
        console.log(value);
      });}


  ngOnInit(): void {
  };

  onSubmit() {
    this.servicioReporte.crearReporte(this.form.value)
      .subscribe(data =>{
        this.ruta.navigate(['formulario']);
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        );
      });
  }



  Regresar():void {
    this.ruta.navigate(['reporte']);
  }
}
