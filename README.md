Domain-Driven Design of API Practice

# Overview
This project is a practice of Domain-Driven Design (DDD) in the context of an API.

# Setup
## Requirements
- Node.js > v20
- yarn 1.x

## Project
### Compilation
This project uses ESBuild to compile the TypeScript code. It uses a plugin to type-check the code in parallel with compiling it for the nodemon dev server. The production build uses `tsc` to type-check the code in parallel with ESBuild.

### Linting
This project uses ESLint to lint the code and Prettier to format the code.

## Instructions
* `yarn` to install dependencies
* `yarn build` to build the production version
* `yarn start` to start the production build
* `yarn dev` to start the development server
