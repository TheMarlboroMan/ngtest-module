import {trigger, state, style, animate, transition, AnimationEntryMetadata} from '@angular/core';

export const HoverItem:AnimationEntryMetadata=trigger('hoveritem', [
	state('hovered', style({backgroundColor: '#c55'})),
	transition('hovered <=> *', animate('0.3s ease')),
]);

export const ItemLeave:AnimationEntryMetadata=trigger('getoutitem', [
	state('present', style({transform: 'translateX(0)'})),
	transition('void => *', [
		style({transform: 'translateX(-100%) scale(2)'}),
		animate('0.5s ease')
	]),
	transition('* => void', [
		style({color:'#fff'}),
		animate('0.5s ease', style({transform: 'translateX(100%)'}))
	])
]);

export const HoverItemFont:AnimationEntryMetadata=trigger('hoveritemfont', [
	state('hovered', style({fontSize: '1.2em'})),
	state('unhovered', style({fontSize: '1em'})),
	transition('hovered <=> unhovered', animate('0.3s ease'))
]);
