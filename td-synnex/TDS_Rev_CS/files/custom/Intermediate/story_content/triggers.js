function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ah2FhzmG30":
        Script1();
        break;
      case "6DOOxF8PeNI":
        Script2();
        break;
      case "6rIaqyGSs5c":
        Script3();
        break;
      case "5W3T6U2FifR":
        Script4();
        break;
      case "5k1r9Gbm3pU":
        Script5();
        break;
      case "6BCqeqNOww6":
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
const target = object('6L4vJh7SqxT');
const duration = 750;
const easing = 'ease-out';
const id = '5k9aiwnuxJg';
const pulseAmount = 0.07;
const delay = 1111;
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
const target = object('5j7vz4Ozzfd');
const duration = 750;
const easing = 'ease-out';
const id = '60CirzHshWl';
const teeterAmount = 4;
const delay = 1389;
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
const target = object('6L4vJh7SqxT');
const duration = 750;
const easing = 'ease-out';
const id = '5k9aiwnuxJg';
const pulseAmount = 0.07;
const delay = 2611;
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
const target = object('5j7vz4Ozzfd');
const duration = 750;
const easing = 'ease-out';
const id = '60CirzHshWl';
const teeterAmount = 4;
const delay = 2889;
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
const target = object('6L4vJh7SqxT');
const duration = 750;
const easing = 'ease-out';
const id = '5k9aiwnuxJg';
const pulseAmount = 0.07;
const delay = 4125;
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
const target = object('5j7vz4Ozzfd');
const duration = 750;
const easing = 'ease-out';
const id = '60CirzHshWl';
const teeterAmount = 4;
const delay = 4389;
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
