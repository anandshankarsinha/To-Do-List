const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
let items = ["Eat Food", "Sleep"];
let workItems = [];

app.get("/", function (req, res) {
  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  var day = today.toLocaleDateString("en-US", options);

  res.render("list", { listTitle: day, newList: items });
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work", newList: workItems });
});

app.post("/", function (req, res) {
  if (req.body.list === "Work") {
    workItems.push(req.body.newItem);
    res.redirect("/work");
  } else {
    items.push(req.body.newItem);
    res.redirect("/");
  }
});

app.listen("3000", function (req, res) {
  console.log("Server is running");
});

// res.send("Hello");

//   if (currDay === 6 || currDay === 0) {
//     day = "Weekend";
//   } else {
//     day = "Weekday";
//   }
//   res.render("list", { kindofDay: currDay });
/**
 * 
  switch (currDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thrusday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      break;
  }
 */
