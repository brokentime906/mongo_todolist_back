require("dotenv").config();
import mongoose from "mongoose";
export default () => {
  const connect = () => {
    if (process.env.NODE_ENV !== "production") {
      mongoose.set("debug", true);
    }
    mongoose.connect(
      `mongodb+srv://${process.env.ACCOUNT_ID}:${process.env.ACCOUNT_PASSWORD}@todolist-aline-5uznu.mongodb.net/test?retryWrites=true&w=majority`,
      {
        dbName: "nodejs",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) {
          console.log("몽고디비 연결 에러", err);
        } else {
          console.log("몽고디비 연결 성공");
        }
      }
    );
  };
  connect();
  mongoose.connection.on("error", (err) => {
    console.error("몽고디비 연결 에러", err);
  });
  mongoose.connection.on("disconnected", () => {
    console.error("몽고디비 연결이 끊겼습니다. 연결을 재 시도합니다");
    connect();
  });
  require("./todo");
};
