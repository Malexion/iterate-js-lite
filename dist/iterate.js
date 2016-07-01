"use strict";!function(){String.prototype.replaceAll=function(t,n,e){return this.replace(new RegExp(t.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),e?"gi":"g"),"string"==typeof n?n.replace(/\$/g,"$$$$"):n)},String.prototype.replaceWhile=function(t,n,e,r){for(var i=this.replaceAll(t,n,r),u=1e4;e(i)&&u--;)i=i.replaceAll(t,n,r);return i},String.prototype.format=function(){for(var t=this,n=0;n<arguments.length;n++){var e=new RegExp("\\{"+n+"\\}","gi");t=t.replace(e,arguments[n])}return t},String.prototype.contains=function(t,n){return n?this.toLowerCase().indexOf(t.toLowerCase())>-1:this.indexOf(t)>-1},String.prototype.whiteout=function(n){var e=this;if(n){var r=e.slice(0);return t.is.array(n)?t.all(n,function(t){r=r.replace(t,"")}):t.is.string(n)&&(r=r.replace(n,"")),r.trim()}return this},String.prototype.capitalize=function(){return this.replace(/[^\s]+/g,function(t){return t.replace(/^./,function(t){return t.toUpperCase()})})},String.prototype.firstWord=function(){var t=this.indexOf(" ");return t>-1?this.substring(0,t):this};var t=new function(){var n=this;n.i={obj:{},array:[],"function":function(){},string:"ABC",integer:1,bool:!0,date:new Date,args:arguments,"null":null,undefined:void 0,nan:NaN,setConditions:function(t){return null!=t&&void 0!=t&&NaN!=t},defaultConditions:function(t){return Boolean(t)},formatOptions:function(){return{value:0,decimal:2,digits:-1,dynamic:!1,form:"{0}",delim:"",type:""}}},n.types={obj:"Object",array:"Array","function":"Function",string:"String",integer:"Number",bool:"Boolean",date:"Date",args:"Arguments","null":"Null",undefined:"Undefined",nan:"Number"},n.guidMap={},n.all=function(t,e,r){var i={stop:!1};if(n.is.array(t))for(var u=t.length,o=0;o<u&&(e(t[o],o,i),!i.stop);o++);else if(n.is.number(t))for(var a=0,s=Math.abs(t);a<s&&(a++,e(a,s,i),!i.stop););else for(var c in t)if((r||t.hasOwnProperty(c))&&e(t[c],c,i),i.stop)break},n.call=function(e,r,i){n.all(e,function(e){var u=n.prop(e,i);t.is["function"](u)&&u(r)})},n["class"]=function(t,e,r){var i=function(t,e){return n.all(e,function(e,r){n.is["function"](e)?t[r]=e:n.is.object(e)&&Object.defineProperty(t,r,n.fuse({enumerable:!1,configurable:!0},e))},!0),t},u=e||{};return r?n.is.array(r)?n.all(r,function(t){u=i(Object.create(t.prototype),u)}):u=i(Object.create(r.prototype),u):u=i({},u),t.prototype=u,t.prototype.constructor=t,t},n.contains=function(e,r){var i=!1;return i=t.is.string(e)?n.is["function"](r)?e.contains(r(e)):e.contains(r):n.is.def(n.search(e,r))},n.count=function(t,e){var r=0,i=n.is["function"](e)?e:function(t,n){return t};return n.all(t,function(t,e){n.is.set(i(t,e))&&r++}),r},n.debounce=function(t,n){n||(n=250);var e=null;return function(){var r=this,i=arguments;clearTimeout(e),e=setTimeout(function(){t.apply(r,i)},n)}},n.distinct=function(t,e){var r=[],i=n.is.array(t),u=e?e:function(t){return t};return n.map(t,function(t,n,e){var o=u(t);return r.indexOf(o)==-1?(r.push(o),i?t:{key:n,value:t}):(e.skip=!0,void console.log(r))},{build:i?[]:{}})},n.first=function(t,e,r){var i=null,u=1;return r&&r>1?n.is.array(t)?(i=[],n.all(t,function(t,n,o){u>r&&(o.stop=!0),u++,e?i.push(n):i.push(t)})):(i={},n.all(t,function(t,n,e){u>r&&(e.stop=!0),i[n]=t,u++})):n.all(t,function(t,n,r){r.stop=!0,i=e?n:t}),i},n.filter=function(t,e){var r={stop:!1},i=null;if(n.is["function"](e))n.is.array(t)?(i=[],n.all(t,function(t,n,u){e(t,n,r)&&i.push(t),r.stop&&(u.stop=!0)})):n.is.object(t)&&(i={},n.all(t,function(t,n,u){e(t,n,r)&&(i[n]=t),r.stop&&(u.stop=!0)}));else if(n.is.object(e)){var u=null;i=n.filter(t,function(t){return u=!0,n.all(e,function(n,e){t[e]!=n&&(u=!1)}),u})}return i},n.format=function(e){var r=n.i.formatOptions();t.is.object(e)&&n.fuse(r,e);var i=n.formats[r.type.toLowerCase()],u="";return u=t.is["function"](i)?i(r):r.value},n.fuse=function(t,e,r,i){var u=r||!1;return n.all(e,function(e,r,i){n.is.object(e)&&n.is.set(t[r])&&"Config Object"==t[r]._identifier?t[r].update(e,!0):n.is.object(e)&&"Replace Object"==e._identifier?t[r]=e.content():u&&(n.is.object(e)||n.is.array(e))?(n.is.set(t[r])||(n.is.object(e)?t[r]={}:n.is.array(e)&&(t[r]=[])),n.fuse(t[r],e,!0)):t[r]=e}),t},n.getType=function(t){return n.i.obj.toString.call(t).match(/\s([a-zA-Z]+)/)[1]},n.group=function(t,e){var r=n.is["function"](e)?e:function(t){return n.prop(t,e)},i={},u=null;return n.all(t,function(t){u=r(t),(n.is.string(u)||n.is.number(u))&&(n.is.set(i[u])?i[u].push(t):i[u]=[t])}),i},n.guid=function(t,e){var r=n.i.setConditions(t)?t:"-",i=n.math.r16()+n.math.r16()+r+n.math.r16()+r+n.math.r16()+r+n.math.r16()+r+n.math.r16()+n.math.r16()+n.math.r16();if(e){if(n.guidMap[e]&&n.guidMap[e][i])return n.guid(t,e);n.guidMap[e]={},n.guidMap[e][i]=!0}return i},n.intersect=function(t,e,r){var i=[],u=n.map(t,function(t,n){return{value:n,key:r?r(t):t}},{build:{}}),o=n.map(e,function(t,n){return{value:n,key:r?r(t):t}},{build:{}});return n.all(u,function(n,e){void 0!=o[e]&&i.push(t[n])}),i},n.last=function(t,e,r){var i=null,u=1,o=[];return n.is.array(t)?r&&r>1?(i=[],o=t.reverse(),n.all(o,function(t,n,o){u>r&&(o.stop=!0),u++,e?i.push(n):i.push(t)})):n.all(o,function(t,n,r){r.stop=!0,u++,i=e?n:t}):(n.all(t,function(t,n,e){o.push(n)}),o.reverse(),r&&r>1?(i={},n.all(o,function(n,e,o){u>r&&(o.stop=!0),i[n]=t[n],u++})):n.all(o,function(n,r,o){o.stop=!0,i=e?n:t[n],u++})),i},n.map=function(t,e,r){var i={stop:!1,skip:!1,pushMultiple:!1,build:[]};n.is.set(r)&&n.fuse(i,r);var u=n.is.array(i.build),o=n.is.object(i.build),a=n.is["function"](e)?e:function(t){return t},s=function(t){u?i.build.push(t):o&&(i.build[t.key]=t.value)};return n.all(t,function(t,e,r){var u=a(t,e,i);i.skip?i.skip=!1:i.pushMultiple?(n.all(u,function(t){return s(t)}),i.pushMultiple=!1):s(u),i.stop&&(r.stop=!0)}),i.build},n.match=function(t,e,r){var i={checkType:!1,recursive:!0,explicit:!1};n.is.set(r)&&n.fuse(i,r);var u=!0;return!(i.checkType&&!n.is.sameType(t,e))&&(!(!n.is.set(t)&&n.is.set(e)||n.is.set(t)&&!n.is.set(e))&&(n.all(t,function(t,r,o){i.recursive&&(n.is.object(t)||n.is.array(t))?n.match(t,e[r],i)||(o.stop=!0,u=!1):(i.explicit?e[r]!==t:e[r]!=t)&&(o.stop=!0,u=!1)}),u))},n.move=function(t,e,r){return e!=r&&(n.is.array(t)?t.splice(r,0,t.splice(e,1)[0]):(t[r]=t[e],delete t[e])),t},n.prop=function(t,e,r){if(n.is.set(e)&&n.is.set(t)&&""!=e){var i=t,u=e.split(".");return n.all(u,function(t,e,r){i=i[t],n.is.set(i)||(r.stop=!0)}),i}return t},n.rank=function(t,e){var r=[],i=e?e:function(t){return t};return r=n.map(t,i),n.map(t.slice(),function(t){var n=r.indexOf(t);return 0==n?n+1:n})},n.remove=function(t,e){if(n.is.array(t)){var r=t.indexOf(e);r>-1&&t.splice(r,1)}else if(n.is.object(t)){var i=n.search(t,e,{getKey:!0});delete t[i]}return t},n.removeAt=function(t,e){return n.is.array(t)?e>-1&&t.splice(e,1):n.is.object(t)&&delete t[e],t},n.search=function(t,e,r){var i=null,u={"default":null,all:!1,getKey:!1};if(n.is.set(r)&&n.fuse(u,r),n.is["function"](e))n.all(t,function(t,n,r){e(t,n)&&(i=u.getKey?n:t,r.stop=!0)},u.all);else if(n.is.array(t)){var o=t.indexOf(e);o>-1&&(i=u.getKey?o:t[o])}else n.is.object(t)&&n.all(t,function(t,n,r){t==e&&(i=u.getKey?n:t,r.stop=!0)},u.all);return null==i?u["default"]:i},n.sort=function(t,e){if(n.is.array(e)){var r,i,u,o,a=n.map(e,function(t){var e={dir:"asc",key:function(t){return t}};return n.is.set(t)&&n.fuse(e,t),e});return t.slice().sort(function(t,e){return n.all(a,function(n,s,c){r="asc"==a.dir,i=0,u=n.key(t),o=n.key(e),i=(u<o?-1:u>o?1:0)*[-1,1][+!!r],0!=i&&(c.stop=!0)}),i})}var a={dir:"asc",key:function(t){return t}};n.is.set(e)&&n.fuse(a,e);var r="asc"==a.dir;return t.slice().sort(function(t,n){var e=a.key(t),i=a.key(n);return(e<i?-1:e>i?1:0)*[-1,1][+!!r]})},n["switch"]=function(t,e,r){var i=e[t];return n.is.def(i)||(i=r),n.is["function"](i)&&(i=i(t)),i},n.throttle=function(t,n){n||(n=250);var e,r;return function(){var i=this,u=+new Date,o=arguments;e&&u<e+n?(clearTimeout(r),r=setTimeout(function(){e=u,t.apply(i,o)},n)):(e=u,t.apply(i,o))}},n.formats={padleft:function(t){var e=t.value.toString();return e.length<t.places?n.formats.padleft({value:t.delim+e,places:t.places,delim:t.delim}):e}},n.is={def:function(t){var e=n.i.defaultConditions(t);return e},set:function(t){var e=n.i.setConditions(t);return e},sameType:function(t,e){return n.getType(t)==n.getType(e)},"function":function(t){return n.getType(t)==n.types["function"]},object:function(t){return n.getType(t)==n.types.obj},array:function(t){return n.getType(t)==n.types.array},args:function(t){return n.getType(t)==n.types.args},bool:function(t){return n.getType(t)==n.types.bool},string:function(t){return n.getType(t)==n.types.string},number:function(t){return n.getType(t)==n.types.integer&&!isNaN(t)},date:function(t){return n.getType(t)==n.types.date},"null":function(t){return n.getType(t)==n.types["null"]},undefined:function(t){return n.getType(t)==n.types.undefined},nan:function(t){return n.getType(t)==n.types.integer&&isNaN(t)}},n.math={r16:function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)},roundUpTo:function(t,n){return Math.ceil(t/n)*n},median:function(t,e){var r=t;e&&(r=n.map(t,e)),r.sort(function(t,n){return t-n});var i=Math.floor(r.length/2);return r.length%2?r[i]:(r[i-1]+r[i])/2},sum:function e(t,r){var e=0;return n.all(t,function(t){e+=r?r(t):t}),e},average:function(t,e){var r=n.math.sum(t,e);return r>0||r<0?r/t.length:0},max:function(t,e){var r=null;return n.all(t,function(n){if(null==r&&(r=n),e)t[n]>r&&(r=t[n]);else{var i=e(t[n]);i>r&&(r=i)}}),r},min:function(t,e){var r=null;return n.all(t,function(n){if(null==r&&(r=n),e)t[n]<r&&(r=t[n]);else{var i=e(t[n]);i<r&&(r=i)}}),r},percentages:function(t,e){var r=n.math.sum(t,e);return n.map(t,function(t,n){return 0!=r?(e?e(t):t)/r:0})}}},n=t["class"](function(t){this.i=t,this._identifier="Replace Object"},{content:function(){return this.i}});t.lib={Overwrite:n},"undefined"!=typeof module?module.exports=t:"undefined"!=typeof window&&(window.__=window.iterate=t)}();