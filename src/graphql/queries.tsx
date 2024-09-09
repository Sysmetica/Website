import { gql } from "@apollo/client"

const IMAGE = `
data {
  attributes {
    url
  }
}
`

const VALUES = `
values {
  title
  text
  icon
}
`

const CASES = `
data {
  attributes {
    title
    slug
    template
    description
    site
    href
    tags {
      text
    }
    homeImage {
      ${IMAGE}
    }
    archiveImage {
      ${IMAGE}
    }
  }
}
`

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
          title
          subtitle
          subtitleSelected
          info {
            sectionOneTitle
            sectionOneText
            sectionOneLink
            sectionTwoTitle
            sectionTwoText
            sectionTwoLink
          }
          ${VALUES}
          ${CAREERS}
          casestudies {
            ${CASES}
          }
          teams {
            data {
              attributes {
                preview {
                  ${IMAGE}
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
          ${VALUES}
          map {
            title
            text
          }
          gallery {
            ${IMAGE}
          }
          teams {
            data {
              attributes {
                name,
                role,
                description,
                linkedin,
                photo {
                  ${IMAGE}
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
  mutation createCv($name: String!, $email: String!, $number: String!, $vacancy: String!, $file: ID, $filePath: String!) {
    createCv(data: { name: $name, email: $email, number: $number, vacancy: $vacancy, file: $file, filePath: $filePath}) {
      data {
        id,
        attributes {
          name,
          email,
          number,
          vacancy,
          file {
            data {
              id
            }
          }
          filePath
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
          text
        }
      }
    }
  }
`

export const CREATE_TALK = gql`
  mutation createTalk($name: String!, $email: String!, $subject: String!, $message: String!) {
    createTalk(data: {name: $name, email: $email, subject: $subject, message: $message}) {
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


export const GET_ALL_CASE_STUDIES_URL = gql`
  query {
    caseStudies {
      data {
        attributes {
          slug
        }
      }
    }
  }
`

export const GET_SINGLE_CASE_STUDIE = gql`
  query($slug: String!) {
    caseStudies(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          slug
          template
          caseStudie {
            ${CASES}
          }
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
          title
          subtitle
          tags {
            tag
          }
          casestudies {
            ${CASES}
          }
        }
      }
    }
  }
`

export const OPTIONS = gql`
query {
  option {
    data {
      attributes {
        theme
        copy
        linkedin
        upwork
        instagram
        menu {
          slug
          name
        }
        email
      }
    }
  }
}
`

export const META = gql`
query {
  meta {
    data {
      attributes {
        title
        description
      }
    }
  }
}
`

export const SP_ALL_SLUGS = gql`
query {
  singlePages(pagination:{limit: -1}) {
    data {
      attributes {
        slug
      }
    }
  }
}
`

export const SP_SINGLE = gql`
query($slug: String!) {
  singlePages(filters: { slug: { eq: $slug } }) {
    data {
      attributes {
        title
        subtitle
        content
      }
    }
  }
}
`
