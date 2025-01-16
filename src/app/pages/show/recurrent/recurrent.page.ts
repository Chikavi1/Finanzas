import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ModalController, ToastController } from '@ionic/angular';
import { RecurrentPage as update } from '../../create/recurrent/recurrent.page';

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
    private actionSheetCtrl: ActionSheetController) { 
    
    }

   ngOnInit() {
    if(this.recurrent.card){
      this.getCard();
      console.log(this.card)
    }
    if(this.recurrent.debt){
      this.getDebt();
      console.log(this.debt)
    }

    if(this.recurrent.goal){
      this.getGoal();
      console.log(this.goal)
    }
  }

  card;
  goal;
  debt;

  getCard() {
    const card = localStorage.getItem('cards');
    let items  = JSON.parse(card);
    this.card  = items.filter(item => item.id == this.recurrent.card);
    this.card  = this.card[0]
  }


  getDebt() {
    const debt = localStorage.getItem('debts');
    let items  = JSON.parse(debt);
    this.debt  = items.filter(item => item.id == this.recurrent.debt);
    this.debt  = this.debt[0]
  }

  getGoal() {
    const goal = localStorage.getItem('goals');
    let items  = JSON.parse(goal);
    this.goal  = items.filter(item => item.id == this.recurrent.goal);
    this.goal  = this.goal[0]
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Selecciona una acción',
      mode: 'md',
      buttons: [
        {
          text: 'Actualizar recurrente',
          data: {
            action: 'share',
          },
          handler: () => {
            this.update();
          }
        },
        {
          text: 'Eliminar recurrente',
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
            this.modalCtrl.dismiss(true);
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
    this.modalCtrl.create({
      component: update,
      componentProps: { data: this.recurrent },
      cssClass: 'my-custom-class'
    }).then(modal => {
       modal.present();
       modal.onWillDismiss().then((result) => {
         if (result.data) {
           
           this.getCard();
           this.getDebt();
           this.getGoal();
           this.setToast('Elemento actualizado', 'success');
           
 
            setTimeout(() => {
              this.modalCtrl.dismiss(true);
            },1000)

         }
       });
     });

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
