	s_getLoadTime(); /* to record page load times - initial call */
	/* Adobe Analytics
	Marketing Reports & Analytics 
	Copyright 1996-2013 Adobe, Inc. All Rights Reserved */

	s = new AppMeasurement();
	s.account="rmf-prod"

	/************************** CONFIG SECTION **************************/
	/* You may add or alter any code config here. */

	s.charSet="UTF-8"
	s.cookieDomainPeriods=2
	/* Conversion Config */
	s.currencyCode="INR"
	/* Link Tracking Config */
	s.trackDownloadLinks=true
	s.trackExternalLinks=true
	s.trackInlineStats=true
	s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx"
	s.linkInternalFilters="javascript:,reliancemutual.com"
	s.linkLeaveQueryString=false
	s.linkTrackVars="None"
	s.linkTrackEvents="None"
	s.server=document.location.hostname;


	/* WARNING: Changing any of the below variables will cause drastic
	changes to how your visitor data is collected.  Changes should only be
	made when instructed to do so by your account manager.*/
s.visitorNamespace="rmf"
s.trackingServer="rmf.sc.omtrdc.net"

	/*Plugins Section */

	s.usePlugins=true
	function s_doPlugins(s) {
    
/*Checking for Payment Mode*/
 if(s.eVar18)   
 {
 if(s.eVar18.indexOf('ByInternetBanking')>=-1)
 s.eVar18="Netbanking";
 }	     
  /*Capturing Page URL*/
	s.prop8 = document.location.toString();  
  s.eVar8=s.prop8;
    
	/*Capture Previous Page*/  
	s.prop9=s.getPreviousValue(s.pageName,'gpv',''); 
  s.eVar9=s.prop9;
  
    /* Capture Percentage of Page Viewed*/
    s.prop10 = s.getPercentPageViewed();  
    s.eVar10=s.prop10;
      
	/*Visitor Status*/
	  s.eVar2 = s.getNewRepeat(365);
		s.prop2 = s.eVar2;
    
/* Internal Campaign Tracking*/
   if(!s.eVar3) 
     s.eVar3=s.Util.getQueryParam('icid'); 
   s.eVar3=s.getValOnce(s.eVar3,'s_ev3',0);
     
	  /* to record page load times - final call */
	  var load_time =s_getLoadTime()/10;
    if(load_time<0)
    {
      load_time=-(load_time);
    }
    if(load_time>2000)
    {
     load_time = 2000;
    }
    s.prop11 = load_time;
    s.eVar11=s.prop11;
    s.events=s.apl(s.events,'event1='+load_time,',',1);
    	  
/* Time Parting */
var timeVar = s.getTimeParting('n','+5.5');
timeVar = timeVar.split('|');
var hourOfDay=timeVar[0];
var dayOfWeek=timeVar[1];
if(dayOfWeek.indexOf('Saturday')>-1||dayOfWeek.indexOf('Sunday')>-1)
var typeOfDay= "Weekend";
  else
    typeOfDay="Weekday";
s.prop5 = hourOfDay;
s.prop6 = dayOfWeek;
s.prop7 = typeOfDay;
  
/*Copy Time Parting Variables*/
if(s.prop5)
s.eVar5=s.prop5;
if(s.prop6)
s.eVar6=s.prop6;
if(s.prop7)
s.eVar7=s.prop7;  

/*Guest/Member Visitor*/ 
if(s.events&&(s.events.indexOf('event8')>-1)) 
{
	s.linkTrackVars=s.apl(s.linkTrackVars,'eVar34',',',2); 
	s.eVar34="Logged In : Authenticated";
	s.c_w("member_vi","Logged In : Authenticated"); 
} 
else if(s.events&&(s.events.indexOf('event9')>-1))
{ 
	s.linkTrackVars=s.apl(s.linkTrackVars,'eVar34',',',2); 
	s.eVar34="Logged In : Google"; 
	s.c_w("member_vi","Logged In : Google"); 
}
else if(s.events&&(s.events.indexOf('event10')>-1)) 
{ 
	s.linkTrackVars=s.apl(s.linkTrackVars,'eVar34',',',2); 
	s.eVar34="Registered using PAN"; 
	s.c_w("member_vi","Registered using PAN");
} 
//read cookie 
r=s.c_r("member_vi"); 
//If cookie is not set, set the value of eVar and prop to "Guest" 
if(!r) s.eVar34="Guest";

}
	s.doPlugins=s_doPlugins

	/*
	 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

	 AppMeasurement for JavaScript version: 1.4.1
	 Copyright 1996-2013 Adobe, Inc. All Rights Reserved
	 More info available at http://www.omniture.com
	*/

	/********************************************************************
	 *
	 * Main Plug-in code (should be in Plug-ins section)
	 *
	 *******************************************************************/
	 
	 /*
	 * Utility Function: split v1.5 (JS 1.0 compatible)
	 */
	s.split=new Function("l","d",""
	+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
	+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

	/*
	 * Plugin: getPreviousValue v1.0 - return previous value of designated
	 *   variable (requires split utility)
	 */
	s.getPreviousValue=new Function("v","c","el",""
	+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
	+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
	+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
	+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
	+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");


	/*
	 * Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat
	 */
	s.getNewRepeat=new Function("d","cn",""
	+"var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
	+"'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="
	+"=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"
	+"-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"
	+"ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");


/*
 * Plugin: getTimeParting 3.4
 */
s.getTimeParting=new Function("h","z",""
+"var s=this,od;od=new Date('1/1/2000');if(od.getDay()!=6||od.getMont"
+"h()!=0){return'Data Not Available';}else{var H,M,D,U,ds,de,tm,da=['"
+"Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturda"
+"y'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tp"
+"DST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+'/'+d.getFullYea"
+"r());de=new Date(dso[1]+'/'+d.getFullYear());if(h=='n'&&d>ds&&d<de)"
+"{z=z+1;}else if(h=='s'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getT"
+"imezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d"
+".getMinutes();M=(M<10)?'0'+M:M;D=d.getDay();U=' AM';if(H>=12){U=' P"
+"M';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+':'+M+U;return(tm+'|'+D);}");

/*
 * Plugin Utility: apl v1.2
 */
s.apl=new Function("l","v","d","u",""
+"var s=this,m=0;if(!l)l='';if(u){var i,n,a=l.split(d);for(i=0;i<a.le"
+"ngth;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase("
+")));}}if(!m)l=l?l+d+v:v;return l");


	/*
	 * Copyright 2011-2013 Adobe Systems, Inc.
	 * s_getLoadTime v1.36 - Get page load time in units of 1/10 seconds
	 */
	function s_getLoadTime(){if(!window.s_loadT){var b=new Date().getTime(),o=window.performance?performance.timing:0,a=o?o.requestStart:window.inHeadTS||0;s_loadT=a?Math.round((b-a)/100):''}return s_loadT}

/*
 * Plugin: getValOnce_v1.11
 */
s.getValOnce=new Function("v","c","e","t",""
+"var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000"
+"0:86400000,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e"
+"==0?0:a);}return v==k?'':v");


/*
 * Plugin: getPercentPageViewed v1.71
 */
s.getPercentPageViewed=new Function("n",""
+"var s=this,W=window,EL=W.addEventListener,AE=W.attachEvent,E=['load"
+"','unload','scroll','resize','zoom','keyup','mouseup','touchend','o"
+"rientationchange','pan'];W.s_Obj=s;s_PPVid=(n=='-'?s.pageName:n)||s"
+".pageName||location.href;if(!W.s_PPVevent){s.s_PPVg=function(n,r){v"
+"ar k='s_ppv',p=k+'l',c=s.c_r(n||r?k:p),a=c.indexOf(',')>-1?c.split("
+"',',10):[''],l=a.length,i;a[0]=unescape(a[0]);r=r||(n&&n!=a[0])||0;"
+"a.length=10;if(typeof a[0]!='string')a[0]='';for(i=1;i<10;i++)a[i]="
+"!r&&i<l?parseInt(a[i])||0:0;if(l<10||typeof a[9]!='string')a[9]='';"
+"if(r){s.c_w(p,c);s.c_w(k,'?')}return a};W.s_PPVevent=function(e){va"
+"r W=window,D=document,B=D.body,E=D.documentElement,S=window.screen|"
+"|0,Ho='offsetHeight',Hs='scrollHeight',Ts='scrollTop',Wc='clientWid"
+"th',Hc='clientHeight',C=100,M=Math,J='object',N='number',s=W.s_Obj|"
+"|W.s||0;e=e&&typeof e==J?e.type||'':'';if(!e.indexOf('on'))e=e.subs"
+"tring(2);s_PPVi=W.s_PPVi||0;if(W.s_PPVt&&!e){clearTimeout(s_PPVt);s"
+"_PPVt=0;if(s_PPVi<2)s_PPVi++}if(typeof s==J){var h=M.max(B[Hs]||E[H"
+"s],B[Ho]||E[Ho],B[Hc]||E[Hc]),X=W.innerWidth||E[Wc]||B[Wc]||0,Y=W.i"
+"nnerHeight||E[Hc]||B[Hc]||0,x=S?S.width:0,y=S?S.height:0,r=M.round("
+"C*(W.devicePixelRatio||1))/C,b=(D.pageYOffset||E[Ts]||B[Ts]||0)+Y,p"
+"=h>0&&b>0?M.round(C*b/h):0,O=W.orientation,o=!isNaN(O)?M.abs(o)%180"
+":Y>X?0:90,L=e=='load'||s_PPVi<1,a=s.s_PPVg(s_PPVid,L),V=function(i,"
+"v,f,n){i=parseInt(typeof a==J&&a.length>i?a[i]:'0')||0;v=typeof v!="
+"N?i:v;v=f||v>i?v:i;return n?v:v>C?C:v<0?0:v};if(new RegExp('(iPod|i"
+"Pad|iPhone)').exec(navigator.userAgent||'')&&o){o=x;x=y;y=o}o=o?'P'"
+":'L';a[9]=L?'':a[9].substring(0,1);s.c_w('s_ppv',escape(W.s_PPVid)+"
+"','+V(1,p,L)+','+(L||!V(2)?p:V(2))+','+V(3,b,L,1)+','+X+','+Y+','+x"
+"+','+y+','+r+','+a[9]+(a[9]==o?'':o))}if(!W.s_PPVt&&e!='unload')W.s"
+"_PPVt=setTimeout(W.s_PPVevent,333)};for(var f=W.s_PPVevent,i=0;i<E."
+"length;i++)if(EL)EL(E[i],f,false);else if(AE)AE('on'+E[i],f);f()};v"
+"ar a=s.s_PPVg();return!n||n=='-'?a[1]:a");






	function AppMeasurement(){var s=this;s.version="1.4.1";var w=window;if(!w.s_c_in)w.s_c_il=[],w.s_c_in=0;s._il=w.s_c_il;s._in=w.s_c_in;s._il[s._in]=s;w.s_c_in++;s._c="s_c";var k=w.sb;k||(k=null);var m=w,i,o;try{i=m.parent;for(o=m.location;i&&i.location&&o&&""+i.location!=""+o&&m.location&&""+i.location!=""+m.location&&i.location.host==o.host;)m=i,i=m.parent}catch(p){}s.eb=function(s){try{console.log(s)}catch(a){}};s.ta=function(s){return""+parseInt(s)==""+s};s.replace=function(s,a,c){if(!s||s.indexOf(a)<
	0)return s;return s.split(a).join(c)};s.escape=function(b){var a,c;if(!b)return b;b=encodeURIComponent(b);for(a=0;a<7;a++)c="+~!*()'".substring(a,a+1),b.indexOf(c)>=0&&(b=s.replace(b,c,"%"+c.charCodeAt(0).toString(16).toUpperCase()));return b};s.unescape=function(b){if(!b)return b;b=b.indexOf("+")>=0?s.replace(b,"+"," "):b;try{return decodeURIComponent(b)}catch(a){}return unescape(b)};s.Va=function(){var b=w.location.hostname,a=s.fpCookieDomainPeriods,c;if(!a)a=s.cookieDomainPeriods;if(b&&!s.cookieDomain&&
	!/^[0-9.]+$/.test(b)&&(a=a?parseInt(a):2,a=a>2?a:2,c=b.lastIndexOf("."),c>=0)){for(;c>=0&&a>1;)c=b.lastIndexOf(".",c-1),a--;s.cookieDomain=c>0?b.substring(c):b}return s.cookieDomain};s.c_r=s.cookieRead=function(b){b=s.escape(b);var a=" "+s.d.cookie,c=a.indexOf(" "+b+"="),e=c<0?c:a.indexOf(";",c);b=c<0?"":s.unescape(a.substring(c+2+b.length,e<0?a.length:e));return b!="[[B]]"?b:""};s.c_w=s.cookieWrite=function(b,a,c){var e=s.Va(),d=s.cookieLifetime,f;a=""+a;d=d?(""+d).toUpperCase():"";c&&d!="SESSION"&&
	d!="NONE"&&((f=a!=""?parseInt(d?d:0):-60)?(c=new Date,c.setTime(c.getTime()+f*1E3)):c==1&&(c=new Date,f=c.getYear(),c.setYear(f+5+(f<1900?1900:0))));if(b&&d!="NONE")return s.d.cookie=b+"="+s.escape(a!=""?a:"[[B]]")+"; path=/;"+(c&&d!="SESSION"?" expires="+c.toGMTString()+";":"")+(e?" domain="+e+";":""),s.cookieRead(b)==a;return 0};s.C=[];s.B=function(b,a,c){if(s.ma)return 0;if(!s.maxDelay)s.maxDelay=250;var e=0,d=(new Date).getTime()+s.maxDelay,f=s.d.qb,g=["webkitvisibilitychange","visibilitychange"];
	if(!f)f=s.d.rb;if(f&&f=="prerender"){if(!s.X){s.X=1;for(c=0;c<g.length;c++)s.d.addEventListener(g[c],function(){var a=s.d.qb;if(!a)a=s.d.rb;if(a=="visible")s.X=0,s.delayReady()})}e=1;d=0}else c||s.q("_d")&&(e=1);e&&(s.C.push({m:b,a:a,t:d}),s.X||setTimeout(s.delayReady,s.maxDelay));return e};s.delayReady=function(){var b=(new Date).getTime(),a=0,c;for(s.q("_d")&&(a=1);s.C.length>0;){c=s.C.shift();if(a&&!c.t&&c.t>b){s.C.unshift(c);setTimeout(s.delayReady,parseInt(s.maxDelay/2));break}s.ma=1;s[c.m].apply(s,
	c.a);s.ma=0}};s.setAccount=s.sa=function(b){var a,c;if(!s.B("setAccount",arguments))if(s.account=b,s.allAccounts){a=s.allAccounts.concat(b.split(","));s.allAccounts=[];a.sort();for(c=0;c<a.length;c++)(c==0||a[c-1]!=a[c])&&s.allAccounts.push(a[c])}else s.allAccounts=b.split(",")};s.foreachVar=function(b,a){var c,e,d,f,g="";d=e="";if(s.lightProfileID)c=s.H,(g=s.lightTrackVars)&&(g=","+g+","+s.ba.join(",")+",");else{c=s.c;if(s.pe||s.linkType)if(g=s.linkTrackVars,e=s.linkTrackEvents,s.pe&&(d=s.pe.substring(0,
	1).toUpperCase()+s.pe.substring(1),s[d]))g=s[d].pb,e=s[d].ob;g&&(g=","+g+","+s.z.join(",")+",");e&&g&&(g+=",events,")}a&&(a=","+a+",");for(e=0;e<c.length;e++)d=c[e],(f=s[d])&&(!g||g.indexOf(","+d+",")>=0)&&(!a||a.indexOf(","+d+",")>=0)&&b(d,f)};s.J=function(b,a,c,e,d){var f="",g,j,w,q,i=0;b=="contextData"&&(b="c");if(a){for(g in a)if(!Object.prototype[g]&&(!d||g.substring(0,d.length)==d)&&a[g]&&(!c||c.indexOf(","+(e?e+".":"")+g+",")>=0)){w=!1;if(i)for(j=0;j<i.length;j++)g.substring(0,i[j].length)==
	i[j]&&(w=!0);if(!w&&(f==""&&(f+="&"+b+"."),j=a[g],d&&(g=g.substring(d.length)),g.length>0))if(w=g.indexOf("."),w>0)j=g.substring(0,w),w=(d?d:"")+j+".",i||(i=[]),i.push(w),f+=s.J(j,a,c,e,w);else if(typeof j=="boolean"&&(j=j?"true":"false"),j){if(e=="retrieveLightData"&&d.indexOf(".contextData.")<0)switch(w=g.substring(0,4),q=g.substring(4),g){case "transactionID":g="xact";break;case "channel":g="ch";break;case "campaign":g="v0";break;default:s.ta(q)&&(w=="prop"?g="c"+q:w=="eVar"?g="v"+q:w=="list"?
	g="l"+q:w=="hier"&&(g="h"+q,j=j.substring(0,255)))}f+="&"+s.escape(g)+"="+s.escape(j)}}f!=""&&(f+="&."+b)}return f};s.Xa=function(){var b="",a,c,e,d,f,g,j,w,i="",k="",m=c="";if(s.lightProfileID)a=s.H,(i=s.lightTrackVars)&&(i=","+i+","+s.ba.join(",")+",");else{a=s.c;if(s.pe||s.linkType)if(i=s.linkTrackVars,k=s.linkTrackEvents,s.pe&&(c=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1),s[c]))i=s[c].pb,k=s[c].ob;i&&(i=","+i+","+s.z.join(",")+",");k&&(k=","+k+",",i&&(i+=",events,"));s.events2&&(m+=(m!=
	""?",":"")+s.events2)}s.AudienceManagement&&s.AudienceManagement.isReady()&&(b+=s.J("d",s.AudienceManagement.getEventCallConfigParams()));for(c=0;c<a.length;c++){d=a[c];f=s[d];e=d.substring(0,4);g=d.substring(4);!f&&d=="events"&&m&&(f=m,m="");if(f&&(!i||i.indexOf(","+d+",")>=0)){switch(d){case "supplementalDataID":d="sdid";break;case "timestamp":d="ts";break;case "dynamicVariablePrefix":d="D";break;case "visitorID":d="vid";break;case "marketingCloudVisitorID":d="mid";break;case "analyticsVisitorID":d=
	"aid";break;case "audienceManagerLocationHint":d="aamlh";break;case "audienceManagerBlob":d="aamb";break;case "authState":d="as";break;case "pageURL":d="g";if(f.length>255)s.pageURLRest=f.substring(255),f=f.substring(0,255);break;case "pageURLRest":d="-g";break;case "referrer":d="r";break;case "vmk":case "visitorMigrationKey":d="vmt";break;case "visitorMigrationServer":d="vmf";s.ssl&&s.visitorMigrationServerSecure&&(f="");break;case "visitorMigrationServerSecure":d="vmf";!s.ssl&&s.visitorMigrationServer&&
	(f="");break;case "charSet":d="ce";break;case "visitorNamespace":d="ns";break;case "cookieDomainPeriods":d="cdp";break;case "cookieLifetime":d="cl";break;case "variableProvider":d="vvp";break;case "currencyCode":d="cc";break;case "channel":d="ch";break;case "transactionID":d="xact";break;case "campaign":d="v0";break;case "latitude":d="lat";break;case "longitude":d="lon";break;case "resolution":d="s";break;case "colorDepth":d="c";break;case "javascriptVersion":d="j";break;case "javaEnabled":d="v";
	break;case "cookiesEnabled":d="k";break;case "browserWidth":d="bw";break;case "browserHeight":d="bh";break;case "connectionType":d="ct";break;case "homepage":d="hp";break;case "events":m&&(f+=(f!=""?",":"")+m);if(k){g=f.split(",");f="";for(e=0;e<g.length;e++)j=g[e],w=j.indexOf("="),w>=0&&(j=j.substring(0,w)),w=j.indexOf(":"),w>=0&&(j=j.substring(0,w)),k.indexOf(","+j+",")>=0&&(f+=(f?",":"")+g[e])}break;case "events2":f="";break;case "contextData":b+=s.J("c",s[d],i,d);f="";break;case "lightProfileID":d=
	"mtp";break;case "lightStoreForSeconds":d="mtss";s.lightProfileID||(f="");break;case "lightIncrementBy":d="mti";s.lightProfileID||(f="");break;case "retrieveLightProfiles":d="mtsr";break;case "deleteLightProfiles":d="mtsd";break;case "retrieveLightData":s.retrieveLightProfiles&&(b+=s.J("mts",s[d],i,d));f="";break;default:s.ta(g)&&(e=="prop"?d="c"+g:e=="eVar"?d="v"+g:e=="list"?d="l"+g:e=="hier"&&(d="h"+g,f=f.substring(0,255)))}f&&(b+="&"+d+"="+(d.substring(0,3)!="pev"?s.escape(f):f))}d=="pev3"&&s.g&&
	(b+=s.g)}return b};s.u=function(s){var a=s.tagName;if(""+s.wb!="undefined"||""+s.ib!="undefined"&&(""+s.ib).toUpperCase()!="HTML")return"";a=a&&a.toUpperCase?a.toUpperCase():"";a=="SHAPE"&&(a="");a&&((a=="INPUT"||a=="BUTTON")&&s.type&&s.type.toUpperCase?a=s.type.toUpperCase():!a&&s.href&&(a="A"));return a};s.oa=function(s){var a=s.href?s.href:"",c,e,d;c=a.indexOf(":");e=a.indexOf("?");d=a.indexOf("/");if(a&&(c<0||e>=0&&c>e||d>=0&&c>d))e=s.protocol&&s.protocol.length>1?s.protocol:l.protocol?l.protocol:
	"",c=l.pathname.lastIndexOf("/"),a=(e?e+"//":"")+(s.host?s.host:l.host?l.host:"")+(h.substring(0,1)!="/"?l.pathname.substring(0,c<0?0:c)+"/":"")+a;return a};s.D=function(b){var a=s.u(b),c,e,d="",f=0;if(a){c=b.protocol;e=b.onclick;if(b.href&&(a=="A"||a=="AREA")&&(!e||!c||c.toLowerCase().indexOf("javascript")<0))d=s.oa(b);else if(e)d=s.replace(s.replace(s.replace(s.replace(""+e,"\r",""),"\n",""),"\t","")," ",""),f=2;else if(a=="INPUT"||a=="SUBMIT"){if(b.value)d=b.value;else if(b.innerText)d=b.innerText;
	else if(b.textContent)d=b.textContent;f=3}else if(b.src&&a=="IMAGE")d=b.src;if(d)return{id:d.substring(0,100),type:f}}return 0};s.tb=function(b){for(var a=s.u(b),c=s.D(b);b&&!c&&a!="BODY";)if(b=b.parentElement?b.parentElement:b.parentNode)a=s.u(b),c=s.D(b);if(!c||a=="BODY")b=0;if(b&&(a=b.onclick?""+b.onclick:"",a.indexOf(".tl(")>=0||a.indexOf(".trackLink(")>=0))b=0;return b};s.hb=function(){var b,a,c=s.linkObject,e=s.linkType,d=s.linkURL,f,g;s.ca=1;if(!c)s.ca=0,c=s.clickObject;if(c){b=s.u(c);for(a=
	s.D(c);c&&!a&&b!="BODY";)if(c=c.parentElement?c.parentElement:c.parentNode)b=s.u(c),a=s.D(c);if(!a||b=="BODY")c=0;if(c){var j=c.onclick?""+c.onclick:"";if(j.indexOf(".tl(")>=0||j.indexOf(".trackLink(")>=0)c=0}}else s.ca=1;!d&&c&&(d=s.oa(c));d&&!s.linkLeaveQueryString&&(f=d.indexOf("?"),f>=0&&(d=d.substring(0,f)));if(!e&&d){var i=0,k=0,m;if(s.trackDownloadLinks&&s.linkDownloadFileTypes){j=d.toLowerCase();f=j.indexOf("?");g=j.indexOf("#");f>=0?g>=0&&g<f&&(f=g):f=g;f>=0&&(j=j.substring(0,f));f=s.linkDownloadFileTypes.toLowerCase().split(",");
	for(g=0;g<f.length;g++)(m=f[g])&&j.substring(j.length-(m.length+1))=="."+m&&(e="d")}if(s.trackExternalLinks&&!e&&(j=d.toLowerCase(),s.ra(j))){if(!s.linkInternalFilters)s.linkInternalFilters=w.location.hostname;f=0;s.linkExternalFilters?(f=s.linkExternalFilters.toLowerCase().split(","),i=1):s.linkInternalFilters&&(f=s.linkInternalFilters.toLowerCase().split(","));if(f){for(g=0;g<f.length;g++)m=f[g],j.indexOf(m)>=0&&(k=1);k?i&&(e="e"):i||(e="e")}}}s.linkObject=c;s.linkURL=d;s.linkType=e;if(s.trackClickMap||
	s.trackInlineStats)if(s.g="",c){e=s.pageName;d=1;c=c.sourceIndex;if(!e)e=s.pageURL,d=0;if(w.s_objectID)a.id=w.s_objectID,c=a.type=1;if(e&&a&&a.id&&b)s.g="&pid="+s.escape(e.substring(0,255))+(d?"&pidt="+d:"")+"&oid="+s.escape(a.id.substring(0,100))+(a.type?"&oidt="+a.type:"")+"&ot="+b+(c?"&oi="+c:"")}};s.Ya=function(){var b=s.ca,a=s.linkType,c=s.linkURL,e=s.linkName;if(a&&(c||e))a=a.toLowerCase(),a!="d"&&a!="e"&&(a="o"),s.pe="lnk_"+a,s.pev1=c?s.escape(c):"",s.pev2=e?s.escape(e):"",b=1;s.abort&&(b=
	0);if(s.trackClickMap||s.trackInlineStats){a={};c=0;var d=s.cookieRead("s_sq"),f=d?d.split("&"):0,g,j,w;d=0;if(f)for(g=0;g<f.length;g++)j=f[g].split("="),e=s.unescape(j[0]).split(","),j=s.unescape(j[1]),a[j]=e;e=s.account.split(",");if(b||s.g){b&&!s.g&&(d=1);for(j in a)if(!Object.prototype[j])for(g=0;g<e.length;g++){d&&(w=a[j].join(","),w==s.account&&(s.g+=(j.charAt(0)!="&"?"&":"")+j,a[j]=[],c=1));for(f=0;f<a[j].length;f++)w=a[j][f],w==e[g]&&(d&&(s.g+="&u="+s.escape(w)+(j.charAt(0)!="&"?"&":"")+j+
	"&u=0"),a[j].splice(f,1),c=1)}b||(c=1);if(c){d="";g=2;!b&&s.g&&(d=s.escape(e.join(","))+"="+s.escape(s.g),g=1);for(j in a)!Object.prototype[j]&&g>0&&a[j].length>0&&(d+=(d?"&":"")+s.escape(a[j].join(","))+"="+s.escape(j),g--);s.cookieWrite("s_sq",d)}}}return b};s.Za=function(){if(!s.nb){var b=new Date,a=m.location,c,e,d=e=c="",f="",g="",w="1.2",i=s.cookieWrite("s_cc","true",0)?"Y":"N",k="",n="";if(b.setUTCDate&&(w="1.3",(0).toPrecision&&(w="1.5",b=[],b.forEach))){w="1.6";e=0;c={};try{e=new Iterator(c),
	e.next&&(w="1.7",b.reduce&&(w="1.8",w.trim&&(w="1.8.1",Date.parse&&(w="1.8.2",Object.create&&(w="1.8.5")))))}catch(o){}}c=screen.width+"x"+screen.height;d=navigator.javaEnabled()?"Y":"N";e=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;f=s.w.innerWidth?s.w.innerWidth:s.d.documentElement.offsetWidth;g=s.w.innerHeight?s.w.innerHeight:s.d.documentElement.offsetHeight;try{s.b.addBehavior("#default#homePage"),k=s.b.ub(a)?"Y":"N"}catch(p){}try{s.b.addBehavior("#default#clientCaps"),n=s.b.connectionType}catch(r){}s.resolution=
	c;s.colorDepth=e;s.javascriptVersion=w;s.javaEnabled=d;s.cookiesEnabled=i;s.browserWidth=f;s.browserHeight=g;s.connectionType=n;s.homepage=k;s.nb=1}};s.I={};s.loadModule=function(b,a){var c=s.I[b];if(!c){c=w["AppMeasurement_Module_"+b]?new w["AppMeasurement_Module_"+b](s):{};s.I[b]=s[b]=c;c.Fa=function(){return c.Ja};c.Ka=function(a){if(c.Ja=a)s[b+"_onLoad"]=a,s.B(b+"_onLoad",[s,c],1)||a(s,c)};try{Object.defineProperty?Object.defineProperty(c,"onLoad",{get:c.Fa,set:c.Ka}):c._olc=1}catch(e){c._olc=
	1}}a&&(s[b+"_onLoad"]=a,s.B(b+"_onLoad",[s,c],1)||a(s,c))};s.q=function(b){var a,c;for(a in s.I)if(!Object.prototype[a]&&(c=s.I[a])){if(c._olc&&c.onLoad)c._olc=0,c.onLoad(s,c);if(c[b]&&c[b]())return 1}return 0};s.bb=function(){var b=Math.floor(Math.random()*1E13),a=s.visitorSampling,c=s.visitorSamplingGroup;c="s_vsn_"+(s.visitorNamespace?s.visitorNamespace:s.account)+(c?"_"+c:"");var e=s.cookieRead(c);if(a){e&&(e=parseInt(e));if(!e){if(!s.cookieWrite(c,b))return 0;e=b}if(e%1E4>v)return 0}return 1};
	s.K=function(b,a){var c,e,d,f,g,w;for(c=0;c<2;c++){e=c>0?s.ia:s.c;for(d=0;d<e.length;d++)if(f=e[d],(g=b[f])||b["!"+f]){if(!a&&(f=="contextData"||f=="retrieveLightData")&&s[f])for(w in s[f])g[w]||(g[w]=s[f][w]);s[f]=g}}};s.Aa=function(b,a){var c,e,d,f;for(c=0;c<2;c++){e=c>0?s.ia:s.c;for(d=0;d<e.length;d++)f=e[d],b[f]=s[f],!a&&!b[f]&&(b["!"+f]=1)}};s.Ua=function(s){var a,c,e,d,f,g=0,w,i="",k="";if(s&&s.length>255&&(a=""+s,c=a.indexOf("?"),c>0&&(w=a.substring(c+1),a=a.substring(0,c),d=a.toLowerCase(),
	e=0,d.substring(0,7)=="http://"?e+=7:d.substring(0,8)=="https://"&&(e+=8),c=d.indexOf("/",e),c>0&&(d=d.substring(e,c),f=a.substring(c),a=a.substring(0,c),d.indexOf("google")>=0?g=",q,ie,start,search_key,word,kw,cd,":d.indexOf("yahoo.co")>=0&&(g=",p,ei,"),g&&w)))){if((s=w.split("&"))&&s.length>1){for(e=0;e<s.length;e++)d=s[e],c=d.indexOf("="),c>0&&g.indexOf(","+d.substring(0,c)+",")>=0?i+=(i?"&":"")+d:k+=(k?"&":"")+d;i&&k?w=i+"&"+k:k=""}c=253-(w.length-k.length)-a.length;s=a+(c>0?f.substring(0,c):
	"")+"?"+w}return s};s.U=!1;s.O=!1;s.Ia=function(b){s.marketingCloudVisitorID=b;s.O=!0;s.k()};s.R=!1;s.L=!1;s.Ca=function(b){s.analyticsVisitorID=b;s.L=!0;s.k()};s.T=!1;s.N=!1;s.Ea=function(b){s.audienceManagerLocationHint=b;s.N=!0;s.k()};s.S=!1;s.M=!1;s.Da=function(b){s.audienceManagerBlob=b;s.M=!0;s.k()};s.isReadyToTrack=function(){var b=!0,a=s.visitor;if(a&&a.isAllowed()){if(!s.U&&!s.marketingCloudVisitorID&&a.getMarketingCloudVisitorID&&(s.U=!0,s.marketingCloudVisitorID=a.getMarketingCloudVisitorID([s,
	s.Ia]),s.marketingCloudVisitorID))s.O=!0;if(!s.R&&!s.analyticsVisitorID&&a.getAnalyticsVisitorID&&(s.R=!0,s.analyticsVisitorID=a.getAnalyticsVisitorID([s,s.Ca]),s.analyticsVisitorID))s.L=!0;if(!s.T&&!s.audienceManagerLocationHint&&a.getAudienceManagerLocationHint&&(s.T=!0,s.audienceManagerLocationHint=a.getAudienceManagerLocationHint([s,s.Ea]),s.audienceManagerLocationHint))s.N=!0;if(!s.S&&!s.audienceManagerBlob&&a.getAudienceManagerBlob&&(s.S=!0,s.audienceManagerBlob=a.getAudienceManagerBlob([s,
	s.Da]),s.audienceManagerBlob))s.M=!0;if(s.U&&!s.O&&!s.marketingCloudVisitorID||s.R&&!s.L&&!s.analyticsVisitorID||s.T&&!s.N&&!s.audienceManagerLocationHint||s.S&&!s.M&&!s.audienceManagerBlob)b=!1}return b};s.j=k;s.l=0;s.callbackWhenReadyToTrack=function(b,a,c){var e;e={};e.Oa=b;e.Na=a;e.La=c;if(s.j==k)s.j=[];s.j.push(e);if(s.l==0)s.l=setInterval(s.k,100)};s.k=function(){var b;if(s.isReadyToTrack()){if(s.l)clearInterval(s.l),s.l=0;if(s.j!=k)for(;s.j.length>0;)b=s.j.shift(),b.Na.apply(b.Oa,b.La)}};s.Ga=
	function(b){var a,c,e=k,d=k;if(!s.isReadyToTrack()){a=[];if(b!=k)for(c in e={},b)e[c]=b[c];d={};s.Aa(d,!0);a.push(e);a.push(d);s.callbackWhenReadyToTrack(s,s.track,a);return!0}return!1};s.Wa=function(){var b=s.cookieRead("s_fid"),a="",c="",e;e=8;var d=4;if(!b||b.indexOf("-")<0){for(b=0;b<16;b++)e=Math.floor(Math.random()*e),a+="0123456789ABCDEF".substring(e,e+1),e=Math.floor(Math.random()*d),c+="0123456789ABCDEF".substring(e,e+1),e=d=16;b=a+"-"+c}s.cookieWrite("s_fid",b,1)||(b=0);return b};s.t=s.track=
	function(b,a){var c,e=new Date,d="s"+Math.floor(e.getTime()/108E5)%10+Math.floor(Math.random()*1E13),f=e.getYear();f="t="+s.escape(e.getDate()+"/"+e.getMonth()+"/"+(f<1900?f+1900:f)+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()+" "+e.getDay()+" "+e.getTimezoneOffset());if(s.visitor){if(s.visitor.getAuthState)s.authState=s.visitor.getAuthState();if(!s.supplementalDataID&&s.visitor.getSupplementalDataID)s.supplementalDataID=s.visitor.getSupplementalDataID("AppMeasurement:"+s._in,s.expectSupplementalData?
	!1:!0)}s.q("_s");if(!s.B("track",arguments)){if(!s.Ga(b)){a&&s.K(a);b&&(c={},s.Aa(c,0),s.K(b));if(s.bb()){if(!s.analyticsVisitorID&&!s.marketingCloudVisitorID)s.fid=s.Wa();s.hb();s.usePlugins&&s.doPlugins&&s.doPlugins(s);if(s.account){if(!s.abort){if(s.trackOffline&&!s.timestamp)s.timestamp=Math.floor(e.getTime()/1E3);e=w.location;if(!s.pageURL)s.pageURL=e.href?e.href:e;if(!s.referrer&&!s.Ba)s.referrer=m.document.referrer,s.Ba=1;s.referrer=s.Ua(s.referrer);s.q("_g")}if(s.Ya()&&!s.abort)s.Za(),f+=
	s.Xa(),s.gb(d,f),s.q("_t"),s.referrer=""}}b&&s.K(c,1)}s.abort=s.supplementalDataID=s.timestamp=s.pageURLRest=s.linkObject=s.clickObject=s.linkURL=s.linkName=s.linkType=w.vb=s.pe=s.pev1=s.pev2=s.pev3=s.g=0}};s.tl=s.trackLink=function(b,a,c,e,d){s.linkObject=b;s.linkType=a;s.linkName=c;if(d)s.i=b,s.p=d;return s.track(e)};s.trackLight=function(b,a,c,e){s.lightProfileID=b;s.lightStoreForSeconds=a;s.lightIncrementBy=c;return s.track(e)};s.clearVars=function(){var b,a;for(b=0;b<s.c.length;b++)if(a=s.c[b],
	a.substring(0,4)=="prop"||a.substring(0,4)=="eVar"||a.substring(0,4)=="hier"||a.substring(0,4)=="list"||a=="channel"||a=="events"||a=="eventList"||a=="products"||a=="productList"||a=="purchaseID"||a=="transactionID"||a=="state"||a=="zip"||a=="campaign")s[a]=void 0};s.tagContainerMarker="";s.gb=function(b,a){var c,e=s.trackingServer;c="";var d=s.dc,f="sc.",w=s.visitorNamespace;if(e){if(s.trackingServerSecure&&s.ssl)e=s.trackingServerSecure}else{if(!w)w=s.account,e=w.indexOf(","),e>=0&&(w=w.substring(0,
	e)),w=w.replace(/[^A-Za-z0-9]/g,"");c||(c="2o7.net");d=d?(""+d).toLowerCase():"d1";c=="2o7.net"&&(d=="d1"?d="112":d=="d2"&&(d="122"),f="");e=w+"."+d+"."+f+c}c=s.ssl?"https://":"http://";d=s.AudienceManagement&&s.AudienceManagement.isReady();c+=e+"/b/ss/"+s.account+"/"+(s.mobile?"5.":"")+(d?"10":"1")+"/JS-"+s.version+(s.mb?"T":"")+(s.tagContainerMarker?"-"+s.tagContainerMarker:"")+"/"+b+"?AQB=1&ndh=1&pf=1&"+(d?"callback=s_c_il["+s._in+"].AudienceManagement.passData&":"")+a+"&AQE=1";s.Sa(c);s.Y()};
	s.Sa=function(b){s.e||s.$a();s.e.push(b);s.aa=s.r();s.za()};s.$a=function(){s.e=s.cb();if(!s.e)s.e=[]};s.cb=function(){var b,a;if(s.fa()){try{(a=w.localStorage.getItem(s.da()))&&(b=w.JSON.parse(a))}catch(c){}return b}};s.fa=function(){var b=!0;if(!s.trackOffline||!s.offlineFilename||!w.localStorage||!w.JSON)b=!1;return b};s.pa=function(){var b=0;if(s.e)b=s.e.length;s.v&&b++;return b};s.Y=function(){if(!s.v)if(s.qa=k,s.ea)s.aa>s.G&&s.xa(s.e),s.ha(500);else{var b=s.Ma();if(b>0)s.ha(b);else if(b=s.na())s.v=
	1,s.fb(b),s.jb(b)}};s.ha=function(b){if(!s.qa)b||(b=0),s.qa=setTimeout(s.Y,b)};s.Ma=function(){var b;if(!s.trackOffline||s.offlineThrottleDelay<=0)return 0;b=s.r()-s.wa;if(s.offlineThrottleDelay<b)return 0;return s.offlineThrottleDelay-b};s.na=function(){if(s.e.length>0)return s.e.shift()};s.fb=function(b){if(s.debugTracking){var a="AppMeasurement Debug: "+b;b=b.split("&");var c;for(c=0;c<b.length;c++)a+="\n\t"+s.unescape(b[c]);s.eb(a)}};s.Ha=function(){return s.marketingCloudVisitorID||s.analyticsVisitorID};
	s.Q=!1;var n;try{n=JSON.parse('{"x":"y"}')}catch(r){n=null}n&&n.x=="y"?(s.Q=!0,s.P=function(s){return JSON.parse(s)}):w.$&&w.$.parseJSON?(s.P=function(s){return w.$.parseJSON(s)},s.Q=!0):s.P=function(){return null};s.jb=function(b){var a,c,e;if(s.Ha()&&b.length>2047&&(typeof XMLHttpRequest!="undefined"&&(a=new XMLHttpRequest,"withCredentials"in a?c=1:a=0),!a&&typeof XDomainRequest!="undefined"&&(a=new XDomainRequest,c=2),a&&s.AudienceManagement&&s.AudienceManagement.isReady()))s.Q?a.ja=!0:a=0;!a&&
	s.ab&&(b=b.substring(0,2047));if(!a&&s.d.createElement&&s.AudienceManagement&&s.AudienceManagement.isReady()&&(a=s.d.createElement("SCRIPT"))&&"async"in a)(e=(e=s.d.getElementsByTagName("HEAD"))&&e[0]?e[0]:s.d.body)?(a.type="text/javascript",a.setAttribute("async","async"),c=3):a=0;if(!a)a=new Image,a.alt="";a.la=function(){try{if(s.ga)clearTimeout(s.ga),s.ga=0;if(a.timeout)clearTimeout(a.timeout),a.timeout=0}catch(b){}};a.onload=a.lb=function(){a.la();s.Ra();s.V();s.v=0;s.Y();if(a.ja){a.ja=!1;try{var b=
	s.P(a.responseText);AudienceManagement.passData(b)}catch(c){}}};a.onabort=a.onerror=a.Ta=function(){a.la();(s.trackOffline||s.ea)&&s.v&&s.e.unshift(s.Qa);s.v=0;s.aa>s.G&&s.xa(s.e);s.V();s.ha(500)};a.onreadystatechange=function(){a.readyState==4&&(a.status==200?a.lb():a.Ta())};s.wa=s.r();if(c==1||c==2){var d=b.indexOf("?");e=b.substring(0,d);d=b.substring(d+1);d=d.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,"");c==1?(a.open("POST",e,!0),a.send(d)):c==2&&(a.open("POST",e),a.send(d))}else if(a.src=b,c==3){if(s.ua)try{e.removeChild(s.ua)}catch(f){}e.firstChild?
	e.insertBefore(a,e.firstChild):e.appendChild(a);s.ua=s.Pa}if(a.abort)s.ga=setTimeout(a.abort,5E3);s.Qa=b;s.Pa=w["s_i_"+s.replace(s.account,",","_")]=a;if(s.useForcedLinkTracking&&s.A||s.p){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;s.W=setTimeout(s.V,s.forcedLinkTrackingTimeout)}};s.Ra=function(){if(s.fa()&&!(s.va>s.G))try{w.localStorage.removeItem(s.da()),s.va=s.r()}catch(b){}};s.xa=function(b){if(s.fa()){s.za();try{w.localStorage.setItem(s.da(),w.JSON.stringify(b)),s.G=s.r()}catch(a){}}};
	s.za=function(){if(s.trackOffline){if(!s.offlineLimit||s.offlineLimit<=0)s.offlineLimit=10;for(;s.e.length>s.offlineLimit;)s.na()}};s.forceOffline=function(){s.ea=!0};s.forceOnline=function(){s.ea=!1};s.da=function(){return s.offlineFilename+"-"+s.visitorNamespace+s.account};s.r=function(){return(new Date).getTime()};s.ra=function(s){s=s.toLowerCase();if(s.indexOf("#")!=0&&s.indexOf("about:")!=0&&s.indexOf("opera:")!=0&&s.indexOf("javascript:")!=0)return!0;return!1};s.setTagContainer=function(b){var a,
	c,e;s.mb=b;for(a=0;a<s._il.length;a++)if((c=s._il[a])&&c._c=="s_l"&&c.tagContainerName==b){s.K(c);if(c.lmq)for(a=0;a<c.lmq.length;a++)e=c.lmq[a],s.loadModule(e.n);if(c.ml)for(e in c.ml)if(s[e])for(a in b=s[e],e=c.ml[e],e)if(!Object.prototype[a]&&(typeof e[a]!="function"||(""+e[a]).indexOf("s_c_il")<0))b[a]=e[a];if(c.mmq)for(a=0;a<c.mmq.length;a++)e=c.mmq[a],s[e.m]&&(b=s[e.m],b[e.f]&&typeof b[e.f]=="function"&&(e.a?b[e.f].apply(b,e.a):b[e.f].apply(b)));if(c.tq)for(a=0;a<c.tq.length;a++)s.track(c.tq[a]);
	c.s=s;break}};s.Util={urlEncode:s.escape,urlDecode:s.unescape,cookieRead:s.cookieRead,cookieWrite:s.cookieWrite,getQueryParam:function(b,a,c){var e;a||(a=s.pageURL?s.pageURL:w.location);c||(c="&");if(b&&a&&(a=""+a,e=a.indexOf("?"),e>=0&&(a=c+a.substring(e+1)+c,e=a.indexOf(c+b+"="),e>=0&&(a=a.substring(e+c.length+b.length+1),e=a.indexOf(c),e>=0&&(a=a.substring(0,e)),a.length>0))))return s.unescape(a);return""}};s.z=["supplementalDataID","timestamp","dynamicVariablePrefix","visitorID","marketingCloudVisitorID",
	"analyticsVisitorID","audienceManagerLocationHint","authState","fid","vmk","visitorMigrationKey","visitorMigrationServer","visitorMigrationServerSecure","charSet","visitorNamespace","cookieDomainPeriods","fpCookieDomainPeriods","cookieLifetime","pageName","pageURL","referrer","contextData","currencyCode","lightProfileID","lightStoreForSeconds","lightIncrementBy","retrieveLightProfiles","deleteLightProfiles","retrieveLightData","pe","pev1","pev2","pev3","pageURLRest"];s.c=s.z.concat(["purchaseID",
	"variableProvider","channel","server","pageType","transactionID","campaign","state","zip","events","events2","products","audienceManagerBlob","tnt"]);s.ba=["timestamp","charSet","visitorNamespace","cookieDomainPeriods","cookieLifetime","contextData","lightProfileID","lightStoreForSeconds","lightIncrementBy"];s.H=s.ba.slice(0);s.ia=["account","allAccounts","debugTracking","visitor","trackOffline","offlineLimit","offlineThrottleDelay","offlineFilename","usePlugins","doPlugins","configURL","visitorSampling",
	"visitorSamplingGroup","linkObject","clickObject","linkURL","linkName","linkType","trackDownloadLinks","trackExternalLinks","trackClickMap","trackInlineStats","linkLeaveQueryString","linkTrackVars","linkTrackEvents","linkDownloadFileTypes","linkExternalFilters","linkInternalFilters","useForcedLinkTracking","forcedLinkTrackingTimeout","trackingServer","trackingServerSecure","ssl","abort","mobile","dc","lightTrackVars","maxDelay","expectSupplementalData","AudienceManagement"];for(i=0;i<=250;i++)i<76&&
	(s.c.push("prop"+i),s.H.push("prop"+i)),s.c.push("eVar"+i),s.H.push("eVar"+i),i<6&&s.c.push("hier"+i),i<4&&s.c.push("list"+i);i=["latitude","longitude","resolution","colorDepth","javascriptVersion","javaEnabled","cookiesEnabled","browserWidth","browserHeight","connectionType","homepage"];s.c=s.c.concat(i);s.z=s.z.concat(i);s.ssl=w.location.protocol.toLowerCase().indexOf("https")>=0;s.charSet="UTF-8";s.contextData={};s.offlineThrottleDelay=0;s.offlineFilename="AppMeasurement.offline";s.wa=0;s.aa=0;
	s.G=0;s.va=0;s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";s.w=w;s.d=w.document;try{s.ab=navigator.appName=="Microsoft Internet Explorer"}catch(t){}s.V=function(){if(s.W)w.clearTimeout(s.W),s.W=k;s.i&&s.A&&s.i.dispatchEvent(s.A);if(s.p)if(typeof s.p=="function")s.p();else if(s.i&&s.i.href)s.d.location=s.i.href;s.i=s.A=s.p=0};s.ya=function(){s.b=s.d.body;if(s.b)if(s.o=function(b){var a,c,e,d,f;if(!(s.d&&s.d.getElementById("cppXYctnr")||b&&b["s_fe_"+s._in])){if(s.ka)if(s.useForcedLinkTracking)s.b.removeEventListener("click",
	s.o,!1);else{s.b.removeEventListener("click",s.o,!0);s.ka=s.useForcedLinkTracking=0;return}else s.useForcedLinkTracking=0;s.clickObject=b.srcElement?b.srcElement:b.target;try{if(s.clickObject&&(!s.F||s.F!=s.clickObject)&&(s.clickObject.tagName||s.clickObject.parentElement||s.clickObject.parentNode)){var g=s.F=s.clickObject;if(s.Z)clearTimeout(s.Z),s.Z=0;s.Z=setTimeout(function(){if(s.F==g)s.F=0},1E4);e=s.pa();s.track();if(e<s.pa()&&s.useForcedLinkTracking&&b.target){for(d=b.target;d&&d!=s.b&&d.tagName.toUpperCase()!=
	"A"&&d.tagName.toUpperCase()!="AREA";)d=d.parentNode;if(d&&(f=d.href,s.ra(f)||(f=0),c=d.target,b.target.dispatchEvent&&f&&(!c||c=="_self"||c=="_top"||c=="_parent"||w.name&&c==w.name))){try{a=s.d.createEvent("MouseEvents")}catch(i){a=new w.MouseEvent}if(a){try{a.initMouseEvent("click",b.bubbles,b.cancelable,b.view,b.detail,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,b.relatedTarget)}catch(k){a=0}if(a)a["s_fe_"+s._in]=a.s_fe=1,b.stopPropagation(),b.kb&&b.kb(),
	b.preventDefault(),s.i=b.target,s.A=a}}}}else s.clickObject=0}catch(m){s.clickObject=0}}},s.b&&s.b.attachEvent)s.b.attachEvent("onclick",s.o);else{if(s.b&&s.b.addEventListener){if(navigator&&(navigator.userAgent.indexOf("WebKit")>=0&&s.d.createEvent||navigator.userAgent.indexOf("Firefox/2")>=0&&w.MouseEvent))s.ka=1,s.useForcedLinkTracking=1,s.b.addEventListener("click",s.o,!0);s.b.addEventListener("click",s.o,!1)}}else setTimeout(s.ya,30)};s.ya()}
	function s_gi(s){var w,k=window.s_c_il,m,i,o=s.split(","),p,n,r=0;if(k)for(m=0;!r&&m<k.length;){w=k[m];if(w._c=="s_c"&&(w.account||w.oun))if(w.account&&w.account==s)r=1;else{i=w.account?w.account:w.oun;i=w.allAccounts?w.allAccounts:i.split(",");for(p=0;p<o.length;p++)for(n=0;n<i.length;n++)o[p]==i[n]&&(r=1)}m++}r||(w=new AppMeasurement);w.setAccount?w.setAccount(s):w.sa&&w.sa(s);return w}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
	function s_pgicq(){var s=window,w=s.s_giq,k,m,i;if(w)for(k=0;k<w.length;k++)m=w[k],i=s_gi(m.oun),i.setAccount(m.un),i.setTagContainer(m.tagContainerName);s.s_giq=0}s_pgicq();
