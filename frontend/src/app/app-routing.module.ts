import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { QualificationComponent } from './components/qualification/qualification.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { HistorialComponent } from './components/historial/historial.component';
import { EditQualificationComponent } from './components/edit-qualification/edit-qualification.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'qualification', component: QualificationComponent, canActivate:[AuthGuard]},
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'pedido', component: PedidoComponent, canActivate:[AuthGuard]},
  { path: 'historial', component: HistorialComponent, canActivate:[AuthGuard]},
  { path: 'editQualification', component: EditQualificationComponent, canActivate:[AuthGuard]},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
