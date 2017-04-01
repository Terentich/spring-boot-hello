var angularVersion = '4.0.1';

System.config({
    baseUrl: '/',
    paths: {
        'unpkg:*': 'https://unpkg.com/*',
        'npm:*': 'https://www.npmjs.com/package/*'
    }
});

System.config({
    transpiler: 'typescript',
    typescriptOptions: {emitDecoratorMetadata: true},

    meta: {
        '*': {
            deps: ['zone.js', 'reflect-metadata']
        }
    }
});

System.config({
    packageConfigPaths: [
        "unpkg:@*/*/package.json"
    ],

    map: {
        // Angular
        '@angular/core': 'unpkg:@angular/core@' + angularVersion,
        '@angular/compiler': 'unpkg:@angular/compiler@' + angularVersion,
        '@angular/common': 'unpkg:@angular/common@' + angularVersion,
        '@angular/forms': 'unpkg:@angular/forms@' + angularVersion,
        '@angular/platform-browser': 'unpkg:@angular/platform-browser@' + angularVersion,
        '@angular/platform-browser-dynamic': 'unpkg:@angular/platform-browser-dynamic@' + angularVersion,

        '@angular/http': 'unpkg:@angular/http@' + angularVersion,
        '@angular/router': 'unpkg:@angular/router@' + angularVersion,
        'immutable': 'unpkg:immutable@3.8.1',
        'rxjs': 'unpkg:rxjs@5.1.0',
        'zone.js': 'unpkg:zone.js@0.8.4',
        'reflect-metadata': 'unpkg:reflect-metadata@0.1.3',
        "crypto": "@empty",

        // Angular Material
        '@angular/animations': 'unpkg:@angular/animations@' + angularVersion + '/bundles/animations.umd.js',
        '@angular/animations/browser': 'unpkg:@angular/animations@' + angularVersion + '/bundles/animations-browser.umd.js',
        '@angular/platform-browser/animations': 'unpkg:@angular/platform-browser@' + angularVersion + '/bundles/platform-browser-animations.umd.js',

        'hammerjs': 'unpkg:hammerjs@2.0.8',
        '@angular/material': 'unpkg:@angular/material@2.0.0-beta.2'
    },

    packages: {
        'app': {
            defaultExtension: 'ts',
            main: './main.ts'
        }
    }
});