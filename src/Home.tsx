import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import GameItemMiniature from './components/GameItemMiniature';
import './styles/home.scss';

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
      <section className='row pb-5 '>
        <p className='heading announcer col-lg-12'>Most Popular Games</p>
        {gameList.map((game: any) => (
          <div className='col-lg-3 my-2 px-2'>
            <Link to={`/${game.id}`}>
              <GameItemMiniature
                key={game.id}
                background_image={game.background_image}
                name={game.name}
              />
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Home;
