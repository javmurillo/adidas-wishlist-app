const express = require('express');
const router = express.Router();

// In memory storage for the sake of convenience
let wishlistStorage = [];

/**
 * @swagger
 * /api/wishlist:
 *   get:
 *     tags: ["wishlist"]
 *     description: Returns the Wishlist
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: successful operation
 *         schema:
 *              type: array
 *              items:
 *                  $ref: '#/definitions/Article'
 */
router.get('/', (req, res) => {
    res.status(200).json(wishlistStorage);
});

/**
 * @swagger
 * /api/wishlist:
 *   post:
 *     tags: ["wishlist"]
 *     description: Adds a new article to the Wishlist
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: article
 *         in: body
 *         required: true
 *         description: Article to add in the Wishlist
 *         schema:
 *              $ref: '#/definitions/Article'
 *     responses:
 *       201:
 *         description: Article added successfully
 */
router.post('/', (req, res) => {
    const article = req.body.article;
    const duplicatedId = wishlistStorage.some(wishlistArticle => wishlistArticle._id === article._id)
    if (duplicatedId) return res.status(500).json({message: "Article ID already exists."});
    wishlistStorage.push(article);
    res.status(201).json(article);
});


/**
 * @swagger
 * /api/wishlist:
 *   delete:
 *     tags: ["wishlist"]
 *     description: Clears the Wishlist
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: Wishlist cleared successfully
 */
router.delete('/', (req, res) => {
    wishlistStorage = [];
    res.status(200).json(wishlistStorage)

});

/**
 * @swagger
 * /api/wishlist/{id}:
 *   delete:
 *     tags: ["wishlist"]
 *     description: Deletes an article from the Wishlist given his id
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Article's ID to remove
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       201:
 *         description: Wishlist cleared successfully+
 */
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    wishlistStorage = wishlistStorage.filter(function(obj) {
        return obj._id !== id;
    })
    res.status(200).json(wishlistStorage)

});

module.exports = router;