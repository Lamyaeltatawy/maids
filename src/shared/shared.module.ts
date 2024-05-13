import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SideBarComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [HeaderComponent, FooterComponent, SideBarComponent],
})
export class SharedModule {}
