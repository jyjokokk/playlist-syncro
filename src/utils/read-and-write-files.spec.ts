jest.mock('fs/promises')
import * as fs from 'fs/promises'
import { readJSONFile, writeJSONFile } from './read-and-write-files.util'

const filePath = 'path/to/your/file.txt'
const data = { mock: 'content' }
const mockFileContent = JSON.stringify(data)

describe('readJSONFile', () => {
  it('reads and returns the contents of a JSON file', async () => {
    ;(fs.readFile as jest.MockedFunction<typeof fs.readFile>).mockResolvedValue(
      mockFileContent
    )
    const result = await readJSONFile(filePath)
    expect(result).toStrictEqual(JSON.parse(mockFileContent))
    expect(fs.readFile).toHaveBeenCalledWith(filePath, 'utf8')
  })
})

describe('writeJSONFile', () => {
  it('writes data in JSON format to a file', async () => {
    ;(
      fs.writeFile as jest.MockedFunction<typeof fs.writeFile>
    ).mockResolvedValue()
    const r = await writeJSONFile(filePath, data)
    expect(r).toBe(true)
  })
})
