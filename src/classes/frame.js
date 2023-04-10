import { Site } from "./site";
import { Sidebar } from "./sidebar";

export class Frame {
  constructor(model) {
    this.model = model;
  }

  init() {
    const site = new Site("#site");

    site.render(this.model);

    //передаємо колбек, який показує, що треба змінити модель якщо зміниться умова ()=>{}
    const updateCallback = (newBlock) => {
      this.model.push(newBlock);
      site.render(this.model);
    };
    new Sidebar("#panel", updateCallback);
  }
}
