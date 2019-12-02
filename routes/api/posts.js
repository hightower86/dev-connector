const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middlware/auth.js');

const Post = require('../../model/Post.js');
const User = require('../../model/User.js');
const Profile = require('../../model/Profile.js');

// @route    POST api/posts
// @descr    Create a post
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('text', 'text is reaquired')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select('-password');

      const newPost = new Post({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      });
      const post = await newPost.save();
      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route    GET api/posts
// @descr    Get all posts
// @access   Public

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
