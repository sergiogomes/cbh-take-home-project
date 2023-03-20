const { deterministicPartitionKey } = require('./dpk')

describe('deterministicPartitionKey', () => {
  it('should return the literal 0 when given no input', () => {
    const response = deterministicPartitionKey()
    
    expect(response).toBe('0')
  })

  it('should return the literal 0 when given empty string input', () => {
    const response = deterministicPartitionKey('')
    
    expect(response).toBe('0')
  })

  it('should return the stringified version of text when not given the partitionKey', () => {
    const response = deterministicPartitionKey('This is a test of a string event')
    
    expect(response).toBe('\"This is a test of a string event\"')
  })

  it('should return the stringified version of an object when not given the partitionKey', () => {
    const response = deterministicPartitionKey({ userId: 'abc123', role: 'user' })
    
    expect(response).toBe('{\"userId\":\"abc123\",\"role\":\"user\"}')
  })

  it('should return the partitionKey when no longer than 256 characters', () => {
    const response = deterministicPartitionKey({ partitionKey: 'ThisIsAPartitionKey' })
    
    expect(response).toBe('ThisIsAPartitionKey')
  })

  it('should return the hashed partitionKey when longer than 256 characters', () => {
    const response = deterministicPartitionKey({
      partitionKey: '123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789'
    })
    
    expect(response).toBe('a9ca47c5b377be33cfd94d41f18c6e76cf8f47caf458f9c8a978285a709783c8b741ca3bbd2cd0acb452bc5ed0ef3d46547b27f8dd4785a9d8ce8d778706aae2')
  })
})
