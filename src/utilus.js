//ф-я роу буде приймати якийсь контент і повертати наступне
export function row(content, styles = ``) {
  return `<div class="row" style="${styles}">${content}</div>`;
}
export function col(content) {
  return `<div class="col-sm">${content}</div>`;
}
//функція css,яка буде приймати обєкти стилів і по замовчуванню буде рівнятись пустому обєкту
//один з методів це скористатися загальною функцвєю object в яку ми передаємо сам обєктб а на виході отримуємо масив keys
export function css(styles = {}) {
  const toString = (key) => `${key}:${styles[key]}`;
  return Object.keys(styles).map(toString).join(";");
}
export function block(type) {
  return `
  <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input
          class="form-control form-control-sm"
          name="value"
          placeholder="value"
        />
      </div>
      <div class="form-group">
        <input
          class="form-control form-control-sm"
          name="styles"
          placeholder="styles"
        >
      </div>
      <button type="submit" class="btn btn-primary btn-sm">enter</button>
    </form>
    <hr />
  `;
}
// const keys = Object.keys(styles);
// console.log(keys);
//пробіжемося по масиву за допомогою мепа, де на кожній літерації отримуємо певний key і необхідно повернути нову строчку із обєкта вже в стілі. Потім потрібно вказати значення, яке беремо з обєкту стайл за допомогою ключа key
//потім отримуємо array цих стилів і повертати будем array,які зєднаємо чере точку с комою
//  але даний нижче код можно зробити кращим
//   const array = keys.map((key) => {
//     return `${key}:${styles[key]}`;
//   });
//   return array.join(";");
// ми можемо зразу пробігтися по масиву через функцію меп, який буде преобразовувати всю цю структуру+зразу можемо застосувати метод джойн
//зробимо окрему функцію яка приводить в строку
