
const express = require('express');
const router = express.Router();


const mediaHandler = require('./handler/media');


router.post('/', mediaHandler.create);
router.get('/', mediaHandler.getAll);


module.exports = router;


// const express = require('express');
// const router = express.Router();


// const mediaHandler = require('./handler/media');

// router.post('/',mediaHandler.create);

// module.exports = router;
