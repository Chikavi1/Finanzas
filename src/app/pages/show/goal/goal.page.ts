import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ModalController, ToastController } from '@ionic/angular';
import { GoalPage as createGoal } from '../../create/goal/goal.page';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.page.html',
  styleUrls: ['./goal.page.scss'],
})
export class GoalPage implements OnInit {

  goal: any = {};
  movements: any = [];
  progress = 0;
  total = 0;
  constructor(private modalController: ModalController,
     private toastCtrl: ToastController,
    private alertController:AlertController,
    private actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {

    const movements = localStorage.getItem('movements');  
    if (movements) {
      let items = JSON.parse(movements);
      this.movements = items.filter(item => item.goal == this.goal.id);
      this.movements.forEach(element => {
        this.total += element.amount
      })
      this.progress = ( this.total / this.goal.amount ) * 100
      console.log(this.progress, 'progress')

    }


  }
 

  closeModal() {
    this.modalController.dismiss();
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
    const NAME = 'goals';
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
    this.modalController.create({
      component: createGoal,
      componentProps: { data: this.goal },
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();
      modal.onWillDismiss().then((result) => {
        if (result.data) {
          this.setToast('Elemento actualizado','success');
          this.getGoal();

          setTimeout(() => {
            this.modalController.dismiss(true);
          },1000)

        }
      })
    });
  }

  getGoal() {
    const goal = localStorage.getItem('goals');
    let items = JSON.parse(goal);
    this.goal = items.filter(item => item.id == this.goal.id);
    this.goal = this.goal[0]
  }



  setToast(message,color) {
    this.toastCtrl.create({
      message,
      duration: 2000,
      color
    }).then(toast => toast.present());


  }

}
