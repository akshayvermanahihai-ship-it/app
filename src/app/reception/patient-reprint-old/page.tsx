'use client';

import { useState } from 'react';
import { Search, Printer, FileText } from 'lucide-react';
import { useToastContext } from '@/context/ToastContext';
import LastEnrolledPatient from '@/components/LastEnrolledPatient';

interface Patient {
  patient_id: number;
  p_id?: number;
  cro?: string;
  cro_number?: string;
  patient_name?: string;
  firstname?: string;
  age?: number;
  gender?: string;
  mobile?: string;
  contact_number?: string;
  hospital_name?: string;
  h_name?: string;
  doctor_name?: string;
  dname?: string;
  category?: string;
  date?: string;
  amount?: number;
}

export default function PatientReprintOld() {
  const toast = useToastContext();
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [printing, setPrinting] = useState<number | null>(null);

  const searchPatients = async () => {
    if (!searchTerm.trim()) return;
    
    setLoading(true);
    try {
      const response = await fetch(`https://varahasdc.co.in/api/admin/patients/search?q=${encodeURIComponent(searchTerm)}`);
      if (response.ok) {
        const data = await response.json();
        console.log('Search API response:', data); // Debug log
        setPatients(data.data || []);
      }
    } catch (error) {
      console.error('Error searching patients:', error);
    } finally {
      setLoading(false);
    }
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

  const handleReprint = async (patient: Patient) => {
    setPrinting(patient.patient_id);
    try {
      console.log('Patient data:', patient); // Debug log
      
      // Use CRO if available, otherwise use patient_id
      const identifier = patient.cro_number || patient.cro || patient.patient_id;
      
      if (!identifier) {
        throw new Error('No identifier found for this patient');
      }
      
      // Fetch receipt data from our Next.js API
      const response = await fetch(`https://varahasdc.co.in/api/reception/receipt/${encodeURIComponent(identifier)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch receipt data');
      }
      
      const { data: receiptData } = await response.json();
      
      // Generate receipt HTML using our Next.js system
      const receiptHTML = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Receipt - ${receiptData.cro}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
            .admission_form { text-align: center; color: #000000; font-size: 10px; width: 100%; }
            .admission_form table { width: 98%; font-size: 10px; margin: -5px 8px; }
            .admission_form .form_input { padding: 2px 1%; font-size: 10px; border: none; font-weight: bold; font-style: italic; width: 99%; border-bottom: 1px dotted #000000; }
            .form_input_box { border-bottom: 0px dotted #000000; padding: 0px 0px 2px 0px; width: 100%; display: inline-block; }
            @media print { body { margin: 0; } }
          </style>
        </head>
        <body onload="window.print(); setTimeout(() => window.close(), 1000);">
          <div class="admission_form" style="border:solid thin; margin-top:18px;width:93.0%;margin-left:30px;">
            <table style="margin-top:2px;">
              <tr><td colspan="6"><b>Dr. S.N. MEDICAL COLLEGE AND ATTACHED GROUP OF HOSPITAL, JODHPUR</b></td></tr>
              <tr><td colspan="6"><b>Rajasthan Medical Relief Society, M.D.M. Hospital, Jodhpur</b></td></tr>
              <tr><td colspan="6"><b>IMAGING CENTRE UNDER P.P.P.MODE : VARAHA SDC</b></td></tr>
              <tr><td colspan="6"><b>256 SLICE DUAL ENERGY CT SCAN, M.D.M HOSPITAL Jodhpur(Raj.) - 342003</b></td></tr>
              <tr><td colspan="6"><b>Tel. : +91-291-2648120 , 0291-2648121 , 0291-2648122</b></td></tr>
            </table>
            
            <table>
              <tr>
                <td width="55">Reg.No :</td>
                <td width="200"><span class="form_input_box"><input type="text" class="form_input" value="${receiptData.cro}(${receiptData.patient_id})"></span></td>
                <td colspan="6"><span style="margin-left:30%; border: 1px solid #02C; border-radius: 11px;padding: 3px 15px;">Cash Receipt</span></td>
                <td width="36">Date</td>
                <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="${receiptData.date}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="56">Ref. By :</td>
                <td width="482"><span class="form_input_box"><input type="text" class="form_input" value="${receiptData.doctor_name}"></span></td>
                <td width="174">Date and Time of Appointment :</td>
                <td width="316"><span class="form_input_box"><input type="text" class="form_input" value="${receiptData.appointment_date} ${receiptData.appointment_time}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="78">Patient Name:</td>
                <td width="650"><span class="form_input_box"><input type="text" class="form_input" value="${receiptData.patient_name}"></span></td>
                <td width="33">Age :</td>
                <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="${receiptData.age}"></span></td>
                <td width="36">Gender</td>
                <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="${receiptData.gender}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="40">Address</td>
                <td width="687"><span class="form_input_box"><input type="text" class="form_input" value="${receiptData.address}"></span></td>
                <td width="687"><span class="form_input_box"><label>Category</label><input type="text" class="form_input" value="${receiptData.category}"></span></td>
                <td width="33">Phone:</td>
                <td width="333"><span class="form_input_box"><input type="text" class="form_input" value="${receiptData.contact_number}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="59">Investigations:</td>
                <td width="1042"><span class="form_input_box"><input type="text" class="form_input" value="${receiptData.investigations}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="129">For Sum Of Rupees:</td>
                <td width="733"><span class="form_input_box"><input type="text" class="form_input" value="${numberToWords(receiptData.received_amount).toUpperCase()} RUPEES ONLY"></span></td>
                <td width="147"><label>Scan Amount</label><input type="text" value="₹ ${receiptData.scan_amount}" style="border:1px solid #5E60AE;"></td>
                <td width="147"><label>Received Amount</label><input type="text" value="₹ ${receiptData.received_amount}" style="border:1px solid #5E60AE;"></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td colspan="6" align="right">For Varaha SDC<br><span style="margin-right:50px;">Jodhpur</span></td>
              </tr>
            </table>
          </div>
          
          <hr>
          
          <div class="admission_form" style="border:solid thin; margin-top:18px;width:93.0%;margin-left:30px;">
            <table style="margin-top:2px;">
              <tr><td colspan="6"><b>Dr. S.N. MEDICAL COLLEGE AND ATTACHED GROUP OF HOSPITAL, JODHPUR</b></td></tr>
              <tr><td colspan="6"><b>Rajasthan Medical Relief Society, M.D.M. Hospital, Jodhpur</b></td></tr>
              <tr><td colspan="6"><b>IMAGING CENTRE UNDER P.P.P.MODE : VARAHA SDC</b></td></tr>
              <tr><td colspan="6"><b>256 SLICE DUAL ENERGY CT SCAN, M.D.M HOSPITAL Jodhpur(Raj.) - 342003</b></td></tr>
              <tr><td colspan="6"><b>Tel. : +91-291-2648120 , 0291-2648121 , 0291-2648122</b></td></tr>
            </table>
            
            <table>
              <tr>
                <td width="55">Reg.No :</td>
                <td width="200"><span class="form_input_box"><input type="text" class="form_input" value="${receiptData.cro}(${receiptData.patient_id})"></span></td>
                <td colspan="6"><span style="margin-left:30%; border: 1px solid #02C; border-radius: 11px;padding: 3px 15px;">Cash Receipt</span></td>
                <td width="36">Date</td>
                <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="${receiptData.date}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="56">Ref. By :</td>
                <td width="482"><span class="form_input_box"><input type="text" class="form_input" value="${receiptData.doctor_name}"></span></td>
                <td width="174">Date and Time of Appointment :</td>
                <td width="316"><span class="form_input_box"><input type="text" class="form_input" value="${receiptData.appointment_date} ${receiptData.appointment_time}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="78">Patient Name:</td>
                <td width="650"><span class="form_input_box"><input type="text" class="form_input" value="${receiptData.patient_name}"></span></td>
                <td width="33">Age :</td>
                <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="${receiptData.age}"></span></td>
                <td width="36">Gender</td>
                <td width="144"><span class="form_input_box"><input type="text" class="form_input" value="${receiptData.gender}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="40">Address</td>
                <td width="687"><span class="form_input_box"><input type="text" class="form_input" value="${receiptData.address}"></span></td>
                <td width="687"><span class="form_input_box"><label>Category</label><input type="text" class="form_input" value="${receiptData.category}"></span></td>
                <td width="33">Phone:</td>
                <td width="333"><span class="form_input_box"><input type="text" class="form_input" value="${receiptData.contact_number}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="59">Investigations:</td>
                <td width="1042"><span class="form_input_box"><input type="text" class="form_input" value="${receiptData.investigations}"></span></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td width="129">For Sum Of Rupees:</td>
                <td width="733"><span class="form_input_box"><input type="text" class="form_input" value="${numberToWords(receiptData.received_amount).toUpperCase()} RUPEES ONLY"></span></td>
                <td width="147"><label>Scan Amount</label><input type="text" value="₹ ${receiptData.scan_amount}" style="border:1px solid #5E60AE;"></td>
                <td width="147"><label>Received Amount</label><input type="text" value="₹ ${receiptData.received_amount}" style="border:1px solid #5E60AE;"></td>
              </tr>
            </table>
            
            <table>
              <tr>
                <td colspan="6" align="right">For Varaha SDC<br><span style="margin-right:50px;">Jodhpur</span></td>
              </tr>
            </table>
          </div>
        </body>
        </html>
      `;
      
      // Open receipt in new window and print
      const printWindow = window.open('', '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
      if (printWindow) {
        printWindow.document.write(receiptHTML);
        printWindow.document.close();
      }
      
      const patientName = patient.patient_name || patient.firstname || 'Unknown Patient';
      toast.success(`Receipt generated for ${patientName} (${identifier})`);
      
    } catch (error) {
      console.error('Error generating receipt:', error);
      toast.error('Error generating receipt');
    } finally {
      setPrinting(null);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      searchPatients();
    }
  };

  const totalPages = Math.ceil(patients.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPatients = patients.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-start"><div><h1 className="text-3xl font-bold mb-2">Patient Reprint (Old Records)</h1>
        <p className="text-blue-100 text-lg">Search and reprint receipts for old patient records</p></div><div className="ml-6"><LastEnrolledPatient /></div></div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
        <div className="flex items-center space-x-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search by CRO, patient name, or mobile..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={searchPatients}
            disabled={loading || !searchTerm.trim()}
            className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 disabled:opacity-50 shadow-md font-medium"
          >
            <Search className="h-5 w-5" />
            <span>{loading ? 'Searching...' : 'Search'}</span>
          </button>
        </div>

        {patients.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CRO</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age/Gender</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hospital</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedPatients.map((patient, index) => (
                  <tr key={patient.patient_id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium">{startIndex + index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-blue-600">{patient.cro_number || patient.cro || patient.patient_id || '-'}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-black">{patient.patient_name || patient.firstname || '-'}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{patient.age || '-'}y, {patient.gender || '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{patient.mobile || patient.contact_number || '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{patient.hospital_name || patient.h_name || '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{patient.doctor_name || patient.dname || '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black">₹{patient.amount || 0}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{patient.date || '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleReprint(patient)}
                        disabled={printing === patient.patient_id}
                        className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 text-xs font-medium disabled:opacity-50 shadow-md"
                      >
                        {printing === patient.patient_id ? (
                          <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-1"></div>
                        ) : (
                          <Printer className="h-3 w-3 mr-1" />
                        )}
                        <span>Reprint</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="px-6 py-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-700">
                    Page {currentPage} of {totalPages} | Total: {patients.length} records
                  </div>
                  <div className="flex items-center space-x-2">
                    {currentPage > 1 && (
                      <>
                        <button
                          onClick={() => setCurrentPage(1)}
                          className="px-3 py-2 text-sm font-medium bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-200 shadow-md"
                        >
                          First
                        </button>
                        <button
                          onClick={() => setCurrentPage(currentPage - 1)}
                          className="px-3 py-2 text-sm font-medium bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-200 shadow-md"
                        >
                          Previous
                        </button>
                      </>
                    )}
                    
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        const startPage = Math.max(1, currentPage - 2);
                        const page = startPage + i;
                        if (page > totalPages) return null;
                        
                        return (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 shadow-md ${
                              currentPage === page
                                ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
                                : 'bg-gradient-to-r from-gray-400 to-gray-500 text-white hover:from-gray-500 hover:to-gray-600'
                            }`}
                          >
                            {page}
                          </button>
                        );
                      })}
                    </div>
                    
                    {currentPage < totalPages && (
                      <>
                        <button
                          onClick={() => setCurrentPage(currentPage + 1)}
                          className="px-3 py-2 text-sm font-medium bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-200 shadow-md"
                        >
                          Next
                        </button>
                        <button
                          onClick={() => setCurrentPage(totalPages)}
                          className="px-3 py-2 text-sm font-medium bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-200 shadow-md"
                        >
                          Last
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {patients.length === 0 && searchTerm && !loading && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Records Found</h3>
            <p className="text-gray-500">No patient records found matching your search criteria.</p>
          </div>
        )}

        {!searchTerm && (
          <div className="text-center py-12">
            <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Search Patient Records</h3>
            <p className="text-gray-500">Enter CRO number, patient name, or mobile number to search for old records.</p>
          </div>
        )}
      </div>
    </div>
  );
}