"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddIngredient = AddIngredient;

function IngredientQuantity() {
  return Math.floor(Math.random() * 3);
}

;
AddIngredient.innerHtml = "";

function AddIngredient() {
  IngredientQuantity.addEventListener("click", function (e) {
    e.preventDefault();
    IngredientQuantity = document.getElementsByClassName("p");
  });
}

;