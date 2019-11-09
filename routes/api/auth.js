const router = require('express').Router();
const auth = require('../../middlware/auth.js');

const User = require('../../model/User');

// @route    GET api/auth
// @descr    Test route
// @access   Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // switch off getting password
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
