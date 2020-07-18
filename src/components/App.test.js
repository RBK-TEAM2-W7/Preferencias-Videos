import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("Add Customer POST /register", async () => {
  const response = await videoModel.create({
    //customers change fix-me
    email: req.body.email,
    userName: req.body.userName,
    password: req.body.password,
    age: req.body.age,
  });
  await response.save();
  expect(response.name).toBe(process.env.userName);
});

test("All  GET /profile", async () => {
  const response = await FIX_ME.find({}); // fix this also

  expect(response.length).toBeGreaterThan(0);
});

test("Update  PUT /update/:linkVideo", async () => {
  //
  const response = await customers.updateOne(
    { name: process.env.userName },
    { email: process.env.email }
  );
  expect(response.ok).toBeTruthy();
});
test(" update is correct", async () => {
  const responseTwo = await customers.findOne({
    name: process.env.userName,
  });
  expect(responseTwo.email).toBe(process.env.CUSTOMER_EMAIL_ALT);
});

test("Delete /removeOne", async () => {
  //give it the right rount
  const response = await customers.deleteOne({
    name: process.env.CUSTOMER_NAME,
  });
  expect(response.ok).toBe(1);
});
