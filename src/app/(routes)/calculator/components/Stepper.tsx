interface StepperProps {
  currentStep: number;
}

const Stepper = ({ currentStep }: StepperProps) => {
  const steps = [
    { number: "01", title: "Kebutuhan" },
    { number: "02", title: "Penilaian" },
    { number: "03", title: "Informasi Personal" },
    { number: "04", title: "Ringkasan" },
    { number: "05", title: "Hasil" },
  ];

  return (
    <div className="flex justify-between mb-10">
      {steps.map((step, index) => (
        <div
          key={step.number}
          className={`flex flex-col items-center ${
            currentStep === index + 1 ? "text-black" : "text-gray-400"
          } text-black`}
        >
          <span className="text-sm">{step.number}</span>
          <span className="text-sm">{step.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Stepper;