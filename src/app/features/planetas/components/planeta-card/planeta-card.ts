import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { LucideImageOff } from '@lucide/angular';
import { Planeta } from '../../models/planeta.model';

@Component({
  selector: 'app-planeta-card',
  imports: [LucideImageOff],
  templateUrl: './planeta-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetaCard {
  readonly planeta = input.required<Planeta>();
  protected readonly imagenFallo = signal(false);
}
