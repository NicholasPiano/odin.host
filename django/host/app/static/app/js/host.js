/*

Host.js

This script is meant to be the beginning of the interaction between a user and the registry. From here, the app structure will be requested from the registry using a registry URL and an app UUID.

What does a simplified version of this look like?
1. Each app is purely static and only creates components in a tree
2. No states or actions

*/

(function () {
	// 1. contact registry server using credentials in the hook element
	Core.registry.contact().then(function () {
		// 2. 

	});
})()