import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ManagerGuardService } from './auth/auth-guard.service';

const routes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }
        ],
        canActivate: [ManagerGuardService]
    },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
