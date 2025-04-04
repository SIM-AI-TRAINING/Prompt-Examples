import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Prompt-Examples/my-website/blog',
    component: ComponentCreator('/Prompt-Examples/my-website/blog', 'e92'),
    exact: true
  },
  {
    path: '/Prompt-Examples/my-website/blog/archive',
    component: ComponentCreator('/Prompt-Examples/my-website/blog/archive', '7b0'),
    exact: true
  },
  {
    path: '/Prompt-Examples/my-website/blog/authors',
    component: ComponentCreator('/Prompt-Examples/my-website/blog/authors', '3cc'),
    exact: true
  },
  {
    path: '/Prompt-Examples/my-website/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/Prompt-Examples/my-website/blog/authors/all-sebastien-lorber-articles', '899'),
    exact: true
  },
  {
    path: '/Prompt-Examples/my-website/blog/authors/yangshun',
    component: ComponentCreator('/Prompt-Examples/my-website/blog/authors/yangshun', 'cea'),
    exact: true
  },
  {
    path: '/Prompt-Examples/my-website/blog/first-blog-post',
    component: ComponentCreator('/Prompt-Examples/my-website/blog/first-blog-post', 'b8e'),
    exact: true
  },
  {
    path: '/Prompt-Examples/my-website/blog/long-blog-post',
    component: ComponentCreator('/Prompt-Examples/my-website/blog/long-blog-post', 'a4a'),
    exact: true
  },
  {
    path: '/Prompt-Examples/my-website/blog/mdx-blog-post',
    component: ComponentCreator('/Prompt-Examples/my-website/blog/mdx-blog-post', '4af'),
    exact: true
  },
  {
    path: '/Prompt-Examples/my-website/blog/tags',
    component: ComponentCreator('/Prompt-Examples/my-website/blog/tags', 'e22'),
    exact: true
  },
  {
    path: '/Prompt-Examples/my-website/blog/tags/docusaurus',
    component: ComponentCreator('/Prompt-Examples/my-website/blog/tags/docusaurus', '6e9'),
    exact: true
  },
  {
    path: '/Prompt-Examples/my-website/blog/tags/facebook',
    component: ComponentCreator('/Prompt-Examples/my-website/blog/tags/facebook', 'd20'),
    exact: true
  },
  {
    path: '/Prompt-Examples/my-website/blog/tags/hello',
    component: ComponentCreator('/Prompt-Examples/my-website/blog/tags/hello', 'adf'),
    exact: true
  },
  {
    path: '/Prompt-Examples/my-website/blog/tags/hola',
    component: ComponentCreator('/Prompt-Examples/my-website/blog/tags/hola', '60e'),
    exact: true
  },
  {
    path: '/Prompt-Examples/my-website/blog/welcome',
    component: ComponentCreator('/Prompt-Examples/my-website/blog/welcome', '328'),
    exact: true
  },
  {
    path: '/Prompt-Examples/my-website/markdown-page',
    component: ComponentCreator('/Prompt-Examples/my-website/markdown-page', 'e23'),
    exact: true
  },
  {
    path: '/Prompt-Examples/my-website/docs',
    component: ComponentCreator('/Prompt-Examples/my-website/docs', 'ace'),
    routes: [
      {
        path: '/Prompt-Examples/my-website/docs',
        component: ComponentCreator('/Prompt-Examples/my-website/docs', 'b28'),
        routes: [
          {
            path: '/Prompt-Examples/my-website/docs',
            component: ComponentCreator('/Prompt-Examples/my-website/docs', '994'),
            routes: [
              {
                path: '/Prompt-Examples/my-website/docs/category/prompt---basics',
                component: ComponentCreator('/Prompt-Examples/my-website/docs/category/prompt---basics', 'b79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/my-website/docs/category/prompt---pmo',
                component: ComponentCreator('/Prompt-Examples/my-website/docs/category/prompt---pmo', 'a0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/my-website/docs/category/prompt---tools',
                component: ComponentCreator('/Prompt-Examples/my-website/docs/category/prompt---tools', '4a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/my-website/docs/intro',
                component: ComponentCreator('/Prompt-Examples/my-website/docs/intro', '064'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/my-website/docs/prompt-basics/congratulations',
                component: ComponentCreator('/Prompt-Examples/my-website/docs/prompt-basics/congratulations', '8f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/my-website/docs/prompt-basics/create-a-blog-post',
                component: ComponentCreator('/Prompt-Examples/my-website/docs/prompt-basics/create-a-blog-post', 'f96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/my-website/docs/prompt-basics/create-a-document',
                component: ComponentCreator('/Prompt-Examples/my-website/docs/prompt-basics/create-a-document', '1db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/my-website/docs/prompt-basics/create-a-page',
                component: ComponentCreator('/Prompt-Examples/my-website/docs/prompt-basics/create-a-page', 'f3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/my-website/docs/prompt-basics/deploy-your-site',
                component: ComponentCreator('/Prompt-Examples/my-website/docs/prompt-basics/deploy-your-site', '203'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/my-website/docs/prompt-basics/markdown-features',
                component: ComponentCreator('/Prompt-Examples/my-website/docs/prompt-basics/markdown-features', '00b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/my-website/docs/prompt-pmo/congratulations',
                component: ComponentCreator('/Prompt-Examples/my-website/docs/prompt-pmo/congratulations', 'ef4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/my-website/docs/prompt-pmo/create-a-blog-post',
                component: ComponentCreator('/Prompt-Examples/my-website/docs/prompt-pmo/create-a-blog-post', '6fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/my-website/docs/prompt-pmo/create-a-document',
                component: ComponentCreator('/Prompt-Examples/my-website/docs/prompt-pmo/create-a-document', 'd35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/my-website/docs/prompt-pmo/create-a-page',
                component: ComponentCreator('/Prompt-Examples/my-website/docs/prompt-pmo/create-a-page', 'd15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/my-website/docs/prompt-pmo/deploy-your-site',
                component: ComponentCreator('/Prompt-Examples/my-website/docs/prompt-pmo/deploy-your-site', 'ade'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/my-website/docs/prompt-pmo/markdown-features',
                component: ComponentCreator('/Prompt-Examples/my-website/docs/prompt-pmo/markdown-features', '560'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/my-website/docs/prompt-tools/manage-docs-versions',
                component: ComponentCreator('/Prompt-Examples/my-website/docs/prompt-tools/manage-docs-versions', '843'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/my-website/docs/prompt-tools/tools-list',
                component: ComponentCreator('/Prompt-Examples/my-website/docs/prompt-tools/tools-list', 'bde'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/my-website/docs/prompt-tools/translate-your-site',
                component: ComponentCreator('/Prompt-Examples/my-website/docs/prompt-tools/translate-your-site', '0b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Prompt-Examples/my-website/',
    component: ComponentCreator('/Prompt-Examples/my-website/', 'c68'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
