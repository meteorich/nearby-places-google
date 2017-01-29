// console.log('meteorich:nearby-places-google loaded');

if (Meteor.isClient) {

	Meteor.startup(function() {

		console.log('meteorich:nearby-places-google - loading google');
		

	});

}




// Variables exported by this module can be imported by other packages and
// applications. See nearby-places-google-tests.js for an example of importing.
export const name = 'nearby-places-google';
