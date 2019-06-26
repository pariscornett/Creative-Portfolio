//appends bot icon to DOM
$(".enter").append("<img id = bot class = valign-center src = assets/images/bot.png>");
//hide anything you want to fade in and out
$(".intro").hide();
//makes bot clickable, change colors when clicked, and then lead to the rest of portfolio page
$(".enter").on("click", function(){
    $(".enter").append("<img id = bot2 class = valign-center src = assets/images/bot2.png>");
    $(".enter").fadeOut(1000);
    setTimeout(
        function() {
            console.log("waiting..")
           $(".intro").html("<h1 id = hello>Hello</h1>");  
           $(".intro").fadeIn(1000);
        },2000
    );
    console.log("waiting again...");
    setTimeout (
        function() {
            console.log("fading out hello");
            $(".intro").fadeOut(1000);
            $(".intro").html("<p id = name>I'm Paris</p>")
        },6000
    );
    //$(".intro").html("<p id = name>My name is Paris Cornett</p>");
    setTimeout (
        function() {
            console.log("introducing myself");
            //$(".intro").empty();
            
            $(".intro").fadeIn(1000);
        },6000
    )

    
})


