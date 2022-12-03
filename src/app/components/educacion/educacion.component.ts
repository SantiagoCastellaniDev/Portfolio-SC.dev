import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  data=[
    {
      titulo:"Full Stack Developer",
      fecha:"(2021-2022)",
      institucion:"Argentina Programa",
      descripcion:"#YO PROGRAMO",
      img:"../../../assets/images/logoargentinaprograma.png"
    },{
      titulo:"Full Stack JAVA Developer",
      fecha:"(2022)",
      institucion:"Codo a Codo",
      descripcion:"Agencia de Aprendizaje a lo largo de la Vida",
      img:"../../../assets/images/codoaccodo.jpg"
    },
    {
      titulo:"Full Stack Developer",
      fecha:"(2022)",
      institucion:"Launch X",
      descripcion:"Innovacción Virtual",
      img:"../../../assets/images/innovaccion.jpg"
    },
  ] 

  constructor() { }

  ngOnInit(): void {
    
  }
}