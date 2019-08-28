//appends bot icon to DOM
$(".enter").append("<img id = bot class = valign-center src = assets/images/bot.png>");

//hide elements that will fade in and out
$(".intro").hide();
$(".button-dump").hide();
$(".bio").hide();
$(".project-images").hide();

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
    setTimeout (
        function() {
            showPortfolio();
        }, 6000
    )
   
    
});

function showPortfolio () {
    $(".button-dump").fadeIn(1000);
    $(".button-dump").append("<a href=https://github.com/pariscornett target=_blank><img id=github class=valign-center z-depth-2 src=assets/images/github2.png></a>");
    $(".button-dump").append("<a href=https://www.linkedin.com/in/paris-cornett-486b63176 target=_blank><img id=linkedin class=valign-center z-depth-2 src=assets/images/linkedin2.png></a>")
    $(".button-dump").append("<a href=mailto:pariscornett@gmail.com><img id=email class=valign-center z-depth-2 src=assets/images/email2.png></a>");
    $(".logo").fadeIn(1000);
    $(".logo").append("<img class=logo valign-center src=assets/images/pariscornett2.png>");
    $(".bio").fadeIn(1000);
    $(".project-images").fadeIn(1000);
};
