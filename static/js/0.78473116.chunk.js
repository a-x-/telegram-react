(this.webpackJsonptelegram_react=this.webpackJsonptelegram_react||[]).push([[0],{410:function(t,e,n){"use strict";n.r(e);var i=n(41),o=n(4),a=n(5),s=n(8),r=n(7),c=n(9),u=n(0),l=n.n(u);n(661);function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(n,!0).forEach(function(e){Object(i.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var m=function(t){function e(){return Object(o.a)(this,e),Object(s.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(a.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props,n=e.options,i=e.eventListeners,o=(n.url,n.loop),a=n.autoplay,s=n.animationData,r=n.stringData,c=n.rendererSettings,u=n.segments;this.options={container:this.el,renderer:"canvas",loop:Boolean(o),autoplay:Boolean(a),segments:Boolean(u),animationData:s,stringData:r,rendererSettings:c},this.options=h({},this.options,{},n);this.options.animationData,this.options.fileId;window.RLottie.loadAnimation(this.options,function(e){if(t.anim=e,window.RLottie.hasFirstFrame(t.anim)){if(!i)return;i.forEach(function(t){var e=t.eventName,n=t.callback;"firstFrame"===e&&n&&n()})}}),this.registerEvents(i)}},{key:"componentDidUpdate",value:function(t,e,n){var i=this,o=this.props,a=o.options,s=o.eventListeners,r=t.options,c=t.eventListeners;if(a.animationData!==r.animationData||a.fileId!==r.fileId){this.unregisterEvents(c),this.destroy(),this.options=h({},this.options,{},a);this.props.options.url;window.RLottie.loadAnimation(this.options,function(t){i.anim=t,s&&s.forEach(function(t){var e=t.eventName,n=t.callback;"firstFrame"===e&&n&&n()})}),this.registerEvents(s)}}},{key:"componentWillUnmount",value:function(){this.unregisterEvents(this.props.eventListeners),this.destroy(),this.options.blob=null,this.options.container=null,this.options=null,this.anim=null}},{key:"play",value:function(){window.RLottie.play(this.anim)}},{key:"playSegments",value:function(t,e){window.RLottie.playSegments(this.anim,t,e)}},{key:"pause",value:function(){return!window.RLottie.isPaused(this.anim)&&(window.RLottie.pause(this.anim),!0)}},{key:"destroy",value:function(){this.anim&&window.RLottie.destroy(this.anim)}},{key:"registerEvents",value:function(t){var e=this;this.anim&&t&&t.forEach(function(t){var n=t.eventName,i=t.callback;window.RLottie.addEventListener(e.anim,n,i)})}},{key:"unregisterEvents",value:function(t){var e=this;this.anim&&t&&t.forEach(function(t){var n=t.eventName,i=t.callback;window.RLottie.removeEventListener(e.anim,n,i)})}},{key:"render",value:function(){var t=this,e=this.props,n=e.width,i=e.height,o=e.ariaRole,a=e.ariaLabel,s=e.title,r=e.onClick,c=e.onMouseEnter,u=e.onMouseOut,p=h({width:n||"100%",height:i||"100%",overflow:"hidden",outline:"none"},this.props.style);return l.a.createElement("div",{style:p,title:s,role:o,"aria-label":a,tabIndex:"0",onClick:r,onMouseEnter:c,onMouseOut:u},l.a.createElement("picture",{ref:function(e){return t.el=e},className:"dev_page_tgsticker tl_main_card_animated js-tgsticker_image"}))}},{key:"isPaused",get:function(){return!!this.anim&&window.RLottie.isPaused(this.anim)}}]),e}(l.a.Component);e.default=m},661:function(t,e,n){}}]);
//# sourceMappingURL=0.78473116.chunk.js.map