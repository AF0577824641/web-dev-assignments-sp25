const express = require("express");
const router = express.Router();
const Genre = require("../models/genre");

router.get("/", (req, res) => {
  res.render("genres/index", { genres: Genre.all });
});

router.get("/new", (req, res) => {
  res.render("genres/form", { genre: {} });
});

router.post("/upsert", (req, res) => {
  console.log("Request body:", req.body);
  const { id } = req.body;
  res.redirect(303, "/genres");
});

router.get("/edit", (req, res) => {
  const id = parseInt(req.query.id);
  const genre = Genre.get(id);
  res.render("genres/form", { genre });
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const genre = Genre.get(id);

  if (!genre) {
    return res.status(404).render("error", { error: "Genre not found" });
  }
  res.render("genres/show", { genre, id });
});

module.exports = router;
