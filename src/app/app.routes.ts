import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';

export const routes: Routes = [
    { path: '', redirectTo: 'rewards', pathMatch: 'full' },
    { path: 'rewards', component: ContentComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];