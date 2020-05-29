module.exports =function () {
    $.gulp.task ('sass',function() {
        return $.gulp.src('src/static/sass/main.styl')
        .pipe($.gp.sourcemaps.init())
        .pipe($.gp.sass({
            'include css': true
        }))
        .pipe($.gp.autoprefixer({
            overrideBrowserslist:  ['last 2 versions']
        }))
        .on("error", $.gp.notify.onError({
            title: "Error in style"
          }))
        .pipe($.gp.csso())
        .pipe($.gp.sourcemaps.write())
        .pipe($.gulp.dest('build/static/css/'))
        .pipe($.bs.reload({
            stream: true
        }));
    });
}