import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  data=[
    {
      nombre:"Cuentos de la llanura",
      fecha:"(2022)",
      puesto:"Full Stack Developer",
      descripcion:"Biblioteca de relatos de un escritor pampeano, donde pueden leerse sus cuentos, acceder a sus libros, y escuchar narraciones.",
      img:"../../../assets/images/cuentosexpe.png",
      url:"https://cuentosdelallanura.vercel.app/"
    },
    {
      nombre:"Full Stack Developer",
      fecha:"(2021-2022)",
      puesto:"SC-dev",
      descripcion:"Freelance",
      img:"../../../assets/images/portfolio.jpg",
      url:"https://santiagocastellani-dev.vercel.app"
    },
    {
      nombre:"Charta",
      fecha:"(Noviembre 2022)",
      puesto:"Frontend Developer Angular",
      descripcion:"App de administración de gastos e ingresos, visualización de balances y estadísticas. Desarrollado en equipo de emulación laboral para NoCountry.",
      img:"../../../assets/images/dashboard-gastos.png",
      url:"https://thatischarta.vercel.app/"
    },
    {
      nombre:"Pokemoncillos",
      fecha:"(2022)",
      puesto:"Desarrollador WEB",
      descripcion:"La típica y famosa PokeAPI, en la que pueden buscar diferentes pokemones",
      img:"../../../assets/images/pokemoncillos.png",
      url:"https://pokemoncillos.netlify.app/"
    },
    {
      nombre:"Auticos",
      fecha:"(2022)",
      puesto:"Full stack Developer",
      descripcion:"Es un CRUD en Java y Angular, pensado como material de aprendizaje",
      img:"../../../assets/images/auticos.png",
      url:"https://github.com/SantiagoCastellaniDev/Auticos-Backend.git"
    },
    {
      nombre:"Misterio 2",
      fecha:"(2022)",
      puesto:"Desarrollador WEB",
      descripcion:"Práctica de animaciones. Juego de acertijos y desafios",
      img:"../../../assets/images/misterio2.png",
      url:"https://misterio2.netlify.app/"
    }
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}


  

