function Square() {
  return <button className="square"></button>;
}

export default function Board() {
  return (
    <>
      <Square />
      <Square />
      <Square />
    </>
  );
}
