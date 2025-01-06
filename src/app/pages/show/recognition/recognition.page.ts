import { Component, OnInit } from '@angular/core';
import { SpeechRecognition } from '@capacitor-community/speech-recognition';
import { ModalController } from '@ionic/angular';
import { OpenaiService } from 'src/app/services/openai.service';

@Component({
  selector: 'app-recognition',
  templateUrl: './recognition.page.html',
  styleUrls: ['./recognition.page.scss'],
})
export class RecognitionPage {
  recognizedText: string = '';
  recording: boolean = false;

  constructor(
    private openIaService: OpenaiService,
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

  next() {
    this.openIaService.sendMessage(this.recognizedText);
    this.modalCtrl.dismiss(this.recognizedText);
  }

  async stopRecognition() {
    this.recording = false;
    await SpeechRecognition.stop();
  }


  goBack() {
    this.modalCtrl.dismiss();
  }



  results = 
  [
  {
    "name": "Compra en Amazon",
    "amount": -189,
    "type": "expense",
    "date": "2023-10-03",
    "method": "credit",
    "category": [
      {"id": 21, "name": "Online Shopping"}
    ],
    "card": "1235",
    "debt": null,
    "goal": null
  },
  {
    "name": "Gasto en transporte",
    "amount": -20,
    "type": "expense",
    "date": "2023-10-03",
    "method": "cash",
    "category": [
      {"id": 8, "name": "Transport"}
    ],
    "card": null,
    "debt": null,
    "goal": null
  },
  {
    "name": "Compra de Tacos",
    "amount": -35,
    "type": "expense",
    "date": "2023-10-03",
    "method": "cash",
    "category": [
      {"id": 3, "name": "Food"}
    ],
    "card": null,
    "debt": null,
    "goal": null
  },
  {
    "name": "Ingreso por Propina",
    "amount": 100,
    "type": "income",
    "date": "2023-10-03",
    "method": "cash",
    "category": [
      {"id": 1, "name": "Income"}
    ],
    "card": null,
    "debt": null,
    "goal": null
  },
  {
    "name": "Compra Cargador para Carro",
    "amount": -1000,
    "type": "expense",
    "date": "2023-10-03",
    "method": "credit",
    "category": [
      {"id": 12, "name": "Car Maintenance"}
    ],
    "card": null,
    "debt": null,
    "goal": null
  },
  {
    "name": "Pago de Deuda a Lewis",
    "amount": -1000,
    "type": "debt",
    "date": "2023-10-03",
    "method": "credit",
    "category": [
      {"id": 20, "name": "Debts"}
    ],
    "card": "1235",
    "debt": "deuda a Lewis",
    "goal": null
  }
]

  
  updateItem() {
    console.log()
  }

  deleteItem(index: number) {
   this.results = this.results.splice(index, 1);
  }
}