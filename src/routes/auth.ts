const User = require("../entity/users");
const CryptoJS = require("crypto-js");
const router = require("express").Router();


router.post("/register", async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString(),
    });
  
    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    !user &&
      res.status(401).json("Wrong username please enter correct username");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET_KEY
    );
    const pssword = hashedPassword.toString(CryptoJS.enc.Utf8);

    pssword != req.body.password &&
      res.status(401).json("Wrong password please enter correct password");

    const { password, ...others} = user._doc

    res.status(201).json(others);
  } catch (error) {
  }
});

module.exports = router;