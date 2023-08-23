// Importação dos módulos necessários do Angular para a criação do componente.
import { Component } from "@angular/core";
import { Endereco } from "src/models/endereco";
import { MatTableDataSource } from "@angular/material/table";

// Declaração do componente 'ResultadoComponent'.
@Component({
  selector: "app-resultado",
  templateUrl: "./resultado.component.html",
  styleUrls: ["./resultado.component.css"],
})
export class ResultadoComponent {
  ELEMENT_DATE: Endereco[] = []; // Declaração de um array de objetos do tipo 'Endereco'.

  // Inicialização de um objeto 'endereco' com propriedades vazias.
  endereco: Endereco = {
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    ibge: "",
    gia: "",
    ddd: "",
    siafi: "",
    erro: false,
  };

  // Criação de uma instância de 'MatTableDataSource' com o array 'ELEMENT_DATE'.
  dataSource = new MatTableDataSource<Endereco>(this.ELEMENT_DATE);

  // Definição das colunas que serão exibidas na tabela.
  displayedColumns: string[] = [
    "cep",
    "logradouro",
    "bairro",
    "localidade",
    "uf",
    "ddd",
    "ibge",
  ];

  // Método chamado quando o componente é inicializado.
  ngOnInit() {
    // Obtém o objeto 'endereco' do estado do histórico de navegação.
    this.endereco = history.state.endereco;

    // Adiciona o objeto 'endereco' ao array 'ELEMENT_DATE'.
    this.ELEMENT_DATE.push(this.endereco);

    // Atualiza a fonte de dados da tabela com o novo array 'ELEMENT_DATE'.
    this.dataSource = new MatTableDataSource<Endereco>(this.ELEMENT_DATE);
  }
}
