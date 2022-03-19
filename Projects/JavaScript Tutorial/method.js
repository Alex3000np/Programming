//### Method long 
const myCity = {
    city: 'new york',
    cityGreeting: function () { console.log('hi from ' + this.city) }
}
//### Method short 
const myCityB = {
    city: 'prague',
    cityGreeting() { console.log('hi from ' + this.city) }
}

myCity.cityGreeting()
myCityB.cityGreeting()
