const express =require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = """;

app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/hostelDB', {userNewurlParser: true,useunifiedTopology:true});

const adminSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const Admin = mongoose.model('Admin',adminSchema);

app.post('/api/login', async (req, res) => {
    const { username, password} = req.body;

    try {
        const admin = await Admin.findOne({ username, paasword });
        if (admin){
            res.json({ success: true, message: 'Login successful'});
        } else {
            res.json({success: false, message: 'Invalid Credentials'});
        }
    }catch (error) {
        console.error('Error:', error);
        res.status(500).json({success: false, message: 'Internal server error'});
    }
});