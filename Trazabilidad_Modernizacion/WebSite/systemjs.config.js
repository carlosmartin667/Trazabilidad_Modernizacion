/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        defaultJSExtensions: true,
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/router/upgrade': 'npm:@angular/router/bundles/router-upgrade.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
            '@angular/upgrade/static': 'npm:@angular/upgrade/bundles/upgrade-static.umd.js',
            'ng2-bootstrap-modal': 'npm:ng2-bootstrap-modal',
            // other libraries
            'rxjs': 'npm:rxjs',
            'rxjs/operators': 'npm:rxjs/operators/index.js',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',

        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js', defaultExtension: 'js'
            },

            testComponent: {
                main: '../app/app.main.js', defaultExtension: 'js'
            },
            consultas: {
                main: '../app/consultas/consultas.main.js', defaultExtension: 'js'
            },
            detallePlastico: {
                main: '../app/detallePlastico/detallePlastico.main.js', defaultExtension: 'js'
            },
            detalleTarjeta: {
                main: '../app/detalleTarjeta/detalleTarjeta.main.js', defaultExtension: 'js'
            },
            consultasPlasticos: {
                main: '../app/consultasPlasticos/consultasPlasticos.main.js', defaultExtension: 'js'
            },

            seguimiento: {
                main: '../app/seguimiento/seguimiento.main.js', defaultExtension: 'js'
            },
            'ng2-bootstrap-modal': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            rxjs: {
                main: '/bundles/rxjs.umd.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);