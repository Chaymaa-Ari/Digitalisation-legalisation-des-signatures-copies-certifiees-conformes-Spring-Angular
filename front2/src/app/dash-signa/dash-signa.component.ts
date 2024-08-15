import { Component, OnInit } from '@angular/core';
import Chart, { LinearScale } from 'chart.js/auto';
import { Signature } from '../signature';
import { SignatureService } from '../signature.service';

@Component({
  selector: 'app-dash-signa',
  templateUrl: './dash-signa.component.html',
  styleUrls: ['./dash-signa.component.css']
})
export class DashSignaComponent implements OnInit {

  title = 'Signatures Distribution';

  constructor(private signatureService: SignatureService) {}

  ngOnInit() {
    Chart.register(LinearScale);
    console.log('ngOnInit is called');

    this.signatureService.getDemandeListe().subscribe((signatures) => {
      const signatureData = this.groupSignaturesByMonth(signatures);

      const ctx = document.getElementById('Chart') as HTMLCanvasElement;
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: Object.keys(signatureData), // Months as labels
          datasets: [
            {
              label: '# of Signatures',
              data: Object.values(signatureData), // Signature count for each month
              borderWidth: 1,
              backgroundColor: '#FF8F52', // Couleur de fond des barres
              borderColor: '#FF8F52',
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    });
  }

  private groupSignaturesByMonth(signatures: Signature[]): { [key: string]: number } {
    const signatureData: { [key: string]: number } = {};

    signatures.forEach((signature) => {
      const date = new Date(signature.date1);
      const monthYearKey = `${date.getFullYear()}-${date.getMonth() + 1}`;

      if (monthYearKey in signatureData) {
        signatureData[monthYearKey]++;
      } else {
        signatureData[monthYearKey] = 1;
      }
    });
    return signatureData;
  }


}
