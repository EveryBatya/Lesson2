'use strict';

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    services: {},
    servicePrice: 0,
    fullPrice: 0,
    servicePercentPrice: 0, 
    allServicePrices: 0,
    rollback: 10,

    start: function() {
        this.asking();
        this.addPrices();
        this.getFullPrice();
        this.getServicePercentPrices();
        this.getTitle(); 

        this.logger();
    },

    logger: function() {
        console.log(this.getRollBack(this.fullPrice));
        for (let key in appData) console.log(key, appData[key]);
    },

    asking: function() {

        this.title = this.getStrAnswer(this.title, 'Как называется твой проект?');
        console.log(this.title);
    
        for (let i = 0; i < 2; i++) {
            let name;
            name = this.getStrAnswer(name, 'Какие типы экранов нужно разработать?');

            let price;
            price = this.getNumAnswer(price, 'Сколько это будет стоить?');

            this.screens.push({id: i, name: name, price: price});
        }

        for (let i = 0; i < 2; i++) {
            let name;
            name = this.getStrAnswer(name, 'Какой дополнительный тип услуги нужен?');

            let price;
            price = this.getNumAnswer(price, 'Сколько это будет стоить?');
            
            this.services[name] = +price;
        }
    
        this.adaptive = confirm('Нужен ли адаптив на сайте?');
        
    },

    addPrices: function() {
        for (let screen of this.screens) this.screenPrice += +screen.price;
        for (let key in this.services) this.allServicePrices = this.services[key];
    },
 
    isNumber: function(num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    getNumAnswer: function(answer, str) {
        do {
            answer = prompt(str);
        } while (!this.isNumber(answer));
        return answer;
    },

    getStrAnswer: function(answer, str) {
        do {
            answer = prompt(str);
        } while (this.isNumber(answer));
        return answer;
    },
 
    getFullPrice: function() {
        this.fullPrice = +this.allServicePrices + +this.screenPrice;
    },
    
   getTitle: function() {
        let count = 0;
        for (let i = 0; i < this.title.length; i++) {
            if (this.title[i] == ' ') count++;
            else break; 
        }
        this.title = this.title[count].toUpperCase() + this.title.slice(count + 1).toLowerCase();
    },
    
   getServicePercentPrices: function() { 
        this.servicePercentPrice = +this.fullPrice - (+this.fullPrice * (+this.rollback / 100));
    },
    
   getRollBack: function(price) {
        if (price >= 30000) return ('Даем скидку 10%');
        else if (price <= 30000 && price >= 15000) return ('Даем скидку 5%');
        else if (price <= 15000 && price >= 0) return ('Скидка не предусмотрена');
        else return ('error');
   },
}

appData.start();





