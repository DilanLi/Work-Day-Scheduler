$(document).ready(function() {

    var currentDay = moment().format("MMMM Do YYYY");
    var currentDayOfWeek = moment().format("dddd");
    var currentInfo = currentDayOfWeek + ", " + currentDay;
    $("#currentDay").text(currentInfo);
    
    var currentHour = moment().hours();
    console.log (currentHour);

    //set past, present, future textarea colors
    for (i=0; i < 9; i++) {
        if ($(".hour").eq(i).data("hour") === currentHour){
            $("textarea").eq(i).addClass("present");
        } else if ($(".hour").eq(i).data("hour") < currentHour){
            $("textarea").eq(i).addClass("past");
        } else {
            $("textarea").eq(i).addClass("future");
    }
    $("textarea").eq(i).css("border","1px white solid");
}

displayTodo();

function saveTodo(){
    for (i=0; i < 9; i++){
        var value = $("textarea").eq(i).val();
        var hour = $(".hour").eq(i).data("hour");
        localStorage.setItem(hour, value);
    
        var todo = localStorage.getItem(hour);
        $("textarea").eq(i).text(todo);
    }    
}

$("i").click(saveTodo);

function displayTodo(){
    for (i=0; i < 9; i++){
        var hour = $(".hour").eq(i).data("hour");
        var content = localStorage.getItem(hour);
        $("textarea").eq(i).text(content);
    }
}


});
