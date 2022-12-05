let links=document.querySelectorAll(".links li a")

window.onscroll=function(){
    if(window.pageYOffset>500 && window.pageYOffset< 1000){
        removeclass();
        console.log(window.pageYOffset );
        links.forEach(item=>{
            console.log(item);
          if(item.dataset.active === 'one'){
           item.classList.add("active");
          }  
        })
        

    }
   else if(window.pageYOffset>1000 && window.pageYOffset<1800){
    removeclass();
    console.log(window.pageYOffset );
    links.forEach(item=>{
        console.log(item);
      if(item.dataset.active === 'about'){
       item.classList.add("active");
      }  
    })
   }
   else if(window.pageYOffset>1800 && window.pageYOffset<2200){
    removeclass();
    console.log(window.pageYOffset );
    links.forEach(item=>{
        console.log(item);
      if(item.dataset.active === 'gallary'){
       item.classList.add("active");
      }  
    })
   }
   else if(window.pageYOffset>2200&& window.pageYOffset<2900){
    removeclass();
    console.log(window.pageYOffset );
    links.forEach(item=>{
        console.log(item);
      if(item.dataset.active === 'second'){
       item.classList.add("active");
      }  
    })
}
    else if(window.pageYOffset>2900 && window.pageYOffset<3300){
        removeclass();
        console.log(window.pageYOffset );
        links.forEach(item=>{
            console.log(item);
          if(item.dataset.active === 'third'){
           item.classList.add("active");
          }  
        })
       
    
   }
   else if(window.pageYOffset>3200){
    removeclass();
    links.forEach(item=>{
        console.log(item);
      if(item.dataset.active === 'contact'){
       item.classList.add("active");
      }  
    })      
}
}
function removeclass(){
    links.forEach(ele=>{
        ele.classList.remove("active");
    })

}