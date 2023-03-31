// делаем функции для того чтобы код был читабельней и понятнее
//функції маєть схожу конструкцію, тому ми можемо створити однакову для всіх утіліту utilus.js

import { row, col } from "./utilus";

function title(block) {
  //функція яка генерує це приймає цілий блок
  const tag = block.options.tag ?? "h1";
  //передаємо обєкт styles
  const styles = block.options.styles;
  //спрощуємо дану функцію і замінюємо на меншу
  // return `
  //       <div class="row">
  //         <div class="col-sm">
  //           <h1>${block.value}</h1>
  //         </div>
  //       </div>
  //       `;

  //инлайн стилі застосовуємо до самої строчки row
  return row(col(`<${tag}>${block.value}</${tag}>`));
}
function text(block) {
  // return `<div class="row">
  //         <div class="col-sm">
  //           <p>
  //             ${block.value}
  //           </p>
  //         </div>
  //       </div>`;
  return row(col(`<p>${block.value}</p>`));
}
// для того, чтобсгенерировать необходимое колличество колонок нам надо сделать цикл по массиву. в самой функции columns будем генерировать контент
// function columns(block) {
//   let html = "";
// далее мы пробегаемся по массиву с помощью метода forEach, где item-это контент массива, затем к строке html добовляем шаблон
//   block.value.forEach((item) => {
//     html += `<div class="col-sm">
//             <p>
//                ${item}
//             </p>
//           </div>`;
//   });
//   return `<div class="row">
//                     ${html}
//     </div>
//       `;
// }

// можем использовать метод map, который помогает сразу трансформировать метод во что то
// метод map возвращает нам массив, поэтому , чтобы убрать запятые мы должны соединить столбцы с помощью метода join

function columns(block) {
  //скоротимо ще цю функцію
  // const html = block.value.map(
  //   (item) => col(item)
  const html = block.value.map(
    col
    // `<div class="col-sm">
    //                       ${item}
    //                  </div>`
  );

  // return `<div class="row">
  //                   ${html.join("")}
  //   </div>
  //     `;
  return row(html.join(""));
}

function image(block) {
  // return `
  //   <div class="row"><img src="${block.value}"/></div>`;
  return row(`<img src="${block.value}"/>`);
}

export const templates = {
  title,
  text,
  columns,
  image,
};
