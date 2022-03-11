interface ChildProps {
  color: string;
  onClick: () => void;
}

const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  )
}


// This approach to exporting child components inherits the default props React makes availabe for us. The one on top does not.
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  )
}

export default Child;
