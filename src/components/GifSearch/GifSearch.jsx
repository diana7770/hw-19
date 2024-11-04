import style from "./GifSearch.module.css";

const GifSearch = ({ getImagesByInput }) => (
  <header className={style.searchbar}>
    <form className={style.form} onSubmit={getImagesByInput}>
      <input
        className={style["input"]}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        name="searchbarInput"
      />
      <button type="submit" className={style["button"]}>
        <span className={style["buttonLabel"]}>search</span>
      </button>
    </form>
  </header>
);

export default GifSearch;
