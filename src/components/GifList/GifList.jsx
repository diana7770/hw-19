import style from "./GifList.module.css";

const GifList = ({ gifs, getGifSrcForModal }) => (
  <ul className={style.gallery}>
    {gifs.map((gif) => (
      <li className={style.galleryItem} key={gif.id}>
        <img
          src={gif.images.original.url}
          alt={gif.alt_text}
          className={style["image"]}
          onClick={getGifSrcForModal}
        />
      </li>
    ))}
  </ul>
);

export default GifList;
