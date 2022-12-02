const express = require("express")
const bodyParser = require("body-parser")
const userRoutes = require("./router/user.js")
const app = express();
const port = 5000;

app.use(bodyParser.json());
// ================== Routes =====================================
app.use('/users',userRoutes);


app.listen(port,()=>{
    console.log('Server Running on http://localhost:'+port);
})