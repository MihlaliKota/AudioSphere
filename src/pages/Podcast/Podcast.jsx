import { useParams } from "react-router-dom";

const Podcast = () => {
  const { id } = useParams();

    return <div>Podcast {id}</div>;
};

export default Podcast;
