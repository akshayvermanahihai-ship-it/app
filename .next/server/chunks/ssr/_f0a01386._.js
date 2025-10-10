module.exports=[27747,a=>{"use strict";a.s(["default",()=>f]);var b=a.i(87924),c=a.i(72131),d=a.i(46842),e=a.i(50522);function f(){let[a,f]=(0,c.useState)(null);(0,c.useEffect)(()=>{g()},[]);let g=async()=>{try{let a=await fetch("https://varahasdc.co.in/api/reception/patients/last-enrolled");if(a.ok){let b=await a.json();f(b.data)}}catch(a){console.error("Error fetching last patient:",a)}};return a?(0,b.jsx)("div",{className:"bg-blue-600 bg-opacity-20 rounded-lg p-4 border border-blue-200",children:(0,b.jsxs)("div",{className:"flex items-center space-x-2 text-white",children:[(0,b.jsx)(d.User,{className:"h-4 w-4"}),(0,b.jsx)("span",{className:"text-sm font-medium text-white",children:"Last Enrolled Patient"}),(0,b.jsx)(e.ChevronRight,{className:"h-3 w-3 text-white"}),(0,b.jsx)("span",{className:"text-sm font-bold text-white",children:a.cro}),(0,b.jsx)(e.ChevronRight,{className:"h-3 w-3 text-white"}),(0,b.jsx)("span",{className:"text-sm font-medium text-white",children:a.patient_name})]})}):null}},210,a=>{"use strict";a.s(["ArrowLeft",()=>b],210);let b=(0,a.i(70106).default)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},71931,a=>{"use strict";a.s(["Printer",()=>b],71931);let b=(0,a.i(70106).default)("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]])},1199,a=>{"use strict";a.s(["Receipt",()=>b],1199);let b=(0,a.i(70106).default)("Receipt",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]])},87205,a=>{"use strict";a.s(["default",()=>j]);var b=a.i(87924),c=a.i(72131),d=a.i(1199),e=a.i(41675),f=a.i(87532),g=a.i(71931),h=a.i(210),i=a.i(27747);function j(){let[a,j]=(0,c.useState)([]),[k,l]=(0,c.useState)(!0),[m,n]=(0,c.useState)(""),[o,p]=(0,c.useState)(""),[q,r]=(0,c.useState)(1),[s]=(0,c.useState)(25);(0,c.useEffect)(()=>{t()},[m]);let t=async()=>{l(!0);try{let a=[{id:1,withdraw:500,r_amount:2e3,d_amount:300,added_on:"01-08-2025",remark:"Daily collection"},{id:2,withdraw:1e3,r_amount:5e3,d_amount:800,added_on:"31-07-2025",remark:"Weekly settlement"},{id:3,withdraw:200,r_amount:1500,d_amount:100,added_on:"30-07-2025",remark:"Patient payments"}],b=a;if(m){let[c,d,e]=m.split("-"),f=`${e}-${d}-${c}`;b=a.filter(a=>a.added_on===f)}j(b)}catch(a){console.error("Error fetching transactions:",a)}finally{l(!1)}},u=a.filter(a=>a.remark.toLowerCase().includes(o.toLowerCase())||a.added_on.includes(o)),v=Math.ceil(u.length/s),w=(q-1)*s,x=u.slice(w,w+s),y=u.reduce((a,b)=>({withdraw:a.withdraw+b.withdraw,received:a.received+b.r_amount,due:a.due+b.d_amount}),{withdraw:0,received:0,due:0}),z=y.received-y.due-y.withdraw;return(0,b.jsxs)("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 space-y-6",children:[(0,b.jsx)("div",{className:"bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-xl shadow-lg",children:(0,b.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,b.jsx)("button",{onClick:()=>window.location.href="/reception/voucher",className:"p-2 hover:bg-blue-500 rounded-lg transition-colors",children:(0,b.jsx)(h.ArrowLeft,{className:"h-6 w-6"})}),(0,b.jsx)("div",{children:(0,b.jsxs)("div",{className:"flex justify-between items-start",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h1",{className:"text-3xl font-bold mb-2",children:"Voucher List"}),(0,b.jsx)("p",{className:"text-blue-100 text-lg",children:"View all voucher transactions and history"})]}),(0,b.jsx)("div",{className:"ml-6",children:(0,b.jsx)(i.default,{})})]})})]})}),(0,b.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[(0,b.jsxs)("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[(0,b.jsxs)("div",{className:"text-2xl font-bold text-green-600",children:["₹",y.received.toLocaleString()]}),(0,b.jsx)("div",{className:"text-sm text-green-800",children:"Total Received"})]}),(0,b.jsxs)("div",{className:"bg-red-50 p-4 rounded-lg border border-red-200",children:[(0,b.jsxs)("div",{className:"text-2xl font-bold text-red-600",children:["₹",y.due.toLocaleString()]}),(0,b.jsx)("div",{className:"text-sm text-red-800",children:"Total Due"})]}),(0,b.jsxs)("div",{className:"bg-orange-50 p-4 rounded-lg border border-orange-200",children:[(0,b.jsxs)("div",{className:"text-2xl font-bold text-orange-600",children:["₹",y.withdraw.toLocaleString()]}),(0,b.jsx)("div",{className:"text-sm text-orange-800",children:"Total Withdraw"})]}),(0,b.jsxs)("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[(0,b.jsxs)("div",{className:"text-2xl font-bold text-blue-600",children:["₹",Math.max(0,z).toLocaleString()]}),(0,b.jsx)("div",{className:"text-sm text-blue-800",children:"Net Cash"})]})]}),(0,b.jsxs)("div",{className:"bg-white p-6 rounded-xl shadow-lg border border-gray-100",children:[(0,b.jsxs)("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6",children:[(0,b.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4 flex-1",children:[(0,b.jsxs)("div",{className:"relative flex-1",children:[(0,b.jsx)(f.Search,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"}),(0,b.jsx)("input",{type:"text",placeholder:"Search by remarks or date...",value:o,onChange:a=>p(a.target.value),className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),(0,b.jsxs)("div",{className:"relative",children:[(0,b.jsx)(e.Calendar,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"}),(0,b.jsx)("input",{type:"date",value:m,onChange:a=>n(a.target.value),className:"pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),(0,b.jsxs)("button",{onClick:t,disabled:k,className:"flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 disabled:opacity-50 shadow-md font-medium",children:[(0,b.jsx)(f.Search,{className:"h-5 w-5"}),(0,b.jsx)("span",{children:k?"Loading...":"Refresh"})]})]}),(0,b.jsxs)("button",{onClick:()=>{let a=window.open("","_blank");if(!a)return;let b=`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Voucher List Report</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 20px; }
          .logo { font-size: 24px; font-weight: bold; color: #2563eb; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th, td { border: 1px solid #000; padding: 8px; text-align: left; font-size: 12px; }
          th { background-color: #f0f0f0; font-weight: bold; }
          .summary { margin: 20px 0; padding: 15px; background-color: #f9f9f9; border: 1px solid #ddd; }
          .footer { margin-top: 30px; text-align: center; font-size: 12px; }
          @media print { body { margin: 0; } }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo">VARAHA DIAGNOSTIC CENTER</div>
          <div>Voucher List Report</div>
          ${m?`<div>Date: ${m}</div>`:"<div>All Records</div>"}
        </div>
        
        <div class="summary">
          <h3>Summary</h3>
          <p><strong>Total Received:</strong> ₹${y.received.toLocaleString()}</p>
          <p><strong>Total Due:</strong> ₹${y.due.toLocaleString()}</p>
          <p><strong>Total Withdraw:</strong> ₹${y.withdraw.toLocaleString()}</p>
          <p><strong>Cash in Hand:</strong> ₹${Math.max(0,z).toLocaleString()}</p>
        </div>
        
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Date</th>
              <th>Received (₹)</th>
              <th>Due (₹)</th>
              <th>Withdraw (₹)</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            ${u.map((a,b)=>`
              <tr>
                <td>${b+1}</td>
                <td>${a.added_on}</td>
                <td>₹${a.r_amount.toLocaleString()}</td>
                <td>₹${a.d_amount.toLocaleString()}</td>
                <td>₹${a.withdraw.toLocaleString()}</td>
                <td>${a.remark||"-"}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
        
        <div class="footer">
          <p>Total Transactions: ${u.length}</p>
          <p>Generated on: ${new Date().toLocaleString()}</p>
        </div>
        
        <script>
          window.onload = function() {
            window.print();
          }
        </script>
      </body>
      </html>
    `;a.document.write(b),a.document.close()},className:"flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-md font-medium",children:[(0,b.jsx)(g.Printer,{className:"h-5 w-5"}),(0,b.jsx)("span",{children:"Print Report"})]})]}),(0,b.jsxs)("div",{className:"overflow-x-auto",children:[(0,b.jsxs)("table",{className:"w-full border-collapse border border-gray-300",children:[(0,b.jsx)("thead",{children:(0,b.jsxs)("tr",{className:"bg-blue-50",children:[(0,b.jsx)("th",{className:"border border-gray-300 px-4 py-2 text-left",children:"S.No"}),(0,b.jsx)("th",{className:"border border-gray-300 px-4 py-2 text-left",children:"Date"}),(0,b.jsx)("th",{className:"border border-gray-300 px-4 py-2 text-left",children:"Received (₹)"}),(0,b.jsx)("th",{className:"border border-gray-300 px-4 py-2 text-left",children:"Due (₹)"}),(0,b.jsx)("th",{className:"border border-gray-300 px-4 py-2 text-left",children:"Withdraw (₹)"}),(0,b.jsx)("th",{className:"border border-gray-300 px-4 py-2 text-left",children:"Net Amount (₹)"}),(0,b.jsx)("th",{className:"border border-gray-300 px-4 py-2 text-left",children:"Remarks"})]})}),(0,b.jsx)("tbody",{children:x.map((a,c)=>{let d=a.r_amount-a.d_amount-a.withdraw;return(0,b.jsxs)("tr",{className:"hover:bg-gray-50",children:[(0,b.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:w+c+1}),(0,b.jsx)("td",{className:"border border-gray-300 px-4 py-2 font-medium",children:a.added_on}),(0,b.jsxs)("td",{className:"border border-gray-300 px-4 py-2 text-green-600 font-medium",children:["₹",a.r_amount.toLocaleString()]}),(0,b.jsxs)("td",{className:"border border-gray-300 px-4 py-2 text-red-600 font-medium",children:["₹",a.d_amount.toLocaleString()]}),(0,b.jsxs)("td",{className:"border border-gray-300 px-4 py-2 text-orange-600 font-medium",children:["₹",a.withdraw.toLocaleString()]}),(0,b.jsxs)("td",{className:`border border-gray-300 px-4 py-2 font-medium ${d>=0?"text-blue-600":"text-red-600"}`,children:["₹",d.toLocaleString()]}),(0,b.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:a.remark||"-"})]},a.id)})}),(0,b.jsx)("tfoot",{children:(0,b.jsxs)("tr",{className:"bg-gray-100 font-bold",children:[(0,b.jsx)("td",{className:"border border-gray-300 px-4 py-2",colSpan:2,children:"Total"}),(0,b.jsxs)("td",{className:"border border-gray-300 px-4 py-2 text-green-600",children:["₹",y.received.toLocaleString()]}),(0,b.jsxs)("td",{className:"border border-gray-300 px-4 py-2 text-red-600",children:["₹",y.due.toLocaleString()]}),(0,b.jsxs)("td",{className:"border border-gray-300 px-4 py-2 text-orange-600",children:["₹",y.withdraw.toLocaleString()]}),(0,b.jsxs)("td",{className:`border border-gray-300 px-4 py-2 ${z>=0?"text-blue-600":"text-red-600"}`,children:["₹",z.toLocaleString()]}),(0,b.jsx)("td",{className:"border border-gray-300 px-4 py-2",children:"-"})]})})]}),0===x.length&&(0,b.jsx)("div",{className:"text-center py-12",children:k?(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"}),(0,b.jsx)("p",{className:"text-gray-600",children:"Loading transactions..."})]}):(0,b.jsxs)("div",{children:[(0,b.jsx)(d.Receipt,{className:"h-16 w-16 text-gray-300 mx-auto mb-4"}),(0,b.jsx)("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"No Transactions Found"}),(0,b.jsx)("p",{className:"text-gray-500",children:"No voucher transactions found matching your criteria."})]})})]}),v>1&&(0,b.jsxs)("div",{className:"flex items-center justify-between mt-6",children:[(0,b.jsxs)("div",{className:"text-sm text-gray-700",children:["Showing ",w+1,"-",Math.min(w+s,u.length)," of ",u.length]}),(0,b.jsxs)("div",{className:"flex space-x-2",children:[(0,b.jsx)("button",{onClick:()=>r(a=>Math.max(a-1,1)),disabled:1===q,className:"px-3 py-1 border border-gray-300 rounded disabled:opacity-50",children:"Previous"}),(0,b.jsxs)("span",{className:"px-3 py-1 bg-blue-100 text-blue-800 rounded",children:[q," of ",v]}),(0,b.jsx)("button",{onClick:()=>r(a=>Math.min(a+1,v)),disabled:q===v,className:"px-3 py-1 border border-gray-300 rounded disabled:opacity-50",children:"Next"})]})]})]})]})}}];

//# sourceMappingURL=_f0a01386._.js.map