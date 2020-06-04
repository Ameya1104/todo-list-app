// Check off to-dos on clicking
// on("click") becomes applicable for all future instances
$("ul").on("click", "li", function()
{
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event)
{
    // .parent() gives the outer li which contains the span element
    $(this).parent().fadeOut(500,function()
    {
        $(this).remove()
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event)
{
    if(event.which === 13)
    {
        // grabbing new to-do
        var toDoText = $(this).val();
        //setting empty input after first input
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + toDoText + "</li>");
    }
})

$(".fa-list").click(function()
{
    $("input[type='text']").fadeToggle();
});