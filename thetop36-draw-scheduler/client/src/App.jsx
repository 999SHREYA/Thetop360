


import Header from './components/Header';
import WinnerFeed from './components/WinnerFeed';
import ParticipantsList from './components/ParticipantsList';

export default function App() {
  return (
    <div className="max-w-lg p-4 mx-auto">
   
      <Header />
      <WinnerFeed />
      <ParticipantsList />
      <footer className="mt-10 text-sm text-center text-gray-500">
        © 2025 TheTop36.com
      </footer>
    </div>
  );
}
