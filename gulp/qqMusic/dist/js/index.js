!function(n,e){var t,r,i,u,o,g=new e.rotateImg(".img-box");o="../mock/data.json",n.ajax({type:"GET",url:o,success:function(o){r=(t=o).length;var a=(i=new e.indexControl(r)).curIndex;n("body").trigger("play:change",a)},error:function(){console.log("error")}}),n("body").on("play:change",function(o,a){e.render(t[a]),e.audioManage.getAudio(t[a].audio),"play"==e.audioManage.status&&e.audioManage.play(),u&&u.progReset(),g.resetRotate(),(u=new e.progControl(t[a].duration)).renderTime(t[a].duration),"play"==e.audioManage.status&&u.progMove()}),n(".prev").on("click",function(){var o=i.prev();n("body").trigger("play:change",o)}),n(".next").on("click",function(){var o=i.next();n("body").trigger("play:change",o)}),n(".play").on("click",function(){"pause"==e.audioManage.status?(n(this).addClass("playing"),e.audioManage.play(),g.startRotate(),u.progMove()):(n(this).removeClass("playing"),e.audioManage.pause(),g.stopRotate(),u.progStop())}),n(".slider").on("touchstart",function(o){u.progStart(o),n(this).on("touchmove",function(o){u.progTmove(o)})}).on("touchend",function(){e.audioManage.playTo(u.curTime),"play"==e.audioManage.status&&u.progMove()})}(window.Zepto,window.player||(window.player={}));