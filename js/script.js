// Copyright (c) 2023 Ashley Monaghan and Ekaterina Chernykh All rights reserved
//
// Created by: Ashley Monaghan and Ekaterina Chernykh
// Created on: Jan 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Final-Project-Ashley-Ekat/sw.js", {
    scope: "/ICS2O-Final-Project-Ashley-Ekat/",
  })
}

/**
 * This function displays an alert.
 * Math
 */
function calculate() {
  // input
  const a = parseInt(document.getElementById("textbox-a").value)
  const b = parseInt(document.getElementById("textbox-b").value)
  const c = parseInt(document.getElementById("textbox-c").value)

  // process
  const math = a + b + c
  // output
  document.getElementById("math").innerHTML = "Numbers: " + math + " units"
}

/**
 * This function displays an alert.
 * Words
 */
function button() {
  document.getElementById("words").innerHTML = "<p>Hello, World!</p>"
}
