'use client';

import { useState, useEffect } from 'react';
import { User, Calendar, FileText, Plus, ArrowLeft, ArrowRight, Check, ChevronDown } from 'lucide-react';
import SuperAdminLayout from '@/components/SuperAdminLayout';
import LastEnrolledPatient from '@/components/LastEnrolledPatient';
import { useToastContext } from '@/context/ToastContext';

interface FormData {
  // Step 1 - Enrollment Details
  date: string;
  hospital_name: string;
  doctor_name: string;
  pre: string;
  firstname: string;
  age: string;
  age_type: string;
  gender: string;
  petient_type: string;
  p_uni_submit: string;
  p_uni_id_name: string;
  address: string;
  city: string;
  contact_number: string;
  
  // Step 2 - Scan Options
  type_of_scan: string[];
  appoint_date: string;
  time: string;
  time_in: string;
  amount: string;
  est_time: string;
  
  // Step 3 - Payment Details
  total_amount: string;
  rec_amount: string;
  dis_amount: string;
  due_amount: string;
}

interface Hospital {
  h_id: number;
  h_name: string;
}

interface Doctor {
  d_id: number;
  dname: string;
}

interface Scan {
  s_id: number;
  s_name: string;
  charges: number;
  estimate_time: string;
}

export default function AdminPatientNew() {
  const toast = useToastContext();
  const [currentStep, setCurrentStep] = useState(1);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editPatientId, setEditPatientId] = useState<string | null>(null);
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [scans, setScans] = useState<Scan[]>([]);
  const [selectedScans, setSelectedScans] = useState<Scan[]>([]);
  const [showUniId, setShowUniId] = useState(false);
  const [scanSearchTerm, setScanSearchTerm] = useState('');
  const [hospitalSearchTerm, setHospitalSearchTerm] = useState('');
  const [doctorSearchTerm, setDoctorSearchTerm] = useState('');
  const [showHospitalDropdown, setShowHospitalDropdown] = useState(false);
  const [showDoctorDropdown, setShowDoctorDropdown] = useState(false);
  const [showTimeInDropdown, setShowTimeInDropdown] = useState(false);
  const [showTimeOutDropdown, setShowTimeOutDropdown] = useState(false);
  const [timeInSearchTerm, setTimeInSearchTerm] = useState('');
  const [timeOutSearchTerm, setTimeOutSearchTerm] = useState('');
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [lastPatient, setLastPatient] = useState<{cro: string, patient_name: string} | null>(null);
  const [timeSlots, setTimeSlots] = useState<{time_id: number, time_slot: string}[]>([]);
  const [isSaved, setIsSaved] = useState(false);
  const [savedPatientData, setSavedPatientData] = useState<any>(null);
  
  const [formData, setFormData] = useState<FormData>({
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

  useEffect(() => {
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
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.relative')) {
        setShowHospitalDropdown(false);
        setShowDoctorDropdown(false);
        setShowTimeInDropdown(false);
        setShowTimeOutDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const fetchHospitals = async () => {
    try {
      const response = await fetch('https://varahasdc.co.in/api/admin/hospitals');
      if (response.ok) {
        const data = await response.json();
        setHospitals(data.data || []);
      }
    } catch (error) {
      console.error('Error fetching hospitals:', error);
    }
  };

  const fetchDoctors = async () => {
    try {
      const response = await fetch('https://varahasdc.co.in/api/admin/doctors');
      if (response.ok) {
        const data = await response.json();
        setDoctors(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  const fetchScans = async () => {
    try {
      const response = await fetch('https://varahasdc.co.in/api/admin/scans');
      if (response.ok) {
        const data = await response.json();
        setScans(data.success ? data.data : []);
      }
    } catch (error) {
      console.error('Error fetching scans:', error);
    }
  };

  const fetchTimeSlots = async () => {
    try {
      const response = await fetch('https://varahasdc.co.in/api/admin/time-slots');
      if (response.ok) {
        const data = await response.json();
        const slots = Array.isArray(data) ? data : [];
        setTimeSlots(slots);
      } else {
        generateFallbackTimeSlots();
      }
    } catch (error) {
      console.error('Error fetching time slots:', error);
      generateFallbackTimeSlots();
    }
  };

  const generateFallbackTimeSlots = () => {
    const fallbackSlots = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const time24 = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        const timeAMPM = formatTimeToAMPM(time24);
        fallbackSlots.push({
          time_id: fallbackSlots.length + 1,
          time_slot: timeAMPM
        });
      }
    }
    setTimeSlots(fallbackSlots);
  };

  const fetchLastPatient = async () => {
    try {
      const response = await fetch('https://varahasdc.co.in/api/admin/patients/last-enrolled');
      if (response.ok) {
        const data = await response.json();
        setLastPatient(data.data);
      }
    } catch (error) {
      console.error('Error fetching last patient:', error);
    }
  };

  const [patientData, setPatientData] = useState<any>(null);

  const fetchPatientData = async (patientId: string) => {
    try {
      const response = await fetch(`https://varahasdc.co.in/api/admin/patients/${patientId}`);
      if (response.ok) {
        const data = await response.json();
        setPatientData(data.data);
      }
    } catch (error) {
      console.error('Error fetching patient data:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    
    // Handle category change for ID requirement
    if (name === 'petient_type') {
      const freeCategories = ['IPD FREE', 'OPD FREE', 'RTA', 'RGHS', 'Chiranjeevi', 'Destitute', 'PRISONER', 'Sn. CITIZEN', 'Aayushmaan'];
      setShowUniId(freeCategories.includes(value));
      
      // Recalculate amounts based on category
      const scanAmount = selectedScans.reduce((sum, scan) => sum + scan.charges, 0);
      
      if (value === 'GEN / Paid') {
        setFormData(prev => ({
          ...prev,
          total_amount: scanAmount.toString(),
          amount: scanAmount.toString(),
          rec_amount: scanAmount.toString(),
          due_amount: '0'
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          total_amount: scanAmount.toString(),
          amount: scanAmount.toString(),
          rec_amount: '0',
          due_amount: '0'
        }));
      }
    }
  };

  // Convert 24-hour time to 12-hour AM/PM format
  const formatTimeToAMPM = (time24: string) => {
    const [hours, minutes] = time24.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12;
    return `${hours12.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`;
  };

  // Convert 12-hour AM/PM time to 24-hour format
  const convertAMPMTo24 = (timeAMPM: string) => {
    const [time, period] = timeAMPM.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    let hours24 = hours;
    
    if (period === 'PM' && hours !== 12) {
      hours24 += 12;
    } else if (period === 'AM' && hours === 12) {
      hours24 = 0;
    }
    
    return `${hours24.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  const calculateTimeOut = (timeIn: string, estimatedMinutes: number) => {
    if (!timeIn || !estimatedMinutes) return;
    
    // Parse time in format HH:MM
    const [hours, minutes] = timeIn.split(':').map(Number);
    const timeInDate = new Date();
    timeInDate.setHours(hours, minutes, 0, 0);
    
    // Add estimated minutes
    const timeOutDate = new Date(timeInDate.getTime() + estimatedMinutes * 60000);
    
    // Format back to HH:MM
    const timeOut = `${timeOutDate.getHours().toString().padStart(2, '0')}:${timeOutDate.getMinutes().toString().padStart(2, '0')}`;
    
    setFormData(prev => ({
      ...prev,
      time_in: timeOut
    }));
    setTimeOutSearchTerm(formatTimeToAMPM(timeOut));
  };

  // Get current time when appointment date changes
  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  };

  // Handle appointment date change
  const handleAppointmentDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Always set current time as default for Time In
    const currentTime = getCurrentTime();
    
    setFormData(prev => ({ ...prev, time: currentTime }));
    setTimeInSearchTerm(formatTimeToAMPM(currentTime));
    
    // Auto calculate time out if estimated time is available
    const estimatedTime = parseInt(formData.est_time) || 0;
    if (estimatedTime > 0) {
      calculateTimeOut(currentTime, estimatedTime);
    }
  };

  const handleScanChange = (scanId: string, checked: boolean) => {
    let newSelectedScans = [...formData.type_of_scan];
    
    if (checked) {
      newSelectedScans.push(scanId);
    } else {
      newSelectedScans = newSelectedScans.filter(id => id !== scanId);
    }
    
    setFormData(prev => ({ ...prev, type_of_scan: newSelectedScans }));
    
    // Calculate totals
    const selected = scans.filter(scan => newSelectedScans.includes(scan.s_id.toString()));
    setSelectedScans(selected);
    
    const totalAmount = selected.reduce((sum, scan) => sum + scan.charges, 0);
    const totalTime = selected.reduce((sum, scan) => {
      const timeMatch = scan.estimate_time?.match(/(\d+)/);
      return sum + (timeMatch ? parseInt(timeMatch[1]) : 0);
    }, 0);
    
    const scanAmount = totalAmount;
    
    setFormData(prev => {
      let newFormData;
      
      if (prev.petient_type === 'GEN / Paid') {
        newFormData = {
          ...prev,
          amount: scanAmount.toString(),
          est_time: totalTime.toString(),
          total_amount: scanAmount.toString(),
          rec_amount: scanAmount.toString(),
          due_amount: '0'
        };
      } else {
        newFormData = {
          ...prev,
          amount: scanAmount.toString(),
          est_time: totalTime.toString(),
          total_amount: scanAmount.toString(),
          rec_amount: '0',
          due_amount: '0'
        };
      }
      
      return newFormData;
    });
    
    // Auto calculate time out if time in is selected
    if (formData.time && totalTime > 0) {
      calculateTimeOut(formData.time, totalTime);
    }
  };

  const isPrintEnabled = () => {
    const freeCategories = ['Destitute', 'Chiranjeevi', 'RGHS', 'RTA', 'OPD FREE', 'IPD FREE', 'BPL/POOR', 'Sn. CITIZEN', 'BHAMASHAH', 'JSSY', 'PRISONER', 'Aayushmaan'];
    if (freeCategories.includes(formData.petient_type)) {
      return true;
    }
    const dueAmount = parseFloat(formData.due_amount) || 0;
    return dueAmount === 0;
  };

  const validateStep = (step: number) => {
    const newErrors: {[key: string]: string} = {};
    
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

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (action: string) => {
    if (action === 'Print') {
      if (savedPatientData) {
        printReceipt(savedPatientData);
        toast.info('Receipt printed successfully!');
        setTimeout(() => {
          window.location.href = '/admin/patient-new';
        }, 2000);
      }
      return;
    }

    try {
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
        response = await fetch(`https://varahasdc.co.in/api/admin/patients/${editPatientId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submitData)
        });
      } else {
        response = await fetch('https://varahasdc.co.in/api/admin/patients', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submitData)
        });
      }
      
      if (response.ok) {
        const result = await response.json();
        const cro = result.data?.cro || (isEditMode ? 'Updated' : 'Registered');
        
        setIsSaved(true);
        setSavedPatientData(result.data);
        toast.success(`Patient ${isEditMode ? 'updated' : 'registered'} successfully! CRO: ${cro}`);
      } else {
        const errorData = await response.json().catch(() => ({}));
        toast.error(`Error: ${errorData.error || (isEditMode ? 'Failed to update patient' : 'Failed to register patient')}`);
      }
    } catch (error) {
      console.error('Error saving patient:', error);
      toast.error(isEditMode ? 'Error updating patient' : 'Error saving patient');
    }
  };

  const resetForm = () => {
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
    
    setHospitalSearchTerm('');
    setDoctorSearchTerm('');
    setTimeInSearchTerm('');
    setTimeOutSearchTerm('');
    setScanSearchTerm('');
    setSelectedScans([]);
    setCurrentStep(1);
    fetchLastPatient();
  };

  const numberToWords = (num: number): string => {
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    if (num === 0) return 'zero';
    if (num < 10) return ones[num];
    if (num < 20) return teens[num - 10];
    if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 ? ' ' + ones[num % 10] : '');
    if (num < 1000) return ones[Math.floor(num / 100)] + ' hundred' + (num % 100 ? ' ' + numberToWords(num % 100) : '');
    if (num < 100000) return numberToWords(Math.floor(num / 1000)) + ' thousand' + (num % 1000 ? ' ' + numberToWords(num % 1000) : '');
    
    return num.toString();
  };

  const printReceipt = (patientData: any) => {
    const currentDate = new Date().toLocaleDateString('en-GB');
    const investigations = selectedScans.map(scan => scan.s_name).join(', ');
    const amountInWords = numberToWords(parseInt(formData.rec_amount || formData.total_amount)).toUpperCase();
    
    const printContent = `
<!DOCTYPE html>
<html>
<head>
<title>Receipt - ${patientData.cro || 'New Patient'}</title>
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
      <td width="200"><span class="form_input_box"><input type="text" class="form_input" value="${patientData.cro || ''}(${patientData.patient_id || ''})"></span></td>
      <td colspan="6"><span style="margin-left:30%; border: 1px solid #02C; border-radius: 11px;padding: 3px 15px;">Cash Receipt</span></td>
      <td width="36">Date</td>
      <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="${currentDate}"></span></td>
    </tr>
  </table>
  
  <table>
    <tr>
      <td width="78">Patient Name:</td>
      <td width="650"><span class="form_input_box"><input type="text" class="form_input" value="${formData.pre} ${formData.firstname}"></span></td>
      <td width="33">Age :</td>
      <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="${formData.age}"></span></td>
      <td width="36">Gender</td>
      <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="${formData.gender}"></span></td>
    </tr>
  </table>
  
  <table>
    <tr>
      <td width="59">Investigations:</td>
      <td width="1042"><span class="form_input_box"><input type="text" class="form_input" value="${investigations}"></span></td>
    </tr>
  </table>
  
  <table>
    <tr>
      <td width="129">For Sum Of Rupees:</td>
      <td width="733"><span class="form_input_box"><input type="text" class="form_input" value="${amountInWords} RUPEES ONLY"></span></td>
      <td width="147"><label>Scan Amount</label><input type="text" value="₹ ${formData.total_amount}" style="border:1px solid #5E60AE;"></td>
      <td width="147"><label>Received Amount</label><input type="text" value="₹ ${formData.rec_amount}" style="border:1px solid #5E60AE;"></td>
    </tr>
  </table>
  
  <table>
    <tr>
      <td colspan="6" align="right" style="padding-top: 20px;">For Varaha SDC, Jodhpur</td>
    </tr>
    <tr>
      <td colspan="6" align="right" style="padding-top: 30px;">Signature</td>
    </tr>
  </table>
</div>

<div style="page-break-before: always;"></div>

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
      <td width="200"><span class="form_input_box"><input type="text" class="form_input" value="${patientData.cro || ''}(${patientData.patient_id || ''})"></span></td>
      <td colspan="6"><span style="margin-left:30%; border: 1px solid #02C; border-radius: 11px;padding: 3px 15px;">Cash Receipt</span></td>
      <td width="36">Date</td>
      <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="${currentDate}"></span></td>
    </tr>
  </table>
  
  <table>
    <tr>
      <td width="78">Patient Name:</td>
      <td width="650"><span class="form_input_box"><input type="text" class="form_input" value="${formData.pre} ${formData.firstname}"></span></td>
      <td width="33">Age :</td>
      <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="${formData.age}"></span></td>
      <td width="36">Gender</td>
      <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="${formData.gender}"></span></td>
    </tr>
  </table>
  
  <table>
    <tr>
      <td width="59">Investigations:</td>
      <td width="1042"><span class="form_input_box"><input type="text" class="form_input" value="${investigations}"></span></td>
    </tr>
  </table>
  
  <table>
    <tr>
      <td width="129">For Sum Of Rupees:</td>
      <td width="733"><span class="form_input_box"><input type="text" class="form_input" value="${amountInWords} RUPEES ONLY"></span></td>
      <td width="147"><label>Scan Amount</label><input type="text" value="₹ ${formData.total_amount}" style="border:1px solid #5E60AE;"></td>
      <td width="147"><label>Received Amount</label><input type="text" value="₹ ${formData.rec_amount}" style="border:1px solid #5E60AE;"></td>
    </tr>
  </table>
  
  <table>
    <tr>
      <td colspan="6" align="right" style="padding-top: 20px;">For Varaha SDC, Jodhpur</td>
    </tr>
    <tr>
      <td colspan="6" align="right" style="padding-top: 30px;">Signature</td>
    </tr>
  </table>
</div>
</body>
</html>`;
    
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(printContent);
      printWindow.document.close();
    }
  };

  return (
    <SuperAdminLayout 
      title="New Patient Registration" 
      subtitle="Complete patient enrollment and scan booking"
      actions={
        <LastEnrolledPatient />
      }
    >
      <div className="space-y-6">

        <div className="bg-white rounded-xl shadow-lg border border-gray-100">
          {/* Step Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                className={`flex-1 py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  currentStep === 1 
                    ? 'border-red-500 text-red-600 bg-red-50' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setCurrentStep(1)}
              >
                1. Enrollment Detail
              </button>
              <button
                className={`flex-1 py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  currentStep === 2 
                    ? 'border-red-500 text-red-600 bg-red-50' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setCurrentStep(2)}
              >
                2. Scan Options
              </button>
              <button
                className={`flex-1 py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  currentStep === 3 
                    ? 'border-red-500 text-red-600 bg-red-50' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setCurrentStep(3)}
              >
                3. Payment Details
              </button>
            </nav>
          </div>

          <form className="p-6">
            {/* Step 1: Enrollment Details */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <input
                      type="text"
                      name="date"
                      value={formData.date.split('-').reverse().join('-')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                      readOnly
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Hospital Name <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <input
                        type="text"
                        value={hospitalSearchTerm}
                        onChange={(e) => {
                          setHospitalSearchTerm(e.target.value);
                          setShowHospitalDropdown(true);
                        }}
                        onFocus={() => setShowHospitalDropdown(true)}
                        className={`w-full px-3 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 ${
                          errors.hospital_name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-500'
                        }`}
                        placeholder="Search and select hospital"
                        required
                      />
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                    {showHospitalDropdown && (
                      <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg">
                        {hospitals
                          .filter(hospital => 
                            hospital.h_name.toLowerCase().includes(hospitalSearchTerm.toLowerCase())
                          )
                          .map(hospital => (
                            <div
                              key={hospital.h_id}
                              className="px-3 py-2 hover:bg-red-50 cursor-pointer"
                              onClick={() => {
                                setFormData(prev => ({ ...prev, hospital_name: hospital.h_id.toString() }));
                                setHospitalSearchTerm(hospital.h_name);
                                setShowHospitalDropdown(false);
                                if (errors.hospital_name) {
                                  setErrors(prev => ({ ...prev, hospital_name: '' }));
                                }
                              }}
                            >
                              {hospital.h_name}
                            </div>
                          ))
                        }
                      </div>
                    )}
                    {errors.hospital_name && <p className="text-red-500 text-sm mt-1">{errors.hospital_name}</p>}
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Doctor Name <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <input
                        type="text"
                        value={doctorSearchTerm}
                        onChange={(e) => {
                          setDoctorSearchTerm(e.target.value);
                          setShowDoctorDropdown(true);
                        }}
                        onFocus={() => setShowDoctorDropdown(true)}
                        className={`w-full px-3 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 ${
                          errors.doctor_name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-500'
                        }`}
                        placeholder="Search and select doctor"
                        required
                      />
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                    {showDoctorDropdown && (
                      <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg">
                        {doctors
                          .filter(doctor => 
                            doctor.dname.toLowerCase().includes(doctorSearchTerm.toLowerCase())
                          )
                          .map(doctor => (
                            <div
                              key={doctor.d_id}
                              className="px-3 py-2 hover:bg-red-50 cursor-pointer"
                              onClick={() => {
                                setFormData(prev => ({ ...prev, doctor_name: doctor.d_id.toString() }));
                                setDoctorSearchTerm(doctor.dname);
                                setShowDoctorDropdown(false);
                                if (errors.doctor_name) {
                                  setErrors(prev => ({ ...prev, doctor_name: '' }));
                                }
                              }}
                            >
                              {doctor.dname}
                            </div>
                          ))
                        }
                      </div>
                    )}
                    {errors.doctor_name && <p className="text-red-500 text-sm mt-1">{errors.doctor_name}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name <span className="text-red-500">*</span></label>
                    <select
                      name="pre"
                      value={formData.pre}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="Mr.">Mr.</option>
                      <option value="Mrs.">Mrs.</option>
                      <option value="Master">Master</option>
                      <option value="Miss">Miss</option>
                      <option value="Baby">Baby</option>
                    </select>
                  </div>
                  <div className="md:col-span-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">&nbsp;</label>
                    <input
                      type="text"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                        errors.firstname ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-500'
                      }`}
                      placeholder="Please enter your First name"
                      required
                    />
                    {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Age <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="age"
                      value={formData.age}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^\d*$/.test(value) && (value === '' || (parseInt(value) >= 0 && parseInt(value) <= 100))) {
                          handleInputChange(e);
                        }
                      }}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                        errors.age ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-500'
                      }`}
                      placeholder="Age (0-100)"
                      maxLength={3}
                    />
                    {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">In (Year/Month/Days)</label>
                    <select
                      name="age_type"
                      value={formData.age_type}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="Year">Year</option>
                      <option value="Month">Month</option>
                      <option value="Days">Days</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select
                      name="petient_type"
                      value={formData.petient_type}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="GEN / Paid">GEN / Paid</option>
                      <option value="IPD FREE">IPD Free</option>
                      <option value="OPD FREE">OPD Free</option>
                      <option value="RTA">RTA</option>
                      <option value="RGHS">RGHS</option>
                      <option value="Chiranjeevi">Chiranjeevi</option>
                      <option value="Destitute">Destitute</option>
                      <option value="PRISONER">PRISONER</option>
                      <option value="Sn. CITIZEN">Sn. CITIZEN</option>
                      <option value="Aayushmaan">Aayushmaan</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Please enter your Address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Please enter your city"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                    <input
                      type="text"
                      name="contact_number"
                      value={formData.contact_number}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^\d*$/.test(value) && value.length <= 10) {
                          handleInputChange(e);
                        }
                      }}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                        errors.contact_number ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-500'
                      }`}
                      placeholder="10-digit mobile number"
                      maxLength={10}
                    />
                    {errors.contact_number && <p className="text-red-500 text-sm mt-1">{errors.contact_number}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Scan Options */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Scan Type <span className="text-red-500">*</span></label>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Search scans..."
                      value={scanSearchTerm}
                      onChange={(e) => setScanSearchTerm(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 mb-3"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-60 overflow-y-auto border border-gray-200 rounded-md p-4">
                    {scans.filter(scan => 
                      scan.s_name.toLowerCase().includes(scanSearchTerm.toLowerCase())
                    ).map(scan => (
                      <label key={scan.s_id} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.type_of_scan.includes(scan.s_id.toString())}
                          onChange={(e) => handleScanChange(scan.s_id.toString(), e.target.checked)}
                          className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                        />
                        <div className="flex-1">
                          <span className="text-sm font-medium">{scan.s_name}</span>
                          <div className="text-xs text-gray-500">₹{scan.charges} • {scan.estimate_time} min</div>
                        </div>
                      </label>
                    ))}
                  </div>
                  {errors.type_of_scan && <p className="text-red-500 text-sm mt-1">{errors.type_of_scan}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Appoint Date</label>
                    <input
                      type="date"
                      name="appoint_date"
                      value={formData.appoint_date}
                      onChange={handleAppointmentDateChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Time In <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <input
                        type="text"
                        value={timeInSearchTerm}
                        onChange={(e) => {
                          setTimeInSearchTerm(e.target.value);
                          setShowTimeInDropdown(true);
                        }}
                        onFocus={() => setShowTimeInDropdown(true)}
                        className={`w-full px-3 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 ${
                          errors.time ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-500'
                        }`}
                        placeholder="Search and select time"
                        required
                      />
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                    {showTimeInDropdown && (
                      <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg">
                        {timeSlots
                          .filter(slot => 
                            slot.time_slot.toLowerCase().includes(timeInSearchTerm.toLowerCase())
                          )
                          .map(slot => (
                            <div
                              key={slot.time_id}
                              className="px-3 py-2 hover:bg-red-50 cursor-pointer"
                              onClick={() => {
                                const time24 = convertAMPMTo24(slot.time_slot);
                                setFormData(prev => ({ ...prev, time: time24 }));
                                setTimeInSearchTerm(slot.time_slot);
                                setShowTimeInDropdown(false);
                                if (errors.time) {
                                  setErrors(prev => ({ ...prev, time: '' }));
                                }
                                // Auto calculate time out
                                const estimatedTime = parseInt(formData.est_time) || 0;
                                if (estimatedTime > 0) {
                                  calculateTimeOut(time24, estimatedTime);
                                }
                              }}
                            >
                              {slot.time_slot}
                            </div>
                          ))}
                      </div>
                    )}
                    {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Time Out <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <input
                        type="text"
                        value={timeOutSearchTerm}
                        onChange={(e) => {
                          setTimeOutSearchTerm(e.target.value);
                          setShowTimeOutDropdown(true);
                        }}
                        onFocus={() => setShowTimeOutDropdown(true)}
                        className={`w-full px-3 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 ${
                          errors.time_in ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-500'
                        }`}
                        placeholder="Search and select time"
                        required
                      />
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                    {showTimeOutDropdown && (
                      <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg">
                        {timeSlots
                          .filter(slot => 
                            slot.time_slot.toLowerCase().includes(timeOutSearchTerm.toLowerCase())
                          )
                          .map(slot => (
                            <div
                              key={slot.time_id}
                              className="px-3 py-2 hover:bg-red-50 cursor-pointer"
                              onClick={() => {
                                const time24 = convertAMPMTo24(slot.time_slot);
                                setFormData(prev => ({ ...prev, time_in: time24 }));
                                setTimeOutSearchTerm(slot.time_slot);
                                setShowTimeOutDropdown(false);
                                if (errors.time_in) {
                                  setErrors(prev => ({ ...prev, time_in: '' }));
                                }
                              }}
                            >
                              {slot.time_slot}
                            </div>
                          ))}
                      </div>
                    )}
                    {errors.time_in && <p className="text-red-500 text-sm mt-1">{errors.time_in}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                    <input
                      type="text"
                      name="amount"
                      value={formData.amount}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Time</label>
                    <input
                      type="text"
                      name="est_time"
                      value={formData.est_time}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                      readOnly
                    />
                  </div>
                </div>

                {selectedScans.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Selected Scans</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-300 px-4 py-2 text-left">S.No</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Name Of Scan</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Charges</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedScans.map((scan, index) => (
                            <tr key={scan.s_id}>
                              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                              <td className="border border-gray-300 px-4 py-2">{scan.s_name}</td>
                              <td className="border border-gray-300 px-4 py-2">₹{scan.charges}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Payment Details */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <div className="bg-gradient-to-r from-red-50 to-red-50 px-4 py-3 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                      <User className="h-5 w-5 mr-2 text-red-600" />
                      Patient Summary
                    </h3>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-md">
                        <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Patient Name</div>
                        <div className="text-sm font-semibold text-gray-900">{formData.pre} {formData.firstname}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md">
                        <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Age & Gender</div>
                        <div className="text-sm font-semibold text-gray-900">{formData.age} {formData.age_type}, {formData.gender}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md">
                        <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Category</div>
                        <div className="text-sm font-semibold text-gray-900">{formData.petient_type}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md">
                        <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Appointment Date</div>
                        <div className="text-sm font-semibold text-gray-900">{formData.appoint_date.split('-').reverse().join('-')}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
                  <div className="bg-gray-100 px-4 py-3 border-b border-gray-300">
                    <h4 className="font-semibold text-gray-800">Payment Details</h4>
                  </div>
                  
                  <div className="p-4 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Total Amount</label>
                        <input
                          type="text"
                          name="total_amount"
                          value={`₹${formData.total_amount}`}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 font-semibold"
                          readOnly
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Received Amount</label>
                        <input
                          type="number"
                          name="rec_amount"
                          value={formData.rec_amount}
                          onChange={(e) => {
                            const total = parseFloat(formData.total_amount) || 0;
                            const received = parseFloat(e.target.value) || 0;
                            const discount = parseFloat(formData.dis_amount) || 0;
                            const due = total - received - discount;
                            setFormData(prev => ({ ...prev, rec_amount: e.target.value, due_amount: due.toString() }));
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Discount</label>
                        <input
                          type="number"
                          name="dis_amount"
                          value={formData.dis_amount}
                          onChange={(e) => {
                            const total = parseFloat(formData.total_amount) || 0;
                            const received = parseFloat(formData.rec_amount) || 0;
                            const discount = parseFloat(e.target.value) || 0;
                            const due = total - received - discount;
                            setFormData(prev => ({ ...prev, dis_amount: e.target.value, due_amount: due.toString() }));
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                          placeholder="0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Due Amount</label>
                        <input
                          type="text"
                          name="due_amount"
                          value={`₹${formData.due_amount}`}
                          className={`w-full px-3 py-2 border border-gray-300 rounded-md font-semibold ${
                            parseFloat(formData.due_amount) > 0 ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'
                          }`}
                          readOnly
                        />
                      </div>
                    </div>
                    
                    <div className={`text-center p-3 rounded-md ${
                      isPrintEnabled() ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                    }`}>
                      <span className={`font-semibold ${
                        isPrintEnabled() ? 'text-green-700' : 'text-red-700'
                      }`}>
                        {isPrintEnabled() 
                          ? 'Ready to print' 
                          : 'Payment Required - Complete payment to enable printing'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Previous</span>
              </button>

              <div className="flex space-x-2">
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                  >
                    <span>Next</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => handleSubmit('Save')}
                      disabled={isSaved}
                      className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-lg transition-all duration-200"
                    >
                      <Check className="h-5 w-5" />
                      <span>{isSaved ? 'SAVED' : 'SAVE'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSubmit('Print')}
                      disabled={!isSaved}
                      className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-lg transition-all duration-200"
                      title={isSaved ? 'Print Receipt' : 'Save patient first to enable printing'}
                    >
                      <FileText className="h-5 w-5" />
                      <span>PRINT</span>
                    </button>
                  </>
                )
              </div>
            </div>
          </form>
        </div>
      </div>
    </SuperAdminLayout>
  );
}