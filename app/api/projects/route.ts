import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // TODO: Add your projects data or fetch from database
    const projects = [];

    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}
