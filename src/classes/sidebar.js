import { block } from "../utilus";
import { TextBlock, TitleBlock } from "./block";

export class Sidebar {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector);
    this.update = updateCallback;
    this.init();
  }
  //створюємо геттор в классі, він не мусить мати якісь параметри
  //отримуємо темплейт як змінну
  //створюємо споможний метод инит

  init() {
    this.$el.insertAdjacentHTML("afterbegin", this.template);
    this.$el.addEventListener("submit", this.add.bind(this));
  }

  get template() {
    return [block("text"), block("title")].join("");
  }
  add(event) {
    event.preventDefault();

    const type = event.target.name;
    const value = event.target.value.value;
    const styles = event.target.styles.value;

    const newBlock =
      type === "text"
        ? new TextBlock(value, { styles })
        : new TitleBlock(value, { styles });
    //зробимо таке значенння коротшим, тобто зробимо це тернарним виразом: спочатку прописуємо умову а потім через знак питання пишимо, що умови які поадають після знака питання, якщо ні, то :
    // if (type === "text") {
    //   newBlock = new TextBlock(value, { styles });
    // } else {
    //   newBlock = new TitleBlock(value, { styles });
    // }

    this.update(newBlock);
    event.target.value.value = "";
    event.target.styles.value = "";
    //щоб сайт не дублювався постійно робимо контроль
  }
}
