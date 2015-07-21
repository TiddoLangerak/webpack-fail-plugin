Webpack plugin that will make the process return status code 1 when it finishes with errors in single-run mode.

## Install
`npm install webpack-fail-plugin`

## Usage
```javascript
var failPlugin = require('webpack-fail-plugin');

module.exports = {
	//config
	plugins: [
		failPlugin
	]
}
```

Credits to [@happypoulp](https://github.com/happypoulp).

