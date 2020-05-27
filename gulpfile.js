const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
const tinypng = require('gulp-tinypng-compress');
const browserSync = require('browser-sync').create();


// Static server
 function bs() {
     serveSass();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./*.html").on('change', browserSync.reload);
    watch("./sass/**/*.sass", serveSass);
    watch("./sass/**/*.scss", serveSass);
    watch("./js/*.js").on('change', browserSync.reload);
};


// Compile sass into CSS & auto-inject into browsers
 function serveSass() {
    return src("./sass/**/*.sass", "./sass/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(autoprefixer({ 
            flex: true
        }))
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
};

//minify css
function buildCSS(done) {
    src('css/**.css').pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('dist/css'))
    done();
}
//minify js
function buildJS(done) {
    src(['js/**.js', '!js/**.min.js'])
    .pipe(minify())
    .pipe(dest('dist/js'));
    src('js/**.min.js').pipe(dest('dist/js'));
    done();
}


//minify html
function html(done) {
    src('**.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist/'))
    done();
    
}



//minify php
function php(done) {
    src('**.php')
        .pipe(dest('dist/'))
    src('phpmailer/**/**')
        .pipe(dest('dist/phpmailer'))
    done();
    
}
//fonts
function fonts(done) {
    src('fonts/**/**')
    .pipe(dest('dist/fonts'))
    done();
    
}

//img
function imgmin(done) {
    src('img/**/**/*.{png,jpg,jpeg}')
    .pipe(tinypng({
        key: '8VnMgzlSjZCyymgDxDchczx6xkgqTvmf',
        sigFile: 'images/.tinypng-sigs',
        log: true
    }))
        .pipe(dest('dist/img/'))
    src('img/**/**.svg')
        .pipe(dest('dist/img/'));
    done();

}


exports.serve = bs;
exports.build = series(buildCSS, buildJS, html, php, fonts, imgmin);

