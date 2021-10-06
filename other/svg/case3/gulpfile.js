const { src, dest } = require("gulp");
const svgmin = require('gulp-svgmin');

const defaultTask = done => {
	src('svg-test.svg')
		.pipe(svgmin({
			// Ensures the best optimization.
			multipass: true,
			js2svg: {
				// Beutifies the SVG output instead of
				// stripping all white space.
				pretty: true,
				indent: 2,
			},
			// Alter the default list of plugins.
			plugins: [
				// You can enable a plugin with just its name.
				'sortAttrs',
				{
					name: 'removeViewBox',
					// Disable a plugin by setting active to false.
					active: false,
				},
				{
					name: 'cleanupIDs',
					// Add plugin options.
					params: {
						minify: true,
					}
				},
			],
		}))
		.pipe(dest('./out'));
	done();
}

exports.default = defaultTask;