interface StepNavigationProps {
  step: number;
  onNext: () => void;
  onBack: () => void;
}

const StepNavigation = ({ step, onNext, onBack }: StepNavigationProps) => {
  return (
    <div className="flex justify-between mt-8">
      <button
        onClick={onBack}
        className="flex items-center text-black hover:text-black"
      >
        <span>← Kembali</span>
      </button>
      <button
        onClick={onNext}
        className="bg-[#F7E733] text-black px-6 py-2 rounded-full hover:bg-[#F7E733]/80"
      >
        {step === 5 ? "Kirim" : "Selanjutnya"}
      </button>
    </div>
  );
};

export default StepNavigation;