interface PersonalInfoFormProps {
  formData: {
    fullName: string;
    companyName: string;
    email: string;
    position: string;
    phone: string;
    location: string;
  };
  onChange: (field: string, value: string) => void;
}

const PersonalInfoForm = ({ formData, onChange }: PersonalInfoFormProps) => {
  return (
    <div>
      <h2 className="text-2xl font-medium mb-8 text-center text-black">
        Informasi Personal
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-sm text-black">Nama Lengkap</label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => onChange("fullName", e.target.value)}
            className="w-full p-3 border rounded-lg text-black"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-black">Lokasi</label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => onChange("location", e.target.value)}
            className="w-full p-3 border rounded-lg text-black"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-black">Nama Perusahaan</label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => onChange("companyName", e.target.value)}
            className="w-full p-3 border rounded-lg text-black"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-black">Jabatan</label>
          <input
            type="text"
            value={formData.position}
            onChange={(e) => onChange("position", e.target.value)}
            className="w-full p-3 border rounded-lg text-black"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-black">E-mail</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => onChange("email", e.target.value)}
            className="w-full p-3 border rounded-lg text-black"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-black">Nomor Telepon</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            className="w-full p-3 border rounded-lg text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;