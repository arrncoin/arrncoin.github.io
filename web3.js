import Web3 from 'web3';

// Ganti URL penyedia Web3 dengan penyedia Optimistic Ethereum L2
const web3 = new Web3('https://optimism.io/rpc');

// Ganti dengan alamat kontrak token ARRN di L2 Ethereum
const arrnContractAddress = '0x...';

// Buat instance kontrak ARRN
const arrnContract = new web3.eth.Contract(ARRN_ABI, arrnContractAddress);

// Sisipkan kode ABI kontrak ARRN di sini
const ARRN_ABI = [...];

export { web3, arrnContract };
