import React from 'react';
import axios from 'axios';

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
    <article>
      <div>
        <figure>
          <img
            src={gameInfo.background_image}
            alt={gameInfo.background_image + ' cover'}
          />
        </figure>
      </div>
      <div>
        <h2>{gameInfo.name}</h2>
        <p>
          <strong>Genres: </strong>
          {gameInfo.genres}
        </p>
        <p>
          <strong>Platforms: </strong>
          {gameInfo.platforms}
        </p>
        <p>
          <strong>Developers: </strong>
          {gameInfo.developers}
        </p>
      </div>
    </article>
  );
}

export default GameItem;
