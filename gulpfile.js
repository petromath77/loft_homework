var gulp          = require('gulp'),
    browsersync   = require('browser-sync');


gulp.task('browser-sync', function() {
    browsersync({
        port: 9000,
        server: {
            baseDir: 'app'
        }
    })
});

gulp.task('watch', function() {
	gulp.watch([
        'app/*.html',
        'app/js/**/*.js',
        'app/css/**/*.css',
    ]).on('change', browsersync.reload);
});

gulp.task('default', ['watch', 'browser-sync']);