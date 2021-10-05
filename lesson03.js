'use strict';

let title = prompt('Как называется твой проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Нужен ли адаптив на сайте?');

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');

let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
//let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));
let allServicePrices = getAllServicePrices();

let rollback = 10;


function getAllServicePrices() {
    return servicePrice1 + servicePrice2;
}

function getFullPrice() {
    return allServicePrices + screenPrice;
}

function getTitle() {
    let count = 0;
    for (let i = 0; i < title.length; i++) {
        if (title[i] == ' ') count++;
        else break; 
    }
    return title[count].toUpperCase() + title.slice(count + 1).toLowerCase();
}

function getServicePercentPrices() { 
    return allServicePrices - (fullPrice * (rollback / 100));
}

function showTypeOf(variable) {
    console.log(variable, typeof variable);
}

function getRollBack(price) {
    if (price >= 30000) return ('Даем скидку 10%');
    else if (price <= 30000 && price >= 15000) return ('Даем скидку 5%');
    else if (price <= 15000 && price >= 0) return ('Скидка не предусмотрена');
    else return ('error');
}

showTypeOf(title);
showTypeOf(screens);
showTypeOf(adaptive);

console.log(screens.split(' '));
console.log(getRollBack(fullPrice));
console.log(getServicePercentPrices);
console.log(getTitle());




