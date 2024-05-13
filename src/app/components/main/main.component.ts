import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BaseService } from '../services/service.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, OnChanges {
  @Input('searchKeyWord') searchKeyWord: any = null;
  usersList: any[] = [];
  constructor(
    private service: BaseService,
    private _formBuilder: FormBuilder
  ) {}
  searchValue: string = '';
  form?: FormGroup;

  ngOnInit(): void {
    this.getUsers();
    console.log('key word', this.searchKeyWord);
  }
  ngOnChanges(): void {
    if (this.searchKeyWord) {
      this.getUsers();
      console.log('channnnnged');
    }
  }
  initateForm() {
    this.form = this._formBuilder.group({
      page: new FormControl(1),
    });
  }
  cardDetails(id: string) {
    console.log('idddd', id);
  }
  getUsers() {
    let body = this.form?.getRawValue();
    // body.search = this.searchKeyWord;
    console.log('body', body);

    this.service.getAllUsers(body).subscribe((res: any) => {
      this.usersList = res.data;
      console.log(this.usersList);
    });
  }
}
