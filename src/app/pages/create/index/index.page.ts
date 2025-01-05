import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CardPage } from '../card/card.page';
import { DebtPage } from '../debt/debt.page';
import { GoalPage } from '../goal/goal.page';
import { NativeAudio } from '@capacitor-community/native-audio';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  method = 'cash';
  selectedDateTime 
  type;
  IsSelectedCategories = false;


  cards: any = [];
  debts: any = [];
  goals: any = [];
  textDone;

  constructor(private modalCtrl: ModalController) { 
    this.getCards();
    this.getDebts();
    this.getGoals();

    this.preloadAudio();
  }
  
  async preloadAudio() {
    let path = "notification.mp3"
    if (Capacitor.getPlatform() == 'ios') path = 'sounds/' + path
    else if (Capacitor.getPlatform() == 'android') path = 'assets/' + path
    
    await NativeAudio.preload({
      assetId: 'click',
      // assetPath: 'assets/sounds/notification.mp3',
      assetPath: path,
      audioChannelNum: 1,
      isUrl: false
    })
  }

  async playAudio() {
    await NativeAudio.play({
      assetId: 'click',
     })
  }


  ngOnInit() {
  
  this.textDone = (this.type == 'expense') ? 'Agregar Gasto' : 'Agregar Ingreso'
  }


  setIsSelectedCategories() {
    this.IsSelectedCategories = !this.IsSelectedCategories;
  }

  setMethod(option: string) {
    this.method = option;
  }
  name;
  amount;
  
  add() {
    let newMovement = {
        id: new Date().getTime().toString(),
        name: this.name,
        emoji: 'santa',
        method: this.method,
        amount: this.amount,
        date: this.selectedDateTime || new Date(),
        type: this.type,
        category: 'pets'
    }

  
    const movements = localStorage.getItem('movements') || '[]';
    let movement = JSON.parse(movements);
    movement.push(newMovement);

    localStorage.setItem('movements', JSON.stringify(movement));

    this.modalCtrl.dismiss(newMovement)
  }

  close() {
    this.playAudio();
    this.modalCtrl.dismiss();
  }

  addCard() {
    this.modalCtrl.create({
      component: CardPage,
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();
      modal.onWillDismiss().then((result) => {
          if (result.data) {
            this.getCards();
          }
      });        
    });
  }

  addDebt() {
    this.modalCtrl.create({
      component: DebtPage,
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();
      modal.onWillDismiss().then((result) => {
          if (result.data) {
            this.getDebts();
          }
      });  
    });
  }

  addGoal() {
    this.modalCtrl.create({
      component: GoalPage,
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();
      modal.onWillDismiss().then((result) => {
          if (result.data) {
            this.getGoals();
          }
      });  
    });
  }

  validateInput(event: any) {
    const inputValue = event.target.value;
    event.target.value = inputValue.replace(/[^0-9]/g, '');
  }

  toggleType() {
    this.type = (this.type == 'expense') ? 'income' : 'expense';
    this.textDone = (this.type == 'expense') ? 'Agregar Gasto' : 'Agregar Ingreso'
  }


  getCards() {
    let cards = localStorage.getItem('cards') || '[]';
    this.cards =  JSON.parse(cards).reverse()
  }

  getDebts() {
    let debts = localStorage.getItem('debts') || '[]';
    this.debts =  JSON.parse(debts).reverse()
  }

  getGoals() {
    let goals = localStorage.getItem('goals') || '[]';
    this.goals =  JSON.parse(goals).reverse()
  }

}
