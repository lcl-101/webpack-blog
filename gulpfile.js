var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();

//拷贝 favicon.ico
gulp.task('move:favicon.ico',function(){
    var stream = gulp.src('./src/common/images/*')
        .pipe(gulp.dest('./dist/common/images'));
    return stream;
})
//默认生成环境任务
gulp.task('default', function(callback) {
    // 将你的默认的任务代码放在这
    plugins.sequence('move:favicon.ico')(callback);
});
