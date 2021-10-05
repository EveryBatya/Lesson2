'use strict';

let title = prompt('Как называется твой проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = prompt('Нужен ли адаптив на сайте?');

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');

let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

let fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = fullPrice - 1289;

switch (true) {
    case fullPrice >= 30000:
        console.log('Даем скидку 10%');
        break;
    case fullPrice <= 30000 && fullPrice >= 15000:
        console.log('Даем скидку 5%');
        break;
    case fullPrice <= 150000 && fullPrice >= 0:
        console.log('Скидка не предусмотрена');
        break;
    case fullPrice < 0:
        console.log('error');
        break;
}




