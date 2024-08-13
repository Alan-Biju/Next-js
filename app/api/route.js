import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';


export async function GET() {
  const dirPath = path.join(process.cwd(),'app')
  const files = await fs.promises.readdir(dirPath, { withFileTypes: true });

  let folderNames = files
    .filter(file => file.isDirectory())
    .map(file => file.name);

  const readPath = path.join(process.cwd(), 'template', 'page.jsx');
  const fileContent = await fs.promises.readFile(readPath, 'utf8');
  const dirPath1 = path.join(process.cwd(), 'app', "biju__");
  
  try {
    await fs.promises.access(dirPath1, fs.constants.F_OK);
    return NextResponse.json({ msg: 'Hello from server',message: `File already exists at ${dirPath1}`, folderNames, dirPath1 , readPath, fileContent, });
  } catch (error) {

    await fs.promises.mkdir(dirPath1)
  }
    
  return NextResponse.json({ msg: 'Hello from server', folderNames, dirPath1 , readPath, fileContent});
}

export async function POST(request) {
  const data = await request.json();
  return NextResponse.json({ data: data });
}
