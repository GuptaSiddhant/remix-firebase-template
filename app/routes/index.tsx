export default function Index() {
  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
      className="w-1/2 mx-auto my-10"
    >
      <h1>Welcome to Remix</h1>
      <button onClick={console.log}>Click me</button>
    </div>
  );
}
