"use strict";

var persona = {
    name: 'Luis',
    surname: 'Gómez',
    fullName: function () {
        console.log(this.name + ' ' + this.surname);
    }
};

persona.fullName();

setTimeout(persona.fullName.bind(persona),1000);