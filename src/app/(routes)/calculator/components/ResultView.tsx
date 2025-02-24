import { useRouter } from 'next/navigation';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useRef } from 'react';
import Image from 'next/image';

interface ResultViewProps {
  formData: {
    monthlyBill: string;
    monthlyUsage: string;
    currentPower: string;
    powerCapacity: string;
    roofSize: string;
    roofStructure: string;
    roofType: string;
    fullName: string;
    companyName: string;
    email: string;
    position: string;
    phone: string;
    location: string;
  };
}

const ResultView = ({ formData }: ResultViewProps) => {
  const router = useRouter();
  const reportRef = useRef<HTMLDivElement>(null);

  // Contoh perhitungan sederhana - bisa disesuaikan dengan logika bisnis yang sebenarnya
  const calculateSavings = () => {
    const monthlyUsage = parseInt(formData.monthlyUsage.replace(/[^0-9]/g, '')) || 0;
    return Math.round(monthlyUsage * 0.01); // Asumsi penghematan 1%
  };

  const handleDownloadPDF = async () => {
    if (!reportRef.current) return;

    try {
      // Buat PDF
      const pdf = new jsPDF('p', 'mm', 'a4');
      const canvas = await html2canvas(reportRef.current, {
        scale: 2,
        logging: false,
        useCORS: true
      });
      
      // Tambahkan header
      pdf.setFontSize(20);
      pdf.setTextColor(0, 0, 0);
      pdf.text('Laporan Solusi Solar Panel', 20, 20);
      
      // Tambahkan tanggal
      pdf.setFontSize(12);
      pdf.text(`Tanggal: ${new Date().toLocaleDateString('id-ID')}`, 20, 30);
      
      // Tambahkan data pelanggan
      pdf.setFontSize(14);
      pdf.text('Data Pelanggan:', 20, 45);
      pdf.setFontSize(12);
      pdf.text(`Nama: ${formData.fullName}`, 20, 55);
      pdf.text(`Perusahaan: ${formData.companyName}`, 20, 62);
      pdf.text(`Email: ${formData.email}`, 20, 69);
      pdf.text(`Telepon: ${formData.phone}`, 20, 76);
      pdf.text(`Lokasi: ${formData.location}`, 20, 83);
      
      // Tambahkan data properti
      pdf.setFontSize(14);
      pdf.text('Data Properti:', 20, 98);
      pdf.setFontSize(12);
      pdf.text(`Luas Atap: ${formData.roofSize} m²`, 20, 108);
      pdf.text(`Struktur Atap: ${formData.roofStructure}`, 20, 115);
      pdf.text(`Jenis Atap: ${formData.roofType}`, 20, 122);
      
      // Tambahkan data penggunaan listrik
      pdf.setFontSize(14);
      pdf.text('Data Penggunaan Listrik:', 20, 137);
      pdf.setFontSize(12);
      pdf.text(`Tagihan Bulanan: ${formData.monthlyBill}`, 20, 147);
      pdf.text(`Penggunaan Bulanan: ${formData.monthlyUsage}`, 20, 154);
      pdf.text(`Daya Saat Ini: ${formData.currentPower}`, 20, 161);
      pdf.text(`Kapasitas: ${formData.powerCapacity}`, 20, 168);
      
      // Tambahkan hasil perhitungan
      pdf.setFontSize(16);
      pdf.text(`Potensi Penghematan: ${calculateSavings()}%`, 20, 188);
      
      // Tambahkan gambar hasil
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 20, 195, 170, 80);
      
      // Download PDF
      pdf.save(`Solusi_Solar_Panel_${formData.fullName.replace(/\s+/g, '_')}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Terjadi kesalahan saat membuat PDF. Silakan coba lagi.');
    }
  };

  return (
    <div className="text-center max-w-4xl mx-auto">
      <div ref={reportRef}>
        <h2 className="text-3xl font-bold mb-4 text-black">
          Solusi Telah Dibuat!
        </h2>
        <p className="text-gray-600 mb-12">
          Terima kasih telah menghubungi SUN Energy. Perwakilan penjualan 
          kami akan segera menghubungi Anda.
        </p>

        <div className="bg-green-50 rounded-2xl p-8 mb-12 shadow-sm">
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-40 h-40">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl font-bold text-black">
                  {calculateSavings()}%
                </span>
              </div>
              <Image
                src="/images/calculator/building-solar.png"
                alt="Building with Solar Panels"
                className="w-full h-full object-contain"
                width={160}
                height={160}
              />
            </div>
          </div>
          <p className="text-lg font-medium text-black">
            Anda berpotensi menghemat tagihan listrik bulanan Anda hingga
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-semibold mb-6 text-black text-left">Solusi Kami</h3>
          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <p className="text-gray-600 text-base mb-6">
              Berikut adalah perkiraan konversi berdasarkan kapasitas yang diminta:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-base text-black">
                <span className="w-4 h-4 bg-[#F7E733] rounded-full mr-3 shadow-sm"></span>
                Pengurangan emisi CO2
              </li>
              <li className="flex items-center text-base text-black">
                <span className="w-4 h-4 bg-[#F7E733] rounded-full mr-3 shadow-sm"></span>
                Penghematan biaya energi
              </li>
              <li className="flex items-center text-base text-black">
                <span className="w-4 h-4 bg-[#F7E733] rounded-full mr-3 shadow-sm"></span>
                Peningkatan efisiensi energi
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => router.push('/calculator')}
          className="px-6 py-3 border-2 border-green-500 text-green-500 rounded-full hover:bg-green-50 font-medium transition-colors"
        >
          Kembali ke Kalkulator
        </button>
        <button
          onClick={handleDownloadPDF}
          className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 font-medium transition-colors flex items-center gap-2"
        >
          <span>Download PDF</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ResultView; 