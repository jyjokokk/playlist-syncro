import { JSONFileContent } from './types/json-file.interface'
import * as fs from 'fs/promises'

export async function readJSONFile(filePath: string): Promise<JSONFileContent> {
  try {
    const fileContent = await fs.readFile(filePath, 'utf8')
    const jsonData = JSON.parse(fileContent) as JSONFileContent
    return jsonData
  } catch (error) {
    console.error('Error reading JSON file:', error)
    throw error
  }
}

export async function writeJSONFile(
  filePath: string,
  data: unknown
): Promise<boolean> {
  try {
    const jsonString = JSON.stringify(data, null, 2)
    await fs.writeFile(filePath, jsonString, 'utf8')
    return true
  } catch (error) {
    console.error('Error writing JSON file:', error)
    throw error
  }
}
