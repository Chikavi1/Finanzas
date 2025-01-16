import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { RecurrentMovementsService } from './services/recurrent-movements.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private router:Router, private movementsService: RecurrentMovementsService) {
  
    console.log(localStorage.getItem('intro'));
    
    this.router.navigateByUrl('/');
    // if(localStorage.getItem('intro')) {
    // }else {
    //   this.router.navigateByUrl('/intro');

    // }

    this.proccessMovements();
  } 

  proccessMovements() {
    const today = new Date().toISOString().split('T')[0];
    const lastRecurrent = localStorage.getItem('last-recurrent') || today;

    console.log('Fecha actual:', today);
    console.log('Última recurrente registrada:', lastRecurrent);

    if (lastRecurrent === today) {
        console.log('Ya se ejecutó hoy.');
        return;
    }

    console.log('Procesando recurrencias pendientes...');

    const recurrents = JSON.parse(localStorage.getItem('recurrents') || '[]');
    if (recurrents.length === 0) {
        console.log('No hay recurrencias para procesar.');
        localStorage.setItem('last-recurrent', today);
        return;
    }

    // Procesar los días entre la última fecha registrada y hoy
    const lastDate = new Date(lastRecurrent);
    let currentDate = new Date(lastDate);

    while (currentDate < new Date(today)) {
        currentDate.setDate(currentDate.getDate() + 1);
        const formattedDate = currentDate.toISOString().split('T')[0];
        console.log(`Procesando recurrencias para la fecha: ${formattedDate}`);
        this.movementsService.processRecurrences(recurrents, formattedDate);
    }

    localStorage.setItem('last-recurrent', today);
    console.log('Última recurrente actualizada:', today);
}





}
