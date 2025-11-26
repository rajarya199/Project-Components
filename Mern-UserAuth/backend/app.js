import express from "express";
import authRoutes from './routes/auth.route.js'
import cors from "cors";
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());
app.use("/api", authRoutes);

export default app;