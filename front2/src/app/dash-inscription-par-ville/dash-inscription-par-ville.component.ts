import { Component } from '@angular/core';
import Chart, { LinearScale, TimeScale } from 'chart.js/auto';
import { InscriptionService } from '../inscription.service';

@Component({
  selector: 'app-dash-inscription-par-ville',
  templateUrl: './dash-inscription-par-ville.component.html',
  styleUrls: ['./dash-inscription-par-ville.component.css']
})
export class DashInscriptionParVilleComponent {

  title = 'Demande d\'Inscription Distribution';

  constructor(private clientService: InscriptionService) {}

  ngOnInit(): void {
    Chart.register(LinearScale, TimeScale);
    console.log('ngOnInit is called');

    this.clientService.getDemandeListe().subscribe((clients) => {
      const addressData = this.groupClientsByAddress(clients);

      const ctx = document.getElementById('Cart') as HTMLCanvasElement;
      const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: Object.keys(addressData), // Addresses as labels
          datasets: [
            {
              data: Object.values(addressData), // Client count for each address
              backgroundColor: ['#425363', '#36A2EB', '#FFCE56', '#8E44AD', '#2ECC71'], // Customize colors

            },

          ],
        },
        options: {
          responsive: true,
        },
      });
    });
  }

  private groupClientsByAddress(clients: any[]): { [key: string]: number } {
    const addressData: { [key: string]: number } = {};

    clients.forEach((client) => {
      const address = client.adresse;

      if (address in addressData) {
        addressData[address]++;
      } else {
        addressData[address] = 1;
      }
    });

    return addressData;
}


}
