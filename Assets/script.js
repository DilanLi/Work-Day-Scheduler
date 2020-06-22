$(document).ready(function() {

    //use moment.js library to display day of week and date
    var currentDay = moment().format("MMMM Do YYYY");
    var currentDayOfWeek = moment().format("dddd");
    var currentInfo = currentDayOfWeek + ", " + currentDay;
    $("#currentDay").text(currentInfo);
    
    //grab value of current hour from moment.js library
    var currentHour = moment().hours();

    //set past, present, future textarea colors by their css class
    for (i=0; i < 9; i++) {
        if ($(".hour").eq(i).data("hour") === currentHour){
            $("textarea").eq(i).addClass("present");
        } else if ($(".hour").eq(i).data("hour") < currentHour){
            $("textarea").eq(i).addClass("past");
        } else {
            $("textarea").eq(i).addClass("future");
    }
}

//event listener on the save button
$("i").click(saveTodo);
//displays all events as browser loads
displayTodo();

//this function saves user input as event content and saves the events under hour of day within local storage
function saveTodo(){
    for (i=0; i < 9; i++){
        var value = $("textarea").eq(i).val();
        var hour = $(".hour").eq(i).data("hour");
        localStorage.setItem(hour, value);
    
        var todo = localStorage.getItem(hour);
        $("textarea").eq(i).text(todo);
    }    
}

//this function grabs all saved events in local storage and displays them
function displayTodo(){
    for (i=0; i < 9; i++){
        var hour = $(".hour").eq(i).data("hour");
        var content = localStorage.getItem(hour);
        $("textarea").eq(i).text(content);
    }
}

//when "Clear All Events" button is clicked, clear local storage
$(".btn").click(function(){
    localStorage.clear();
    displayTodo();
})

});
