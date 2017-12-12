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
	- 

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
	- Remove the route from the app routing: delete the js imports refering to the module and use loadChildren in the route.
	- Remove all imports referring to the module in app.module, as they are redundant (both js and angular).
