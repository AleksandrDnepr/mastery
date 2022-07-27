let resArr = []

for (let i = 0; i < localStorage.length; i++) {
    let item = localStorage.key(i)
    console.log(item)
    console.log(localStorage.key(i))
    resArr.push({
        name: localStorage.key(i),
        score: localStorage.getItem(item),
    })
}
console.log(resArr)

const fillRes = [
    { name: 'Aleks', score: 22 },
    { name: 'Masha', score: 21 },
    { name: 'Misha', score: 20 },
]

const fillResults = resArr.map((item) => {
    //console.log(item);

    document.getElementById('rec').innerHTML += `<tr><td>${item.name}</td>
<td>${item.score}</td>
</tr>`
})
