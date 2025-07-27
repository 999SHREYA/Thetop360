import ScratchCard from "./components/ScratchCard";

function App() {
  return (
    <div className="bg-background">
    <div className="min-h-[90vh]  font-inter">
      <div className="flex items-center justify-between p-4 bg-primary">
      {/* <img src="./src/assets/logo.svg" alt="Logo" className="h-10 " /> */}

<header className="font-semibold text-center text-white hover:font-bold hover:cursor-pointer">
TheTop36.com   
</header>
      </div>
  

      <main>
        <ScratchCard/>
      </main>

   
    </div>
       <footer className="p-4 text-xs text-center text-gray-500">
       © 2025 TheTop36.com
     </footer>
     </div>
  );
}

export default App;
