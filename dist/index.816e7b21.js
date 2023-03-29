const model = [
    {
        type: "title",
        value: "HEllo world from JS"
    },
    {
        type: "text",
        value: "I will wrtie somethhing here later"
    },
    {
        type: "columns",
        value: [
            "111111111111111",
            "2222222222222222",
            "33333333333",
            "444444444444",
            "555555555"
        ]
    },
    {
        type: "image",
        value: "./images/blue.jpg"
    }
];
const site = document.querySelector("#site");
model.forEach((block)=>{
    // создаём html пустой блок, куда будем всё вкладывать
    let html = "";
    if (block.type === "title") html = title(block);
    else if (block.type === "text") html = text(block);
    else if (block.type === "columns") html = columns(block);
    else if (block.type === "image") html = image(block);
    site.insertAdjacentHTML("beforeend", html);
});
// делаем функции для того чтобы код был читабельней и понятнее
function title(block) {
    return `
        <div class="row">
          <div class="col-sm">
            <h1>${block.value}</h1>
          </div>
        </div>
        `;
}
function text(block) {
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
function columns(block) {
    const html = block.value.map((item)=>`<div class="col-sm">
                          ${item}
                     </div>`);
    return `<div class="row">
                    ${html.join("")}
    </div>
      `;
}
function image(block) {
    return `
    <div class="row"><img src="${block.value}"/></div>`;
}

//# sourceMappingURL=index.816e7b21.js.map
