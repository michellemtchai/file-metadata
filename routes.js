// setup express
const express = require('express');
const router = express.Router();
const formidable = require('formidable');

// setup bodyParser
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({
  extended: false
}));

router.post('/fileanalyse', (req,res)=>{
  const form = formidable();
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    res.json({     
      name: files.upfile.name,
      size: files.upfile.size,
      type: files.upfile.type
    })
  });
})
//---------- DO NOT EDIT BELOW THIS LINE --------------------

module.exports = router;
