import express from 'express';
import connectDB from './config/database.js';
import userRoute from './routes/userRoute.js';
import resumeRoute from './routes/resumeRoute.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();
const app=express();


const PORT=5050;



console.log("JWT_SECRET:", process.env.JWT_SECRET_KEY);



app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsOption={
    origin:'http://localhost:5050',
    credentials:true,
};

app.use(cors(corsOption));



//routes

app.use("/api/v1/user",userRoute);
app.use("/api/v1/resume",resumeRoute);


app.listen(PORT,()=>{
    connectDB();
    console.log(`server is running on port ${PORT}`);

})
