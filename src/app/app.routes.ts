import { Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { LegalNoticeComponent } from './components/overlay/legal-notice/legal-notice.component';
import { MenuComponent } from './components/overlay/menu/menu.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full' ,component: MainContentComponent, data: { animation: 'mainPage' } },
    { path: 'legal-notice', component: LegalNoticeComponent },
    { path: 'menu', pathMatch: 'full' ,component: MenuComponent, data: { animation: 'menuPage' } },
];
