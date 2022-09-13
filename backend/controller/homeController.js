const BigPromise = require("../middlewares/bigPromise");


exports.home = BigPromise(async (req, res) => {
  // const db = await something()
  res.status(200).json({
    success: true,
   
    greeting: "Hello from API",
  });
});

exports.homeDummy = (req, res) => {


  res.status(200).json({
    sucess: true,
    greetings: "Hellow from dummy",
  });
};
