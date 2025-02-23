"use strict"
// #1. setItem - localStoragega qandaydir malumot qoshish
// localStorage.setItem('Name:', 'Latf');

// // #2. getItem - localStorage dan malumot oladi: 
// const name1 = localStorage.getItem('Name:')
// if (name1 === 'Latif') {
//     document.body.style.backgroundColor = 'green'
// } else {
//     document.body.style.backgroundColor = 'red'
// }

// #3. loacalStorage.clear() - loaclStoragedagi barcha malumotlarni o'chirib tashlaydi
// #4. localStorage.removeItem('Name:') // key boyicha o'chirib tashlaydi

const form = document.querySelector("form"),
    postParent = document.querySelector(".posts")

form.addEventListener('submit', (event) => {
    event.preventDefault() // form ni default hodisadan tozalaydi
    const formData = new FormData(form) // formdagi malumotlarni olish
    const object = {} // object yaratamiz, chunki formDatadagi malumotlarni objectga o'tkazishimiz kk
    formData.forEach((value, key) => {
        object[key] = value // objectga key va valuni qoshamiz
    })

    const db = JSON.parse(localStorage.getItem("posts")) // JSON parse chuni localStorage string ko'rinishda saqlanishi un
    if (db) {
        localStorage.setItem("posts", JSON.stringify([...db, object])) // db ni localStorage JOSN ko'rinishda saqlaymiz
    } else {
        localStorage.setItem("posts", JSON.stringify([object])) // agar db bo'lmasa yangi array yaratamiz
    }
})


getPosts()

function getPosts() {
    const posts = JSON.parse(localStorage.getItem("posts")) // localStorage dan malumotlarni olish
    posts.forEach((item, index) => {
        const postEl = document.createElement("div")
        postEl.classList.add("post")

        postEl.innerHTML = ` <h4> <b>#${index + 1}</b> ${item.title} </h4>
      <p>${item.body}</p>
        `
        postParent.append(postEl)
    })
}