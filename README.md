This plugin will make webpack return status code 1 when it has errors in single-run mode.

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

Credits to @happypoulp for figuring out most of the code.
