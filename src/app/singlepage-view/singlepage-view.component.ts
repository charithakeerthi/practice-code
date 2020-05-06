import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-singlepage-view',
  templateUrl: './singlepage-view.component.html',
  styleUrls: ['./singlepage-view.component.css']
})
export class SinglepageViewComponent implements OnInit {
  userinfo: any;
  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params['id'];
    this.apiService.getEmployee(id).subscribe( data => {
      this.userinfo = data;
      console.log(this.userinfo);
    })
  }

  backClicked() {
    this.location.back();
  }

}
