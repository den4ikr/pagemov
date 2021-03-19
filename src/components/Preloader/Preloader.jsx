import LoadingGif from "../../common/assets/loadinggif.gif";
import useStyles from "./PreloaderStyle";

export const Preloader = () => {
  const style = useStyles();
  return (
    <div className={style.loadingGif}>
      <img src={LoadingGif} alt="Loading Gif" />
    </div>
  );
};
