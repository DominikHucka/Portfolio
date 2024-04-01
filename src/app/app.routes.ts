import { Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { LegalNoticeComponent } from './components/overlay/legal-notice/legal-notice.component';
import { MenuComponent } from './components/overlay/menu/menu.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'legal-notice', component: LegalNoticeComponent },
    { path: 'menu', component: MenuComponent },
];
