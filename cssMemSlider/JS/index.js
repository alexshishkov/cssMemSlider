let data = [
    {
        img: "./assets/Егор.jpg",
        text: `„Рок-н-ролл — это действительно народная музыка.
        Вообще всё, что делается честно, изо всех сил, отчаянно
        и здорово, — всё народное.“ Егор Летов (Гр.Об.)`
    },
    {
        img: "./assets/Sid.jpg",
        text: `„Возможно я умру прежде чем мне исполнится 25,
        но когда это случится, я проживу свою жизнь так, как я хотел.“
        Сид Вишес (Sex Pistols)`
    },
    {
        img: "./assets/Pol.jpg",
        text: `„Я горжусь тем, что на моей душе стоит клеймо рок-н-ролла!“ 
        Пол Маккартни (Beatles)`
    },
    {
        img: "./assets/джорш.jpg",
        text: `„Есть ль у дьявола свое радио? Да! Это сплетни.“
        Джордж Харрисон, (Beatles)`
    }
]

let buttons = document.querySelectorAll('.control__wrap')
let button = document.querySelectorAll('control__button')
let img = document.querySelector('.content__img')
let text = document.querySelector('.content__text')
let index = 0


function getIndex (e) {
    index = e.target.dataset.button
    getData(index, data)
    return index
}
button.forEach((e) => {
    e.addEventListener('click', getIndex)
})

buttons.forEach((e) => {
  e.addEventListener('click', getIndex)
    }
);

function getData (index, data) {
    img.src = data[index].img
    text.textContent = data[index].text
}

getData(index, data)







