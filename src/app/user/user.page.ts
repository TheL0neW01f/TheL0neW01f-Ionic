import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openSettings() {
    this.router.navigateByUrl('/tabs/tab4');
  }
}
