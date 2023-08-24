import "./Loader.scss";
import loading from "../../assets/loading.gif";
const Loader = () => {
  return (
    <div className="content">
      <div>
        <img src={loading} alt="loading" />
      </div>
    </div>
  );
};

export default Loader;
