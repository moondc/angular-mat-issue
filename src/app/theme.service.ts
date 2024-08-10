import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public themes = ["dark-theme", "light-theme"];
  private themeSubject = new BehaviorSubject<string>(this.themes[0]);
  public theme = this.themeSubject.asObservable();

  public setTheme(theme: string) {
    this.themeSubject.next(theme);
  }
}
