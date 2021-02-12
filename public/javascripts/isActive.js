const navs= document.querySelectorAll(".nav-link")
const lin = "https://morning-lowlands-47806.herokuapp.com"
for(let nav of navs)
{
    if(document.URL == `${lin}${nav.getAttribute("href")}`){
        nav.classList.add("active")
    };
}