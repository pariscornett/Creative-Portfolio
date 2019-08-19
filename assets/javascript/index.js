let introOver = false;
//appends bot icon to DOM
$(".enter").append("<img id = bot class = valign-center src = assets/images/bot.png>");
//hide anything you want to fade in and out
$(".intro").hide();
$(".button-dump").hide();
//makes bot clickable, change colors when clicked, and then lead to the rest of portfolio page
$(".enter").on("click", function(){
    $(".enter").append("<img id = bot2 class = valign-center src = assets/images/bot2.png>");
    $(".enter").fadeOut(1000);
    console.log(1);
    setTimeout(
        function() {
            console.log(2);
           $(".intro").html("<h1 id = welcome>Welcome</h1>");  
           $(".intro").fadeIn(1000);
        },2000
    );
    console.log(3);
    setTimeout (
        function() {
            console.log(4);
            $(".intro").fadeOut(1000);
        },4000
    );
    // console.log(5);
    // setTimeout (
    //     function() {
    //         console.log(6);
    //         $(".name").html("<p id = name>I'm Paris</p>")
    //         $(".name").fadeIn(1000);
    //     },6000
    // );
    // console.log(7);
    // setTimeout (
    //     function() {
    //         console.log(8);
    //         $(".name").fadeOut(1000);
    //     },8000
    // ); 
    // console.log(9);
    // setTimeout (
    //     function() {
    //         console.log(10,)
    //         $(".portfolio").html("<p id = portfolio>This is My Portfolio</p>");
    //         $(".portfolio").fadeIn(1000);
    //     },10000
    // );
    // console.log(11);
    // setTimeout (
    //     function() {
    //         $(".portfolio").fadeOut(1000);  
    //     },12000
    // );
    setTimeout (
        function() {
            portfolio();
        }, 6000
    )
   
    
})

function portfolio () {
    $(".button-dump").fadeIn(1000);
    $(".button-dump").append("<a href=https://github.com/pariscornett><img id=github class=valign-center src=assets/images/github.png></a>");
    // $(".button-dump").fadeIn(1000);
    // $(".button-dump").append("<img id = linkedin class = valign-center src = assets/images/linkedin.png href = https://github.com/pariscornett>");
    $(".button-dump");
    $(".button-dump").append("<a href=https://www.linkedin.com/in/paris-cornett-486b63176><img id=linkedin class=valign-center src=assets/images/linkedin.png></a>")
    // $(".button-dump").append("<img id = email class = valign-center src = assets/images/email.png href = # >");
    $(".button-dump").append("<a href=https://google.com><img id=email class=valign-center src=assets/images/email.png></a>");
}

$("#github").on("click", function(){
    $("#github").append("<button><img id = github class = valign-center src = assets/images/github2.png href = https://github.com/pariscornett></button>");
})

// $("#linkedin").on("click", function(){
//     $("#linkedin").append("<img id = linkedin class = valign-center src = assets/images/linkedin2.png>");
// })

// $("#email").on("click", function(){
//     $("#email").append("<img id = email class = valign-center src = assets/images/github2.png>");
// })
