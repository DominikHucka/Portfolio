import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {
  isHovered = false;
  showOverlay = [false, false];
  isMobile = false;


  constructor(private breakpointObserver: BreakpointObserver) {}


  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.breakpointObserver.observe([
        Breakpoints.Handset,
        Breakpoints.HandsetLandscape,
      ]).subscribe(result => {
        this.isMobile = result.matches;
        if (this.isMobile) {
          AOS.init();  
        } else {
          AOS.init();
        }
      })
    }
  }


  hoverEffect(hovered: boolean) {
    this.isHovered = hovered;
  }
}
