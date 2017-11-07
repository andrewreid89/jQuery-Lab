$(document).ready(function(){
 


    
//show form when available is clicked//

    
    
    
//switch from available to reserved class//

$(".Circle").click(function(){
    $(this).addClass("reserved");
});
    

    
//when mouse enters an available seat, fade seat out (maybe 0.50 opacity)//    

$(".Circle").hover(function(){
    $(this).fadeTo(500,0.5);
}, function(){
    $(this).fadeTo(500,1.0);
});
    


//alert "not allowed" if tried to select a reserved seat//
//This doesn't work, but I don't understand why.  I tried doing just a regular alert without $(this), and it also doesn't work??
$(".reserved").click(function(){
    $(this).alert("This seat is already reserved");
})
    
 

//submitting form hides form and changes available to reserved//
    

//change cursor hover to "not-allowed" if a seat is reserved//
        
    
//hide form when user clicks X in form//
    


    
    
    
    
    
    
    
    
    
    
    
});