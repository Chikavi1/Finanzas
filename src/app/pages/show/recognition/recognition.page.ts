import { Component, OnInit } from '@angular/core';
import { SpeechRecognition } from '@capacitor-community/speech-recognition';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { OpenaiService } from 'src/app/services/openai.service';
import { IndexPage } from '../../create/index/index.page';


@Component({
  selector: 'app-recognition',
  templateUrl: './recognition.page.html',
  styleUrls: ['./recognition.page.scss'],
})
export class RecognitionPage {
  recognizedText: string = '';
  recording: boolean = false;
  results: any = [];

  itemsWarning = false
  step = 1  ;

  constructor(
    private openIaService: OpenaiService,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController) {

    }





  async startRecognition() {
    const { available } = await SpeechRecognition.available();
    
    if (available) {

      this.recording = true;
    
      SpeechRecognition.start({
        popup: false,
        partialResults: true,
        language: 'es-ES',
        
      });

      SpeechRecognition.addListener('partialResults', (data: any) => {
        console.log('partial Results was fired', data.matches);
        this.recognizedText = data.matches[0];
      });

    }
  }

    async showLoading() {
      const loading = await this.loadingCtrl.create({
        message: 'Procesando respuesta...',
        duration: 4000,
      });

      loading.present();
    }

  returnCard(card) {
    card.isWarning = true;
    this.itemsWarning = true;
  }

  returnDebt(debt) {
    this.itemsWarning = true;
  }

  returnGoal(goal) {
    this.itemsWarning = true;
  }
  loading = true;

  
  next() {
    this.step = 2;
    setTimeout(() => {
      this.loading = false;
    }, 3000);

    this.openIaService.sendMessage(this.recognizedText).then((response: any) => {
      console.log('Chat GPT response:', response);
      console.log('response formatted:', response.choices[0].message.content);
      this.results =  JSON.parse( response.choices[0].message.content );
    });

  }

  exit() {
    this.modalCtrl.dismiss();
  }

  getData() {
  //   this.results = [
  // {
  //   "name": "Compra en Amazon",
  //   "amount": -189,
  //   "type": "expense",
  //   "date": "2023-10-03",
  //   "method": "credit",
  //   "category": [
  //     {"id": 21, "name": "Online Shopping"}
  //   ],
  //   "card": "1235",
  //   "debt": null,
  //   "goal": null
  // },
  // {
  //   "name": "Gasto en transporte",
  //   "amount": -20,
  //   "type": "expense",
  //   "date": "2023-10-03",
  //   "method": "cash",
  //   "category": [
  //     {"id": 8, "name": "Transport"}
  //   ],
  //   "card": null,
  //   "debt": null,
  //   "goal": null
  // },
  // {
  //   "name": "Compra de Tacos",
  //   "amount": -35,
  //   "type": "expense",
  //   "date": "2023-10-03",
  //   "method": "cash",
  //   "category": [
  //     {"id": 3, "name": "Food"}
  //   ],
  //   "card": null,
  //   "debt": null,
  //   "goal": null
  // },
  // {
  //   "name": "Ingreso por Propina",
  //   "amount": 100,
  //   "type": "income",
  //   "date": "2023-10-03",
  //   "method": "cash",
  //   "category": [
  //     {"id": 1, "name": "Income"}
  //   ],
  //   "card": null,
  //   "debt": null,
  //   "goal": null
  // },
  // {
  //   "name": "Compra Cargador para Carro",
  //   "amount": -1000,
  //   "type": "expense",
  //   "date": "2023-10-03",
  //   "method": "credit",
  //   "category": [
  //     {"id": 12, "name": "Car Maintenance"}
  //   ],
  //   "card": null,
  //   "debt": null,
  //   "goal": null
  // },
  // {
  //   "name": "Pago de Deuda a Lewis",
  //   "amount": -1000,
  //   "type": "debt",
  //   "date": "2023-10-03",
  //   "method": "credit",
  //   "category": [
  //     {"id": 20, "name": "Debts"}
  //   ],
  //   "card": "1235",
  //   "debt": "deuda a Lewis",
  //   "goal": null
  // }
  //   ]

    this.results =  
    [{
        "name": "Compra de gasolina",
        "amount": 350,
        "type": "expenses",
        "date": "2024-01-12",
        "method": "debit",
        "card": "4256"
    },
    {
        "name": "Ingreso por nómina",
        "amount": 4200,
        "type": "incomes",
        "date": "2024-01-12",
        "method": "cash"
    },
    {
        "name": "Compra de lonche",
        "amount": 25,
        "type": "expenses",
        "date": "2024-01-12",
        "method": "cash"
    },
    {
        "name": "Gasto en transporte",
        "amount": 20,
        "type": "expenses",
        "date": "2024-01-12",
        "method": "cash"
      }]
    
       this.checkErrors()

  }

  setRecording() {
    if(this.recording) {
      this.recording = false;
     this.stopRecording();
    } else {
      this.startRecognition();
       this.recording = true;
    }
  }

  


  stopRecording() {
    SpeechRecognition.stop();
    this.recording = false;
  }

  goBack() {
    this.step = 1;
    this.results = [];
  }



  updateItem(result) {
    console.log(result)

    this.modalCtrl.create({
      component: IndexPage,
      componentProps: {
        data: result
      }
    }).then((modalEl) => {
      modalEl.present();

      modalEl.onWillDismiss().then((result) => {
        if (result.data) {
          console.log('debo de actualizar el item');
        }
      })
    });
  }

  deleteItem(index: number) {
    this.results.splice(index, 1);
    this.itemsWarning = false;
    this.checkErrors()

  }

  checkErrors() {
    this.results.forEach(element => {
 
      if (element.card) { 
          const cards = localStorage.getItem('cards');
          if(cards) {
            const cardsArray = JSON.parse(cards);
            const card = cardsArray.find((card: any) => card.last4.toLowerCase().includes(element.card.toLowerCase()));
            if (!card) {
              element.isWarning = true;
              this.itemsWarning = true;
            } else {
              console.log('tengo la tarjeta', card);
              element.isWarning = false;
              this.itemsWarning = false;
            }
          }
         
        }

        if(element.debt){
          this.returnDebt(element)
        }

        if (element.goal) {
          this.returnGoal(element)
        }
         
      });
    console.log(this.results);
  }

  create() {

    if (this.itemsWarning) {
      alert('Necesitas modificar algunos items para poder guardar los movimientos');
    }

    let movements = JSON.parse(localStorage.getItem('movements') || '[]');
    this.results.forEach(element => {
      element.id = new Date().getTime().toString();
      movements.push(element);
    });

    localStorage.setItem('movements', JSON.stringify(movements));
    
    this.setToast('Movimientos creados', 'success');
    this.modalCtrl.dismiss(true);
  }

  setToast(message, color) {
    
    this.toastCtrl.create({
      message,
      color,
      duration: 1200
    }).then(toast => toast.present());
    
  }
}