import { gql } from "@apollo/client"

export const HOME_PAGE = gql`
  query {
    homePage {
      data {
        attributes {
          title,
          subtitle,
          values {
            title,
            text
          }
          careers {
            data {
              attributes {
                title,
                description,
                slug,
                level,
                tags {
                  icon,
                  text
                }
              }
            }
          }
          casestudies {
            data {
              attributes {
                title,
                description,
                site,
                href,
                tags {
                  text
                }
                landscape {
                  data {
                    attributes {
                      previewUrl
                      url
                    }
                  }
                }
                portrait {
                  data {
                    attributes {
                      previewUrl
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export const ABOUT_PAGE = gql`
  query {
    aboutPage {
      data {
        attributes {
          title,
          subtitle,
          gallery {
            data {
              attributes {
                url,
              }
            }
          }
          teams {
            data {
              attributes {
                name,
                role,
                description,
                linkedin,
                photo {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export const CAREER_PAGE = gql`
  query {
    careerPage {
      data {
        attributes {
          title {
            title,
            subtitle
          }
          careers {
            data {
              attributes {
                title,
                description,
                slug,
                level,
                tags {
                  icon,
                  text
                }
              }
            }
          }
          offer {
            id,
            title,
            text
          }
        }
      }
    }
  }
`

export const GET_ALL_CAREERS_URL = gql`
  query {
    careers {
      data {
        attributes {
          slug,
          title
        }
      }
    }
  }
`

export const GET_SINGLE_CAREER = gql`
  query($slug: String!) {
    careers(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title,
          description,
          level,
          tags {
            icon,
            text
          }
        }
      }
    }
  }
`

export const CREATE_CV = gql`
  mutation createCv($name: String!, $email: String!, $number: String!) {
    createCv(data: { name: $name, email: $email, number: $number}) {
      data {
        attributes {
          name,
          email,
          number,
        }
      }
    }
  }
`