const  { gulp,parallel,src,dest } = require("gulp")
const minify = require("gulp-minify")
function combineClasses(cb){
    src("src/*.class.js").pipe(minify()).pipe(dest("./dist/"))
    cb()
}
function minifyMain(cb){
    src("src/index.js").pipe(minify()).pipe(dest("./dist/"))
    cb()
}
exports.default = parallel(combineClasses,minifyMain)