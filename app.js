const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
var methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
// connect mongo
mongoose
  .connect("mongodb://127.0.0.1:27017/yelp_clone")
  .then((result) => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// models
const Place = require("./models/place");

// routes
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/places", async (req, res) => {
  const places = await Place.find();
  res.render("places/index", { places });
});
app.get("/places/create", async (req, res) => {
  res.render("places/create");
});
app.post("/places", async (req, res) => {
  const place = new Place(req.body.place);
  await place.save();
  res.redirect("/places");
});
app.get("/places/:id", async (req, res) => {
  const place = await Place.findById(req.params.id);
  res.render("places/show", { place });
});
app.get("/places/:id/edit", async (req, res) => {
  const place = await Place.findById(req.params.id);
  res.render("places/edit", { place });
});
app.put("/places/:id", async (req, res) => {
  const place = await Place.findByIdAndUpdate(req.params.id, {
    ...req.body.place,
  });
  res.redirect(`/places/${place._id}`);
});
app.delete("/place/:id", async (req, res) => {
  await Place.findByIdAndDelete(req.params.id);
  res.redirect("/places");
});

app.get("/seed/places", async (req, res) => {
  const place = new Place({
    name: "KFC",
    description: "KFC is a fast food restaurant",
    location: "Jakarta",
    image: "images/place",
  });
  await place.save();
  res.send(place);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
