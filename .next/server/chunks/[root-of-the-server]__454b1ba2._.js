module.exports=[14747,(t,e,r)=>{e.exports=t.x("path",()=>require("path"))},18622,(t,e,r)=>{e.exports=t.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(t,e,r)=>{e.exports=t.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(t,e,r)=>{e.exports=t.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},20635,(t,e,r)=>{e.exports=t.x("next/dist/server/app-render/action-async-storage.external.js",()=>require("next/dist/server/app-render/action-async-storage.external.js"))},24725,(t,e,r)=>{e.exports=t.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},24361,(t,e,r)=>{e.exports=t.x("util",()=>require("util"))},70406,(t,e,r)=>{e.exports=t.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},93695,(t,e,r)=>{e.exports=t.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},61724,(t,e,r)=>{e.exports=t.x("next/dist/compiled/next-server/app-route-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-route-turbo.runtime.prod.js"))},22734,(t,e,r)=>{e.exports=t.x("fs",()=>require("fs"))},54786,t=>{"use strict";t.s(["csvService",()=>a]);var e=t.i(22734),r=t.i(14747);let a=new class{csvPath;data=[];isLoaded=!1;constructor(){this.csvPath=r.default.join(process.cwd(),"varaosrc_hospital_management.csv")}async loadCSV(){if(!this.isLoaded)try{let t=e.default.readFileSync(this.csvPath,"utf-8").split("\n").filter(t=>t.trim()),r="",a=[];for(let e of t){let t=e.replace(/"/g,"").trim();if(!t)continue;let o=t.split(",");if(o.length>0&&o[0].includes("_")){a=o,r=o[0].split("_")[0];continue}if(o.length!==a.length||!o[0])continue;let n={table:r};a.forEach((t,e)=>{n[t]=o[e]||""}),this.data.push(n)}this.isLoaded=!0,console.log(`✅ CSV loaded: ${this.data.length} records`)}catch(t){throw console.error("❌ CSV loading failed:",t),t}}async getPatients(t,e){await this.loadCSV();let r=this.data.filter(t=>"patient"===t.table||t.patient_name&&"patient_name"!==t.patient_name);return t&&(r=r.filter(e=>e.patient_name?.toLowerCase().includes(t.toLowerCase())||e.contact_number?.includes(t)||e.cro?.toLowerCase().includes(t.toLowerCase()))),e&&"all"!==e&&(r=r.filter(t=>t.category===e)),r.slice(0,50)}async getDoctors(){return await this.loadCSV(),this.data.filter(t=>"doctor"===t.table||t.dname&&"dname"!==t.dname)}async getHospitals(){return await this.loadCSV(),this.data.filter(t=>"hospital"===t.table||t.h_name&&"h_name"!==t.h_name)}async getScans(){return await this.loadCSV(),this.data.filter(t=>"con"===t.table||t.c_p_cro&&"c_p_cro"!==t.c_p_cro)}async getAdmins(){await this.loadCSV();let t=this.data.filter(t=>"admin"===t.table||t.username&&"username"!==t.username);return t.length>0?t:[{admin_id:"1",username:"superadmin",password:"admin123",admin_type:"superadmin",name:"Super Administrator"},{admin_id:"2",username:"admin",password:"admin123",admin_type:"admin",name:"System Administrator"},{admin_id:"3",username:"reception",password:"admin123",admin_type:"reception",name:"Reception Desk"},{admin_id:"4",username:"doctor",password:"admin123",admin_type:"doctor",name:"Dr. Medical Officer"},{admin_id:"5",username:"console",password:"admin123",admin_type:"console",name:"Console Operator"}]}async getDashboardStats(){await this.loadCSV();let t=await this.getPatients(),e=await this.getScans(),r=new Date().toISOString().split("T")[0],a=e.filter(t=>t.added_on&&t.added_on.includes(r));return{totalPatients:t.length,todayPatients:a.length,pendingScans:e.filter(t=>"Pending"===t.status||"Recall"===t.status).length,completedScans:e.filter(t=>"Complete"===t.status).length}}async getNursingQueue(){return await this.loadCSV(),(await this.getScans()).filter(t=>"Pending"===t.status||"Recall"===t.status).slice(0,20)}async getConsoleQueue(){return await this.loadCSV(),(await this.getScans()).filter(t=>"Complete"===t.status).slice(0,20)}}},43793,t=>{"use strict";let e,r;t.s(["dbQuery",()=>u,"getConnection",()=>c]);var a=t.i(22244),o=t.i(54786);let n={host:process.env.DB_HOST||"varahasdc.co.in",port:parseInt(process.env.DB_PORT||"3306"),user:process.env.DB_USER||"varaosrc_prc",password:process.env.DB_PASSWORD||"PRC!@#456&*(",database:process.env.DB_NAME||"varaosrc_hospital_management",waitForConnections:!0,connectionLimit:10,queueLimit:0,acquireTimeout:6e4,timeout:6e4,reconnect:!0,ssl:void 0},s={host:process.env.LOCAL_DB_HOST||"127.0.0.1",port:3306,user:process.env.LOCAL_DB_USER||"varaosrc_prc",password:process.env.LOCAL_DB_PASSWORD||"PRC!@#456&*(",database:process.env.LOCAL_DB_NAME||"varaosrc_hospital_management",waitForConnections:!0,connectionLimit:10,queueLimit:0},i=!1,l=!1,c=async()=>{if(i&&e)return e;if(l&&r)return r;if(await d(),i&&e)return e;if(l&&r)return r;throw Error("No database connection available")},d=async()=>{try{return e||(e=a.default.createPool(n)),await e.execute("SELECT 1 as test"),console.log("✅ Primary database (Namecheap) connected successfully"),i=!0,!0}catch(t){console.error("❌ Primary database connection failed:",t),console.log("🔄 Trying fallback database...");try{return r||(r=a.default.createPool(s)),await r.execute("SELECT 1 as test"),console.log("✅ Fallback database connected successfully"),l=!0,!0}catch(t){return console.error("❌ Fallback database connection failed:",t),console.log("📄 Falling back to CSV data source"),i=!1,l=!1,!1}}},u=async(t,e=[])=>{if(i||l)try{let r=await c(),[a]=await r.execute(t,e);return a}catch(t){console.error("MySQL query failed, switching to CSV:",t),i=!1,l=!1}if(console.log("🔄 Using CSV fallback for query:",t.substring(0,50)+"..."),t.toLowerCase().includes("patient_new"))return await o.csvService.getPatients();if(t.toLowerCase().includes("doctor"))return await o.csvService.getDoctors();if(t.toLowerCase().includes("hospital"))return await o.csvService.getHospitals();if(t.toLowerCase().includes("con"))return await o.csvService.getScans();if(t.toLowerCase().includes("admin"))return await o.csvService.getAdmins();return[]};d().catch(console.error)},60950,(t,e,r)=>{},20199,t=>{"use strict";t.s(["handler",()=>S,"patchFetch",()=>F,"routeModule",()=>A,"serverHooks",()=>f,"workAsyncStorage",()=>v,"workUnitAsyncStorage",()=>C],20199);var e=t.i(47909),r=t.i(74017),a=t.i(96250),o=t.i(59756),n=t.i(61916),s=t.i(69741),i=t.i(16795),l=t.i(87718),c=t.i(95169),d=t.i(47587),u=t.i(66012),p=t.i(70101),h=t.i(74838),g=t.i(10372),m=t.i(93695);t.i(52474);var y=t.i(220);t.s(["GET",()=>b],88616);var E=t.i(89171),x=t.i(43793);async function b(t){try{let{searchParams:e}=new URL(t.url),r=e.get("date")||new Date().toISOString().split("T")[0],a=e.get("type")||"detail",[o,n,s]=r.split("-"),i=`${o}-${n}-${s}`,l=`${s}-${n}-${o}`,c="";c="detail"===a?await w(i,l):await _(i,l);let d=`DAILY_${a.toUpperCase()}_REPORT-${l}.xls`;return new E.NextResponse(c,{headers:{"Content-Type":"application/vnd.ms-excel","Content-Disposition":`attachment; filename="${d}"`}})}catch(t){return console.error("Error generating report:",t),E.NextResponse.json({error:"Failed to generate report"},{status:500})}}async function w(t,e){let r=await (0,x.dbQuery)(`
    SELECT 
      p.patient_id, p.patient_name, p.cro, p.age, p.gender, p.category,
      p.scan_type, p.total_scan, p.amount, p.examination_id,
      h.h_name as hospital_name, h.h_short,
      d.dname as doctor_name
    FROM patient_new p
    LEFT JOIN hospital h ON p.hospital_id = h.h_id
    LEFT JOIN doctor d ON p.doctor_name = d.d_id
    WHERE DATE(STR_TO_DATE(p.date, '%d-%m-%Y')) = ?
    AND p.scan_status = 1
    ORDER BY p.patient_id DESC
  `,[t]),a=`
    <html>
    <meta http-equiv="Content-Type" content="text/html; charset=Windows-1252">
    <body>
    <table border="1">
      <tr>
        <th colspan="11" style="background-color:#2F75B5; color:white">VARAHA SDC : IMAGING UNDER P.P.P. MODE</th>
      </tr>
      <tr>
        <th colspan="11" style="background-color:#2F75B5; color:white">RAJASTHAN MEDICARE RELIEF SOCIETY, MDM HOSPITAL</th>
      </tr>
      <tr>
        <th style="background-color:#FFEA00; color:black" colspan="11">DAILY DETAIL REPORT - ${e}</th>
      </tr>
      <tr>
        <th style="background-color:#2F75B5; color:white">S.No</th>
        <th style="background-color:#2F75B5; color:white">DATE</th>
        <th style="background-color:#2F75B5; color:white">CRO NO.</th>
        <th style="background-color:#2F75B5; color:white">PATIENT ID</th>
        <th style="background-color:#2F75B5; color:white">NAME OF PATIENT</th>
        <th style="background-color:#2F75B5; color:white">AGE</th>
        <th style="background-color:#2F75B5; color:white">GENDER</th>
        <th style="background-color:#2F75B5; color:white">SCAN TYPE</th>
        <th style="background-color:#2F75B5; color:white">TOTAL SCAN</th>
        <th style="background-color:#2F75B5; color:white">AMOUNT</th>
        <th style="background-color:#2F75B5; color:white">CATEGORY</th>
      </tr>
  `,o=0,n=0;return r.forEach((t,r)=>{a+=`
      <tr>
        <td>${r+1}</td>
        <td>${e}</td>
        <td>${t.cro}</td>
        <td>${t.examination_id||""}</td>
        <td>${t.patient_name}</td>
        <td>${t.age?.replace("ear","")||""}</td>
        <td>${t.gender?.charAt(0)||""}</td>
        <td>${t.scan_type}</td>
        <td style="text-align:right">${t.total_scan}</td>
        <td style="text-align:right">${t.amount}</td>
        <td>${t.category}</td>
      </tr>
    `,o+=parseFloat(t.amount)||0,n+=parseInt(t.total_scan)||0}),a+=`
      <tr>
        <th style="background-color:#FFEA00; color:black" colspan="8">Total</th>
        <th style="background-color:#FFEA00; color:black; text-align:right">${n}</th>
        <th style="background-color:#FFEA00; color:black; text-align:right">${o}</th>
        <th style="background-color:#FFEA00; color:black"></th>
      </tr>
    </table>
    </body>
    </html>
  `}async function _(t,e){let r=await (0,x.dbQuery)(`
    SELECT 
      p.category,
      COUNT(*) as patient_count,
      SUM(p.total_scan) as total_scans,
      SUM(p.amount) as total_amount,
      h.h_short as hospital_short
    FROM patient_new p
    LEFT JOIN hospital h ON p.hospital_id = h.h_id
    WHERE DATE(STR_TO_DATE(p.date, '%d-%m-%Y')) = ?
    AND p.scan_status = 1
    GROUP BY p.category, h.h_short
    ORDER BY h.h_short, p.category
  `,[t]),a=`
    <html>
    <meta http-equiv="Content-Type" content="text/html; charset=Windows-1252">
    <body>
    <table border="1">
      <tr>
        <th colspan="13" style="background-color:#2F75B5; color:white">VARAHA SDC  </th>
      </tr>
      <tr>
        <th colspan="13" style="background-color:#2F75B5; color:white">(IMAGING UNDER P.P.P MODE)</th>
      </tr>
      <tr>
        <th colspan="13" style="background-color:#2F75B5; color:white">RAJASTHAN MEDICARE RELIEF SOCIETY, MDM HOSPITAL, Jodhpur</th>
      </tr>
      <tr>
        <th style="background-color:#FFEA00; color:black" colspan="13">SUMMARY FOR THE PERIOD OF ${e}</th>
      </tr>
      <tr>
        <th style="background-color:#2F75B5; color:white">HOSPITAL</th>
        <th style="background-color:#2F75B5; color:white">CATEGORY</th>
        <th style="background-color:#2F75B5; color:white">NO. OF SCAN</th>
        <th style="background-color:#2F75B5; color:white">PATIENT/FORMS</th>
        <th style="background-color:#2F75B5; color:white">AMOUNT</th>
      </tr>
  `,o=0,n=0,s=0;r.forEach(t=>{a+=`
      <tr>
        <td>${t.hospital_short||"N/A"}</td>
        <td>${t.category}</td>
        <td style="text-align:center">${t.total_scans}</td>
        <td style="text-align:center">${t.patient_count}</td>
        <td style="text-align:right">${parseFloat(t.total_amount).toFixed(2)}</td>
      </tr>
    `,o+=parseInt(t.total_scans)||0,n+=parseInt(t.patient_count)||0,s+=parseFloat(t.total_amount)||0});let i=s-.25*s;return a+=`
      <tr>
        <th style="background-color:#FFEA00; color:black" colspan="2">NET AMOUNT</th>
        <th style="background-color:#FFEA00; color:black; text-align:center">${o}</th>
        <th style="background-color:#FFEA00; color:black; text-align:center">${n}</th>
        <th style="background-color:#FFEA00; color:black; text-align:right">${s.toFixed(2)}</th>
      </tr>
      <tr>
        <td colspan="5">&nbsp;</td>
      </tr>
      <tr>
        <th style="background-color:#2F75B5; color:white" colspan="5">SUMMARY FOR THE PERIOD</th>
      </tr>
      <tr>
        <td><b>PARTICULAR</b></td>
        <td></td>
        <td style="text-align:center"><b>SCAN</b></td>
        <td></td>
        <td style="text-align:center"><b>AMOUNT</b></td>
      </tr>
      <tr>
        <td>GROSS TOTAL</td>
        <td></td>
        <td style="text-align:center">${o}</td>
        <td></td>
        <td style="text-align:right">${s.toFixed(2)}</td>
      </tr>
      <tr>
        <td>(-) 25% FREE SHARE OF MDM</td>
        <td></td>
        <td style="text-align:center">${(.25*o).toFixed(0)}</td>
        <td></td>
        <td style="text-align:right">${(.25*s).toFixed(2)}</td>
      </tr>
      <tr>
        <th style="background-color:#FFEA00; color:black">NET RECEIVABLE</th>
        <th style="background-color:#FFEA00; color:black"></th>
        <th style="background-color:#FFEA00; color:black; text-align:center">${(o-.25*o).toFixed(0)}</th>
        <th style="background-color:#FFEA00; color:black"></th>
        <th style="background-color:#FFEA00; color:black; text-align:right">${i.toFixed(2)}</th>
      </tr>
    </table>
    </body>
    </html>
  `}var R=t.i(88616);let A=new e.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/reports/daily-revenue-excel/route",pathname:"/api/reports/daily-revenue-excel",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/api/reports/daily-revenue-excel/route.ts",nextConfigOutput:"",userland:R}),{workAsyncStorage:v,workUnitAsyncStorage:C,serverHooks:f}=A;function F(){return(0,a.patchFetch)({workAsyncStorage:v,workUnitAsyncStorage:C})}async function S(t,e,a){var E;let x="/api/reports/daily-revenue-excel/route";x=x.replace(/\/index$/,"")||"/";let b=await A.prepare(t,e,{srcPage:x,multiZoneDraftMode:!1});if(!b)return e.statusCode=400,e.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:w,params:_,nextConfig:R,isDraftMode:v,prerenderManifest:C,routerServerContext:f,isOnDemandRevalidate:F,revalidateOnlyGenerated:S,resolvedPathname:T}=b,k=(0,s.normalizeAppPath)(x),O=!!(C.dynamicRoutes[k]||C.routes[T]);if(O&&!v){let t=!!C.routes[T],e=C.dynamicRoutes[k];if(e&&!1===e.fallback&&!t)throw new m.NoFallbackError}let N=null;!O||A.isDev||v||(N="/index"===(N=T)?"/":N);let P=!0===A.isDev||!O,D=O&&!P,L=t.method||"GET",$=(0,n.getTracer)(),I=$.getActiveScopeSpan(),M={params:_,prerenderManifest:C,renderOpts:{experimental:{cacheComponents:!!R.experimental.cacheComponents,authInterrupts:!!R.experimental.authInterrupts},supportsDynamicResponse:P,incrementalCache:(0,o.getRequestMeta)(t,"incrementalCache"),cacheLifeProfiles:null==(E=R.experimental)?void 0:E.cacheLife,isRevalidate:D,waitUntil:a.waitUntil,onClose:t=>{e.on("close",t)},onAfterTaskError:void 0,onInstrumentationRequestError:(e,r,a)=>A.onRequestError(t,e,a,f)},sharedContext:{buildId:w}},B=new i.NodeNextRequest(t),U=new i.NodeNextResponse(e),H=l.NextRequestAdapter.fromNodeNextRequest(B,(0,l.signalFromNodeResponse)(e));try{let s=async r=>A.handle(H,M).finally(()=>{if(!r)return;r.setAttributes({"http.status_code":e.statusCode,"next.rsc":!1});let a=$.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==c.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let o=a.get("next.route");if(o){let t=`${L} ${o}`;r.setAttributes({"next.route":o,"http.route":o,"next.span_name":t}),r.updateName(t)}else r.updateName(`${L} ${t.url}`)}),i=async n=>{var i,l;let c=async({previousCacheEntry:r})=>{try{if(!(0,o.getRequestMeta)(t,"minimalMode")&&F&&S&&!r)return e.statusCode=404,e.setHeader("x-nextjs-cache","REVALIDATED"),e.end("This page could not be found"),null;let i=await s(n);t.fetchMetrics=M.renderOpts.fetchMetrics;let l=M.renderOpts.pendingWaitUntil;l&&a.waitUntil&&(a.waitUntil(l),l=void 0);let c=M.renderOpts.collectedTags;if(!O)return await (0,u.sendResponse)(B,U,i,M.renderOpts.pendingWaitUntil),null;{let t=await i.blob(),e=(0,p.toNodeOutgoingHttpHeaders)(i.headers);c&&(e[g.NEXT_CACHE_TAGS_HEADER]=c),!e["content-type"]&&t.type&&(e["content-type"]=t.type);let r=void 0!==M.renderOpts.collectedRevalidate&&!(M.renderOpts.collectedRevalidate>=g.INFINITE_CACHE)&&M.renderOpts.collectedRevalidate,a=void 0===M.renderOpts.collectedExpire||M.renderOpts.collectedExpire>=g.INFINITE_CACHE?void 0:M.renderOpts.collectedExpire;return{value:{kind:y.CachedRouteKind.APP_ROUTE,status:i.status,body:Buffer.from(await t.arrayBuffer()),headers:e},cacheControl:{revalidate:r,expire:a}}}}catch(e){throw(null==r?void 0:r.isStale)&&await A.onRequestError(t,e,{routerKind:"App Router",routePath:x,routeType:"route",revalidateReason:(0,d.getRevalidateReason)({isRevalidate:D,isOnDemandRevalidate:F})},f),e}},m=await A.handleResponse({req:t,nextConfig:R,cacheKey:N,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:C,isRoutePPREnabled:!1,isOnDemandRevalidate:F,revalidateOnlyGenerated:S,responseGenerator:c,waitUntil:a.waitUntil});if(!O)return null;if((null==m||null==(i=m.value)?void 0:i.kind)!==y.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==m||null==(l=m.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});(0,o.getRequestMeta)(t,"minimalMode")||e.setHeader("x-nextjs-cache",F?"REVALIDATED":m.isMiss?"MISS":m.isStale?"STALE":"HIT"),v&&e.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let E=(0,p.fromNodeOutgoingHttpHeaders)(m.value.headers);return(0,o.getRequestMeta)(t,"minimalMode")&&O||E.delete(g.NEXT_CACHE_TAGS_HEADER),!m.cacheControl||e.getHeader("Cache-Control")||E.get("Cache-Control")||E.set("Cache-Control",(0,h.getCacheControlHeader)(m.cacheControl)),await (0,u.sendResponse)(B,U,new Response(m.value.body,{headers:E,status:m.value.status||200})),null};I?await i(I):await $.withPropagatedContext(t.headers,()=>$.trace(c.BaseServerSpan.handleRequest,{spanName:`${L} ${t.url}`,kind:n.SpanKind.SERVER,attributes:{"http.method":L,"http.target":t.url}},i))}catch(e){if(I||e instanceof m.NoFallbackError||await A.onRequestError(t,e,{routerKind:"App Router",routePath:k,routeType:"route",revalidateReason:(0,d.getRevalidateReason)({isRevalidate:D,isOnDemandRevalidate:F})}),O)throw e;return await (0,u.sendResponse)(B,U,new Response(null,{status:500})),null}}}];

//# sourceMappingURL=%5Broot-of-the-server%5D__454b1ba2._.js.map