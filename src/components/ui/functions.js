import {trackGithubClick} from '../utils/ph-tracking';

function trackGaConversion () {
  trackGithubClick ();
  window.gtag ('config', 'UA-35527198-1', {
    page_title: 'Go to GitHub',
    page_path: '/goal-ga-github',
  });
}

export {trackGaConversion};
