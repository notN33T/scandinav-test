import gql                  from 'graphql-tag'

export const CURRENCIES_QUERY = gql`
{
    currencies {
      label
      symbol
    }
  }`

export const CATEGORY_PRODUCTS_ALL = gql`
{
  category(input:{title:"all"}) {
    products {
      id
      name
     	inStock
      gallery
      prices {
        currency {label symbol}
        amount
      }
    }
  }
}`