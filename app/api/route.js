import { NextResponse } from 'next/server'
 
export async function GET(request) {
  return NextResponse.json({ msg: 'Hello from server' })
}

export async function POST(request) {
    const data =  await request.json()
    return NextResponse.json({ data: data })
  }