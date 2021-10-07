'use strict';

let title;
let screens;
let screenPrice;
let adaptive;

let service1;
let service2;
let servicePrice;

let fullPrice;
let servicePercentPrice;
let allServicePrices;

let rollback = 10;

function isNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

function asking() {
    title = prompt('Как называется твой проект?', 'Свартальхейм');
    screens = prompt('Какие типы экранов нужно разработать?', 'Сложные');
    screenPrice = prompt('Сколько будет стоить данная работа?');

    if (!isNumber(screenPrice)) {
        do {
            screenPrice = prompt('Сколько будет стоить данная работа?');
        } while(!isNumber(screenPrice));
    } 

    adaptive = confirm('Нужен ли адаптив на сайте?');
}

function getAllServicePrices(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i] = prompt('Какой дополнительный тип услуги нужен?', 'Метрика');
        servicePrice = prompt('Сколько это будет стоить?');
        while(!isNumber(servicePrice)) servicePrice = prompt('Сколько это будет стоить?');
        sum += +servicePrice.trim();
    }
    return +sum;
}

function getFullPrice() {
    return +allServicePrices + +screenPrice;
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
    return +fullPrice - (+fullPrice * (+rollback / 100));
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

asking();
allServicePrices = getAllServicePrices([service1, service2]);
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(+screenPrice);
showTypeOf(adaptive);

showTypeOf(screens);
showTypeOf(+servicePrice);

showTypeOf(fullPrice);
showTypeOf(servicePercentPrice);
showTypeOf(allServicePrices);

console.log(getRollBack(fullPrice));






