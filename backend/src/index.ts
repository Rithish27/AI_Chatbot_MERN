import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";


//connections & listners
const PORT = process.env.PORT || 5000;
connectToDatabase()
  .then(()=>{
    app.listen(PORT,()=>
    console.log("Server open & connected to DB")
    );
  })
  .catch((err) => console.log(err));





