import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './Routes/auth.js';
import userRoute from './Routes/user.js';
import DoctorRoute from './Routes/doctor.js';
import reviweRoute from './Routes/review.js';




dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const cosrsOptions = {
    origin: true,
}

app.get('/', (req, res) => {
    res.send("Api is available")
});
//database connection
mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Connection established");

    } catch (err) {
        console.log("database connection error");
    }

};

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(cosrsOptions));
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/user', userRoute);
app.use('/api/v1/doctor', DoctorRoute);
app.use('/api/v1/review', reviweRoute);



app.listen(port, () => {
    connectDB();
    console.log("server is running on port" + port);
});