import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recurrent',
  templateUrl: './recurrent.page.html',
  styleUrls: ['./recurrent.page.scss'],
})
export class RecurrentPage implements OnInit {

  recurrent:any = {}
  constructor(private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private alertController:AlertController,
    private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Selecciona una acción',
      mode: 'md',
      buttons: [
        {
          text: 'Actualizar elemento',
          data: {
            action: 'share',
          },
          handler: () => {
            this.update();
          }
        },
        {
          text: 'Eliminar elemento recurrente',
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
      header: 'Eliminar movimiento',
      message: '¿Estás seguro de que deseas eliminar el movimiento?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
 
          }
        },
        {
          text: 'Eliminar',
          cssClass: 'danger-button',
          handler: () => {
            this.removeById(this.recurrent.id);
          }
        }
      ]
    });

    await alert.present();
  }

  removeById(elementId) {
  const NAME = 'recurrents';
  const stored = localStorage.getItem(NAME);  
    if (stored){
      let items = JSON.parse(stored);
      items = items.filter(item => item.id !== elementId);
      localStorage.setItem(NAME, JSON.stringify(items));
      
      this.setToast('Se elimino el movimiento recurrente', 'dark');
      this.modalCtrl.dismiss(true);
    }
  }
 
  update() {
    this.setToast('Elemento actualizado','success');
  }

  setToast(message,color) {
    this.toastCtrl.create({
      message,
      duration: 2000,
      color
    }).then(toast => toast.present());


  }

  goBack() {
    this.modalCtrl.dismiss();
  }

}
