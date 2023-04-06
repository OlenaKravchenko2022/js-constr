export class Sidebar {
  constructor(selector) {
    this.el = document.querySelector(selector);

    this.el.insertAdjacentHTML("afterbegin", "<h2>test</h2>");
  }
}
