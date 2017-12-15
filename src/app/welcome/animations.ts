import {animate, AnimationEntryMetadata, state, style, transition, trigger} from '@angular/core';

export const WelcomeAnimation: AnimationEntryMetadata=trigger('animationcomponenttrigger', [
	state('*', style({opacity: 1, transform: 'translateX(0)'})),
	transition(':enter', [
		style({opacity: 0,transform: 'translateX(-100%);'}),
		animate('0.3s ease-in')]),
	transition(':leave', [
		animate(
			'0.5s ease-out', 
			style({opacity: 0, transform: 'translateX(50%)'}))
		])
]);
