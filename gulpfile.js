var gulp = require('gulp');

gulp.task('hello', function(){
  console.log('Hello gulp!');
});

gulp.task('zosu', function(){
  console.log('zosu');
});

gulp.task('default', ['hello', 'zosu']);
