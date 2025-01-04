import { Component } from '@angular/core';
import { ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { RecurrentPage as create } from '../pages/create/recurrent/recurrent.page';
import { RecurrentPage as show } from '../pages/show/recurrent/recurrent.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  recurrents: any = [];
  
  constructor(
    private alertController:AlertController,
    private actionSheetController: ActionSheetController,
    private modalController: ModalController) {
    this.getRecurrents();
  }

  getRecurrents() { 
    this.recurrents = localStorage.getItem('recurrents') || '[]';
    this.recurrents = JSON.parse(this.recurrents);
    this.recurrents.reverse();
  }
  
  
  addRecurrent() {    
    this.modalController.create({
      component: create,
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();
      modal.onWillDismiss().then((result) => {
        if (result.data) {
          this.getRecurrents();
        }
      })
    });
  }

  showRecurrent(recurrent) {    
    this.modalController.create({
      component: show,
      componentProps: {
        recurrent: recurrent
      },
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();
      modal.onWillDismiss().then((result) => {
        console.log(result);
        if (result.data) {
          this.getRecurrents();
        }
      })
    });
  }

  
  
  

  // async confirmLogout(id) {
  //   const alert = await this.alertController.create({
  //     header: 'Confirmar',
  //     message: '¿Estás seguro de que deseas eliminarlo?',
  //     buttons: [
  //       {
  //         text: 'Cancelar',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: () => {
  //           console.log('Usuario canceló el cierre de sesión');
  //         }
  //       },
  //       {
  //         text: 'Si, eliminar',
  //         cssClass: 'danger-button',
  //         handler: () => {
  //           this.delete(id);
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present();
  // }
}

