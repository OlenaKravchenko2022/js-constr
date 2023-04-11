import image from "./images/ring.jpg";

import {
  TitleBlock,
  TextBlock,
  ColumnsBlock,
  ImageBlock,
} from "./classes/block";
//додамо опцію options, яка буде допомогати приймати різні варіантиб де ми будемо зберігати властивості для цього блоку
//можемо стилі прописати в форматі обєкта, зменшуючи таким чином його довжину
// styles:
//   "background:linear-gradient(to right, #ff0099,#493240); color: #fff; text-align: center; padding: 2rem",
export const model = [
  new TitleBlock("What do you want to know about hollidays", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #ff0099,#493240)",
      color: "#fff",
      "text-align": "center", //в кавичках, так як він через дефіс пішеться
      padding: "2rem",
    },
  }),
  new TextBlock("be patient to other people", {
    styles: {
      background: "linear-gradient(to right, #ff0099,#493247)",
      color: "#fff",
      "text-align": "center", //в кавичках, так як він через дефіс пішеться
      padding: "2rem",
    },
  }),
  new ColumnsBlock(
    [
      "Better to make something usefull",
      "you have to make new world for yourself",
      "to read a book",
      "go play tennis",
      "to prepare big cacke for friends",
    ],
    {
      styles: {
        background: "linear-gradient(to right, #ff0099,#493240)",
        color: "#fff",
        "text-align": "center", //в кавичках, так як він через дефіс пішеться
        padding: "2rem",
      },
    }
  ),

  new ImageBlock(image, {
    styles: {
      display: "flex",
      "justify-content": "center",
      padding: "2rem",
    },
    imageStyle: {
      width: "400px",
      height: "auto",
    },
    alt: "it's a picture",
  }),
];
