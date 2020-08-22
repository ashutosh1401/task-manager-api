const request = require("supertest");
const server = require("../src/index");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../src/models/user");

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
  name: "Ashutosh",
  email: "ashutoshthakur1409@gmail.com",
  password: "1234567",
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET),
    },
  ],
};
beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
});

test("Should sign up a new user", async () => {
  await request(server)
    .post("/users")
    .send({
      name: "Ashutosh Thakur",
      email: "ashutoshthakur1409@gmail.com",
      password: "1234567",
    })
    .expect(400);
});

test("Should login existing users", async () => {
  await request(server)
    .post("/users/login")
    .send({
      email: userOne.email,
      password: userOne.password,
    })
    .expect(200);
});

test("should not login non-existing user", async () => {
  await request(server)
    .post("/users/login")
    .send({
      email: "shihrifb_12@example.com",
      password: "1234567890",
    })
    .expect(404);
});

test("should get profile user", async () => {
  await request(server)
    .get("/users/me")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
});

test("should not get profile for unauthenticated user", async () => {
  await request(server).get("/users/me").send().expect(401);
});
