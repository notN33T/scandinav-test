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
      brand
     	inStock
      gallery
      prices {
        currency {label symbol}
        amount
      }
    }
  }
}`

export const CATEGORY_PRODUCTS_TECH = gql`
{
  category(input:{title:"tech"}) {
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

export const CATEGORY_PRODUCTS_CLOTHES = gql`
{
  category(input:{title:"clothes"}) {
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