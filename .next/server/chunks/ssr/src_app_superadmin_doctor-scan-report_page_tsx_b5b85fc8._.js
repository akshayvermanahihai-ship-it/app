module.exports=[12154,a=>{"use strict";a.s(["default",()=>k]);var b=a.i(87924),c=a.i(72131),d=a.i(84505),e=a.i(81464),f=a.i(41675),g=a.i(46842),h=a.i(4720),i=a.i(82651),j=a.i(66632);function k(){let a=(0,j.useToastContext)(),[k,l]=(0,c.useState)([]),[m,n]=(0,c.useState)(null),[o,p]=(0,c.useState)(!1),[q,r]=(0,c.useState)(1),[s]=(0,c.useState)(10),[t,u]=(0,c.useState)({doctor_id:"",scan_head_id:"",from_date:"",to_date:""}),[v,w]=(0,c.useState)([]),[x,y]=(0,c.useState)([]);(0,c.useEffect)(()=>{z(),A(),B()},[]);let z=async()=>{try{let a=await fetch("https://varahasdc.co.in/api/doctor/ct-scan-doctors");if(a.ok){let b=await a.json();w(b.data||[])}}catch(a){console.error("Error fetching doctors:",a)}},A=async()=>{try{let a=await fetch("https://varahasdc.co.in/api/admin/scan-heads");if(a.ok){let b=await a.json();y(b.data||[])}}catch(a){console.error("Error fetching scan heads:",a)}},B=async()=>{p(!0),r(1);try{let a=new URLSearchParams;Object.entries(t).forEach(([b,c])=>{c&&"All"!==c&&a.append(b,c)});let b=await fetch(`https://varahasdc.co.in/api/superadmin/doctor-scan-report?${a}`);if(b.ok){let a=await b.json();l(a.data||[]),n(a.summary||null)}}catch(b){console.error("Error fetching reports:",b),a.error("Error fetching reports")}finally{p(!1)}},C=Math.ceil(k.length/s),D=(q-1)*s,E=k.slice(D,D+s),F=(a,b)=>{u(c=>({...c,[a]:b}))},G=async()=>{try{if(0===k.length)return void a.error("No data to export");let b=t.from_date&&t.to_date?`${t.from_date} to ${t.to_date}`:"All Dates",c=t.doctor_id?v.find(a=>a.d_id===parseInt(t.doctor_id))?.doctor_name||"Unknown":"All Doctors",d=`
        <html>
        <meta http-equiv="Content-Type" content="text/html; charset=Windows-1252">
        <body>
        <table border="1" style="border-collapse: collapse; width: 100%;">
          <tr>
            <th colspan="8" style="background-color:#2F75B5; color:white; text-align:center; padding:8px;">VARAHA SDC</th>
          </tr>
          <tr>
            <th colspan="8" style="background-color:#2F75B5; color:white; text-align:center; padding:8px;">DOCTOR SCAN REPORT</th>
          </tr>
          <tr>
            <th colspan="8" style="background-color:#FFEA00; color:black; text-align:center; padding:8px;">Date Range: ${b}</th>
          </tr>
          <tr>
            <th colspan="8" style="background-color:#FFEA00; color:black; text-align:center; padding:8px;">Doctor Filter: ${c}</th>
          </tr>
          <tr><td colspan="8" style="height:10px;"></td></tr>
          <tr>
            <th colspan="8" style="background-color:#2F75B5; color:white; text-align:center; padding:8px;">REPORTS BY DOCTOR</th>
          </tr>
          <tr>
            <th style="background-color:#D3D3D3; padding:5px;">Sr.No</th>
            <th style="background-color:#D3D3D3; padding:5px;">Doctor</th>
            <th style="background-color:#D3D3D3; padding:5px;">Reports</th>
            <th style="background-color:#D3D3D3; padding:5px;">Amount</th>
            <th colspan="4"></th>
          </tr>
      `;(m?.by_doctor||[]).forEach((a,b)=>{d+=`
          <tr>
            <td style="text-align:center; padding:3px;">${b+1}</td>
            <td style="padding:3px;">${a.doctor_name||"Unknown"}</td>
            <td style="text-align:right; padding:3px;">${a.report_count||0}</td>
            <td style="text-align:right; padding:3px;">${parseFloat(String(a.total_amount||0)).toFixed(2)}</td>
            <td colspan="4"></td>
          </tr>
        `});let e=(m?.by_doctor||[]).reduce((a,b)=>a+(b.report_count||0),0),f=(m?.by_doctor||[]).reduce((a,b)=>a+parseFloat(String(b.total_amount||0)),0);d+=`
          <tr>
            <td></td>
            <td style="background-color:#FFFF99; font-weight:bold; padding:5px;">Total</td>
            <td style="background-color:#FFFF99; font-weight:bold; text-align:right; padding:5px;">${e}</td>
            <td style="background-color:#FFFF99; font-weight:bold; text-align:right; padding:5px;">${f.toFixed(2)}</td>
            <td colspan="4"></td>
          </tr>
          <tr><td colspan="8" style="height:15px;"></td></tr>
          <tr>
            <th colspan="8" style="background-color:#2F75B5; color:white; text-align:center; padding:8px;">REPORTS BY SCAN HEAD</th>
          </tr>
          <tr>
            <th style="background-color:#D3D3D3; padding:5px;">Sr.No</th>
            <th style="background-color:#D3D3D3; padding:5px;">Scan Head</th>
            <th style="background-color:#D3D3D3; padding:5px;">Doctors</th>
            <th style="background-color:#D3D3D3; padding:5px;">Reports</th>
            <th style="background-color:#D3D3D3; padding:5px;">Rate/Report</th>
            <th style="background-color:#D3D3D3; padding:5px;">Amount</th>
            <th colspan="2"></th>
          </tr>
      `,(m?.by_head||[]).forEach((a,b)=>{let c=(a.report_count||0)>0?(a.total_amount||0)/(a.report_count||0):0;d+=`
          <tr>
            <td style="text-align:center; padding:3px;">${b+1}</td>
            <td style="padding:3px;">${a.head_name||"Unknown"}</td>
            <td style="text-align:right; padding:3px;">${a.doctor_count||0}</td>
            <td style="text-align:right; padding:3px;">${a.report_count||0}</td>
            <td style="text-align:right; padding:3px;">${c.toFixed(2)}</td>
            <td style="text-align:right; padding:3px;">${parseFloat(String(a.total_amount||0)).toFixed(2)}</td>
            <td colspan="2"></td>
          </tr>
        `}),(m?.by_head||[]).reduce((a,b)=>a+(b.doctor_count||0),0);let g=(m?.by_head||[]).reduce((a,b)=>a+(b.report_count||0),0),h=(m?.by_head||[]).reduce((a,b)=>a+(parseFloat(String(b.total_amount))||0),0);d+=`
          <tr>
            <td></td>
            <td style="background-color:#FFFF99; font-weight:bold; padding:5px;">Total</td>
            <td style="background-color:#FFFF99; font-weight:bold; text-align:right; padding:5px;"></td>
            <td style="background-color:#FFFF99; font-weight:bold; text-align:right; padding:5px;">${g}</td>
            <td style="background-color:#FFFF99; padding:5px;"></td>
            <td style="background-color:#FFFF99; font-weight:bold; text-align:right; padding:5px;">${h.toFixed(2)}</td>
            <td colspan="2"></td>
          </tr>
          <tr><td colspan="8" style="height:15px;"></td></tr>
          <tr>
            <th colspan="8" style="background-color:#2F75B5; color:white; text-align:center; padding:8px;">DETAILED REPORTS</th>
          </tr>
          <tr>
            <th style="background-color:#D3D3D3; padding:5px;">S.No</th>
            <th style="background-color:#D3D3D3; padding:5px;">Doctor Name</th>
            <th style="background-color:#D3D3D3; padding:5px;">Patient Name</th>
            <th style="background-color:#D3D3D3; padding:5px;">CRO</th>
            <th style="background-color:#D3D3D3; padding:5px;">Scan Types</th>
            <th style="background-color:#D3D3D3; padding:5px;">Scan Heads</th>
            <th style="background-color:#D3D3D3; padding:5px;">Amount</th>
            <th style="background-color:#D3D3D3; padding:5px;">Report Date</th>
          </tr>
      `,k.forEach((a,b)=>{d+=`
          <tr>
            <td style="text-align:center; padding:3px;">${b+1}</td>
            <td style="padding:3px;">${a.doctor_name||""}</td>
            <td style="padding:3px;">${a.patient_name||""}</td>
            <td style="padding:3px;">${a.patient_cro||""}</td>
            <td style="padding:3px;">${a.scan_names||""}</td>
            <td style="padding:3px;">${a.scan_head_names||""}</td>
            <td style="text-align:right; padding:3px;">${parseFloat(String(a.total_amount||0)).toFixed(2)}</td>
            <td style="padding:3px;">${a.report_date||""}</td>
          </tr>
        `}),d+=`
        </table>
        </body>
        </html>
      `;let i=new Blob([d],{type:"application/vnd.ms-excel"}),j=window.URL.createObjectURL(i),l=document.createElement("a");l.href=j,l.download="doctor-scan-report.xls",document.body.appendChild(l),l.click(),document.body.removeChild(l),window.URL.revokeObjectURL(j),a.success("Report downloaded successfully")}catch(b){console.error("Download error:",b),a.error("Error downloading report")}};return(0,b.jsx)(i.default,{title:"Doctor Scan Report",subtitle:"Comprehensive doctor scan reporting with amount calculations",children:(0,b.jsxs)("div",{className:"space-y-6",children:[(0,b.jsxs)("div",{className:"bg-white p-6 rounded-xl shadow-lg border border-gray-100",children:[(0,b.jsxs)("div",{className:"flex items-center mb-4",children:[(0,b.jsx)(e.Filter,{className:"h-5 w-5 text-gray-600 mr-2"}),(0,b.jsx)("h3",{className:"text-lg font-semibold",children:"Filters"})]}),(0,b.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Doctor"}),(0,b.jsxs)("select",{value:t.doctor_id,onChange:a=>F("doctor_id",a.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500",children:[(0,b.jsx)("option",{value:"",children:"All Doctors"}),v.map(a=>(0,b.jsx)("option",{value:a.d_id,children:a.doctor_name},a.d_id))]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Scan Head"}),(0,b.jsxs)("select",{value:t.scan_head_id,onChange:a=>F("scan_head_id",a.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500",children:[(0,b.jsx)("option",{value:"",children:"All Heads"}),x.map(a=>(0,b.jsx)("option",{value:a.id,children:a.head_name},a.id))]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"From Date"}),(0,b.jsx)("input",{type:"date",value:t.from_date?t.from_date.split("-").reverse().join("-"):"",onChange:a=>{let b=a.target.value;if(b){let[a,c,d]=b.split("-");F("from_date",`${d}-${c}-${a}`)}else F("from_date","")},className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"To Date"}),(0,b.jsx)("input",{type:"date",value:t.to_date?t.to_date.split("-").reverse().join("-"):"",onChange:a=>{let b=a.target.value;if(b){let[a,c,d]=b.split("-");F("to_date",`${d}-${c}-${a}`)}else F("to_date","")},className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"})]})]}),(0,b.jsxs)("div",{className:"flex space-x-3 mt-4",children:[(0,b.jsx)("button",{onClick:B,disabled:o,className:"px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50",children:o?"Loading...":"Apply Filters"}),(0,b.jsxs)("button",{onClick:G,className:"px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700",children:[(0,b.jsx)(d.Download,{className:"h-4 w-4 mr-2 inline"}),"Excel"]})]})]}),m&&(0,b.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[(0,b.jsx)("div",{className:"bg-white p-6 rounded-xl shadow-lg border border-gray-100",children:(0,b.jsxs)("div",{className:"flex items-center",children:[(0,b.jsx)(g.User,{className:"h-8 w-8 text-blue-600"}),(0,b.jsxs)("div",{className:"ml-4",children:[(0,b.jsx)("p",{className:"text-sm font-medium text-gray-600",children:"Total Doctors"}),(0,b.jsx)("p",{className:"text-2xl font-bold text-gray-900",children:m.total_doctors||0})]})]})}),(0,b.jsx)("div",{className:"bg-white p-6 rounded-xl shadow-lg border border-gray-100",children:(0,b.jsxs)("div",{className:"flex items-center",children:[(0,b.jsx)(h.FileText,{className:"h-8 w-8 text-green-600"}),(0,b.jsxs)("div",{className:"ml-4",children:[(0,b.jsx)("p",{className:"text-sm font-medium text-gray-600",children:"Total Reports"}),(0,b.jsx)("p",{className:"text-2xl font-bold text-gray-900",children:m.total_reports||0})]})]})}),(0,b.jsx)("div",{className:"bg-white p-6 rounded-xl shadow-lg border border-gray-100",children:(0,b.jsxs)("div",{className:"flex items-center",children:[(0,b.jsx)(f.Calendar,{className:"h-8 w-8 text-purple-600"}),(0,b.jsxs)("div",{className:"ml-4",children:[(0,b.jsx)("p",{className:"text-sm font-medium text-gray-600",children:"Total Amount"}),(0,b.jsxs)("p",{className:"text-2xl font-bold text-gray-900",children:["₹",(m.total_amount||0).toLocaleString()]})]})]})})]}),m&&(0,b.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[(0,b.jsxs)("div",{className:"bg-white p-6 rounded-xl shadow-lg border border-gray-100",children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-4",children:"Reports by Doctor"}),(0,b.jsx)("div",{className:"overflow-x-auto",children:(0,b.jsxs)("table",{className:"w-full text-sm",children:[(0,b.jsx)("thead",{className:"bg-gray-50",children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{className:"px-4 py-2 text-left",children:"Sr.No"}),(0,b.jsx)("th",{className:"px-4 py-2 text-left",children:"Doctor"}),(0,b.jsx)("th",{className:"px-4 py-2 text-left",children:"Patient"}),(0,b.jsx)("th",{className:"px-4 py-2 text-left",children:"Amount"})]})}),(0,b.jsx)("tbody",{children:m.by_doctor&&m.by_doctor.length>0?(0,b.jsxs)(b.Fragment,{children:[m.by_doctor.map((a,c)=>(0,b.jsxs)("tr",{className:"border-t",children:[(0,b.jsx)("td",{className:"px-4 py-2",children:c+1}),(0,b.jsx)("td",{className:"px-4 py-2",children:a.doctor_name||"Unknown"}),(0,b.jsx)("td",{className:"px-4 py-2",children:a.report_count||0}),(0,b.jsxs)("td",{className:"px-4 py-2",children:["₹",(a.total_amount||0).toLocaleString()]})]},c)),(0,b.jsxs)("tr",{className:"border-t-2 border-gray-400 bg-gray-100 font-bold",children:[(0,b.jsx)("td",{className:"px-4 py-2"}),(0,b.jsx)("td",{className:"px-4 py-2",children:"Total"}),(0,b.jsx)("td",{className:"px-4 py-2",children:m.by_doctor.reduce((a,b)=>a+parseInt(String(b.report_count||0)),0)}),(0,b.jsxs)("td",{className:"px-4 py-2",children:["₹",m.by_doctor.reduce((a,b)=>a+parseFloat(String(b.total_amount||0)),0).toFixed(2)]})]})]}):(0,b.jsx)("tr",{children:(0,b.jsx)("td",{colSpan:4,className:"px-4 py-4 text-center text-gray-500",children:"No data available"})})})]})})]}),(0,b.jsxs)("div",{className:"bg-white p-6 rounded-xl shadow-lg border border-gray-100",children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-4",children:"Reports by Scan Head"}),(0,b.jsx)("div",{className:"overflow-x-auto",children:(0,b.jsxs)("table",{className:"w-full text-sm",children:[(0,b.jsx)("thead",{className:"bg-gray-50",children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{className:"px-4 py-2 text-left",children:"Sr.No"}),(0,b.jsx)("th",{className:"px-4 py-2 text-left",children:"Scan Head"}),(0,b.jsx)("th",{className:"px-4 py-2 text-left",children:"Doctors"}),(0,b.jsx)("th",{className:"px-4 py-2 text-left",children:"Reports"}),(0,b.jsx)("th",{className:"px-4 py-2 text-left",children:"Rate/Report"}),(0,b.jsx)("th",{className:"px-4 py-2 text-left",children:"Amount"})]})}),(0,b.jsx)("tbody",{children:m.by_head&&m.by_head.length>0?(0,b.jsxs)(b.Fragment,{children:[m.by_head.map((a,c)=>{let d=(a.report_count||0)>0?(a.total_amount||0)/(a.report_count||0):0;return(0,b.jsxs)("tr",{className:"border-t",children:[(0,b.jsx)("td",{className:"px-4 py-2",children:c+1}),(0,b.jsx)("td",{className:"px-4 py-2",children:a.head_name||"Unknown"}),(0,b.jsx)("td",{className:"px-4 py-2",children:a.doctor_count||0}),(0,b.jsx)("td",{className:"px-4 py-2",children:a.report_count||0}),(0,b.jsxs)("td",{className:"px-4 py-2",children:["₹",d.toFixed(2)]}),(0,b.jsxs)("td",{className:"px-4 py-2",children:["₹",(a.total_amount||0).toLocaleString()]})]},c)}),(0,b.jsxs)("tr",{className:"border-t-2 border-gray-400 bg-gray-100 font-bold",children:[(0,b.jsx)("td",{className:"px-4 py-2"}),(0,b.jsx)("td",{className:"px-4 py-2",children:"Total"}),(0,b.jsx)("td",{className:"px-4 py-2"}),(0,b.jsx)("td",{className:"px-4 py-2",children:m.by_head.reduce((a,b)=>a+(b.report_count||0),0)}),(0,b.jsx)("td",{className:"px-4 py-2"}),(0,b.jsxs)("td",{className:"px-4 py-2",children:["₹",m.by_head.reduce((a,b)=>a+(parseFloat(String(b.total_amount))||0),0).toFixed(2)]})]})]}):(0,b.jsx)("tr",{children:(0,b.jsx)("td",{colSpan:6,className:"px-4 py-4 text-center text-gray-500",children:"No data available"})})})]})})]})]}),(0,b.jsxs)("div",{className:"bg-white p-6 rounded-xl shadow-lg border border-gray-100",children:[(0,b.jsx)("h3",{className:"text-lg font-semibold mb-4",children:"Detailed Reports"}),(0,b.jsxs)("div",{className:"overflow-x-auto",children:[(0,b.jsxs)("table",{className:"w-full",children:[(0,b.jsx)("thead",{className:"bg-gray-50",children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"S.No"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Doctor"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Patient"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"CRO"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Scan Types"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Scan Heads"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Amount"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Date"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",children:"Category"})]})}),(0,b.jsx)("tbody",{className:"divide-y divide-gray-200",children:o?(0,b.jsx)("tr",{children:(0,b.jsx)("td",{colSpan:9,className:"px-6 py-8 text-center",children:(0,b.jsxs)("div",{className:"flex items-center justify-center",children:[(0,b.jsx)("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"}),(0,b.jsx)("span",{className:"ml-2 text-gray-600",children:"Loading reports..."})]})})}):E&&E.length>0?E.map((a,c)=>(0,b.jsxs)("tr",{className:"hover:bg-gray-50",children:[(0,b.jsx)("td",{className:"px-6 py-4 text-sm text-gray-900",children:D+c+1}),(0,b.jsx)("td",{className:"px-6 py-4 text-sm text-gray-900",children:a.doctor_name||"Unknown"}),(0,b.jsx)("td",{className:"px-6 py-4 text-sm text-gray-900",children:a.patient_name||"Unknown"}),(0,b.jsx)("td",{className:"px-6 py-4 text-sm text-gray-900",children:a.patient_cro||"N/A"}),(0,b.jsx)("td",{className:"px-6 py-4 text-sm text-gray-900",children:a.scan_names||"N/A"}),(0,b.jsx)("td",{className:"px-6 py-4 text-sm text-gray-900",children:a.scan_head_names||"N/A"}),(0,b.jsxs)("td",{className:"px-6 py-4 text-sm text-gray-900",children:["₹",(parseFloat(String(a.total_amount))||0).toLocaleString()]}),(0,b.jsx)("td",{className:"px-6 py-4 text-sm text-gray-900",children:a.report_date||"N/A"}),(0,b.jsx)("td",{className:"px-6 py-4 text-sm text-gray-900",children:a.category||"N/A"})]},c)):(0,b.jsx)("tr",{children:(0,b.jsx)("td",{colSpan:9,className:"px-6 py-8 text-center text-gray-500",children:"No reports found for the selected criteria"})})})]}),k.length>s&&(0,b.jsxs)("div",{className:"flex items-center justify-between mt-6 px-6",children:[(0,b.jsxs)("div",{className:"text-sm text-gray-700",children:["Showing ",D+1," to ",Math.min(D+s,k.length)," of ",k.length," results"]}),(0,b.jsxs)("div",{className:"flex space-x-2",children:[(0,b.jsx)("button",{onClick:()=>r(a=>Math.max(a-1,1)),disabled:1===q,className:"px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50",children:"Previous"}),Array.from({length:Math.min(5,C)},(a,c)=>{let d=q<=3?c+1:q-2+c;return d>C?null:(0,b.jsx)("button",{onClick:()=>r(d),className:`px-3 py-1 border rounded text-sm ${q===d?"bg-red-600 text-white border-red-600":"border-gray-300 hover:bg-gray-50"}`,children:d},d)}),(0,b.jsx)("button",{onClick:()=>r(a=>Math.min(a+1,C)),disabled:q===C,className:"px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50",children:"Next"})]})]})]})]})]})})}}];

//# sourceMappingURL=src_app_superadmin_doctor-scan-report_page_tsx_b5b85fc8._.js.map