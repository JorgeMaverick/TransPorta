import { Component, OnInit } from '@angular/core';
//import  '../typings'   ; // Importa el archivo donde se declara 'google'
@Component({
  selector: 'app-map',
  template: `

  `,
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  zoom = 8;


  //map!: google.maps.Map;
  constructor() { }

  ngOnInit() {
    //this.initMap();
  }


  /*initMap(): void {
    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        center: { lat: -34.397, lng: 150.644 }, // Coordenadas iniciales
        zoom: 8, // Nivel de zoom inicial
      }
    );
  }*/

}
