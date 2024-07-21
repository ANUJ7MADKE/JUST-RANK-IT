const fs = require('node:fs/promises');

const express = require("express")
const app = express()

app.use(express.static('./models/roomImages'))

app.use(express.json());

//CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
    next();
  });


app.get('/user-recents', async (req, res) => {
    const fileContent = await fs.readFile('./models/user-recents.json');
  
    const recentRooms = JSON.parse(fileContent);
  
    res.status(200).json({ recentRooms });
});


app.put('/create-room', async (req, res) => {
    const roomData = req.body;
    await fs.writeFile('./models/user-recents.json', JSON.stringify(roomData));
  
    res.status(200).send("Successfully Created")
});

app.delete('/delete-room', async (req, res) => {
    const roomData = req.body;
    await fs.writeFile('./models/user-recents.json', JSON.stringify(roomData));
  
    res.status(200).send("Deleted Successfully")
});
  
                    
app.listen(3000, ()=>{
    console.log("Listening at Port 3000")
})