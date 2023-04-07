import { block } from "../utilus";

export class Sidebar {
  constructor(selector) {
    this.$el = document.querySelector(selector);
    this.init();
  }
  //створюємо геттор в классі, він не мусить мати якісь параметри
  //отримуємо темплейт як змінну
  //створюємо споможний метод инит

  init() {
    this.$el.insertAdjacentHTML("afterbegin", this.template);
    this.$el.addEventListener("submit", this.add);
  }

  get template() {
    return [block("text"), block("title")].join("");
  }
  add(event) {
    event.preventDefault();

    const type = event.target.name;
    const value = event.target.value.value;
    const style = event.target.value.style;
  }
}
