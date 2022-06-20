import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());


app.use('/posts', postRoutes)

const CONNECTION_URL = 'mongodb+srv://socialMedia_App:socialmedia@cluster0.r4emm.mongodb.net/?retryWrites=true&w=majority'
const PORT = 4000;

mongoose.connect(CONNECTION_URL)
.then(() => {
    app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
})
.catch((err) => {
    console.log(err.message)
})


