const express = require("express");
const app = express();
const { connection, UserModel } = require("./db");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome");
});

app.get("/users", async (req, res) => {
  let query = req.query;

  try {
    const users = await UserModel.find(query);
    res.send(users);
  } catch (err) {
    res.send({ msg: "cannot get the users", error: err.message });
  }
});

app.post("/register", async (req, res) => {
  try {
    const user = new UserModel(req.body);
    await user.save();
    res.send({ msg: "User has been registered" });
  } catch (err) {
    res.send({ msg: "cannot register", error: err.message });
  }
});

app.patch("/update/:id", async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  try {
    await UserModel.findByIdAndUpdate({ _id: ID }, payload);
    res.send("User has been updated");
  } catch (err) {
    res.send({ msg: "cannot register", error: err.message });
  }
  res.send(id);
});

app.delete("/delete/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    await UserModel.findByIdAndDelete({ _id: ID });
    res.send("User deleted");
  } catch (err) {
    res.send({ msg: "cannot delete", error: err.message });
  }
});

app.listen(4500, async () => {
  try {
    await connection;
    console.log("connected to DB");
  } catch (err) {
    console.log(err);
  }

  console.log("server started");
});
