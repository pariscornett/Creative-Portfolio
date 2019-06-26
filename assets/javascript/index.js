//global variables
let introOver = false;
//appends bot icon to DOM
$(".enter").append("<img id = bot class = valign-center src = assets/images/bot.png>");
//hide anything you want to fade in and out
$(".intro").hide();
$(".name").hide();
$(".portfolio").hide();
//makes bot clickable, change colors when clicked, and then lead to the rest of portfolio page
$(".enter").on("click", function(){
    $(".enter").append("<img id = bot2 class = valign-center src = assets/images/bot2.png>");
    $(".enter").fadeOut(1000);
    console.log(1);
    setTimeout(
        function() {
            console.log(2);
           $(".intro").html("<h1 id = hello>Hello</h1>");  
           $(".intro").fadeIn(1000);
        },3000
    );
    console.log(3);
    setTimeout (
        function() {
            console.log(4);
            $(".intro").fadeOut(1000);
        },6000
    );
    console.log(5);
    setTimeout (
        function() {
            console.log(6);
            $(".name").html("<p id = name>I'm Paris</p>")
            $(".name").fadeIn(1000);
        },9000
    );
    console.log(7);
    setTimeout (
        function() {
            console.log(8);
            $(".name").fadeOut(1000);
        },12000
    ); 
    console.log(9);
    setTimeout (
        function() {
            console.log(10,)
            $(".portfolio").html("<p id = portfolio>This is My Portfolio</p>");
            $(".portfolio").fadeIn(1000);
        },15000
    );
    console.log(11);
    setTimeout (
        function() {
            $(".portfolio").fadeOut(1000);
        },18000
    );
    introOver= true;
})


