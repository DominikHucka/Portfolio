import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FunctionDataService } from '../../../services/function-data.service';

@Component({
  selector: 'app-succsess',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './succsess.component.html',
  styleUrl: './succsess.component.scss'
})
export class SuccsessComponent {

  function = inject(FunctionDataService); 
}
