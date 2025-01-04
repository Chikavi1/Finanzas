import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-visitsby-users-by-business',
  templateUrl: './visitsby-users-by-business.page.html',
  styleUrls: ['./visitsby-users-by-business.page.scss'],
})
export class VisitsbyUsersByBusinessPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }
  redeem = 3;
  count = 7;

  ngOnInit() {
  }

  close(){
    this.modalCtrl.dismiss();
  }

}
