import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            { path: 'restaurant', loadChildren: './restaurant/restaurant.module#RestaurantModule' }
        ]
    },
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
