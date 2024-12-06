const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");
app.use(cors());
app.get("/hello/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}.`);
});
app.get("/profile", (req, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      return res.status(500).json({ message: "Error fetching profile data" });
    }

    try {
      const profileData = JSON.parse(data);
      res.status(200).json(profileData);
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      res.status(500).json({ message: "Error parsing profile data" });
    }
  });
});
app.use(express.json());
app.post("/profile", (req, res) => {
  const profileData = req.body;
  if (profileData && profileData.name && profileData.job) {
    fs.readFile("data.json", (err, data) => {
      const existingData = JSON.parse(data);
      existingData.push(profileData);
      fs.writeFile(
        "data.json",
        JSON.stringify(existingData, null, 2),
        (err) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "Error saving profile data" });
          }
          res.status(200).json({ message: "Profile data saved successfully" });
        }
      );
    });
  } else {
    res.status(400).json({
      message: "Invalid profile data",
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
