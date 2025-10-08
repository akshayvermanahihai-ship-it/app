(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/LastEnrolledPatient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LastEnrolledPatient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function LastEnrolledPatient() {
    _s();
    const [lastPatient, setLastPatient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LastEnrolledPatient.useEffect": ()=>{
            fetchLastPatient();
        }
    }["LastEnrolledPatient.useEffect"], []);
    const fetchLastPatient = async ()=>{
        try {
            const response = await fetch('https://varahasdc.co.in/api/reception/patients/last-enrolled');
            if (response.ok) {
                const data = await response.json();
                setLastPatient(data.data);
            }
        } catch (error) {
            console.error('Error fetching last patient:', error);
        }
    };
    if (!lastPatient) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-blue-600 bg-opacity-20 rounded-lg p-4 border border-blue-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-2 text-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/LastEnrolledPatient.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-medium text-white",
                    children: "Last Enrolled Patient"
                }, void 0, false, {
                    fileName: "[project]/src/components/LastEnrolledPatient.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                    className: "h-3 w-3 text-white"
                }, void 0, false, {
                    fileName: "[project]/src/components/LastEnrolledPatient.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-bold text-white",
                    children: lastPatient.cro
                }, void 0, false, {
                    fileName: "[project]/src/components/LastEnrolledPatient.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                    className: "h-3 w-3 text-white"
                }, void 0, false, {
                    fileName: "[project]/src/components/LastEnrolledPatient.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-medium text-white",
                    children: lastPatient.patient_name
                }, void 0, false, {
                    fileName: "[project]/src/components/LastEnrolledPatient.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LastEnrolledPatient.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/LastEnrolledPatient.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(LastEnrolledPatient, "qp9Kgtu+oixzuIDA25hhnJlKsK8=");
_c = LastEnrolledPatient;
var _c;
__turbopack_context__.k.register(_c, "LastEnrolledPatient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/reception/patient-reprint-old/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PatientReprintOld
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ToastContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LastEnrolledPatient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LastEnrolledPatient.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function PatientReprintOld() {
    _s();
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToastContext"])();
    const [patients, setPatients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [itemsPerPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    const [printing, setPrinting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const searchPatients = async ()=>{
        if (!searchTerm.trim()) return;
        setLoading(true);
        try {
            const response = await fetch("/api/patients/search?q=".concat(encodeURIComponent(searchTerm)));
            if (response.ok) {
                const data = await response.json();
                console.log('Search API response:', data); // Debug log
                if (data.success && data.patient) {
                    setPatients([
                        data.patient
                    ]); // Wrap single patient in array
                } else {
                    setPatients([]);
                }
            }
        } catch (error) {
            console.error('Error searching patients:', error);
        } finally{
            setLoading(false);
        }
    };
    const numberToWords = (num)=>{
        const ones = [
            '',
            'one',
            'two',
            'three',
            'four',
            'five',
            'six',
            'seven',
            'eight',
            'nine'
        ];
        const teens = [
            'ten',
            'eleven',
            'twelve',
            'thirteen',
            'fourteen',
            'fifteen',
            'sixteen',
            'seventeen',
            'eighteen',
            'nineteen'
        ];
        const tens = [
            '',
            '',
            'twenty',
            'thirty',
            'forty',
            'fifty',
            'sixty',
            'seventy',
            'eighty',
            'ninety'
        ];
        if (num === 0) return 'zero';
        if (num < 10) return ones[num];
        if (num < 20) return teens[num - 10];
        if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 ? ' ' + ones[num % 10] : '');
        if (num < 1000) return ones[Math.floor(num / 100)] + ' hundred' + (num % 100 ? ' ' + numberToWords(num % 100) : '');
        if (num < 100000) return numberToWords(Math.floor(num / 1000)) + ' thousand' + (num % 1000 ? ' ' + numberToWords(num % 1000) : '');
        return num.toString();
    };
    const handleReprint = async (patient)=>{
        setPrinting(patient.patient_id);
        try {
            console.log('Patient data:', patient); // Debug log
            // Use patient data directly from search result
            const receiptData = {
                cro: patient.cro,
                patient_id: patient.patient_id,
                patient_name: "".concat(patient.pre, " ").concat(patient.patient_name),
                age: patient.age,
                gender: patient.gender,
                address: patient.address || '',
                contact_number: patient.contact_number || '',
                category: patient.category || '',
                doctor_name: patient.doctor_name || patient.dname,
                date: patient.date,
                allot_date: patient.allot_date,
                time_slot: patient.time_slot || '',
                scan_names: patient.scan_names || '',
                amount: patient.amount || 0,
                amount_reci: patient.amount_reci || 0,
                total_scan_amount: patient.total_scan_amount || 0
            };
            // Generate receipt HTML using PHP format
            const receiptHTML = "\n        <!DOCTYPE html>\n        <html>\n        <head>\n          <title>Receipt - ".concat(receiptData.cro, '</title>\n          <style>\n            .admission_form { text-align: center; color: #000000; font-size: 10px; width: 100%; }\n            .admission_form table { width: 98%; font-size: 10px; margin: -5px 8px; }\n            .admission_form .form_input { padding: 2px 1%; font-size: 10px; border: none; font-weight: bold; font-style: italic; width: 99%; border-bottom: 1px dotted #000000; }\n            .admission_form .form_input_box { border-bottom: 0px dotted #000000; padding: 0px 0px 2px 0px; width: 100%; display: inline-block; }\n            @media print { .no_print, .no_print * { display: none !important; } .admission_div_desc { border: 0px !important; } .page_break { page-break-after: always; } }\n          </style>\n        </head>\n        <body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" onload="window.print(); setTimeout(() => window.close(), 1000);">\n          <div class="admission_form" align="center" style="border:solid thin; margin-top:18px;width:93.0%;margin-left:30px;">\n            <table align="center" style="margin-top:2px;">\n              <tr><td colspan="6"><b>Dr. S.N. MEDICAL COLLEGE AND ATTACHED GROUP OF HOSPITAL, JODHPUR</b></td></tr>\n              <tr><td colspan="6"><b>Rajasthan Medical Relief Society, M.D.M. Hospital, Jodhpur</b></td></tr>\n              <tr><td colspan="6"><b>IMAGING CENTRE UNDER P.P.P.MODE : VARAHA SDC</b></td></tr>\n              <tr><td colspan="6"><b>256 SLICE DUAL ENERGY CT SCAN, M.D.M HOSPITAL Jodhpur(Raj.) - 342003</b></td></tr>\n              <tr><td colspan="6"><b>Tel. : +91-291-2648120 , 0291-2648121 , 0291-2648122</b></td></tr>\n            </table>\n            \n            <table>\n              <tr>\n                <td width="55">Reg.No :</td>\n                <td width="200"><span class="form_input_box"><input type="text" class="form_input" value="').concat(receiptData.cro, "(").concat(receiptData.patient_id, ')"></span></td>\n                <td colspan="6"><span style="margin-left:30%; border: 1px solid #02C; border-radius: 11px;padding: 3px 15px;">Cash Receipt</span></td>\n                <td width="36">Date</td>\n                <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="').concat(receiptData.date, '"></span></td>\n              </tr>\n            </table>\n            \n            <table>\n              <tr>\n                <td width="56">Ref. By :</td>\n                <td width="482"><span class="form_input_box"><input type="text" class="form_input" value="').concat(receiptData.doctor_name, '"></span></td>\n                <td width="174">Date and Time of Appointment :</td>\n                <td width="316"><span class="form_input_box"><input type="text" class="form_input" value="').concat(receiptData.allot_date, '"></span></td>\n              </tr>\n            </table>\n            \n            <table>\n              <tr>\n                <td width="78">Patient Name:</td>\n                <td width="650"><span class="form_input_box"><input type="text" class="form_input" value="').concat(receiptData.patient_name, '"></span></td>\n                <td width="33">Age :</td>\n                <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="').concat(receiptData.age, '"></span></td>\n                <td width="36">Gender</td>\n                <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="').concat(receiptData.gender, '"></span></td>\n              </tr>\n            </table>\n            \n            <table>\n              <tr>\n                <td width="40">Address</td>\n                <td width="687"><span class="form_input_box"><input type="text" class="form_input" value="').concat(receiptData.address, '"></span></td>\n                <td width="120"><span class="form_input_box"><label>Category</label><input type="text" class="form_input" value="').concat(receiptData.category, '"></span></td>\n                <td width="33">Phone:</td>\n                <td width="333"><span class="form_input_box"><input type="text" class="form_input" value="').concat(receiptData.contact_number, '"></span></td>\n              </tr>\n            </table>\n            \n            <table>\n              <tr>\n                <td width="59">Investigations:</td>\n                <td width="1042"><span class="form_input_box"><input type="text" class="form_input" value="').concat(receiptData.scan_names, '"></span></td>\n              </tr>\n            </table>\n            \n            <table>\n              <tr>\n                <td width="100">For Sum Of Rupees:</td>\n                <td width="733"><span class="form_input_box"><input type="text" class="form_input" value="').concat(numberToWords(receiptData.amount_reci).toUpperCase(), ' RUPEES ONLY"></span></td>\n                <td width="30"><label>Scan Amount</label><input type="text" value="₹ ').concat(receiptData.total_scan_amount, '" style="border:1px solid #5E60AE;"></td>\n                <td width="30"><label>Received Amount</label><input type="text" value="₹ ').concat(receiptData.amount_reci, '" style="border:1px solid #5E60AE;"></td>\n              </tr>\n            </table>\n            \n            <table>\n              <tr>\n                <td colspan="6" align="right">For Varaha SDC, Jodhpur</span></td>\n              </tr>\n                      <tr>\n                <td></td>\n              </tr>\n            </table>\n          </div>\n          \n          <hr>\n          \n          <div div class="admission_form" align="center" style="border:solid thin; margin-top:18px;width:93.0%;margin-left:30px;">\n            <table align="center" style="margin-top:2px;">\n              <tr><td colspan="6"><b>Dr. S.N. MEDICAL COLLEGE AND ATTACHED GROUP OF HOSPITAL, JODHPUR</b></td></tr>\n              <tr><td colspan="6"><b>Rajasthan Medical Relief Society, M.D.M. Hospital, Jodhpur</b></td></tr>\n              <tr><td colspan="6"><b>IMAGING CENTRE UNDER P.P.P.MODE : VARAHA SDC</b></td></tr>\n              <tr><td colspan="6"><b>256 SLICE DUAL ENERGY CT SCAN, M.D.M HOSPITAL Jodhpur(Raj.) - 342003</b></td></tr>\n              <tr><td colspan="6"><b>Tel. : +91-291-2648120 , 0291-2648121 , 0291-2648122</b></td></tr>\n            </table>\n            \n            <table>\n              <tr>\n                <td width="55">Reg.No :</td>\n                <td width="200"><span class="form_input_box"><input type="text" class="form_input" value="').concat(receiptData.cro, "(").concat(receiptData.patient_id, ')"></span></td>\n                <td colspan="6"><span style="margin-left:30%; border: 1px solid #02C; border-radius: 11px;padding: 3px 15px;">Cash Receipt</span></td>\n                <td width="36">Date</td>\n                <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="').concat(receiptData.date, '"></span></td>\n              </tr>\n            </table>\n            \n            <table>\n              <tr>\n                <td width="56">Ref. By :</td>\n                <td width="482"><span class="form_input_box"><input type="text" class="form_input" value="').concat(receiptData.doctor_name, '"></span></td>\n                <td width="174">Date and Time of Appointment :</td>\n                <td width="316"><span class="form_input_box"><input type="text" class="form_input" value="').concat(receiptData.allot_date, '"></span></td>\n              </tr>\n            </table>\n            \n            <table>\n              <tr>\n                <td width="78">Patient Name:</td>\n                <td width="650"><span class="form_input_box"><input type="text" class="form_input" value="').concat(receiptData.patient_name, '"></span></td>\n                <td width="33">Age :</td>\n                <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="').concat(receiptData.age, '"></span></td>\n                <td width="36">Gender</td>\n                <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="').concat(receiptData.gender, '"></span></td>\n              </tr>\n            </table>\n            \n            <table>\n              <tr>\n                <td width="40">Address</td>\n                <td width="687"><span class="form_input_box"><input type="text" class="form_input" value="').concat(receiptData.address, '"></span></td>\n                <td width="120"><span class="form_input_box"><label>Category</label><input type="text" class="form_input" value="').concat(receiptData.category, '"></span></td>\n                <td width="33">Phone:</td>\n                <td width="333"><span class="form_input_box"><input type="text" class="form_input" value="').concat(receiptData.contact_number, '"></span></td>\n              </tr>\n            </table>\n            \n            <table>\n              <tr>\n                <td width="59">Investigations:</td>\n                <td width="1042"><span class="form_input_box"><input type="text" class="form_input" value="').concat(receiptData.scan_names, '"></span></td>\n              </tr>\n            </table>\n            \n            <table>\n              <tr>\n                <td width="20">For Sum Of Rupees:</td>\n                <td width="550"><span class="form_input_box"><input type="text" class="form_input" value="').concat(numberToWords(receiptData.amount_reci).toUpperCase(), ' RUPEES ONLY"></span></td>\n                <td width="30"><label>Scan Amount</label><input type="text" value="₹ ').concat(receiptData.total_scan_amount, '" style="border:1px solid #5E60AE;"></td>\n                <td width="30"><label>Received Amount</label><input type="text" value="₹ ').concat(receiptData.amount_reci, '" style="border:1px solid #5E60AE;"></td>\n              </tr>\n            </table>\n            \n            <table>\n              <tr>\n                <td colspan="6" align="right">For Varaha SDC, Jodhpur</span></td>\n              </tr>\n                 <tr>\n                <td></td>\n              </tr>\n            </table>\n          </div>\n        </body>\n        </html>\n      ');
            // Open receipt in new window and print
            const printWindow = window.open('', '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
            if (printWindow) {
                printWindow.document.write(receiptHTML);
                printWindow.document.close();
            }
            const patientName = patient.patient_name || patient.firstname || 'Unknown Patient';
            toast.success("Receipt generated for ".concat(patientName, " (").concat(receiptData.cro, ")"));
        } catch (error) {
            console.error('Error generating receipt:', error);
            toast.error('Error generating receipt');
        } finally{
            setPrinting(null);
        }
    };
    const handleKeyPress = (e)=>{
        if (e.key === 'Enter') {
            searchPatients();
        }
    };
    const totalPages = Math.ceil(patients.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedPatients = patients.slice(startIndex, startIndex + itemsPerPage);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-xl shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-bold mb-2",
                                    children: "Patient Reprint (Old Records)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                    lineNumber: 307,
                                    columnNumber: 64
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-blue-100 text-lg",
                                    children: "Search and reprint receipts for old patient records"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                    lineNumber: 308,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                            lineNumber: 307,
                            columnNumber: 59
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LastEnrolledPatient$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                lineNumber: 308,
                                columnNumber: 129
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                            lineNumber: 308,
                            columnNumber: 107
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                    lineNumber: 307,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                lineNumber: 306,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white p-6 rounded-xl shadow-lg border border-gray-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-4 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search by CRO, patient name, or mobile...",
                                        value: searchTerm,
                                        onChange: (e)=>setSearchTerm(e.target.value),
                                        onKeyPress: handleKeyPress,
                                        className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                        lineNumber: 315,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: searchPatients,
                                disabled: loading || !searchTerm.trim(),
                                className: "flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 disabled:opacity-50 shadow-md font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                        lineNumber: 329,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: loading ? 'Searching...' : 'Search'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                        lineNumber: 330,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                lineNumber: 324,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                        lineNumber: 312,
                        columnNumber: 9
                    }, this),
                    patients.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-gray-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "S.No"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                    lineNumber: 339,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "CRO"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Patient Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Age/Gender"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Mobile"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Hospital"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Doctor"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                    lineNumber: 345,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Amount"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Date"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Actions"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                            lineNumber: 338,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                        lineNumber: 337,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "bg-white divide-y divide-gray-200",
                                        children: paginatedPatients.map((patient, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "hover:bg-gray-50 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-black font-medium",
                                                        children: startIndex + index + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-medium text-blue-600",
                                                            children: patient.cro_number || patient.cro || patient.patient_id || '-'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                            lineNumber: 356,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-medium text-black",
                                                            children: patient.patient_name || patient.firstname || '-'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                            lineNumber: 359,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-black",
                                                        children: [
                                                            patient.age || '-',
                                                            "y, ",
                                                            patient.gender || '-'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-black",
                                                        children: patient.mobile || patient.contact_number || '-'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                        lineNumber: 362,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-black",
                                                        children: patient.hospital_name || patient.h_name || '-'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-black",
                                                        children: patient.doctor_name || patient.dname || '-'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                        lineNumber: 364,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-black",
                                                        children: [
                                                            "₹",
                                                            patient.amount || 0
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-black",
                                                        children: patient.date || '-'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleReprint(patient),
                                                            disabled: printing === patient.patient_id,
                                                            className: "inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 text-xs font-medium disabled:opacity-50 shadow-md",
                                                            children: [
                                                                printing === patient.patient_id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                                    lineNumber: 374,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                                    className: "h-3 w-3 mr-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                                    lineNumber: 376,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Reprint"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                                    lineNumber: 378,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                            lineNumber: 368,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, patient.patient_id, true, {
                                                fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                lineNumber: 353,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                        lineNumber: 351,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                lineNumber: 336,
                                columnNumber: 13
                            }, this),
                            totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 py-4 border-t border-gray-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-700",
                                            children: [
                                                "Page ",
                                                currentPage,
                                                " of ",
                                                totalPages,
                                                " | Total: ",
                                                patients.length,
                                                " records"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                            lineNumber: 390,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-2",
                                            children: [
                                                currentPage > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setCurrentPage(1),
                                                            className: "px-3 py-2 text-sm font-medium bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-200 shadow-md",
                                                            children: "First"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                            lineNumber: 396,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setCurrentPage(currentPage - 1),
                                                            className: "px-3 py-2 text-sm font-medium bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-200 shadow-md",
                                                            children: "Previous"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                            lineNumber: 402,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-1",
                                                    children: Array.from({
                                                        length: Math.min(5, totalPages)
                                                    }, (_, i)=>{
                                                        const startPage = Math.max(1, currentPage - 2);
                                                        const page = startPage + i;
                                                        if (page > totalPages) return null;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setCurrentPage(page),
                                                            className: "px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 shadow-md ".concat(currentPage === page ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white' : 'bg-gradient-to-r from-gray-400 to-gray-500 text-white hover:from-gray-500 hover:to-gray-600'),
                                                            children: page
                                                        }, page, false, {
                                                            fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                            lineNumber: 418,
                                                            columnNumber: 27
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 21
                                                }, this),
                                                currentPage < totalPages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setCurrentPage(currentPage + 1),
                                                            className: "px-3 py-2 text-sm font-medium bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-200 shadow-md",
                                                            children: "Next"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                            lineNumber: 435,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setCurrentPage(totalPages),
                                                            className: "px-3 py-2 text-sm font-medium bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-200 shadow-md",
                                                            children: "Last"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                                            lineNumber: 441,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                            lineNumber: 393,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                    lineNumber: 389,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                lineNumber: 388,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                        lineNumber: 335,
                        columnNumber: 11
                    }, this),
                    patients.length === 0 && searchTerm && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                className: "h-16 w-16 text-gray-300 mx-auto mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                lineNumber: 458,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-medium text-gray-900 mb-2",
                                children: "No Records Found"
                            }, void 0, false, {
                                fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                lineNumber: 459,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500",
                                children: "No patient records found matching your search criteria."
                            }, void 0, false, {
                                fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                lineNumber: 460,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                        lineNumber: 457,
                        columnNumber: 11
                    }, this),
                    !searchTerm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "h-16 w-16 text-gray-300 mx-auto mb-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                lineNumber: 466,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-medium text-gray-900 mb-2",
                                children: "Search Patient Records"
                            }, void 0, false, {
                                fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                lineNumber: 467,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500",
                                children: "Enter CRO number, patient name, or mobile number to search for old records."
                            }, void 0, false, {
                                fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                                lineNumber: 468,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                        lineNumber: 465,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
                lineNumber: 311,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/reception/patient-reprint-old/page.tsx",
        lineNumber: 305,
        columnNumber: 5
    }, this);
}
_s(PatientReprintOld, "qcQI3GfVhG2sCBa4ph6lpsXwg4M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToastContext"]
    ];
});
_c = PatientReprintOld;
var _c;
__turbopack_context__.k.register(_c, "PatientReprintOld");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Printer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Printer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Printer", [
    [
        "path",
        {
            d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
            key: "143wyd"
        }
    ],
    [
        "path",
        {
            d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",
            key: "1itne7"
        }
    ],
    [
        "rect",
        {
            x: "6",
            y: "14",
            width: "12",
            height: "8",
            rx: "1",
            key: "1ue0tg"
        }
    ]
]);
;
 //# sourceMappingURL=printer.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Printer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_ea01a9be._.js.map