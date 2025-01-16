import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CardPage } from '../card/card.page';
import { GoalPage } from '../goal/goal.page';
import { DebtPage } from '../debt/debt.page';
import { CategoriesPage } from '../../show/categories/categories.page';

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
  data;
 
  constructor(private modalCtrl: ModalController) { 
    this.getCards();
    this.getDebts();
    this.getGoals();

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
    if (this.data) {
      this.name = this.data.name;
      this.method = this.data.method;
      this.type = this.data.type;
      this.card = this.data.card;
      this.goal = this.data.goal;
      this.debt = this.data.debt;
      this.amount = this.data.amount;
      this.type_recurrent = this.data.recurrence.type;
      this.days_recurrent = this.data.recurrence.days;
      this.categoriesSelected = this.data.categories;
    }
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
    this.clearAllTypesSelected();
    this.card = card;
    this.cardSelected = card.id
    // this.generateTextInfo();
  }

  selectGoal(goal) {
    this.clearAllTypesSelected();
    this.goal = goal;
    this.goalSelected = goal.id
    // this.generateTextInfo();
  }

  selectDebt(debt) {
    this.clearAllTypesSelected();
    this.debt = this.debt
    this.debtSelected = debt.id
    // this.generateTextInfo();
  }

  clearAllTypesSelected() {
    this.cardSelected = null;
    this.goalSelected = null;
    this.debtSelected = null;
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
      method:  this.method,
      type: this.type,
      card: this.cardSelected,
      goal: this.goalSelected,
      debt: this.debtSelected,
      amount: this.amount,
      recurrence: {
        type: this.type_recurrent,
        days: this.days_recurrent
      }
    }

    console.log('data: ',data)
    

    // const recurrents = localStorage.getItem('recurrents') || '[]';
    // let recurrent = JSON.parse(recurrents);
    // recurrent.push(data);
    // localStorage.setItem('recurrents', JSON.stringify(recurrent));
    // this.modalCtrl.dismiss(data);
  }

  update() {
   const recurrents = localStorage.getItem('recurrents') || '[]';
   let recurrent = JSON.parse(recurrents);

   const element = recurrent.find((el: any) => el.id === this.data.id);

   if (element) {
    element.name = this.name;
    element.method = this.method;
    element.type = this.type;
    element.card = this.card;
    element.goal = this.goal;
    element.debt = this.debt;
    element.amount = this.amount;
    element.recurrence.type = this.type_recurrent;
    element.recurrence.days = this.days_recurrent;
    element.categories = this.categoriesSelected;

     localStorage.setItem('recurrents', JSON.stringify(recurrent));
  }

    this.modalCtrl.dismiss(true);
  }
  
  validateInput(event: any) {
    const inputValue = event.target.value;
    event.target.value = inputValue.replace(/[^0-9]/g, '');
  }

  capitalizeFirstLetter(str: string): string {
    if (!str) return str;  
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  async openCategorySelector() {

      const modal = await this.modalCtrl.create({
        component: CategoriesPage,
        componentProps: {
          categoriesSelected: this.categoriesSelected,
        },
      });
  
      await modal.present();
  
      const { data } = await modal.onWillDismiss();
        if (data) {
          console.log(data);
          this.categoriesSelected = data.selectedCategories;
          console.log(this.categoriesSelected)
        }
    
  }
}
