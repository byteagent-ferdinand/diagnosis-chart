// DiagnoseContext.js
import React, { createContext, useContext, useState } from 'react';

const DiagnoseContext = createContext();

export const DiagnoseProvider = ({ children }) => {
  const [diagnosisData, setDiagnosisData] = useState(defaultDiagnosisData);

  const updateDiagnosisData = (newData) => {
    setDiagnosisData({ ...defaultDiagnosisData, ...newData });
  };

  return (
    <DiagnoseContext.Provider value={{ diagnosisData, updateDiagnosisData }}>
        {children}
    </DiagnoseContext.Provider>
  );
};

export const useDiagnose = () => {
  const context = useContext(DiagnoseContext);
  if (!context) {
    throw new Error('useDiagnose must be used within a DiagnoseProvider');
  }
  return context;
};

const defaultDiagnosisData = {
  customer: {
    label: 'Customer: ',
    value: 'Max Mustermann',
  },
  vehicleDetails: {
    label: 'Vehicle details: ',
    model: {
      label: 'Model: ',
      value: 'XYZ',
    },
    licensePlate: {
      label: 'License plate: ',
      value: 'ABC123',
    },
  },
  diagnosticResult: {
    label: 'Diagnostic result: ',
    // text: `After a thorough vehicle diagnosis, the results are as follows: The engine runs smoothly without abnormal noises, and all electronic systems are in proper working order. Brakes exhibit no signs of wear, and tire pressure is within recommended limits. The cooling system components maintain proper function with no signs of overheating. Regularly check and top up the coolant for optimal temperatures. In summary, the vehicle is technically sound, but routine maintenance, especially for the cooling system, is advised for optimal performance and safety.`,
    text: `YO`,
    mean: {
      label: 'Mean Temperature: ',
      value: '160 °C',
    },
    min: {
      label: 'Min. Temperature: ',
      value: '120 °C',
    },
    max: {
      label: 'Max. Temperature: ',
      value: '190 °C',
    },
  }
};
