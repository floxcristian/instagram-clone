// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Components
import { HeaderComponent } from './layouts/header/header.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { FooterComponent } from './layouts/footer/footer.component';

const MODULES = [CommonModule, RouterModule];
const COMPONENTS = [HeaderComponent, MainLayoutComponent];

@NgModule({
  declarations: [...COMPONENTS, FooterComponent],
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS],
})
export class SharedModule {}
