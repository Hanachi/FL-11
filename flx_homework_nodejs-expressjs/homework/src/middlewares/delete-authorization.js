function deleteAuth(req, res, next) {
  if (req.method === 'DELETE') {
    if(req.get('logIn') && (req.get('logIn') === 'X-Password')) {
      next();
    } else {
      res.status(401).send('');
    }
  }
}
module.exports.deleteAuth = deleteAuth;