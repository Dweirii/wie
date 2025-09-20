// For serverless environments, we'll store files as base64 data URLs
// This avoids file system write issues in serverless platforms

export async function saveFile(file: File): Promise<string> {
  try {
    // Convert file to base64 data URL
    const buffer = Buffer.from(await file.arrayBuffer());
    const base64 = buffer.toString('base64');
    const mimeType = file.type || 'application/octet-stream';
    const dataUrl = `data:${mimeType};base64,${base64}`;
    
    return dataUrl;
  } catch (error) {
    console.error('Failed to process file:', error);
    throw new Error('Failed to process file upload');
  }
}

// Helper function to check if a string is a data URL
export function isDataUrl(str: string): boolean {
  return str.startsWith('data:');
}

// Helper function to get file info from data URL
export function getFileInfoFromDataUrl(dataUrl: string): { mimeType: string; size: number } {
  if (!isDataUrl(dataUrl)) {
    throw new Error('Invalid data URL');
  }
  
  const [header, base64] = dataUrl.split(',');
  const mimeType = header.match(/data:([^;]+)/)?.[1] || 'application/octet-stream';
  const size = Math.round((base64.length * 3) / 4); // Approximate size
  
  return { mimeType, size };
}