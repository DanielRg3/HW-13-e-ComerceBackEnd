const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//To find all categories
router.get('/', (req, res) => {
  Category.findAll({ 
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'stock', 'price', 'category_id']
    }
  }).then(dbCategory => {
    if (!dbCategory) {
      res.status(404).json({ message: 'Categories not found :('});
      return;
    }
    res.json(dbCategory);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

//To find one specific category
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'stock', 'price', 'category_id']
    }
  }).then(dbCategory => {
    if (!dbCategory) {
      res.status(404).json({ message: 'Category not found :('});
      return;
    }
    res.json(dbCategory);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

//To create a new category
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  }).then(dbCategory => 
    res.json(dbCategory)).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

//To update a category
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(dbCategory => {
    if (!dbCategory) {
      res.status(404).json({ message: 'Category not found :('});
      return;
    }
    res.json(dbCategory);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

//To delete a category
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbCategory => {
    if (!dbCategory) {
      res.status(404).json({ message: 'Category not found :('});
      return;
    }
    res.json(dbCategory);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

module.exports = router;
