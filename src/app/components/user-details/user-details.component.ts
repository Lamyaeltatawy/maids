import { Component, OnInit } from '@angular/core';
import { BaseService } from '../services/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  id: any;
  public userDatails: any = [];
  constructor(private route: ActivatedRoute, private userData: BaseService) {}
  ngOnInit() {
    this.route.queryParamMap.subscribe((param: any) => {
      this.id = param.get('id');
      this.getUserData();
    });
  }
  getUserData() {
    this.userData.getSingleUser(this.id).subscribe((res: any) => {
      console.log('my resssss', res.data);
      this.userDatails = res.data;
    });
  }
}
