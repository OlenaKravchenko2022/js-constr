import image from "./images/blue.jpg";
//додамо опцію options, яка буде допомогати приймати різні варіантиб де ми будемо зберігати властивості для цього блоку
export const model = [
  {
    type: "title",
    value: "My personal site for my need",
    options: {
      tag: "h2",
      styles: `background:linear- gradient(to right, #ff0099,#493240); color: #fff`,
    },
  },
  { type: "text", value: "I will wrtie somethhing here later" },
  {
    type: "columns",
    value: [
      "111111111111111",
      "2222222222222222",
      "33333333333",
      "444444444444",
      "555555555",
    ],
  },
  { type: "image", value: image },
];
