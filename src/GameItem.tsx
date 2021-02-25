import React from 'react';
import axios from 'axios';
import './styles/game-item.scss';
import Button from '@material-ui/core/Button';

function GameItem({ match }: any) {
  React.useEffect(() => {
    fetchGame();
  }, []);

  const [gameInfo, setGameInfo]: any[] = React.useState({});

  const fetchGame = async () => {
    const data = await axios.get(
      `https://rawg.io/api/games/${match.params.id}`
    );
    const game = data.data;
    console.log(game);

    let platformList: any[] = [];

    game.platforms.forEach((platform: any) =>
      platformList.push(platform.platform.name)
    );

    setGameInfo({
      name: game.name,
      background_image: game.background_image,
      platforms: platformList.join(', '),
      genres: game.genres[0].name,
      developers: game.developers[0].name,
    });
  };

  return (
    <article className='container game-item'>
      <div className='panel image'>
        <figure>
          <img
            src={gameInfo.background_image}
            alt={gameInfo.background_image + ' cover'}
          />
        </figure>
      </div>
      <div className='panel info'>
        <h2 className='mb-4'>{gameInfo.name}</h2>
        <p className='mb-1 m-0'>
          <strong>Genres: </strong>
          {gameInfo.genres}
        </p>
        <p className='mb-1 mt-0'>
          <strong>Platforms: </strong>
          {gameInfo.platforms}
        </p>
        <p className='mb-4 mt-0'>
          <strong>Developers: </strong>
          {gameInfo.developers}
        </p>
        <Button variant='contained' color='primary' disableElevation>
          Add to Cart
        </Button>
      </div>
    </article>
  );
}

export default GameItem;
