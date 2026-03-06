import express from "express";
import dotenv from "dotenv";
import type { Request, Response } from "express";
import connectDB from "./config/dbconfig.js";
import userRoutes from "./routes/auth.routes.js"



dotenv.config();
const app = express();

connectDB();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});
app.use('/auth',userRoutes);


app.listen(3000, () => {
    console.log("Server started on port 3000");
}); 