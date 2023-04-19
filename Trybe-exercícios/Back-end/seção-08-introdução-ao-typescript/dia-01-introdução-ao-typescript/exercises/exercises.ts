// ./exercises.ts

export function getSquareArea(side: number): number {
  return side ** 2;
}

export function getRectangleArea(base: number, height: number): number {
  return base * height;
}
  
export function getTriangleArea(base: number, height: number): number {
    return (base * height) / 2;
}

export function getPolygonPerimeter(sides: number[]): number {
  return sides.reduce((acc, side) => acc + side, 0);
}

export function triangleCheck(
  sideA: number,
  sideB: number,
  sideC: number
): boolean {
  const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
  const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
  const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
  return checkSideA && checkSideB && checkSideC;
}

export function getLozengeArea(smallerDiagonal: number, largerDiagonal: number ): number {
  return (largerDiagonal * smallerDiagonal) / 2;
}

export function getTrapeziumArea(smallerBase: number, largerBase: number, height: number): number {
  return ((largerBase + smallerBase) * height) /  2;
}

export function getCircleArea(radius: number): number {
  return Math.PI * radius ** 2;
}