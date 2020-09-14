# A Multi-Framework Monorepo

This [Monorepo](./ReadAboutMonoRepo.md) will serve a few purposes.

- Each root module will correspond to a single [Web API](https://developer.mozilla.org/en-US/docs/Web/API)

- Each _Web API_ module will be a [Higher Order Component](https://en.wikipedia.org/wiki/Higher-order_programming) which implements the [Proxy Pattern](http://www.blackwasp.co.uk/Proxy.aspx)

- Each module which calls a Proxy command will have an optional ability to create side effects 
          - logging
          - auditing
          - ...tbd

- Finally, components will be created in vanilla javascript modules as well as the following frameworks:
    - [For MVP]:`
      - `.mjs`
      - `react`
      - `vue`
      - `svelte`

- (Eventually) Compile with [Rollup](https://rollupjs.org/)
  - Includes many [actions](https://rollupjs.org/guide/en/#using-untranspiled-config-files)
  - Allows for [Custom Transforms](https://rollupjs.org/guide/en/#transformers)
  - [Other](https://github.com/rollup/awesome)


---
## Build Process
###### (Subject to change per project)
#### on init of project
- install any packages that are known to be used in _> 1_ modlues/components in `/systems/dq_universals/globals`
  - Put _**NOTHING**_ in `devDependencies`
- create initial shared _node\_modules_ directory
  - `$ cd <PROJECT_ROOT> && yarn`
- validate and install all dependencies
  - `$ yarn lerna bootstrap`

#### on init of each component
- easiest to duplicate an exisiting module
  - so... duplicate an existing module
- Update `<PROJECT_ROOT>/lerna.json` (if needed)
- Update _workspaces_ field within `<PROJECT_ROOT>/package.json` (if needed)
- ensure per project `configs` directory include all needed resources
- ensure per project `exos` symlink points to `<PROJECT_ROOT>/exos/task`
- compile new dependency
  - Update _compile_ script within `/package.json` (if needed)
  - `$ lerna run compile`
- ensure new dependency is added as a dependency to `<PROJECT_ROOT>/systems/dq_universals/singularity/package.json`
- add module to shared _node\_modules_:
  - `$ cd <PROJECT_ROOT> && yarn`
- validate new component and install all dependencies
  - `$ yarn lerna bootstrap`

#### publish
- `$ yarn publish-packages`
  - _NOTE_: Update the `package.json` _private_ field to publish to npm

---

## Implementation Information

- The end result will allow for easier implementation of _microfrontends_.
  - [If needed](https://www.angulararchitects.io/aktuelles/a-software-architects-approach-towards/)
  - More information & best practices:
    - [Micro-Frontends](https://micro-frontends.org/)
      - [Even More](https://micro-frontends.org/#additional-resources)
      - [Techniques](https://www.thoughtworks.com/radar/techniques/micro-frontends)
      - [Martin Fowler](https://martinfowler.com/articles/micro-frontends.html)
    - [Awesome Microfrontends](https://github.com/ChristianUlbrich/awesome-microfrontends)
    - [custom elements everywhere](https://custom-elements-everywhere.com/)
- Resources:
  - [Mutation Observer](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
  - [Open Components](https://opencomponents.github.io/)
  - [Component Model Use Cases](https://www.w3.org/2008/webapps/wiki/Component_Model_Use_Cases)
  - [Overview Of Web Components](https://blogs.windows.com/msedgedev/2015/07/14/bringing-componentization-to-the-web-an-overview-of-web-components/)
- Frameworks:
  - [Lit Elements](https://lit-element.polymer-project.org/) <- HOC to create Custom Web Components?
  - [Single SPA](https://single-spa.js.org/)
  - [Nut](https://github.com/nut-project/nut)
  - [Podium](https://podium-lib.io/)
  - [Piral](https://piral.io/)