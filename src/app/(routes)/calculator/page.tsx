'use client'

import { useState } from 'react';
import Stepper from './components/Stepper';
import StepNavigation from './components/StepNavigation';
import NeedsForm from './components/NeedsForm';
import AssessmentForm from './components/AssessmentForm';
import PersonalInfoForm from './components/PersonalInfoForm';
import SummaryForm from './components/SummaryForm';
import ResultView from './components/ResultView';

const Calculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    monthlyBill: '',
    currentPower: '',
    monthlyUsage: '',
    powerCapacity: '',
    roofSize: '',
    roofStructure: '',
    roofType: '',
    fullName: '',
    companyName: '',
    email: '',
    position: '',
    phone: '',
    location: ''
  });

  const handleNext = () => {
    setStep(Math.min(5, step + 1));
  };

  const handleBack = () => {
    setStep(Math.max(1, step - 1));
  };

  const handleFormChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleEdit = (stepNumber: number) => {
    setStep(stepNumber);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/calculator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Gagal menyimpan data');
      }

      // Jika berhasil, lanjut ke hasil
      setStep(5);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Terjadi kesalahan saat menyimpan data. Silakan coba lagi.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9F4] py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <Stepper currentStep={step} />

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          {step === 1 && (
            <>
              <NeedsForm 
                formData={formData}
                onChange={handleFormChange}
              />
              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleNext}
                  className="bg-[#F7E733] text-black px-6 py-2 rounded-full hover:bg-[#F7E733]/80"
                >
                  Selanjutnya
                </button>
              </div>
            </>
          )}
          {step === 2 && (
            <AssessmentForm 
              formData={formData}
              onChange={handleFormChange}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          {step === 3 && (
            <PersonalInfoForm 
              formData={formData}
              onChange={handleFormChange}
            />
          )}
          {step === 4 && (
            <SummaryForm 
              formData={formData}
              onEdit={handleEdit}
              onNext={handleSubmit}
            />
          )}
          {step === 5 && (
            <ResultView 
              formData={formData}
            />
          )}

          {step === 3 && (
            <StepNavigation 
              step={step}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
