(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/reception/patient-registration/new/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewPatientRegistration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ToastContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function NewPatientRegistration() {
    _s();
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToastContext"])();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isEditMode, setIsEditMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editPatientId, setEditPatientId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hospitals, setHospitals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [doctors, setDoctors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [scans, setScans] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedScans, setSelectedScans] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showUniId, setShowUniId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scanSearchTerm, setScanSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [hospitalSearchTerm, setHospitalSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [doctorSearchTerm, setDoctorSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showHospitalDropdown, setShowHospitalDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDoctorDropdown, setShowDoctorDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showTimeInDropdown, setShowTimeInDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showTimeOutDropdown, setShowTimeOutDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [timeInSearchTerm, setTimeInSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [timeOutSearchTerm, setTimeOutSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [lastPatient, setLastPatient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [timeSlots, setTimeSlots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSaved, setIsSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [savedPatientData, setSavedPatientData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        date: new Date().toLocaleDateString('en-GB').split('/').reverse().join('-'),
        hospital_name: '',
        doctor_name: '',
        pre: 'Mr.',
        firstname: '',
        age: '',
        age_type: 'Year',
        gender: 'Male',
        petient_type: 'GEN / Paid',
        p_uni_submit: 'N',
        p_uni_id_name: '',
        address: '',
        city: '',
        contact_number: '',
        type_of_scan: [],
        appoint_date: new Date().toLocaleDateString('en-GB').split('/').reverse().join('-'),
        time: '',
        time_in: '',
        amount: '0',
        est_time: '0',
        total_amount: '0',
        rec_amount: '0',
        dis_amount: '0',
        due_amount: '0'
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewPatientRegistration.useEffect": ()=>{
            fetchHospitals();
            fetchDoctors();
            fetchScans();
            fetchTimeSlots();
            fetchLastPatient();
            // Check for edit mode
            const urlParams = new URLSearchParams(window.location.search);
            const editId = urlParams.get('edit');
            if (editId) {
                setIsEditMode(true);
                setEditPatientId(editId);
                fetchPatientData(editId);
            }
            // Close dropdowns when clicking outside
            const handleClickOutside = {
                "NewPatientRegistration.useEffect.handleClickOutside": (event)=>{
                    const target = event.target;
                    if (!target.closest('.relative')) {
                        setShowHospitalDropdown(false);
                        setShowDoctorDropdown(false);
                        setShowTimeInDropdown(false);
                        setShowTimeOutDropdown(false);
                    }
                }
            }["NewPatientRegistration.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "NewPatientRegistration.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["NewPatientRegistration.useEffect"];
        }
    }["NewPatientRegistration.useEffect"], []);
    // Auto-set current time when appointment date is today
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewPatientRegistration.useEffect": ()=>{
            if (!isEditMode && !formData.time) {
                const today = new Date();
                const appointmentDate = new Date(formData.appoint_date);
                const isToday = appointmentDate.toDateString() === today.toDateString();
                if (isToday) {
                    const currentTime = getCurrentTime();
                    const currentTimeAMPM = formatTimeToAMPM(currentTime);
                    setFormData({
                        "NewPatientRegistration.useEffect": (prev)=>({
                                ...prev,
                                time: currentTime
                            })
                    }["NewPatientRegistration.useEffect"]);
                    setTimeInSearchTerm(currentTimeAMPM);
                }
            }
        }
    }["NewPatientRegistration.useEffect"], [
        formData.appoint_date
    ]);
    // Auto-calculate time out when time in or estimated time changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewPatientRegistration.useEffect": ()=>{
            if (formData.time && formData.est_time && parseInt(formData.est_time) > 0) {
                calculateTimeOut(formData.time, parseInt(formData.est_time));
            }
        }
    }["NewPatientRegistration.useEffect"], [
        formData.time,
        formData.est_time
    ]);
    // Auto-calculate time out when estimated time changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewPatientRegistration.useEffect": ()=>{
            if (formData.time && formData.est_time && parseInt(formData.est_time) > 0) {
                const timeSlot = timeSlots.find({
                    "NewPatientRegistration.useEffect.timeSlot": (slot)=>slot.time_id.toString() === formData.time
                }["NewPatientRegistration.useEffect.timeSlot"]);
                if (timeSlot) {
                    const timeMatch = timeSlot.time_slot.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
                    if (timeMatch) {
                        let hour = parseInt(timeMatch[1]);
                        const minute = parseInt(timeMatch[2]);
                        const period = timeMatch[3].toUpperCase();
                        if (period === 'PM' && hour !== 12) {
                            hour += 12;
                        } else if (period === 'AM' && hour === 12) {
                            hour = 0;
                        }
                        const time24 = "".concat(hour.toString().padStart(2, '0'), ":").concat(minute.toString().padStart(2, '0'));
                        calculateTimeOut(time24, parseInt(formData.est_time));
                    }
                }
            }
        }
    }["NewPatientRegistration.useEffect"], [
        formData.est_time,
        formData.time,
        timeSlots
    ]);
    const fetchHospitals = async ()=>{
        try {
            const response = await fetch('https://varahasdc.co.in/api/reception/hospitals');
            if (response.ok) {
                const data = await response.json();
                setHospitals(Array.isArray(data) ? data : []);
            }
        } catch (error) {
            console.error('Error fetching hospitals:', error);
        }
    };
    const fetchDoctors = async ()=>{
        try {
            const response = await fetch('https://varahasdc.co.in/api/reception/doctors');
            if (response.ok) {
                const data = await response.json();
                setDoctors(Array.isArray(data) ? data : []);
            }
        } catch (error) {
            console.error('Error fetching doctors:', error);
        }
    };
    const fetchScans = async ()=>{
        try {
            const response = await fetch('https://varahasdc.co.in/api/reception/scans');
            if (response.ok) {
                const data = await response.json();
                setScans(Array.isArray(data) ? data : []);
            }
        } catch (error) {
            console.error('Error fetching scans:', error);
        }
    };
    const fetchTimeSlots = async ()=>{
        try {
            const response = await fetch('https://varahasdc.co.in/api/reception/time-slots');
            if (response.ok) {
                const data = await response.json();
                const slots = Array.isArray(data) ? data : [];
                console.log('Fetched time slots:', slots);
                setTimeSlots(slots);
            } else {
                console.error('Failed to fetch time slots, using fallback');
                generateFallbackTimeSlots();
            }
        } catch (error) {
            console.error('Error fetching time slots:', error);
            generateFallbackTimeSlots();
        }
    };
    // Generate fallback time slots if API fails - every 15 minutes for 24 hours
    const generateFallbackTimeSlots = ()=>{
        const fallbackSlots = [];
        for(let hour = 0; hour < 24; hour++){
            for(let minute = 0; minute < 60; minute += 15){
                const time24 = "".concat(hour.toString().padStart(2, '0'), ":").concat(minute.toString().padStart(2, '0'));
                const timeAMPM = formatTimeToAMPM(time24);
                fallbackSlots.push({
                    time_id: fallbackSlots.length + 1,
                    time_slot: timeAMPM
                });
            }
        }
        console.log('Using fallback time slots:', fallbackSlots.length);
        setTimeSlots(fallbackSlots);
    };
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
    const [patientData, setPatientData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchPatientData = async (patientId)=>{
        try {
            const response = await fetch("https://varahasdc.co.in/api/reception/patients/".concat(patientId));
            if (response.ok) {
                const data = await response.json();
                setPatientData(data.data);
            }
        } catch (error) {
            console.error('Error fetching patient data:', error);
        }
    };
    // Process patient data after scans are loaded
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewPatientRegistration.useEffect": ()=>{
            if (patientData && scans.length > 0) {
                var _patient_hospital_id, _patient_doctor_name, _patient_age, _patient_age1, _patient_age2, _patient_amount, _patient_total_amount, _patient_rec_amount, _patient_dis_amount, _patient_due_amount;
                const patient = patientData;
                // Auto-select scans and calculate totals
                const scanIds = patient.scan_type ? patient.scan_type.split(',') : [];
                const selectedScansData = scans.filter({
                    "NewPatientRegistration.useEffect.selectedScansData": (scan)=>scanIds.includes(scan.s_id.toString())
                }["NewPatientRegistration.useEffect.selectedScansData"]);
                setSelectedScans(selectedScansData);
                // Calculate estimated time from selected scans
                const totalEstTime = selectedScansData.reduce({
                    "NewPatientRegistration.useEffect.totalEstTime": (sum, scan)=>{
                        var _scan_estimate_time;
                        const timeMatch = (_scan_estimate_time = scan.estimate_time) === null || _scan_estimate_time === void 0 ? void 0 : _scan_estimate_time.match(/(\d+)/);
                        return sum + (timeMatch ? parseInt(timeMatch[1]) : 0);
                    }
                }["NewPatientRegistration.useEffect.totalEstTime"], 0);
                // Populate form with patient data
                setFormData({
                    date: patient.date || new Date().toLocaleDateString('en-GB').split('/').reverse().join('-'),
                    hospital_name: ((_patient_hospital_id = patient.hospital_id) === null || _patient_hospital_id === void 0 ? void 0 : _patient_hospital_id.toString()) || '',
                    doctor_name: ((_patient_doctor_name = patient.doctor_name) === null || _patient_doctor_name === void 0 ? void 0 : _patient_doctor_name.toString()) || '',
                    pre: patient.pre || 'Mr.',
                    firstname: patient.patient_name || '',
                    age: ((_patient_age = patient.age) === null || _patient_age === void 0 ? void 0 : _patient_age.replace(/[^0-9]/g, '')) || '',
                    age_type: ((_patient_age1 = patient.age) === null || _patient_age1 === void 0 ? void 0 : _patient_age1.includes('Year')) ? 'Year' : ((_patient_age2 = patient.age) === null || _patient_age2 === void 0 ? void 0 : _patient_age2.includes('Month')) ? 'Month' : 'Days',
                    gender: patient.gender || 'Male',
                    petient_type: patient.petient_type || 'GEN / Paid',
                    p_uni_submit: patient.p_uni_submit || 'N',
                    p_uni_id_name: patient.p_uni_id_name || '',
                    address: patient.address || '',
                    city: patient.city || '',
                    contact_number: patient.contact_number || '',
                    type_of_scan: scanIds,
                    appoint_date: patient.appoint_date ? patient.appoint_date.includes('-') ? patient.appoint_date.split('-').reverse().join('-') : patient.appoint_date : new Date().toLocaleDateString('en-GB').split('/').reverse().join('-'),
                    time: patient.time || '',
                    time_in: patient.time_in || '',
                    amount: ((_patient_amount = patient.amount) === null || _patient_amount === void 0 ? void 0 : _patient_amount.toString()) || '0',
                    est_time: totalEstTime.toString(),
                    total_amount: ((_patient_total_amount = patient.total_amount) === null || _patient_total_amount === void 0 ? void 0 : _patient_total_amount.toString()) || '0',
                    rec_amount: ((_patient_rec_amount = patient.rec_amount) === null || _patient_rec_amount === void 0 ? void 0 : _patient_rec_amount.toString()) || '0',
                    dis_amount: ((_patient_dis_amount = patient.dis_amount) === null || _patient_dis_amount === void 0 ? void 0 : _patient_dis_amount.toString()) || '0',
                    due_amount: ((_patient_due_amount = patient.due_amount) === null || _patient_due_amount === void 0 ? void 0 : _patient_due_amount.toString()) || '0'
                });
                // Set search terms for dropdowns
                if (patient.h_name) setHospitalSearchTerm(patient.h_name);
                if (patient.dname) setDoctorSearchTerm(patient.dname);
                // Set time search terms if available
                setTimeout({
                    "NewPatientRegistration.useEffect": ()=>{
                        // Handle time binding - check if it's a time slot ID or direct time value
                        if (patient.time && timeSlots.length > 0) {
                            const timeSlot = timeSlots.find({
                                "NewPatientRegistration.useEffect.timeSlot": (slot)=>slot.time_id.toString() === patient.time.toString()
                            }["NewPatientRegistration.useEffect.timeSlot"]);
                            if (timeSlot) {
                                setTimeInSearchTerm(timeSlot.time_slot);
                                setFormData({
                                    "NewPatientRegistration.useEffect": (prev)=>({
                                            ...prev,
                                            time: timeSlot.time_slot
                                        })
                                }["NewPatientRegistration.useEffect"]);
                            } else if (typeof patient.time === 'string' && patient.time.includes(':')) {
                                setTimeInSearchTerm(formatTimeToAMPM(patient.time));
                            }
                        }
                        if (patient.time_in && timeSlots.length > 0) {
                            const timeSlot = timeSlots.find({
                                "NewPatientRegistration.useEffect.timeSlot": (slot)=>slot.time_id.toString() === patient.time_in.toString()
                            }["NewPatientRegistration.useEffect.timeSlot"]);
                            if (timeSlot) {
                                setTimeOutSearchTerm(timeSlot.time_slot);
                                setFormData({
                                    "NewPatientRegistration.useEffect": (prev)=>({
                                            ...prev,
                                            time_in: timeSlot.time_slot
                                        })
                                }["NewPatientRegistration.useEffect"]);
                            } else if (typeof patient.time_in === 'string' && patient.time_in.includes(':')) {
                                setTimeOutSearchTerm(formatTimeToAMPM(patient.time_in));
                            }
                        }
                        // Auto-calculate time out if time in exists and estimated time is available
                        if (patient.time && totalEstTime > 0 && patient.time.includes(':')) {
                            calculateTimeOut(patient.time, totalEstTime);
                        }
                    }
                }["NewPatientRegistration.useEffect"], 500);
            }
        }
    }["NewPatientRegistration.useEffect"], [
        patientData,
        scans,
        timeSlots
    ]);
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev)=>({
                    ...prev,
                    [name]: ''
                }));
        }
        // Handle category change for ID requirement
        if (name === 'petient_type') {
            const freeCategories = [
                'IPD FREE',
                'OPD FREE',
                'RTA',
                'RGHS',
                'Chiranjeevi',
                'Destitute',
                'PRISONER',
                'Sn. CITIZEN',
                'Aayushmaan'
            ];
            setShowUniId(freeCategories.includes(value));
        }
    };
    // Convert 24-hour time to 12-hour AM/PM format
    const formatTimeToAMPM = (time24)=>{
        const [hours, minutes] = time24.split(':').map(Number);
        const period = hours >= 12 ? 'PM' : 'AM';
        const hours12 = hours % 12 || 12;
        return "".concat(hours12.toString().padStart(2, '0'), ":").concat(minutes.toString().padStart(2, '0'), " ").concat(period);
    };
    // Filter time slots based on appointment date and current time
    const getFilteredTimeSlots = ()=>{
        const now = new Date();
        // Parse appointment date properly - handle both YYYY-MM-DD and DD-MM-YYYY formats
        let selectedDate;
        if (formData.appoint_date.includes('-')) {
            // YYYY-MM-DD format
            selectedDate = new Date(formData.appoint_date);
        } else {
            // DD/MM/YYYY format - convert to proper date
            const parts = formData.appoint_date.split('/');
            if (parts.length === 3) {
                selectedDate = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
            } else {
                selectedDate = new Date(formData.appoint_date);
            }
        }
        const isToday = selectedDate.toDateString() === now.toDateString();
        if (!isToday) {
            // For future dates, return all time slots
            return timeSlots;
        }
        // For today, show slots from current time + 5 minutes onwards
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const currentTimeInMinutes = currentHour * 60 + currentMinute + 5; // Add 5 minute buffer
        const filtered = timeSlots.filter((slot)=>{
            // Extract time from slot.time_slot (format: "HH:MM AM/PM")
            const timeMatch = slot.time_slot.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
            if (!timeMatch) return false;
            let hour = parseInt(timeMatch[1]);
            const minute = parseInt(timeMatch[2]);
            const period = timeMatch[3].toUpperCase();
            // Convert to 24-hour format
            if (period === 'PM' && hour !== 12) {
                hour += 12;
            } else if (period === 'AM' && hour === 12) {
                hour = 0;
            }
            const slotTimeInMinutes = hour * 60 + minute;
            // Show slots that are from current time + buffer onwards
            return slotTimeInMinutes >= currentTimeInMinutes;
        });
        console.log('Filtered time slots:', {
            currentTime: "".concat(currentHour, ":").concat(currentMinute),
            totalSlots: timeSlots.length,
            filteredSlots: filtered.length,
            isToday
        });
        return filtered;
    };
    const calculateTimeOut = (timeIn, estimatedMinutes)=>{
        if (!timeIn || !estimatedMinutes) return;
        let hours, minutes;
        // Handle both 24-hour (HH:MM) and 12-hour (HH:MM AM/PM) formats
        if (timeIn.includes('AM') || timeIn.includes('PM')) {
            const timeMatch = timeIn.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
            if (!timeMatch) return;
            hours = parseInt(timeMatch[1]);
            minutes = parseInt(timeMatch[2]);
            const period = timeMatch[3].toUpperCase();
            // Convert to 24-hour format
            if (period === 'PM' && hours !== 12) {
                hours += 12;
            } else if (period === 'AM' && hours === 12) {
                hours = 0;
            }
        } else {
            // Already in 24-hour format
            [hours, minutes] = timeIn.split(':').map(Number);
        }
        const timeInDate = new Date();
        timeInDate.setHours(hours, minutes, 0, 0);
        // Add estimated minutes
        const timeOutDate = new Date(timeInDate.getTime() + estimatedMinutes * 60000);
        // Format back to 24-hour format
        const timeOut = "".concat(timeOutDate.getHours().toString().padStart(2, '0'), ":").concat(timeOutDate.getMinutes().toString().padStart(2, '0'));
        // Set calculated time out
        setFormData((prev)=>({
                ...prev,
                time_in: timeOut
            }));
        setTimeOutSearchTerm(formatTimeToAMPM(timeOut));
    };
    // Convert 12-hour format to 24-hour format
    const convertTo24Hour = (time12)=>{
        const timeMatch = time12.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
        if (!timeMatch) return time12;
        let hour = parseInt(timeMatch[1]);
        const minute = parseInt(timeMatch[2]);
        const period = timeMatch[3].toUpperCase();
        if (period === 'PM' && hour !== 12) {
            hour += 12;
        } else if (period === 'AM' && hour === 12) {
            hour = 0;
        }
        return "".concat(hour.toString().padStart(2, '0'), ":").concat(minute.toString().padStart(2, '0'));
    };
    // Get current time when appointment date changes
    const getCurrentTime = ()=>{
        const now = new Date();
        return "".concat(now.getHours().toString().padStart(2, '0'), ":").concat(now.getMinutes().toString().padStart(2, '0'));
    };
    // Auto-select current time for today's appointment
    const autoSelectCurrentTime = ()=>{
        const today = new Date();
        const currentHour = today.getHours();
        const currentMinute = today.getMinutes();
        const currentTimeInMinutes = currentHour * 60 + currentMinute;
        // Find the first available time slot that is at or after current time
        const availableSlot = timeSlots.find((slot)=>{
            const timeMatch = slot.time_slot.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
            if (!timeMatch) return false;
            let hour = parseInt(timeMatch[1]);
            const minute = parseInt(timeMatch[2]);
            const period = timeMatch[3].toUpperCase();
            if (period === 'PM' && hour !== 12) {
                hour += 12;
            } else if (period === 'AM' && hour === 12) {
                hour = 0;
            }
            const slotTimeInMinutes = hour * 60 + minute;
            return slotTimeInMinutes >= currentTimeInMinutes;
        });
        if (availableSlot) {
            setFormData((prev)=>({
                    ...prev,
                    time: availableSlot.time_id.toString()
                }));
            setTimeInSearchTerm(availableSlot.time_slot);
        }
    };
    // Handle appointment date change
    const handleAppointmentDateChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
        // Clear time selections when date changes
        setFormData((prev)=>({
                ...prev,
                time: '',
                time_in: ''
            }));
        setTimeInSearchTerm('');
        setTimeOutSearchTerm('');
        // If selecting today's date, set current time
        const selectedDate = new Date(value);
        const today = new Date();
        const isToday = selectedDate.toDateString() === today.toDateString();
        if (isToday) {
            const currentTime = getCurrentTime();
            const currentTimeAMPM = formatTimeToAMPM(currentTime);
            setFormData((prev)=>({
                    ...prev,
                    time: currentTime
                }));
            setTimeInSearchTerm(currentTimeAMPM);
            // Auto-calculate time out if estimated time is available
            const estimatedTime = parseInt(formData.est_time) || 0;
            if (estimatedTime > 0) {
                calculateTimeOut(currentTime, estimatedTime);
            }
        }
    };
    const handleScanChange = (scanId, checked)=>{
        let newSelectedScans = [
            ...formData.type_of_scan
        ];
        if (checked) {
            newSelectedScans.push(scanId);
        } else {
            newSelectedScans = newSelectedScans.filter((id)=>id !== scanId);
        }
        setFormData((prev)=>({
                ...prev,
                type_of_scan: newSelectedScans
            }));
        // Calculate totals
        const selected = scans.filter((scan)=>newSelectedScans.includes(scan.s_id.toString()));
        setSelectedScans(selected);
        let totalAmount = selected.reduce((sum, scan)=>sum + scan.charges, 0);
        const totalTime = selected.reduce((sum, scan)=>{
            var _scan_estimate_time;
            const timeMatch = (_scan_estimate_time = scan.estimate_time) === null || _scan_estimate_time === void 0 ? void 0 : _scan_estimate_time.match(/(\d+)/);
            return sum + (timeMatch ? parseInt(timeMatch[1]) : 0);
        }, 0);
        // Store scan amount in database regardless of category
        const scanAmount = totalAmount;
        setFormData((prev)=>{
            let newFormData;
            if (prev.petient_type === 'GEN / Paid') {
                // For GEN/Paid: validate amount, received amount required
                newFormData = {
                    ...prev,
                    amount: scanAmount.toString(),
                    est_time: totalTime.toString(),
                    total_amount: scanAmount.toString(),
                    rec_amount: scanAmount.toString(),
                    due_amount: '0'
                };
            } else {
                // For other categories: total amount shows scan amount but received can be 0
                newFormData = {
                    ...prev,
                    amount: scanAmount.toString(),
                    est_time: totalTime.toString(),
                    total_amount: scanAmount.toString(),
                    rec_amount: '0',
                    due_amount: '0'
                };
            // Note: Patient belongs to free category - No payment required
            }
            return newFormData;
        });
        // Auto-select current time if not already selected and appointment is today
        if (!formData.time && timeSlots.length > 0) {
            const today = new Date();
            const appointmentDate = new Date(formData.appoint_date);
            const isToday = appointmentDate.toDateString() === today.toDateString();
            if (isToday) {
                setTimeout(()=>autoSelectCurrentTime(), 100);
            }
        }
    };
    const calculatePayment = ()=>{
        const total = parseFloat(formData.total_amount) || 0;
        const received = parseFloat(formData.rec_amount) || 0;
        const discount = parseFloat(formData.dis_amount) || 0;
        // PHP logic: due_amount = total_amount - received_amount - discount_amount
        const due = total - received - discount;
        setFormData((prev)=>({
                ...prev,
                due_amount: due.toString()
            }));
    };
    const validatePayment = ()=>{
        // Free categories don't need payment validation (exact list from PHP)
        const freeCategories = [
            'Destitute',
            'Chiranjeevi',
            'RGHS',
            'RTA',
            'OPD FREE',
            'IPD FREE',
            'BPL/POOR',
            'Sn. CITIZEN',
            'BHAMASHAH',
            'JSSY',
            'PRISONER',
            'Aayushmaan'
        ];
        if (freeCategories.includes(formData.petient_type)) {
            return true;
        }
        const total = parseFloat(formData.total_amount) || 0;
        const received = parseFloat(formData.rec_amount) || 0;
        // For GEN/Paid category, received amount cannot be 0 if total > 0
        if (formData.petient_type === 'GEN / Paid' && total > 0 && received === 0) {
            if (toast && typeof toast.error === 'function') {
                toast.error('For GEN/Paid category, received amount cannot be 0');
            }
            return false;
        }
        return true;
    };
    // Handle category change and update amounts accordingly
    const handleCategoryChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
        // Handle category change for ID requirement
        const freeCategories = [
            'IPD FREE',
            'OPD FREE',
            'RTA',
            'RGHS',
            'Chiranjeevi',
            'Destitute',
            'PRISONER',
            'Sn. CITIZEN',
            'Aayushmaan'
        ];
        setShowUniId(freeCategories.includes(value));
        // Recalculate amounts based on category
        const scanAmount = selectedScans.reduce((sum, scan)=>sum + scan.charges, 0);
        if (value === 'GEN / Paid') {
            // For GEN/Paid: scan amount should be stored, received amount required, due can be 0
            setFormData((prev)=>({
                    ...prev,
                    total_amount: scanAmount.toString(),
                    amount: scanAmount.toString(),
                    rec_amount: scanAmount.toString(),
                    due_amount: '0'
                }));
        } else {
            // For other categories: total amount shows scan amount, received accepts 0, due also 0
            setFormData((prev)=>({
                    ...prev,
                    total_amount: scanAmount.toString(),
                    amount: scanAmount.toString(),
                    rec_amount: '0',
                    due_amount: '0'
                }));
        }
    };
    // Check if print should be enabled (PHP logic: due_amount == '0')
    const isPrintEnabled = ()=>{
        const freeCategories = [
            'Destitute',
            'Chiranjeevi',
            'RGHS',
            'RTA',
            'OPD FREE',
            'IPD FREE',
            'BPL/POOR',
            'Sn. CITIZEN',
            'BHAMASHAH',
            'JSSY',
            'PRISONER',
            'Aayushmaan'
        ];
        if (freeCategories.includes(formData.petient_type)) {
            return true; // Always enabled for free categories
        }
        // PHP uses string comparison: due_amount == '0'
        const dueAmount = parseFloat(formData.due_amount) || 0;
        return dueAmount === 0;
    };
    const validateStep = (step)=>{
        const newErrors = {};
        if (step === 1) {
            if (!formData.hospital_name) {
                newErrors.hospital_name = 'Hospital Name is required';
                toast.error('Please select Hospital Name');
            }
            if (!formData.doctor_name) {
                newErrors.doctor_name = 'Doctor Name is required';
                toast.error('Please select Doctor Name');
            }
            if (!formData.firstname.trim()) {
                newErrors.firstname = 'Patient Name is required';
                toast.error('Please enter Patient Name');
            }
            if (!formData.age.trim()) {
                newErrors.age = 'Age is required';
                toast.error('Please enter Age');
            }
            if (formData.contact_number && !/^[0-9]{10}$/.test(formData.contact_number)) {
                newErrors.contact_number = 'Contact Number must be 10 digits';
                toast.error('Contact Number must be 10 digits');
            }
        }
        if (step === 2) {
            if (formData.type_of_scan.length === 0) {
                newErrors.type_of_scan = 'At least one scan type is required';
                toast.error('Please select at least one scan type');
            }
            if (!formData.time) {
                newErrors.time = 'Time In is required';
                toast.error('Please select Time In');
            }
            if (!formData.time_in) {
                newErrors.time_in = 'Time Out is required';
                toast.error('Please select Time Out');
            }
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const nextStep = ()=>{
        if (validateStep(currentStep)) {
            if (currentStep < 3) {
                setCurrentStep(currentStep + 1);
            }
        }
    };
    const prevStep = ()=>{
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };
    const handleSubmit = async (action)=>{
        if (action === 'Print') {
            // Print action - just print using saved data, no API call
            if (savedPatientData) {
                printReceipt(savedPatientData);
                if (toast && typeof toast.info === 'function') {
                    toast.info('Receipt printed successfully!');
                }
                setTimeout(()=>{
                    window.location.href = '/reception/patient-registration';
                }, 2000);
            }
            return;
        }
        try {
            // Prepare data in the format expected by the API
            const submitData = {
                hospital_name: formData.hospital_name,
                DoctorName: formData.doctor_name,
                pre: formData.pre,
                firstname: formData.firstname,
                age: formData.age,
                age_type: formData.age_type,
                gender: formData.gender,
                petient_type: formData.petient_type,
                p_uni_submit: formData.p_uni_submit || 'N',
                p_uni_id_name: formData.p_uni_id_name || '',
                address: formData.address,
                city: formData.city,
                contact_number: formData.contact_number,
                type_of_scan: formData.type_of_scan,
                appoint_date: formData.appoint_date,
                time: formData.time,
                time_in: formData.time_in,
                amount: formData.amount,
                total_amount: formData.total_amount,
                dis_amount: formData.dis_amount,
                rec_amount: formData.rec_amount,
                due_amount: formData.due_amount,
                admin_id: 1,
                action: action
            };
            let response;
            if (isEditMode && editPatientId) {
                response = await fetch("https://varahasdc.co.in/api/reception/patients/".concat(editPatientId), {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(submitData)
                });
            } else {
                response = await fetch('https://varahasdc.co.in/api/reception/patients', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(submitData)
                });
            }
            if (response.ok) {
                var _result_data;
                const result = await response.json();
                const cro = ((_result_data = result.data) === null || _result_data === void 0 ? void 0 : _result_data.cro) || (isEditMode ? 'Updated' : 'Registered');
                // Save action - enable print button
                setIsSaved(true);
                setSavedPatientData(result.data);
                if (toast && typeof toast.success === 'function') {
                    toast.success("Patient ".concat(isEditMode ? 'updated' : 'registered', " successfully! CRO: ").concat(cro));
                }
            } else {
                const errorData = await response.json().catch(()=>({}));
                if (toast && typeof toast.error === 'function') {
                    toast.error("Error: ".concat(errorData.error || (isEditMode ? 'Failed to update patient' : 'Failed to register patient')));
                }
            }
        } catch (error) {
            console.error('Error saving patient:', error);
            if (toast && typeof toast.error === 'function') {
                toast.error(isEditMode ? 'Error updating patient' : 'Error saving patient');
            }
        }
    };
    const resetForm = ()=>{
        setFormData({
            date: new Date().toLocaleDateString('en-GB').split('/').reverse().join('-'),
            hospital_name: '',
            doctor_name: '',
            pre: 'Mr.',
            firstname: '',
            age: '',
            age_type: 'Year',
            gender: 'Male',
            petient_type: 'GEN / Paid',
            p_uni_submit: 'N',
            p_uni_id_name: '',
            address: '',
            city: '',
            contact_number: '',
            type_of_scan: [],
            appoint_date: new Date().toLocaleDateString('en-GB').split('/').reverse().join('-'),
            time: '',
            time_in: '',
            amount: '0',
            est_time: '0',
            total_amount: '0',
            rec_amount: '0',
            dis_amount: '0',
            due_amount: '0'
        });
        // Reset search terms
        setHospitalSearchTerm('');
        setDoctorSearchTerm('');
        setTimeInSearchTerm('');
        setTimeOutSearchTerm('');
        setScanSearchTerm('');
        setSelectedScans([]);
        // Go back to first step
        setCurrentStep(1);
        // Refresh last patient data
        fetchLastPatient();
    };
    // Convert number to words function
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
    const printReceipt = (patientData)=>{
        const currentDate = new Date().toLocaleDateString('en-GB');
        const investigations = selectedScans.map((scan)=>scan.s_name).join(', ');
        const amountInWords = numberToWords(parseInt(formData.rec_amount || formData.total_amount)).toUpperCase();
        const printContent = "\n<!DOCTYPE html>\n<html>\n<head>\n<title>Receipt - ".concat(patientData.cro || 'New Patient', '</title>\n<style>\n.admission_form { text-align: center; color: #000000; font-size: 10px; width: 100%; }\n.admission_form table { width: 98%; font-size: 10px; margin: -5px 8px; }\n.admission_form .form_input { padding: 2px 1%; font-size: 10px; border: none; font-weight: bold; font-style: italic; width: 99%; border-bottom: 1px dotted #000000; }\n.admission_form .form_input_box { border-bottom: 0px dotted #000000; padding: 0px 0px 2px 0px; width: 100%; display: inline-block; }\n@media print { .no_print, .no_print * { display: none !important; } .admission_div_desc { border: 0px !important; } .page_break { page-break-after: always; } }\n</style>\n</head>\n<body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" onload="window.print(); setTimeout(() => window.close(), 1000);">\n<div class="admission_form" align="center" style="border:solid thin; margin-top:18px;width:93.0%;margin-left:30px;">\n  <table align="center" style="margin-top:2px;">\n    <tr><td colspan="6"><b>Dr. S.N. MEDICAL COLLEGE AND ATTACHED GROUP OF HOSPITAL, JODHPUR</b></td></tr>\n    <tr><td colspan="6"><b>Rajasthan Medical Relief Society, M.D.M. Hospital, Jodhpur</b></td></tr>\n    <tr><td colspan="6"><b>IMAGING CENTRE UNDER P.P.P.MODE : VARAHA SDC</b></td></tr>\n    <tr><td colspan="6"><b>256 SLICE DUAL ENERGY CT SCAN, M.D.M HOSPITAL Jodhpur(Raj.) - 342003</b></td></tr>\n    <tr><td colspan="6"><b>Tel. : +91-291-2648120 , 0291-2648121 , 0291-2648122</b></td></tr>\n  </table>\n  \n  <table>\n    <tr>\n      <td width="55">Reg.No :</td>\n      <td width="200"><span class="form_input_box"><input type="text" class="form_input" value="').concat(patientData.cro || '', "(").concat(patientData.patient_id || '', ')"></span></td>\n      <td colspan="6"><span style="margin-left:30%; border: 1px solid #02C; border-radius: 11px;padding: 3px 15px;">Cash Receipt</span></td>\n      <td width="36">Date</td>\n      <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="').concat(currentDate, '"></span></td>\n    </tr>\n  </table>\n  \n  <table>\n    <tr>\n      <td width="56">Ref. By :</td>\n      <td width="482"><span class="form_input_box"><input type="text" class="form_input" value="').concat(doctorSearchTerm || '', '"></span></td>\n      <td width="174">Date and Time of Appointment :</td>\n      <td width="316"><span class="form_input_box"><input type="text" class="form_input" value="').concat(formData.appoint_date.split('-').reverse().join('-'), " ").concat(timeInSearchTerm || '', "-").concat(timeOutSearchTerm || '', '"></span></td>\n    </tr>\n  </table>\n  \n  <table>\n    <tr>\n      <td width="78">Patient Name:</td>\n      <td width="650"><span class="form_input_box"><input type="text" class="form_input" value="').concat(formData.pre, " ").concat(formData.firstname, '"></span></td>\n      <td width="33">Age :</td>\n      <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="').concat(formData.age, '"></span></td>\n      <td width="36">Gender</td>\n      <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="').concat(formData.gender, '"></span></td>\n    </tr>\n  </table>\n  \n  <table>\n    <tr>\n      <td width="40">Address</td>\n      <td width="687"><span class="form_input_box"><input type="text" class="form_input" value="').concat(formData.address || '', '"></span></td>\n      <td width="687"><span class="form_input_box"><label>Category</label><input type="text" class="form_input" value="').concat(formData.petient_type, '"></span></td>\n      <td width="33">Phone:</td>\n      <td width="333"><span class="form_input_box"><input type="text" class="form_input" value="').concat(formData.contact_number || '', '"></span></td>\n    </tr>\n  </table>\n  \n  <table>\n    <tr>\n      <td width="59">Investigations:</td>\n      <td width="1042"><span class="form_input_box"><input type="text" class="form_input" value="').concat(investigations, '"></span></td>\n    </tr>\n  </table>\n  \n  <table>\n    <tr>\n      <td width="129">For Sum Of Rupees:</td>\n      <td width="733"><span class="form_input_box"><input type="text" class="form_input" value="').concat(amountInWords, ' RUPEES ONLY"></span></td>\n      <td width="147"><label>Scan Amount</label><input type="text" value="₹ ').concat(formData.total_amount, '" style="border:1px solid #5E60AE;"></td>\n      <td width="147"><label>Received Amount</label><input type="text" value="₹ ').concat(formData.rec_amount, '" style="border:1px solid #5E60AE;"></td>\n    </tr>\n  </table>\n  \n  <table>\n    <tr>\n      <td colspan="6" align="right" style="padding-top: 20px;">For Varaha SDC, Jodhpur</td>\n    </tr>\n    <tr>\n      <td colspan="6" align="right" style="padding-top: 30px;">Signature</td>\n    </tr>\n  </table>\n  \n  <table style="margin-top: 10px;">\n    <tr>\n      <td colspan="6" style="font-size: 8px; text-align: center;">This is a computer generated receipt</td>\n    </tr>\n  </table>\n</div>\n\n<div style="page-break-before: always;"></div>\n\n<div class="admission_form" align="center" style="border:solid thin; margin-top:18px;width:93.0%;margin-left:30px;">\n  <table align="center" style="margin-top:2px;">\n    <tr><td colspan="6"><b>Dr. S.N. MEDICAL COLLEGE AND ATTACHED GROUP OF HOSPITAL, JODHPUR</b></td></tr>\n    <tr><td colspan="6"><b>Rajasthan Medical Relief Society, M.D.M. Hospital, Jodhpur</b></td></tr>\n    <tr><td colspan="6"><b>IMAGING CENTRE UNDER P.P.P.MODE : VARAHA SDC</b></td></tr>\n    <tr><td colspan="6"><b>256 SLICE DUAL ENERGY CT SCAN, M.D.M HOSPITAL Jodhpur(Raj.) - 342003</b></td></tr>\n    <tr><td colspan="6"><b>Tel. : +91-291-2648120 , 0291-2648121 , 0291-2648122</b></td></tr>\n  </table>\n  \n  <table>\n    <tr>\n      <td width="55">Reg.No :</td>\n      <td width="200"><span class="form_input_box"><input type="text" class="form_input" value="').concat(patientData.cro || '', "(").concat(patientData.patient_id || '', ')"></span></td>\n      <td colspan="6"><span style="margin-left:30%; border: 1px solid #02C; border-radius: 11px;padding: 3px 15px;">Cash Receipt</span></td>\n      <td width="36">Date</td>\n      <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="').concat(currentDate, '"></span></td>\n    </tr>\n  </table>\n  \n  <table>\n    <tr>\n      <td width="56">Ref. By :</td>\n      <td width="482"><span class="form_input_box"><input type="text" class="form_input" value="').concat(doctorSearchTerm || '', '"></span></td>\n      <td width="174">Date and Time of Appointment :</td>\n      <td width="316"><span class="form_input_box"><input type="text" class="form_input" value="').concat(formData.appoint_date.split('-').reverse().join('-'), " ").concat(timeInSearchTerm || '', "-").concat(timeOutSearchTerm || '', '"></span></td>\n    </tr>\n  </table>\n  \n  <table>\n    <tr>\n      <td width="78">Patient Name:</td>\n      <td width="650"><span class="form_input_box"><input type="text" class="form_input" value="').concat(formData.pre, " ").concat(formData.firstname, '"></span></td>\n      <td width="33">Age :</td>\n      <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="').concat(formData.age, '"></span></td>\n      <td width="36">Gender</td>\n      <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="').concat(formData.gender, '"></span></td>\n    </tr>\n  </table>\n  \n  <table>\n    <tr>\n      <td width="40">Address</td>\n      <td width="687"><span class="form_input_box"><input type="text" class="form_input" value="').concat(formData.address || '', '"></span></td>\n      <td width="687"><span class="form_input_box"><label>Category</label><input type="text" class="form_input" value="').concat(formData.petient_type, '"></span></td>\n      <td width="33">Phone:</td>\n      <td width="333"><span class="form_input_box"><input type="text" class="form_input" value="').concat(formData.contact_number || '', '"></span></td>\n    </tr>\n  </table>\n  \n  <table>\n    <tr>\n      <td width="59">Investigations:</td>\n      <td width="1042"><span class="form_input_box"><input type="text" class="form_input" value="').concat(investigations, '"></span></td>\n    </tr>\n  </table>\n  \n  <table>\n    <tr>\n      <td width="129">For Sum Of Rupees:</td>\n      <td width="733"><span class="form_input_box"><input type="text" class="form_input" value="').concat(amountInWords, ' RUPEES ONLY"></span></td>\n      <td width="147"><label>Scan Amount</label><input type="text" value="₹ ').concat(formData.total_amount, '" style="border:1px solid #5E60AE;"></td>\n      <td width="147"><label>Received Amount</label><input type="text" value="₹ ').concat(formData.rec_amount, '" style="border:1px solid #5E60AE;"></td>\n    </tr>\n  </table>\n  \n  <table>\n    <tr>\n      <td colspan="6" align="right" style="padding-top: 20px;">For Varaha SDC, Jodhpur</td>\n    </tr>\n    <tr>\n      <td colspan="6" align="right" style="padding-top: 30px;">Signature</td>\n    </tr>\n  </table>\n  \n  <table style="margin-top: 10px;">\n    <tr>\n      <td colspan="6" style="font-size: 8px; text-align: center;">This is a computer generated receipt</td>\n    </tr>\n  </table>\n</div>\n</body>\n</html>');
        const printWindow = window.open('', '_blank');
        if (printWindow) {
            printWindow.document.write(printContent);
            printWindow.document.close();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-3 sm:p-6 space-y-4 sm:space-y-6 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-sky-500 to-sky-600 text-white p-4 sm:p-6 rounded-xl shadow-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-4 sm:space-y-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl sm:text-3xl font-bold mb-2",
                                    children: isEditMode ? 'Edit Patient Registration' : 'New Patient Registration'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                    lineNumber: 1116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sky-100 text-sm sm:text-lg",
                                    children: isEditMode ? 'Update patient information and scan details' : 'Complete patient enrollment and scan booking'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                    lineNumber: 1117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                            lineNumber: 1115,
                            columnNumber: 11
                        }, this),
                        lastPatient && !isEditMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-sky-600 bg-opacity-50 rounded-lg px-4 py-2 min-w-0 flex-shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sky-200 text-xs mb-1",
                                    children: "Last Enrolled Patient"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                    lineNumber: 1121,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white font-medium text-sm truncate",
                                    children: [
                                        lastPatient.cro,
                                        " - ",
                                        lastPatient.patient_name
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                    lineNumber: 1122,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                            lineNumber: 1120,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                    lineNumber: 1114,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                lineNumber: 1113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl shadow-2xl border border-gray-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex flex-col sm:flex-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex-1 py-3 sm:py-4 px-3 sm:px-6 text-center border-b-2 font-medium text-xs sm:text-sm ".concat(currentStep === 1 ? 'border-sky-500 text-sky-600 bg-sky-50' : 'border-transparent text-gray-500 hover:text-gray-700'),
                                    onClick: ()=>setCurrentStep(1),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sm:hidden",
                                            children: "1. Enrollment"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                            lineNumber: 1140,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: "1. Enrollment Detail"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                            lineNumber: 1141,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                    lineNumber: 1132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex-1 py-3 sm:py-4 px-3 sm:px-6 text-center border-b-2 font-medium text-xs sm:text-sm ".concat(currentStep === 2 ? 'border-sky-500 text-sky-600 bg-sky-50' : 'border-transparent text-gray-500 hover:text-gray-700'),
                                    onClick: ()=>setCurrentStep(2),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sm:hidden",
                                            children: "2. Scans"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                            lineNumber: 1151,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: "2. Scan Options"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                            lineNumber: 1152,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                    lineNumber: 1143,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex-1 py-3 sm:py-4 px-3 sm:px-6 text-center border-b-2 font-medium text-xs sm:text-sm ".concat(currentStep === 3 ? 'border-sky-500 text-sky-600 bg-sky-50' : 'border-transparent text-gray-500 hover:text-gray-700'),
                                    onClick: ()=>setCurrentStep(3),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sm:hidden",
                                            children: "3. Payment"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                            lineNumber: 1162,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: "3. Payment Details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                            lineNumber: 1163,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                    lineNumber: 1154,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                            lineNumber: 1131,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                        lineNumber: 1130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "p-3 sm:p-6",
                        children: [
                            currentStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1174,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        name: "date",
                                                        value: formData.date.split('-').reverse().join('-'),
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50",
                                                        readOnly: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1175,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1173,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: [
                                                            "Hospital Name ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1184,
                                                                columnNumber: 97
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1184,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: hospitalSearchTerm,
                                                                onChange: (e)=>{
                                                                    setHospitalSearchTerm(e.target.value);
                                                                    setShowHospitalDropdown(true);
                                                                },
                                                                onFocus: ()=>setShowHospitalDropdown(true),
                                                                className: "w-full px-3 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 ".concat(errors.hospital_name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'),
                                                                placeholder: "Search and select hospital",
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1186,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                className: "absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1200,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1185,
                                                        columnNumber: 19
                                                    }, this),
                                                    showHospitalDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg",
                                                        children: [
                                                            hospitals.filter((hospital)=>hospital.h_name.toLowerCase().includes(hospitalSearchTerm.toLowerCase())).map((hospital)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "px-3 py-2 hover:bg-blue-50 cursor-pointer",
                                                                    onClick: ()=>{
                                                                        setFormData((prev)=>({
                                                                                ...prev,
                                                                                hospital_name: hospital.h_id.toString()
                                                                            }));
                                                                        setHospitalSearchTerm(hospital.h_name);
                                                                        setShowHospitalDropdown(false);
                                                                        if (errors.hospital_name) {
                                                                            setErrors((prev)=>({
                                                                                    ...prev,
                                                                                    hospital_name: ''
                                                                                }));
                                                                        }
                                                                    },
                                                                    children: hospital.h_name
                                                                }, hospital.h_id, false, {
                                                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                    lineNumber: 1209,
                                                                    columnNumber: 27
                                                                }, this)),
                                                            hospitals.filter((hospital)=>hospital.h_name.toLowerCase().includes(hospitalSearchTerm.toLowerCase())).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "px-3 py-2 text-gray-500",
                                                                children: "No hospitals found"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1228,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1203,
                                                        columnNumber: 21
                                                    }, this),
                                                    errors.hospital_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-red-500 text-sm mt-1",
                                                        children: errors.hospital_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1232,
                                                        columnNumber: 44
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1183,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: [
                                                            "Doctor Name ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1235,
                                                                columnNumber: 95
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1235,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: doctorSearchTerm,
                                                                onChange: (e)=>{
                                                                    setDoctorSearchTerm(e.target.value);
                                                                    setShowDoctorDropdown(true);
                                                                },
                                                                onFocus: ()=>setShowDoctorDropdown(true),
                                                                className: "w-full px-3 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 ".concat(errors.doctor_name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'),
                                                                placeholder: "Search and select doctor",
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1237,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                className: "absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1251,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1236,
                                                        columnNumber: 19
                                                    }, this),
                                                    showDoctorDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg",
                                                        children: [
                                                            doctors.filter((doctor)=>doctor.dname.toLowerCase().includes(doctorSearchTerm.toLowerCase())).map((doctor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "px-3 py-2 hover:bg-blue-50 cursor-pointer",
                                                                    onClick: ()=>{
                                                                        setFormData((prev)=>({
                                                                                ...prev,
                                                                                doctor_name: doctor.d_id.toString()
                                                                            }));
                                                                        setDoctorSearchTerm(doctor.dname);
                                                                        setShowDoctorDropdown(false);
                                                                        if (errors.doctor_name) {
                                                                            setErrors((prev)=>({
                                                                                    ...prev,
                                                                                    doctor_name: ''
                                                                                }));
                                                                        }
                                                                    },
                                                                    children: doctor.dname
                                                                }, doctor.d_id, false, {
                                                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                    lineNumber: 1260,
                                                                    columnNumber: 27
                                                                }, this)),
                                                            doctors.filter((doctor)=>doctor.dname.toLowerCase().includes(doctorSearchTerm.toLowerCase())).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "px-3 py-2 text-gray-500",
                                                                children: "No doctors found"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1279,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1254,
                                                        columnNumber: 21
                                                    }, this),
                                                    errors.doctor_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-red-500 text-sm mt-1",
                                                        children: errors.doctor_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1283,
                                                        columnNumber: 42
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1234,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                        lineNumber: 1172,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-4 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: [
                                                            "Patient Name ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1289,
                                                                columnNumber: 96
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1289,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        name: "pre",
                                                        value: formData.pre,
                                                        onChange: handleInputChange,
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Mr.",
                                                                children: "Mr."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1296,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Mrs.",
                                                                children: "Mrs."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1297,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Master",
                                                                children: "Master"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1298,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Miss",
                                                                children: "Miss"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1299,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Baby",
                                                                children: "Baby"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1300,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1290,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1288,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: " "
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1304,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        name: "firstname",
                                                        value: formData.firstname,
                                                        onChange: handleInputChange,
                                                        className: "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ".concat(errors.firstname ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'),
                                                        placeholder: "Please enter your First name",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1305,
                                                        columnNumber: 19
                                                    }, this),
                                                    errors.firstname && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-red-500 text-sm mt-1",
                                                        children: errors.firstname
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1316,
                                                        columnNumber: 40
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1303,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                        lineNumber: 1287,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-4 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: [
                                                            "Age ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1322,
                                                                columnNumber: 87
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1322,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        name: "age",
                                                        value: formData.age,
                                                        onChange: (e)=>{
                                                            const value = e.target.value;
                                                            if (/^\d*$/.test(value) && (value === '' || parseInt(value) >= 0 && parseInt(value) <= 100)) {
                                                                handleInputChange(e);
                                                            }
                                                        },
                                                        onKeyPress: (e)=>{
                                                            if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
                                                                e.preventDefault();
                                                            }
                                                        },
                                                        className: "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ".concat(errors.age ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'),
                                                        placeholder: "Age (0-100)",
                                                        maxLength: 3
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1323,
                                                        columnNumber: 19
                                                    }, this),
                                                    errors.age && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-red-500 text-sm mt-1",
                                                        children: errors.age
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1344,
                                                        columnNumber: 34
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1321,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "In (Year/Month/Days)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1347,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        name: "age_type",
                                                        value: formData.age_type,
                                                        onChange: handleInputChange,
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Year",
                                                                children: "Year"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1354,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Month",
                                                                children: "Month"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1355,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Days",
                                                                children: "Days"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1356,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1348,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1346,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "Gender"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1360,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        name: "gender",
                                                        value: formData.gender,
                                                        onChange: handleInputChange,
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Male",
                                                                children: "Male"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1367,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Female",
                                                                children: "Female"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1368,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1361,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1359,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "Category"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1372,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        name: "petient_type",
                                                        value: formData.petient_type,
                                                        onChange: handleCategoryChange,
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "GEN / Paid",
                                                                children: "GEN / Paid"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1379,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "IPD FREE",
                                                                children: "IPD Free"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1380,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "OPD FREE",
                                                                children: "OPD Free"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1381,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "RTA",
                                                                children: "RTA"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1382,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "RGHS",
                                                                children: "RGHS"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1383,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Chiranjeevi",
                                                                children: "Chiranjeevi"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1384,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Destitute",
                                                                children: "Destitute"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1385,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "PRISONER",
                                                                children: "PRISONER"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1386,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Sn. CITIZEN",
                                                                children: "Sn. CITIZEN"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1387,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Aayushmaan",
                                                                children: "Aayushmaan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1388,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1373,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1371,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                        lineNumber: 1320,
                                        columnNumber: 15
                                    }, this),
                                    showUniId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1396,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        name: "p_uni_submit",
                                                        value: formData.p_uni_submit,
                                                        onChange: handleInputChange,
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        placeholder: "Y / N"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1397,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1395,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "Name Of ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1407,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        name: "p_uni_id_name",
                                                        value: formData.p_uni_id_name,
                                                        onChange: handleInputChange,
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        placeholder: "ID Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1408,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1406,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "Upload ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1418,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "file",
                                                        name: "p_uni_id_scan",
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1419,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1417,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                        lineNumber: 1394,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "Address"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1429,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "address",
                                                value: formData.address,
                                                onChange: handleInputChange,
                                                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                placeholder: "Please enter your Address"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1430,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                        lineNumber: 1428,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "City"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1442,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        name: "city",
                                                        value: formData.city,
                                                        onChange: handleInputChange,
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                        placeholder: "Please enter your city"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1443,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1441,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "Contact Number"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1453,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        name: "contact_number",
                                                        value: formData.contact_number,
                                                        onChange: (e)=>{
                                                            const value = e.target.value;
                                                            if (/^\d*$/.test(value) && value.length <= 10) {
                                                                handleInputChange(e);
                                                            }
                                                        },
                                                        onKeyPress: (e)=>{
                                                            if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
                                                                e.preventDefault();
                                                            }
                                                        },
                                                        className: "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ".concat(errors.contact_number ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'),
                                                        placeholder: "10-digit mobile number",
                                                        maxLength: 10
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1454,
                                                        columnNumber: 19
                                                    }, this),
                                                    errors.contact_number && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-red-500 text-sm mt-1",
                                                        children: errors.contact_number
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1475,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1452,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                        lineNumber: 1440,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                lineNumber: 1171,
                                columnNumber: 13
                            }, this),
                            currentStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-3",
                                                children: [
                                                    "Scan Type ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1485,
                                                        columnNumber: 91
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1485,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Search scans...",
                                                    value: scanSearchTerm,
                                                    onChange: (e)=>setScanSearchTerm(e.target.value),
                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                    lineNumber: 1487,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1486,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-60 overflow-y-auto border border-gray-200 rounded-md p-4",
                                                children: [
                                                    scans.filter((scan)=>scan.s_name.toLowerCase().includes(scanSearchTerm.toLowerCase())).map((scan)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-center space-x-2 p-2 hover:bg-gray-50 rounded cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: formData.type_of_scan.includes(scan.s_id.toString()),
                                                                    onChange: (e)=>handleScanChange(scan.s_id.toString(), e.target.checked),
                                                                    className: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                    lineNumber: 1500,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm font-medium",
                                                                            children: scan.s_name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                            lineNumber: 1507,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: [
                                                                                "₹",
                                                                                scan.charges,
                                                                                " • ",
                                                                                scan.estimate_time,
                                                                                " min"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                            lineNumber: 1508,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                    lineNumber: 1506,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, scan.s_id, true, {
                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                            lineNumber: 1499,
                                                            columnNumber: 21
                                                        }, this)),
                                                    scans.filter((scan)=>scan.s_name.toLowerCase().includes(scanSearchTerm.toLowerCase())).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-span-full text-center text-gray-500 py-4",
                                                        children: "No scans found"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1515,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1495,
                                                columnNumber: 17
                                            }, this),
                                            errors.type_of_scan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-red-500 text-sm mt-1",
                                                children: errors.type_of_scan
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1518,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                        lineNumber: 1484,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-5 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "Appoint Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1523,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        name: "appoint_date",
                                                        value: formData.appoint_date,
                                                        onChange: handleAppointmentDateChange,
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1524,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1522,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: [
                                                            "Time In ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1533,
                                                                columnNumber: 91
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1533,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: timeInSearchTerm,
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50",
                                                        readOnly: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1534,
                                                        columnNumber: 19
                                                    }, this),
                                                    errors.time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-red-500 text-sm mt-1",
                                                        children: errors.time
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1540,
                                                        columnNumber: 35
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1532,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: [
                                                            "Time Out ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1543,
                                                                columnNumber: 92
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1543,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: timeOutSearchTerm,
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50",
                                                        readOnly: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1544,
                                                        columnNumber: 19
                                                    }, this),
                                                    errors.time_in && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-red-500 text-sm mt-1",
                                                        children: errors.time_in
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1550,
                                                        columnNumber: 38
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1542,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1553,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        name: "amount",
                                                        value: formData.amount,
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50",
                                                        readOnly: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1554,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1552,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "Estimated Time"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1563,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        name: "est_time",
                                                        value: formData.est_time,
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50",
                                                        readOnly: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1564,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1562,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                        lineNumber: 1521,
                                        columnNumber: 15
                                    }, this),
                                    selectedScans.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-medium text-gray-900 mb-3",
                                                children: "Selected Scans"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1576,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "overflow-x-auto",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                    className: "w-full border-collapse border border-gray-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: "bg-gray-50",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "border border-gray-300 px-4 py-2 text-left",
                                                                        children: "S.No"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                        lineNumber: 1581,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "border border-gray-300 px-4 py-2 text-left",
                                                                        children: "Name Of Scan"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                        lineNumber: 1582,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                        className: "border border-gray-300 px-4 py-2 text-left",
                                                                        children: "Charges"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                        lineNumber: 1583,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1580,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                            lineNumber: 1579,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                            children: selectedScans.map((scan, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "border border-gray-300 px-4 py-2",
                                                                            children: index + 1
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                            lineNumber: 1589,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "border border-gray-300 px-4 py-2",
                                                                            children: scan.s_name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                            lineNumber: 1590,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            className: "border border-gray-300 px-4 py-2",
                                                                            children: [
                                                                                "₹",
                                                                                scan.charges
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                            lineNumber: 1591,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, scan.s_id, true, {
                                                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                    lineNumber: 1588,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                            lineNumber: 1586,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                    lineNumber: 1578,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1577,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                        lineNumber: 1575,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                lineNumber: 1483,
                                columnNumber: 13
                            }, this),
                            currentStep === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 border-b border-gray-200",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-gray-800 flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                            className: "h-5 w-5 mr-2 text-blue-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                            lineNumber: 1608,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Patient Summary"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                    lineNumber: 1607,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1606,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-gray-50 p-3 rounded-md",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-gray-500 uppercase tracking-wide mb-1",
                                                                            children: "Patient Name"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                            lineNumber: 1616,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-sm font-semibold text-gray-900",
                                                                            children: [
                                                                                formData.pre,
                                                                                " ",
                                                                                formData.firstname
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                            lineNumber: 1617,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                    lineNumber: 1615,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-gray-50 p-3 rounded-md",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-gray-500 uppercase tracking-wide mb-1",
                                                                            children: "Age & Gender"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                            lineNumber: 1620,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-sm font-semibold text-gray-900",
                                                                            children: [
                                                                                formData.age,
                                                                                " ",
                                                                                formData.age_type,
                                                                                ", ",
                                                                                formData.gender
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                            lineNumber: 1621,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                    lineNumber: 1619,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                            lineNumber: 1614,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-gray-50 p-3 rounded-md",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-gray-500 uppercase tracking-wide mb-1",
                                                                            children: "Category"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                            lineNumber: 1627,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-sm font-semibold text-gray-900",
                                                                            children: formData.petient_type
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                            lineNumber: 1628,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                    lineNumber: 1626,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-gray-50 p-3 rounded-md",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-gray-500 uppercase tracking-wide mb-1",
                                                                            children: "Appointment Date"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                            lineNumber: 1631,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-sm font-semibold text-gray-900",
                                                                            children: formData.appoint_date.split('-').reverse().join('-')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                            lineNumber: 1632,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                    lineNumber: 1630,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                            lineNumber: 1625,
                                                            columnNumber: 21
                                                        }, this),
                                                        (formData.contact_number || formData.address) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-1 gap-4",
                                                            children: [
                                                                formData.contact_number && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-gray-50 p-3 rounded-md",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-gray-500 uppercase tracking-wide mb-1",
                                                                            children: "Contact Number"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                            lineNumber: 1640,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-sm font-semibold text-gray-900",
                                                                            children: formData.contact_number
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                            lineNumber: 1641,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                    lineNumber: 1639,
                                                                    columnNumber: 27
                                                                }, this),
                                                                formData.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-gray-50 p-3 rounded-md",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-gray-500 uppercase tracking-wide mb-1",
                                                                            children: "Address"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                            lineNumber: 1646,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-sm font-semibold text-gray-900",
                                                                            children: formData.address
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                            lineNumber: 1647,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                    lineNumber: 1645,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                            lineNumber: 1637,
                                                            columnNumber: 23
                                                        }, this),
                                                        formData.time && formData.time_in && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-blue-50 p-3 rounded-md border border-blue-200",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-blue-600 uppercase tracking-wide mb-1",
                                                                    children: "Time Slot"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                    lineNumber: 1655,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm font-semibold text-blue-900",
                                                                    children: [
                                                                        formatTimeToAMPM(formData.time),
                                                                        " - ",
                                                                        formatTimeToAMPM(formData.time_in),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "ml-2 text-xs text-blue-600",
                                                                            children: [
                                                                                "(",
                                                                                formData.est_time,
                                                                                " min estimated)"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                            lineNumber: 1658,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                    lineNumber: 1656,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                            lineNumber: 1654,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                    lineNumber: 1613,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1612,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                        lineNumber: 1605,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white border border-gray-300 rounded-lg overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gray-100 px-4 py-3 border-b border-gray-300",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-semibold text-gray-800",
                                                    children: "Payment Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                    lineNumber: 1668,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1667,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 space-y-4",
                                                children: [
                                                    selectedScans.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "border border-gray-200 rounded",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-gray-50 px-3 py-2 border-b border-gray-200",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium text-sm",
                                                                    children: "Selected Scans"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                    lineNumber: 1676,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1675,
                                                                columnNumber: 23
                                                            }, this),
                                                            selectedScans.map((scan, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "px-3 py-2 border-b border-gray-100 last:border-b-0 flex justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm",
                                                                            children: [
                                                                                index + 1,
                                                                                ". ",
                                                                                scan.s_name
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                            lineNumber: 1680,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm font-medium",
                                                                            children: [
                                                                                "₹",
                                                                                scan.charges
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                            lineNumber: 1681,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, scan.s_id, true, {
                                                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                    lineNumber: 1679,
                                                                    columnNumber: 25
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1674,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                                        children: "Total Amount"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                        lineNumber: 1690,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        name: "total_amount",
                                                                        value: "₹".concat(formData.total_amount),
                                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 font-semibold",
                                                                        readOnly: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                        lineNumber: 1691,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1689,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                                        children: "Received Amount"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                        lineNumber: 1700,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        name: "rec_amount",
                                                                        value: formData.rec_amount,
                                                                        max: formData.total_amount,
                                                                        onChange: (e)=>{
                                                                            const total = parseFloat(formData.total_amount) || 0;
                                                                            const received = parseFloat(e.target.value) || 0;
                                                                            // For GEN/Paid category, validate received amount
                                                                            if (formData.petient_type === 'GEN / Paid') {
                                                                                if (received > total) {
                                                                                    return;
                                                                                }
                                                                            }
                                                                            const discount = parseFloat(formData.dis_amount) || 0;
                                                                            const due = total - received - discount;
                                                                            setFormData((prev)=>({
                                                                                    ...prev,
                                                                                    rec_amount: e.target.value,
                                                                                    due_amount: due.toString()
                                                                                }));
                                                                        },
                                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 ".concat(formData.petient_type !== 'GEN / Paid' ? 'bg-gray-50' : ''),
                                                                        placeholder: "0",
                                                                        readOnly: formData.petient_type !== 'GEN / Paid'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                        lineNumber: 1701,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1699,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                                        children: "Discount"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                        lineNumber: 1729,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        name: "dis_amount",
                                                                        value: formData.dis_amount,
                                                                        onChange: (e)=>{
                                                                            const total = parseFloat(formData.total_amount) || 0;
                                                                            const received = parseFloat(formData.rec_amount) || 0;
                                                                            const discount = parseFloat(e.target.value) || 0;
                                                                            const due = total - received - discount;
                                                                            setFormData((prev)=>({
                                                                                    ...prev,
                                                                                    dis_amount: e.target.value,
                                                                                    due_amount: due.toString()
                                                                                }));
                                                                        },
                                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500",
                                                                        placeholder: "0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                        lineNumber: 1730,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1728,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                                        children: "Due Amount"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                        lineNumber: 1746,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        name: "due_amount",
                                                                        value: "₹".concat(formData.due_amount),
                                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md font-semibold ".concat(parseFloat(formData.due_amount) > 0 ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'),
                                                                        readOnly: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                        lineNumber: 1747,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                                lineNumber: 1745,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1688,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center p-3 rounded-md ".concat(isPrintEnabled() ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold ".concat(isPrintEnabled() ? 'text-green-700' : 'text-red-700'),
                                                            children: isPrintEnabled() ? 'Ready to print' : 'Payment Required - Complete payment to enable printing'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                            lineNumber: 1763,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                        lineNumber: 1760,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1671,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                        lineNumber: 1666,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                lineNumber: 1604,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between pt-6 border-t border-gray-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: prevStep,
                                        disabled: currentStep === 1,
                                        className: "flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1784,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Previous"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                lineNumber: 1785,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                        lineNumber: 1778,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex space-x-2",
                                        children: currentStep < 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: nextStep,
                                            className: "flex items-center space-x-2 px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Next"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                    lineNumber: 1795,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                    lineNumber: 1796,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                            lineNumber: 1790,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>handleSubmit('Save'),
                                                    disabled: isSaved,
                                                    className: "flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-lg transition-all duration-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "h-5 w-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                            lineNumber: 1806,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: isSaved ? 'SAVED' : 'SAVE'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                            lineNumber: 1807,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                    lineNumber: 1800,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>handleSubmit('Print'),
                                                    disabled: !isSaved,
                                                    className: "flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-lg transition-all duration-200",
                                                    title: isSaved ? 'Print Receipt' : 'Save patient first to enable printing',
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                            className: "h-5 w-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                            lineNumber: 1816,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "PRINT"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                            lineNumber: 1817,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                    lineNumber: 1809,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        const confirmed = window.confirm('Are you sure you want to exit? Any unsaved changes will be lost.');
                                                        if (confirmed) {
                                                            if (toast && typeof toast.info === 'function') {
                                                                toast.info('Exiting patient registration');
                                                            }
                                                            window.location.href = '/reception/patient-registration';
                                                        }
                                                    },
                                                    className: "flex items-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium shadow-lg transition-all duration-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                            className: "h-5 w-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                            lineNumber: 1832,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "EXIT"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                            lineNumber: 1833,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                                    lineNumber: 1819,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                        lineNumber: 1788,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                                lineNumber: 1777,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                        lineNumber: 1168,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
                lineNumber: 1128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/reception/patient-registration/new/page.tsx",
        lineNumber: 1112,
        columnNumber: 5
    }, this);
}
_s(NewPatientRegistration, "F9NKEHiy7N/yGWFXFaFVg5oGOt0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToastContext"]
    ];
});
_c = NewPatientRegistration;
var _c;
__turbopack_context__.k.register(_c, "NewPatientRegistration");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_reception_patient-registration_new_page_tsx_ec4508dc._.js.map