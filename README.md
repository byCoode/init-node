# The byCoode's Node.js Starter Pack

Start a Node.js project without hustles providing:

- The [@bycoode/eslint-config-byc](https://www.npmjs.com/package/@bycoode/eslint-config-byc) package for code quality;
- The [JSDoc](https://www.npmjs.com/package/jsdoc) package to provide type checking and documentation.

## How to Use

First of all, install the dependencies

```shell
pnpm i
```

Then, create your source code folder and the relative entry file (example: ```src/main.js```).

```text
root/
├─ src/
│  ├─ main.js
```

Finally update the ```main``` field in the [package.json](package.json) with your entry file

```json
{
  "main": "src/main.js"
}
```

That's All.
