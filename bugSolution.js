```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Component rendered:', count);
  }, [count, setCount]); // Fix: Include setCount in dependency array

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```