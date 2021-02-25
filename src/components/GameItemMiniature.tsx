import GameListInterface from '../interfaces/GameListInterface';
import '../styles/game-item-miniature.scss';

function GameItemMiniature({ name, background_image }: GameListInterface) {
  return (
    <article className='game-miniature m-2'>
      <figure className='game-miniature__img'>
        <img src={background_image} alt={name + ' cover'} />
      </figure>
      <div className='game-miniature__info'>
        <h5>{name}</h5>
        <p>$60</p>
      </div>
    </article>
  );
}

export default GameItemMiniature;
