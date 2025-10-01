import { InMemoryCache, makeVar } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        // Keeps existing pagination for repositories list
        repositories: relayStylePagination(),
      },
    },
    // Add policy for the Repository type
    Repository: {
      fields: {
        // Apply relayStylePagination to the 'reviews' field
        reviews: relayStylePagination(),
      },
    },
  },
});

export default cache;