import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filtered-movements',
  templateUrl: './filtered-movements.page.html',
  styleUrls: ['./filtered-movements.page.scss'],
})
export class FilteredMovementsPage implements OnInit {


  movements: any = [];
  method;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    console.log('dsadsa',this.method);
  let movements = localStorage.getItem('movements') || '[]';
  const movementsArray = JSON.parse(movements);
  if (Array.isArray(movementsArray)) {
    movementsArray.forEach(element => {

      console.log(element.method)
      if (element.method == this.method) {
        this.movements.push(element);
      }
    });
  } else {
    console.error('Invalid data in localStorage for "movements".');
  }
}

  goBack() {
    this.modalController.dismiss();
  }

}
