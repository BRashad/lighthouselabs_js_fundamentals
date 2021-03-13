const talkingCalendar = function(date) {
  // Your code here

 let dateToIsoFormat = new Date(date);
 let isoFormatDate = dateToIsoFormat.toISOString(date);

 let parsedDate = Date.parse(isoFormatDate);


 let humanFormat = new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(parsedDate);

return humanFormat;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));


