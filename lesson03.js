'use strict';

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    service1: '',
    service2: '',
    servicePrice: 0,
    fullPrice: 0,
    servicePercentPrice: 0, 
    allServicePrices: 0,
    rollback: 10,

    start: function() {
        this.asking();
        this.allServicePrices = this.getAllServicePrices([this.service1, this.service2]);
        this.fullPrice = this.getFullPrice();
        this.servicePercentPrice = this.getServicePercentPrices();
        this.title = this.getTitle(); 
        this.logger();
    },

    logger: function() {
        for (let key in appData) console.log(key, appData[key]);
    },

    asking: function() {
        this.title = prompt('Как называется твой проект?', 'Свартальхейм');
        this.screens = prompt('Какие типы экранов нужно разработать?', 'Сложные');
        this.screenPrice = prompt('Сколько будет стоить данная работа?');
    
        while(!this.isNumber(this.screenPrice)) {
            this.screenPrice = prompt('Сколько будет стоить данная работа?');
        }
    
        this.adaptive = confirm('Нужен ли адаптив на сайте?');
        
    },

    isNumber: function(num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    getAllServicePrices: function(arr) {
        let sum = 0;
    
        for (let i = 0; i < arr.length; i++) {
            arr[i] = prompt('Какой дополнительный тип услуги нужен?', 'Метрика');
            this.servicePrice = prompt('Сколько это будет стоить?');
            while(!this.isNumber(this.servicePrice)) this.servicePrice = prompt('Сколько это будет стоить?');
            sum += +this.servicePrice.trim();
        }
        return +sum;
    },
 
   getFullPrice: function () {
        return +this.allServicePrices + +this.screenPrice;
    },
    
   getTitle: function () {
        let count = 0;
        for (let i = 0; i < this.title.length; i++) {
            if (this.title[i] == ' ') count++;
            else break; 
        }
        return this.title[count].toUpperCase() + this.title.slice(count + 1).toLowerCase();
    },
    
   getServicePercentPrices: function () { 
        return +this.fullPrice - (+this.fullPrice * (+this.rollback / 100));
    },
    
   getRollBack: function (price) {
        if (price >= 30000) return ('Даем скидку 10%');
        else if (price <= 30000 && price >= 15000) return ('Даем скидку 5%');
        else if (price <= 15000 && price >= 0) return ('Скидка не предусмотрена');
        else return ('error');
   },
}

appData.start();





