const router = require('express').Router();

// @route    GET api/users
// @descr    Test route
// @access   Public
router.get('/', (req, res) => res.send('users api'));

module.exports = router;
