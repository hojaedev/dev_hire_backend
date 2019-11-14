const express = require('express');
const router = express.Router();

const AccountController = require('../../controllers/freelancer/accountController');

router.post('/getInfo', AccountController.getInfo);
router.put('/modify', AccountController.modify);

module.exports = router;