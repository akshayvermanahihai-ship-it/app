module.exports=[14821,a=>{"use strict";a.s(["default",()=>k]);var b=a.i(87924),c=a.i(72131),d=a.i(87532),e=a.i(71931),f=a.i(4720),g=a.i(46842),h=a.i(69520),i=a.i(82651),j=a.i(66148);function k(){let[a,k]=(0,c.useState)(""),[l,m]=(0,c.useState)(null),[n,o]=(0,c.useState)([]),[p,q]=(0,c.useState)(!1),[r,s]=(0,c.useState)(""),[t,u]=(0,c.useState)(1),[v]=(0,c.useState)(10),[w,x]=(0,c.useState)(null);(0,c.useEffect)(()=>{w&&y()},[w]);let y=(0,c.useCallback)(async()=>{if(w){q(!0);try{let a=new URLSearchParams({from_date:w.from_date,to_date:w.to_date}),b=await fetch(`https://varahasdc.co.in/api/admin/patient-list?${a}`),c=await b.json();c.success&&o(c.data)}catch(a){console.error("Error fetching patient list:",a)}finally{q(!1)}}},[w]),z=async()=>{if(!a.trim())return void y();await B(a)},A=async a=>{k(a),await B(a)},B=async a=>{q(!0),s("");try{let b=await fetch(`https://varahasdc.co.in/api/admin/patient-reprint?cro=${encodeURIComponent(a)}`),c=await b.json();c.success?m(c.data):(s(c.error||"Patient not found"),m(null))}catch(a){console.error("Error searching patient:",a),s("Failed to search patient"),m(null)}finally{q(!1)}},C=n.filter(b=>b.patient_name?.toLowerCase().includes(a.toLowerCase())||b.cro?.toLowerCase().includes(a.toLowerCase())),D=Math.ceil(C.length/v),E=(t-1)*v,F=C.slice(E,E+v);return(0,b.jsx)(i.default,{title:"Patient Reprint",subtitle:"Reprint Patient Receipt",children:(0,b.jsxs)("div",{className:"space-y-6",children:[(0,b.jsx)("div",{className:"bg-white p-6 rounded-xl shadow-lg border border-gray-100",children:(0,b.jsx)(j.default,{onDateChange:(a,b)=>x({from_date:a,to_date:b})})}),(0,b.jsxs)("div",{className:"bg-white p-6 rounded-xl shadow-lg border border-gray-100",children:[(0,b.jsxs)("h2",{className:"text-xl font-semibold text-gray-900 mb-4 flex items-center",children:[(0,b.jsx)(d.Search,{className:"h-6 w-6 text-red-600 mr-2"}),"Search Patient for Reprint"]}),(0,b.jsxs)("div",{className:"flex gap-4",children:[(0,b.jsxs)("div",{className:"flex-1",children:[(0,b.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Enter CRO No or Patient Name"}),(0,b.jsx)("input",{type:"text",value:a,onChange:a=>k(a.target.value),placeholder:"Enter CRO Number or Patient Name",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent",onKeyPress:a=>"Enter"===a.key&&z()})]}),(0,b.jsxs)("div",{className:"flex items-end space-x-2",children:[(0,b.jsxs)("button",{onClick:z,disabled:p,className:"px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center",children:[(0,b.jsx)(d.Search,{className:"h-4 w-4 mr-2"}),p?"Searching...":"Submit"]}),(0,b.jsx)("button",{onClick:y,disabled:p||!w,className:"px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 flex items-center",children:(0,b.jsx)(h.RefreshCw,{className:`h-4 w-4 ${p?"animate-spin":""}`})})]})]}),r&&(0,b.jsx)("div",{className:"mt-4 p-4 bg-red-50 border border-red-200 rounded-lg",children:(0,b.jsx)("p",{className:"text-red-600",children:r})})]}),!l&&(0,b.jsxs)("div",{className:"bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden",children:[(0,b.jsx)("div",{className:"px-6 py-4 border-b border-gray-200",children:(0,b.jsxs)("h2",{className:"text-xl font-semibold text-gray-900 flex items-center",children:[(0,b.jsx)(g.User,{className:"h-6 w-6 text-red-600 mr-2"}),"Patient List (",C.length,")"]})}),(0,b.jsx)("div",{className:"overflow-x-auto",children:(0,b.jsxs)("table",{className:"w-full",children:[(0,b.jsx)("thead",{className:"bg-gray-50",children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"S.No"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"CRO"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Patient Name"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Age"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Gender"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Category"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Amount"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),(0,b.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:p?(0,b.jsx)("tr",{children:(0,b.jsx)("td",{colSpan:8,className:"px-6 py-4 text-center text-gray-500",children:"Loading..."})}):0===F.length?(0,b.jsx)("tr",{children:(0,b.jsx)("td",{colSpan:8,className:"px-6 py-4 text-center text-gray-500",children:"No patients found"})}):F.map((a,c)=>(0,b.jsxs)("tr",{className:"hover:bg-gray-50",children:[(0,b.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900",children:E+c+1}),(0,b.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:a.cro}),(0,b.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900",children:a.patient_name}),(0,b.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900",children:a.age}),(0,b.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900",children:a.gender}),(0,b.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900",children:a.category}),(0,b.jsxs)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900",children:["₹",a.amount]}),(0,b.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900",children:(0,b.jsxs)("button",{onClick:()=>A(a.cro),className:"flex items-center px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors",children:[(0,b.jsx)(e.Printer,{className:"h-4 w-4 mr-1"}),"Reprint"]})})]},a.patient_id))})]})}),D>1&&(0,b.jsx)("div",{className:"px-6 py-4 border-t border-gray-200",children:(0,b.jsxs)("div",{className:"flex items-center justify-between",children:[(0,b.jsxs)("div",{className:"text-sm text-gray-700",children:["Showing ",E+1," to ",Math.min(E+v,C.length)," of ",C.length," results"]}),(0,b.jsx)("div",{className:"flex items-center space-x-2",children:Array.from({length:D},(a,b)=>b+1).map(a=>(0,b.jsx)("button",{onClick:()=>u(a),className:`px-3 py-2 text-sm font-medium rounded-lg ${t===a?"bg-red-600 text-white":"text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"}`,children:a},a))})]})})]}),l&&(0,b.jsxs)("div",{className:"bg-white p-6 rounded-xl shadow-lg border border-gray-100",children:[(0,b.jsxs)("h2",{className:"text-xl font-semibold text-gray-900 mb-6 flex items-center",children:[(0,b.jsx)(f.FileText,{className:"h-6 w-6 text-red-600 mr-2"}),"Patient Receipt - CRO: ",l.cro]}),(0,b.jsxs)("div",{className:"space-y-4",children:[(0,b.jsxs)("div",{className:"bg-gray-50 p-4 rounded-lg",children:[(0,b.jsx)("h4",{className:"font-medium text-gray-900 mb-2",children:"Patient Information"}),(0,b.jsxs)("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"font-medium",children:"Name:"})," ",l.patient_name]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"font-medium",children:"CRO:"})," ",l.cro]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"font-medium",children:"Age:"})," ",l.age]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"font-medium",children:"Gender:"})," ",l.gender]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"font-medium",children:"Phone:"})," ",l.contact_number]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"font-medium",children:"Doctor:"})," ",l.doctor_name]}),(0,b.jsxs)("div",{className:"col-span-2",children:[(0,b.jsx)("span",{className:"font-medium",children:"Address:"})," ",l.address]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"font-medium",children:"Category:"})," ",l.category]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"font-medium",children:"Amount:"})," ₹",l.amount]})]})]}),l.scan_details&&l.scan_details.length>0&&(0,b.jsxs)("div",{className:"bg-gray-50 p-4 rounded-lg",children:[(0,b.jsx)("h4",{className:"font-medium text-gray-900 mb-2",children:"Scan Details"}),(0,b.jsxs)("div",{className:"space-y-2",children:[l.scan_details.map((a,c)=>(0,b.jsxs)("div",{className:"flex justify-between text-sm",children:[(0,b.jsx)("span",{children:a.name}),(0,b.jsxs)("span",{children:["₹",a.charges]})]},c)),(0,b.jsxs)("div",{className:"border-t pt-2 flex justify-between font-medium",children:[(0,b.jsx)("span",{children:"Total Amount:"}),(0,b.jsxs)("span",{children:["₹",l.total_amount]})]})]})]}),(0,b.jsxs)("div",{className:"flex justify-end space-x-4 pt-6 border-t border-gray-200",children:[(0,b.jsx)("button",{type:"button",onClick:()=>m(null),className:"px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors",children:"Cancel"}),(0,b.jsxs)("button",{type:"button",onClick:()=>{if(!l)return;let a=new Date().toLocaleDateString("en-GB"),b=l.scan_details?.map(a=>a.name).join(", ")||"CT Scan",c=`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Patient Receipt - ${l.cro}</title>
          <style>
            @media print {
              .no_print, .no_print * { display: none !important; }
              .admission_div_desc { border: 0px !important; }
              .page_break { page-break-after: always; }
            }
            .admission_form {
              text-align: center;
              color: #000000;
              font-size: 14px;
              width: 100%;
            }
            .admission_form table {
              width: 100%;
              font-size: 10px;
              margin: -5px 0px;
            }
            .admission_form .form_input_box {
              border-bottom: 0px dotted #000000;
              padding: 0px 0px 2px 0px;
              width: 100%;
              display: inline-block;
            }
            .admission_form .form_input {
              padding: 2px 1%;
              font-size: 16px;
              border: none;
              font-weight: bold;
              font-style: italic;
              width: 99%;
              border-bottom: 1px dotted #000000;
            }
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 10px;
              background: #FFFFFF;
            }
          </style>
        </head>
        <body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
          <div class="admission_form" align="center" style="border:solid thin; margin-top:20px;width:99.0%;margin-left:5px;margin-right:5px">
            <table align="center" style="margin-top:2px;">
              <tr><td align="center" colspan="6">Dr. S.N. MEDICL COLLEGE AND ATTACHED GROUP OF HOSPITAL, JODHPUR</td></tr>
              <tr><td align="center" colspan="6">Rajasthan Medical Relief Society, M.D.M. Hospital, Jodhpur</td></tr>
              <tr><td align="center" colspan="6">IMAGING CENTRE UNDER P.P.P.MODE : VARAHA SDC</td></tr>
              <tr><td align="center" colspan="6">256 SLICE DUAL ENERGY CT SCAN, M.D.M HOSPITAL Jodhpur(Raj.) - 342003</td></tr>
              <tr><td align="center" colspan="6">Tel. : +91-291-2621517, Fax : +91-291-2621317</td></tr>
              <tr><td align="center" colspan="6">Cash Receipt</td></tr>
            </table>
            
            <table>
              <tr>
                <td width="80"><label>Reg.No :</label></td>
                <td><span class="form_input_box"><input type="text" class="form_input" name="reg" value="${l.cro}"></span></td>
                <td width="30"><label>Date</label></td>
                <td><span class="form_input_box"><input type="text" class="form_input" name="date" value="${a}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="80"><label>Deptt. :</label></td>
                <td><span class="form_input_box"><input type="text" class="form_input" name="doctor" value="${l.doctor_name||""}"></span></td>
                <td width="220"><label>Date and Time of Appoinment :</label></td>
                <td><span class="form_input_box"><input type="text" class="form_input" name="date-time" value="${l.allot_date||l.date} ${l.time_slot||""}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="130"><label>Name Of Patient :</label></td>
                <td><span class="form_input_box"><input type="text" class="form_input" name="name" value="${l.patient_name}"></span></td>
                <td><label>Age :</label></td>
                <td><span class="form_input_box"><input type="text" class="form_input" name="age" value="${l.age}"></span></td>
                <td><label>Gender</label></td>
                <td><span class="form_input_box"><input type="text" class="form_input" name="gender" value="${l.gender}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="80"><label>Address</label></td>
                <td><span class="form_input_box"><input type="text" class="form_input" name="address" value="${l.address||""}"></span></td>
                <td width="60"><label>Phone:</label></td>
                <td><span class="form_input_box"><input type="text" class="form_input" name="phone" value="${l.contact_number||""}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="80"><label>Investiations:</label></td>
                <td><span class="form_input_box"><input type="text" class="form_input" name="investigations" value="${b}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="150"><label>For Sum Of Rupees:</label></td>
                <td><span class="form_input_box"><input type="text" class="form_input" name="sum" value="Rs. ${l.total_amount||l.amount}/-"></span></td>
                <td width="150"><input type="text" name="amunt" value="Rs. ${l.total_amount||l.amount}" style="border:2px solid;"></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td align="right" colspan="6"><label>For Varaha SDC, Jodhpur</label></td>
              </tr>
            </table>
            <br>
          </div>
          <hr>
          
          <!-- Duplicate Receipt -->
          <div class="admission_form" align="center" style="border:solid thin; margin-top:18px; width:99.0%;margin-left:5px;margin-right:5px">
            <table align="center" style="margin-top:2px;">
              <tr><td align="center" colspan="6">Dr. S.N. MEDICL COLLEGE AND ATTACHED GROUP OF HOSPITAL, JODHPUR</td></tr>
              <tr><td align="center" colspan="6">Rajasthan Medical Relief Society, M.D.M. Hospital, Jodhpur</td></tr>
              <tr><td align="center" colspan="6">IMAGING CENTRE UNDER P.P.P.MODE : VARAHA SDC</td></tr>
              <tr><td align="center" colspan="6">256 SLICE DUAL ENERGY CT SCAN, M.D.M HOSPITAL Jodhpur(Raj.) - 342003</td></tr>
              <tr><td align="center" colspan="6">Tel. : +91-291-2621517, Fax : +91-291-2621317</td></tr>
              <tr><td align="center" colspan="6">Cash Receipt</td></tr>
            </table>
            
            <table>
              <tr>
                <td width="80"><label>Reg.No :</label></td>
                <td><span class="form_input_box"><input type="text" class="form_input" name="reg" value="${l.cro}"></span></td>
                <td width="30"><label>Date</label></td>
                <td><span class="form_input_box"><input type="text" class="form_input" name="date" value="${a}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="80"><label>Deptt. :</label></td>
                <td><span class="form_input_box"><input type="text" class="form_input" name="doctor" value="${l.doctor_name||""}"></span></td>
                <td width="220"><label>Date and Time of Appoinment :</label></td>
                <td><span class="form_input_box"><input type="text" class="form_input" name="date-time" value="${l.allot_date||l.date} ${l.time_slot||""}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="130"><label>Name Of Patient :</label></td>
                <td><span class="form_input_box"><input type="text" class="form_input" name="name" value="${l.patient_name}"></span></td>
                <td><label>Age :</label></td>
                <td><span class="form_input_box"><input type="text" class="form_input" name="age" value="${l.age}"></span></td>
                <td><label>Gender</label></td>
                <td><span class="form_input_box"><input type="text" class="form_input" name="gender" value="${l.gender}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="80"><label>Address</label></td>
                <td><span class="form_input_box"><input type="text" class="form_input" name="address" value="${l.address||""}"></span></td>
                <td width="60"><label>Phone:</label></td>
                <td><span class="form_input_box"><input type="text" class="form_input" name="phone" value="${l.contact_number||""}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="80"><label>Investiations:</label></td>
                <td><span class="form_input_box"><input type="text" class="form_input" name="investigations" value="${b}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="150"><label>For Sum Of Rupees:</label></td>
                <td><span class="form_input_box"><input type="text" class="form_input" name="sum" value="Rs. ${l.total_amount||l.amount}/-"></span></td>
                <td width="150"><input type="text" name="amunt" value="Rs. ${l.total_amount||l.amount}" style="border:2px solid;"></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td align="right" colspan="6"><label>For Varaha SDC, Jodhpur</label></td>
              </tr>
            </table>
            <br>
          </div>
        </body>
      </html>
    `,d=window.open("","_blank","width=800,height=600");d&&(d.document.write(c),d.document.close(),setTimeout(()=>{d.focus();try{d.print()}catch(a){console.error("Print failed:",a),setTimeout(()=>{d.print()},500)}},100))},className:"px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center",children:[(0,b.jsx)(e.Printer,{className:"h-4 w-4 mr-2"}),"Print Receipt"]})]})]})]})]})})}}];

//# sourceMappingURL=src_app_admin_patient-reprint_page_tsx_ea46a7af._.js.map