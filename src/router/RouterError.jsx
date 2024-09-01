import { useRouteError } from "react-router-dom";

function RouterError() {
  const error = useRouteError();
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}

export default RouterError;
