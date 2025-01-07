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
    const lastRecurrent = localStorage.getItem('last-recurrent');
    console.log('Fecha actual:', today);
    console.log('Última recurrente registrada:', lastRecurrent);

    if (lastRecurrent === today) {
        console.log('Ya se ejecutó hoy.');
    } else {
        console.log('No se ha ejecutado hoy, procesando recurrencias...');
        const recurrents = JSON.parse(localStorage.getItem('recurrents') || '[]');

        if (recurrents.length > 0) {
            this.movementsService.processRecurrences(recurrents);
        } else {
            console.log('No hay recurrencias para procesar.');
        }

        localStorage.setItem('last-recurrent', today);
        console.log('Última recurrente actualizada:', today);
    }
}




}
