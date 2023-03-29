import { model } from "./model.js";
import { title, text, columns, image } from "./templates.js";

const site = document.querySelector("#site");

model.forEach((block) => {
  // создаём html пустой блок, куда будем всё вкладывать
  let html = "";
  if (block.type === "title") {
    html = title(block);
  } else if (block.type === "text") {
    html = text(block);
  } else if (block.type === "columns") {
    html = columns(block);
  } else if (block.type === "image") {
    html = image(block);
  }
  site.insertAdjacentHTML("beforeend", html);
});
