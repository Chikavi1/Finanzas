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
  isListening: boolean = false;

  constructor(private modalCtrl: ModalController) {}

  async checkPermission() {
    const permission = await SpeechRecognition.checkPermissions();
    if(permission.speechRecognition !== 'granted') {
      await SpeechRecognition.requestPermissions();
    }
  }

  async startListening() {
    this.isListening = true;
    const options = {
      language: 'es-ES', // Idioma para el reconocimiento
      maxResults: 1, // Número máximo de resultados
      prompt: 'Habla ahora...', // Mensaje en el diálogo (en Android)
      partialResults: true, // Resultados parciales
    };

    await this.checkPermission();

    SpeechRecognition.start(options).then((result) => {
      this.recognizedText = result.matches[0];
      this.isListening = false;
    }).catch((error) => {
      console.error('Error:', error);
      this.isListening = false;
    });
  }

  stopListening() {
    this.isListening = false;
    SpeechRecognition.stop();
  }

  goBack() {
    this.modalCtrl.dismiss();
  }
}