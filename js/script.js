// Задание выполняйте в отдельном репозитории или в песочнице codepen
// 1) Добавьте на HTML-страницу пустой список ul.
// 2) Через prompt запрашивайте у пользователя строку, программа должна работать в бесконечном цикле или в бесконечной рекурсии, условия выхода в 6 пункте
// 3) Добавляйте все строки внутрь списка ul, текст должен быть внутри li.
// 4) Если пользователь введёт del, то последний элемент удаляется
// 5) Если пользователь введёт clear, то список ul очищается
// 6) Если пользователь введёт exit или нажмет отмена, то программа завершает выполнение
// Если пользователь ничего не ввел или ввел только пробелы , то пункт списка не должен быть добавлен
// Программу максимально декомпозируйте
// Чистые функции для вычисления и процедуры для запроса данных от пользователя и вывод на страницу

// Внешний вид на ваше усмотрение

"use strict";

const list = document.querySelector(".list");
let timeout;

const isEmpty = (str) => {
    if (str && str.trim().length) {
        return true;
    }
    return false;
};

const newItem = (str) => {
    if (str === "clear") {
        list.innerHTML = "";
        timeout = setTimeout(() => {
            alert("Список пуст");
    }, 0)
    } else if (str === "del") {
    list.lastChild.remove();    
    timeout = setTimeout(() => {
        alert("Строка удалена");
    }, 0)
    } else {
    const item = document.createElement("li");
    item.textContent = str;
    list.append(item);
    }
    timeout = setTimeout(start, 300); 
};

const start = () => {
    let text;

    do {
    text = prompt("Введите текст");

    if (text === null || text === "exit") {
        alert("Пока");
        return;
    }    
    } while(!isEmpty(text))
    
    newItem(text);
};

start();
