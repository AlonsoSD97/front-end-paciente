import PacienteData from './PacienteData.js';
import {extractValuesObjectAnidated} from './ConectarSmartcontract.js';

const paciente = new PacienteData();
const args = extractValuesObjectAnidated(paciente.patientData);
console.log('args', args);   