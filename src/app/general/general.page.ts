import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.page.html',
  styleUrls: ['./general.page.scss'],
})
export class GeneralPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openSettings() {
    this.router.navigateByUrl('/tabs/tab4');
  }
}
