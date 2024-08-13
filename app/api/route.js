import { NextResponse } from 'next/server';
import path from 'path';


export async function GET() {
  const dirPath = path.join(process.cwd())
  return NextResponse.json({ msg: 'Hello from server', dirPath });
}

export async function POST(request) {
  const data = await request.json();
  return NextResponse.json({ data: data });
}
