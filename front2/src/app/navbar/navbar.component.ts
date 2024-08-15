import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { CommuneService } from '../commune.service';
import { ClientService } from '../client.service';
import { Client } from '../client';
import { Commune } from '../commune';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = "Communities and Citizens by Address";
  communes!: Commune[];
  citoyens!: Client[];

  constructor(
    private communeService: CommuneService,
    private citoyenService: ClientService
  ) {}

  ngOnInit() {
    // Assuming you have separate services to fetch communes and citizens
    this.communeService.getCommuneListe().subscribe(communes => {
      this.communes = communes;
      this.renderBarChart();
    });

    this.citoyenService.getListecitoyen().subscribe(citoyens => {
      this.citoyens = citoyens;
      this.renderBarChart();
    });
  }
  renderBarChart() {
    if (!this.communes || !this.citoyens) {
      // If either communes or citoyens is not available, wait for both to be available
      return;
    }

    const addresses = [...new Set([...this.communes, ...this.citoyens].map(item => item.adresse))];
    const communeCounts = this.groupItemsByAddress(this.communes,addresses);
    const citoyenCounts = this.groupItemsByAddress(this.citoyens,addresses);

    const ctx = document.getElementById('communitiesAndCitizensByAddressChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: addresses,
        datasets: [
          {
            label: '# of Communities',
            data: communeCounts,
            backgroundColor: '#D83613',
            borderWidth: 0.2
          },
          {
            label: '# of Citizens',
            data: citoyenCounts,
            backgroundColor: '#007BFF', // Change color as needed
            borderWidth: 0.2
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  private groupItemsByAddress(items: { adresse: string }[],addresses: string[]): number[] {
    const counts: { [address: string]: number } = {};
    items.forEach(item => {
      const address: string = item.adresse;
      if (address in counts) {
        counts[address]++;
      } else {
        counts[address] = 1;
      }
    });

    return addresses.map(address => counts[address] || 0);
}


}
