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
