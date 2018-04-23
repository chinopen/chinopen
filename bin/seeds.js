const mongoose = require("mongoose");
const User = require('../models/User');
mongoose
  .connect(dbURL, {
    useMongoClient: true
  })
  .then(() => {
    console.log("Connected to Mongo!");
    return User.create([
        {
            name: "Avellos Trattoria",
            description: "Muy Mala la pizza",
            location:{
                type: "Point",
                coordinates:[40.392380, -3.698493]
            }
        },
        {
            name: "Mc Donald's",
            description: "Marc prefered meal",
            location:{
                type: "Point",
                coordinates:[40.4095426,-3.6927179]
            }
            
        
        
        }

    ]);
  })
  .then( () => mongoose.disconnect())
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
