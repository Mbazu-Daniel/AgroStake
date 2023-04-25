export const CONTRACT_ADDRESS = '0xB82B3F8Bd71ba4ab2bfA1890b4c279Fb7446B327'
export const CONTRACT_ABI = [
  { inputs: [], stateMutability: 'payable', type: 'constructor' },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'agroStakePeriod',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'currentInvestmentId',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'investmentId', type: 'uint256' },
    ],
    name: 'endInvestment',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'numDays', type: 'uint256' }],
    name: 'getInterestRate',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getInvestmentDuration',
    outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'investorAddress', type: 'address' },
    ],
    name: 'getUserAddressInvestmentId',
    outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'numDays', type: 'uint256' },
      { internalType: 'string', name: '_category', type: 'string' },
    ],
    name: 'invest',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'uint256', name: '', type: 'uint256' },
    ],
    name: 'investmentIdsByAddress',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'investments',
    outputs: [
      { internalType: 'address', name: 'investorAddress', type: 'address' },
      { internalType: 'string', name: 'investCategory', type: 'string' },
      { internalType: 'uint256', name: 'investmentId', type: 'uint256' },
      { internalType: 'uint256', name: 'startDate', type: 'uint256' },
      { internalType: 'uint256', name: 'maturityDate', type: 'uint256' },
      { internalType: 'uint256', name: 'interestRate', type: 'uint256' },
      { internalType: 'uint256', name: 'investedToken', type: 'uint256' },
      {
        internalType: 'uint256',
        name: 'investmentInterest',
        type: 'uint256',
      },
      { internalType: 'bool', name: 'open', type: 'bool' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'numDays', type: 'uint256' },
      { internalType: 'uint256', name: 'basisPoints', type: 'uint256' },
    ],
    name: 'modifyInvestmentDuration',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'investmentId', type: 'uint256' },
    ],
    name: 'retrieveInvestment',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'investorAddress',
            type: 'address',
          },
          { internalType: 'string', name: 'investCategory', type: 'string' },
          { internalType: 'uint256', name: 'investmentId', type: 'uint256' },
          { internalType: 'uint256', name: 'startDate', type: 'uint256' },
          { internalType: 'uint256', name: 'maturityDate', type: 'uint256' },
          { internalType: 'uint256', name: 'interestRate', type: 'uint256' },
          { internalType: 'uint256', name: 'investedToken', type: 'uint256' },
          {
            internalType: 'uint256',
            name: 'investmentInterest',
            type: 'uint256',
          },
          { internalType: 'bool', name: 'open', type: 'bool' },
        ],
        internalType: 'struct AgroStake.AgroInvestment',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'investmentId', type: 'uint256' },
      { internalType: 'uint256', name: 'newMaturityDate', type: 'uint256' },
    ],
    name: 'setNewMaturityDate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
