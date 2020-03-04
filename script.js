// set div elements to variables and set values
$('#currentDay').text(moment().format("MMM Do YYYY"));
var time = parseInt(moment().format('H'));
var containerEl = $('.container');
var div9am = $('<div>').val(9);
var div10am = $('<div>').val(10);
var div11am = $('<div>').val(11);
var div12pm = $('<div>').val(12);
var div1pm = $('<div>').val(13);
var div2pm = $('<div>').val(14);
var div3pm = $('<div>').val(15);
var div4pm = $('<div>').val(16);
var div5pm = $('<div>').val(17);

// set input elements to variables and get values from local storage
var textarea9am = $('<input>').val(localStorage.getItem('9am'));
var textarea10am = $('<input>').val(localStorage.getItem('10am'));
var textarea11am = $('<input>').val(localStorage.getItem('11am'));
var textarea12pm = $('<input>').val(localStorage.getItem('12pm'));
var textarea1pm = $('<input>').val(localStorage.getItem('1pm'));
var textarea2pm = $('<input>').val(localStorage.getItem('2pm'));
var textarea3pm = $('<input>').val(localStorage.getItem('3pm'));
var textarea4pm = $('<input>').val(localStorage.getItem('4pm'));
var textarea5pm = $('<input>').val(localStorage.getItem('5pm'));

// Set button elements to variables and set values
var saveBtn9am = $('<button>').val(9);
var saveBtn10am = $('<button>').val(10);
var saveBtn11am = $('<button>').val(11);
var saveBtn12pm = $('<button>').val(12);
var saveBtn1pm = $('<button>').val(1);
var saveBtn2pm = $('<button>').val(2);
var saveBtn3pm = $('<button>').val(3);
var saveBtn4pm = $('<button>').val(4);
var saveBtn5pm = $('<button>').val(5);

// Add classes and append texareas and buttons
div9am.addClass('hour row').text('9AM').append(textarea9am).append(saveBtn9am);
div10am.addClass('hour row').text('10AM').append(textarea10am).append(saveBtn10am);
div11am.addClass('hour row').text('11AM').append(textarea11am).append(saveBtn11am);
div12pm.addClass('hour row').text('12PM').append(textarea12pm).append(saveBtn12pm);
div1pm.addClass('hour row').text('1PM').append(textarea1pm).append(saveBtn1pm);
div2pm.addClass('hour row').text('2PM').append(textarea2pm).append(saveBtn2pm);
div3pm.addClass('hour row').text('3PM').append(textarea3pm).append(saveBtn3pm);
div4pm.addClass('hour row').text('4PM').append(textarea4pm).append(saveBtn4pm);
div5pm.addClass('hour row').text('5PM').append(textarea5pm).append(saveBtn5pm);

// Add classes to textareas
textarea9am.addClass('textarea description ml-3 col-md-10');
textarea10am.addClass('textarea description ml-2 col-md-10');
textarea11am.addClass('textarea description ml-2 col-md-10');
textarea12pm.addClass('textarea description ml-2 col-md-10');
textarea1pm.addClass('textarea description ml-3 col-md-10');
textarea2pm.addClass('textarea description ml-3 col-md-10');
textarea3pm.addClass('textarea description ml-3 col-md-10');
textarea4pm.addClass('textarea description ml-3 col-md-10');
textarea5pm.addClass('textarea description ml-3 col-md-10');

// Add classes to buttons and set text
saveBtn9am.addClass('saveBtn col-md-1').text('save').val(9);
saveBtn10am.addClass('saveBtn col-md-1').text('save').val(10);
saveBtn11am.addClass('saveBtn col-md-1').text('save').val(11);
saveBtn12pm.addClass('saveBtn col-md-1').text('save').val(12);
saveBtn1pm.addClass('saveBtn col-md-1').text('save').val(1);
saveBtn2pm.addClass('saveBtn col-md-1').text('save').val(2);
saveBtn3pm.addClass('saveBtn col-md-1').text('save').val(3);
saveBtn4pm.addClass('saveBtn col-md-1').text('save').val(4);
saveBtn5pm.addClass('saveBtn col-md-1').text('save').val(5);

// Append divs
containerEl.append(div9am);
containerEl.append(div10am);
containerEl.append(div11am);
containerEl.append(div12pm);
containerEl.append(div1pm);
containerEl.append(div2pm);
containerEl.append(div3pm);
containerEl.append(div4pm);
containerEl.append(div5pm);

/// Finction to update colors based off current time
function updateTimeColors() {

    if (div9am.val() < time) {
        textarea9am.addClass('past')
    } else if (div9am.val() > time) {
        textarea9am.addClass('future')
    } else {
        textarea9am.addClass('present')
    }
    if (div10am.val() < time) {
        textarea10am.addClass('past')
    } else if (div9am.val() > time) {
        textarea10am.addClass('future')
    } else {
        textarea10am.addClass('present')
    }
    if (div11am.val() < time) {
        textarea11am.addClass('past')
    } else if (div11am.val() > time) {
        textarea11am.addClass('future')
    } else {
        textarea11am.addClass('present')
    }
    if (div12pm.val() < time) {
        textarea12pm.addClass('past')
    } else if (div12pm.val() > time) {
        textarea12pm.addClass('future')
    } else {
        textarea12pm.addClass('present')
    }
    if (div1pm.val() < time) {
        textarea1pm.addClass('past')
    } else if (div1pm.val() > time) {
        textarea1pm.addClass('future')
    } else {
        textarea1pm.addClass('present')
    }
    if (div2pm.val() < time) {
        textarea2pm.addClass('past')
    } else if (div2pm.val() > time) {
        textarea2pm.addClass('future')
    } else {
        textarea2pm.addClass('present')
    }
    if (div3pm.val() < time) {
        textarea3pm.addClass('past')
    } else if (div3pm.val() > time) {
        textarea3pm.addClass('future')
    } else {
        textarea3pm.addClass('present')
    }
    if (div4pm.val() < time) {
        textarea4pm.addClass('past')
    } else if (div4pm.val() > time) {
        textarea4pm.addClass('future')
    } else {
        textarea4pm.addClass('present')
    }
    if (div5pm.val() < time) {
        textarea5pm.addClass('past')
    } else if (div5pm.val() > time) {
        textarea5pm.addClass('future')
    } else {
        textarea5pm.addClass('present')
    }
}

// When save button is clicked save textinout to local storage
$('.saveBtn').on("click", function () {
    var btnClicked = this.value;

    if (btnClicked == 9) {
        localStorage.setItem('9am', textarea9am.val());
    } else if (btnClicked == 10) {
        localStorage.setItem('10am', textarea10am.val());
    } else if (btnClicked == 11) {
        localStorage.setItem('11am', textarea11am.val());
    } else if (btnClicked == 12) {
        localStorage.setItem('12pm', textarea12pm.val());
    } else if (btnClicked == 1) {
        localStorage.setItem('1pm', textarea1pm.val());
    } else if (btnClicked == 2) {
        localStorage.setItem('2pm', textarea2pm.val());
    } else if (btnClicked == 3) {
        localStorage.setItem('3pm', textarea3pm.val());
    } else if (btnClicked == 4) {
        localStorage.setItem('4pm', textarea4pm.val());
    } else if (btnClicked == 5) {
        localStorage.setItem('5pm', textarea5pm.val());
    }
})

//Start timer with 30 sec interval
function startTimer() {
    interval = setInterval(function () {
        timeLeft();
    }, 30000);
}

// Call updateTimeColors function every 30 secs
function timeLeft() {
    updateTimeColors();
}

updateTimeColors();
startTimer();
