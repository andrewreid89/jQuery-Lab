$(document).ready(function(){
 

/*hide form when user clicks X in form - this was done, but I have no idea how or why*/
    
/*when mouse enters an available seat, fade seat out (maybe 0.50 opacity)*/    
$("button").on("mouseenter", function(){
    if($(this).hasClass("available")){
        $(this).fadeTo(500, 0.5);
}}).on("mouseleave", function(){
    $(this).fadeTo(500, 1.0);
});


    
/*Changes the a Reserved circle from red to black, and disables the clicking*/  
$("button").on("mouseenter", function() {
    if ($(this).hasClass("reserved")) {
        $(this).css("background-color", "black");
        container.off("click");
    }});
$("button").on("mouseenter", function(e){
    if($(this).hasClass("reserved")){    
        $(".HoverBox").show(500);
        $(".HoverBox").offset({left:e.pageX,top:e.pageY});
    }});
$("button").on("mouseleave", function(){
    if($(this).hasClass("reserved")){
        $(this).css("background-color", "red");
        $(".HoverBox").hide();
    }});
    
 
  
/*Code from Mary Clare about the hover thing*/
//$("button").on("mouseenter", function(){
//    if($(this).hasClass
//    
//    
//    click(function(e){
//         
// })
//        
    
    
var TableNo;    
var container;

$(".available").on("click", function (){
    
/*show form when available is clicked*/    
    document.querySelectorAll("#FormHolder")[0].style.display = "flex";
    
/*Capturing the TableNo variable in the form so I can use it later*/
    TableNo = $(this).val();
    
/*Sending TableNo out to the HTML form*/    
    var TableNoOut = document.getElementById("TableNo");
        TableNoOut.innerText = TableNo;
    
/*Identifying the container as the box that is clicked*/
    container = $(this);
});


    
/*Changing class from available to reserved after clicking Save button*/    
$("#saveBtn").on("click", function(event){
    container.addClass("reserved");
    container.removeClass("available");
    $("#FormHolder").hide();
});

    

//    
//    
///*Displaying the HoverBox on mouseenter*/
//$(".available").on("mouseenter", function(){
//    document.querySelectorAll(".HoverBox")[0].style.display = "block";
//}).on("mouseleave", function(){
//    document.querySelectorAll(".HoverBox")[0].style.display = "none";
//}); 
//    
//    
    
    
    
    
    
/*Capture form inputs into variables*/

//    
//var userName;
//var phoneNum;
//var partyNum;
//    
//function formCapture(){
//    userName = document.getElementById("Name").value;
//    console.log(userName);
//    
//}    
    
    
//    <input type="text" id="Name" placeholder="Name">
//            <input type="text" id="PhoneNum" placeholder="Phone Number">
//            <input type="text" id="NumPartyInput" placeholder="Number in your party">
    
    
    
    
  
    


    
    
    
    

    

    


    
    
    
    
    
    
    
    
    
    
    
});