#ngtest-module

branches:

v1: Pretty simple so far: the module and main component, a user data component to display user data, a service to grab such data an a pipe to mask the email. No feature modules as such.
v2: A feature module for the user-data is created.
v3: Added a second service to update the user data, still in the user-data module, reviewing easy template driven stuff. Also communicating two components with a contrived mechanism...
v4: Change the contrived mechanism to a service with observes: much smaller.
v5: Added the router and a new feature module "Welcome".
v6: Added our first lazy module: "about".
v7: A service in the lazy module using the "providers" array, preventing use in any other component outside of the module. Using services and components from a readily loaded module. Check the welcome.module.ts to see how trying to use a service from a lazily loaded module fails!!!
v8: Demonstrating different instances of the same service. Removed all contraptions added before.
v9: The very same functionality but with a shared module.
v10: Functionality breaks when we use forRoot and register the service. We add a second service of which a single instance is needed... As a result, the original service becomes a singleton too.
v11: We try to fix the previous problem, but end up with two separate services :D.
master: The problem is fixed by rethinking the design (obviously). Just so I leave note of it: the VisitCounterService now has a map of string:number to count visit to different routes, provided by the router injected in each component.
master-plus:
	- The welcome module is lazily loaded, for fun and practice.
	- A new "dance" module is done. One component is exported and the other is not. The exported component is shown in user-data.
		- This is done to shed a bit of light on the difference between "exports" (redeclares to anyone importing) and "declares" (declares these pieces belong in this module).
	- A new "core" module is done. This has "include" guards so it shall be loaded only once. The service CurrentUserService (manipulated in AppComponent) is provided through "providers" but since we can't import the module twice, everybody shares the instance.
	- A "UselessService" is added through "providers" to the "shared" module and subjected to some manipulation in AppComponent. Lazy loaded modules do not display the alterations.
	- We deviate from "do not add services to SharedModule" on purpose, of course.
master-plus-v2:
	- Reorganising files so everything is under app/
	- Using the CoreModule to provide only services, moving the services from SharedModule (thus rendering all previous experiments moot).
	- Using the SharedModule to provide common components, directives, and pipes, including exporting angular ones, reducing js imports.
master-plus-v3:
	- First foray into animations... entry of "Welcome" is animated. Leave does not work unless you change to another animated component, of which there is currently none.
	- Added a list of elements into the dance components. Animated according to state, depicting possibilities with default css properties and explicit animation states.
master-plus-v4:
	- Added another animated element so you can switch between welcome and dance and experience animations.
	- First forays into nested routing... Seems to work okay.
	- Fake service which simulates network latency.
	- Add authorization, protecting the new nested routing thing.

- TODO: Add guard against invalid ids in the list component (the guitar thing).
- TODO: Try and get delays to work with promises?

I would do a master-plus-vX with things like injectors and useValue, non class services (dependencies) but I can't for the life of me figure out what kind of problem are these two supposed to solve in such an opinionated framework.

- Interesting note about the shared module
	- You can import it (js) until you are bored, but nothing will be visible in any component unless you import (ng) the shared module into the client module itself.

- A few notes on creating a new module.
	- Create the module file (dance/dance.module.ts).
		- Import NgModule from core, but also CommonModule from common (js)
		- Import components that will be there (js)
		- import (angular) CommonModule.
		- declare (angular) components.
		- If you are going to use components of this module OUTSIDE the module, export them (angular).
	- Create the component files and template files.
	- Import (both js and angular) the module in app.module.ts

- A few notes on lazy loading an existing module...
	- Create the routing file of the module
		- import RouterModule and Router (js)
		- import the needed components (js)
		- create the paths, leave the default blank!
		- export a declared object of RouterModule.forChild (js)
	- Import this file in the file of the module, add it to both js's imports and the module imports.
	- Remove the route from the app routing: delete the js imports refering to the module and use loadChildren in the route. Paths in loadChildren are relative.
	- Remove all imports referring to the module in app.module, as they are redundant (both js and angular).

- A few notes on animations...
	- Create a trigger phrase.
	- Each trigger phrase can work with a variety of "state", which are "end styles", and you should define.
	- Define as much "transition" as you need between states.
	- You can define a style inside a transition's "animate", so the elements adopts that style as it animates. That's specially handy for leave animations, as there's no "void" style.
	- This thing... 
		transition('void => *', [style({transform: 'translateX(-100%) scale(2)'}), animate('0.5s ease')]),
			reads: when I "enter" (void => *, or :enter), apply me the style (translate and scale) and then animate me to the target state (*) in 0.5 seconds, with ease.
	- This other thing
		transition('* => void', [style({color:'#fff'}), animate('0.5s ease', style({transform: 'translateX(100%)'}))])
			reades: When I exit, apply me the style with white color, then animate me to the translateX style in 0.5s.
	- Animations are pinned to elements through templating. [@triggername]="statename".
	- The trick on pinning :enter or :leave animations is to combine the trigger name with the state, like in [@getoutitem]="present".

export const HoverItem:AnimationEntryMetadata=trigger('hoveritem', [
	state('hovered', style({backgroundColor: '#c55'})),
	transition('hovered <=> *', animate('0.3s ease')),
]);
