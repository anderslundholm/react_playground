import React from 'react'

interface Props {
  name: string
  enthusiasmLevel?: number
}

const Hello: React.FC<Props> = (name, enthusiasmLevel = 1) => {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greetings">
        Hello {name + getExclamationMarks(enthusisasmLevel)}
      </div>
    </div>
  );
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
  
export default Hello;