$ = require('jquery')
main = require('./modules/main/main')
hbsHelpers = require('./modules/common/hbs-helpers') 

hbsHelpers.init()

$('document').ready ->
  main.init $('body')
