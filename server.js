import express from "express";
import dotenv from "dotenv"; //npm i dotenv   to use .env
import morgan from "morgan"; // npm i morgan
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
//npm i bcrypt   to hach password to encrypt
//npm i jsonwebtoken
// npm i concurrently    it start both npm start and nodemon server.js once see package.json file
// npm i cors
//npm i express-formidable  used in photo
import cors from "cors";

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json()); // we can also use body parser
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>welcome </h1>");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running on ${process.env.DEV_MODE} mode  on  ${PORT}`);
});
//abc
