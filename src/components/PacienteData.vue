<template>
  <form @submit.prevent="updatePatientData">
    <div>
        <label for="identidadDeGenero">Identidad de Género:</label>
        <select v-model="paciente.patientData.identidadDeGenero">
            <option v-for="gender in genderList" :key="gender.code" :value="gender">
                {{ gender.display }}
            </option>
        </select>
    </div>
    <!-- Agrega más campos de entrada para cada propiedad que quieras actualizar -->
    <div>
        <label for="sexoBiologico">Sexo Biológico:</label>
        <select v-model="paciente.patientdatasexoBiologico">
            <option v-for="sex in sexList" :key="sex.code" :value="sex">
                {{ sex.display }}
            </option>
        </select>
    </div>

    <div>
        <label for="nacionalidad">Nacionalidad:</label>
        <select v-model="paciente.patientdatanacionalidad.value.coding">
            <option v-for="pais in codigoDePaises" :key="pais.code" :value="pais">
                {{ pais.display }}
            </option>
        </select>
    </div>

    <div>
        <label for="identifierUse">Tipo de Identificador:</label>
        <select v-model="paciente.patientdataidentifier.use">
            <option v-for="use in identifierUse" :key="use" :value="use">
                {{ use }}
            </option>
        </select>
    </div>

    <div>
        <label for="identifierType">Tipo de Documento de Identificación:</label>
        <select v-model="paciente.patientdataidentifier.type.coding">
            <option v-for="coding in identifierCoding" :key="coding.code" :value="coding">
                {{ coding.display }}
            </option>
        </select>
    </div>

    <div>
        <label for="nombreOficial">Nombre Oficial:</label>
        <input type="text" v-model="paciente.patientdataNombreOficial.given">
    </div>

    <div>
        <label for="nombreSocial">Nombre Social:</label>
        <input type="text" v-model="paciente.patientdataNombreSocial.given">
    </div>

    <div>
        <label for="telecomSystem">Sistema de Contacto:</label>
        <select v-model="paciente.patientdatatelecom.system">
            <option v-for="system in telecomSystem" :key="system.code" :value="system">
                {{ system.display }}
            </option>
        </select>
    </div>

    <div>
        <label for="telecomUse">Uso de Contacto:</label>
        <select v-model="paciente.patientdatatelecom.use">
            <option v-for="use in telecomUse" :key="use.code" :value="use">
                {{ use.display }}
            </option>
        </select>
    </div>

    <div>
        <label for="birthDate">Fecha de Nacimiento:</label>
        <input type="date" v-model="paciente.patientdatabirthDate">
    </div>

    <div>
        <label for="address">Dirección:</label>
        <input type="text" v-model="paciente.patientdataaddress">
    </div>

    <div>
        <label for="contactRelationship">Relación de Contacto:</label>
        <select v-model="paciente.patientdatacontact.relationship">
            <option v-for="relationship in contactRelationship" :key="relationship.code" :value="relationship">
                {{ relationship.display }}
            </option>
        </select>
    </div>

    <div>
        <label for="communicationLenguage">Lenguaje de Comunicación:</label>
        <select v-model="paciente.patientdatacommunication.lenguage.coding">
            <option v-for="lenguage in comunicationLenguage" :key="lenguage.code" :value="lenguage">
                {{ lenguage.display }}
            </option>
        </select>
    </div>

    <div>
        <label for="generalPractitioner">Médico General:</label>
        <input type="text" v-model="paciente.patientdatageneralPractitioner.display">
    </div>
  </form>
  </template>
  
  <script>
  import { genderList, sexList, codigoDePaises, identifierUse, identifierCoding, telecomSystem, telecomUse, administist, contactRelationship, comunicationLenguage, linkType, telecomCodeList, telecomSystemList, telecomUseList, phonePrefixList, emailDomainsList, listaRelaciones, lenguageList } from '../scripts/PacienteData.js';
  import PacienteData from '../scripts/PacienteData.js';
  export default {
    data() {
        return {
            paciente: new PacienteData(),
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
        
      // Aquí puedes hacer lo que necesites con los datos actualizados del paciente
      // Por ejemplo, podrías enviarlos a un servidor o guardarlos en el almacenamiento local
    },
      // Otros métodos de validación aquí
    },
  };
  </script>