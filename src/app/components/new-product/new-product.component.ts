import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent  implements OnInit {

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
