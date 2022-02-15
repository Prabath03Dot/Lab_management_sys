import { useParams } from "react-router-dom";

const Success = () => {
  const {session_id} = useParams();
console.log(session_id);

    return (
      <div>
        {session_id}
        <h1>Success</h1>
        <h2>Thank you for your purchase!</h2>
      </div>
    );
  };
  
  export default Success;
  