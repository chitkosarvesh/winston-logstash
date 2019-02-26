const  { gulp,parallel,src,dest } = require("gulp")
const concat = require("gulp-concat")
const minify = require("gulp-minify")
function combineClasses(cb){
    src("src/*.class.js").pipe(minify()).pipe(dest("./dist/"))
    cb()
}
function uglifyMain(cb){
    src("src/index.js").pipe(minify()).pipe(dest("./dist/"))
    cb()
}
exports.default = parallel(combineClasses,uglifyMain)