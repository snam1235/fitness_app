const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
module.exports.connect;
//connect to mongoDB
module.exports.connect = () =>
  mongoose.connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://ddoongss:sean1030@cluster0-8keyw.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
    function (error) {
      if (error) console.log(error);
      else console.log("connection successful");
    }
  );
