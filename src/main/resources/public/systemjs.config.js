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
    typescriptOptions: { emitDecoratorMetadata: true },

    meta: {
        '*': {
            deps: [ 'zone.js', 'reflect-metadata' ]
        }
    }
});

System.config({
    packageConfigPaths: [
        "unpkg:@*/*/package.json"
    ],

    map: {
        '@angular/core': 'unpkg:@angular/core@'+angularVersion,
        '@angular/compiler': 'unpkg:@angular/compiler@'+angularVersion,
        '@angular/common': 'unpkg:@angular/common@'+angularVersion,
        '@angular/platform-browser': 'unpkg:@angular/platform-browser@'+angularVersion,
        '@angular/platform-browser-dynamic': 'unpkg:@angular/platform-browser-dynamic@'+angularVersion,
        '@angular/http': 'unpkg:@angular/http@'+angularVersion,
        '@angular/router-deprecated': 'unpkg:@angular/router-deprecated@'+angularVersion,
        'immutable': 'unpkg:immutable@3.8.1',
        'rxjs': 'unpkg:rxjs@5.0.0-beta.12',
        'zone.js': 'unpkg:zone.js@0.6.25',
        'reflect-metadata': 'unpkg:reflect-metadata@0.1.3',
        "crypto": "@empty",

        // '@angular/material': 'unpkg:@angular/material',
        // '@angular/forms': 'unpkg:@angular/forms'
    },

    packages: {
        'app': {
            defaultExtension: 'ts',
            main: './main.ts'
        }
    }
});