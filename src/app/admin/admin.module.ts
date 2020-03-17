import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';

import {CreatePageComponent} from './create-page/create-page.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {HttpClientModule} from '@angular/common/http';

import {PostsService} from './shared/services/posts.service';
import { PostComponent } from './shared/components/post/post.component';


const routes: Routes = [
  { path: '', component: AdminLayoutComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: '/admin/dashboard' },
      { path: 'create', component: CreatePageComponent },
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'edit/:id', component: EditPageComponent },
      { path: 'login', component: LoginPageComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardPageComponent,
    CreatePageComponent,
    EditPageComponent,
    LoginPageComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [PostsService],
  exports: [RouterModule]
})
export class AdminModule { }
