let input =document.getElementsByClassName("input")
let envoi=document.getElementById("envoyer")
let msg=document.getElementById("congratz")
let heart_btn=document.getElementsByClassName("likee")

for (let index = 0; index < heart_btn.length; index++) {
    // heart button like 
    heart_btn[index].addEventListener("click",function() {
        if(heart_btn[index].style.color==="black"){
            heart_btn[index].style.color="red"
        }
        else{
        heart_btn[index].style.color="black"
        }
    })

}
// for (let index = 0; index < input.length; index++) {

// envoyer.addEventListener("click",function(){
//     if(input1.value<1)
//     msg.value="saisir un nom valide svp "
// else if(input2.value<10)
//     msg.value="saisir un mail valide svp"
// else if(input3.value<1)
//     msg.value="ecrire votre message svp"
// else 
//     msg.value="nous avons bien recus votre message"

//    })
    
// }
envoi.addEventListener("click",function(){
    i=0
    for (let index = 0; index < input.length; index++) {
if(input[index].value!=""){
    i+=1
}}
if(i===3){
    msg.textContent="Your message has been sent."
}
else{
    msg.textContent="you must fill in all the fields !"

}
    
})
