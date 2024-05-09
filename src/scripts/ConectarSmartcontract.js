import Web3 from 'web3';

/**
 * Envía una transacción al contrato inteligente.
 * @param {string} ABI - La interfaz del contrato inteligente.
 * @param {string} ContractAddress - La dirección del contrato inteligente.
 * @param {string} operation - La operación a realizar en el contrato inteligente.
 * @param {Array} args - Los argumentos necesarios para la operación.
 * @param {string} fromAddress - La dirección desde la cual se envía la transacción.
 * @param {number} gasLimit - El límite de gas para la transacción.
 * @returns {Promise<void>} - Una promesa que se resuelve cuando la transacción se ha enviado correctamente.
 */
async function submitTransaction(ABI, ContractAddress, operation, args,  fromAddress, gasLimit) {
    console.log(createEthereumConnectorRequest(ABI, ContractAddress, operation, args, fromAddress, gasLimit));
    await sendRequests(createEthereumConnectorRequest(ABI, ContractAddress, operation, args, fromAddress, gasLimit));
}

async function callTransaction(ABI, ContractAddress, operation, args,  fromAddress, gasLimit) {
    console.log(createEthereumConnectorRequest(ABI, ContractAddress, operation, args, fromAddress, gasLimit));
    await callRequests(createEthereumConnectorRequest(ABI, ContractAddress, operation, args, fromAddress, gasLimit));
}

/**
 * Crea una solicitud de conector Ethereum.
 *
 * @param {Array} ABI - El ABI del contrato Ethereum.
 * @param {string} ContractAddress - La dirección del contrato Ethereum.
 * @param {string} operation - La operación a realizar ('query' o 'transaction').
 * @param {Array} args - Los argumentos para la operación.
 * @param {string} fromAddress - La dirección desde la cual se realiza la operación.
 * @param {number} gasLimit - El límite de gas para la operación.
 * @returns {Object} - La solicitud de conector Ethereum.
 */
function createEthereumConnectorRequest(ABI,ContractAddress, operation, args, fromAddress, gasLimit) {
    const query = operation === 'query';
    return {
        fromAddress: fromAddress,
        ABI: ABI,
        ContractAddress: ContractAddress,
        verb: operation,
        args: [extractValuesObjectAnidated(args)],
        gasLimit: gasLimit,
        readOnly: query
    };
}

/**
 * Extrae los valores de un objeto anidado y los devuelve en un array.
 * @param {Object} obj - El objeto anidado del cual extraer los valores.
 * @returns {Array} - Un array con los valores extraídos del objeto anidado.
 */
function extractValuesObjectAnidated(obj) {
    let result = [];

    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            // Si el valor es un objeto, llamamos recursivamente a extractValuesObjectAnidated
            let nestedObj = extractValuesObjectAnidated(obj[key]);
            result = result.concat([nestedObj]);
        } else {
            // Si el valor no es un objeto, lo agregamos al resultado
            result.push(obj[key]);
        }
    }

    return result;
}

/**
 * Envía solicitudes a un contrato inteligente en la red Ethereum.
 * @param {Object} request - La solicitud a enviar al contrato inteligente.
 * @param {Array} request.ABI - El ABI (Application Binary Interface) del contrato inteligente.
 * @param {string} request.ContractAddress - La dirección del contrato inteligente.
 * @param {string} request.verb - El verbo (método) a invocar en el contrato inteligente.
 * @param {Array} request.args - Los argumentos para el verbo del contrato inteligente.
 * @param {string} request.fromAddress - La dirección desde la cual se envía la transacción.
 * @param {number} gasLimit - El límite de gas para la transacción.
 * @returns {Promise} - Una promesa que se resuelve con el resultado de la transacción.
 */
async function sendRequests(request) {
    try {
        // Connect to the Ethereum network using web3
        let web3;
        if (typeof window.ethereum !== 'undefined') {
            // Use MetaMask provider
            web3 = new Web3(window.ethereum);
            try {
            // Request account access if needed
            await window.ethereum.enable();
            } catch (error) {
            // User denied account access
            console.error(error);
            }
        } else {
            // Use your Ethereum provider URL
            web3 = new Web3('YOUR_ETHEREUM_PROVIDER_URL');
        }

        // Get the contract instance
        const contract = new web3.eth.Contract(request.ABI, request.ContractAddress);

        // Send the transaction to the smart contract
        const result = await contract.methods[request.verb](...request.args).send({
            from: request.fromAddress,
            gas: request.gasLimit,
        });

        console.log(request.verb, result);
    } catch (error) {
        console.error(error);
    }
}
async function callRequests(request) {
    try {
        // Connect to the Ethereum network using web3
        let web3;
        if (typeof window.ethereum !== 'undefined') {
            // Use MetaMask provider
            web3 = new Web3(window.ethereum);
            try {
            // Request account access if needed
            await window.ethereum.enable();
            } catch (error) {
            // User denied account access
            console.error(error);
            }
        } else {
            // Use your Ethereum provider URL
            web3 = new Web3('YOUR_ETHEREUM_PROVIDER_URL');
        }

        // Get the contract instance
        const contract = new web3.eth.Contract(request.ABI, request.ContractAddress);

        // Send the transaction to the smart contract
        const result = await contract.methods[request.verb](...request.args).call({
            from: request.fromAddress,
            gas: request.gasLimit,
        });

        console.log(request.verb, result);
    } catch (error) {
        console.error(error);
    }
}
export {
    submitTransaction,
    callTransaction,
    createEthereumConnectorRequest,
    extractValuesObjectAnidated,
    sendRequests
  };