const gulp = require('gulp');

// html压缩插件
var htmlClean = require('gulp-htmlclean');
// 压缩图片
var imgMin = require('gulp-imagemin');
// 压缩js
var uglify = require('gulp-uglify');
// 去除掉js中的调试语句和debugger
var debug = require('gulp-strip-debug');
// 处理less
var less = require('gulp-less');
// 压缩css
var cleanCss = require('gulp-clean-css');
// 给css3添加前缀
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
// 开启本地服务器
var connect = require('gulp-connect');
var folder = {
    src: 'src/',
    dist: 'dist/'
}
// 设置环境变量
// export NODE_ENC=development
// 判断当前的环境
var devMod = process.env.NODE_ENV == "development"


gulp.task("html", function() {
    var page = gulp.src(folder.src + 'html/*')
        .pipe(connect.reload())
        if(!devMod) {
            page.pipe(htmlClean())
        }
        page.pipe(gulp.dest(folder.dist + 'html/'))
})
gulp.task("img", function() {
    gulp.src(folder.src + 'img/*')
        .pipe(imgMin())
        .pipe(gulp.dest(folder.dist + 'img/'))
})
gulp.task("css", function() {
    var page = gulp.src(folder.src + 'css/*')
        .pipe(connect.reload())
        .pipe(less())
        .pipe(postcss([autoprefixer()]))
        if(!devMod) {
            page.pipe(cleanCss())
        }
        page.pipe(gulp.dest(folder.dist + 'css/'))
})
gulp.task("js", function() {
    var page = gulp.src(folder.src + 'js/*')
        .pipe(connect.reload())
        // .pipe(debug())
        if(!devMod) {
            page.pipe(uglify())
        }
        page.pipe(gulp.dest(folder.dist + 'js/'))
})
gulp.task("server", function() {
    connect.server({
        port: '8888',
        livereload: true
    });
})
gulp.task("watch", function() {
    gulp.watch(folder.src + 'html/*', ["html"]);
    gulp.watch(folder.src + 'css/*', ["css"]);
    gulp.watch(folder.src + 'js/*', ["js"]);
    gulp.watch(folder.src + 'img/*', ["img"]);
})
gulp.task("default", ["html", "img", "css", "js", "server", "watch"]);