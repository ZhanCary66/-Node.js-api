var express = require('express');
var router = express.Router();

/* GET api listing. */
router.get('/version', function(req, res, next) {
  res.send({ 'version': '1.0.0' });
});

router.get('/echo', function(req, res, next) {
  const num1=parseFloat(req.query.num1);
  const num2=parseFloat(req.query.num2);
  const sum=num1+num2;
  res.send({ 'result': sum });
});

module.exports = router;
