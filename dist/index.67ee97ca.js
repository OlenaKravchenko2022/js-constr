function e(e){return`\n        <div class="row">\n          <div class="col-sm">\n            <h1>${e.value}</h1>\n          </div>\n        </div>\n        `}function n(e){return`<div class="row">\n          <div class="col-sm">\n            <p>\n              ${e.value}\n            </p>\n          </div>\n        </div>`}function t(e){return`<div class="row">\n                    ${e.value.map((e=>`<div class="col-sm">\n                          ${e}\n                     </div>`)).join("")}\n    </div>\n      `}function l(e){return`\n    <div class="row"><img src="${e.value}"/></div>`}const i=document.querySelector("#site");[{type:"title",value:"HEllo world from JS"},{type:"text",value:"I will wrtie somethhing here later"},{type:"columns",value:["111111111111111","2222222222222222","33333333333","444444444444","555555555"]},{type:"image",value:"./images/blue.jpg"}].forEach((s=>{let o="";"title"===s.type?o=e(s):"text"===s.type?o=n(s):"columns"===s.type?o=t(s):"image"===s.type&&(o=l(s)),i.insertAdjacentHTML("beforeend",o)}));