const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });
const listingsController = require("../controllers/listings.js");

// index(.get) and Create(.post) Route
router
  .route("/")
  .get(wrapAsync(listingsController.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingsController.createListing),
  );

// New(Create) Route
router.get("/new", isLoggedIn, listingsController.renderNewForm);

// Show(.get), Update(.put), Delete(.delete)
router
  .route("/:id")
  .get(wrapAsync(listingsController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingsController.updateListing),
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingsController.deleteListing));

// edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingsController.renderEditForm),
);

module.exports = router;
