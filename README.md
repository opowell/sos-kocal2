# Save or skip

Save pages you visit. Get recommendations based on your previous saves.

## Installation

1. Download <a href='https://github.com/opowell/saveorskip/raw/master/dist-zip/saveorskip-v1.0.6.zip'>extension</a>.
2. Extract zip file contents.
3. In Chrome, turn on Developer mode.
4. Open Extensions page.
5. Load unpacked --> select contents from step 2.

The extension should now be accessible from the top right of the browser (green icon).

## How to use

1. Visit a website you like.
2. Click the green icon.
3. Click "Save and go".

This saves the current link, searches for further recommendations, picks one and then sends you to it.

## Finding links

This extension has generic code for finding links on any webpage, however it also contains specialized code for finding links from particular sources. Sites with customized code are:

- reddit.com
- news.ycombinator.com
- youtube.com

## Development setup

1. Clone / download this repository.
2. Install dependencies

- `npm install`

3. Install standalone Vue devtools.

- `npm install --save-dev @vue/devtools`
- `npm install --save-dev "@vue/devtools"`

## Development running

1. Run Vue devtools

- `vue-devtools.cmd`

2. Serve extension

- `npm run watch:dev`

Reload any previously open tabs that you want to test content scripts on.

## Deployment

1. Compile the extension: `npm run build`
2. Zip it up: `npm run build-zip`
3. Commit to Github.
4. Update README.md download link.

## Initial development setup

1. Install vue-kocal template.

- `https://github.com/Kocal/vue-web-extension`

2. Allow external vue-tools.

- Install `@vue/devtools`
- Modify webpack: `content_security_policy: "script-src 'self' 'unsafe-eval' http://localhost:8098; object-src 'self'"`

## Development notes

Vuex store has separate instances for:

- background.js
- options.js
- popup.js
