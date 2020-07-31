# Thanks [@Trabe](https://github.com/trabe)!
It all started with [this](https://medium.com/trabe/monorepo-setup-with-lerna-and-yarn-workspaces-5d747d7c0e91) article

Some updates have been made to bring it inline with DownQuark's build and develop process.
Resulting in the final file structure resembling this:
```
├── node_modules
│
├── lerna.json
├── package.json
│
├── exos
│   ├── phase (coming soon)
│   ├── publish
│   └── task
├── systems
    ├── _universals
    │   ├── globals
    │   │   ├── configs
    │   │   │   ├── babel.config.js
    │   │   │   ├── eslint.config.js
    │   │   │   └── spec.config.js
    │   │   ├── spec
    │   │   │   └── spec.utils.js
    │   │   └── src
    │   └── singularity
    │       └── package.json
    ├── dq-module1
    │   ├── configs
    │   │   ├── babel.config.js
    │   │   ├── eslint.config.js
    │   │   └── spec.config.js
    │   ├── spec
    │   ├── src
    │   ├── package.json
    │   └── exos -> ../../scripts/exos
    ├── dq-module2
    │   └── ...
    ├── ...
```

---
Yarn handles the dependencies.

Lerna handles tasks that affect multiple packages (compile/test/lint all modules).

One folder per package inside systems.

All packages share the same structure.

Each package defines only its runtime dependencies.

All the tooling and devDependencies are shared and live in its own package.
Notice that we will never define a devDependency to this package. We are abusing the workspaces here. Yarn will expand this packages’ dependencies in the root node_modules where other packages and tasks can find them.

Each package contains the required configuration files for the tooling. Each file extends a common base configuration (we use Babel, any multitude of testing languages and ESlint to compile, test and lint the code).

Each package symlinks a common task script that defines how the different tools must be invoked.

There is a “hub” package (_universals/singularity). It depends on all the other packages and allows easy usage of the framework (a single dependency).

Publication is handled by a custom publish script that will be used by the CI environment.

---
We setup the workspaces using the workspaces entry in package.json.

We define tasks to clean/compile/test/lint all packages using Lerna.

To update the version number we use the lerna publish command. In our scenario we do not allow Lerna to add commits or tags to the repo. We also avoid package publication.

There is a check-packages task that will be used in the CI environment.

There is also a publish-packages task for the CI. We will detect version number changes and publish the packages if needed.
