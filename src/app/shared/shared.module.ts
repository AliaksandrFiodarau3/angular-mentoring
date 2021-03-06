import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {LogoComponent} from './components/logo/logo.component';
import {UserMenuComponent} from './components/user-menu/user-menu.component';
import {BreadcrumbsComponent} from './components/breadcrumbs/breadcrumbs.component';
import {CopyrightComponent} from './components/copyright/copyright.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {WrapperPage} from './pages/wrapper-page/wrapper.page';
import {RouterModule} from "@angular/router";
import {ChangePlateBorderDirective} from './derictives/change-plate-border.directive';
import {LoginPage} from './pages/login-page/login.page';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { SpinnerComponent } from './components/spinner/spinner.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    UserMenuComponent,
    BreadcrumbsComponent,
    CopyrightComponent,
    NotFoundComponent,
    WrapperPage,
    ChangePlateBorderDirective,
    WrapperPage,
    LoginPage,
    SpinnerComponent,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    WrapperPage,
    ChangePlateBorderDirective,
    SpinnerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class SharedModule {
}
