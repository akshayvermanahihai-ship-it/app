module.exports=[27774,a=>{"use strict";a.s(["default",()=>i]);var b=a.i(87924),c=a.i(72131),d=a.i(87532),e=a.i(71931),f=a.i(4720),g=a.i(66632),h=a.i(27747);function i(){let a=(0,g.useToastContext)(),[i,j]=(0,c.useState)([]),[k,l]=(0,c.useState)(!1),[m,n]=(0,c.useState)(""),[o,p]=(0,c.useState)(1),[q]=(0,c.useState)(10),[r,s]=(0,c.useState)(null),t=async()=>{if(!m.trim())return void a.error("Please enter search term");l(!0);try{let b=await fetch(`/api/patients/search?q=${encodeURIComponent(m)}`);if(b.ok){let c=await b.json();console.log("Search API response:",c),c.success&&c.patient?(console.log("Patient data:",c.patient),j([c.patient]),a.success("Patient found successfully!")):(j([]),a.error("No patient found with this search term"))}else console.error("API response not ok:",b.status),j([]),a.error("Error searching patient")}catch(b){console.error("Error searching patients:",b),j([]),a.error("Error searching patient")}finally{l(!1)}},u=a=>{let b=["","one","two","three","four","five","six","seven","eight","nine"];return 0===a?"zero":a<10?b[a]:a<20?["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"][a-10]:a<100?["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"][Math.floor(a/10)]+(a%10?" "+b[a%10]:""):a<1e3?b[Math.floor(a/100)]+" hundred"+(a%100?" "+u(a%100):""):a<1e5?u(Math.floor(a/1e3))+" thousand"+(a%1e3?" "+u(a%1e3):""):a.toString()},v=async b=>{s(b.patient_id);try{console.log("Patient data:",b);let c={cro:b.cro,patient_id:b.patient_id,patient_name:`${b.pre} ${b.patient_name}`,age:b.age,gender:b.gender,address:b.address||"",contact_number:b.contact_number||"",category:b.category||"",doctor_name:b.doctor_name||b.dname,date:b.date,allot_date:b.allot_date,time_slot:b.time_slot||"",scan_names:b.scan_names||"",amount:b.amount||0,amount_reci:b.amount_reci||0,total_scan_amount:b.total_scan_amount||0},d=`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Receipt - ${c.cro}</title>
          <style>
            .admission_form { text-align: center; color: #000000; font-size: 10px; width: 100%; }
            .admission_form table { width: 98%; font-size: 10px; margin: -5px 8px; }
            .admission_form .form_input { padding: 2px 1%; font-size: 10px; border: none; font-weight: bold; font-style: italic; width: 99%; border-bottom: 1px dotted #000000; }
            .admission_form .form_input_box { border-bottom: 0px dotted #000000; padding: 0px 0px 2px 0px; width: 100%; display: inline-block; }
            @media print { .no_print, .no_print * { display: none !important; } .admission_div_desc { border: 0px !important; } .page_break { page-break-after: always; } }
          </style>
        </head>
        <body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" onload="window.print(); setTimeout(() => window.close(), 1000);">
          <div class="admission_form" align="center" style="border:solid thin; margin-top:18px;width:93.0%;margin-left:30px;">
            <table align="center" style="margin-top:2px;">
              <tr><td colspan="6"><b>Dr. S.N. MEDICAL COLLEGE AND ATTACHED GROUP OF HOSPITAL, JODHPUR</b></td></tr>
              <tr><td colspan="6"><b>Rajasthan Medical Relief Society, M.D.M. Hospital, Jodhpur</b></td></tr>
              <tr><td colspan="6"><b>IMAGING CENTRE UNDER P.P.P.MODE : VARAHA SDC</b></td></tr>
              <tr><td colspan="6"><b>256 SLICE DUAL ENERGY CT SCAN, M.D.M HOSPITAL Jodhpur(Raj.) - 342003</b></td></tr>
              <tr><td colspan="6"><b>Tel. : +91-291-2648120 , 0291-2648121 , 0291-2648122</b></td></tr>
            </table>
            
            <table>
              <tr>
                <td width="55">Reg.No :</td>
                <td width="200"><span class="form_input_box"><input type="text" class="form_input" value="${c.cro}(${c.patient_id})"></span></td>
                <td colspan="6"><span style="margin-left:30%; border: 1px solid #02C; border-radius: 11px;padding: 3px 15px;">Cash Receipt</span></td>
                <td width="36">Date</td>
                <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="${c.date}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="56">Ref. By :</td>
                <td width="482"><span class="form_input_box"><input type="text" class="form_input" value="${c.doctor_name}"></span></td>
                <td width="174">Date and Time of Appointment :</td>
                <td width="316"><span class="form_input_box"><input type="text" class="form_input" value="${c.allot_date}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="78">Patient Name:</td>
                <td width="650"><span class="form_input_box"><input type="text" class="form_input" value="${c.patient_name}"></span></td>
                <td width="33">Age :</td>
                <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="${c.age}"></span></td>
                <td width="36">Gender</td>
                <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="${c.gender}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="40">Address</td>
                <td width="687"><span class="form_input_box"><input type="text" class="form_input" value="${c.address}"></span></td>
                <td width="120"><span class="form_input_box"><label>Category</label><input type="text" class="form_input" value="${c.category}"></span></td>
                <td width="33">Phone:</td>
                <td width="333"><span class="form_input_box"><input type="text" class="form_input" value="${c.contact_number}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="59">Investigations:</td>
                <td width="1042"><span class="form_input_box"><input type="text" class="form_input" value="${c.scan_names}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="100">For Sum Of Rupees:</td>
                <td width="733"><span class="form_input_box"><input type="text" class="form_input" value="${u(c.amount_reci).toUpperCase()} RUPEES ONLY"></span></td>
                <td width="30"><label>Scan Amount</label><input type="text" value="₹ ${c.total_scan_amount}" style="border:1px solid #5E60AE;"></td>
                <td width="30"><label>Received Amount</label><input type="text" value="₹ ${c.amount_reci}" style="border:1px solid #5E60AE;"></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td colspan="6" align="right">For Varaha SDC, Jodhpur</span></td>
              </tr>
                      <tr>
                <td></td>
              </tr>
            </table>
          </div>
          
          <hr>
          
          <div div class="admission_form" align="center" style="border:solid thin; margin-top:18px;width:93.0%;margin-left:30px;">
            <table align="center" style="margin-top:2px;">
              <tr><td colspan="6"><b>Dr. S.N. MEDICAL COLLEGE AND ATTACHED GROUP OF HOSPITAL, JODHPUR</b></td></tr>
              <tr><td colspan="6"><b>Rajasthan Medical Relief Society, M.D.M. Hospital, Jodhpur</b></td></tr>
              <tr><td colspan="6"><b>IMAGING CENTRE UNDER P.P.P.MODE : VARAHA SDC</b></td></tr>
              <tr><td colspan="6"><b>256 SLICE DUAL ENERGY CT SCAN, M.D.M HOSPITAL Jodhpur(Raj.) - 342003</b></td></tr>
              <tr><td colspan="6"><b>Tel. : +91-291-2648120 , 0291-2648121 , 0291-2648122</b></td></tr>
            </table>
            
            <table>
              <tr>
                <td width="55">Reg.No :</td>
                <td width="200"><span class="form_input_box"><input type="text" class="form_input" value="${c.cro}(${c.patient_id})"></span></td>
                <td colspan="6"><span style="margin-left:30%; border: 1px solid #02C; border-radius: 11px;padding: 3px 15px;">Cash Receipt</span></td>
                <td width="36">Date</td>
                <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="${c.date}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="56">Ref. By :</td>
                <td width="482"><span class="form_input_box"><input type="text" class="form_input" value="${c.doctor_name}"></span></td>
                <td width="174">Date and Time of Appointment :</td>
                <td width="316"><span class="form_input_box"><input type="text" class="form_input" value="${c.allot_date}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="78">Patient Name:</td>
                <td width="650"><span class="form_input_box"><input type="text" class="form_input" value="${c.patient_name}"></span></td>
                <td width="33">Age :</td>
                <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="${c.age}"></span></td>
                <td width="36">Gender</td>
                <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="${c.gender}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="40">Address</td>
                <td width="687"><span class="form_input_box"><input type="text" class="form_input" value="${c.address}"></span></td>
                <td width="120"><span class="form_input_box"><label>Category</label><input type="text" class="form_input" value="${c.category}"></span></td>
                <td width="33">Phone:</td>
                <td width="333"><span class="form_input_box"><input type="text" class="form_input" value="${c.contact_number}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="59">Investigations:</td>
                <td width="1042"><span class="form_input_box"><input type="text" class="form_input" value="${c.scan_names}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="20">For Sum Of Rupees:</td>
                <td width="550"><span class="form_input_box"><input type="text" class="form_input" value="${u(c.amount_reci).toUpperCase()} RUPEES ONLY"></span></td>
                <td width="30"><label>Scan Amount</label><input type="text" value="₹ ${c.total_scan_amount}" style="border:1px solid #5E60AE;"></td>
                <td width="30"><label>Received Amount</label><input type="text" value="₹ ${c.amount_reci}" style="border:1px solid #5E60AE;"></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td colspan="6" align="right">For Varaha SDC, Jodhpur</span></td>
              </tr>
                 <tr>
                <td></td>
              </tr>
            </table>
          </div>
        </body>
        </html>
      `,e=window.open("","_blank","width=800,height=600,scrollbars=yes,resizable=yes");e&&(e.document.write(d),e.document.close());let f=b.patient_name||b.firstname||"Unknown Patient";a.success(`Receipt generated for ${f} (${c.cro})`)}catch(b){console.error("Error generating receipt:",b),a.error("Error generating receipt")}finally{s(null)}},w=Math.ceil(i.length/q),x=(o-1)*q,y=i.slice(x,x+q);return(0,b.jsxs)("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 space-y-6",children:[(0,b.jsx)("div",{className:"bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-xl shadow-lg",children:(0,b.jsxs)("div",{className:"flex justify-between items-start",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h1",{className:"text-3xl font-bold mb-2",children:"Patient Reprint (Old Records)"}),(0,b.jsx)("p",{className:"text-blue-100 text-lg",children:"Search and reprint receipts for old patient records"})]}),(0,b.jsx)("div",{className:"ml-6",children:(0,b.jsx)(h.default,{})})]})}),(0,b.jsxs)("div",{className:"bg-white p-6 rounded-xl shadow-lg border border-gray-100",children:[(0,b.jsxs)("div",{className:"flex items-center space-x-4 mb-6",children:[(0,b.jsxs)("div",{className:"flex-1 relative",children:[(0,b.jsx)(d.Search,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"}),(0,b.jsx)("input",{type:"text",placeholder:"Search by CRO, patient name, or mobile...",value:m,onChange:a=>n(a.target.value),onKeyPress:a=>{"Enter"===a.key&&t()},className:"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"})]}),(0,b.jsxs)("button",{onClick:t,disabled:k||!m.trim(),className:"flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 disabled:opacity-50 shadow-md font-medium",children:[(0,b.jsx)(d.Search,{className:"h-5 w-5"}),(0,b.jsx)("span",{children:k?"Searching...":"Search"})]})]}),i.length>0?(0,b.jsxs)("div",{className:"overflow-x-auto",children:[(0,b.jsxs)("div",{className:"mb-4 text-sm text-gray-600",children:["Found ",i.length," patient(s)"]}),(0,b.jsxs)("table",{className:"w-full",children:[(0,b.jsx)("thead",{className:"bg-gray-50",children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"S.No"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"CRO"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Patient Name"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Age/Gender"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Mobile"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Hospital"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Doctor"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Amount"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Date"}),(0,b.jsx)("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),(0,b.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:y.map((a,c)=>(console.log("Rendering patient:",a),(0,b.jsxs)("tr",{className:"hover:bg-gray-50 transition-colors",children:[(0,b.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-black font-medium",children:x+c+1}),(0,b.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,b.jsx)("div",{className:"text-sm font-medium text-blue-600",children:a.cro||a.cro_number||a.patient_id||"-"})}),(0,b.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,b.jsx)("div",{className:"text-sm font-medium text-black",children:a.patient_name||a.firstname||"-"})}),(0,b.jsxs)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-black",children:[a.age||"-","y, ",a.gender||"-"]}),(0,b.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-black",children:a.contact_number||a.mobile||"-"}),(0,b.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-black",children:a.h_name||a.hospital_name||"-"}),(0,b.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-black",children:a.doctor_name||a.dname||"-"}),(0,b.jsxs)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-black",children:["₹",a.amount||0]}),(0,b.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-black",children:a.date||"-"}),(0,b.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,b.jsxs)("button",{onClick:()=>v(a),disabled:r===a.patient_id,className:"inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 text-xs font-medium disabled:opacity-50 shadow-md",children:[r===a.patient_id?(0,b.jsx)("div",{className:"animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-1"}):(0,b.jsx)(e.Printer,{className:"h-3 w-3 mr-1"}),(0,b.jsx)("span",{children:"Reprint"})]})})]},`${a.patient_id}-${c}`)))})]}),(0,b.jsxs)("div",{className:"mt-2 text-xs text-gray-500",children:["Debug: ",i.length," patients found, showing ",y.length]}),w>1&&(0,b.jsx)("div",{className:"px-6 py-4 border-t border-gray-200",children:(0,b.jsxs)("div",{className:"flex items-center justify-between",children:[(0,b.jsxs)("div",{className:"text-sm text-gray-700",children:["Page ",o," of ",w," | Total: ",i.length," records"]}),(0,b.jsxs)("div",{className:"flex items-center space-x-2",children:[o>1&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("button",{onClick:()=>p(1),className:"px-3 py-2 text-sm font-medium bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-200 shadow-md",children:"First"}),(0,b.jsx)("button",{onClick:()=>p(o-1),className:"px-3 py-2 text-sm font-medium bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-200 shadow-md",children:"Previous"})]}),(0,b.jsx)("div",{className:"flex items-center space-x-1",children:Array.from({length:Math.min(5,w)},(a,c)=>{let d=Math.max(1,o-2)+c;return d>w?null:(0,b.jsx)("button",{onClick:()=>p(d),className:`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 shadow-md ${o===d?"bg-gradient-to-r from-blue-500 to-indigo-600 text-white":"bg-gradient-to-r from-gray-400 to-gray-500 text-white hover:from-gray-500 hover:to-gray-600"}`,children:d},d)})}),o<w&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("button",{onClick:()=>p(o+1),className:"px-3 py-2 text-sm font-medium bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-200 shadow-md",children:"Next"}),(0,b.jsx)("button",{onClick:()=>p(w),className:"px-3 py-2 text-sm font-medium bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-200 shadow-md",children:"Last"})]})]})]})})]}):null,0===i.length&&m&&!k&&(0,b.jsxs)("div",{className:"text-center py-12",children:[(0,b.jsx)(f.FileText,{className:"h-16 w-16 text-gray-300 mx-auto mb-4"}),(0,b.jsx)("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"No Records Found"}),(0,b.jsx)("p",{className:"text-gray-500",children:"No patient records found matching your search criteria."})]}),!m&&(0,b.jsxs)("div",{className:"text-center py-12",children:[(0,b.jsx)(d.Search,{className:"h-16 w-16 text-gray-300 mx-auto mb-4"}),(0,b.jsx)("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Search Patient Records"}),(0,b.jsx)("p",{className:"text-gray-500",children:"Enter CRO number, patient name, or mobile number to search for old records."})]})]})]})}}];

//# sourceMappingURL=src_app_reception_patient-reprint-old_page_tsx_24167af5._.js.map