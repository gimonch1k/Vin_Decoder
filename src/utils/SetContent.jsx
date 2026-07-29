import Spinner from "../components/spinner/Spinner";
import Skeleton from "../components/skeleton/Skeleton";

function SetContent(process, Component, data) {
  switch (process) {
    case "idle":
      return <Skeleton />;
    case "loading":
      return <Spinner />;
    case "confirmed":
      return <Component data={data} />;
    case "error":
      return 2;
    default:
      throw new Error("Unexpected process state");
  }
}

export default SetContent;
