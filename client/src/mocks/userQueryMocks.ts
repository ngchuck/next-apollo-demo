import {QUERY} from "@/components/User";


export const mocks = [
  {
    request: {
      query: QUERY,
      variables: {
        offset: 0,
        limit: 12
      },
    },
    result: {
      isLoading: false,
      data: {
        user: [{
          firstName: 'Deep',
          lastName: 'Chakraborty',
          address: {
            streetName: '22 Royal crest Avenue',
            __typename: 'address'
          },
          age: 37,
          phone: '+44-7570324243',
          email: 'deep@gmail.com',
          avatar: '',
          __typename: 'User'
        }],
      },
    },
  },
  {
    request: {
      query: QUERY,
      variables: {
        offset: 0,
        limit: 0
      },
    },
    result: {
      error: new Error("An error occurred")
    }
  },
  {
    request: {
      query: QUERY,
      variables: {
        offset: 0,
        limit: 1
      },
    },
    result: {
      isLoading: true
    }
  }
];