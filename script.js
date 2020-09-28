var age = prompt("Сколько вам лет?")
if (age>=0 && age<=18){
    alert("Вы должны учиться!")
} else if (age>18 && age<50){
    alert("Вам нужно работать!")
} else if (age>=50 && age<=59){
    alert("Вам скоро на пенсию!")
}  else if (age>=60 && age<=150){
    alert("Вы пенсионер!")
} else {
    alert("Что-то пошло не так...")
}