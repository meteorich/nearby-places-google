// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by nearby-places-google.js.
import { name as packageName } from "meteor/meteorich:nearby-places-google";

// Write your tests here!
// Here is an example.
Tinytest.add('nearby-places-google - example', function (test) {
  test.equal(packageName, "nearby-places-google");
});
