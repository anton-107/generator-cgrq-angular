define([
    'angular',
    'ui.bootstrap',
    'ui.router',
    'ui.utils'
    /* Add links to app's submodules above */
], function (angular) {
    'use strict';

    angular.module('<%= _.camelize(appname) %>', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

    angular.module('<%= _.camelize(appname) %>').run(function($rootScope) {

        $rootScope.safeApply = function(fn) {
            var phase = $rootScope.$$phase;
            if (phase === '$apply' || phase === '$digest') {
                if (fn && (typeof(fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };

    });

    angular.bootstrap(document, ['<%= _.camelize(appname) %>']);

});