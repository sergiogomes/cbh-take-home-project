const crypto = require('crypto')

const TRIVIAL_PARTITION_KEY = '0'
const MAX_PARTITION_KEY_LENGTH = 256

const createCryptoHash = (str) => crypto.createHash('sha3-512').update(str).digest('hex')

const createCandidate = (obj) => {
  const { partitionKey } = obj
  if (typeof partitionKey === 'string') return partitionKey

  return JSON.stringify(obj)
}

const handleCandidateHash = (str) => {
  if (str.length > MAX_PARTITION_KEY_LENGTH) return createCryptoHash(str)

  return str
}

exports.deterministicPartitionKey = (event) => {
  if (!event) return TRIVIAL_PARTITION_KEY

  if (!event.partitionKey) createCryptoHash(JSON.stringify(event))

  const candidate = createCandidate(event)

  return handleCandidateHash(candidate)
}