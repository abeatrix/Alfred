const router = require("express").Router();

const {
  validSignup,
  validLogin,
} = require("../middleware/valid");

const {
  registerController,
  activateController,
  loginController,
  googleController,
} = require("../controllers/auth");

router.post("/signup", validSignup, registerController);
router.post("/signin", validLogin, loginController);
router.post("/activate", activateController);
router.post("/google", googleController);

module.exports = router;
