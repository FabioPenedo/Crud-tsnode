import { Router } from "express";
import * as HomeController from '../controllers/homeController'

const router = Router()

router.get('/cadastro', HomeController.home)
router.post('/usuario/', HomeController.users)

export default router