var currentDate = moment().format("MMM Do YYYY");
var date = $('#currentDay');
date.text(currentDate);

var containerEl = $('.container');

var div9am = $('<div>');
var div10am = $('<div>');
var div11am = $('<div>');
var div12pm = $('<div>');
var div1pm = $('<div>');
var div2pm = $('<div>');
var div3pm = $('<div>');
var div4pm = $('<div>');
var div5pm = $('<div>');

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


div9am.text('9AM');
div10am.text('10AM');
div11am.text('11AM');
div12pm.text('12PM');
div1pm.text('1PM');
div2pm.text('2PM');
div3pm.text('3PM');
div4pm.text('4PM');
div5pm.text('5PM');

saveBtn9am.text('save');
saveBtn10am.text('save');
saveBtn11am.text('save');
saveBtn12pm.text('save');
saveBtn1pm.text('save');
saveBtn2pm.text('save');
saveBtn3pm.text('save');
saveBtn4pm.text('save');
saveBtn5pm.text('save');


div9am.addClass(' hour row').append(textarea9am).append(saveBtn9am);
div10am.addClass('hour row').append(textarea10am).append(saveBtn10am);
div11am.addClass('hour row').append(textarea11am).append(saveBtn11am);
div12pm.addClass('hour row').append(textarea12pm).append(saveBtn12pm);
div1pm.addClass('hour row').append(textarea1pm).append(saveBtn1pm);
div2pm.addClass('hour row').append(textarea2pm).append(saveBtn2pm);
div3pm.addClass('hour row').append(textarea3pm).append(saveBtn3pm);
div4pm.addClass('hour row').append(textarea4pm).append(saveBtn4pm);
div5pm.addClass('hour row').append(textarea5pm).append(saveBtn5pm);

textarea9am.addClass('textarea description');
textarea10am.addClass('textarea description');
textarea11am.addClass('textarea description');
textarea12pm.addClass('textarea description');
textarea1pm.addClass('textarea description');
textarea2pm.addClass('textarea description');
textarea3pm.addClass('textarea description');
textarea4pm.addClass('textarea description');
textarea5pm.addClass('textarea description');


saveBtn9am.addClass('saveBtn');
saveBtn10am.addClass('saveBtn');
saveBtn11am.addClass('saveBtn');
saveBtn12pm.addClass('saveBtn');
saveBtn1pm.addClass('saveBtn');
saveBtn2pm.addClass('saveBtn');
saveBtn3pm.addClass('saveBtn');
saveBtn4pm.addClass('saveBtn');
saveBtn5pm.addClass('saveBtn');


containerEl.append(div9am);
containerEl.append(div10am);
containerEl.append(div11am);
containerEl.append(div12pm);
containerEl.append(div1pm);
containerEl.append(div2pm);
containerEl.append(div3pm);
containerEl.append(div4pm);
containerEl.append(div5pm);



// div9am.append(textarea);
// div9am.append(textarea);
// div9am.append(textarea);
// div9am.append(textarea);
// div9am.append(textarea);
// div9am.append(textarea);
// div9am.append(textarea);
// div9am.append(textarea);
// div9am.append(textarea);

// div9am.append(saveBtn9am);