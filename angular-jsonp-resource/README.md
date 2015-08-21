# AngularJS JSONP Call via $resource

This plunker demonstrates how to make a call to an external API using an Angular
$resource. I've used the USDA's NASS database, as it has a simple API, adequate
documentation, and they'll give you an API key right away just for asking.

The Angular $resource module provides higher-level services than $http, including
a built-in $promise structure. Take a look at app.js in this example to see how it
works. Note that I wasn't able to use the $resource's params object, as this particular
API seems to pay attention to the order of submitted parameters, and the params object
appears to randomize their order when submitted.

To use $resource, you'll need to inject ngResource into the app, and you'll
need to load the angular-resource.js script into the main page.

I hope this example is helpful,

Mikey