import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ModalController, ToastController } from '@ionic/angular';
import { CardPage as create } from '../../create/card/card.page';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  card;
  constructor(
    private actionSheetCtrl: ActionSheetController,
    private alertController: AlertController,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  goBack() {
    this.modalCtrl.dismiss();
  }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Selecciona una acción',
      mode: 'md',
      buttons: [
        {
          text: 'Actualizar objetivo',
          data: {
            action: 'share',
          },
          handler: () => {
            this.update();
          }
        },
        {
          text: 'Eliminar objetivo',
          role: 'destructive',
          data: {
            action: 'delete',
          },
          handler: () => {
            
            this.confirmDelete();

          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
          
        },
      ],
    });

    await actionSheet.present();
  }


  async confirmDelete() {
    const alert = await this.alertController.create({
      header: 'Eliminar objetivo',
      message: '¿Estás seguro de que deseas eliminar el objetivo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Usuario canceló el cierre de sesión');
          }
        },
        {
          text: 'Eliminar',
          cssClass: 'danger-button',
          handler: () => {
            this.removeById(this.card.id);
          }
        }
      ]
    });

    await alert.present();
  }


   removeById(elementId) {
    const NAME = 'cards';
    const stored = localStorage.getItem(NAME);  
      if (stored){
        let items = JSON.parse(stored);
        items = items.filter(item => item.id !== elementId);
        localStorage.setItem(NAME, JSON.stringify(items));
        
        this.setToast('Se elimino objetivo', 'dark');
        this.modalCtrl.dismiss(true);
      }
    }
    
  
  update() {
    this.modalCtrl.create({
      component: create,
      componentProps: {
        data: this.card
      },
      cssClass: 'my-custom-class'
    }).then(modal => {
      modal.present();
      modal.onWillDismiss().then((result) => {
        if (result.data) {
          this.setToast('Elemento actualizado','success');
        }
    })
    })

  }

  setToast(message,color) {
    this.toastCtrl.create({
      message,
      duration: 2000,
      color
    }).then(toast => toast.present());


  }



}
