import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import GameItemMiniature from './components/GameItemMiniature';

function Home() {
  React.useEffect(() => {
    fetchGameList();
  }, []);

  const [gameList, setGameList]: any[] = React.useState([]);

  const fetchGameList = async () => {
    const data = await axios.get('https://rawg.io/api/games');

    const gameList: [] = data.data.results;

    setGameList(gameList);
  };

  return (
    <main className='container'>
      <section className='row'>
        {gameList.map((game: any) => (
          <Link to={`/${game.id}`} className='col-lg-3 mb-2 mt-2'>
            <GameItemMiniature
              key={game.id}
              background_image={game.background_image}
              name={game.name}
            />
          </Link>
        ))}
      </section>

      <section>slick-carousel</section>
    </main>
  );
}

export default Home;
