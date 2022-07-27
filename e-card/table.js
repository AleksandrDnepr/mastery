console.log('table js')

let head = `<tr class="headTable">
<th></th>
<th colspan="2">Name</th>
<th colspan="2">User credentials</th>
<th>Last Transcation</th>
<th>Status</th>
<th>End date</th>
<th>Total used</th>
<th></th>
</tr>`

const arr = [
    {
        id: 1,
        companyName: 'Figma',
        userCard: 2468,
        userMail: 'Itai Bracha31@gmail.com',
        lastTrx: 02 - 06 - 22,
        sumTrx: 783.22,
        status: 'done',
        endDate: 12 - 12 - 22,
        total: 783.22,
        cardType: 'Visa',
        userName: 'Itai Bracha',
    },
    {
        id: 2,
        companyName: 'Adobe XD',
        userCard: 2468,
        userMail: 'Itai Bracha31@gmail.com',
        lastTrx: 02 - 06 - 22,
        sumTrx: 783.22,
        status: 'done',
        endDate: 12 - 12 - 22,
        total: 783.22,
        cardType: 'Visa',
        userName: 'Itai Bracha',
    },
    {
        id: 3,
        companyName: 'Mailchimp',
        userCard: 2468,
        userMail: 'Itai Bracha31@gmail.com',
        lastTrx: 02 - 06 - 22,
        sumTrx: 2468,
        status: 'done',
        endDate: 12 - 12 - 22,
        total: 783.22,
        cardType: 'Visa',
        userName: 'Itai Bracha',
    },
    {
        id: 4,
        companyName: 'WIX',
        userCard: 2468,
        userMail: 'Itai Bracha31@gmail.com',
        lastTrx: 02 - 06 - 22,
        sumTrx: 783.22,
        status: 'done',
        endDate: 12 - 12 - 22,
        total: 783.22,
        cardType: 'Visa',
        userName: 'Itai Bracha',
    },
    {
        id: 5,
        companyName: 'Youtube',
        userCard: 2468,
        userMail: 'Itai Bracha31@gmail.com',
        lastTrx: 02 - 06 - 22,
        sumTrx: 783.22,
        status: 'done',
        endDate: 12 - 12 - 22,
        total: 783.22,
        cardType: 'Visa',
        userName: 'Itai Bracha',
    },
    {
        id: 6,
        companyName: 'TestMew',
        userCard: '***7777',
        userMail: 'Itai Bracha31@gmail.com',
        lastTrx: 02 - 06 - 22,
        sumTrx: 7777,
        status: 'done',
        endDate: 12 - 12 - 22,
        total: 783.22,
        cardType: 'Visa',
        userName: 'Itai Bracha',
    },
    {
        id: 7,
        companyName: 'Poland',
        userCard: '***7777',
        userMail: 'Itai Bracha31@gmail.com',
        lastTrx: 02 - 06 - 22,
        sumTrx: 2468,
        status: 'done',
        endDate: 12 - 12 - 22,
        total: 783.22,
        cardType: 'MasterCard',
        userName: 'Aleks',
    },
]

const arr2 = [
    {
        id: 5,
        companyName: 'you found it',
        userCard: 777,
        userMail: 'make it cool@gmail.com',
        lastTrx: '02-06-22',
        sumTrx: 100,
        status: 'done',
        endDate: '12-12-22',
        total: 1000,
        cardType: 'Visa',
        userName: 'Itai Bracha',
    },
]

function fill(arr) {
    arr.map((item) => {
        console.log(item)

        document.getElementById('test').innerHTML += `<tr id="adding">
        <td><input type="checkbox" /></td>
        <td><img src="images/figma.png" alt="first" /></td>
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
        <td class="done">
          <img src="images/Ellipse 1066.png" alt="Ellipse" /> ${item.status}
        </td>
        <td>${item.endDate}</td>
        <td>${item.total}</td>
        <td class="dot">
          <img src="images/dot.png" alt="dot" />
          <img src="images/dot.png" alt="dot" />
          <img src="images/dot.png" alt="dot" />
        </td>
      </tr>`
    })
}

const fillNew = arr.map((item) => {
    console.log(item)

    document.getElementById('test').innerHTML += `<tr>
            <td><input type="checkbox" /></td>
            <td><img src="images/figma.png" alt="first" /></td>
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
            <td class="done">
              <img src="images/Ellipse 1066.png" alt="Ellipse" /> ${item.status}
            </td>
            <td>${item.endDate}</td>
            <td>${item.total}</td>
            <td class="dot">
              <img src="images/dot.png" alt="dot" />
              <img src="images/dot.png" alt="dot" />
              <img src="images/dot.png" alt="dot" />
            </td>
          </tr>`
})

function change() {
    const inp = document.getElementById('input').value
    console.log('func change started')
    let arrNew = arr.filter((item) => {
        let temp = []
        temp = Object.values(item)
        console.log(temp + 'nnjmm')
        console.log('try object')
        console.log(temp.join('') + 'this is string')
        let str = ''
        str = temp.join('').toLowerCase()
        // item.sumTrx==inp||item.userCard==inp
        if (str.includes(inp.toLowerCase())) {
            console.log(item)
            return true
        }
    })
    console.log(arrNew)
    console.log('filter works')
    if (inp != '') {
        console.log('funct change works')
        document.getElementById('test').innerHTML = ''
        document.getElementById('test').innerHTML = head
        fill(arrNew)
    } else {
        console.log('in else')
        document.getElementById('test').innerHTML = ''
        document.getElementById('test').innerHTML = head
        fill(arr)
    }
}

find = document.getElementById('find')
find.addEventListener('click', change)
