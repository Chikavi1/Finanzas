import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CardPage } from '../card/card.page';
import { GoalPage } from '../goal/goal.page';
import { DebtPage } from '../debt/debt.page';

@Component({
  selector: 'app-recurrent',
  templateUrl: './recurrent.page.html',
  styleUrls: ['./recurrent.page.scss'],
})
export class RecurrentPage implements OnInit {

  name = '';
  method;
  type = "expense";
  card;
  goal;
  debt;
  amount;
  type_recurrent = "weekly";
  days_recurrent = ["monday"]

  step = 1;

  categoriesSelected = [];
 
  constructor(private modalCtrl: ModalController) { 

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

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss();
  }

  back() {
    this.step--;
  }

  next() {
    this.step++;
  }

  cardSelected: any;
  goalSelected: any;
  debtSelected: any;

  setType(t) {
    this.type = t;
  }

  setMethod(option: string) {
    this.method = option;
   }

  selectCard(card) {
    this.card = card;
    this.cardSelected = card.id
    // this.generateTextInfo();
  }

  selectGoal(goal) {
    this.goal = goal;
    this.goalSelected = goal.id
    // this.generateTextInfo();
  }

  selectDebt(debt) {
    this.debt = this.debt
    this.debtSelected = debt.id
    // this.generateTextInfo();
  }
  
  cards = []
  debts = []
  goals = []

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


  add() {
    let data = {
      id_recurrent: new Date().getTime().toString(),
      name: this.capitalizeFirstLetter(this.name),
      category: this.categoriesSelected,
      method: "cash",
      type: this.type,
      card: this.card,
      goal: this.goal,
      debt: this.debt,
      amount: this.amount,
      recurrence: {
        type: this.type_recurrent,
        days: this.days_recurrent
      }
    }


  const recurrents = localStorage.getItem('recurrents') || '[]';
    let recurrent = JSON.parse(recurrents);
    recurrent.push(data);
    localStorage.setItem('recurrents', JSON.stringify(recurrent));
    this.modalCtrl.dismiss(data);
  }

  validateInput(event: any) {
    const inputValue = event.target.value;
    event.target.value = inputValue.replace(/[^0-9]/g, '');
  }

  capitalizeFirstLetter(str: string): string {
    if (!str) return str;  
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  openCategorySelector() {
    
  }

}
