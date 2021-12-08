import { useParams } from "react-router-dom";
import Header from "../../components/Header";

const SpecificGroup = () => {
  const params = useParams();

  return (
    <div>
      <Header path="groups" />
      SpecificGroup
    </div>
  );
};

export default SpecificGroup;
