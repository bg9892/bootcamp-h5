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

var textarea = $('<input>');

var saveBtn = $('<button>');


div9am.text('9AM');
div10am.text('10AM');
div11am.text('11AM');
div12pm.text('12PM');
div1pm.text('1PM');
div2pm.text('2PM');
div3pm.text('3PM');
div4pm.text('4PM');
div5pm.text('5PM');

saveBtn.text('save');


div9am.addClass(' hour row');
div10am.addClass('description hour row');
div11am.addClass('description hour row');
div12pm.addClass('description hour row');
div1pm.addClass('description hour row');
div2pm.addClass('description hour row');
div3pm.addClass('description hour row');
div4pm.addClass('description hour row');
div5pm.addClass('description hour row');

textarea.addClass('textarea description');


saveBtn.addClass('saveBtn');


containerEl.append(div9am);
containerEl.append(div10am);
containerEl.append(div11am);
containerEl.append(div12pm);
containerEl.append(div1pm);
containerEl.append(div2pm);
containerEl.append(div3pm);
containerEl.append(div4pm);
containerEl.append(div5pm);

div9am.append(textarea);

div9am.append(saveBtn);