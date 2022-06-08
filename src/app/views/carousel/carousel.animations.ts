import { style, animate, animation } from '@angular/animations';

export enum CarrouselAnimation {
  Fade = 'fade',
}

export const fadeIn = animation([
  style({ opacticy: 0 }),
  animate('{{time}} ease-in-out', style({ opacity: 1 })),
]);

export const fadeOut = animation([
  animate('{{time}} ease-in-out', style({ opacity: 0 })),
]);