var requireDir = require('require-dir');

// Require gulp tasks and task bundles
requireDir('./gulp-config/tasks', { recurse: true });
requireDir('./gulp-config/bundles', { recurse: true });