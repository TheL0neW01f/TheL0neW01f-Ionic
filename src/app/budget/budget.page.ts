import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.page.html',
  styleUrls: ['./budget.page.scss'],
})
export class BudgetPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openSettings() {
    this.router.navigateByUrl('/tabs/tab4');
  }
}
