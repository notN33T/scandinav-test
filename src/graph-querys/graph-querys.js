import gql                  from 'graphql-tag'

export const CURRENCIES_QUERY = gql`
{
    currencies {
      label
      symbol
    }
  }`