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
  goals: any = [];

  constructor(private modalController: ModalController) { 
    this.getGoals();
  }

  filteredGoals(goal){

  }

  isFiltered = false;

  clearFilter() {
    this.isFiltered = false;
    this.getGoals();
  }
  
  filterMovements(type) {
    this.isFiltered = true

    this.goals = JSON.parse(localStorage.getItem('goals')) || '[]';
    this.goals.reverse();

    if (type == 'savings') {
      this.goals = this.goals.filter(movement => movement.type == 'savings');
    } else if (type == 'goals') {
      this.goals = this.goals.filter(movement => movement.type == 'goals');
    } else if (type == 'investments') {
      this.goals = this.goals.filter(movement => movement.type == 'investments');
    }

  }




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

      modal.onWillDismiss().then((result) => {
        if (result.data) {
          this.getGoals();
        }
      })

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
