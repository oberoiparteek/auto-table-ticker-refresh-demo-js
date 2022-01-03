import "./styles.css";
const updateDOM = (data) => {
  const table1 = document.getElementById("table1");
  table1.innerHTML = `
  <tr>
  <th>Name</th>
  <th>Value</th>
  <th>Time Updated</th>
</tr>
  `;
  data.forEach((photoItem) => {
    const trTempl = document
      .querySelector("#table-row-template")
      .content.cloneNode(true);
    const title = trTempl.querySelector(".title");
    const url = trTempl.querySelector(".url");
    const date = trTempl.querySelector(".date");

    title.textContent = photoItem.title;
    url.textContent = photoItem.url;
    date.textContent = Date().toLocaleUpperCase();
    table1.appendChild(trTempl);
  });
};

const fetchAndLoadData = () => {
  fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5")
    .then((res) => {
      res.json().then((data) => {
        updateDOM(data);
      });
    })
    .catch((e) => console.log(e));
};

const interval = setInterval(() => {
  if (document.readyState === "complete") {
    fetchAndLoadData();
    // clearInterval(interval);
  }
}, 5000);
