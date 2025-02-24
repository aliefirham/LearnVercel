import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const calculation = await prisma.solarCalculation.create({
      data: {
        monthlyBill: body.monthlyBill,
        currentPower: body.currentPower,
        powerCapacity: body.powerCapacity,
        roofSize: body.roofSize,
        monthlyUsage: body.monthlyUsage,
        roofType: body.roofType,
        roofStructure: body.roofStructure,
        fullName: body.fullName,
        companyName: body.companyName || '',
        email: body.email,
        position: body.position || '',
        phone: body.phone,
        location: body.location
      }
    });

    return NextResponse.json(calculation);
  } catch (error) {
    console.error('Error saving calculation:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat menyimpan data' },
      { status: 500 }
    );
  }
} 