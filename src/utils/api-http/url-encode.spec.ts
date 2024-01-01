import { urlencodeObject } from './url-encode.util'

const object1 = {
  client_id: 'alfa1234',
  client_name: 'new_user'
}

describe('urlencodeObject', () => {
  it('makes an urlencoded string of a <string, string | number> object', () => {
    const r = urlencodeObject(object1)
    expect(r).toStrictEqual('client_id=alfa1234&client_name=new_user')
  })
})
