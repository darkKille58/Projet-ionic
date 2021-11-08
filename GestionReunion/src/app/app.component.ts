import { Component } from '@angular/core';
import { Routes} from "@angular/router";
import {GestionReunionComponent} from "./gestion-reunion/gestion-reunion.component";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  components:
    {
      GestionReunion
    }
  public appPages = [
    { title: 'Gestion des réunions',  icon: 'paper-plane', path: '/reunion', component: GestionReunionComponent },
    { title: 'Gestion des salles de rénion', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Gestion des employés', url: '/folder/Outbox', icon: 'paper-plane' },
  ];

    /*{
      path: '/home',
      name: 'Home',
      component: HomePage
    },*/


 // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
