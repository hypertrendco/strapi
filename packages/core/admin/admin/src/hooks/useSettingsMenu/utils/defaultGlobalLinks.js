const defaultGlobalLinks = [
  {
    intlLabel: { id: 'Settings.application.title', defaultMessage: 'Application' },
    to: '/settings/application-infos',
    id: 'application-infos',
    isDisplayed: false,
    permissions: [],
  },
  {
    intlLabel: { id: 'Settings.apiTokens.title', defaultMessage: 'API Tokens' },
    to: '/settings/api-tokens',
    id: 'api-tokens',
    isDisplayed: false,
    permissions: [],
  },
];

export default defaultGlobalLinks;
