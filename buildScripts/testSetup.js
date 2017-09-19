//This file isn'ttranspiled, so must useCommonJS andES5

//register babel to transpile before our tests run.
require('babel-register')();

//Disable webpack feature that Mocha doesn'tunderstand.
require.extensions['css'] = function() {};
