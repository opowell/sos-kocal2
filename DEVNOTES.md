# Development notes

## Setup

1. Clone / download this repository.
2. Install dependencies

- `npm install`

3. Install standalone Vue devtools.

- `npm install --save-dev @vue/devtools`
- `npm install --save-dev "@vue/devtools"`

## Running

1. Run Vue devtools

- `vue-devtools.cmd`

2. Serve extension

- `npm run watch:dev`

Reload any previously open tabs that you want to test content scripts on.

## Deployment

1. Increase version number in `package.json` and `src/manifest.json`.
2. Compile the extension: `npm run build`
3. Zip it up: `npm run build-zip`
4. Commit to Github.
5. Update README.md download link.

## Initial setup

1. Install vue-kocal template.

- `https://github.com/Kocal/vue-web-extension`

2. Allow external vue-tools.

- Install `@vue/devtools`
- Modify webpack: `content_security_policy: "script-src 'self' 'unsafe-eval' http://localhost:8098; object-src 'self'"`

## Vuex

Vuex store has separate instances for:

- background.js
- options.js
- popup.js