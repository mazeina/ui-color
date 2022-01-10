/*! For license information please see uiw-vendor.092c4800.js.LICENSE.txt */
(self.webpackChunkui_color=self.webpackChunkui_color||[]).push([[382],{411:function(e,t,r){"use strict";r.d(t,{S7:function(){return l},Gg:function(){return c},HW:function(){return p},MA:function(){return g},XL:function(){return v},A:function(){return x},$_:function(){return b}});var n=r(152),o=r(272),a=r(680),i=255,s=100,l=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,a=Math.max(t,r,n),l=a-Math.min(t,r,n),c=l?a===t?(r-n)/l:a===r?2+(n-t)/l:4+(t-r)/l:0;return{h:60*(c<0?c+6:c),s:a?l/a*s:0,v:a/i*s,a:o}},c=function(e){var t=u(e);return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},u=function(e){var t=e.h,r=e.s,n=e.v,o=e.a,a=(200-r)*n/s;return{h:t,s:a>0&&a<200?r*n/s/(a<=s?a:200-a)*s:0,l:a/2,a:o}},d=(Math.PI,function(e){var t,r=e.r,n=e.g,o=e.b;return"#"+(t=(r<<16|n<<8|o).toString(16),new Array(7-t.length).join("0")+t)}),f=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,a="number"===typeof o&&(255*o|256).toString(16).slice(1);return""+d({r:t,g:r,b:n,a:o})+(a||"")},p=function(e){return l(h(e))},h=function(e){var t=e.replace("#","");/^#?/.test(e)&&3===t.length&&(e="#"+t.charAt(0)+t.charAt(0)+t.charAt(1)+t.charAt(1)+t.charAt(2)+t.charAt(2));var r=new RegExp("[A-Za-z0-9]{2}","g"),o=e.match(r).map((function(e){return parseInt(e,16)})),a=(0,n.Z)(o,4),s=a[0],l=a[1],c=a[2],u=void 0===c?0:c,d=a[3];return{r:s,g:l,b:u,a:d?d/i:1}},g=function(e){var t=e.h,r=e.s,n=e.v,a=e.a,l=t/60,c=r/s,u=n/s,d=Math.floor(l)%6,f=l-Math.floor(l),p=i*u*(1-c),h=i*u*(1-c*f),g=i*u*(1-c*(1-f));u*=i;var v={};switch(d){case 0:v.r=u,v.g=g,v.b=p;break;case 1:v.r=h,v.g=u,v.b=p;break;case 2:v.r=p,v.g=u,v.b=g;break;case 3:v.r=p,v.g=h,v.b=u;break;case 4:v.r=g,v.g=p,v.b=u;break;case 5:v.r=u,v.g=p,v.b=h}return v.r=Math.round(v.r),v.g=Math.round(v.g),v.b=Math.round(v.b),(0,o.Z)({},v,{a:a})},v=function(e){var t=g(e);return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},x=function(e){return d(g(e))},b=function(e){var t,r,n,o,i,s,l,c,d,h,v;return"string"===typeof e&&(0,a.Ff)(e)?(s=p(e),l=e):"string"!==typeof e&&(s=e),s&&(n={h:(v=s).h,s:v.s,v:v.v},i=u(s),o=g(s),c=f(o),l=x(s),r={h:(h=i).h,s:h.s,l:h.l},t={r:(d=o).r,g:d.g,b:d.b}),{rgb:t,hsl:r,hsv:n,rgba:o,hsla:i,hsva:s,hex:l,hexa:c}}},680:function(e,t,r){"use strict";r.d(t,{Ff:function(){return n}});var n=function(e){return/^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(e)}},984:function(e){e.exports=function(){"use strict";function e(e,t){var r=document.createElement("textarea");r.value=e,r.setAttribute("readonly",""),r.style={position:"absolute",left:"-9999px"},document.body.appendChild(r);var n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);r.select();var o=!1;try{o=!!document.execCommand("copy")}catch(a){o=!1}document.body.removeChild(r),n&&document.getSelection&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n)),t&&t(o)}return e}()},496:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(272),o=r(366),a=r(879),i=r(411),s=r(507),l=r(364),c=function(e){var t=e.className,r=e.prefixCls,n=e.left,o=e.top,i={position:"absolute",left:n,top:o};return(0,a.useMemo)((function(){return(0,l.jsx)("div",{className:r+"-pointer "+(t||""),style:i,children:(0,l.jsx)("div",{className:r+"-fill",style:{width:18,height:18,transform:n?"translate(-9px, -1px)":"translate(-1px, -9px)",boxShadow:"rgb(0 0 0 / 37%) 0px 1px 4px 0px",borderRadius:"50%",backgroundColor:"rgb(248, 248, 248)"}})})}),[t,n,o,r])},u=["prefixCls","className","hsva","background","bgProps","innerProps","radius","width","height","direction","style","onChange","pointer"],d=a.forwardRef((function(e,t){var r=e.prefixCls,d=void 0===r?"w-color-alpha":r,f=e.className,p=e.hsva,h=e.background,g=e.bgProps,v=void 0===g?{}:g,x=e.innerProps,b=void 0===x?{}:x,m=e.radius,y=void 0===m?0:m,C=e.width,w=e.height,Z=void 0===w?16:w,A=e.direction,j=void 0===A?"horizontal":A,N=e.style,k=e.onChange,R=e.pointer,S=(0,o.Z)(e,u),B=(0,a.useCallback)((function(e){k&&k((0,n.Z)({},p,{a:"horizontal"===j?e.left:e.top}),e)}),[p]),M=(0,i.Gg)(Object.assign({},p,{a:1})),E="linear-gradient(to "+("horizontal"===j?"right":"bottom")+", rgba(244, 67, 54, 0) 0%, "+M+" 100%)",P={};return"horizontal"===j?P.left=100*p.a+"%":P.top=100*p.a+"%",(0,l.jsxs)("div",(0,n.Z)({},S,{className:[d,d+"-"+j,f||""].filter(Boolean).join(" "),style:(0,n.Z)({borderRadius:y,background:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==) left center",backgroundColor:"#fff"},N,{position:"relative"},{width:C,height:Z}),ref:t,children:[(0,l.jsx)("div",(0,n.Z)({},v,{style:(0,n.Z)({inset:0,position:"absolute",background:h||E,borderRadius:y},v.style)})),(0,l.jsx)(s.ZP,(0,n.Z)({},b,{style:(0,n.Z)({},b.style,{inset:0,zIndex:1,position:"absolute"}),onMove:B,onDown:B,children:a.createElement(R||c,(0,n.Z)({prefixCls:d},P))}))]}))}));d.displayName="Aplha";var f=d},226:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(272),o=r(366),a=r(879),i=r(411),s=r(680),l=r(621),c=r(364);function u(e){var t=e.style,r=e.title,o=e.checked,i=e.color,s=e.onClick,l=e.rectProps,u=(0,a.useRef)(null),d=(0,a.useCallback)((function(e){u.current.style.transform="scale(1.2)"}),[]),f=(0,a.useCallback)((function(e){u.current.style.transform="scale(1)"}),[]);return(0,c.jsx)("div",{ref:u,onClick:s,onMouseEnter:d,onMouseLeave:f,title:r,style:(0,n.Z)({},t,{display:"flex",alignItems:"center",justifyContent:"center",width:28,height:28,padding:3,borderRadius:"50%",marginRight:12,marginBottom:12,boxSizing:"border-box",transform:"scale(1)",boxShadow:i+" 0px 0px "+(o?5:0)+"px",transition:"transform 100ms ease 0s, box-shadow 100ms ease 0s"}),children:(0,c.jsx)("div",(0,n.Z)({},l,{style:(0,n.Z)({height:o?"100%":0,width:o?"100%":0,borderRadius:"50%",backgroundColor:"#fff",boxSizing:"border-box",transition:"height 100ms ease 0s, width 100ms ease 0s"},l.style)}))})}var d=["prefixCls","className","color","colors","rectProps","onChange"],f=a.forwardRef((function(e,t){var r=e.prefixCls,a=void 0===r?"w-color-circle":r,f=e.className,p=e.color,h=e.colors,g=void 0===h?[]:h,v=e.rectProps,x=void 0===v?{}:v,b=e.onChange,m=(0,o.Z)(e,d),y="string"===typeof p&&(0,s.Ff)(p)?(0,i.HW)(p):p||{},C=p?(0,i.A)(y):"";return(0,c.jsx)(l.Z,(0,n.Z)({ref:t,colors:g,color:C},m,{className:[a,f].filter(Boolean).join(" "),rectRender:function(e){var t=(0,n.Z)({},e);return(0,c.jsx)(u,(0,n.Z)({},t,{rectProps:x}))},onChange:function(e){b&&b((0,i.$_)(e))}}))}));f.displayName="Circle";var p=f},495:function(e,t,r){"use strict";var n=r(272),o=r(366),a=r(879),i=r(411),s=r(496),l=r(364),c=["prefixCls","className","onChange","direction","hsva"],u=a.forwardRef((function(e,t){var r=e.prefixCls,a=void 0===r?"w-color-saturation":r,u=e.className,d=e.onChange,f=e.direction,p=void 0===f?"horizontal":f,h=e.hsva,g=(0,o.Z)(e,c),v=(0,i.Gg)(Object.assign({},h,{a:1,s:100,v:100}));return(0,l.jsx)(s.Z,(0,n.Z)({ref:t},g,{className:a+" "+(u||""),hsva:{h:h.h,s:100,v:h.v,a:1-h.v/100},direction:p,background:"linear-gradient(to "+("horizontal"===p?"right":"bottom")+", "+v+", rgb(0, 0, 0))",onChange:function(e,t){d&&d({v:"horizontal"===p?100-100*t.left:100-100*t.top,s:100})}}))}));u.displayName="ShadeSlider",t.Z=u},384:function(e,t,r){"use strict";r.d(t,{Z:function(){return B}});var n=r(152),o=r(272),a=r(366),i=r(879),s=r(411),l=r(507),c=r(364),u=function(e){var t=e.className,r=e.color,n=e.left,o=e.top,a=e.prefixCls,s={position:"absolute",top:o,left:n};return(0,i.useMemo)((function(){return(0,c.jsx)("div",{className:a+"-pointer "+(t||""),style:s,children:(0,c.jsx)("div",{className:a+"-fill",style:{width:6,height:6,transform:"translate(-3px, -3px)",boxShadow:"rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",borderRadius:"50%",backgroundColor:r}})})}),[o,n,r,t,a])},d=["prefixCls","radius","pointer","className","style","hsva","onChange"],f=i.forwardRef((function(e,t){var r=e.prefixCls,n=void 0===r?"w-color-saturation":r,f=e.radius,p=void 0===f?0:f,h=e.pointer,g=e.className,v=e.style,x=e.hsva,b=e.onChange,m=(0,a.Z)(e,d),y=(0,o.Z)({width:200,height:200,borderRadius:p},v,{position:"relative"}),C=function(e,t){b&&b({h:x.h,s:100*e.left,v:100*(1-e.top),a:x.a})},w={top:100-x.v+"%",left:x.s+"%",color:(0,s.Gg)(x)};return(0,c.jsx)(l.ZP,(0,o.Z)({className:[n,g||""].filter(Boolean).join(" ")},m,{style:(0,o.Z)({position:"absolute",inset:0,cursor:"crosshair",backgroundImage:"linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, hsl("+x.h+", 100%, 50%))"},y),ref:t,onMove:C,onDown:C,children:i.createElement(h||u,(0,o.Z)({prefixCls:n},w))}))}));f.displayName="Saturation";var p=f,h=r(496),g=["prefixCls","placement","label","value","className","style","labelStyle","inputStyle","onChange","onBlur"],v=i.forwardRef((function(e,t){var r=e.prefixCls,s=void 0===r?"w-color-editable-input":r,l=e.placement,u=void 0===l?"bottom":l,d=e.label,f=e.value,p=e.className,h=e.style,v=e.labelStyle,x=e.inputStyle,b=e.onChange,m=e.onBlur,y=(0,a.Z)(e,g),C=(0,i.useState)(f),w=(0,n.Z)(C,2),Z=w[0],A=w[1],j=(0,i.useRef)(!1);(0,i.useEffect)((function(){e.value!==Z&&(j.current||A(e.value))}),[e.value]);var N={};return"bottom"===u&&(N.flexDirection="column"),"top"===u&&(N.flexDirection="column-reverse"),"left"===u&&(N.flexDirection="row-reverse"),(0,c.jsxs)("div",{className:[s,p||""].filter(Boolean).join(" "),style:(0,o.Z)({position:"relative",alignItems:"center",display:"flex",fontSize:11},N,h),children:[(0,c.jsx)("input",(0,o.Z)({ref:t,value:Z,onChange:function(e,t){var r=t||e.target.value;/^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(r)&&b&&b(e,r);var n=function(e){return Number(String(e).replace(/%/g,""))}(r);isNaN(n)||b&&b(e,n),A(r)},onBlur:function(t){j.current=!1,A(e.value),m&&m(t)},autoComplete:"off",onFocus:function(){return j.current=!0}},y,{style:(0,o.Z)({width:"100%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,fontSize:11,boxSizing:"border-box",border:"none",boxShadow:"rgb(204 204 204) 0px 0px 0px 1px inset"},x)})),d&&(0,c.jsx)("span",{style:(0,o.Z)({color:"rgb(153, 153, 153)",textTransform:"capitalize"},v),children:d})]})}));v.displayName="EditableInput";var x=v,b=["prefixCls","hsva","placement","rProps","gProps","bProps","aProps","className","style","onChange"],m=i.forwardRef((function(e,t){var r=e.prefixCls,n=void 0===r?"w-color-editable-input-rgba":r,i=e.hsva,l=e.placement,u=void 0===l?"bottom":l,d=e.rProps,f=void 0===d?{}:d,p=e.gProps,h=void 0===p?{}:p,g=e.bProps,v=void 0===g?{}:g,m=e.aProps,y=void 0===m?{}:m,C=e.className,w=e.style,Z=e.onChange,A=(0,a.Z)(e,b),j=i?(0,s.MA)(i):{};function N(e){var t=Number(e.target.value);t&&t>255&&(e.target.value="255"),t&&t<0&&(e.target.value="0")}var k=function(e,t,r){"number"===typeof e&&("a"===t&&(e<0&&(e=0),e>100&&(e=100),Z&&Z((0,s.$_)((0,s.S7)((0,o.Z)({},j,{a:e/100}))))),e>255&&(e=255,r.target.value="255"),e<0&&(e=0,r.target.value="0"),"r"===t&&Z&&Z((0,s.$_)((0,s.S7)((0,o.Z)({},j,{r:e})))),"g"===t&&Z&&Z((0,s.$_)((0,s.S7)((0,o.Z)({},j,{g:e})))),"b"===t&&Z&&Z((0,s.$_)((0,s.S7)((0,o.Z)({},j,{b:e})))))};return(0,c.jsxs)("div",(0,o.Z)({ref:t,className:[n,C||""].filter(Boolean).join(" ")},A,{style:(0,o.Z)({fontSize:11,display:"flex"},w),children:[(0,c.jsx)(x,(0,o.Z)({label:"R",value:j.r||0,onBlur:N,placement:u,onChange:function(e,t){return k(t,"r",e)}},f,{style:(0,o.Z)({},f.style)})),(0,c.jsx)(x,(0,o.Z)({label:"G",value:j.g||0,onBlur:N,placement:u,onChange:function(e,t){return k(t,"g",e)}},h,{style:(0,o.Z)({marginLeft:5},f.style)})),(0,c.jsx)(x,(0,o.Z)({label:"B",value:j.b||0,onBlur:N,placement:u,onChange:function(e,t){return k(t,"b",e)}},v,{style:(0,o.Z)({marginLeft:5},v.style)})),y&&(0,c.jsx)(x,(0,o.Z)({label:"A",value:j.a?parseInt(String(100*j.a),10):0,onBlur:N,placement:u,onChange:function(e,t){return k(t,"a",e)}},y,{style:(0,o.Z)({marginLeft:5},y.style)}))]}))}));m.displayName="EditableInputRGBA";var y=m,C=["prefixCls","className","hue","onChange","direction"],w=i.forwardRef((function(e,t){var r=e.prefixCls,n=void 0===r?"w-color-hue":r,i=e.className,s=e.hue,l=void 0===s?0:s,u=e.onChange,d=e.direction,f=void 0===d?"horizontal":d,p=(0,a.Z)(e,C);return(0,c.jsx)(h.Z,(0,o.Z)({ref:t,className:n+" "+(i||"")},p,{direction:f,background:"linear-gradient(to "+("horizontal"===f?"right":"bottom")+", rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)",hsva:{h:l,s:100,v:100,a:l/360},onChange:function(e,t){u&&u({h:"horizontal"===f?360*t.left:360*t.top})}}))}));w.displayName="Hue";var Z=w,A=r(680),j=r(621),N=["prefixCls","className","onChange","width","presetColors","color","editableDisable","style"],k=["#D0021B","#F5A623","#f8e61b","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"],R=function(e){return(0,c.jsx)("div",{style:{boxShadow:"rgb(0 0 0 / 60%) 0px 0px 2px",width:4,top:1,bottom:1,left:e.left,borderRadius:1,position:"absolute",backgroundColor:"#fff"}})},S=i.forwardRef((function(e,t){var r=e.prefixCls,l=void 0===r?"w-color-sketch":r,u=e.className,d=e.onChange,f=e.width,g=void 0===f?218:f,v=e.presetColors,b=void 0===v?k:v,m=e.color,C=e.editableDisable,w=void 0===C||C,S=e.style,B=(0,a.Z)(e,N),M=(0,i.useState)({h:209,s:36,v:90,a:1}),E=(0,n.Z)(M,2),P=E[0],L=E[1];(0,i.useEffect)((function(){"string"===typeof m&&(0,A.Ff)(m)&&L((0,s.HW)(m)),"object"===typeof m&&L(m)}),[m]);var z=(0,i.useCallback)((function(e){L(e),d&&d((0,s.$_)(e))}),[P]);return(0,c.jsxs)("div",(0,o.Z)({},B,{className:l+" "+(u||""),ref:t,style:(0,o.Z)({background:"rgb(255, 255, 255)",borderRadius:4,boxShadow:"rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px",width:g},S),children:[(0,c.jsxs)("div",{style:{padding:"10px 10px 8px"},children:[(0,c.jsx)(p,{hsva:P,style:{width:"auto",height:150},onChange:function(e){return z((0,o.Z)({},P,e,{a:P.a}))}}),(0,c.jsxs)("div",{style:{display:"flex",marginTop:4},children:[(0,c.jsxs)("div",{style:{flex:1},children:[(0,c.jsx)(Z,{width:"auto",height:10,hue:P.h,pointer:R,innerProps:{style:{marginLeft:1,marginRight:5}},onChange:function(e){return z((0,o.Z)({},P,e))}}),(0,c.jsx)(h.Z,{width:"auto",height:10,hsva:P,pointer:R,style:{marginTop:4},innerProps:{style:{marginLeft:1,marginRight:5}},onChange:function(e){z((0,o.Z)({},P,{a:e.a}))}})]}),(0,c.jsx)(h.Z,{width:24,height:24,hsva:P,radius:2,style:{marginLeft:4},bgProps:{style:{background:"transparent"}},innerProps:{style:{borderRadius:2,background:(0,s.XL)(P),boxShadow:"rgb(0 0 0 / 15%) 0px 0px 0px 1px inset, rgb(0 0 0 / 25%) 0px 0px 4px inset"}},pointer:function(){return(0,c.jsx)(i.Fragment,{})}})]})]}),w&&(0,c.jsxs)("div",{style:{display:"flex",margin:"0 10px 3px 10px"},children:[(0,c.jsx)(x,{label:"Hex",value:(0,s.A)(P).replace(/^#/,"").toLocaleUpperCase(),onChange:function(e,t){var r;"string"===typeof(r=t)&&(0,A.Ff)(r)&&/(3|6)/.test(String(r.length))&&z((0,s.HW)(r))},style:{minWidth:58}}),(0,c.jsx)(y,{hsva:P,style:{marginLeft:6},onChange:function(e){return z(e.hsva)}})]}),b&&b.length>0&&(0,c.jsx)(j.Z,{style:{borderTop:"1px solid rgb(238, 238, 238)",paddingTop:10,paddingLeft:10},colors:b,color:(0,s.A)(P),onChange:function(e){return z(e)},rectProps:{style:{marginRight:10,marginBottom:10,borderRadius:3,boxShadow:"rgb(0 0 0 / 15%) 0px 0px 0px 1px inset"}}})]}))}));S.displayName="Sketch";var B=S},621:function(e,t,r){"use strict";var n=r(272),o=r(366),a=r(879),i=r(411),s=r(364),l=["prefixCls","className","color","colors","style","rectProps","onChange","addonAfter","addonBefore","rectRender"],c=a.forwardRef((function(e,t){var r=e.prefixCls,c=void 0===r?"w-color-swatch":r,u=e.className,d=e.color,f=e.colors,p=void 0===f?[]:f,h=e.style,g=e.rectProps,v=void 0===g?{}:g,x=e.onChange,b=e.addonAfter,m=e.addonBefore,y=e.rectRender,C=(0,o.Z)(e,l),w=(0,n.Z)({background:"rgb(144, 19, 254)",height:15,width:15,marginRight:5,marginBottom:5,cursor:"pointer",position:"relative",outline:"none",borderRadius:2},v.style),Z=function(e){x&&x((0,i.HW)(e))};return(0,s.jsxs)("div",(0,n.Z)({ref:t},C,{className:[c,u||""].filter(Boolean).join(" "),style:(0,n.Z)({display:"flex",flexWrap:"wrap",position:"relative"},h),children:[m&&a.isValidElement(m)&&m,p&&Array.isArray(p)&&p.map((function(e,t){var r="",o="";"string"===typeof e&&(r=e,o=e),"object"===typeof e&&e.color&&(r=e.title||e.color,o=e.color);var i=d&&d.toLocaleLowerCase()===o.toLocaleLowerCase();if(y)return y({key:t,title:r,color:o,checked:!!i,style:(0,n.Z)({},w,{background:o}),onClick:function(){return Z(o)}});var l=v.children&&a.isValidElement(v.children)?a.cloneElement(v.children,{color:o,checked:i}):null;return(0,s.jsx)("div",(0,n.Z)({tabIndex:0,title:r,onClick:function(){return Z(o)}},v,{children:l,style:(0,n.Z)({},w,{background:o})}),t)})),b&&a.isValidElement(b)&&b]}))}));c.displayName="Swatch",t.Z=c},300:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(272),o=r(366),a=r(879),i=r(411),s=r(680),l=r(507),c=r(364),u=function(e){var t=e.className,r=e.color,o=e.left,i=e.top,s=e.style,l=e.prefixCls,u=(0,n.Z)({},s,{position:"absolute",top:i,left:o});return(0,a.useMemo)((function(){return(0,c.jsx)("div",{className:l+"-pointer "+(t||""),style:u,children:(0,c.jsx)("div",{className:l+"-fill",style:{width:10,height:10,transform:"translate(-5px, -5px)",boxShadow:"rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",borderRadius:"50%",backgroundColor:"#fff"},children:(0,c.jsx)("div",{style:{inset:0,borderRadius:"50%",position:"absolute",backgroundColor:r}})})})}),[i,o,r,t,l])},d=2*Math.PI,f=function(e,t){return Math.sqrt(e*e+t*t)};function p(e){var t=e.width,r=void 0===t?0:t,n=r/2;return{width:r,radius:n,cx:n,cy:n}}function h(e){var t=e.width;return(void 0===t?0:t)/2}function g(e,t,r){var n,o=e.angle||0,a=e.direction;return r&&"clockwise"===a?t=o+t:"clockwise"===a?t=360-o+t:r&&"anticlockwise"===a?t=o+180-t:"anticlockwise"===a&&(t=o-t),(t%(n=360)+n)%n}var v=["prefixCls","radius","pointer","className","style","width","height","direction","angle","color","onChange"],x=a.forwardRef((function(e,t){var r=e.prefixCls,x=void 0===r?"w-color-wheel":r,b=(e.radius,e.pointer),m=e.className,y=e.style,C=e.width,w=void 0===C?200:C,Z=e.height,A=void 0===Z?200:Z,j=e.direction,N=void 0===j?"anticlockwise":j,k=e.angle,R=void 0===k?180:k,S=e.color,B=e.onChange,M=(0,o.Z)(e,v),E="string"===typeof S&&(0,s.Ff)(S)?(0,i.HW)(S):S||{},P=S?(0,i.A)(E):"",L=function(e,t){var r=p(e),n=r.cx,o=r.cy,a=h(e),i=(180+g(e,t.h,!0))*(d/360),s=t.s/100*a,l="clockwise"===e.direction?-1:1;return{x:n+s*Math.cos(i)*l,y:o+s*Math.sin(i)*l}}({width:w},E),z={top:"0",left:"0",color:P},D=function(e,t){var r=function(e,t,r){var n=p(e),o=n.cx,a=n.cy,i=h(e);t=o-t,r=a-r;var s=g(e,Math.atan2(-r,-t)*(360/d)),l=Math.min(f(t,r),i);return{h:Math.round(s),s:Math.round(100/i*l)}}({width:w},w-e.x,A-e.y),n={h:r.h,s:r.s,v:E.v,a:E.a};B&&B((0,i.$_)(n))};return(0,c.jsxs)(l.ZP,(0,n.Z)({className:[x,m||""].filter(Boolean).join(" ")},M,{style:(0,n.Z)({},y,{position:"relative",width:w,height:A}),ref:t,onMove:D,onDown:D,children:[a.createElement(b||u,(0,n.Z)({prefixCls:x,style:{zIndex:1,transform:"translate("+L.x+"px, "+L.y+"px)"}},z)),(0,c.jsx)("div",{style:{position:"absolute",borderRadius:"50%",background:"anticlockwise"===N?"conic-gradient(red, yellow, lime, aqua, blue, magenta, red)":"conic-gradient(red, magenta, blue, aqua, lime, yellow, red)",transform:"rotateZ("+(R+90)+"deg)",inset:0}}),(0,c.jsx)("div",{style:{position:"absolute",borderRadius:"50%",background:"radial-gradient(circle closest-side, #fff, transparent)",inset:0}}),(0,c.jsx)("div",{style:{backgroundColor:"#000",borderRadius:"50%",position:"absolute",inset:0,opacity:"number"===typeof E.v?1-E.v/100:0}})]}))}));x.displayName="Wheel";var b=x},507:function(e,t,r){"use strict";r.d(t,{ZP:function(){return g}});var n=r(152),o=r(272),a=r(366),i=r(879);function s(e){var t=(0,i.useRef)(e);return(0,i.useEffect)((function(){t.current=e})),(0,i.useCallback)((function(e,r){return t.current&&t.current(e,r)}),[])}var l=function(e){return"touches"in e},c=function(e){!l(e)&&e.preventDefault&&e.preventDefault()},u=function(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=1),e>r?r:e<t?t:e},d=function(e,t){var r=e.getBoundingClientRect(),n=l(t)?t.touches[0]:t;return{left:u((n.pageX-(r.left+window.pageXOffset))/r.width),top:u((n.pageY-(r.top+window.pageYOffset))/r.height),width:r.width,height:r.height,x:n.pageX-(r.left+window.pageXOffset),y:n.pageY-(r.top+window.pageYOffset)}},f=r(364),p=["prefixCls","className","onMove","onDown"],h=i.forwardRef((function(e,t){var r=e.prefixCls,u=void 0===r?"w-color-interactive":r,h=e.className,g=e.onMove,v=e.onDown,x=(0,a.Z)(e,p),b=(0,i.useRef)(null),m=(0,i.useRef)(!1),y=(0,i.useState)(!1),C=(0,n.Z)(y,2),w=C[0],Z=C[1],A=s(g),j=s(v),N=(0,i.useCallback)((function(e){c(e),(l(e)?e.touches.length>0:e.buttons>0)&&b.current?A&&A(d(b.current,e),e):Z(!1)}),[A]),k=(0,i.useCallback)((function(){return Z(!1)}),[]),R=(0,i.useCallback)((function(e){var t=e?window.addEventListener:window.removeEventListener;t(m.current?"touchmove":"mousemove",N),t(m.current?"touchend":"mouseup",k)}),[]);(0,i.useEffect)((function(){return R(w),function(){w&&R(!1)}}),[w,R]);var S=(0,i.useCallback)((function(e){c(e.nativeEvent),function(e){return!(m.current&&!l(e))&&(m.current=l(e),!0)}(e.nativeEvent)&&(j&&j(d(b.current,e.nativeEvent),e.nativeEvent),Z(!0))}),[j]);return(0,f.jsx)("div",(0,o.Z)({},x,{className:[u,h||""].filter(Boolean).join(" "),style:(0,o.Z)({},x.style,{touchAction:"none"}),ref:b,tabIndex:0,onMouseDown:S,onTouchStart:S}))}));h.displayName="Interactive";var g=h},285:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(272),o=r(366),a=(r(879),r(364)),i=["size","fixed","bottom","zIndex","className","bgColor","color","position"];function s(e){void 0===e&&(e={});var t=e,r=t.size,s=void 0===r?80:r,l=t.fixed,c=void 0!==l&&l,u=t.bottom,d=t.zIndex,f=t.className,p=t.bgColor,h=void 0===p?"#151513":p,g=t.color,v=void 0===g?"#fff":g,x=t.position,b=void 0===x?"right":x,m=(0,o.Z)(e,i),y="left"===b?{left:0,transform:"scale(-1, 1)"}:{right:0};return u&&(y.bottom=0,y.top="initial",y.transform="left"===b?"scale(-1, -1)":"scale(1, -1)"),(0,a.jsx)("a",(0,n.Z)({href:e.href,"aria-label":"View source on GitHub"},m,{className:"github-corner "+(f||""),children:(0,a.jsxs)("svg",{width:s,height:s,viewBox:"0 0 250 250",style:(0,n.Z)({fill:h,color:v,position:c?"fixed":"absolute",border:0,top:0,zIndex:d},y),"aria-hidden":"true",children:[(0,a.jsx)("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),(0,a.jsx)("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),(0,a.jsx)("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})]})}))}}}]);
//# sourceMappingURL=uiw-vendor.092c4800.js.map