import { BaseService } from './../../../app/components/services/service.service';
import {
  Component,
  EventEmitter,
  Injector,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Form } from '@angular/forms';
import { debounceTime, takeUntil } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output('searchValueChanged') searchValueChanged = new EventEmitter<string>();

  public filterForm?: FormGroup;
  // searchValueChanged: any;
  constructor(
    private _formBuilder: FormBuilder,
    public injector: Injector,
    BaseService: BaseService
  ) {}

  ngOnInit() {
    this.iniateSearchForm();
  }
  iniateSearchForm() {
    this.filterForm = this._formBuilder.group({
      search: new FormControl(''),
    });
    this.filterForm.controls['search'].valueChanges.subscribe((res) => {
      console.log('ressss', res);
      this.searchValueChanged = res;
    });
  }
  // ngUnsubscribe(ngUnsubscribe: any): import('rxjs').OperatorFunction<any, any> {
  //   throw new Error('Method not implemented.');
  // }
}
