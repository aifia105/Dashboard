import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { CustomerInsightsComponent } from './components/customer-insights/customer-insights.component';
import { CustomerProfilesComponent } from './components/customer-insights/customer-profiles/customer-profiles.component';
import { SegmentationComponent } from './components/customer-insights/segmentation/segmentation.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderListComponent } from './components/orders/order-list/order-list.component';
import { OrderProcessingComponent } from './components/orders/order-processing/order-processing.component';
import { OrderTrackingComponent } from './components/orders/order-tracking/order-tracking.component';
import { OverviewComponent } from './components/overview/overview.component';
import { DataSalesComponent } from './components/overview/data-sales/data-sales.component';
import { InventorrySatutsComponent } from './components/overview/inventorry-satuts/inventorry-satuts.component';
import { VisitorTrafficComponent } from './components/overview/visitor-traffic/visitor-traffic.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductComponent } from './components/product/product.component';
import { ProductCatalogComponent } from './components/product/product-catalog/product-catalog.component';
import { InventorryManagementComponent } from './components/product/inventorry-management/inventorry-management.component';
import { ProductPerformanceComponent } from './components/product/product-performance/product-performance.component';
import { ReportingComponent } from './components/reporting/reporting.component';
import { AdminReportsComponent } from './components/reporting/admin-reports/admin-reports.component';
import { ClientReportsComponent } from './components/reporting/client-reports/client-reports.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { SuppliesListComponent } from './components/suppliers/supplies-list/supplies-list.component';
import { SuppliesManagementComponent } from './components/suppliers/supplies-management/supplies-management.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { AdminsListComponent } from './components/user-management/admins-list/admins-list.component';
import { AdminsManagementComponent } from './components/user-management/admins-management/admins-management.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SettingsComponent } from './components/settings/settings.component';


const routes: Routes = [

  {path: "customer-insights", data: {breadcrumb:"CustomerInsights"} , component: CustomerInsightsComponent , children: [
    {path: "customer-profiles", data: {breadcrumb:"CustomerProfiles"} , component: CustomerProfilesComponent},
    {path: "segmentation", data: {breadcrumb:"Segmentation"} , component: SegmentationComponent}
  ]},

  {path: "orders", data: {breadcrumb:"Orders"} , component: OrdersComponent , children: [
    {path: "orders-list", data: {breadcrumb:"OrderList"} , component: OrderListComponent},
    {path: "orders-processing", data: {breadcrumb:"OrderProcessing"} , component: OrderProcessingComponent},
    {path: "orders-tracking", data: {breadcrumb:"OrderTracking"} , component: OrderTrackingComponent}
  ]},

  {path: "overview", data: {breadcrumb:"Orders"} , component: OverviewComponent , children: [
    {path: "data-sales", data: {breadcrumb:"DataSales"} , component: DataSalesComponent},
    {path: "inventorry-satuts", data: {breadcrumb:"InventorrySatuts"} , component: InventorrySatutsComponent},
    {path: "visitor-traffic", data: {breadcrumb:"VisitorTraffic"} , component: VisitorTrafficComponent}
  ]},

  {path: "product", data: {breadcrumb:"Product"} , component: ProductComponent , children: [
    {path: "product-catalog", data: {breadcrumb:"ProductCatalog"} , component: ProductCatalogComponent},
    {path: "inventorry-management", data: {breadcrumb:"InventorryManagement"} , component: InventorryManagementComponent},
    {path: "product-performance", data: {breadcrumb:"ProductPerformance"} , component: ProductPerformanceComponent}
  ]},

  {path: "reporting", data: {breadcrumb:"Reporting"} , component: ReportingComponent , children: [
    {path: "admin-reports", data: {breadcrumb:"AdminReports"} , component: AdminReportsComponent},
    {path: "client-reports", data: {breadcrumb:"ClientReports"} , component: ClientReportsComponent}
  ]},

  {path: "supplier", data: {breadcrumb:"Suppliers"} , component: SuppliersComponent , children: [
    {path: "supplier-list", data: {breadcrumb:"SuppliesList"} , component: SuppliesListComponent},
    {path: "supplier-management", data: {breadcrumb:"SuppliesManagement"} , component: SuppliesManagementComponent}
  ]},

  {path: "user-management", data: {breadcrumb:"Suppliers"} , component: UserManagementComponent , children: [
    {path: "admins-list", data: {breadcrumb:"SuppliesList"} , component: AdminsListComponent},
    {path: "admins-management", data: {breadcrumb:"SuppliesManagement"} , component: AdminsManagementComponent}
  ]},

  {path: "notifications", data: {breadcrumb:"Notifications"} , component: NotificationsComponent },

  {path: "settings", data: {breadcrumb:"Settings"} , component: SettingsComponent },

  {path: "authentication", data: {breadcrumb:"Authentification"} , component: AuthentificationComponent },

  {path: '**', data: {breadcrumb:"Notfound"} , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
