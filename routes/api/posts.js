const router = require('express').Router();

// @route    GET api/posts
// @descr    Test route
// @access   Public
router.get('/', (req, res) => res.send('POsts api'));

module.exports = router;
