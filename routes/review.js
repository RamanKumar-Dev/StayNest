const express = require("express");
const router = express.Router({ mergeParams: true });
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, validateReview, isReviewAuthor } = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

// post Review Routes
router.post(
  "/", isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview),
);

// Delete Review Routes
router.delete(
  "/:reviewId", isLoggedIn, isReviewAuthor,
  wrapAsync(reviewController.deleteReview),
);

module.exports = router;
