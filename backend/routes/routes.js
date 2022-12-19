const router = require('express').Router();
const routerUser = require('./users');
const routerCard = require('./cards');
const NotFoundError = require('../errors/not-found-error');
const { createUser, login } = require('../controllers/users');
const { validateLogin, validateCreateUser } = require('../middlewares/validation');

router.post('/signin', validateLogin, login);

router.post('/signup', validateCreateUser, createUser);

router.use('/', routerUser);
router.use('/', routerCard);

router.use('*', (req, res, next) => {
  next(new NotFoundError('Ресурс по указанному адресу не найден'));
});

module.exports = router;
