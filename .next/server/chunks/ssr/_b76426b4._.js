module.exports=[84505,a=>{"use strict";a.s(["Download",()=>b],84505);let b=(0,a.i(70106).default)("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]])},27747,a=>{"use strict";a.s(["default",()=>f]);var b=a.i(87924),c=a.i(72131),d=a.i(46842),e=a.i(50522);function f(){let[a,f]=(0,c.useState)(null);(0,c.useEffect)(()=>{g()},[]);let g=async()=>{try{let a=await fetch("https://varahasdc.co.in/api/reception/patients/last-enrolled");if(a.ok){let b=await a.json();f(b.data)}}catch(a){console.error("Error fetching last patient:",a)}};return a?(0,b.jsx)("div",{className:"bg-blue-600 bg-opacity-20 rounded-lg p-4 border border-blue-200",children:(0,b.jsxs)("div",{className:"flex items-center space-x-2 text-white",children:[(0,b.jsx)(d.User,{className:"h-4 w-4"}),(0,b.jsx)("span",{className:"text-sm font-medium text-white",children:"Last Enrolled Patient"}),(0,b.jsx)(e.ChevronRight,{className:"h-3 w-3 text-white"}),(0,b.jsx)("span",{className:"text-sm font-bold text-white",children:a.cro}),(0,b.jsx)(e.ChevronRight,{className:"h-3 w-3 text-white"}),(0,b.jsx)("span",{className:"text-sm font-medium text-white",children:a.patient_name})]})}):null}},23046,a=>{"use strict";a.s(["default",()=>j]);var b=a.i(87924),c=a.i(72131),d=a.i(41675),e=a.i(4720),f=a.i(84505),g=a.i(87532),h=a.i(66632),i=a.i(27747);function j(){let a=(0,h.useToastContext)(),[j,k]=(0,c.useState)(""),[l,m]=(0,c.useState)([]),[n,o]=(0,c.useState)(null),[p,q]=(0,c.useState)(!1),[r,s]=(0,c.useState)(!1);(0,c.useEffect)(()=>{let a=(()=>{let a=new Date,b=String(a.getDate()).padStart(2,"0"),c=String(a.getMonth()+1).padStart(2,"0"),d=a.getFullYear();return`${b}-${c}-${d}`})();k(a),t(a)},[]);let t=async(b=j)=>{if(!b)return void a.error("Please select a date");q(!0);try{let c=await fetch(`https://varahasdc.co.in/api/reception/reports/revenue?date=${b}`);if(c.ok){let b=await c.json();b.success?(m(b.data||[]),o(b.summary),s(!0),0===b.data.length&&a.info("No data found for the selected date")):(a.error("Failed to generate report"),m([]),o(null),s(!1))}else 404===c.status?a.error("Revenue report API not available. Please contact administrator."):a.error("Failed to generate report"),m([]),o(null),s(!1)}catch(b){console.error("Error generating report:",b),a.error("Revenue report service unavailable"),m([]),o(null),s(!1)}finally{q(!1)}},u=async a=>{a.preventDefault(),t()};return(0,b.jsx)("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6",children:(0,b.jsxs)("div",{className:"max-w-7xl mx-auto",children:[(0,b.jsx)("div",{className:"bg-gradient-to-r from-sky-500 to-sky-600 text-white p-6 rounded-xl shadow-lg mb-6",children:(0,b.jsxs)("div",{className:"flex justify-between items-start",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h1",{className:"text-3xl font-bold mb-2",children:"Revenue Report"}),(0,b.jsx)("p",{className:"text-sky-100 text-lg",children:"Generate console revenue and scan completion reports"})]}),(0,b.jsx)("div",{className:"ml-6",children:(0,b.jsx)(i.default,{})})]})}),(0,b.jsxs)("div",{className:"bg-white p-6 rounded-xl shadow-lg border border-blue-100 mb-6",children:[(0,b.jsx)("div",{className:"bg-gradient-to-r from-sky-500 to-sky-600 text-white p-4 rounded-lg mb-6",children:(0,b.jsxs)("h3",{className:"text-lg font-semibold flex items-center",children:[(0,b.jsx)(d.Calendar,{className:"h-5 w-5 mr-2"}),"Report By Day"]})}),(0,b.jsx)("form",{onSubmit:u,className:"space-y-6",children:(0,b.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 items-end",children:[(0,b.jsxs)("div",{children:[(0,b.jsxs)("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["Select Date ",(0,b.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,b.jsx)("input",{type:"date",value:j.split("-").reverse().join("-"),onChange:a=>{let b=a.target.value.split("-");k(`${b[2]}-${b[1]}-${b[0]}`)},className:"w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",required:!0})]}),(0,b.jsx)("div",{children:(0,b.jsxs)("button",{type:"submit",disabled:p,className:"w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-lg hover:from-sky-600 hover:to-sky-700 transition-all duration-200 disabled:opacity-50 shadow-md font-medium",children:[(0,b.jsx)(g.Search,{className:"h-4 w-4"}),(0,b.jsx)("span",{children:p?"Generating...":"Generate Report"})]})})]})})]}),r&&(0,b.jsxs)("div",{className:"bg-white rounded-xl shadow-lg border border-blue-100",children:[(0,b.jsx)("div",{className:"p-6 border-b border-gray-200",children:(0,b.jsxs)("div",{className:"flex items-center justify-between",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{className:"text-2xl font-bold text-gray-900",children:"VARAHA SDC"}),(0,b.jsxs)("h3",{className:"text-lg font-semibold text-gray-700 mt-1",children:["CONSOLE REVENUE - ",j]})]}),(0,b.jsxs)("button",{onClick:()=>{if(!j||0===l.length)return void a.error("No data to export");let b=`
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
            <tr><th colspan="13" class="header">VARAHA SDC</th></tr>
            <tr><th colspan="13" class="header">CONSOLE REVENUE REPORT Date: ${j}</th></tr>
            <tr>
              <th>S.No</th>
              <th>CRO</th>
              <th>Name</th>
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
            </tr>
    `;l.forEach(a=>{b+=`
        <tr>
          <td class="center">${a.sno}</td>
          <td>${a.cro}</td>
          <td>${a.patientName}</td>
          <td class="center">${a.age}</td>
          <td>${a.category}</td>
          <td>${a.scanType}</td>
          <td class="center">${a.films}</td>
          <td class="center">${a.numberOfScan}</td>
          <td class="center">${a.issueCd}</td>
          <td class="center">${a.contrast}</td>
          <td class="center">${a.paid||"-"}</td>
          <td class="center">${a.free||"-"}</td>
          <td class="amount">₹${a.amount.toLocaleString()}</td>
        </tr>
      `}),n&&(b+=`
            <tr><td colspan="13"></td></tr>
            <tr style="font-weight: bold; background-color: #f0f0f0;">
              <td colspan="5" class="center">TOTAL</td>
              <td class="center">-</td>
              <td class="center">${n.totalFilms}</td>
              <td class="center">${n.totalScans}</td>
              <td class="center">${n.totalCd}</td>
              <td class="center">${n.totalContrast}</td>
              <td class="center">${n.totalPaid}</td>
              <td class="center">${n.totalFree}</td>
              <td class="amount">₹${n.totalAmount.toLocaleString()}</td>
            </tr>
      `);let c=new Blob([b+=`
          </table>
        </body>
      </html>
    `],{type:"application/vnd.ms-excel;charset=utf-8"}),d=window.URL.createObjectURL(c),e=document.createElement("a");e.href=d,e.download=`CONSOLE REVENUE REPORT-${j}.xls`,e.click(),window.URL.revokeObjectURL(d)},className:"flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-lg hover:from-sky-600 hover:to-sky-700 transition-all duration-200 shadow-md font-medium",children:[(0,b.jsx)(f.Download,{className:"h-4 w-4"}),(0,b.jsx)("span",{children:"Export to Excel"})]})]})}),(0,b.jsx)("div",{className:"overflow-x-auto",children:(0,b.jsxs)("table",{className:"w-full",children:[(0,b.jsx)("thead",{className:"bg-gray-50",children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"S.No"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"CRO"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Name"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Age"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Category"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Scan Type"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Films"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Number of Scan"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Issue CD/DVD"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Contrast"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Paid"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Free"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Amount"})]})}),(0,b.jsxs)("tbody",{className:"bg-white divide-y divide-gray-200",children:[l.map((a,c)=>(0,b.jsxs)("tr",{className:"hover:bg-gray-50 transition-colors",children:[(0,b.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-black font-medium",children:a.sno}),(0,b.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,b.jsx)("div",{className:"text-sm font-medium text-blue-600",children:a.cro})}),(0,b.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,b.jsx)("div",{className:"text-sm font-medium text-black",children:a.patientName})}),(0,b.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-black",children:a.age}),(0,b.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-black",children:a.category}),(0,b.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-black",children:a.scanType}),(0,b.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-black",children:a.films}),(0,b.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-black",children:a.numberOfScan}),(0,b.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-black",children:a.issueCd}),(0,b.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-black",children:a.contrast}),(0,b.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-black",children:a.paid||"-"}),(0,b.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-black",children:a.free||"-"}),(0,b.jsxs)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-black",children:["₹",a.amount.toLocaleString()]})]},c)),n&&(0,b.jsxs)("tr",{className:"bg-blue-100 font-bold",children:[(0,b.jsx)("td",{className:"px-6 py-4 text-sm text-blue-900",colSpan:5}),(0,b.jsx)("td",{className:"px-6 py-4 text-sm text-blue-900 font-medium",children:"TOTAL"}),(0,b.jsx)("td",{className:"px-6 py-4 text-sm text-blue-900 font-medium",children:n.totalFilms}),(0,b.jsx)("td",{className:"px-6 py-4 text-sm text-blue-900 font-medium",children:n.totalScans}),(0,b.jsx)("td",{className:"px-6 py-4 text-sm text-blue-900 font-medium",children:n.totalCd}),(0,b.jsx)("td",{className:"px-6 py-4 text-sm text-blue-900 font-medium",children:n.totalContrast}),(0,b.jsx)("td",{className:"px-6 py-4 text-sm text-blue-900 font-medium",children:n.totalPaid}),(0,b.jsx)("td",{className:"px-6 py-4 text-sm text-blue-900 font-medium",children:n.totalFree}),(0,b.jsxs)("td",{className:"px-6 py-4 text-sm text-blue-900 font-medium",children:["₹",n.totalAmount.toLocaleString()]})]})]})]})}),0===l.length&&(0,b.jsxs)("div",{className:"text-center py-12",children:[(0,b.jsx)(e.FileText,{className:"h-16 w-16 text-gray-300 mx-auto mb-4"}),(0,b.jsx)("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"No Data Found"}),(0,b.jsx)("p",{className:"text-gray-500",children:"No completed scans found for the selected date."})]})]}),!r&&!p&&(0,b.jsx)("div",{className:"bg-white rounded-xl shadow-lg border border-blue-100 p-12",children:(0,b.jsxs)("div",{className:"text-center",children:[(0,b.jsx)(e.FileText,{className:"h-16 w-16 text-gray-300 mx-auto mb-4"}),(0,b.jsx)("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Generate Revenue Report"}),(0,b.jsx)("p",{className:"text-gray-500",children:'Select a date above and click "Generate Report" to view console revenue data.'})]})})]})})}}];

//# sourceMappingURL=_b76426b4._.js.map