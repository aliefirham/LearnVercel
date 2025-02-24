import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const calculations = await prisma.solarCalculation.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    
    return NextResponse.json(calculations);
  } catch (error) {
    console.error('Error fetching calculations:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat mengambil data' },
      { status: 500 }
    );
  }
} 