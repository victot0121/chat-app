import express from "express"
import { Logout, login, signup } from "../controllers/auth.controller.js"


const router = express.Router()

router.post("/signup", signup)

router.post("/login", login)


router.post("/logout", Logout)

export default router