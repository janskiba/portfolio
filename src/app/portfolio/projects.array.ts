export interface Project {
  title: string,
  description: string,
  img?: string,
  githubLink: string,
  webpageLink: string;
  class: string;
}

const baseImgHref = '../../../assets/projects-screenshots';

export const projects: Project[] = [
  {
    title: 'privateChat',
    description: 'End to end encrypted chat built with signal protocol, angular and firebase.',
    githubLink: 'https://github.com/janskiba/privateChat',
    webpageLink: 'https://privatechat2-1d108.web.app/',
    class: 'left',
    img: `${baseImgHref}/privateChat.png`
  },
  {
    title: 'cheapGames',
    description: 'cheapGames is a game price comparison website built with HTML, SCSS and Vanilla JavaScript (no frameworks). It uses CheapShark API for fetching games data.',
    githubLink: 'https://github.com/janskiba/cheapGames',
    webpageLink: 'https://janskiba.github.io/cheapGames/',
    class: 'right',
    img: `${baseImgHref}/cheapGames.png`
  },
  {
    title: 'budgetApp',
    description: 'Budget monitoring application built with Angular and Firebase which allow users to register to the app with Google account and save todos in the Cloud Firestore database.',
    githubLink: 'https://github.com/janskiba/budget-app',
    webpageLink: 'https://budgetapp-54b74.web.app/',
    class: 'left',
    img: `${baseImgHref}/budgetApp.png`
  },
  {
    title: 'prestashop-theme',
    description: 'Minimalistic theme for prestashop built from PrestaShop Classic Theme with use of jquery, smarty and scss.',
    githubLink: 'https://github.com/janskiba/prestashop-theme',
    webpageLink: 'https://janskiba.pl/',
    class: 'right',
    img: `${baseImgHref}/presta.png`
  },
];

