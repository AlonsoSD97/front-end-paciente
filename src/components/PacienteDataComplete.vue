<template>
    <div class="container" style="height: 100vh;width: 80vw">
    <form @submit.prevent="updatePatientData">
      <div class="form-group">
          <button type="button" @click="clearForm">Limpiar Formulario</button>
      </div>
      <div class="form-group">
          <label for="identidadDeGenero">Identidad de Género:</label>
          <select v-model="paciente.patientData.identidadDeGenero">
              <option v-for="gender in genderList" :key="gender.code" :value="gender">
                  {{ gender.display }}
              </option>
          </select>
      </div>
  
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
          <label for="identifierTypePaises">Paises del Tipo de Identificador:</label>
          <select v-model="paciente.patientData.identifier.type.paises">
              <option v-for="pais in codigoDePaises" :key="pais.code" :value="pais">
                  {{ pais.display }}
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
          <label for="identifierValue">Valor del Identificador:</label>
          <input type="text" v-model="paciente.patientData.identifier.value">
      </div>
  
      <div class="form-group">
          <label for="nombreOficial">Nombre Oficial:</label>
          <input type="text" v-model="paciente.patientData.NombreOficial.given">
      </div>
  
      <div class="form-group">
          <label for="nombreOficialFamily">Apellido Oficial:</label>
          <input type="text" v-model="paciente.patientData.NombreOficial.family.segundoApellido">
      </div>
  
      <!-- <div class="form-group">
          <label for="nombreOficialUse">Uso del Nombre Oficial:</label>
          <select v-model="paciente.patientData.NombreOficial.use">
              <option v-for="use in nameUse" :key="use" :value="use">
                  {{ use }}
              </option>
          </select>
      </div> -->
  
  
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
          <label for="country">País:</label>
          <select v-model="paciente.patientData.address.country">
              <option v-for="pais in codigoDePaises" :key="pais.code" :value="pais">
                  {{ pais.display }}
              </option>
          </select>
      </div>
  
      <div class="form-group">
          <label for="city">Ciudad:</label>
          <input type="text" v-model="paciente.patientData.address.city">
      </div>
  
      <div class="form-group">
          <label for="street">Calle:</label>
          <input type="text" v-model="paciente.patientData.address.street">
      </div>
  
      <div class="form-group">
          <label for="postalCode">Código Postal:</label>
          <input type="text" v-model="paciente.patientData.address.postalCode">
      </div>
  
      <div class="form-group">
          <label for="number">Número:</label>
          <input type="text" v-model="paciente.patientData.address.number">
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
    </div>
  </template>
  
  <script>
  import { submitTransaction} from '../scripts/ConectarSmartcontract.js';
  import { callTransaction } from '../scripts/ConectarSmartcontract.js';
  import { genderList, sexList, codigoDePaises, identifierUse, identifierCoding, telecomSystem, telecomUse, contactRelationship, comunicationLenguage, telecomCodeList, telecomSystemList, telecomUseList, phonePrefixList, emailDomainsList, listaRelaciones, lenguageList } from '../scripts/PacienteData.js';
  import PacienteData from '../scripts/PacienteData.js';
  import contractjson from '../assets/paciente_v2.json';

  let abi = contractjson.abi;
  let contractAddress = '0x652a15CCdE318Ac97731937D281AEF88f5368284';
  let gas = 3000000;
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
    /**
     * Valida la entrada en comparación con una lista de elementos.
     * 
     * @param {string} input - La entrada a validar.
     * @param {Array} list - La lista de elementos con la cual comparar la entrada.
     * @returns {boolean} - Devuelve true si la entrada coincide con algún elemento de la lista, de lo contrario devuelve false.
     */
    validateInput(input, list) {
        return list.some(item => item.code === input);
    },
    async updatePatientData() {
        console.log(this.paciente);
        window.alert(JSON.stringify(this.paciente));

    // Verificar que this.paciente y this.paciente.patientData están definidos
        if (!this.paciente || !this.paciente.patientData) {
            console.error('this.paciente o this.paciente.patientData están indefinidos o son nulos');
            return;
            }

    // Solicitar dirección mediante Metamask
        let fromAddress;
        if (typeof window.ethereum !== 'undefined') {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                console.log('Dirección obtenida mediante Metamask:', accounts[0]);
                fromAddress = accounts[0];
                // Hacer algo con la dirección obtenida, por ejemplo, asignarla a una variable en el componente
                } catch (error) {
                    console.error('Error al solicitar dirección mediante Metamask:', error);
                }
        } else {
            console.error('Metamask no está instalado o no es compatible con el navegador');
            }

        await submitTransaction(abi, contractAddress, operation, this.paciente.patientData, fromAddress, gas);
        await callTransaction(abi, contractAddress, 'getPatientData', this.paciente.patientData, fromAddress, gas);
        },
    clearForm() {
        this.paciente.clearPatientData();
        },
    },
}

        // Aquí puedes hacer lo que necesites con los datos actualizados del paciente
        // Por ejemplo, podrías enviarlos a un servidor o guardarlos en el almacenamiento local
    
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