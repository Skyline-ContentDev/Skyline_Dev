function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6DXk4oCRvUP":
        Script1();
        break;
      case "6JpL97amlGL":
        Script2();
        break;
      case "5t2gg6taXxp":
        Script3();
        break;
      case "6FmP1MM7pq4":
        Script4();
        break;
      case "6qdSpp3HRSY":
        Script5();
        break;
      case "5loCqr7NhjZ":
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
const target = object('6UjXxbSqobU');
const duration = 750;
const easing = 'ease-out';
const id = '5Zyf98vKa2g';
const pulseAmount = 0.07;
const delay = 1131;
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
const target = object('5lGEM08crdQ');
const duration = 750;
const easing = 'ease-out';
const id = '68AnM3Dz1bd';
const teeterAmount = 4;
const delay = 1375;
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
const target = object('6UjXxbSqobU');
const duration = 750;
const easing = 'ease-out';
const id = '5Zyf98vKa2g';
const pulseAmount = 0.07;
const delay = 2625;
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
const target = object('5lGEM08crdQ');
const duration = 750;
const easing = 'ease-out';
const id = '68AnM3Dz1bd';
const teeterAmount = 4;
const delay = 2875;
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
const target = object('6UjXxbSqobU');
const duration = 750;
const easing = 'ease-out';
const id = '5Zyf98vKa2g';
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
const target = object('5lGEM08crdQ');
const duration = 750;
const easing = 'ease-out';
const id = '68AnM3Dz1bd';
const teeterAmount = 4;
const delay = 4381;
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
