jest.mock('fs/promises')
import * as fs from 'fs/promises'
import { readJSONFile, writeJSONFile } from './read-and-write-files.util'

const filePath = 'path/to/your/file.txt'
const data = { mock: 'content' }
const invalidJSON = '< { }'
const mockFileContent = JSON.stringify(data)

beforeEach(() => {
  const consoleErrorSpy = jest.spyOn(console, 'error')
  consoleErrorSpy.mockImplementation(jest.fn())
})

describe('readJSONFile', () => {
  it('reads and returns the contents of a JSON file', async () => {
    ;(fs.readFile as jest.MockedFunction<typeof fs.readFile>).mockResolvedValue(
      mockFileContent
    )
    const result = await readJSONFile(filePath)
    expect(result).toStrictEqual(JSON.parse(mockFileContent))
    expect(fs.readFile).toHaveBeenCalledWith(filePath, 'utf8')
  })
  it('handles ENOENT errors', async () => {
    const expectedError = new Error('File not found')
    ;(fs.readFile as jest.MockedFunction<typeof fs.readFile>).mockRejectedValue(
      expectedError
    )
    await expect(readJSONFile(filePath)).rejects.toThrow(expectedError)
    expect(fs.readFile).toHaveBeenCalledWith(filePath, 'utf8')
  })
  it('handles JSON parsing errors', async () => {
    ;(fs.readFile as jest.MockedFunction<typeof fs.readFile>).mockResolvedValue(
      invalidJSON
    )
    await expect(readJSONFile(filePath)).rejects.toThrow(SyntaxError)
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
  it('handles errors', async () => {
    const expectedError = new Error(
      `Error: EACCES: permission denied, open '${filePath}'`
    )
    ;(
      fs.writeFile as jest.MockedFunction<typeof fs.writeFile>
    ).mockRejectedValue(expectedError)
    await expect(writeJSONFile(filePath, data)).rejects.toThrow(expectedError)
  })
})
