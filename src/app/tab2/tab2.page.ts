import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewProductComponent } from '../components/new-product/new-product.component';
import { ViewProductComponent } from '../components/view-product/view-product.component';
import { NewSaleComponent } from '../components/new-sale/new-sale.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  titulo = "mis_productos"
    
  constructor(
    private modalCtrl: ModalController
  ) {}

  categorias = ['Abarrotes', 'Frutas y verduras','Limpieza','Vinos y licores','Especias','Golocinas']

  onSearchChange(event:any){

  }

  async openNewProduct(){

    const modal = await this.modalCtrl.create({
      component: NewProductComponent,
      mode: 'ios'
    });

    await modal.present();
  }

  async openViewProduct(){

    const modal = await this.modalCtrl.create({
      component: ViewProductComponent,
      mode: 'ios'
    });
    await modal.present();
  }

  async openNewSale(){

    const modal = await this.modalCtrl.create({
      component: NewSaleComponent,
      mode: 'ios',
      initialBreakpoint: .5,
      backdropDismiss: false,
    });
    await modal.present();
  }
  
}
