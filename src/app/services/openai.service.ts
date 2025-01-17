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
    const system_instructions = `Eres un modelo que convierte texto en datos organizados siguiendo un formato específico. Tu tarea es identificar información explícita e implícita y estructurarla en un objeto con los siguientes campos:
    -name:Descripción de la transacción.
    -amount:Cantidad de dinero involucrada.
    -type:Puede ser (incomes,expenses,debts,growth).
    -date:Si no se indica,defecto fecha actual.  
    -method:Medio de pago, como cash,credit,debit(transfer is debit),paypal.  
    -card:Terminación de la tarjeta utilizada,defecto null.  
    -debt:Nombre asociado a la deuda, defecto null.  
    -goal:Nombre de la meta,defecto null.
    # Inicia y termina con [], ejemplo de Salida: [{"i": "val"},..],`;
    
    try {
      const response = await axios.post(this.apiUrl, {
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: system_instructions },
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
