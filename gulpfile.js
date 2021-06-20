var gulp = require('gulp'), // Подключаем Gulp
less = require('gulp-less'), //Подключаем less пакет,
browserSync = require('browser-sync'); // Подключаем Browser Sync
const concat = require('gulp-concat');
const uglify = require('gulp-uglifyjs'); // Подключаем gulp-uglifyjs (для сжатия JS)
const autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов
const del = require('del');

gulp.task('less', function(){ // Создаем таск less
return gulp.src('app/less/**/*.less') // Берем источник
  .pipe(less()) // Преобразуем less в CSS посредством gulp-less
  .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
  .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
  .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
  .pipe(concat('bundle.css'))
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
browserSync({ // Выполняем browserSync
  server: { // Определяем параметры сервера
    baseDir: 'app' // Директория для сервера - app
  },
  notify: false // Отключаем уведомления
});
});
gulp.task('watch', function() {
	gulp.watch('app/less/**/*.less', gulp.parallel('less')); // Наблюдение за less файлами
});
gulp.task('scripts', function() {
	return gulp.src([ // Берем все необходимые библиотеки
		'app/libs/jquery/dist/jquery.min.js', // Берем jQuery
		'app/libs/ion.rangeSlider.min.js',
		'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js' // Берем Magnific Popup
		])
		.pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
		.pipe(uglify()) // Сжимаем JS файл
		.pipe(gulp.dest('app/js')); // Выгружаем в папку app/js
});


//auto
gulp.task('default', gulp.parallel('less', 'browser-sync', 'watch','scripts'));


