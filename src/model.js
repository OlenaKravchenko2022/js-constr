import image from "./images/blue.jpg";
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
  new TitleBlock("My personal site for my need", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #ff0099,#493240)",
      color: "#fff",
      "text-align": "center", //в кавичках, так як він через дефіс пішеться
      padding: "2rem",
    },
  }),
  new TextBlock("I will wrtie somethhing here later", {
    styles: {
      background: "linear-gradient(to right, #ff0099,#493240)",
      color: "#fff",
      "text-align": "center", //в кавичках, так як він через дефіс пішеться
      padding: "2rem",
    },
  }),
  new ColumnsBlock(
    [
      "111111111111111",
      "2222222222222222",
      "33333333333",
      "444444444444",
      "555555555",
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
      width: "500px",
      height: "auto",
    },
    alt: "it's a picture",
  }),
];
