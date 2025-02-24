import React, { useState } from 'react';
import { structureTypes, roofTypes } from '@/constants/calculator';
import Image from 'next/image';

interface AssessmentFormProps {
  formData: {
    roofSize: string;
    roofStructure: string;
    roofType: string;
  };
  onChange: (field: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const AssessmentForm = ({ formData, onChange, onNext, onBack }: AssessmentFormProps) => {
  const [subStep, setSubStep] = useState(1);

  const renderImage = (type: typeof structureTypes[0] | typeof roofTypes[0]) => (
    <div className="relative h-48">
      <Image
        src={type.image}
        alt={type.label}
        className={`w-full h-full object-cover ${type.imageStyle}`}
        width={400}
        height={192}
        priority
      />
      {type.showQuestionMark && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <span className="text-6xl text-white font-bold">?</span>
        </div>
      )}
    </div>
  );

  if (subStep === 1) {
    return (
      <div>
        <div className="mb-12">
          <h2 className="text-2xl font-medium mb-8 text-center text-black">
            Berapa ukuran atap Anda?
          </h2>
          <div className="max-w-md mx-auto">
            <label className="block mb-2 text-sm text-black">
              Luas Atap (m2)
            </label>
            <input
              type="number"
              value={formData.roofSize}
              onChange={(e) => onChange("roofSize", e.target.value)}
              placeholder="2.000"
              className="w-full p-3 border rounded-lg text-black"
            />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-medium mb-8 text-center text-black">
            Struktur atap seperti apa yang Anda miliki?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {structureTypes.map((type) => (
              <div
                key={type.id}
                className={`cursor-pointer rounded-xl overflow-hidden ${
                  formData.roofStructure === type.id ? 'ring-2 ring-green-500' : ''
                }`}
                onClick={() => onChange('roofStructure', type.id)}
              >
                {renderImage(type)}
                <div className="p-4 text-center bg-white text-black">
                  <span className="font-medium">{type.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <button
            onClick={onBack}
            className="text-black hover:text-black"
          >
            ← Kembali
          </button>
          {formData.roofStructure && (
            <button
              onClick={() => setSubStep(2)}
              className="bg-[#F7E733] text-black px-6 py-2 rounded-full hover:bg-[#F7E733]/80"
            >
              Selanjutnya
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-medium mb-8 text-center text-black">
        Jenis atap apa yang Anda gunakan?
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {roofTypes.map((type) => (
          <div
            key={type.id}
            className={`cursor-pointer rounded-xl overflow-hidden ${
              formData.roofType === type.id ? 'ring-2 ring-green-500' : ''
            }`}
            onClick={() => onChange('roofType', type.id)}
          >
            {renderImage(type)}
            <div className="p-4 text-center bg-white text-black">
              <span className="font-medium">{type.label}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-between">
        <button
          onClick={() => setSubStep(1)}
          className="text-black hover:text-black"
        >
          ← Kembali ke struktur atap
        </button>
        {formData.roofType && (
          <button
            onClick={onNext}
            className="bg-[#F7E733] text-black px-6 py-2 rounded-full hover:bg-[#F7E733]/80"
          >
            Selanjutnya
          </button>
        )}
      </div>
    </div>
  );
};

export default AssessmentForm;