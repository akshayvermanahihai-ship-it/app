'use client';

import { useState, useEffect } from 'react';
import { User, Calendar, FileText, Plus, ArrowLeft, ArrowRight, Check, ChevronDown } from 'lucide-react';
import SuperAdminLayout from '@/components/SuperAdminLayout';
import LastEnrolledPatient from '@/components/LastEnrolledPatient';
import { useToastContext } from '@/context/ToastContext';

interface FormData {
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
  type_of_scan: string[];
  appoint_date: string;
  time: string;
  time_in: string;
  amount: string;
  est_time: string;
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
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [scans, setScans] = useState<Scan[]>([]);
  const [selectedScans, setSelectedScans] = useState<Scan[]>([]);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleScanChange = (scanId: string, checked: boolean) => {
    let newSelectedScans = [...formData.type_of_scan];
    
    if (checked) {
      newSelectedScans.push(scanId);
    } else {
      newSelectedScans = newSelectedScans.filter(id => id !== scanId);
    }
    
    setFormData(prev => ({ ...prev, type_of_scan: newSelectedScans }));
    
    const selected = scans.filter(scan => newSelectedScans.includes(scan.s_id.toString()));
    setSelectedScans(selected);
    
    const totalAmount = selected.reduce((sum, scan) => sum + scan.charges, 0);
    
    setFormData(prev => ({
      ...prev,
      amount: totalAmount.toString(),
      total_amount: totalAmount.toString(),
      rec_amount: prev.petient_type === 'GEN / Paid' ? totalAmount.toString() : '0',
      due_amount: '0'
    }));
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
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

      const response = await fetch('https://varahasdc.co.in/api/admin/patients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData)
      });
      
      if (response.ok) {
        const result = await response.json();
        const cro = result.data?.cro || 'Registered';
        
        setIsSaved(true);
        setSavedPatientData(result.data);
        toast.success(`Patient registered successfully! CRO: ${cro}`);
      } else {
        const errorData = await response.json().catch(() => ({}));
        toast.error(`Error: ${errorData.error || 'Failed to register patient'}`);
      }
    } catch (error) {
      console.error('Error saving patient:', error);
      toast.error('Error saving patient');
    }
  };

  const printReceipt = (patientData: any) => {
    const printContent = '<html><head><title>Receipt</title></head><body><h1>Receipt</h1><p>CRO: ' + (patientData.cro || '') + '</p><p>Patient: ' + formData.pre + ' ' + formData.firstname + '</p><p>Amount: Rs. ' + formData.total_amount + '</p></body></html>';
    
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
      actions={<LastEnrolledPatient />}
    >
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100">
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
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label>
                    <input
                      type="text"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Enter patient name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                    <input
                      type="text"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Enter age"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Scan Type</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-60 overflow-y-auto border border-gray-200 rounded-md p-4">
                    {scans.map(scan => (
                      <label key={scan.s_id} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.type_of_scan.includes(scan.s_id.toString())}
                          onChange={(e) => handleScanChange(scan.s_id.toString(), e.target.checked)}
                          className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                        />
                        <div className="flex-1">
                          <span className="text-sm font-medium">{scan.s_name}</span>
                          <div className="text-xs text-gray-500">Rs.{scan.charges}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

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
                        <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Total Amount</div>
                        <div className="text-sm font-semibold text-gray-900">Rs.{formData.total_amount}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

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
                    >
                      <FileText className="h-5 w-5" />
                      <span>PRINT</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </SuperAdminLayout>
  );
}