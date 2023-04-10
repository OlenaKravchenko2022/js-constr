import { model } from "./model.js"; //цю страку можна буде витерти, бо будемо використовувати зис модел
// import { templates } from "./templates.js";

import { Frame } from "./classes/frame";
import "./styles/app.css";

new Frame(model).init();

//передаємо колбек, який показує, що треба змінити модель якщо зміниться умова ()=>{}

//змінюємо задокументований код на простіший так як templates це обєкт, тому мі можемо звернутись до нього як до обєкту
// console.log(templates["title"]);
// model.forEach((block) => {
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

// const toHTML = templates[block.type];
// if (false) {
// site.insertAdjacentHTML("beforeend", block.toHTML());
// }
// });
