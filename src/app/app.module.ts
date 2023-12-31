import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { MatIconModule } from '@angular/material/icon';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { RouterModule } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { InventorrySatutsComponent } from './components/overview/inventorry-satuts/inventorry-satuts.component';
import { ProductComponent } from './components/product/product.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CustomerInsightsComponent } from './components/customer-insights/customer-insights.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { ReportingComponent } from './components/reporting/reporting.component';
import { SettingsComponent } from './components/settings/settings.component';
import { InventorryManagementComponent } from './components/product/inventorry-management/inventorry-management.component';
import { ProductPerformanceComponent } from './components/product/product-performance/product-performance.component';
import { OrderProcessingComponent } from './components/orders/order-processing/order-processing.component';
import { SegmentationComponent } from './components/customer-insights/segmentation/segmentation.component';
import { SuppliesListComponent } from './components/suppliers/supplies-list/supplies-list.component';
import { SuppliesManagementComponent } from './components/suppliers/supplies-management/supplies-management.component';
import { AdminsListComponent } from './components/user-management/admins-list/admins-list.component';
import { ClientReportsComponent } from './components/reporting/client-reports/client-reports.component';
import { AdminReportsComponent } from './components/reporting/admin-reports/admin-reports.component';
import { AdminsManagementComponent } from './components/user-management/admins-management/admins-management.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { authGuardGuard } from './guard/auth-guard.guard';
import { NgxChartsModule } from '@swimlane/ngx-charts';




@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    SideNavbarComponent,
    OverviewComponent,
    InventorrySatutsComponent,
    ProductComponent,
    OrdersComponent,
    CustomerInsightsComponent,
    SuppliersComponent,
    UserManagementComponent,
    ReportingComponent,
    SettingsComponent,
    InventorryManagementComponent,
    ProductPerformanceComponent,
    OrderProcessingComponent,
    SegmentationComponent,
    SuppliesListComponent,
    SuppliesManagementComponent,
    AdminsListComponent,
    ClientReportsComponent,
    AdminReportsComponent,
    AdminsManagementComponent,
    NotfoundComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    RouterModule,
    MatIconModule,
    NgxChartsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
