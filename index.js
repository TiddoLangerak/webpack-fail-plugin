module.exports = function() {
	//If we're in watch mode or running the dev server then it doesn't make sense to enable this plugin.
	//Most likely the error has already been fixed before the process is ended.
	//TODO: find a proper way to detect watch mode. Sniffing arguments isn't exactly ideal.
	var watchMode = process.argv.indexOf('--watch') !== -1 || process.argv.indexOf('-w') !== -1;
	var devServer = Boolean(process.argv[1].match(/webpack-dev-server$/));
	if (watchMode || devServer) {
		return;
	}
	var hasError = false;
	process.on('beforeExit', function() {
		if (hasError) {
			process.exit(1);
		}
	});
	this.plugin("done", function(stats) {
		if (stats.compilation.errors && stats.compilation.errors.length) {
			hasError = true;
		}
	});
};
