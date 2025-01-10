import {
  Directive,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appRunAway]',
  standalone: true,
})
export class RunAwayDirective {
  // Начальные координаты кнопки
  @HostBinding('style.left.px') left = 200;
  @HostBinding('style.top.px') top = 100;

  // Абсолютное позиционирование, чтобы двигать кнопку
  @HostBinding('style.position') position = 'absolute';

  // Плавная анимация изменения свойств left и top
  @HostBinding('style.transition') transition = 'left 0.5s ease, top 0.5s ease';

  /**
   * При наведении меняем координаты на случайные —
   * сработает transition, и движение будет плавным.
   */
  @HostListener('mouseover', ['$event'])
  onMouseOver() {
    // Задайте нужные вам размеры области "побега"
    const maxX = 800;
    const maxY = 600;

    this.left = Math.floor(Math.random() * maxX);
    this.top = Math.floor(Math.random() * maxY);
  }
}
