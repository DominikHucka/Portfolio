import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FunctionDataService } from '../../../services/function-data.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {

  function = inject(FunctionDataService);
  
}
