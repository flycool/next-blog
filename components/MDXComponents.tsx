import TOCInline from 'pliny/ui/TOCInline'
import CustomLink from './Link'
import Pre from 'pliny/ui/Pre'
import TableWrapper from './TableWrapper'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'

export const components: MDXComponents = {
    Image,
    TOCInline,
    a: CustomLink,
    pre: Pre,
    table: TableWrapper,
    BlogNewsletterForm,
  }
  