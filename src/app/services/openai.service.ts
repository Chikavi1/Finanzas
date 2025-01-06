import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  private apiUrl = 'https://api.openai.com/v1/chat/completions';  
  private apiKey = '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'; 

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
