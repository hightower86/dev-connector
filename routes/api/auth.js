const router = require('express').Router();

// @route    GET api/auth
// @descr    Test route
// @access   Public
router.get('/', (req, res) => res.send('Auth api'));

module.exports = router;
