import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { NavController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  frete: any;

  constructor(private apiService: ApiService) {

  }

  consultaFrete(form) {
    console.log(form);
    console.log(form.controls.cep.value);
    this.apiService.consultaFrete(form.controls.cep.value).subscribe((response) => this.frete = response);;
  }
}
