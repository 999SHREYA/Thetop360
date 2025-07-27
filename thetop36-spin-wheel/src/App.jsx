import SpinWheel from "./components/SpinWheel";

function App() {
  return (
    <div className="min-h-screen bg-background font-inter">
      <header className="p-4 text-center text-white bg-primary">
        {/* <img src="/assets/logo.svg" alt="Logo" className="h-10 mx-auto" /> */}
      </header>

      <main>
        <SpinWheel />
      </main>

      <footer className="p-4 text-xs text-center text-gray-500">
        © 2025 TheTop36.com
      </footer>
    </div>
  );
}

export default App;
