import { Component, EventEmitter, Output, ViewEncapsulation, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ThemeService } from './theme.service';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, MatSelectModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, NgClass],
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @Output() toggleSideContentVisibility = new EventEmitter<void>();
  themeService: ThemeService = inject(ThemeService);
  themes!: string[];
  theme!: string;

  panelColor = new FormControl(this.themeService.themes[0]);

  ngOnInit() {
    this.themes = this.themeService.themes;
    this.themeService.theme.subscribe(next => this.theme = next);
  }

  onSelect(event: MatSelectChange) {
    this.themeService.setTheme(event.value);
  }
}