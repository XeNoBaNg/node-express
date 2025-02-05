const names = require('./2-module')
const sayHello = require('./3-module')

sayHello(names.Firstname, names.Lastname)
