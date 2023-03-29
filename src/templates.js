// делаем функции для того чтобы код был читабельней и понятнее
export function title(block) {
  return `
        <div class="row">
          <div class="col-sm">
            <h1>${block.value}</h1>
          </div>
        </div>
        `;
}
export function text(block) {
  return `<div class="row">
          <div class="col-sm">
            <p>
              ${block.value}
            </p>
          </div>
        </div>`;
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

export function columns(block) {
  const html = block.value.map(
    (item) => `<div class="col-sm">
                          ${item}
                     </div>`
  );

  return `<div class="row">
                    ${html.join("")}
    </div>
      `;
}

export function image(block) {
  return `
    <div class="row"><img src="${block.value}"/></div>`;
}
