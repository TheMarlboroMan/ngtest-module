import {trigger, state, style, animate, transition, AnimationEntryMetadata} from '@angular/core';

export const ItemHover:AnimationEntryMetadata=trigger('hoveritem', [
	state('hovered', style({backgroundColor: '#c55'})),
	transition('hovered <=> *', animate('0.3s ease'))
]);

export const DanceAnimations:AnimationEntryMetadata=trigger('additem', [

	state('*', style({opacity: 1})),
	transition(':enter', [
		style({opacity: 0}),
		animate('0.3s ease')
	])
]);
