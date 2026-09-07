const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.join(__dirname, "..", ".env")
});

const app = express();

app.use(cors());
app.use(express.json());

console.log("API key loaded:", !!process.env.GEMINI_API_KEY);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});