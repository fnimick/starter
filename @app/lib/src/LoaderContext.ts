import { getSdk } from "../../graphql/remix-types";

export interface LoaderContext {
  cspNonce: string;
  graphqlSdk: Promise<ReturnType<typeof getSdk>>;
  csrfToken: () => string;
}
