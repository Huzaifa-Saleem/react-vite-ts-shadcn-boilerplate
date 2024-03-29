import { useMemo } from "react";
import { Helmet } from "react-helmet";

import PATHS, { getPath } from "@routes/paths";

// ----------------------------------------------------------------------
export default function Page500() {
  const goHomeLink = useMemo(() => getPath(PATHS.root, {}), []);

  return (
    <>
      <Helmet>
        <title> Internal Server</title>
      </Helmet>

      <div>
        <h3>Internal Error</h3>

        <p>
          There was an error, please try again later.
          <br />
          If the issue persists, please contact Support.
        </p>

        {/* <Il500 sx={{ height: 260, my: { xs: 5, sm: 10 } }} /> */}

        <div>
          {/* <Button href={goHomeLink} size="large" variant="outlined">
            Go Home
          </Button>

          <Button onClick={() => window.location.reload()} size="large" variant="contained">
            Reload page
          </Button> */}
        </div>
      </div>
    </>
  );
}
