function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6EoqDnWEOzn":
        Script1();
        break;
      case "6C5HJaa8Li8":
        Script2();
        break;
      case "6O7tYJTtJR8":
        Script3();
        break;
      case "5us9YHo0vxl":
        Script4();
        break;
      case "65rgUWD51u1":
        Script5();
        break;
      case "6HpaRfD2TuR":
        Script6();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('6HX5G2lgvpR');
const duration = 750;
const easing = 'ease-out';
const id = '67UDAHP42db';
const pulseAmount = 0.07;
const delay = 1006;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('5xyJ66RGByv');
const duration = 750;
const easing = 'ease-out';
const id = '62C6sPqtk7Y';
const teeterAmount = 4;
const delay = 1244;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6HX5G2lgvpR');
const duration = 750;
const easing = 'ease-out';
const id = '67UDAHP42db';
const pulseAmount = 0.07;
const delay = 2494;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('5xyJ66RGByv');
const duration = 750;
const easing = 'ease-out';
const id = '62C6sPqtk7Y';
const teeterAmount = 4;
const delay = 2744;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  player.once(() => {
const target = object('6HX5G2lgvpR');
const duration = 750;
const easing = 'ease-out';
const id = '67UDAHP42db';
const pulseAmount = 0.07;
const delay = 4006;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  player.once(() => {
const target = object('5xyJ66RGByv');
const duration = 750;
const easing = 'ease-out';
const id = '62C6sPqtk7Y';
const teeterAmount = 4;
const delay = 4244;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
