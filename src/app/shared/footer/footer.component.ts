import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactFormComponent } from '../../components/main-content/contact-form/contact-form.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  isHovered = false;
  isLegalNoticeActive: boolean | undefined;
  isMenuActive: boolean | undefined;
  bottom = '0px';

  
  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isLegalNoticeActive = event.urlAfterRedirects === '/legal-notice';
      this.isMenuActive = event.urlAfterRedirects === '/menu';
    });
  }


  hoverEffect(hovered: boolean) {
    this.isHovered = hovered;
  }
}
