import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',

{
  type: 'category',
  label: 'Developer Guide',
  items: [
    'developer-guide/project-structure',
    'developer-guide/code-structure',
    'developer-guide/adding-algorithm',
    'developer-guide/coding-standards',
    'developer-guide/architecture-decisions',
  ],
},


    {
      type: 'category',
      label: 'Architecture',
      items: [
        'architecture/high-level',
        'architecture/backend',
        'architecture/frontend',
        'architecture/request-flow',
        'architecture/data-flow',
      ],
    },

    {
      type: 'category',
      label: 'API',
      items: [
        'api/overview',
        'api/rest-api',
        'api/websocket',
      ],
    },

    {
      type: 'category',
      label: 'Algorithms',
      items: [
        'algorithms/round-robin',
        'algorithms/weighted-round-robin',
        'algorithms/least-connections',
      ],
    },

    {
      type: 'category',
      label: 'Modules',
      items: [
        'modules/analytics',
        'modules/traffic-simulator',
      ],
    },

    {
      type: 'category',
      label: 'Deployment',
      items: [
        'deployment/docker',
        'deployment/render',
        'deployment/vercel',
      ],
    },

    {
      type: 'category',
      label: 'Developer Guide',
      items: [
        'developer-guide/folder-structure',
        'developer-guide/code-structure',
        'developer-guide/adding-algorithm',
        'developer-guide/coding-standards',
      ],
    },

{
  type: 'category',
  label: 'Support',
  items: [
    'troubleshooting',
    'faq',
    'limitations',
    'future-improvements',
  ],
},
  ],
};

export default sidebars;