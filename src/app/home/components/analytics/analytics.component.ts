import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  chart: any; // Variable para almacenar la instancia del gráfico

  constructor() { }

  ngOnInit() {
    this.renderChart();
  }

  renderChart() {
    const ctx = document.getElementById('myDoughnutChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Bogotá-Barranquilla', 'Pereira-Medellin', 'Barranquilla-Bogotá', 'Medellin-Pereira', 'Pasto - Puerto Gaitan', 'Puerto Gaitan - Pasto'],
        datasets: [{
          label: 'Viajes',
          data: [18, 30, 25, 32, 10, 2],
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


}
