import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '3a4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'e64'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '6a1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '005'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '933'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'b76'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '3d3'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', 'e97'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '69e'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '48b'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'c31'),
            routes: [
              {
                path: '/concepts/equations',
                component: ComponentCreator('/concepts/equations', '0cd'),
                exact: true
              },
              {
                path: '/delegation',
                component: ComponentCreator('/delegation', 'f36'),
                exact: true,
                sidebar: "bittensorSidebar"
              },
              {
                path: '/getting-started/installation',
                component: ComponentCreator('/getting-started/installation', 'c7d'),
                exact: true,
                sidebar: "bittensorSidebar"
              },
              {
                path: '/getting-started/wallets',
                component: ComponentCreator('/getting-started/wallets', 'e78'),
                exact: true,
                sidebar: "bittensorSidebar"
              },
              {
                path: '/glossary',
                component: ComponentCreator('/glossary', 'ed7'),
                exact: true,
                sidebar: "bittensorSidebar"
              },
              {
                path: '/governance',
                component: ComponentCreator('/governance', 'f0c'),
                exact: true,
                sidebar: "bittensorSidebar"
              },
              {
                path: '/learn/anatomy-of-incentive-mechanism',
                component: ComponentCreator('/learn/anatomy-of-incentive-mechanism', '557'),
                exact: true,
                sidebar: "bittensorSidebar"
              },
              {
                path: '/learn/bittensor-building-blocks',
                component: ComponentCreator('/learn/bittensor-building-blocks', 'c59'),
                exact: true,
                sidebar: "bittensorSidebar"
              },
              {
                path: '/learn/introduction',
                component: ComponentCreator('/learn/introduction', '6f3'),
                exact: true,
                sidebar: "bittensorSidebar"
              },
              {
                path: '/reference/bittensor-api-ref',
                component: ComponentCreator('/reference/bittensor-api-ref', '29a'),
                exact: true
              },
              {
                path: '/reference/btcli',
                component: ComponentCreator('/reference/btcli', 'aa7'),
                exact: true,
                sidebar: "bittensorSidebar"
              },
              {
                path: '/senate',
                component: ComponentCreator('/senate', '64b'),
                exact: true,
                sidebar: "bittensorSidebar"
              },
              {
                path: '/subnets/checklist-for-subnet',
                component: ComponentCreator('/subnets/checklist-for-subnet', '1c6'),
                exact: true,
                sidebar: "bittensorSidebar"
              },
              {
                path: '/subnets/code-walkthrough-text-prompting',
                component: ComponentCreator('/subnets/code-walkthrough-text-prompting', '32b'),
                exact: true,
                sidebar: "bittensorSidebar"
              },
              {
                path: '/subnets/create-a-subnet',
                component: ComponentCreator('/subnets/create-a-subnet', 'b8a'),
                exact: true,
                sidebar: "bittensorSidebar"
              },
              {
                path: '/subnets/register-and-participate',
                component: ComponentCreator('/subnets/register-and-participate', '58a'),
                exact: true,
                sidebar: "bittensorSidebar"
              },
              {
                path: '/subnets/subnet-hyperparameters',
                component: ComponentCreator('/subnets/subnet-hyperparameters', '492'),
                exact: true
              },
              {
                path: '/subnets/working-with-subnets',
                component: ComponentCreator('/subnets/working-with-subnets', '1db'),
                exact: true,
                sidebar: "bittensorSidebar"
              },
              {
                path: '/tutorials/basic-subnet-tutorials',
                component: ComponentCreator('/tutorials/basic-subnet-tutorials', '6e8'),
                exact: true,
                sidebar: "bittensorSidebar"
              },
              {
                path: '/whats-new-in-docs',
                component: ComponentCreator('/whats-new-in-docs', 'e6c'),
                exact: true,
                sidebar: "bittensorSidebar"
              },
              {
                path: '/yuma-consensus',
                component: ComponentCreator('/yuma-consensus', '2b8'),
                exact: true,
                sidebar: "bittensorSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'e48'),
                exact: true,
                sidebar: "bittensorSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
