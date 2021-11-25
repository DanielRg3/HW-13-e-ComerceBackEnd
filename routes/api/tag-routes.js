const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//To dine all tags
router.get('/', (req, res) => {
  Tag.findAll({
    include: {
      model: Product,
      attributes: ['product_name', 'stock', 'price', 'category_id']
    }
  }).then(dbTag => {
    if (!dbTag) {
      res.status(404).json({ message: 'No tags were found :( '});
      return;
    }
    res.json(dbTag);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

//To find an specific tag
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Product,
      attributes: ['product_name', 'stock', 'price', 'category_id']
    }
  }).then(dbTag => {
    if (!dbTag) {
      res.status(404).json({ message: 'The tag was not found :( '});
      return;
    }
    res.json(dbTag);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

//To create a new tag
router.post('/', (req, res) => {
  Tag.create({
    wcategory_name: req.body.wcategory_name
  }).then(dbTag =>
    res.json(dbTag)).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//To update a tag
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(dbTag => {
    if (!dbTag) {
      res.status(404).json({ message: 'The tag was not found :( '});
      return;
    }
    res.json(dbTag);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

//To delete a tag
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbTag => {
    if (!dbTag) {
      res.status(404).json({ message: 'The tag was not found :( '});
      return;
    }
    res.json(dbTag);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

module.exports = router;
