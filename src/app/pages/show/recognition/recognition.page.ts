import { Component, OnInit } from '@angular/core';
import { SpeechRecognition } from '@capacitor-community/speech-recognition';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recognition',
  templateUrl: './recognition.page.html',
  styleUrls: ['./recognition.page.scss'],
})
export class RecognitionPage {
  recognizedText: string = '';
  recording: boolean = false;

  constructor(private modalCtrl: ModalController) {}




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
    this.modalCtrl.dismiss(this.recognizedText);
  }

  async stopRecognition() {
    this.recording = false;
    await SpeechRecognition.stop();
  }


  goBack() {
    this.modalCtrl.dismiss();
  }
}