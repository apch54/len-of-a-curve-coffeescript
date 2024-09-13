//=====================
// inside gulpfile.js 
//=====================

var   gulp = require('gulp')
    , coffee = require('gulp-coffee')
    , concat = require('gulp-concat')
    , header = require('gulp-header')
//  , uglify = require('gulp-uglify')

var   from = './coffee/*.coffee'
    , to   = './js/'
    , dte  = new Date().toISOString().substring(0, 10); // date in str

async function defaultTask(cb){ // asynchone function  
  gulp.src(from)
    .pipe(coffee({ bare: true }))
    .pipe(concat('app.js'))
    .pipe(header(`// Ecrit par Apch, le ${dte} \n\n`)) // header on top
    //.pipe(uglify())
    .pipe(gulp.dest(to))
  }

exports.default = defaultTask;
