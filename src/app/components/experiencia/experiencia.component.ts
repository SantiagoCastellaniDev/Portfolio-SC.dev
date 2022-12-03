import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Routes } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
 data=[
  {
    titulo:"Full Stack Developer",
    fecha:"(2021-2022)",
    empresa:"SC-dev",
    descripcion:"Freelance",
    img:"../../../assets/images/portfolio.jpg"
  },
  {
    titulo:"Frontend Angular Developer",
    fecha:"(2022)",
    empresa:"CHARTA - App de administración de gastps e ingresos",
    descripcion:"No Country - Cohorte 8",
    img:"../../../assets/images/nocountry.png"
  },
] 

 constructor() { }

  ngOnInit(): void {   
  }

}
