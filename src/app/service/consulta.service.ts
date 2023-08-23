import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from 'src/models/endereco';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private urlApi: string = "https://viacep.com.br/ws/"

 constructor(private http: HttpClient) { }

  consultar(cepConsultado: any): Observable<Endereco> {
    let cep = cepConsultado.value;
    let url = this.urlApi + cep + "/json/";        
    return this.http.get<Endereco>(url);    
  }
}
