import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupPageComponent } from '../signup-page/signup-page.component';


@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.scss']
})
export class LandPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


}
