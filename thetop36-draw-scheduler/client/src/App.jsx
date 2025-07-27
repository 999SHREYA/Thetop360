// import WinnerFeed from "./components/WinnerFeed";

// function App() {
//   return (
//     <div className="min-h-screen bg-background font-inter">
//       

//       <main>
//         <WinnerFeed />
//       </main>

//       <footer className="p-4 text-xs text-center text-gray-500">
//         © 2025 TheTop36.com
//       </footer>
//     </div>
//   );
// }

// export default App;


import Header from './components/Header';
import WinnerFeed from './components/WinnerFeed';
import ParticipantsList from './components/ParticipantsList';

export default function App() {
  return (
    <div className="max-w-lg p-4 mx-auto">
      <header className="p-4 text-center text-white bg-primary">
       <img src="/assets/logo.svg" alt="Logo" className="h-10 mx-auto" />
       </header>
      <Header />
      <WinnerFeed />
      <ParticipantsList />
      <footer className="mt-10 text-sm text-center text-gray-500">
        © 2025 TheTop36.com
      </footer>
    </div>
  );
}