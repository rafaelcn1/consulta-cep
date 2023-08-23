/**
 * Nesta seção, estamos importando as dependências necessárias para o componente ConsultaComponent.
 * Essas dependências incluem o Component do Angular, FormControl e Validators do pacote @angular/forms, Router do Angular, ToastrService do pacote ngx-toastr, ConsultaService do arquivo consulta.service.ts e Endereco do arquivo endereco.ts.
 */
import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ConsultaService } from "src/app/service/consulta.service";
import { Endereco } from "src/models/endereco";

/**
 * Aqui, estamos definindo o componente ConsultaComponent com o seletor app-consulta.
 * O template do componente está definido no arquivo consulta.component.html e os estilos estão definidos no arquivo consulta.component.css.
 */
@Component({
  selector: "app-consulta",
  templateUrl: "./consulta.component.html",
  styleUrls: ["./consulta.component.css"],
})

/**
 * Este é o construtor da classe ConsultaComponent.
 * Ele recebe três parâmetros: consultaService, toastrService e router.
 * Esses parâmetros são injetados por meio da injeção de dependência do Angular.
 */
export class ConsultaComponent {
  constructor(
    private consultaService: ConsultaService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  /**
   * Aqui, estamos declarando e inicializando a variável endereco do tipo Endereco.
   * Endereco é uma interface que define a estrutura dos dados de endereço.
   */
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

  /**
   * Aqui, estamos declarando e inicializando a variável cepConsultado do tipo FormControl.
   * FormControl é uma classe fornecida pelo pacote @angular/forms que gerencia o estado e a validação de um campo de formulário.
   * Estamos aplicando três validadores ao campo: required, minLength e maxLength.
   */
  cepConsultado: FormControl = new FormControl(null, [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(8),
  ]);

  /**
   * Esta é a função consulta() que é chamada quando o usuário clica em um botão ou realiza alguma ação para consultar o endereço.
   * Dentro desta função, estamos chamando o método consultar() do serviço consultaService, passando o valor do campo cepConsultado.
   * Em seguida, estamos nos inscrevendo para receber os dados retornados pela consulta.
   * Se o endereço retornado tiver a propriedade erro como true, exibimos uma mensagem de erro usando o toastrService.
   * Caso contrário, exibimos uma mensagem de sucesso e navegamos para a rota /resultado, passando o objeto endereco como estado.
   */
  consulta(): void {
    this.consultaService.consultar(this.cepConsultado).subscribe((data) => {
      this.endereco = data;
      if (this.endereco.erro) {
        this.toastrService.error(
          "Não encontrado ou Não Existe!",
          "CEP: " + this.cepConsultado.value
        );
      } else {
        this.toastrService.success(
          "Encontrado!",
          "CEP: " + this.cepConsultado.value
        );
        this.router.navigate(["/resultado"], {
          state: { endereco: this.endereco },
        });
      }
    });
  }

  /**
   * Esta função validar() retorna um valor booleano indicando se o campo cepConsultado é válido ou não, com base nas validações aplicadas anteriormente.
   */
  validar(): boolean {
    return this.cepConsultado.valid;
  }
}