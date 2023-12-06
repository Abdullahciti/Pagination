// my Variables Elements 
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var allLeft = document.querySelector("#all-left");
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");
var allRight = document.querySelector("#all-right");

// Settings
let defaultStart = 0;

var checkBtn = () => {
    if(defaultStart === 4) {
        next.disabled = true;
        allRight.disabled = true
        prev.disabled = false;
        allLeft.disabled = false;
    }
    else if(defaultStart === 0) {
        prev.disabled = true;
        allLeft.disabled = true;
        next.disabled = false;
        allRight.disabled = false;
    }else{    
        prev.disabled = false;
        allLeft.disabled = false;
        next.disabled = false;
        allRight.disabled = false;
    }
}
// # Here We Go 
li.forEach((num, numIndex) => {
    num.addEventListener("click", (e) => {
        e.preventDefault()
        num.classList.add("active");
        defaultStart = numIndex;
            li.forEach((ele)=> {
                ele.classList.remove("active");
            });
            num.classList.add("active");
            checkBtn();
        });
});
allLeft.addEventListener("click", () => {
    setTimeout(() => {
        allLeft.classList.add("time-active")
    }, 0);
    setTimeout(() => {
        allLeft.classList.remove("time-active")
    }, 350);
    li.forEach((ele)=> {
        ele.classList.remove("active");
    });
    li[0].classList.add("active")
    defaultStart = 0
    checkBtn()
})
prev.addEventListener("click", () => {
    setTimeout(() => {
        prev.classList.add("time-active")
    }, 0);
    setTimeout(() => {
        prev.classList.remove("time-active")
    }, 350);
    li.forEach((ele)=> {
        ele.classList.remove("active");
    });
    defaultStart--
    li[defaultStart].classList.add("active");
    checkBtn()
})
next.addEventListener("click", () => {
    setTimeout(() => {
        next.classList.add("time-active")
    }, 0);
    setTimeout(() => {
        next.classList.remove("time-active")
    }, 350);
    li.forEach((ele)=> {
        ele.classList.remove("active");
    });
    defaultStart++
    li[defaultStart].classList.add("active");
    checkBtn()
})
allRight.addEventListener("click", () => {
    setTimeout(() => {
        allRight.classList.add("time-active")
    }, 0);
    setTimeout(() => {
        allRight.classList.remove("time-active")
    }, 350);
    li.forEach((ele)=> {
        ele.classList.remove("active");
    });
    li[li.length - 1].classList.add("active");
    defaultStart = 4
    checkBtn()
})
