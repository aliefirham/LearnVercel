import { getRoofStructureInfo, getRoofTypeInfo } from '@/constants/calculator';
import Image from 'next/image';

interface SummaryFormProps {
  formData: {
    monthlyBill: string;
    currentPower: string;
    monthlyUsage: string;
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
  onEdit: (step: number) => void;
  onNext: () => void;
}

const SummaryForm = ({ formData, onEdit, onNext }: SummaryFormProps) => {
  const structureInfo = getRoofStructureInfo(formData.roofStructure);
  const typeInfo = getRoofTypeInfo(formData.roofType);

  const renderImage = (info: ReturnType<typeof getRoofStructureInfo>) => (
    <div className="relative w-32 h-32 rounded-xl overflow-hidden shadow-md">
      <Image
        src={info.image} 
        alt={info.label}
        className={`w-full h-full ${info.imageStyle}`}
        width={128}
        height={128}
      />
      {info.showQuestionMark && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <span className="text-4xl text-white font-bold">?</span>
        </div>
      )}
    </div>
  );

  const renderSection = (title: string, children: React.ReactNode, step: number) => (
    <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        <button 
          onClick={() => onEdit(step)}
          className="text-green-500 hover:text-green-600 flex items-center gap-2 text-sm font-medium"
        >
          <span>Edit</span>
          <span className="text-lg">✏️</span>
        </button>
      </div>
      {children}
    </section>
  );

  const renderInfoItem = (label: string, value: string) => (
    <div className="bg-gray-50 p-4 rounded-xl">
      <p className="text-sm text-gray-600 mb-1">{label}</p>
      <p className="font-medium text-black">{value}</p>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center text-black">
        Hasil Kesimpulan
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Sebelum melanjutkan ke halaman hasil, mohon periksa kembali data yang telah Anda masukkan dalam formulir.
      </p>

      <div className="space-y-6">
        {renderSection("Kebutuhan", (
          <div className="grid md:grid-cols-2 gap-4">
            {renderInfoItem("Tagihan listrik bulanan", formData.monthlyBill)}
            {renderInfoItem("Pasokan daya saat ini", formData.currentPower)}
            {renderInfoItem("Penggunaan listrik bulanan", formData.monthlyUsage)}
            {renderInfoItem("Kapasitas Listrik", formData.powerCapacity)}
          </div>
        ), 1)}

        {renderSection("Penilaian", (
          <div className="space-y-6">
            {renderInfoItem("Luas Atap", `${formData.roofSize} m²`)}
            
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-600 mb-3">Struktur Atap</p>
                <div className="flex items-center gap-6 bg-gray-50 p-4 rounded-xl">
                  {renderImage(structureInfo)}
                  <p className="font-medium text-black text-lg">{structureInfo.label}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-3">Jenis Atap</p>
                <div className="flex items-center gap-6 bg-gray-50 p-4 rounded-xl">
                  {renderImage(typeInfo)}
                  <p className="font-medium text-black text-lg">{typeInfo.label}</p>
                </div>
              </div>
            </div>
          </div>
        ), 2)}

        {renderSection("Informasi Personal", (
          <div className="grid md:grid-cols-2 gap-4">
            {renderInfoItem("Nama Lengkap", formData.fullName)}
            {renderInfoItem("Email", formData.email)}
            {renderInfoItem("Nomor Telepon", formData.phone)}
            {renderInfoItem("Jabatan", formData.position)}
            {renderInfoItem("Nama Perusahaan", formData.companyName)}
            {renderInfoItem("Lokasi", formData.location)}
          </div>
        ), 3)}
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={() => onEdit(3)}
          className="text-black hover:text-black"
        >
          ← Kembali
        </button>
        <button
          onClick={onNext}
          className="bg-[#F7E733] text-black px-6 py-2 rounded-full hover:bg-[#F7E733]/80"
        >
          Kirim
        </button>
      </div>
    </div>
  );
};

export default SummaryForm; 