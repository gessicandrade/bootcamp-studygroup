const { Router } = require('express');
const routes = new Router();

routes.get('/', (req, res) => {
  res.json('Hello Word');
})

module.exports = routes;