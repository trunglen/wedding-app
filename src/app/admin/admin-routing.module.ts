import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupervisorComponent } from './supervisor/supervisor.component';
import { ManagerComponent } from './manager/manager.component';
import { UserService } from '../xmodel/user.service';
import { SupervisorCreateComponent } from './supervisor/supervisor-create/supervisor-create.component';
import { SupervisorUpdateComponent } from './supervisor/supervisor-update/supervisor-update.component';
import { StudentComponent } from './student/student.component';
import { WeddingComponent } from './wedding/wedding.component';
import { WeddingService } from '../xmodel/wedding.service';
import { WeddingDetailComponent } from './wedding/wedding-detail/wedding-detail.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { SuperAdminLoadService, ManagerLoadService, SupervisorLoadService } from '../auth/auth-guard.service';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [

  {
    path: 'supervisor', loadChildren: './supervisor/supervisor.module#SupervisorModule', canLoad: [SuperAdminLoadService]
  },
  {
    path: 'student', loadChildren: './student/student.module#StudentModule', canLoad: [ManagerLoadService]
  },
  {
    path: 'wedding', loadChildren: './wedding/wedding.module#WeddingModule', canLoad: [ManagerLoadService]
  },
  {
    path: 'manager', loadChildren: './manager/manager.module#ManagerModule', canLoad: [SupervisorLoadService]
  },
  {
    path: 'setting', loadChildren: './setting/setting.module#SettingModule',  canLoad: [ManagerLoadService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
