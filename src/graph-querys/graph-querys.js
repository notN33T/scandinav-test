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

export function PRODUCT_INFO(id) {
  const query = gql`
    {
        product(id:"${id}") {
          id
          name
          brand
          gallery
          attributes { name items { value id displayValue } }
          prices { amount currency { label } }
        }
      }`
      return query
}

export function PRODUCT_PDP_INFO(id) {
  const query = gql`
        {
            product(id:"${id}") {
              id
              name
              brand
              gallery
              category
              description
              attributes { name items { value id displayValue } }
              prices { amount currency { label }}
            }
          }`
          return query
}