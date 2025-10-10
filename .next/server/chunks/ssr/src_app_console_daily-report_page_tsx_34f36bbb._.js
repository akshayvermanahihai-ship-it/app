module.exports=[47166,a=>{"use strict";a.s(["default",()=>g]);var b=a.i(87924),c=a.i(72131),d=a.i(84505),e=a.i(69520),f=a.i(66632);function g(){let a=(0,f.useToastContext)(),[g,h]=(0,c.useState)([]),[i,j]=(0,c.useState)(!0),[k,l]=(0,c.useState)(new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Calcutta"})),[m,n]=(0,c.useState)(new Date().toLocaleDateString("en-CA",{timeZone:"Asia/Calcutta"})),[o,p]=(0,c.useState)(!1),[q,r]=(0,c.useState)(1);(0,c.useEffect)(()=>{r(1)},[k,m]),(0,c.useEffect)(()=>{s()},[]);let s=async()=>{if(k&&m?!(new Date(k)>new Date(m))||(a.error("From date cannot be later than to date"),!1):(a.error("Please select both from and to dates"),!1)){j(!0);try{let b=new URLSearchParams({fromDate:k.split("-").reverse().join("-"),toDate:m.split("-").reverse().join("-")}),c=await fetch(`https://varahasdc.co.in/api/console/daily-report?${b}`);if(c.ok){let b=await c.json();h(b.data||[]),b.data&&0!==b.data.length?a.success(`Found ${b.data.length} records for the selected date range`):a.error("No data found for the selected date range");let d=(b.data||[]).reduce((a,b)=>a+(parseInt(String(b.amount))||0),0);u(d)}else{let b=await c.json().catch(()=>({}));console.error("Console daily report API error:",b),a.error(`Failed to fetch daily report: ${b.error||"Unknown error"}`)}}catch(b){console.error("Error fetching daily report:",b),a.error("Network error: Unable to fetch data")}finally{j(!1)}}},[t,u]=(0,c.useState)(0);return(0,b.jsxs)("div",{className:"p-3 sm:p-6 space-y-4 sm:space-y-6",children:[(0,b.jsx)("div",{className:"bg-gradient-to-r from-sky-500 to-sky-600 text-white p-4 sm:p-6 rounded-xl shadow-lg",children:(0,b.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h1",{className:"text-xl sm:text-3xl font-bold mb-2",children:"Daily Report"}),(0,b.jsx)("p",{className:"text-sky-100 text-sm sm:text-base",children:"Console daily activity report"})]}),(0,b.jsxs)("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3",children:[(0,b.jsxs)("button",{onClick:()=>{if(0===g.length)return void a.error("No data to export");p(!0);try{let a=k.split("-").reverse().join("-"),b=m.split("-").reverse().join("-"),c=`
        <html>
          <head>
            <meta charset="UTF-8">
            <style>
              table { border-collapse: collapse; width: 100%; font-family: Arial, sans-serif; }
              th, td { border: 1px solid black; padding: 8px; text-align: left; }
              th { background-color: #f0f0f0; font-weight: bold; text-align: center; }
              .header { text-align: center; font-weight: bold; font-size: 16px; }
              .center { text-align: center; }
              .amount { text-align: right; }
            </style>
          </head>
          <body>
            <table>
              <tr><th colspan="21" class="header">VARAHA SDC</th></tr>
              <tr><th colspan="21" class="header">CONSOLE DAILY REPORT - From ${a} To ${b}</th></tr>
              <tr>
                <th>S.No</th>
                <th>CRO</th>
                <th>Exam. Id</th>
                <th>Name</th>
                <th>Doctor Name</th>
                <th>Age</th>
                <th>Category</th>
                <th>Scan Type</th>
                <th>Films</th>
                <th>Number of Scan</th>
                <th>Issue CD/DVD</th>
                <th>Contrast</th>
                <th>Paid</th>
                <th>Free</th>
                <th>Amount</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Technician Name</th>
                <th>Nursing Name</th>
                <th>Remark</th>
                <th>Status</th>
              </tr>
      `,d=0,e=0,f=0,h=0,i=0,j=0,l=0;g.forEach((a,b)=>{let g=parseInt(String(a.number_films))||0,k=parseInt(String(a.number_scan))||0,m=+("YES"===a.issue_cd),n=parseInt(String(a.number_contrast))||0,o=parseInt(String(a.amount))||0,p=["BPL/POOR","Sn. CITIZEN","BHAMASHAH","RTA","JSSY","PRISONER","IPD FREE","OPD FREE","RGHS","Chiranjeevi","Destitute"].includes(a.category);d+=g,e+=k,f+=m,h+=n,l+=o,p?j+=k:i+=k,c+=`
          <tr>
            <td class="center">${b+1}</td>
            <td>${a.c_p_cro}</td>
            <td class="center">${a.examination_id||0}</td>
            <td>${a.pre} ${a.patient_name}</td>
            <td>${a.doctor_name||"-"}</td>
            <td class="center">${a.age||"-"}</td>
            <td>${a.category||"-"}</td>
            <td>${a.scan_type||"-"}</td>
            <td class="center">${g}</td>
            <td class="center">${k}</td>
            <td class="center">${m}</td>
            <td class="center">${n}</td>
            <td class="center">${p?"":k}</td>
            <td class="center">${p?k:""}</td>
            <td class="amount">₹${o.toLocaleString()}</td>
            <td class="center">${a.start_time||"-"}</td>
            <td class="center">${a.stop_time||"-"}</td>
            <td>${a.technician_name||"-"}</td>
            <td>${a.nursing_name||"-"}</td>
            <td>${a.remark||"-"}</td>
            <td class="center">${a.status}</td>
          </tr>
        `}),c+=`
              <tr><td colspan="21"></td></tr>
              <tr style="font-weight: bold; background-color: #f0f0f0;">
                <td class="center">-</td>
                <td class="center">-</td>
                <td class="center">-</td>
                <td class="center">-</td>
                <td class="center">-</td>
                <td class="center">-</td>
                <td class="center">-</td>
                <td class="center">TOTAL</td>
                <td class="center">${d}</td>
                <td class="center">${e}</td>
                <td class="center">${f}</td>
                <td class="center">${h}</td>
                <td class="center">${i}</td>
                <td class="center">${j}</td>
                <td class="amount">₹${l.toLocaleString()}</td>
                <td class="center">-</td>
                <td class="center">-</td>
                <td class="center">-</td>
                <td class="center">-</td>
                <td class="center">-</td>
                <td class="center">${g.length}</td>
              </tr>
            </table>
          </body>
        </html>
      `;let n=new Blob([c],{type:"application/vnd.ms-excel;charset=utf-8"}),o=window.URL.createObjectURL(n),p=document.createElement("a");p.href=o,p.download=`CONSOLE_DAILY_REPORT_${a}_TO_${b}.xls`,p.click(),window.URL.revokeObjectURL(o),u(l)}catch(b){console.error("Export error:",b),a.error("Export failed")}finally{p(!1)}},disabled:o||0===g.length,className:"flex items-center justify-center space-x-2 px-3 sm:px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg transition-colors disabled:opacity-50 text-sm sm:text-base",children:[(0,b.jsx)(d.Download,{className:"h-4 w-4 sm:h-5 sm:w-5"}),(0,b.jsx)("span",{className:"hidden sm:inline",children:o?"Exporting...":"Export Excel"}),(0,b.jsx)("span",{className:"sm:hidden",children:"Export"})]}),(0,b.jsxs)("button",{onClick:s,disabled:i,className:"flex items-center justify-center space-x-2 px-3 sm:px-4 py-2 bg-sky-500 hover:bg-sky-400 rounded-lg transition-colors disabled:opacity-50 text-sm sm:text-base",children:[(0,b.jsx)(e.RefreshCw,{className:`h-4 w-4 sm:h-5 sm:w-5 ${i?"animate-spin":""}`}),(0,b.jsx)("span",{children:"Refresh"})]})]})]})}),(0,b.jsx)("div",{className:"bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100",children:(0,b.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-end space-y-4 sm:space-y-0 sm:space-x-4",children:[(0,b.jsxs)("div",{className:"flex-shrink-0",children:[(0,b.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"From Date"}),(0,b.jsx)("input",{type:"date",value:k,onChange:a=>{l(a.target.value),r(1)},className:"px-3 py-2 w-full sm:w-auto border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm sm:text-base"})]}),(0,b.jsxs)("div",{className:"flex-shrink-0",children:[(0,b.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"To Date"}),(0,b.jsx)("input",{type:"date",value:m,onChange:a=>{n(a.target.value),r(1)},className:"px-3 py-2 w-full sm:w-auto border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm sm:text-base"})]}),(0,b.jsx)("button",{onClick:s,disabled:i||!k||!m,className:"px-4 sm:px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors disabled:opacity-50 text-sm sm:text-base flex-shrink-0",children:"Generate Report"}),(0,b.jsxs)("div",{className:"text-xs sm:text-sm text-gray-600 break-words",children:[(0,b.jsxs)("div",{className:"sm:hidden",children:[(0,b.jsxs)("div",{children:["Records: ",g.length]}),(0,b.jsxs)("div",{children:["Revenue: ₹",t.toLocaleString()]})]}),(0,b.jsxs)("div",{className:"hidden sm:block",children:["Total Records: ",g.length," | Total Revenue: ₹",t.toLocaleString()]})]})]})}),(0,b.jsxs)("div",{className:"bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden",children:[(0,b.jsxs)("div",{className:"px-4 sm:px-6 py-4 border-b border-gray-200",children:[(0,b.jsx)("h2",{className:"text-lg sm:text-xl font-semibold text-gray-900",children:"Console Activities"}),(0,b.jsxs)("p",{className:"text-xs sm:text-sm text-gray-600 mt-1",children:["Report from ",k.split("-").reverse().join("-")," to ",m.split("-").reverse().join("-")]})]}),(0,b.jsx)("div",{className:"overflow-x-auto -webkit-overflow-scrolling-touch",children:(0,b.jsxs)("table",{className:"w-full min-w-[1200px]",children:[(0,b.jsx)("thead",{className:"bg-gray-50",children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{className:"px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",children:"S.No"}),(0,b.jsx)("th",{className:"px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",children:"CRO"}),(0,b.jsx)("th",{className:"px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",children:"Exam. Id"}),(0,b.jsx)("th",{className:"px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",children:"Name"}),(0,b.jsx)("th",{className:"px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",children:"Doctor"}),(0,b.jsx)("th",{className:"px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",children:"Age"}),(0,b.jsx)("th",{className:"px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",children:"Category"}),(0,b.jsx)("th",{className:"px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",children:"Scan Type"}),(0,b.jsx)("th",{className:"px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",children:"Films"}),(0,b.jsx)("th",{className:"px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",children:"No. Scan"}),(0,b.jsx)("th",{className:"px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",children:"CD/DVD"}),(0,b.jsx)("th",{className:"px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",children:"Contrast"}),(0,b.jsx)("th",{className:"px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",children:"Amount"}),(0,b.jsx)("th",{className:"px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",children:"Start Time"}),(0,b.jsx)("th",{className:"px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",children:"Stop Time"}),(0,b.jsx)("th",{className:"px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",children:"Technician"}),(0,b.jsx)("th",{className:"px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",children:"Nursing"}),(0,b.jsx)("th",{className:"px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",children:"Remark"}),(0,b.jsx)("th",{className:"px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",children:"Status"})]})}),(0,b.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:i?(0,b.jsx)("tr",{children:(0,b.jsx)("td",{colSpan:19,className:"px-6 py-12 text-center",children:(0,b.jsxs)("div",{className:"flex items-center justify-center space-x-2",children:[(0,b.jsx)(e.RefreshCw,{className:"h-5 w-5 animate-spin text-blue-500"}),(0,b.jsx)("span",{className:"text-gray-500",children:"Loading daily report..."})]})})}):0===g.length?(0,b.jsx)("tr",{children:(0,b.jsx)("td",{colSpan:19,className:"px-6 py-12 text-center text-gray-500",children:"No activities found for selected date"})}):g.slice((q-1)*10,10*q).map((a,c)=>(0,b.jsxs)("tr",{className:"hover:bg-gray-50 transition-colors",children:[(0,b.jsx)("td",{className:"px-3 py-3 whitespace-nowrap text-sm text-black font-medium",children:(q-1)*10+c+1}),(0,b.jsx)("td",{className:"px-3 py-3 whitespace-nowrap",children:(0,b.jsx)("div",{className:"text-sm font-medium text-blue-600",children:a.c_p_cro})}),(0,b.jsx)("td",{className:"px-3 py-3 whitespace-nowrap text-sm text-black",children:a.examination_id||0}),(0,b.jsx)("td",{className:"px-3 py-3 whitespace-nowrap",children:(0,b.jsxs)("div",{className:"text-sm font-medium text-black",children:[a.pre," ",a.patient_name]})}),(0,b.jsx)("td",{className:"px-3 py-3 whitespace-nowrap text-sm text-black",children:a.doctor_name||"-"}),(0,b.jsx)("td",{className:"px-3 py-3 whitespace-nowrap text-sm text-black",children:a.age||"-"}),(0,b.jsx)("td",{className:"px-3 py-3 whitespace-nowrap text-sm text-black",children:a.category||"-"}),(0,b.jsx)("td",{className:"px-3 py-3 whitespace-nowrap text-sm text-black",children:a.scan_names||a.scan_type||"-"}),(0,b.jsx)("td",{className:"px-3 py-3 whitespace-nowrap text-sm text-black",children:a.number_films||0}),(0,b.jsx)("td",{className:"px-3 py-3 whitespace-nowrap text-sm text-black",children:a.number_scan||0}),(0,b.jsx)("td",{className:"px-3 py-3 whitespace-nowrap text-sm text-black",children:"YES"===a.issue_cd?"1":"0"}),(0,b.jsx)("td",{className:"px-3 py-3 whitespace-nowrap text-sm text-black",children:a.number_contrast||0}),(0,b.jsx)("td",{className:"px-3 py-3 whitespace-nowrap text-sm text-black",children:a.amount||0}),(0,b.jsx)("td",{className:"px-3 py-3 whitespace-nowrap text-sm text-black",children:a.start_time||"-"}),(0,b.jsx)("td",{className:"px-3 py-3 whitespace-nowrap text-sm text-black",children:a.stop_time||"-"}),(0,b.jsx)("td",{className:"px-3 py-3 whitespace-nowrap text-sm text-black",children:a.technician_name||"-"}),(0,b.jsx)("td",{className:"px-3 py-3 whitespace-nowrap text-sm text-black",children:a.nursing_name||"-"}),(0,b.jsx)("td",{className:"px-3 py-3 whitespace-nowrap text-sm text-black",children:a.remark||"-"}),(0,b.jsx)("td",{className:"px-3 py-3 whitespace-nowrap",children:(0,b.jsx)("span",{className:`px-2 py-1 text-xs font-bold rounded-full border ${"Complete"===a.status?"bg-green-100 text-green-900 border-green-300":"Pending"===a.status?"bg-yellow-100 text-yellow-900 border-yellow-300":"Recall"===a.status?"bg-red-100 text-red-900 border-red-300":"bg-gray-100 text-gray-900 border-gray-300"}`,children:a.status||"N/A"})})]},`${a.c_p_cro}-${c}`))})]})}),g.length>10&&(0,b.jsx)("div",{className:"px-4 py-4 border-t border-gray-200",children:(0,b.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0",children:[(0,b.jsxs)("div",{className:"text-sm text-gray-700 text-center sm:text-left",children:["Page ",q," of ",Math.ceil(g.length/10)," | Total: ",g.length," records"]}),(0,b.jsxs)("div",{className:"flex items-center justify-center space-x-1 sm:space-x-2 flex-wrap",children:[q>1&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("button",{onClick:()=>r(1),className:"px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50",children:"First"}),(0,b.jsx)("button",{onClick:()=>r(q-1),className:"px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50",children:"Prev"})]}),(0,b.jsx)("div",{className:"flex items-center space-x-1",children:Array.from({length:Math.min(5,Math.ceil(g.length/10))},(a,c)=>{let d=Math.max(1,q-2)+c;return d>Math.ceil(g.length/10)?null:(0,b.jsx)("button",{onClick:()=>r(d),className:`px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium rounded-lg ${q===d?"bg-sky-600 text-white":"text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"}`,children:d},d)})}),q<Math.ceil(g.length/10)&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("button",{onClick:()=>r(q+1),className:"px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50",children:"Next"}),(0,b.jsx)("button",{onClick:()=>r(Math.ceil(g.length/10)),className:"px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50",children:"Last"})]})]})]})})]})]})}}];

//# sourceMappingURL=src_app_console_daily-report_page_tsx_34f36bbb._.js.map