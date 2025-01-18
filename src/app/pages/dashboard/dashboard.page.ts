import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
 import { IndexPage } from '../create/index/index.page';
import { NetWorthPage } from '../show/net-worth/net-worth.page';
import { SettingsPage } from '../show/settings/settings.page';
import { MovementPage } from '../show/movement/movement.page';
import { FilteredMovementsPage } from '../show/filtered-movements/filtered-movements.page';
import { CalendarPage } from '../show/calendar/calendar.page';
import { CategoriesPage } from '../show/categories/categories.page';
import { BanksPage } from '../show/banks/banks.page';
import { RecognitionPage } from '../show/recognition/recognition.page';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
 

  movements:any = []
  total = 0;

  constructor(
    private actionSheetController: ActionSheetController,
    private modalController: ModalController) { 
  
    this.getMovements();
    
  }

  ngOnInit() {
  }

  isFiltered = false;

  clearFilter() {
    this.isFiltered = false;
    this.getMovements();
  }

  goToSettings() {
    this.modalController.create({
      component: SettingsPage,
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();
    });
  }

  getMovements() {
  this.movements = JSON.parse(localStorage.getItem('movements')) || []; 
  
  if (this.movements.length > 0) {
  
    this.movements.forEach(element => {
      this.total +=  parseFloat( element.amount );
    });
    this.movements.reverse();
  }
}


  filterMovements(type) {
    this.isFiltered = true
    this.movements = JSON.parse(localStorage.getItem('movements')) || '[]';
    this.movements.reverse();
    if (type == 'expense') {
      this.movements = this.movements.filter(movement => movement.type == 'expense');
    } else if (type == 'income') {
      this.movements = this.movements.filter(movement => movement.type == 'income');
    } else if (type == 'debt') {
      this.movements = this.movements.filter(movement => movement.type == 'debt');
    } else if (type == 'growth') {
      this.movements = this.movements.filter(movement => movement.type == 'growth');
    }

  }

  addMovement(type) {
     this.modalController.create({
       component: IndexPage,
       componentProps: {
         'type': type
       },
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();

      modal.onWillDismiss().then((result) => {
        if(result.data) {
          this.getMovements();
        }
       });
      
    });
  }
 
  goToCategories() {
    this.modalController.create({
      component: CategoriesPage,
      componentProps: {
        'type': 'category'
      },
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();
    });
  }

  goToBanks() {
    this.modalController.create({
      component: BanksPage,
      componentProps: {
        'type': 'bank'
      },
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();
    });
  }

  goToNet() {
    this.modalController.create({
      component: NetWorthPage,
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();
    });
  }
  
  goToMovement(movement) {
    this.modalController.create({
      component: MovementPage,
      componentProps: {
        'movement': movement
      },
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();

      modal.onWillDismiss().then((result) => {
        if(result.data) {
          this.getMovements();
        }
      });
      
    });
  }

  goToFilteredMovements(method) {
    this.modalController.create({
      component: FilteredMovementsPage,
      componentProps: {
       'method': method
      },
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();
    });
  }
 
 
  goToCalendar() {
    this.modalController.create({
      component: CalendarPage,
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();
    });
  }


  openRecognition() {
    this.modalController.create({
      component: RecognitionPage,
      componentProps: {
        'type': 'recognition'
      },
      cssClass: 'my-custom-class'
    })
    .then(modal => {
       modal.present();
       modal.onWillDismiss().then((result) => {
        if(result.data) {
          this.getMovements();
        }
       });
      
    });
  }
}


