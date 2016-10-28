# React Start Kit
This is a project of REACT base start kit.

## Develop

We use node.js to build our develop environment. Our code depend on following project:

* Node.js(NPM)
* React
* Webpack

Start develop environment with following step.

1. Install dependencies.
```shell
$ npm install
```

2. Start webpack to build
```shell
$ npm run build
```

3. Start webpack in develop environment
```shell
$ npm run dev
```

4. Visit in browser at `http://localhost:8080/`.

## Depoly

Deploy static files with following step.

1. Build static files.
```shell
$ npm run deploy
```

2. Find static files in `root/dist/`.

## Version

Version is built in this format: vx.y[.z]

x: API version changed, tech stack changed.  
y: New feature/api introduced, Code architecture changed.  
z: bug fixed, small feature/improvment.

## LICENSE

Copyright 2015-2016 CLEVERIOUS(@sekaiamber)

Released under the MIT and GPL (version 2 or later) Licenses.
