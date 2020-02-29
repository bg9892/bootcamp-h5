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
var textarea9am = $('<input>');
var textarea10am = $('<input>');
var textarea11am = $('<input>');
var textarea12pm = $('<input>');
var textarea1pm = $('<input>');
var textarea2pm = $('<input>');
var textarea3pm = $('<input>');
var textarea4pm = $('<input>');
var textarea5pm = $('<input>');
var saveBtn9am = $('<button>');
var saveBtn10am = $('<button>');
var saveBtn11am = $('<button>');
var saveBtn12pm = $('<button>');
var saveBtn1pm = $('<button>');
var saveBtn2pm = $('<button>');
var saveBtn3pm = $('<button>');
var saveBtn4pm = $('<button>');
var saveBtn5pm = $('<button>');

div9am.addClass(' hour row').text('9AM').append(textarea9am).append(saveBtn9am);
div10am.addClass('hour row').text('10AM').append(textarea10am).append(saveBtn10am);
div11am.addClass('hour row').text('11AM').append(textarea11am).append(saveBtn11am);
div12pm.addClass('hour row').text('12PM').append(textarea12pm).append(saveBtn12pm);
div1pm.addClass('hour row').text('1PM').append(textarea1pm).append(saveBtn1pm);
div2pm.addClass('hour row').text('2PM').append(textarea2pm).append(saveBtn2pm);
div3pm.addClass('hour row').text('3PM').append(textarea3pm).append(saveBtn3pm);
div4pm.addClass('hour row').text('4PM').append(textarea4pm).append(saveBtn4pm);
div5pm.addClass('hour row').text('5PM').append(textarea5pm).append(saveBtn5pm);

textarea9am.addClass('textarea description ml-3');
textarea10am.addClass('textarea description ml-2');
textarea11am.addClass('textarea description ml-2');
textarea12pm.addClass('textarea description ml-2');
textarea1pm.addClass('textarea description ml-3');
textarea2pm.addClass('textarea description ml-3');
textarea3pm.addClass('textarea description ml-3');
textarea4pm.addClass('textarea description ml-3');
textarea5pm.addClass('textarea description ml-3');

saveBtn9am.addClass('saveBtn').text('save');
saveBtn10am.addClass('saveBtn').text('save');
saveBtn11am.addClass('saveBtn').text('save');
saveBtn12pm.addClass('saveBtn').text('save');
saveBtn1pm.addClass('saveBtn').text('save');
saveBtn2pm.addClass('saveBtn').text('save');
saveBtn3pm.addClass('saveBtn').text('save');
saveBtn4pm.addClass('saveBtn').text('save');
saveBtn5pm.addClass('saveBtn').text('save');

containerEl.append(div9am);
containerEl.append(div10am);
containerEl.append(div11am);
containerEl.append(div12pm);
containerEl.append(div1pm);
containerEl.append(div2pm);
containerEl.append(div3pm);
containerEl.append(div4pm);
containerEl.append(div5pm);


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



updateTimeColors();