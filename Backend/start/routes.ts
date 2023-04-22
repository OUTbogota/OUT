/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.get('/index', 'RolesController.index')
}).prefix('api/Out/v1/roles').middleware('admin')

Route.post('/api/Out/v1/usuarios/login', 'UsuariosController.loginUsuario')

Route.group(() => {
  Route.get('/prueba', 'EncargadosController.index')
}).prefix('api/Out/v1/usuarios').middleware('auth')

Route.group(() => {
  Route.delete('/delete/:id', 'UsuariosController.delete')
  Route.post('/create', 'UsuariosController.createUsuario')
  Route.get('/index', 'UsuariosController.index')
}).prefix('api/Out/v1/usuarios').middleware('admin')


Route.group(() => {
  Route.post('/store', 'EncargadosController.store')
  Route.get('/index', 'EncargadosController.index')
  Route.get('/showNombre/:nombre','EncargadosController.showNombre')
  Route.get('/showUni/:nombre', 'EncargadosController.showUni')
}).prefix('api/Out/v1/encargados').middleware('auth')

Route.group(() => {
  Route.post('/store', 'CarrerasController.store')
  Route.get('/index', 'CarrerasController.index')
  Route.get('/show', 'CarrerasController.show')
}).prefix('api/Out/v1/carreras').middleware('auth')

Route.group(() => {
  Route.post('/store', 'UniversidadesController.store')
  Route.get('/index', 'UniversidadesController.index')
  Route.get('/show', 'UniversidadesController.show')
}).prefix('api/Out/v1/universidades').middleware('auth')


