import{d as _}from"./p-33658608.js";import"./p-ce275af6.js";import"./p-0469a2ff.js";import"./p-e4f14b9d.js";import"./p-2f33ceac.js";import"./p-3a41f8f2.js";import"./p-1a101545.js";import"./p-2cee5187.js";import"./p-f12cab61.js";import"./p-bb2a43ec.js";import"./p-4da87082.js";import"./p-373caea5.js";import"./p-118f21c7.js";import"./p-e7412810.js";import"./p-4d17b8f4.js";import"./p-1d231c24.js";import"./p-7e07ba67.js";import"./p-93fac8b6.js";import"./p-d18b9957.js";import"./p-257b0b95.js";import"./p-7259172b.js";var r="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_");var t="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_");var e="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_");var p="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_");var m=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function i(_,r){var t=_.split("_");return r%10===1&&r%100!==11?t[0]:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?t[1]:t[2]}function s(_,r,t){var e={mm:r?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};if(t==="m"){return r?"минута":"минуту"}return _+" "+i(e[t],+_)}var o=function _(e,p){if(m.test(p)){return r[e.month()]}return t[e.month()]};o.s=t;o.f=r;var a=function _(r,t){if(m.test(t)){return e[r.month()]}return p[r.month()]};a.s=p;a.f=e;var n={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:o,monthsShort:a,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:s,mm:s,h:"час",hh:s,d:"день",dd:s,M:"месяц",MM:s,y:"год",yy:s},ordinal:function _(r){return r},meridiem:function _(r){if(r<4){return"ночи"}else if(r<12){return"утра"}else if(r<17){return"дня"}return"вечера"}};_.locale(n,null,true);export default n;
//# sourceMappingURL=p-3441ed2a.js.map