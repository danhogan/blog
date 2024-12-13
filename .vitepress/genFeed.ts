import path from 'path'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import { createContentLoader, type SiteConfig } from 'vitepress'

const baseUrl = `https://belowthebenthic.com`

export async function genFeed(config: SiteConfig) {
  const feed = new Feed({
    title: 'Below The Benthic',
    description: 'The official blog for Below The Benthic',
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    image: 'logo.svg',
    favicon: `${baseUrl}/logo.svg`,
    copyright:
      'Copyright (c) 2024-present, Dan Hogan'
  })

  const posts = await createContentLoader('blog/**/*.md', {
    excerpt: true,
    render: true
  }).load()

  posts.sort(
    (a, b) =>
      +new Date(b.frontmatter.date as string) -
      +new Date(a.frontmatter.date as string)
  )

  for (const { url, excerpt, frontmatter, html } of posts) {
    feed.addItem({
      title: frontmatter.title,
      id: `${baseUrl}${url}`,
      link: `${baseUrl}${url}`,
      description: excerpt,
      content: html?.replaceAll('&ZeroWidthSpace;', ''),
      author: [
        {
          name: frontmatter.author,
          link: frontmatter.twitter
            ? `https://twitter.com/${frontmatter.twitter}`
            : undefined
        }
      ],
      date: frontmatter.date
    })
  }

  writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2())
}
