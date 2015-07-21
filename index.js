module.exports = function() {
	this.plugin("done", function(stats) {
		if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') === -1) {
			process.on('beforeExit', function() {
				process.exit(1);
			});
		}
	});
};
