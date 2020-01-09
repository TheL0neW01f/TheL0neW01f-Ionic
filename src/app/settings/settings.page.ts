import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openIncome() {
    this.router.navigateByUrl('');
  }

  openGeneral() {
    this.router.navigateByUrl('/general');
  }

  openNotifications() {
    this.router.navigateByUrl('/notifications');
  }

  openUser() {
    this.router.navigateByUrl('/user');
  }

  openAbout() {
    this.router.navigateByUrl('/about');
  }
}
