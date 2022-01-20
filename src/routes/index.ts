import { Router } from "express";
import * as HomeController from '../controllers/homeController'
import * as UserController from '../controllers/userController'

const router = Router()

router.get('/cadastro', HomeController.home)
router.get('/usuario', UserController.users)
router.post('/novousuario', UserController.newUser)
router.get('/usuario/:id/editar', UserController.editUser)
router.get('/usuario/:id/excluir', UserController.deleteUser)
router.post('/novousuarioeditado/:id', UserController.newEditUser)


export default router