import arr from "./data.js";

let head = `<tr class="headTable">
<th></th>
<th colspan="2">Name</th>
<th colspan="2">User credentials</th>
<th>Last Transcation</th>
<th>Status</th>
<th>End date</th>
<th>Total used</th>
<th></th>
</tr>`;

function fill(arr) {
  arr.map((item) => {
    document.getElementById("test").innerHTML += `<tr id="adding">
        <td><input type="checkbox" /></td>
        <td><img src="images/${item.image}" alt="first" /></td>
        <td>
          <table>
            <tr>
              <td class="upRow">${item.companyName}</td>
            </tr>
            <tr>
              <td>${item.userMail}</td>
            </tr>
          </table>
        </td>
        <td>
          <table>
            <tr>
              <td class="upRow" >${item.cardType}</td>
            </tr>
            <tr>
              <td>${item.userCard}</td>
            </tr>
          </table>
        </td>
        <td>
          <table>
            <tr>
              <td class="upRow">${item.userName}</td>
            </tr>
            <tr>
              <td>${item.userMail}</td>
            </tr>
          </table>
        </td>
        <td>
          <table>
            <tr>
              <td class="upRow">${item.lastTrx}</td>
            </tr>
            <tr>
              <td>${item.sumTrx}</td>
            </tr>
          </table>
        </td>
        <td class="${item.status}">
          <img src="images/${item.status_image}" alt="Ellipse" /> ${item.status}
        </td>
        <td>${item.endDate}</td>
        <td>${item.total}</td>
        <td class="dot">
          <img src="images/dot.png" alt="dot" />
          <img src="images/dot.png" alt="dot" />
          <img src="images/dot.png" alt="dot" />
        </td>
      </tr>`;
  });
}

const fillNew = arr.map((item) => {
  document.getElementById("test").innerHTML += `<tr>
            <td><input type="checkbox" /></td>
            <td><img src="images/${item.image}" alt="first" /></td>
            <td>
              <table>
                <tr>
                  <td class="upRow">${item.companyName}</td>
                </tr>
                <tr>
                  <td>${item.userMail}</td>
                </tr>
              </table>
            </td>
            <td>
              <table>
                <tr>
                  <td class="upRow" >${item.cardType}</td>
                </tr>
                <tr>
                  <td>${item.userCard}</td>
                </tr>
              </table>
            </td>
            <td>
              <table>
                <tr>
                  <td class="upRow">${item.userName}</td>
                </tr>
                <tr>
                  <td>${item.userMail}</td>
                </tr>
              </table>
            </td>
            <td>
              <table>
                <tr>
                  <td class="upRow">${item.lastTrx}</td>
                </tr>
                <tr>
                  <td>${item.sumTrx}</td>
                </tr>
              </table>
            </td>
            <td class="${item.status}">
              <img src="images/${item.status_image}" alt="Ellipse" /> ${item.status}
            </td>
            <td>${item.endDate}</td>
            <td>${item.total}</td>
            <td class="dot">
              <img src="images/dot.png" alt="dot" />
              <img src="images/dot.png" alt="dot" />
              <img src="images/dot.png" alt="dot" />
            </td>
          </tr>`;
});

function change() {
  const inp = document.getElementById("input").value;
  console.log("func change started");
  let arrNew = arr.filter((item) => {
    let temp = [];
    temp = Object.values(item);
    console.log(temp + "nnjmm");
    console.log("try object");
    console.log(temp.join("") + "this is string");
    let str = "";
    str = temp.join("").toLowerCase();
    // item.sumTrx==inp||item.userCard==inp
    if (str.includes(inp.toLowerCase())) {
      console.log(item);
      return true;
    }
  });
  console.log(arrNew);
  console.log("filter works");
  if (inp != "") {
    console.log("funct change works");
    document.getElementById("test").innerHTML = "";
    document.getElementById("test").innerHTML = head;
    fill(arrNew);
  } else {
    console.log("in else");
    document.getElementById("test").innerHTML = "";
    document.getElementById("test").innerHTML = head;
    fill(arr);
  }
}

find = document.getElementById("find");
find.addEventListener("click", change);
