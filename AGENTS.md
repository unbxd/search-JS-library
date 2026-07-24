# AGENTS.md

## What this repo does
`@unbxd-ui/vanilla-search-library` is a framework-free JavaScript UI SDK that renders Unbxd e-commerce search/category experiences (search box, product grid, facets, pagination, sort, banners, breadcrumbs, spellcheck/"did you mean", swatches) directly onto a merchant's storefront DOM. It wraps `@unbxd-ui/unbxd-search-core` (which handles API calls/state) and is distributed as a UMD bundle (`vanillaSearch.js`) consumed via `<script>` tag or npm by Unbxd customers integrating site search.

## Architecture
- `UnbxdSearch` (`src/index.js`) extends `UnbxdSearchCore` from the `@unbxd-ui/unbxd-search-core` package. The core package owns API calls, query state, and URL param logic; this repo owns **rendering and DOM binding** on top of that state.
- `src/core/` is the bootstrapping layer: `initialize.js` validates config and builds the layout, `setConfig.js`/`configSchema.js` merge and validate user-supplied options, `setMethods.js` attaches every module's public methods onto the `UnbxdSearch` prototype, `bindEvents.js` wires DOM event delegation, `reRender.js` re-renders widgets after each API response, `componentWrappers/` create the DOM containers for each widget.
- `src/modules/<feature>/` — one folder per UI widget (facets, pagination, products, sort, pageSize, productViewType, breadcrumbs, banners, didYouMean, swatches, searchResults, input, analytics). Each typically has a `set*.js` (attaches methods to the prototype), `render*.js` (DOM rendering), `actions.js` (event handlers), and sometimes `ui.js`/`*UI.js` (HTML template strings).
- `src/common/` holds shared `options.js` (the full default config object with default templates), `utils.js`, and `constants/` (CSS classes, test IDs, event names, action names, allowed separators).
- Rendering uses raw template strings + `dompurify` sanitization + manual `innerHTML` assignment — there is no virtual DOM or component framework.
- `webpack/` builds the bundle: `webpack.config.js` (dev server), `webpack.dev.build.js` (used by `npm test`, i.e. **build-only smoke test**, not unit tests), `webpack.prod.config.js` (minified UMD output to `public/dist/js|css`, plus gzip via `compression-webpack-plugin`).
- `demo/` is a static HTML page (`demo/index.html` + `demo/js/`) used to manually exercise the SDK against a demo Unbxd site during development.
- `docs/` + `index.md` + `_config.yml`/`_includes`/`_sass` form a Jekyll site (deployed to GitHub Pages by CI) documenting every config option and the changelog.
- `polyfill/` builds a separate `iePolyfill.js` bundle for legacy IE11 support (see README browser support matrix).

## Folder map
| Folder | Purpose |
|--------|---------|
| `src/core/` | Bootstrapping: config validation, layout creation, prototype method wiring, event binding |
| `src/core/componentWrappers/` | Creates/injects the DOM wrapper elements for each widget before rendering |
| `src/modules/<feature>/` | One folder per UI widget; `set*.js` = prototype methods, `render*.js` = DOM output, `*UI.js`/`ui.js` = HTML templates |
| `src/common/options.js` | Single source of truth for every default SDK config value and default templates |
| `src/common/constants/` | CSS class names, test IDs, event names, action names, separators used across modules |
| `polyfill/` | Standalone entry point bundled into `iePolyfill.js` for IE11 support |
| `webpack/` | Three webpack configs: dev server, dev build (`npm test`), production build |
| `public/dist/` | Build output (`js/`, `css/`) — generated, do not hand-edit |
| `demo/` | Static HTML/JS harness for manually testing the SDK in a browser |
| `docs/` + `index.md` + `_config.yml`/`_sass`/`_includes` | Jekyll documentation site published to GitHub Pages on push to `master` |
| `.github/workflows/main.yml` | CI: test → docs build/deploy (on `master`) → release (on `v*` tags): builds, uploads to S3, publishes to npm, posts to Slack |

## Key dependencies
- `@unbxd-ui/unbxd-search-core` — the base class this SDK extends; owns API/query/state logic. Version pinned exactly (`0.5.13`, no `^`), and the changelog cross-references core SDK versions per release — bump deliberately.
- `dompurify` — sanitizes all HTML strings before `innerHTML` insertion; any new template rendering code must go through it to avoid XSS.
- `element-dataset` — polyfill for `dataset` API, relevant to IE11 support path.
- Webpack 5 + Babel (`@babel/preset-env`, `@babel/preset-react` even though there's no React — used for JSX-like syntax support in templates, verify) + `sass`/`postcss`/`autoprefixer` for styling.
- `husky` + `lint-staged` — pre-commit hook runs `npm test` (a full webpack dev build, not unit tests) and `eslint`/`prettier` on staged `src/**` files.

## Environment and config
- No `.env` file in the repo; runtime configuration (site key, API key, search endpoint, all widget options) is passed by the *consumer* of the SDK as a JS object into the `UnbxdSearch` constructor — see `src/common/options.js` for every default and `docs/configurations/*.md` for documented options.
- CI-only secrets (not used by local dev): `CODECOV_TOKEN`, `NPM_TOKEN_JS_LIBRARY`, `AWS_GITHUB_OIDC_ROLE_ARN`, `AWS_DEFAULT_REGION`, `AWS_DISTRIBUTION_ID`, `PLATFORM_SLACK_WEBHOOK_URL` — set as GitHub Actions repo secrets, used only in `.github/workflows/main.yml` for release/publish/notify steps.

## Agent capabilities in this repo

### Autonomous (no confirmation needed):
- Read any file
- Write or edit files inside `src/`, `demo/`, `docs/`, `styles/`
- Run read-only commands: `npx eslint src`, `npx prettier --check .`, `ls`, `grep`/`rg`, `git status`, `git diff`, `git log`
- Run local builds for verification: `npm run build:dev`, `npm run start` (dev server)

### Always confirm before doing:
- Deleting any file or directory
- Running `npm run build` (production build) or `npm run upload-s3` (touches real S3/CDN paths)
- Pushing to remote or opening PRs
- Modifying `.github/workflows/`, `webpack/`, `package.json` (dependencies/scripts/version), `_config.yml`
- Any action that touches shared or production systems (npm publish, S3 upload, tag creation, Slack notifications)

## Human checkpoints
- Before changing any public API surface (methods exposed via `setMethods.js`/`componentWrappers`, config schema in `configSchema.js`, or defaults in `common/options.js`) — these are consumed by external merchant integrations and are effectively a public contract
- Before adding a new dependency to `package.json` or equivalent
- Before modifying CI/CD configuration (`.github/workflows/main.yml`)
- Before bumping the `@unbxd-ui/unbxd-search-core` version (cross-check changelog compatibility notes)
- Before editing anything under `public/dist/` directly (it's generated output, not source)

## Anti-patterns
- Do not hand-edit files in `public/dist/` — they are webpack build artifacts; edit `src/` and rebuild instead
- Do not insert HTML into the DOM without passing it through `dompurify` first, matching the existing pattern in render modules
- Do not assume `npm test` runs unit tests — it currently only runs `webpack --config ./webpack/webpack.dev.build.js` (a build/compile check).
- Do not bypass `configSchema.js`/`validateConfigs.js` when adding new config options — every new option needs a schema entry (datatype, `required`, `allowedOptions`, `customValidations`) so misconfigurations surface as console errors, per existing convention
- Do not introduce new UI templates that skip the `src/common/constants/` CSS class/test-ID constants in favor of hardcoded strings — module templates consistently reference these constants for consistency and testability
- Do not add framework dependencies (React, Vue, etc.) — this is intentionally a vanilla-JS, dependency-light DOM library
- Do not change the `main` field or UMD (`libraryTarget: "umd"`, `libraryExport: "default"`) output shape in `webpack.prod.config.js` without confirming — external consumers load this as a global/script-tag library

## Rules and Skills to create (owner checklist)
<!-- For YOU, the repo owner. Delete this section once Rules and Skills are in place. -->

### Cursor Rules — create in .cursor/rules/ as .mdc files
- [ ] Code style and formatting for this repo (Auto Attached: glob `src/**/*.js`)
- [ ] Module pattern conventions: `set*.js` prototype-attachment + `render*.js` DOM output + `*UI.js` templates (Auto Attached: glob `src/modules/**/*.js`)
- [ ] Security rules: sanitize all HTML via `dompurify` before `innerHTML`, no hardcoded API keys/secrets (Always Apply)
- [ ] Config schema rule: every new option in `common/options.js` must have a matching entry in `core/configSchema.js` (Auto Attached: glob `src/core/configSchema.js`, `src/common/options.js`)

### Skills — create in .claude/skills/ or .cursor/skills/ as .md files
- [ ] "Add a new config option" — update `common/options.js` default, `core/configSchema.js` validation, and relevant `docs/configurations/*.md`
- [ ] "Add a new UI widget/module" — scaffold `src/modules/<feature>/` with `set*.js`, `render*.js`, `ui.js`, wire into `setMethods.js` and `componentWrappers/`
- [ ] "Cut a release" — bump `package.json` version, update `docs/CHANGELOG.md`, tag `vX.Y.Z` to trigger the release workflow
