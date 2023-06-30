let car = {
    auto: "BIG",
    model: "Traktor",
    year: 1997,
    medSpeed: 22,

    car1: function() {
        let info = '';
        info += `Производитель: ${car.auto}\n`;
        info += `Модель: ${car.model}\n`;
        info += `Год: ${car.year} г.\n`;
        info += `Cкорость: ${car.medSpeed} км/ч`;
        return info;
    },

    car2: function (distance) {
        let res = distance/this.medSpeed;
        res += res / 4;
        return `Чтобы проехать ${distance} км,\nпотребуется ${res.toFixed(0)} часов`;
    },

    car3: function() {
        let currentDate = new Date();
        let resultDate = currentDate.getFullYear() - this.year;
        return `Возраст авто: ${resultDate} лет.`;
    }
    
};

alert(car.car1());
alert(car.car2(+prompt('расстояние:')));
alert(car.car3());