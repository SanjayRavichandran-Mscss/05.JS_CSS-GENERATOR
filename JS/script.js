document.addEventListener('DOMContentLoaded',()=>{
    
const allBorder = document.getElementById('all');
const all_value = document.getElementById('all_value');
const code = document.getElementById('code');
const container = document.querySelector('.container');
const copybtn = document.getElementById('btncpy');
const all_Border_width = document.getElementById('Border_width');
const all_border_style = document.getElementById('border_style');


var radius_spanText=10;
var all_Border_width_value=10;
var coding="hello";
var border_style="solid";



function allBorderUpdate(){
const radius_spanText= allBorder.value;
const all_Border_width_value=all_Border_width.value;
       
 all_value.innerText= radius_spanText+"px";
 Labelwidth.innerText=all_Border_width_value+"px";
//here below semicolon is must for ending;
coding=`
border-radius:${radius_spanText}px;    
border:${all_Border_width_value}px ${border_style} blue;
`;

 code.value=coding;   //This Line responsible for display the code in Textarea box.

 container.style.cssText=coding;   //This Line responsible for applying the stye to HTML through JS.

}

 
 
    

    allBorder.addEventListener("mousemove" , allBorderUpdate);
    allBorder.addEventListener("change", allBorderUpdate);
    all_Border_width.addEventListener("mousemove",allBorderUpdate);
    all_Border_width.addEventListener("change",allBorderUpdate);


    copybtn.addEventListener("click",()=>{
        document.querySelector(' textarea').select();
        document.execCommand('copy');
        alert("CODE COPIED");
 });


    allBorderUpdate();

   //Border style
   all_border_style.addEventListener('change',function(){
    border_style=this.value;
 
    allBorderUpdate();
   })

   
});
