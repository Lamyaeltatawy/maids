import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BaseService } from '../services/service.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, OnChanges {
  @Input('searchKeyWord') searchKeyWord: any = null;
  usersList: any[] = [];
  body: any;
  pathchanged: boolean = false;
  constructor(
    private service: BaseService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  searchValue: string = '';
  form?: FormGroup;

  ngOnInit(): void {
    this.getUsers();
    console.log('key word', this.searchKeyWord);
  }
  ngOnChanges(): void {
    if (this.searchKeyWord) {
      this.body.search = this.searchKeyWord;
      console.log('channnnnged');
    }
  }
  initateForm() {
    this.form = this._formBuilder.group({
      page: new FormControl(1),
    });
  }
  cardDetails(id: string) {
    this.pathchanged = true;
    this.router.navigate(['user-details'], {
      queryParams: {
        id: id,
      },
    });
  }

  getUsers() {
    this.body = this.form?.getRawValue();
    this.service.getAllUsers(this.body).subscribe((res: any) => {
      this.usersList = res.data;
      console.log(this.usersList);
    });
  }
}
