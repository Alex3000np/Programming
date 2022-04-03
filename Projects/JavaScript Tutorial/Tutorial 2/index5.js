//### Class

// class Animal {

//     static type = 'Animal type'

//     constructor(optiopns) {
//         this.name = optiopns.name
//         this.age = optiopns.age
//         this.hasTail = optiopns.hasTail
//     }
//     voice() { console.log('hi i am animal') }
// }

//const animal = new Animal({ name: 'default animal', age: 5, hasTail: true })


//### Inheritance
// class Cat extends Animal {
//     static type = 'Cat type'
//     constructor(options) {
//         super(options)              //calling animal prototype constr   
//         this.color = options.color  //adding new field
//     }

//     voice() {
//         //super.voice()
//         console.log('hi i am cat')
//     }

//     get ageInfo() { return this.age * 7 }

//     set ageInfo(newAge) { this.age = newAge }
// }
// const cat = new Cat({ name: 'Puss', age: 3, hasTail: true, color: 'pink' })


//### Example 

//A.
// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector)
//     }

//     hide() {
//         this.$el.style.display = 'none'
//     }
//     show() {
//         this.$el.style.display = 'block'
//     }
// }

//B.
// class Box extends Component {
//     constructor(options) {
//         super(options.selector)
//         this.$el.style.width = this.$el.style.height = options.size + 'px'
//         this.$el.style.background = options.color
//     }
// }

// const box1 = new Box({
//     selector: '#box1',
//     size: 100,
//     color: 'grey'
// })

// const box2 = new Box({
//     selector: '#box2',
//     size: 100,
//     color: 'black'
// })

//C.
// class Circle extends Box {
//     constructor(options) {
//         super(options)
//         this.$el.style.borderRadius = '50%'
//         this.$el.style.background = options.color
//     }
// }

// const circle = new Circle({
//     selector: '#circle1',
//     size: 90,
//     color: 'yellow'
// })