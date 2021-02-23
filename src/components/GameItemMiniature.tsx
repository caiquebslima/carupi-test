import GameListInterface from '../interfaces/GameListInterface';

function GameItemMiniature({ name, background_image }: GameListInterface) {
  return (
    <article className='game-miniature col-xl-4'>
      <figure className='game-miniature__img'>
        <img src={background_image} alt={name + ' cover'} />
      </figure>
      <h3>{name}</h3>
      <button>Add to Cart</button>
    </article>
  );
}

export default GameItemMiniature;
