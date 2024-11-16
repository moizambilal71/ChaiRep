import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
const mydata={
  "status": "success",
  "message": "Sample data for testing",
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@example.com",
      "is_active": true,
      "balance": 1050.75,
      "preferences": {
        "theme": "dark",
        "language": "English",
        "notifications": {
          "email": true,
          "sms": false,
          "push": true
        }
      },
      "created_at": "2024-11-16T12:34:56Z"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "janesmith@example.com",
      "is_active": false,
      "balance": 230.00,
      "preferences": {
        "theme": "light",
        "language": "French",
        "notifications": {
          "email": false,
          "sms": true,
          "push": false
        }
      },
      "created_at": "2024-10-25T08:15:30Z"
    },
    {
      "id": 3,
      "name": "Alice Johnson",
      "email": "alicejohnson@example.com",
      "is_active": true,
      "balance": 0,
      "preferences": {
        "theme": "dark",
        "language": "Spanish",
        "notifications": {
          "email": true,
          "sms": true,
          "push": false
        }
      },
      "created_at": "2024-09-10T14:20:00Z"
    }
  ]
}

dotenv.config();
const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;
app.get("/",(req,res)=>{
    res.send("Congradulation bro guys")
})
app.get("/json",(req,res)=>{
  res.json(mydata)
})


mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Database Connected Successfully");

    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
