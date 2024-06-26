String.prototype.yell = function() {
    return `OMG ${this.toUpperCase()} !!!!!!!!!!!!`;
}

Array.prototype.pop = function() {
    return `Hey its an array prototype!`;
}



// const navColor = 'rgb[230,126,34]';
// const logoColor = 'rgb[19, 78, 95]';

// document.querySelectorAll('h1')[0].style.backgroundColor = navColor.rgb();
// document.querySelectorAll('h2')[0].style.backgroundColor = navColor.rgba(0.9);
// document.querySelectorAll('h3')[0].style.backgroundColor = navColor.opposite();
// document.querySelectorAll('h4')[0].style.backgroundColor = navColor.fullSaturation();


// function Color(r,g,b){
//     this.r = r;
//     this.g = g;
//     this.b = b;
// };

// Color.prototype.rgb = function(){
//    return `rgb(${this.r},${this.g},${this.b})`; //const{r,g,b}=this;
// };
// Color.prototype.rgba= function (a = 0.7) {
//     return `rgb(${this.r},${this.g},${this.b}  , ${a})` ;
// };
// Color.prototype.hex = function () {
//     const{r,g,b} = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// const color1 = new Color(19,78,95);
// const color2  = new Color(230,126,34);

class Color{
    constructor (r,g,b,name){
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name 
    }
    greet(){
        return `Hello I am ${this.name}`;
    }
    innerRGB(){
        const {r,g,b} = this;
        return  `${r},${g},${b}`;
    };
    // rgb(){
    //     const{r,g,b} = this;
    //     return `rgb(${r},${g},${b})`;
    // }
    rgb(){
        return `rgb(this.innerRGB())`;
    }
    // rgba(){
    //     const{r,g,b} = this;
    //     return `rgb(${r},${g},${b},0.7)`;
    // }
    rgb(a=0.5){
        return `rgba(this.innerRGB(),${a})`;
    }
    hex(){
        const{r,g,b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
}
const Blue = new Color(19,78,95,'Sea');
const Cyan =  new Color(230,126,34,"Cyan");
