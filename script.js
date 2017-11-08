$(document).ready(function(){
 

/*hide form when user clicks X in form - this was done, but I have no idea how or why*/
    
/*when mouse enters an available seat, fade seat out (maybe 0.50 opacity)*/    
$("button").on("mouseenter", function(){
    if($(this).hasClass("available")){
        $(this).fadeTo(500, 0.5);
}}).on("mouseleave", function(){
    $(this).fadeTo(500, 1.0);
});



    
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

    
var FullInfo;    
var userName;
var phoneNum;
var partyNum;
    
/*Changing class from available to reserved after clicking Save button*/    
$("#saveBtn").on("click", function(event){
    container.addClass("reserved");
    container.removeClass("available");
    userName = document.getElementById("Name").value;
    phoneNum = document.getElementById("PhoneNum").value;
    partyNum = document.getElementById("NumPartyInput").value;
    $("#FormHolder").hide();
//    FullInfo = [userName, phoneNum, partyNum];
//    console.log(FullInfo);
    var nameOUTput = document.getElementById("NameOutput");
    nameOUTput.innerText = userName;
});


/***I can't figure out how to assign the information specifically to that circle.  I can create an ID and make it work, but would need to do this 9 times, and I know there is an easier way.////
    
   
    
    
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
    
    
    
    
    
    
    
  
    


    
    
    
    

    

    


    
    
    
    
    
    
    
    
    
    
    
});