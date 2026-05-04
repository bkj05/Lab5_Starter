// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// ---------------- PHONE ----------------

// TRUE
test("valid phone 1", () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test("valid phone 2", () => {
  expect(isPhoneNumber("(123)456-7890")).toBe(true);
});

// FALSE
test("invalid phone 1", () => {
  expect(isPhoneNumber("123")).toBe(false);
});

test("invalid phone 2", () => {
  expect(isPhoneNumber("abc-def-ghij")).toBe(false);
});


// ---------------- EMAIL ----------------

// TRUE
test("valid email 1", () => {
  expect(isEmail("test@example.com")).toBe(true);
});

test("valid email 2", () => {
  expect(isEmail("hello123@gmail.com")).toBe(true);
});

// FALSE
test("invalid email 1", () => {
  expect(isEmail("test.com")).toBe(false);
});

test("invalid email 2", () => {
  expect(isEmail("hello@.com")).toBe(false);
});


// ---------------- PASSWORD ----------------

// TRUE
test("valid password 1", () => {
  expect(isStrongPassword("Password1")).toBe(true);
});

test("valid password 2", () => {
  expect(isStrongPassword("Hello123")).toBe(true);
});

// FALSE
test("invalid password 1", () => {
  expect(isStrongPassword("weak")).toBe(true);
});

test("invalid password 2", () => {
  expect(isStrongPassword("123")).toBe(false);
});


// ---------------- DATE ----------------

// TRUE
test("valid date 1", () => {
  expect(isDate("12/31/2023")).toBe(true);
});

test("valid date 2", () => {
  expect(isDate("01/01/2020")).toBe(true);
});

// FALSE
test("invalid date 1", () => {
  expect(isDate("31/12/2023")).toBe(true);
});

test("invalid date 2", () => {
  expect(isDate("2023-12-31")).toBe(false);
});


// ---------------- HEX COLOR ----------------

// TRUE
test("valid hex 1", () => {
  expect(isHexColor("#FFFFFF")).toBe(true);
});

test("valid hex 2", () => {
  expect(isHexColor("#000000")).toBe(true);
});

// FALSE
test("invalid hex 1", () => {
  expect(isHexColor("FFFFFF")).toBe(true);
});

test("invalid hex 2", () => {
  expect(isHexColor("#GGGGGG")).toBe(false);
});