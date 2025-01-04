import { Component } from '@angular/core';
import { ClientsPage } from '../components/clients/clients.page';
import { ModalController } from '@ionic/angular';
import { ClientPage } from '../pages/client/client.page';
 
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  clients:any = []
  constructor(private modalController: ModalController) {
    

    this.clients = [
      {
        id: 1,
        name: 'Jorge',
        apellidos: 'Gonzalez',
        email: 'qkKpU@example.com',
        date: '2023-01-01'
      },
      {
        id: 2,
        name: 'Juan',
        apellidos: 'Gonzalez',
        email: 'qkKpU@example.com',
        date: '2023-01-01'
      },
      {
        id: 3,
        name: 'Luis',
        apellidos: 'Gonzalez',
        email: 'qkKpU@example.com',
        date: '2023-01-01'
      },
      {
        id: 4,
        name: 'paco',
        apellidos: 'Gonzalez',
        email: 'qkKpU@example.com',
        date: '2023-01-01'
      }
    ]
  }


  goToDetails(client){
    this.modalController.create({
      component: ClientPage,
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();
    });
  }

   createClient() {    
    this.modalController.create({
      component: ClientsPage,
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();
    });
  }

  goBack() {
    this.modalController.dismiss(); 
  }

}
