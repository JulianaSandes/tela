import { Component} from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage  {

  constructor() {
    
  setTimeout(() => {
      window.location.href = '/home';
    }, 3000); 
  }

}
