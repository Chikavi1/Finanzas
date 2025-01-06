import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  private apiUrl = environment.openIAUrl;  
  private apiKey = environment.openIAKey; 

  constructor() {}

  async sendMessage(prompt: string): Promise<any> {
    try {
      const response = await axios.post(this.apiUrl, {
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "Eres un asistente útil." },
          { role: "user", content: prompt }
        ]
      }, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      throw error;
    }
  }
}
