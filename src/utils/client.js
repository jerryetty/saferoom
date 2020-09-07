import ApolloClient from "apollo-boost"

const url = "http://localhost:1337"

export default new ApolloClient({
  uri: `${url}/graphql`,
  request: operation => {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },
})