const User = require("../model/User");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const jwt = require("jsonwebtoken");

const userController = {};

userController.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 이미 가입된 User인지 확인해야함
    const user = await User.findOne({ email });
    if (user) {
      throw new Error("이미 가입된 유저입니다.");
    }

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({ name, email, password: hash });
    await newUser.save();

    res.status(200).json({ status: "success", data: newUser });
  } catch (err) {
    res.status(400).json({ status: "fail", err });
  }
};

userController.loginWithEmail = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }, "-createdAt -updatedAt -__v");
    if (user) {
      const isMatch = bcrypt.compareSync(password, user.password);
      if (isMatch) {
        const token = jwt.sign({ _id: user._id }, JWT_SECRET_KEY, {
          expiresIn: "1d",
        });
        console.log("토큰이다ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ", token);
        return res.status(200).json({ status: "success", user, token });
      } else {
        throw new Error("입력하신 비밀번호가 일치하지 않습니다.");
      }
    } else {
      throw new Error("해당 아이디가 존재하지 않습니다.");
    }
  } catch (err) {
    res.status(400).json({ status: "fail", message: err.message });
  }
};

module.exports = userController;
