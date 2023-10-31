import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  chart: any; // Variable para almacenar la instancia del gráfico
  mapURL: any;


  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.renderChart();
  }


  renderChart() {
    const ctx = document.getElementById('myDoughnutChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Dataset',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      }
    });
  }

  getMapURL(): string {
    // Reemplaza los espacios en blanco en la dirección con '+'
    let direccion1 ='floresta'
    const direccionFormateada = direccion1;

    // La URL base del iframe de Google Maps
    const baseURL = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.0706338137634!2d-74.10778992472343!3d4.757739541159866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f8468d01152a5%3A0xc2c6066c7eac6e6f!2s!5e0!3m2!1ses-419!2s${direccionFormateada}co!4v1698701443375!5m2!1ses-419!2sco`;

    // Combina la URL base con la dirección proporcionada
    this.mapURL = this.sanitizer.bypassSecurityTrustResourceUrl(`${baseURL}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f8468d01152a5%3A0xc2c6066c7eac6e6f!2s${direccionFormateada}!5e0`);

    return this.mapURL;
  }
}
