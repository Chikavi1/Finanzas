import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-movement',
  templateUrl: './movement.page.html',
  styleUrls: ['./movement.page.scss'],
})
export class MovementPage implements OnInit {

  movement: any = {};
  
  constructor(private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private alertController:AlertController,
    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
    if(this.movement.card){
      this.getCard();
      console.log(this.card)
    }
    if(this.movement.debt){
      this.getDebt();
      console.log(this.debt)
    }

    if(this.movement.goal){
      this.getGoal();
      console.log(this.goal)
    }
  }

  card;
  goal;
  debt;

  getCard() {
    const card = localStorage.getItem('cards');
    let items = JSON.parse(card);
    this.card = items.filter(item => item.id == this.movement.card);
    this.card = this.card[0]
  }


  getDebt() {
    const debt = localStorage.getItem('debts');
    let items = JSON.parse(debt);
    this.debt = items.filter(item => item.id == this.movement.debt);
    this.debt = this.debt[0]
  }

  getGoal() {
    const goal = localStorage.getItem('goals');
    let items = JSON.parse(goal);
    this.goal = items.filter(item => item.id == this.movement.goal);
    this.goal = this.goal[0]
  }


   async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Selecciona una acción',
      mode: 'md',
      buttons: [
        {
          text: 'Actualizar movimiento',
          data: {
            action: 'share',
          },
          handler: () => {
            this.update();
          }
        },
        {
          text: 'Eliminar movimiento',
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
            this.removeById(this.movement.id);
          }
        }
      ]
    });

    await alert.present();
  }

  removeById(elementId) {
  const NAME = 'movements';
  const stored = localStorage.getItem(NAME);  
    if (stored){
      let items = JSON.parse(stored);
      items = items.filter(item => item.id !== elementId);
      localStorage.setItem(NAME, JSON.stringify(items));
      
      this.setToast('Se elimino el movimiento', 'dark');
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
