# mdbootstrap-test

## Description
This project demonstrates the incorrect work of mdbootstrap
after redefining SCSS color variables.

Used mdbootstrap v4.5.10 with bootstrap v4.1.3.

After redefining `$warning-color` and `$warning-color-dark` variables,
result `text-warning` CSS-class use 'warning-dark' color instead 'warning'.

## Installation of dependencies
Run `npm install`.

## Building
Run `npm run build` to build the project.
The build artifacts will be stored in the `dist/` directory.
