import { model } from "./model.js";
import { templates } from "./templates.js";
import "./styles/app.css";

const site = document.querySelector("#site");
//змінюємо задокументований код на простіший так як templates це обєкт, тому мі можемо звернутись до нього як до обєкту
// console.log(templates["title"]);
model.forEach((block) => {
  // создаём html пустой блок, куда будем всё вкладывать
  // let html = "";
  //   if (block.type === "title") {
  //     html = title(block);
  //   } else if (block.type === "text") {
  //     html = text(block);
  //   } else if (block.type === "columns") {
  //     html = columns(block);
  //   } else if (block.type === "image") {
  //     html = image(block);
  //   }

  const toHTML = templates[block.type];
  if (toHTML) {
    site.insertAdjacentHTML("beforeend", toHTML(block));
  }
});
