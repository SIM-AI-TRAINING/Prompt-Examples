import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Prompt-Examples/blog',
    component: ComponentCreator('/Prompt-Examples/blog', 'e7b'),
    exact: true
  },
  {
    path: '/Prompt-Examples/blog/archive',
    component: ComponentCreator('/Prompt-Examples/blog/archive', '02d'),
    exact: true
  },
  {
    path: '/Prompt-Examples/blog/authors',
    component: ComponentCreator('/Prompt-Examples/blog/authors', '940'),
    exact: true
  },
  {
    path: '/Prompt-Examples/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/Prompt-Examples/blog/authors/all-sebastien-lorber-articles', 'd9a'),
    exact: true
  },
  {
    path: '/Prompt-Examples/blog/authors/yangshun',
    component: ComponentCreator('/Prompt-Examples/blog/authors/yangshun', '4b2'),
    exact: true
  },
  {
    path: '/Prompt-Examples/blog/first-blog-post',
    component: ComponentCreator('/Prompt-Examples/blog/first-blog-post', '563'),
    exact: true
  },
  {
    path: '/Prompt-Examples/blog/long-blog-post',
    component: ComponentCreator('/Prompt-Examples/blog/long-blog-post', '0b4'),
    exact: true
  },
  {
    path: '/Prompt-Examples/blog/mdx-blog-post',
    component: ComponentCreator('/Prompt-Examples/blog/mdx-blog-post', '467'),
    exact: true
  },
  {
    path: '/Prompt-Examples/blog/tags',
    component: ComponentCreator('/Prompt-Examples/blog/tags', '525'),
    exact: true
  },
  {
    path: '/Prompt-Examples/blog/tags/docusaurus',
    component: ComponentCreator('/Prompt-Examples/blog/tags/docusaurus', 'fee'),
    exact: true
  },
  {
    path: '/Prompt-Examples/blog/tags/facebook',
    component: ComponentCreator('/Prompt-Examples/blog/tags/facebook', '5ef'),
    exact: true
  },
  {
    path: '/Prompt-Examples/blog/tags/hello',
    component: ComponentCreator('/Prompt-Examples/blog/tags/hello', '994'),
    exact: true
  },
  {
    path: '/Prompt-Examples/blog/tags/hola',
    component: ComponentCreator('/Prompt-Examples/blog/tags/hola', 'e8f'),
    exact: true
  },
  {
    path: '/Prompt-Examples/blog/welcome',
    component: ComponentCreator('/Prompt-Examples/blog/welcome', '55a'),
    exact: true
  },
  {
    path: '/Prompt-Examples/markdown-page',
    component: ComponentCreator('/Prompt-Examples/markdown-page', '45f'),
    exact: true
  },
  {
    path: '/Prompt-Examples/docs',
    component: ComponentCreator('/Prompt-Examples/docs', '26d'),
    routes: [
      {
        path: '/Prompt-Examples/docs',
        component: ComponentCreator('/Prompt-Examples/docs', '1ed'),
        routes: [
          {
            path: '/Prompt-Examples/docs',
            component: ComponentCreator('/Prompt-Examples/docs', 'a45'),
            routes: [
              {
                path: '/Prompt-Examples/docs/category/prompt---basics',
                component: ComponentCreator('/Prompt-Examples/docs/category/prompt---basics', '4e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/docs/category/prompt---pmo',
                component: ComponentCreator('/Prompt-Examples/docs/category/prompt---pmo', '874'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/docs/category/prompt---tools',
                component: ComponentCreator('/Prompt-Examples/docs/category/prompt---tools', '90c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/docs/intro',
                component: ComponentCreator('/Prompt-Examples/docs/intro', 'a13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/docs/prompt-basics/congratulations',
                component: ComponentCreator('/Prompt-Examples/docs/prompt-basics/congratulations', 'b83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/docs/prompt-basics/create-a-blog-post',
                component: ComponentCreator('/Prompt-Examples/docs/prompt-basics/create-a-blog-post', '61b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/docs/prompt-basics/create-a-document',
                component: ComponentCreator('/Prompt-Examples/docs/prompt-basics/create-a-document', '871'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/docs/prompt-basics/create-a-page',
                component: ComponentCreator('/Prompt-Examples/docs/prompt-basics/create-a-page', 'e0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/docs/prompt-basics/deploy-your-site',
                component: ComponentCreator('/Prompt-Examples/docs/prompt-basics/deploy-your-site', '5ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/docs/prompt-basics/markdown-features',
                component: ComponentCreator('/Prompt-Examples/docs/prompt-basics/markdown-features', '162'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/docs/prompt-pmo/congratulations',
                component: ComponentCreator('/Prompt-Examples/docs/prompt-pmo/congratulations', '284'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/docs/prompt-pmo/create-a-blog-post',
                component: ComponentCreator('/Prompt-Examples/docs/prompt-pmo/create-a-blog-post', '709'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/docs/prompt-pmo/create-a-document',
                component: ComponentCreator('/Prompt-Examples/docs/prompt-pmo/create-a-document', 'ee0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/docs/prompt-pmo/create-a-page',
                component: ComponentCreator('/Prompt-Examples/docs/prompt-pmo/create-a-page', '9b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/docs/prompt-pmo/deploy-your-site',
                component: ComponentCreator('/Prompt-Examples/docs/prompt-pmo/deploy-your-site', '7d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/docs/prompt-pmo/markdown-features',
                component: ComponentCreator('/Prompt-Examples/docs/prompt-pmo/markdown-features', 'd31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/docs/prompt-tools/manage-docs-versions',
                component: ComponentCreator('/Prompt-Examples/docs/prompt-tools/manage-docs-versions', 'dfe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/docs/prompt-tools/tools-list',
                component: ComponentCreator('/Prompt-Examples/docs/prompt-tools/tools-list', '044'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Prompt-Examples/docs/prompt-tools/translate-your-site',
                component: ComponentCreator('/Prompt-Examples/docs/prompt-tools/translate-your-site', 'ef8'),
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
    path: '/Prompt-Examples/',
    component: ComponentCreator('/Prompt-Examples/', '8a8'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
