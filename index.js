for (var i = 0; i < document.getElementsByClassName("drum").length; i++) {
    document.getElementsByClassName("drum")[i].addEventListener("click", function () {
        var clicled = this.innerHTML;
        activekey(clicled);
        console.log(this.innerHTML)
        switch (clicled) {
            case "w": {
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
            }
            case "a": {
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
            }
            case "s": {
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
            }
            case "d": {
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
            }
            case "j": {
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
            }
            case "k": {
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
            }
            case "l": {
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
            }
        }


    });

}
function activekey(key) {
    var active = document.querySelector("." + key);
    console.log(active);
    if (active) { // Check if element exists
        active.classList.add("pressed");

        setTimeout( () => {
            active.classList.remove("pressed");
        }, 1000);
    }
}
document.addEventListener("keydown", (event) => {
    var key1 = event.key;
    activekey(key1);

    switch (key1) {
        case "w": {
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            console.log(key1);
            break;
        }
        case "a": {
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            console.log(key1);
            break;
        }
        case "s": {
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            console.log(key1);
            break;
        }
        case "d": {
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            console.log(key1);
            break;
        }
        case "j": {
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            console.log(key1);
            break;
        }
        case "k": {
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            console.log(key1);
            break;
        }
        case "l": {
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            console.log(key1);
            break;
        }
    }
});

// function calculater (num1 , num2, op ){
//     return op(num1 , num2) ;
// }
// function add(num1 , num2 ){
//  return num1 + num2 ;
// }
// function subtract(num1 , num2 ){
//     return num1 - num2 ;
// }
// function multiply(num1 , num2 ){
//     return num1 * num2 ;
// }
// function divide(num1 , num2 ){
//     return num1 / num2 ;
// }
// calculater(3 ,10 , add);

// function Student (name , age , id ){
//     this.name = name ;
//     this.age = age ;
//     this.id = id ;
//     this.sayhi = function(){
//         alert("Hello , my name is " + this.name);
//     }
// }

// var Student1 = new Student("samir" , 18 , 202210296) ;
// console.log(Student1.name + " " + Student1.age + " " + Student1.id) ;
// var Student12 = new Student("amir" , 19 , 202210295) ;
// console.log(Student12.name + " " + Student12.age + " " + Student12.id)

// activekey("w") ;



