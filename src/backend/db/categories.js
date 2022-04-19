import { v4 as uuid } from "uuid";
import { Carousel1, Carousel2, Carousel3 } from "../../frontend/assets";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Mud Utensils",
    img: Carousel1,
    imgAltText: "Mud Utensils",
    imgId: "monitor-img",
  },
  {
    _id: uuid(),
    categoryName: "Vegetables",
    img: Carousel2,
    imgAltText: "vegetables",
    imgId: "chair-img",
  },
  {
    _id: uuid(),
    categoryName: "Farming Tools",
    img: Carousel3,
    imgAltText: "farming tools",
    imgId: "keyboard-img",
  },
];
