import Spinner from "../components/spinner/Spinner";
import Skeleton from "../components/skeleton/Skeleton";

function setContent(process, Component, data, choice = true) {
  switch (process) {
    case "idle":
      return choice ? <Skeleton /> : <Spinner />;
    case "loading":
      return <Spinner />;
    case "confirmed":
      return <Component data={data} />;
    case "error":
      return null;
    default:
      throw new Error("Unexpected process state");
  }
}

export default setContent;
