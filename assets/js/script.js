// This added the current date to the top of the page.
var currentDay = dayjs().format('dddd, MMMM D');
$('#currentDay').text(currentDay);

// Added an event listener that stores user inputs and the corresponding hour
// the input was written in.
$('.saveBtn').on('click', storeInput)

function storeInput() {
    var userInput = $(this).siblings('.description').val();
    var calendarTime = $(this).parent().attr('id');
    var currentTime = dayjs().hour();
    // console.log(currentTime);
    // console.log(calendarTime);
    localStorage.setItem(calendarTime, userInput);
 
// The if statement dynamically changes the color of the description based on
// whether the task is in the past, present or future.
    if (calendarTime < currentTime) {
        $(this).parent().removeClass('present future').addClass('past');
    } else if (calendarTime == currentTime) {
        $(this).parent().removeClass('past future').addClass('present');
    } else {
        $(this).parent().removeClass('past present').addClass('future');
    }

}

// The saved local storage objects stay on the page based on what hour it was entered in.cd ..
$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));

storeInput()
