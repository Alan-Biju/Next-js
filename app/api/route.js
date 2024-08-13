import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';


export async function GET() {
  const dirPath = path.join(process.cwd())
  const files = await fs.promises.readdir(dirPath, { withFileTypes: true });

  let folderNames = files
    .filter(file => file.isDirectory())
    .map(file => file.name);

  const readPath = path.join(process.cwd(), 'template', 'page.jsx');
  const fileContent = await fs.promises.readFile(readPath, 'utf8');
  
  const dirPath1 = path.join(process.cwd(), 'app', "biu");
    
  return NextResponse.json({ msg: 'Hello from server', folderNames, dirPath1 , readPath, fileContent});
}

export async function POST(request) {
  const data = await request.json();
  return NextResponse.json({ data: data });
}
