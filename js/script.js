let openSearch = document.querySelector(".search i");
let input = document.querySelector(".input-search");
let IconOpenList = document.querySelector(".icon");
let List = document.querySelector(".links");
IconOpenList.addEventListener("click" , ()=>{
    List.classList.toggle("active");
})
console.log(input)
console.log(openSearch)
openSearch.addEventListener("click" , ()=>{
    input.classList.toggle("active");
})

let Header = document.querySelector("header");
window.addEventListener("scroll" , ()=>{
    Header.classList.toggle("show" , scrollY > 0);
})


let toTop = document.querySelector(".top");
window.addEventListener("scroll" , ()=>{
    if(scrollY > 900) {
        toTop.classList.add("show") ; 
    }else{
        toTop.classList.remove("show") ; 
    }
    
})

toTop.addEventListener("click" , ()=>{
    window.scrollTo({
        top : 0 ,
        behavior :"smooth",
    })
})