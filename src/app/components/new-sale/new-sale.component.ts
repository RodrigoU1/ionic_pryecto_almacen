import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.scss'],
})
export class NewSaleComponent  implements OnInit {

  formProduct: FormGroup = this.fb.group({
    name: [''],
    image: [''],
    code: [''],
    categoria: [''],
    price: [''],
    inventario: [''],
    adquisition: [''],
    vencimiento: [''],
    stock: [''],
  })


  constructor(
    private modalCtrl: ModalController,
    private fb: FormBuilder,
    private route: Router,
  ) { }

  ngOnInit() {}

  onSearchChange(event:any){

  }
  
  save(){
    console.log(this.formProduct.value);
    this.close();
  }

  async close(){
    await this.modalCtrl.dismiss();
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }
}
