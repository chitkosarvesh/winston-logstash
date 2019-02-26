const  { gulp,parallel,src,dest } = require("gulp")
const minify = require("gulp-minify")
const jshint = require("gulp-jshint")
function combineClasses(cb){
    src("src/*.class.js")
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(minify())
    .pipe(dest("./dist/"))
    cb()
}
function minifyMain(cb){
    src("src/index.js")
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(minify())
    .pipe(dest("./dist/"))
    cb()
}
exports.default = parallel(combineClasses,minifyMain)