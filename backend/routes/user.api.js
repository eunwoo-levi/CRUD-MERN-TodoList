const express = require("express");
const userController = require("../controller/user.controller");
const authController = require("../controller/auth.controller");
const router = express.Router();

// 1. 회원가입 endpoint
router.post("/", userController.createUser);
router.post("/login", userController.loginWithEmail);
// Token을 통해 유저 id 를 빼고, 그 아이디로 유저 객체 찾아서 보내줌
router.get("/me", authController.authenticate, userController.getUser);

module.exports = router;
