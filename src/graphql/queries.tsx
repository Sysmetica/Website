import { gql } from "@apollo/client"

const CAREERS = `
  careers {
    data {
      attributes {
        title,
        description,
        slug,
        level,
        icon,
        tags {
          icon,
          text
        }
      }
    }
  }
`

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
          ${CAREERS}
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
          ${CAREERS}
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
        id,
        attributes {
          name,
          email,
          number,
        }
      }
    }
  }
`

export const CONTACT_PAGE = gql`
  query {
    contactPage {
      data {
        attributes {
          title
        }
      }
    }
  }
`

export const CREATE_TALK = gql`
  mutation createTalk($name: String!, $email: String!, $subject: String!, $message: String!) {
    createTalk(data: { name: $name, email: $email, subject: $subject, message: $message}) {
      data {
        id,
        attributes {
          name,
          email,
          subject,
          message
        }
      }
    }
  }
`

export const PRIVACY_PAGE = gql`
  query {
    privacyPolicy {
      data {
        attributes {
          title,
          subtitle,
          editor
        }
      }
    }
  }
`

export const TERMS_PAGE = gql`
  query {
    termsOfService {
      data {
        attributes {
          title,
          subtitle,
          editor
        }
      }
    }
  }
`

export const SERVICE_PAGE = gql`
  query {
    servicePage {
      data {
        attributes {
          title,
          subtitle
        }
      }
    }
  }
`

export const CASE_STUDIES_PAGE = gql`
  query {
    caseStudiesPage {
      data {
        attributes {
          title,
          subtitle
        }
      }
    }
  }
`