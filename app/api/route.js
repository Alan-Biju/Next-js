import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';


export async function GET() {
  const dirPath = path.join(process.cwd())
  const files = await fs.promises.readdir(dirPath, { withFileTypes: true });

  let folderNames = files
    .filter(file => file.isDirectory())
    .map(file => file.name);
  return NextResponse.json({ msg: 'Hello from server', folderNames });
}

export async function POST(request) {
  const data = await request.json();
  return NextResponse.json({ data: data });
}
