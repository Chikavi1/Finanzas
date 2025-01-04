import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.page.html',
  styleUrls: ['./goal.page.scss'],
})
export class GoalPage implements OnInit {

  goal: any = {};
  movements: any = [];
  
  constructor(private modalController: ModalController,
     private toastCtrl: ToastController,
    private alertController:AlertController,
    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }
  process = 0;
  checkProcess() {
    this.process = .12;

    return '12%'
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
            this.removeById(this.goal.id);
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
        
        this.setToast('Se elimino objetivo', 'dark');
        this.modalController.dismiss(true);
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

}
