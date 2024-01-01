import { urlencodeObject } from './url-encode.util'

const object1 = {
  client_id: 'alfa1234',
  client_name: 'new_user'
}
const object2 = {
  str_with_space: 'two spaces here',
  with_numbers: '1 with 2 numbers'
}
const object3 = {
  numbers: 10,
  string: 'words'
}

describe('urlencodeObject', () => {
  it('urlencoded alphanumeric keys and values of an object', () => {
    const r = urlencodeObject(object1)
    expect(r).toStrictEqual('client_id=alfa1234&client_name=new_user')
  })
  it('handles spaces and other special characters', () => {
    const r = urlencodeObject(object2)
    expect(r).toStrictEqual(
      'str_with_space=two%20spaces%20here&with_numbers=1%20with%202%20numbers'
    )
  })
  it('handles numbers', () => {
    const r = urlencodeObject(object3)
    expect(r).toStrictEqual('numbers=10&string=words')
  })
})
