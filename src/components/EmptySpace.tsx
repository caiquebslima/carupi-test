interface EmptySpaceProps {
  height: number;
}

export default function EmptySpace({ height }: EmptySpaceProps) {
  return <div style={{ height }}></div>;
}
