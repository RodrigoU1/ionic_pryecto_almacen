import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

interface productSlide {
  id: number,
  imagen: string,
}

interface product{
  id: number,
  price: number,
  name: string,
  stock: number,
  description: string,
  state: boolean,
  imagen: string,
  codigo: string

}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {this.chartOptions = {

    series: [
      {
        name: "My-series",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }
    ],
    chart: {
      height: 350,
      type: "bar"
    },
    title: {
      text: "Ventas del mes"
    },
    xaxis: {
      categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
    }
  };}

  

  // title = "Sistema de inventario"

  masVendidos:productSlide[] = [
    {
      id: 1,
      imagen: 'https://m.media-amazon.com/images/I/81Yiw8Zk0uL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      id: 1,
      imagen: 'https://m.media-amazon.com/images/I/81Sf26ophuL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      id: 1,
      imagen: 'https://m.media-amazon.com/images/I/71ICfMIWksL.jpg',
    }
  ]

  productos:product[] = [
    {
      id: 1,
      price: 5500,
      name: "Nintendo Switch Oled Zelda",
      stock: 10,
      description: "Consola de videojuegos",
      state: true,
      imagen: 'https://m.media-amazon.com/images/I/81Yiw8Zk0uL._AC_UF1000,1000_QL80_.jpg',
      codigo: "asdasdasda"
    },
    {
      id: 1,
      price: 5000,
      name: "Nintendo Switch Oled Pokémon",
      stock: 0,
      description: "Consola de videojuegos",
      state: true,
      imagen: 'https://m.media-amazon.com/images/I/81Sf26ophuL._AC_UF1000,1000_QL80_.jpg',
      codigo: "asdasdasda"
    },
    {
      id: 1,
      price: 3500,
      name: "Nintendo Switch lite Pókemon",
      stock: 10,
      description: "Consola de videojuegos",
      state: true,
      imagen: 'https://m.media-amazon.com/images/I/71ICfMIWksL.jpg',
      codigo: "asdasdasda"
    },
  ]
}
