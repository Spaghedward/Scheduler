var currentDay = dayjs().format('dddd, MMMM D');
$('#currentDay').text(currentDay);

$('.saveBtn').on('click', storeInput)

function storeInput() {
    var userInput = $(this).siblings('.description').val();
    var calendarTime = $(this).parent().attr('id');
    var currentTime = dayjs().hour();
    var dataEntered = {
        "userInput": userInput,
        "calendarTime": calendarTime
    }
    console.log(currentTime);
    console.log(calendarTime);
    localStorage.setItem('dataKey', JSON.stringify(dataEntered));
    // localStorage.setItem(userInput, calendarTime);
    // // localStorage.setItem('calendarTime', calendarTime);

    if (calendarTime < currentTime) {
        $(this).parent().removeClass('present future').addClass('past');
    } else if (calendarTime == currentTime) {
        $(this).parent().removeClass('past future').addClass('present');
    } else {
        $(this).parent().removeClass('past present').addClass('future');
    }
}

$('#9 .description').val(localStorage.getItem('userInput'));
$('#10 .description').val(localStorage.getItem('userInput'));
$('#11 .description').val(localStorage.getItem('userInput'));
$('#12 .description').val(localStorage.getItem('userInput'));
$('#13 .description').val(localStorage.getItem('userInput'));
$('#14 .description').val(localStorage.getItem('userInput'));
$('#15 .description').val(localStorage.getItem('userInput'));
$('#16 .description').val(localStorage.getItem('userInput'));
$('#17 .description').val(localStorage.getItem('userInput'));

// storeInput()


    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  ;