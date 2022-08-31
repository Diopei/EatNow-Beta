import{a as R,b as K,$ as z,e as F,f as I,S as V,h as N,r as $,i as Z,w as fe,j as pe,k as J,l as Q,p as ee,m as ce,q as me,s as te,o as L,t as k,v as j,x as ne,y as Y,z as ve,A as U,F as ge,B as he,c as ye,C as be,D as we}from"./entry.75b4aa5b.mjs";function Se(n){let{swiper:e,extendParams:i,on:a,emit:l}=n;const u=R(),r=K();e.keyboard={enabled:!1},i({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function p(s){if(!e.enabled)return;const{rtlTranslate:d}=e;let y=s;y.originalEvent&&(y=y.originalEvent);const v=y.keyCode||y.charCode,S=e.params.keyboard.pageUpDown,_=S&&v===33,h=S&&v===34,g=v===37,x=v===39,o=v===38,b=v===40;if(!e.allowSlideNext&&(e.isHorizontal()&&x||e.isVertical()&&b||h)||!e.allowSlidePrev&&(e.isHorizontal()&&g||e.isVertical()&&o||_))return!1;if(!(y.shiftKey||y.altKey||y.ctrlKey||y.metaKey)&&!(u.activeElement&&u.activeElement.nodeName&&(u.activeElement.nodeName.toLowerCase()==="input"||u.activeElement.nodeName.toLowerCase()==="textarea"))){if(e.params.keyboard.onlyInViewport&&(_||h||g||x||o||b)){let P=!1;if(e.$el.parents(`.${e.params.slideClass}`).length>0&&e.$el.parents(`.${e.params.slideActiveClass}`).length===0)return;const m=e.$el,w=m[0].clientWidth,c=m[0].clientHeight,E=r.innerWidth,T=r.innerHeight,M=e.$el.offset();d&&(M.left-=e.$el[0].scrollLeft);const B=[[M.left,M.top],[M.left+w,M.top],[M.left,M.top+c],[M.left+w,M.top+c]];for(let O=0;O<B.length;O+=1){const C=B[O];if(C[0]>=0&&C[0]<=E&&C[1]>=0&&C[1]<=T){if(C[0]===0&&C[1]===0)continue;P=!0}}if(!P)return}e.isHorizontal()?((_||h||g||x)&&(y.preventDefault?y.preventDefault():y.returnValue=!1),((h||x)&&!d||(_||g)&&d)&&e.slideNext(),((_||g)&&!d||(h||x)&&d)&&e.slidePrev()):((_||h||o||b)&&(y.preventDefault?y.preventDefault():y.returnValue=!1),(h||b)&&e.slideNext(),(_||o)&&e.slidePrev()),l("keyPress",v)}}function t(){e.keyboard.enabled||(z(u).on("keydown",p),e.keyboard.enabled=!0)}function f(){!e.keyboard.enabled||(z(u).off("keydown",p),e.keyboard.enabled=!1)}a("init",()=>{e.params.keyboard.enabled&&t()}),a("destroy",()=>{e.keyboard.enabled&&f()}),Object.assign(e.keyboard,{enable:t,disable:f})}function Ee(n){let{swiper:e,extendParams:i,on:a,emit:l}=n;const u=K();i({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),e.mousewheel={enabled:!1};let r,p=I(),t;const f=[];function s(o){let w=0,c=0,E=0,T=0;return"detail"in o&&(c=o.detail),"wheelDelta"in o&&(c=-o.wheelDelta/120),"wheelDeltaY"in o&&(c=-o.wheelDeltaY/120),"wheelDeltaX"in o&&(w=-o.wheelDeltaX/120),"axis"in o&&o.axis===o.HORIZONTAL_AXIS&&(w=c,c=0),E=w*10,T=c*10,"deltaY"in o&&(T=o.deltaY),"deltaX"in o&&(E=o.deltaX),o.shiftKey&&!E&&(E=T,T=0),(E||T)&&o.deltaMode&&(o.deltaMode===1?(E*=40,T*=40):(E*=800,T*=800)),E&&!w&&(w=E<1?-1:1),T&&!c&&(c=T<1?-1:1),{spinX:w,spinY:c,pixelX:E,pixelY:T}}function d(){!e.enabled||(e.mouseEntered=!0)}function y(){!e.enabled||(e.mouseEntered=!1)}function v(o){return e.params.mousewheel.thresholdDelta&&o.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&I()-p<e.params.mousewheel.thresholdTime?!1:o.delta>=6&&I()-p<60?!0:(o.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),l("scroll",o.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),l("scroll",o.raw)),p=new u.Date().getTime(),!1)}function S(o){const b=e.params.mousewheel;if(o.direction<0){if(e.isEnd&&!e.params.loop&&b.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&b.releaseOnEdges)return!0;return!1}function _(o){let b=o,P=!0;if(!e.enabled)return;const m=e.params.mousewheel;e.params.cssMode&&b.preventDefault();let w=e.$el;if(e.params.mousewheel.eventsTarget!=="container"&&(w=z(e.params.mousewheel.eventsTarget)),!e.mouseEntered&&!w[0].contains(b.target)&&!m.releaseOnEdges)return!0;b.originalEvent&&(b=b.originalEvent);let c=0;const E=e.rtlTranslate?-1:1,T=s(b);if(m.forceToAxis)if(e.isHorizontal())if(Math.abs(T.pixelX)>Math.abs(T.pixelY))c=-T.pixelX*E;else return!0;else if(Math.abs(T.pixelY)>Math.abs(T.pixelX))c=-T.pixelY;else return!0;else c=Math.abs(T.pixelX)>Math.abs(T.pixelY)?-T.pixelX*E:-T.pixelY;if(c===0)return!0;m.invert&&(c=-c);let M=e.getTranslate()+c*m.sensitivity;if(M>=e.minTranslate()&&(M=e.minTranslate()),M<=e.maxTranslate()&&(M=e.maxTranslate()),P=e.params.loop?!0:!(M===e.minTranslate()||M===e.maxTranslate()),P&&e.params.nested&&b.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){const B={time:I(),delta:Math.abs(c),direction:Math.sign(c),raw:o};f.length>=2&&f.shift();const O=f.length?f[f.length-1]:void 0;if(f.push(B),O?(B.direction!==O.direction||B.delta>O.delta||B.time>O.time+150)&&v(B):v(B),S(B))return!0}else{const B={time:I(),delta:Math.abs(c),direction:Math.sign(c)},O=t&&B.time<t.time+500&&B.delta<=t.delta&&B.direction===t.direction;if(!O){t=void 0,e.params.loop&&e.loopFix();let C=e.getTranslate()+c*m.sensitivity;const de=e.isBeginning,ue=e.isEnd;if(C>=e.minTranslate()&&(C=e.minTranslate()),C<=e.maxTranslate()&&(C=e.maxTranslate()),e.setTransition(0),e.setTranslate(C),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!de&&e.isBeginning||!ue&&e.isEnd)&&e.updateSlidesClasses(),e.params.freeMode.sticky){clearTimeout(r),r=void 0,f.length>=15&&f.shift();const H=f.length?f[f.length-1]:void 0,X=f[0];if(f.push(B),H&&(B.delta>H.delta||B.direction!==H.direction))f.splice(0);else if(f.length>=15&&B.time-X.time<500&&X.delta-B.delta>=1&&B.delta<=6){const W=c>0?.8:.2;t=B,f.splice(0),r=F(()=>{e.slideToClosest(e.params.speed,!0,void 0,W)},0)}r||(r=F(()=>{t=B,f.splice(0),e.slideToClosest(e.params.speed,!0,void 0,.5)},500))}if(O||l("scroll",b),e.params.autoplay&&e.params.autoplayDisableOnInteraction&&e.autoplay.stop(),C===e.minTranslate()||C===e.maxTranslate())return!0}}return b.preventDefault?b.preventDefault():b.returnValue=!1,!1}function h(o){let b=e.$el;e.params.mousewheel.eventsTarget!=="container"&&(b=z(e.params.mousewheel.eventsTarget)),b[o]("mouseenter",d),b[o]("mouseleave",y),b[o]("wheel",_)}function g(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",_),!0):e.mousewheel.enabled?!1:(h("on"),e.mousewheel.enabled=!0,!0)}function x(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,_),!0):e.mousewheel.enabled?(h("off"),e.mousewheel.enabled=!1,!0):!1}a("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&x(),e.params.mousewheel.enabled&&g()}),a("destroy",()=>{e.params.cssMode&&g(),e.mousewheel.enabled&&x()}),Object.assign(e.mousewheel,{enable:g,disable:x})}function Te(n){let{swiper:e,extendParams:i,on:a,emit:l}=n,u;e.autoplay={running:!1,paused:!1},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function r(){if(!e.size){e.autoplay.running=!1,e.autoplay.paused=!1;return}const h=e.slides.eq(e.activeIndex);let g=e.params.autoplay.delay;h.attr("data-swiper-autoplay")&&(g=h.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(u),u=F(()=>{let x;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),x=e.slidePrev(e.params.speed,!0,!0),l("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?t():(x=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),l("autoplay")):(x=e.slidePrev(e.params.speed,!0,!0),l("autoplay")):e.params.loop?(e.loopFix(),x=e.slideNext(e.params.speed,!0,!0),l("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?t():(x=e.slideTo(0,e.params.speed,!0,!0),l("autoplay")):(x=e.slideNext(e.params.speed,!0,!0),l("autoplay")),(e.params.cssMode&&e.autoplay.running||x===!1)&&r()},g)}function p(){return typeof u<"u"||e.autoplay.running?!1:(e.autoplay.running=!0,l("autoplayStart"),r(),!0)}function t(){return!e.autoplay.running||typeof u>"u"?!1:(u&&(clearTimeout(u),u=void 0),e.autoplay.running=!1,l("autoplayStop"),!0)}function f(h){!e.autoplay.running||e.autoplay.paused||(u&&clearTimeout(u),e.autoplay.paused=!0,h===0||!e.params.autoplay.waitForTransition?(e.autoplay.paused=!1,r()):["transitionend","webkitTransitionEnd"].forEach(g=>{e.$wrapperEl[0].addEventListener(g,d)}))}function s(){const h=R();h.visibilityState==="hidden"&&e.autoplay.running&&f(),h.visibilityState==="visible"&&e.autoplay.paused&&(r(),e.autoplay.paused=!1)}function d(h){!e||e.destroyed||!e.$wrapperEl||h.target===e.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(g=>{e.$wrapperEl[0].removeEventListener(g,d)}),e.autoplay.paused=!1,e.autoplay.running?r():t())}function y(){e.params.autoplay.disableOnInteraction?t():(l("autoplayPause"),f()),["transitionend","webkitTransitionEnd"].forEach(h=>{e.$wrapperEl[0].removeEventListener(h,d)})}function v(){e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,l("autoplayResume"),r())}function S(){e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",y),e.$el.on("mouseleave",v))}function _(){e.$el.off("mouseenter",y),e.$el.off("mouseleave",v)}a("init",()=>{e.params.autoplay.enabled&&(p(),R().addEventListener("visibilitychange",s),S())}),a("beforeTransitionStart",(h,g,x)=>{e.autoplay.running&&(x||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(g):t())}),a("sliderFirstMove",()=>{e.autoplay.running&&(e.params.autoplay.disableOnInteraction?t():f())}),a("touchEnd",()=>{e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&r()}),a("destroy",()=>{_(),e.autoplay.running&&t(),R().removeEventListener("visibilitychange",s)}),Object.assign(e.autoplay,{pause:f,run:r,start:p,stop:t})}function xe(n){let{swiper:e,extendParams:i,emit:a,once:l}=n;i({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function u(){const t=e.getTranslate();e.setTranslate(t),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function r(){const{touchEventsData:t,touches:f}=e;t.velocities.length===0&&t.velocities.push({position:f[e.isHorizontal()?"startX":"startY"],time:t.touchStartTime}),t.velocities.push({position:f[e.isHorizontal()?"currentX":"currentY"],time:I()})}function p(t){let{currentPos:f}=t;const{params:s,$wrapperEl:d,rtlTranslate:y,snapGrid:v,touchEventsData:S}=e,h=I()-S.touchStartTime;if(f<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(f>-e.maxTranslate()){e.slides.length<v.length?e.slideTo(v.length-1):e.slideTo(e.slides.length-1);return}if(s.freeMode.momentum){if(S.velocities.length>1){const c=S.velocities.pop(),E=S.velocities.pop(),T=c.position-E.position,M=c.time-E.time;e.velocity=T/M,e.velocity/=2,Math.abs(e.velocity)<s.freeMode.minimumVelocity&&(e.velocity=0),(M>150||I()-c.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=s.freeMode.momentumVelocityRatio,S.velocities.length=0;let g=1e3*s.freeMode.momentumRatio;const x=e.velocity*g;let o=e.translate+x;y&&(o=-o);let b=!1,P;const m=Math.abs(e.velocity)*20*s.freeMode.momentumBounceRatio;let w;if(o<e.maxTranslate())s.freeMode.momentumBounce?(o+e.maxTranslate()<-m&&(o=e.maxTranslate()-m),P=e.maxTranslate(),b=!0,S.allowMomentumBounce=!0):o=e.maxTranslate(),s.loop&&s.centeredSlides&&(w=!0);else if(o>e.minTranslate())s.freeMode.momentumBounce?(o-e.minTranslate()>m&&(o=e.minTranslate()+m),P=e.minTranslate(),b=!0,S.allowMomentumBounce=!0):o=e.minTranslate(),s.loop&&s.centeredSlides&&(w=!0);else if(s.freeMode.sticky){let c;for(let E=0;E<v.length;E+=1)if(v[E]>-o){c=E;break}Math.abs(v[c]-o)<Math.abs(v[c-1]-o)||e.swipeDirection==="next"?o=v[c]:o=v[c-1],o=-o}if(w&&l("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(y?g=Math.abs((-o-e.translate)/e.velocity):g=Math.abs((o-e.translate)/e.velocity),s.freeMode.sticky){const c=Math.abs((y?-o:o)-e.translate),E=e.slidesSizesGrid[e.activeIndex];c<E?g=s.speed:c<2*E?g=s.speed*1.5:g=s.speed*2.5}}else if(s.freeMode.sticky){e.slideToClosest();return}s.freeMode.momentumBounce&&b?(e.updateProgress(P),e.setTransition(g),e.setTranslate(o),e.transitionStart(!0,e.swipeDirection),e.animating=!0,d.transitionEnd(()=>{!e||e.destroyed||!S.allowMomentumBounce||(a("momentumBounce"),e.setTransition(s.speed),setTimeout(()=>{e.setTranslate(P),d.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(a("_freeModeNoMomentumRelease"),e.updateProgress(o),e.setTransition(g),e.setTranslate(o),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,d.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(o),e.updateActiveIndex(),e.updateSlidesClasses()}else if(s.freeMode.sticky){e.slideToClosest();return}else s.freeMode&&a("_freeModeNoMomentumRelease");(!s.freeMode.momentum||h>=s.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:u,onTouchMove:r,onTouchEnd:p}})}function Be(n){const{effect:e,swiper:i,on:a,setTranslate:l,setTransition:u,overwriteParams:r,perspective:p,recreateShadows:t,getEffectParams:f}=n;a("beforeInit",()=>{if(i.params.effect!==e)return;i.classNames.push(`${i.params.containerModifierClass}${e}`),p&&p()&&i.classNames.push(`${i.params.containerModifierClass}3d`);const d=r?r():{};Object.assign(i.params,d),Object.assign(i.originalParams,d)}),a("setTranslate",()=>{i.params.effect===e&&l()}),a("setTransition",(d,y)=>{i.params.effect===e&&u(y)}),a("transitionEnd",()=>{if(i.params.effect===e&&t){if(!f||!f().slideShadows)return;i.slides.each(d=>{i.$(d).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()}),t()}});let s;a("virtualUpdate",()=>{i.params.effect===e&&(i.slides.length||(s=!0),requestAnimationFrame(()=>{s&&i.slides&&i.slides.length&&(l(),s=!1)}))})}function _e(n,e){return n.transformEl?e.find(n.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):e}function Ce(n){let{swiper:e,duration:i,transformEl:a,allSlides:l}=n;const{slides:u,activeIndex:r,$wrapperEl:p}=e;if(e.params.virtualTranslate&&i!==0){let t=!1,f;l?f=a?u.find(a):u:f=a?u.eq(r).find(a):u.eq(r),f.transitionEnd(()=>{if(t||!e||e.destroyed)return;t=!0,e.animating=!1;const s=["webkitTransitionEnd","transitionend"];for(let d=0;d<s.length;d+=1)p.trigger(s[d])})}}function Me(n,e,i){const a=`swiper-slide-shadow${i?`-${i}`:""}`,l=n.transformEl?e.find(n.transformEl):e;let u=l.children(`.${a}`);return u.length||(u=z(`<div class="swiper-slide-shadow${i?`-${i}`:""}"></div>`),l.append(u)),u}function Pe(n){let{swiper:e,extendParams:i,on:a}=n;i({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const l=p=>typeof p=="string"?p:`${p}px`;Be({effect:"creative",swiper:e,on:a,setTranslate:()=>{const{slides:p,$wrapperEl:t,slidesSizesGrid:f}=e,s=e.params.creativeEffect,{progressMultiplier:d}=s,y=e.params.centeredSlides;if(y){const v=f[0]/2-e.params.slidesOffsetBefore||0;t.transform(`translateX(calc(50% - ${v}px))`)}for(let v=0;v<p.length;v+=1){const S=p.eq(v),_=S[0].progress,h=Math.min(Math.max(S[0].progress,-s.limitProgress),s.limitProgress);let g=h;y||(g=Math.min(Math.max(S[0].originalProgress,-s.limitProgress),s.limitProgress));const x=S[0].swiperSlideOffset,o=[e.params.cssMode?-x-e.translate:-x,0,0],b=[0,0,0];let P=!1;e.isHorizontal()||(o[1]=o[0],o[0]=0);let m={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};h<0?(m=s.next,P=!0):h>0&&(m=s.prev,P=!0),o.forEach((O,C)=>{o[C]=`calc(${O}px + (${l(m.translate[C])} * ${Math.abs(h*d)}))`}),b.forEach((O,C)=>{b[C]=m.rotate[C]*Math.abs(h*d)}),S[0].style.zIndex=-Math.abs(Math.round(_))+p.length;const w=o.join(", "),c=`rotateX(${b[0]}deg) rotateY(${b[1]}deg) rotateZ(${b[2]}deg)`,E=g<0?`scale(${1+(1-m.scale)*g*d})`:`scale(${1-(1-m.scale)*g*d})`,T=g<0?1+(1-m.opacity)*g*d:1-(1-m.opacity)*g*d,M=`translate3d(${w}) ${c} ${E}`;if(P&&m.shadow||!P){let O=S.children(".swiper-slide-shadow");if(O.length===0&&m.shadow&&(O=Me(s,S)),O.length){const C=s.shadowPerProgress?h*(1/s.limitProgress):h;O[0].style.opacity=Math.min(Math.max(Math.abs(C),0),1)}}const B=_e(s,S);B.transform(M).css({opacity:T}),m.origin&&B.css("transform-origin",m.origin)}},setTransition:p=>{const{transformEl:t}=e.params.creativeEffect;(t?e.slides.find(t):e.slides).transition(p).find(".swiper-slide-shadow").transition(p),Ce({swiper:e,duration:p,transformEl:t,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}function A(n){return typeof n=="object"&&n!==null&&n.constructor&&Object.prototype.toString.call(n).slice(8,-1)==="Object"}function D(n,e){const i=["__proto__","constructor","prototype"];Object.keys(e).filter(a=>i.indexOf(a)<0).forEach(a=>{typeof n[a]>"u"?n[a]=e[a]:A(e[a])&&A(n[a])&&Object.keys(e[a]).length>0?e[a].__swiper__?n[a]=e[a]:D(n[a],e[a]):n[a]=e[a]})}function ae(n){return n===void 0&&(n={}),n.navigation&&typeof n.navigation.nextEl>"u"&&typeof n.navigation.prevEl>"u"}function ie(n){return n===void 0&&(n={}),n.pagination&&typeof n.pagination.el>"u"}function le(n){return n===void 0&&(n={}),n.scrollbar&&typeof n.scrollbar.el>"u"}function se(n){n===void 0&&(n="");const e=n.split(" ").map(a=>a.trim()).filter(a=>!!a),i=[];return e.forEach(a=>{i.indexOf(a)<0&&i.push(a)}),i.join(" ")}const oe=["modules","init","_direction","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_preloadImages","updateOnImagesReady","_loop","_loopAdditionalSlides","_loopedSlides","_loopedSlidesLimit","_loopFillGroupWithBlank","loopPreventsSlide","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideBlankClass","slideActiveClass","slideDuplicateActiveClass","slideVisibleClass","slideDuplicateClass","slideNextClass","slideDuplicateNextClass","slidePrevClass","slideDuplicatePrevClass","wrapperClass","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","lazy","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom"];function q(n,e){n===void 0&&(n={}),e===void 0&&(e=!0);const i={on:{}},a={},l={};D(i,V.defaults),D(i,V.extendedDefaults),i._emitClasses=!0,i.init=!1;const u={},r=oe.map(t=>t.replace(/_/,"")),p=Object.assign({},n);return Object.keys(p).forEach(t=>{typeof n[t]>"u"||(r.indexOf(t)>=0?A(n[t])?(i[t]={},l[t]={},D(i[t],n[t]),D(l[t],n[t])):(i[t]=n[t],l[t]=n[t]):t.search(/on[A-Z]/)===0&&typeof n[t]=="function"?e?a[`${t[2].toLowerCase()}${t.substr(3)}`]=n[t]:i.on[`${t[2].toLowerCase()}${t.substr(3)}`]=n[t]:u[t]=n[t])}),["navigation","pagination","scrollbar"].forEach(t=>{i[t]===!0&&(i[t]={}),i[t]===!1&&delete i[t]}),{params:i,passedParams:l,rest:u,events:a}}function Oe(n,e){let{el:i,nextEl:a,prevEl:l,paginationEl:u,scrollbarEl:r,swiper:p}=n;ae(e)&&a&&l&&(p.params.navigation.nextEl=a,p.originalParams.navigation.nextEl=a,p.params.navigation.prevEl=l,p.originalParams.navigation.prevEl=l),ie(e)&&u&&(p.params.pagination.el=u,p.originalParams.pagination.el=u),le(e)&&r&&(p.params.scrollbar.el=r,p.originalParams.scrollbar.el=r),p.init(i)}function re(n,e){let i=e.slidesPerView;if(e.breakpoints){const l=V.prototype.getBreakpoint(e.breakpoints),u=l in e.breakpoints?e.breakpoints[l]:void 0;u&&u.slidesPerView&&(i=u.slidesPerView)}let a=Math.ceil(parseFloat(e.loopedSlides||i,10));return a+=e.loopAdditionalSlides,a>n.length&&e.loopedSlidesLimit&&(a=n.length),a}function $e(n,e,i){const a=e.map((t,f)=>(t.props||(t.props={}),t.props.swiperRef=n,t.props["data-swiper-slide-index"]=f,t));function l(t,f,s){return t.props||(t.props={}),N(t.type,{...t.props,key:`${t.key}-duplicate-${f}-${s}`,class:`${t.props.className||""} ${i.slideDuplicateClass} ${t.props.class||""}`},t.children)}if(i.loopFillGroupWithBlank){const t=i.slidesPerGroup-a.length%i.slidesPerGroup;if(t!==i.slidesPerGroup)for(let f=0;f<t;f+=1){const s=N("div",{class:`${i.slideClass} ${i.slideBlankClass}`});a.push(s)}}i.slidesPerView==="auto"&&!i.loopedSlides&&(i.loopedSlides=a.length);const u=re(a,i),r=[],p=[];for(let t=0;t<u;t+=1){const f=t-Math.floor(t/a.length)*a.length;p.push(l(a[f],t,"append")),r.unshift(l(a[a.length-f-1],t,"prepend"))}return n.value&&(n.value.loopedSlides=u),[...r,...a,...p]}function Ne(n,e,i,a,l){const u=[];if(!e)return u;const r=t=>{u.indexOf(t)<0&&u.push(t)};if(i&&a){const t=a.map(l),f=i.map(l);t.join("")!==f.join("")&&r("children"),a.length!==i.length&&r("children")}return oe.filter(t=>t[0]==="_").map(t=>t.replace(/_/,"")).forEach(t=>{if(t in n&&t in e)if(A(n[t])&&A(e[t])){const f=Object.keys(n[t]),s=Object.keys(e[t]);f.length!==s.length?r(t):(f.forEach(d=>{n[t][d]!==e[t][d]&&r(t)}),s.forEach(d=>{n[t][d]!==e[t][d]&&r(t)}))}else n[t]!==e[t]&&r(t)}),u}function G(n,e,i){n===void 0&&(n={});const a=[],l={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]},u=(r,p)=>{!Array.isArray(r)||r.forEach(t=>{const f=typeof t.type=="symbol";p==="default"&&(p="container-end"),f&&t.children?u(t.children,"default"):t.type&&(t.type.name==="SwiperSlide"||t.type.name==="AsyncComponentWrapper")?a.push(t):l[p]&&l[p].push(t)})};return Object.keys(n).forEach(r=>{if(typeof n[r]!="function")return;const p=n[r]();u(p,r)}),i.value=e.value,e.value=a,{slides:a,slots:l}}function Ie(n){let{swiper:e,slides:i,passedParams:a,changedParams:l,nextEl:u,prevEl:r,scrollbarEl:p,paginationEl:t}=n;const f=l.filter(m=>m!=="children"&&m!=="direction"),{params:s,pagination:d,navigation:y,scrollbar:v,virtual:S,thumbs:_}=e;let h,g,x,o,b;l.includes("thumbs")&&a.thumbs&&a.thumbs.swiper&&s.thumbs&&!s.thumbs.swiper&&(h=!0),l.includes("controller")&&a.controller&&a.controller.control&&s.controller&&!s.controller.control&&(g=!0),l.includes("pagination")&&a.pagination&&(a.pagination.el||t)&&(s.pagination||s.pagination===!1)&&d&&!d.el&&(x=!0),l.includes("scrollbar")&&a.scrollbar&&(a.scrollbar.el||p)&&(s.scrollbar||s.scrollbar===!1)&&v&&!v.el&&(o=!0),l.includes("navigation")&&a.navigation&&(a.navigation.prevEl||r)&&(a.navigation.nextEl||u)&&(s.navigation||s.navigation===!1)&&y&&!y.prevEl&&!y.nextEl&&(b=!0);const P=m=>{!e[m]||(e[m].destroy(),m==="navigation"?(s[m].prevEl=void 0,s[m].nextEl=void 0,e[m].prevEl=void 0,e[m].nextEl=void 0):(s[m].el=void 0,e[m].el=void 0))};f.forEach(m=>{if(A(s[m])&&A(a[m]))D(s[m],a[m]);else{const w=a[m];(w===!0||w===!1)&&(m==="navigation"||m==="pagination"||m==="scrollbar")?w===!1&&P(m):s[m]=a[m]}}),f.includes("controller")&&!g&&e.controller&&e.controller.control&&s.controller&&s.controller.control&&(e.controller.control=s.controller.control),l.includes("children")&&i&&S&&s.virtual.enabled?(S.slides=i,S.update(!0)):l.includes("children")&&e.lazy&&e.params.lazy.enabled&&e.lazy.load(),h&&_.init()&&_.update(!0),g&&(e.controller.control=s.controller.control),x&&(t&&(s.pagination.el=t),d.init(),d.render(),d.update()),o&&(p&&(s.scrollbar.el=p),v.init(),v.updateSize(),v.setTranslate()),b&&(u&&(s.navigation.nextEl=u),r&&(s.navigation.prevEl=r),y.init(),y.update()),l.includes("allowSlideNext")&&(e.allowSlideNext=a.allowSlideNext),l.includes("allowSlidePrev")&&(e.allowSlidePrev=a.allowSlidePrev),l.includes("direction")&&e.changeDirection(a.direction,!1),e.update()}function De(n,e,i){if(!i)return null;const a=n.value.isHorizontal()?{[n.value.rtlTranslate?"right":"left"]:`${i.offset}px`}:{top:`${i.offset}px`};return e.filter((l,u)=>u>=i.from&&u<=i.to).map(l=>(l.props||(l.props={}),l.props.style||(l.props.style={}),l.props.swiperRef=n,l.props.style=a,N(l.type,{...l.props},l.children)))}const Ae=n=>{!n||n.destroyed||!n.params.virtual||n.params.virtual&&!n.params.virtual.enabled||(n.updateSlides(),n.updateProgress(),n.updateSlidesClasses(),n.lazy&&n.params.lazy.enabled&&n.lazy.load(),n.parallax&&n.params.parallax&&n.params.parallax.enabled&&n.parallax.setTranslate())},ze={name:"Swiper",props:{tag:{type:String,default:"div"},wrapperTag:{type:String,default:"div"},modules:{type:Array,default:void 0},init:{type:Boolean,default:void 0},direction:{type:String,default:void 0},touchEventsTarget:{type:String,default:void 0},initialSlide:{type:Number,default:void 0},speed:{type:Number,default:void 0},cssMode:{type:Boolean,default:void 0},updateOnWindowResize:{type:Boolean,default:void 0},resizeObserver:{type:Boolean,default:void 0},nested:{type:Boolean,default:void 0},focusableElements:{type:String,default:void 0},width:{type:Number,default:void 0},height:{type:Number,default:void 0},preventInteractionOnTransition:{type:Boolean,default:void 0},userAgent:{type:String,default:void 0},url:{type:String,default:void 0},edgeSwipeDetection:{type:[Boolean,String],default:void 0},edgeSwipeThreshold:{type:Number,default:void 0},autoHeight:{type:Boolean,default:void 0},setWrapperSize:{type:Boolean,default:void 0},virtualTranslate:{type:Boolean,default:void 0},effect:{type:String,default:void 0},breakpoints:{type:Object,default:void 0},spaceBetween:{type:Number,default:void 0},slidesPerView:{type:[Number,String],default:void 0},maxBackfaceHiddenSlides:{type:Number,default:void 0},slidesPerGroup:{type:Number,default:void 0},slidesPerGroupSkip:{type:Number,default:void 0},slidesPerGroupAuto:{type:Boolean,default:void 0},centeredSlides:{type:Boolean,default:void 0},centeredSlidesBounds:{type:Boolean,default:void 0},slidesOffsetBefore:{type:Number,default:void 0},slidesOffsetAfter:{type:Number,default:void 0},normalizeSlideIndex:{type:Boolean,default:void 0},centerInsufficientSlides:{type:Boolean,default:void 0},watchOverflow:{type:Boolean,default:void 0},roundLengths:{type:Boolean,default:void 0},touchRatio:{type:Number,default:void 0},touchAngle:{type:Number,default:void 0},simulateTouch:{type:Boolean,default:void 0},shortSwipes:{type:Boolean,default:void 0},longSwipes:{type:Boolean,default:void 0},longSwipesRatio:{type:Number,default:void 0},longSwipesMs:{type:Number,default:void 0},followFinger:{type:Boolean,default:void 0},allowTouchMove:{type:Boolean,default:void 0},threshold:{type:Number,default:void 0},touchMoveStopPropagation:{type:Boolean,default:void 0},touchStartPreventDefault:{type:Boolean,default:void 0},touchStartForcePreventDefault:{type:Boolean,default:void 0},touchReleaseOnEdges:{type:Boolean,default:void 0},uniqueNavElements:{type:Boolean,default:void 0},resistance:{type:Boolean,default:void 0},resistanceRatio:{type:Number,default:void 0},watchSlidesProgress:{type:Boolean,default:void 0},grabCursor:{type:Boolean,default:void 0},preventClicks:{type:Boolean,default:void 0},preventClicksPropagation:{type:Boolean,default:void 0},slideToClickedSlide:{type:Boolean,default:void 0},preloadImages:{type:Boolean,default:void 0},updateOnImagesReady:{type:Boolean,default:void 0},loop:{type:Boolean,default:void 0},loopAdditionalSlides:{type:Number,default:void 0},loopedSlides:{type:Number,default:void 0},loopedSlidesLimit:{type:Boolean,default:!0},loopFillGroupWithBlank:{type:Boolean,default:void 0},loopPreventsSlide:{type:Boolean,default:void 0},rewind:{type:Boolean,default:void 0},allowSlidePrev:{type:Boolean,default:void 0},allowSlideNext:{type:Boolean,default:void 0},swipeHandler:{type:Boolean,default:void 0},noSwiping:{type:Boolean,default:void 0},noSwipingClass:{type:String,default:void 0},noSwipingSelector:{type:String,default:void 0},passiveListeners:{type:Boolean,default:void 0},containerModifierClass:{type:String,default:void 0},slideClass:{type:String,default:void 0},slideBlankClass:{type:String,default:void 0},slideActiveClass:{type:String,default:void 0},slideDuplicateActiveClass:{type:String,default:void 0},slideVisibleClass:{type:String,default:void 0},slideDuplicateClass:{type:String,default:void 0},slideNextClass:{type:String,default:void 0},slideDuplicateNextClass:{type:String,default:void 0},slidePrevClass:{type:String,default:void 0},slideDuplicatePrevClass:{type:String,default:void 0},wrapperClass:{type:String,default:void 0},runCallbacksOnInit:{type:Boolean,default:void 0},observer:{type:Boolean,default:void 0},observeParents:{type:Boolean,default:void 0},observeSlideChildren:{type:Boolean,default:void 0},a11y:{type:[Boolean,Object],default:void 0},autoplay:{type:[Boolean,Object],default:void 0},controller:{type:Object,default:void 0},coverflowEffect:{type:Object,default:void 0},cubeEffect:{type:Object,default:void 0},fadeEffect:{type:Object,default:void 0},flipEffect:{type:Object,default:void 0},creativeEffect:{type:Object,default:void 0},cardsEffect:{type:Object,default:void 0},hashNavigation:{type:[Boolean,Object],default:void 0},history:{type:[Boolean,Object],default:void 0},keyboard:{type:[Boolean,Object],default:void 0},lazy:{type:[Boolean,Object],default:void 0},mousewheel:{type:[Boolean,Object],default:void 0},navigation:{type:[Boolean,Object],default:void 0},pagination:{type:[Boolean,Object],default:void 0},parallax:{type:[Boolean,Object],default:void 0},scrollbar:{type:[Boolean,Object],default:void 0},thumbs:{type:Object,default:void 0},virtual:{type:[Boolean,Object],default:void 0},zoom:{type:[Boolean,Object],default:void 0},grid:{type:[Object],default:void 0},freeMode:{type:[Boolean,Object],default:void 0},enabled:{type:Boolean,default:void 0}},emits:["_beforeBreakpoint","_containerClasses","_slideClass","_slideClasses","_swiper","_freeModeNoMomentumRelease","activeIndexChange","afterInit","autoplay","autoplayStart","autoplayStop","autoplayPause","autoplayResume","beforeDestroy","beforeInit","beforeLoopFix","beforeResize","beforeSlideChangeStart","beforeTransitionStart","breakpoint","changeDirection","click","disable","doubleTap","doubleClick","destroy","enable","fromEdge","hashChange","hashSet","imagesReady","init","keyPress","lazyImageLoad","lazyImageReady","lock","loopFix","momentumBounce","navigationHide","navigationShow","navigationPrev","navigationNext","observerUpdate","orientationchange","paginationHide","paginationRender","paginationShow","paginationUpdate","progress","reachBeginning","reachEnd","realIndexChange","resize","scroll","scrollbarDragEnd","scrollbarDragMove","scrollbarDragStart","setTransition","setTranslate","slideChange","slideChangeTransitionEnd","slideChangeTransitionStart","slideNextTransitionEnd","slideNextTransitionStart","slidePrevTransitionEnd","slidePrevTransitionStart","slideResetTransitionStart","slideResetTransitionEnd","sliderMove","sliderFirstMove","slidesLengthChange","slidesGridLengthChange","snapGridLengthChange","snapIndexChange","swiper","tap","toEdge","touchEnd","touchMove","touchMoveOpposite","touchStart","transitionEnd","transitionStart","unlock","update","virtualUpdate","zoomChange"],setup(n,e){let{slots:i,emit:a}=e;const{tag:l,wrapperTag:u}=n,r=$("swiper"),p=$(null),t=$(!1),f=$(!1),s=$(null),d=$(null),y=$(null),v={value:[]},S={value:[]},_=$(null),h=$(null),g=$(null),x=$(null),{params:o,passedParams:b}=q(n,!1);G(i,v,S),y.value=b,S.value=v.value;const P=()=>{G(i,v,S),t.value=!0};if(o.onAny=function(w){for(var c=arguments.length,E=new Array(c>1?c-1:0),T=1;T<c;T++)E[T-1]=arguments[T];a(w,...E)},Object.assign(o.on,{_beforeBreakpoint:P,_containerClasses(w,c){r.value=c}}),d.value=new V(o),d.value.loopCreate=()=>{},d.value.loopDestroy=()=>{},o.loop&&(d.value.loopedSlides=re(v.value,o)),d.value.virtual&&d.value.params.virtual.enabled){d.value.virtual.slides=v.value;const w={cache:!1,slides:v.value,renderExternal:c=>{p.value=c},renderExternalUpdate:!1};D(d.value.params.virtual,w),D(d.value.originalParams.virtual,w)}Z(()=>{!f.value&&d.value&&(d.value.emitSlidesClasses(),f.value=!0);const{passedParams:w}=q(n,!1),c=Ne(w,y.value,v.value,S.value,E=>E.props&&E.props.key);y.value=w,(c.length||t.value)&&d.value&&!d.value.destroyed&&Ie({swiper:d.value,slides:v.value,passedParams:w,changedParams:c,nextEl:_.value,prevEl:h.value,scrollbarEl:x.value,paginationEl:g.value}),t.value=!1}),ee("swiper",d),fe(p,()=>{pe(()=>{Ae(d.value)})}),J(()=>{!s.value||(Oe({el:s.value,nextEl:_.value,prevEl:h.value,paginationEl:g.value,scrollbarEl:x.value,swiper:d.value},o),a("swiper",d.value))}),Q(()=>{d.value&&!d.value.destroyed&&d.value.destroy(!0,!1)});function m(w){return o.virtual?De(d,w,p.value):!o.loop||d.value&&d.value.destroyed?(w.forEach(c=>{c.props||(c.props={}),c.props.swiperRef=d}),w):$e(d,w,o)}return()=>{const{slides:w,slots:c}=G(i,v,S);return N(l,{ref:s,class:se(r.value)},[c["container-start"],N(u,{class:"swiper-wrapper"},[c["wrapper-start"],m(w),c["wrapper-end"]]),ae(n)&&[N("div",{ref:h,class:"swiper-button-prev"}),N("div",{ref:_,class:"swiper-button-next"})],le(n)&&N("div",{ref:x,class:"swiper-scrollbar"}),ie(n)&&N("div",{ref:g,class:"swiper-pagination"}),c["container-end"]])}}},Re={name:"SwiperSlide",props:{tag:{type:String,default:"div"},swiperRef:{type:Object,required:!1},zoom:{type:Boolean,default:void 0},virtualIndex:{type:[String,Number],default:void 0}},setup(n,e){let{slots:i}=e,a=!1;const{swiperRef:l}=n,u=$(null),r=$("swiper-slide");function p(f,s,d){s===u.value&&(r.value=d)}J(()=>{!l.value||(l.value.on("_slideClass",p),a=!0)}),ce(()=>{a||!l||!l.value||(l.value.on("_slideClass",p),a=!0)}),Z(()=>{!u.value||!l||!l.value||l.value.destroyed&&r.value!=="swiper-slide"&&(r.value="swiper-slide")}),Q(()=>{!l||!l.value||l.value.off("_slideClass",p)});const t=me(()=>({isActive:r.value.indexOf("swiper-slide-active")>=0||r.value.indexOf("swiper-slide-duplicate-active")>=0,isVisible:r.value.indexOf("swiper-slide-visible")>=0,isDuplicate:r.value.indexOf("swiper-slide-duplicate")>=0,isPrev:r.value.indexOf("swiper-slide-prev")>=0||r.value.indexOf("swiper-slide-duplicate-prev")>=0,isNext:r.value.indexOf("swiper-slide-next")>=0||r.value.indexOf("swiper-slide-duplicate-next")>=0}));return ee("swiperSlide",t),()=>N(n.tag,{class:se(`${r.value}`),ref:u,"data-swiper-slide-index":n.virtualIndex},n.zoom?N("div",{class:"swiper-zoom-container","data-swiper-zoom":typeof n.zoom=="number"?n.zoom:void 0},i.default&&i.default(t.value)):i.default&&i.default(t.value))}},Le={name:"turntable",components:{Swiper:ze,SwiperSlide:Re},data(){return{foodName:[{name:"\u6EF7\u8089\u98EF"},{name:"\u7092\u9EB5"},{name:"\u5228\u51B0"},{name:"\u70CF\u9F8D\u9EB5"},{name:"\u62C9\u9EB5"},{name:"\u7092\u6CE1\u9EB5"},{name:"\u5730\u74DC\u7403"},{name:"\u4E09\u660E\u6CBB"},{name:"\u6F22\u5821"},{name:"\u6F5B\u8247\u5821"},{name:"\u7FA9\u5927\u5229\u9EB5"},{name:"\u62AB\u85A9"},{name:"\u81ED\u8C46\u8150"}],NotAutoPlay:!0}},methods:{autoPlay(){var n=document.querySelector(".turntableSwiper").swiper;this.NotAutoPlay=n.autoplay.running,this.NotAutoPlay?n.autoplay.stop():n.autoplay.start(),console.log("NotAutoPlay",this.NotAutoPlay)}},computed:{},setup(){return{onSwiper:i=>{},onSlideChange:()=>{},modules:[xe,Pe,Ee,Se,Te]}}},je={class:"turntableSection"},Ve={class:"turntable"},He={class:"turntableBtn"};function Ge(n,e,i,a,l,u){const r=U("swiper-slide"),p=U("swiper");return L(),k("div",je,[j("div",Ve,[ne(p,{effect:"creative",freeMode:{enabled:!0,sticky:!0,momentumBounce:!1,momentumRatio:100,momentumVelocityRatio:100,momentumBounceRatio:100},creativeEffect:{prev:{translate:["-100%","30%",1],rotate:[0,0,-45],opacity:0},next:{translate:["100%","30%",1],rotate:[0,0,45],opacity:0}},slidesPerView:3,speed:100,spaceBetween:30,centeredSlides:!0,loop:!0,loopedSlides:5,mousewheel:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},autoplay:{enabled:!1,delay:0,disableOnInteraction:!0},grabCursor:!0,modules:a.modules,class:"turntableSwiper",onSwiper:a.onSwiper,onSlideChange:a.onSlideChange},{default:Y(()=>[(L(!0),k(ge,null,he(l.foodName,(t,f)=>(L(),ye(r,{class:"turntableItem",key:f},{default:Y(({isActive:s})=>[be(we(t.name),1)]),_:2},1024))),128))]),_:1},8,["creativeEffect","modules","onSwiper","onSlideChange"])]),j("div",He,[j("div",{class:ve(["btn",{active:!l.NotAutoPlay}]),onClick:e[0]||(e[0]=t=>u.autoPlay())},"\u6211\u662F\u81EA\u52D5\u64AD\u653E",2)])])}const Fe=te(Le,[["render",Ge],["__scopeId","data-v-2e58c723"]]),ke={name:"index"},Xe=j("h1",null,"\u6211\u662F\u6E2C\u8A66\u8F49\u76E4",-1);function We(n,e,i,a,l,u){const r=Fe;return L(),k("div",null,[Xe,ne(r)])}const Ue=te(ke,[["render",We]]);export{Ue as default};
