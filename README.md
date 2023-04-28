# CLI commands

```bash

# Global help
$ npx ng --help
$ npx ng generate --help
$ npx ng generate component --help
$ npx ng generate service --help
# ...
$ npx ng test --help
$ npx ng build --help
$ npx ng serve --help
$ npx ng config --help
# ... 

# Angular version
$ npx ng version

# Create a new project
$ npx ng new myappname
# Force interactive prompts
$ npx ng new myappname --interactive
# Disable interactive, give values directly
$ npx ng new myappname --routing true --style scss

# Generation help
# See generation help to see all avaiable generators
$ npx ng generate --help

# See what generate will do, without creating the files
$ npx ng generate component mycomponent --dry-run

# Auto-export generated elements in the module they're declared
$ npx ng generate component mycomponent --export

# Generate a service
$ npx ng generate service path/to/service
# Generate a service in its own folder
$ npx ng generate service path/to/service --flat false

# Generate a module
$ npx ng generate module path/to/module
# Generate a lazy loaded module
$ npx ng generate module path/to/module --route my-route --module app.module

# Generate and configure environments
$ npx ng generate environments

# Pipeline commands

# Install dependencies (run everytime you clone a repository)
$ npm install

# Install a library that have shcematics
# (See the library documentation to see if they support ng add)
$ npx ng add @angular/material

# Serve the application locally (DO NOT USE AS PRODUCTION SERVER)
$ npx ng serve
# Build the application (files go into dist/appname)
$ npx ng build
# Change the build configuration
# When using environments, by default "production" and "development" are created
# ng serve uses development, ng build uses production
$ npx ng serve --configuration production
$ npx ng build --configuration development

# Run tests
$ npx ng test
# On CI/CD pipelines, run tests once
$ npx ng test --watch false
# Run with code coverage
# Result will be in "coverage" folder
npx ng test --code-coverage
```