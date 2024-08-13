import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  const data = await request.json();
  
  try {
    const readPath = path.join(process.cwd(), 'template', 'page.jsx');
    const fileContent = await fs.promises.readFile(readPath, 'utf8');
    
    const dirPath = path.join(process.cwd(), 'app', data['route']);
    const filePath = path.join(dirPath, 'page.jsx');
    
    try {
      await fs.promises.access(filePath, fs.constants.F_OK);
      // File exists
      return NextResponse.json({ message: `File already exists at ${filePath}` });
    } catch (error) {
      // File does not exist
      await fs.promises.mkdir(dirPath, { recursive: true });
      await fs.promises.writeFile(filePath, fileContent);
      
      return NextResponse.json({ message: `File created at ${filePath}`, data: data });
    }
  } catch (error) {
    console.error('Error processing file:', error);
    return NextResponse.json({ message: 'Failed to process file', error: error.message }, { status: 500 });
  }
}
