import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <div>
      <header className="text-foreground">
        <h1>Home</h1>
      </header>
    </div>
  );
}
