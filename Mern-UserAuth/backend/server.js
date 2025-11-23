import { connectDb } from "./database/db.js";
import dotenv from "dotenv";
import app from "./app.js";
dotenv.config();
connectDb();
app.get('/', (req, res) => {
  res.send('Server is running...');
});

const PORT =process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))