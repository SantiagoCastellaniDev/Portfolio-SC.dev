import { Component, OnInit } from '@angular/core';

import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  

   
  faHtml5 = faHtml5;
  faCss3Alt = faCss3Alt;
  faJs = faJs;
  faBootstrap = faBootstrap;
  faAngular = faAngular;
  faJava = faJava;
  faDatabase = faDatabase;
  faPowerOff = faPowerOff;

  datosSkills = [
    {"idSkill":5,"nombreSkill":"HTML","nivelSkill":"Intermedio","porcentajeSkill":70,"colorSkill":"red","img_Skill":"fa-brands fa-html5"},
    {"idSkill":10,"nombreSkill":"CSS","nivelSkill":"Intermedio","porcentajeSkill":50,"colorSkill":"blue","img_Skill":"fa-brands fa-css3-alt"},
    {"idSkill":11,"nombreSkill":"Javascript","nivelSkill":"Intermedio","porcentajeSkill":40,"colorSkill":"yellow","img_Skill":"fa-brands fa-js"},{"idSkill":12,"nombreSkill":"Bootstrap","nivelSkill":"Intermedio","porcentajeSkill":50,"colorSkill":"purple","img_Skill":"fa-brands fa-bootstrap"},{"idSkill":13,"nombreSkill":"Angular","nivelSkill":"Intermedio","porcentajeSkill":60,"colorSkill":"red","img_Skill":"fa-brands fa-angular"},{"idSkill":14,"nombreSkill":"MySQL","nivelSkill":"Intermedio","porcentajeSkill":60,"colorSkill":"pink","img_Skill":"fa-solid fa-database"},
    {"idSkill":15,"nombreSkill":"Java","nivelSkill":"Intermedio","porcentajeSkill":50,"colorSkill":"lightblue","img_Skill":"fa-brands fa-java"},
    {"idSkill":16,"nombreSkill":"SpringBoot","nivelSkill":"Intermedio","porcentajeSkill":60,"colorSkill":"green","img_Skill":"fa-solid fa-power-off"},{"idSkill":17,"nombreSkill":"Git","nivelSkill":"Intermedio","porcentajeSkill":70,"colorSkill":"orangered","img_Skill":"fa-brands fa-git"},
    {"idSkill":22,"nombreSkill":"GitHub","nivelSkill":"Intermedio","porcentajeSkill":70,"colorSkill":"brown","img_Skill":"fa-brands fa-github"}
  ];

  constructor() { }
  
  
    
  //Inicializacion DATOS SKILL

  ngOnInit(): void {
  }

}


  
