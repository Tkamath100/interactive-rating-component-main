document.querySelector(".button-main").addEventListener("click", ()=>{
        document.getElementById("container1").style.display="none";
        document.getElementById("container2").classList.remove("hidden");
}
);
let btn=document.querySelectorAll(".btn");
for(let i=0;i<btn.length;i++){
    btn[i].addEventListener("click",()=>{
    let selected=btn[i].innerHTML;
    console.log(typeof(selected));
    switch (selected) {
        case "1":
            document.querySelector(".change").innerHTML="1";
        break;
        case "2":
            document.querySelector(".change").innerHTML="2";
        break;
        case "3":
            document.querySelector(".change").innerHTML="3";
        break;
        case "4":
            document.querySelector(".change").innerHTML="4";
        break;
        case "5":
            document.querySelector(".change").innerHTML="5";
        break;
        default:
            console.log("error");
         break;
        }
});
}
