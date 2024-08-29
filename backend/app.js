const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const indexRouter = require("./routes/index");
const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());

//api 안써도됌
app.use("/api", indexRouter);

const mongoURI = "mongodb://localhost:27017/crud-todolist";

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("mongoose connected"))
  .catch((err) => console.log("DB connection failed", err));

app.listen(5000, () => {
  console.log("server on 5000");
});

// <회원가입>
// 1. 라우터  (routes)
// 2. 모델 (model)
// 3. 데이터를 저장 (controller)
// 4. 응답을 보냄

// <로그인>
// 1. 라우터 설정
// 2. email, password 정보 읽어오기
// 3. email를 가지고 user 정보 가져오기
// 4. 이 user의 DB에 있는 password와 Frontend가 보낸 password가 같은지 비교
// 5. 비교 후, 맞다면 Token 발행 / 틀리면 에러메세지
// 6. 응답으로 User 정보, Token 보내기
