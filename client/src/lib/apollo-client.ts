import {ApolloClient, InMemoryCache} from "@apollo/client";
import {offsetLimitPagination} from "@apollo/client/utilities";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          user: offsetLimitPagination()
        },
      },
    },
  }),
});

export default client;