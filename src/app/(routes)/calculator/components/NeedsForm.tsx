interface NeedsFormProps {
  formData: {
    monthlyBill: string;
    currentPower: string;
    monthlyUsage: string;
    powerCapacity: string;
  };
  onChange: (field: string, value: string) => void;
}

const NeedsForm = ({ formData, onChange }: NeedsFormProps) => {
  return (
    <div>
      <h2 className="text-2xl font-medium mb-8 text-center text-black">
        Berapa rata-rata tagihan listrik bulanan dan kapasitas properti Anda?
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-sm text-black">Tagihan listrik bulanan</label>
          <input
            type="text"
            value={formData.monthlyBill}
            onChange={(e) => onChange("monthlyBill", e.target.value)}
            placeholder="Rp 200.000.000"
            className="w-full p-3 border rounded-lg text-black"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-black">Pasokan daya saat ini</label>
          <input
            type="text"
            value={formData.currentPower}
            onChange={(e) => onChange("currentPower", e.target.value)}
            placeholder="Example: PLN, Genset, Etc"
            className="w-full p-3 border rounded-lg text-black"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-black">Penggunaan listrik bulanan</label>
          <input
            type="text"
            value={formData.monthlyUsage}
            onChange={(e) => onChange("monthlyUsage", e.target.value)}
            placeholder="3.000 kWh"
            className="w-full p-3 border rounded-lg text-black"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm text-black">Kapasitas Listrik</label>
          <input
            type="text"
            value={formData.powerCapacity}
            onChange={(e) => onChange("powerCapacity", e.target.value)}
            placeholder="20.000 VA"
            className="w-full p-3 border rounded-lg text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default NeedsForm; 