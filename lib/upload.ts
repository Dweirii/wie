import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { randomUUID } from 'crypto'

export async function saveFile(file: File): Promise<string> {
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  
  // Create uploads directory if it doesn't exist
  const uploadsDir = join(process.cwd(), 'public', 'uploads')
  await mkdir(uploadsDir, { recursive: true })
  
  // Generate unique filename
  const filename = `${randomUUID()}-${file.name}`
  const filepath = join(uploadsDir, filename)
  
  await writeFile(filepath, buffer)
  
  return `/uploads/${filename}`
}
