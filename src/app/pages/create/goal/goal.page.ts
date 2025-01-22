import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CategoriesPage } from '../../show/categories/categories.page';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.page.html',
  styleUrls: ['./goal.page.scss'],
})
export class GoalPage implements OnInit {

  data;
  custom_items = false;
  type = 'savings';
  name = '';
  amount = 0;

  constructor(private modalCtrl: ModalController) { }
  ngOnInit() {
    console.log(this.data); 
    if (this.data) {
      this.name = this.data.name;
      this.amount = this.data.amount;
      this.type = this.data.type;
    }
  }

  setType(t){
    this.type = t;
  }

  categoriesSelected

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

  setCustom(){
    this.custom_items = !this.custom_items;
  }

  close(){
    this.modalCtrl.dismiss();
  }


  create() {
    let data = {
      id: new Date().getTime().toString(),
      name: this.capitalizeFirstLetter(this.name),
      type:this.type,
      amount: this.amount
    }
    const goals = localStorage.getItem('goals') || '[]';
    let goal = JSON.parse(goals);
    goal.push(data);
    localStorage.setItem('goals', JSON.stringify(goal));
    this.modalCtrl.dismiss(true);
  }

  showEmojiPicker = false;
  openEmojiPicker() {
    
  }

  selectedEmoji = 'santa';
  addEmoji(event: any) {
    
  }

  capitalizeFirstLetter(str: string): string {
    if (!str) return str;  
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

 
  update() {
   const goals = localStorage.getItem('goals') || '[]';
   let goal = JSON.parse(goals);
   const element = goal.find((el: any) => el.id === this.data.id);

   if (element) {
      element.name = this.name;
      element.amount = this.amount;
      element.type = this.type;
      localStorage.setItem('goals', JSON.stringify(goal));
    }
    this.modalCtrl.dismiss(true);
  }

}
