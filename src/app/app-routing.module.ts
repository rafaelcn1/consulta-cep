import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ResultadoComponent } from "./componentes/resultado/resultado.component";
import { ConsultaComponent } from "./componentes/consulta/consulta.component";

const routes: Routes = [
  { path: "", component: ConsultaComponent },
  { path: "resultado", component: ResultadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
