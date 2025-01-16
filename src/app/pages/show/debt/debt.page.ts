import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ModalController, ToastController } from '@ionic/angular';
import { DebtPage as UpdatePage  } from '../../create/debt/debt.page';

@Component({
  selector: 'app-debt',
  templateUrl: './debt.page.html',
  styleUrls: ['./debt.page.scss'],
})
export class DebtPage implements OnInit {

  debt;
  total_paid = 0;
  movements;
  
  total;
  progress;

  constructor(private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private alertController:AlertController,
    private actionSheetCtrl: ActionSheetController
  ) { 
    
  }

 ngOnInit() {

    const movements = localStorage.getItem('movements');  
    if (movements) {
      let items = JSON.parse(movements);
      this.movements = items.filter(item => item.debt == this.debt.id);

      this.movements.forEach(element => {
        this.total_paid = this.total_paid + element.amount
      })

      this.progress = -1*(this.total_paid / this.debt.amount) * 100
      
      console.log(this.movements)
    }
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
          text: 'Actualizar deuda',
          data: {
            action: 'share',
          },
          handler: () => {
            this.update();
          }
        },
        {
          text: 'Eliminar deuda',
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
      header: 'Eliminar deuda',
      message: '¿Estás seguro de que deseas eliminar la deuda?',
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
            this.removeById(this.debt.id);
          }
        }
      ]
    });

    await alert.present();
  }
 
  removeById(elementId) {
    const NAME = 'debts';
    const stored = localStorage.getItem(NAME);  
      if (stored){
        let items = JSON.parse(stored);
        items = items.filter(item => item.id !== elementId);
        localStorage.setItem(NAME, JSON.stringify(items));
        
        this.setToast('Se elimino deuda', 'dark');
        this.modalCtrl.dismiss(true);
      }
  }
 


   update() {
     this.modalCtrl.create({
       component: UpdatePage,
       componentProps: { data: this.debt },
       cssClass: 'my-custom-class'
     }).then(modal => {
        modal.present();
        modal.onWillDismiss().then((result) => {
          if(result.data) {
            this.getDebt();
            this.setToast('Elemento actualizado', 'success');
            setTimeout(() => {
              
              this.modalCtrl.dismiss(true);

            },1000)
          }
        });
      });
    }
  
  getDebt() {
    const debt = localStorage.getItem('debts');
    let items = JSON.parse(debt);
    this.debt = items.filter(item => item.id == this.debt.id);
    this.debt = this.debt[0]
  }
    
  setToast(message,color) {
    this.toastCtrl.create({
      message,
      duration: 2000,
      color
    }).then(toast => toast.present());


  }

}
