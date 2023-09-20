import { Component} from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage  {

  constructor() {
    setTimeout(() => {
      // Após algum carregamento simulado, redirecione para a página principal.
      // Substitua 'home' pelo nome da sua página principal.
      window.location.href = '/home';
    }, 3000); // Simula 3 segundos de carregamento
  }

}
