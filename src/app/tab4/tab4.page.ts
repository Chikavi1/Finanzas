import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NotificationsPage } from '../components/notifications/notifications.page';
import { GoalPage as showGoal } from '../pages/show/goal/goal.page';
import { GoalPage as createGoal } from '../pages/create/goal/goal.page';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  notifications: any[] = [];
  
  constructor(private modalController: ModalController) { 
    this.getGoals();
  }
 
  goals: any = [];

  getGoals() {
    let goals = localStorage.getItem('goals') || '[]';
    this.goals =  JSON.parse(goals).reverse()
  }

  createNotification() {
     this.modalController.create({
      component: NotificationsPage,
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();
    });
  }

  goToGoal(goal) {
    this.modalController.create({
      component: showGoal,
      componentProps: { goal },
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();
    });
  }

  addGoal() {
   this.modalController.create({
      component: createGoal,
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();

      modal.onWillDismiss().then((result) => {
        if (result.data) {
          this.getGoals();
        }
      })
    });

  }

}
