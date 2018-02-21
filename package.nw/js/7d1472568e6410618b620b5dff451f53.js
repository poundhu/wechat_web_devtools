'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){async function a(a,b){let c=d.getState(),e=c.toolbar.deviceInfo,f=e.screenHeight-e.navigationbarHeight-e.statusbarHeight,g=c.simulator.webviewInfos[c.simulator.currentWebviewID];g&&-1!=g.tabbarIndex&&(f-=e.tabbarHeight),c.project.current.attr&&c.project.current.attr.gameApp&&(f=e.screenHeight);let i=c.simulator.orientation&&'landscape'==c.simulator.orientation.value,j=await navigator.getBattery(),k=parseInt(100*j.level),l={errMsg:`${b.api}:ok`,model:e.title,pixelRatio:e.dpr,windowWidth:i?f:e.screenWidth,windowHeight:i?e.screenWidth:f,system:'iOS'===e.os?'iOS 10.0.1':'Android 5.0',language:'zh_CN',version:'6.6.3',batteryLevel:k};if(1001000<=h.getLibVersionNumber()&&(l=_extends({},l,{screenWidth:i?e.screenHeight:e.screenWidth,screenHeight:i?e.screenWidth:e.screenHeight,SDKVersion:h.getCurrent().libVersion})),1005000<=h.getLibVersionNumber()&&(l=_extends({},l,{brand:'devtools',fontSizeSetting:16})),1009000<=h.getLibVersionNumber()){const a=e.statusbarHeight;'number'==typeof a&&(l=_extends({},l,{statusbarHeight:a}))}return l}async function b(){let a=await navigator.getBattery(),b=parseInt(100*a.level);return{isCharging:a.charging,level:b}}async function c(a,b){let c=d.getState();return{errMsg:`${b.api}:ok`,networkType:c.toolbar.network.list[c.toolbar.network.current]}}const d=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),e=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),f=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),g=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),h=require('./3bfffbe88b3d923921f851c0697974fe.js'),{enterBackground:i,enterForeground:j}=require('./a3959bb900db9f65ed2e9c5dfa6977b7.js');module.exports={getSystemInfo:a,getSystemInfoSync:a,getNetworkType:c,getNetworkTypeSync:c,makePhoneCall:(a,b)=>new Promise((c)=>{a({type:f.SIMULATOR_SET_CONFIRM,data:{show:!0,content:`拨打 ${b.args.phoneNumber}?【仅为模拟】`,callback:async(a)=>{i('makePhoneCall'),j('makePhoneCall'),a?c({errMsg:`${b.api}:ok`}):c({errMsg:`${b.api}:cancel`})}}})}),enableAccelerometer:async function(a,b){let c=b.args;return a({type:f.SIMULATOR_SET_ACCELEROMETER,data:{accelerometer:c.enable}}),{errMsg:`${b.api}:ok`}},enableCompass:async function(a,b){let c=b.args;return a({type:f.SIMULATOR_SET_COMPASS,data:{compass:c.enable}}),{errMsg:`${b.api}:ok`}},getScreenBrightness:async function(a,b){let c=d.getState(),e=0.5;return c.toolbar.deviceStatus&&(e=c.toolbar.deviceStatus.brightness),{errMsg:`${b.api}:ok`,value:e}},setScreenBrightness:async function(a,b){let c=parseFloat(b.args.value);return isNaN(c)?{errMsg:`${b.api}:fail error parameter`}:(a({type:f.TOOLBAR_SET_DEVICE_STATUS,data:{brightness:c}}),{errMsg:`${b.api}:ok`})},setKeepScreenOn:async function(a,b){const c=b.args.keepScreenOn;return a({type:f.TOOLBAR_SET_DEVICE_STATUS,data:{screenon:c}}),{errMsg:`${b.api}:ok`}},captureScreen:async function(a,b){a({type:f.SIMULATOR_CAPTURE_SCREEN,data:{callbackID:b.callbackID}})},vibrateLong:async function(a,b){return a({type:f.SIMULATOR_SET_VIBRATE,data:{type:'long'}}),{errMsg:`${b.api}:ok`}},vibrateShort:async function(a,b){return a({type:f.SIMULATOR_SET_VIBRATE,data:{type:'short'}}),{errMsg:`${b.api}:ok`}},setDeviceOrientation:async function(a,b){let c=b.args&&b.args.value;return!c||0>['portrait','landscape'].indexOf(c)?{errMsg:`${b.api}:fail invalid parameter`}:(a({type:f.SIMULATOR_SET_ORIENTATION,data:{api:b.api,callbackID:b.callbackID,value:b.args&&b.args.value||'portrait'}}),{errMsg:`${b.api}:ok`})},setStatusBarStyle:async function(a,b){let c=b.args;return 0>['white','black'].indexOf(c.color)?{errMsg:`${b.api}:fail invalid color`}:(a({type:f.SIMULATOR_SET_STATUSBAR_STYLE,data:{color:c.color}}),{errMsg:`${b.api}:ok`})},setMenuStyle:async function(a,b){let c=b.args&&b.args.style;return 0>['dark','light'].indexOf(c)?{errMsg:`${b.api}:fail invalid style "${c}"`}:(a({type:f.SIMULATOR_SET_MENU,data:{style:c}}),{errMsg:`${b.api}:ok`})},getBatteryInfo:b,getBatteryInfoSync:b}}(require('lazyload'),require);