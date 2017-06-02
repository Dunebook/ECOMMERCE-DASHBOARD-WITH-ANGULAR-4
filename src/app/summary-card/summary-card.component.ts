import { Component, OnInit, Input } from '@angular/core';

import { StoreSummary } from '../store-summary';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.css']
})
export class SummaryCardComponent implements OnInit {
  @Input() storeSummary: StoreSummary;
  constructor() { }

  ngOnInit() {
  }

}
