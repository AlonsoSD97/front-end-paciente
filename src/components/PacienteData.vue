<template>
  <form @submit.prevent="updatePatientData">
    <div class="form-group">
        <label for="identidadDeGenero">Identidad de Género:</label>
        <select v-model="paciente.patientData.identidadDeGenero">
            <option v-for="gender in genderList" :key="gender.code" :value="gender">
                {{ gender.display }}
            </option>
        </select>
    </div>
    <!-- Agrega más campos de entrada para cada propiedad que quieras actualizar -->
    <div class="form-group">
        <label for="sexoBiologico">Sexo Biológico:</label>
        <select v-model="paciente.patientData.sexoBiologico">
            <option v-for="sex in sexList" :key="sex.code" :value="sex">
                {{ sex.display }}
            </option>
        </select>
    </div>

    <div class="form-group">
        <label for="nacionalidad">Nacionalidad:</label>
        <select v-model="paciente.patientData.nacionalidad.value.coding">
            <option v-for="pais in codigoDePaises" :key="pais.code" :value="pais">
                {{ pais.display }}
            </option>
        </select>
    </div>

    <div class="form-group">
        <label for="identifierUse">Tipo de Identificador:</label>
        <select v-model="paciente.patientData.identifier.use">
            <option v-for="use in identifierUse" :key="use" :value="use">
                {{ use }}
            </option>
        </select>
    </div>

    <div class="form-group">
        <label for="identifierType">Tipo de Documento de Identificación:</label>
        <select v-model="paciente.patientData.identifier.type.coding">
            <option v-for="coding in identifierCoding" :key="coding.code" :value="coding">
                {{ coding.display }}
            </option>
        </select>
    </div>

    <div class="form-group">
        <label for="nombreOficial">Nombre Oficial:</label>
        <input type="text" v-model="paciente.patientData.NombreOficial.given">
    </div>

    <div class="form-group">
        <label for="nombreSocial">Nombre Social:</label>
        <input type="text" v-model="paciente.patientData.NombreSocial.given">
    </div>

    <div class="form-group">
        <label for="telecomSystem">Sistema de Contacto:</label>
        <select v-model="paciente.patientData.telecom.system">
            <option v-for="system in telecomSystem" :key="system.code" :value="system">
                {{ system.display }}
            </option>
        </select>
    </div>

    <div class="form-group">
        <label for="telecomUse">Uso de Contacto:</label>
        <select v-model="paciente.patientData.telecom.use">
            <option v-for="use in telecomUse" :key="use.code" :value="use">
                {{ use.display }}
            </option>
        </select>
    </div>

    <div class="form-group">
        <label for="birthDate">Fecha de Nacimiento:</label>
        <input type="date" v-model="paciente.patientData.birthDate">
    </div>

    <div class="form-group">
        <label for="address">Dirección:</label>
        <input type="text" v-model="paciente.patientData.address">
    </div>

    <div class="form-group">
        <label for="contactRelationship">Relación de Contacto:</label>
        <select v-model="paciente.patientData.contact.relationship">
            <option v-for="relationship in contactRelationship" :key="relationship.code" :value="relationship">
                {{ relationship.display }}
            </option>
        </select>
    </div>

    <div class="form-group">
        <label for="communicationLenguage">Lenguaje de Comunicación:</label>
        <select v-model="paciente.patientData.communication.lenguage.coding">
            <option v-for="lenguage in comunicationLenguage" :key="lenguage.code" :value="lenguage">
                {{ lenguage.display }}
            </option>
        </select>
    </div>

    <div class="form-group">
        <label for="generalPractitioner">Médico General:</label>
        <input type="text" v-model="paciente.patientData.generalPractitioner.display">
    </div>
    <div class="form-group">
        <button type="submit">Actualizar Datos</button>
    </div>
    
  </form>
  </template>
  
  <script>
  import { submitTransaction} from '../scripts/ConectarSmartcontract.js';
  import { genderList, sexList, codigoDePaises, identifierUse, identifierCoding, telecomSystem, telecomUse, contactRelationship, comunicationLenguage, telecomCodeList, telecomSystemList, telecomUseList, phonePrefixList, emailDomainsList, listaRelaciones, lenguageList } from '../scripts/PacienteData.js';
  import PacienteData from '../scripts/PacienteData.js';
  import contractjson from '../assets/paciente.json';

  let abi = contractjson.abi;
  let contractAddress = '0xFD0a3F17b95628A73F89CA37DB5eebb02060BfEB';
  let gas = contractjson.gas;
  let operation = 'updatePatientData'


  export default {
    data() {
        return {
            genderList,
            sexList,
            codigoDePaises,
            identifierUse,
            identifierCoding,
            telecomSystem,
            telecomUse,
            contactRelationship,
            comunicationLenguage,
            telecomCodeList,
            telecomSystemList,
            telecomUseList,
            phonePrefixList,
            emailDomainsList,
            listaRelaciones,
            lenguageList,
            paciente: new PacienteData(),
            contractjson: contractjson,
            // Tus datos aquí
        };
    },


    methods: {
      validateInput(input, list) {
        return list.some(item => item.code === input);
      },
      updatePatientData() {
        console.log(this.paciente);
        window.alert(JSON.stringify(this.paciente));
        // Solicitar dirección mediante Metamask
        let fromAddress;
        if (typeof window.ethereum !== 'undefined') {
            window.ethereum.enable().then((accounts) => {
                fromAddress = accounts[0];
                // Hacer algo con la dirección obtenida, por ejemplo, asignarla a una variable en el componente
            }).catch((error) => {
                console.error('Error al solicitar dirección mediante Metamask:', error);
            });
        } else {
            console.error('Metamask no está instalado o no es compatible con el navegador');
        }
        await submitTransaction(abi, contractAddress, operation, paciente.patientData, fromAddress, gas);
        
      // Aquí puedes hacer lo que necesites con los datos actualizados del paciente
      // Por ejemplo, podrías enviarlos a un servidor o guardarlos en el almacenamiento local
    },
      // Otros métodos de validación aquí
    },
  };
  </script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
  margin-bottom: 1rem;
  text-align: left;
}

.form-group label {
  display: inline-block;
  margin-bottom: 0.5rem;
}

.form-group select {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-group select:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
</style>