import { state } from './model.js';
import Tooltip from './view.js';

const tooltip = new Tooltip();

const init = () => {
  console.log('controller initialized');
  const handleToggle = e => {
    if (!e.target.closest('button')) return;
    tooltip.toggle();
    state.isTooltipVisible = !state.isTooltipVisible;
  };

  tooltip.desktopButton?.addEventListener('click', handleToggle);
  tooltip.mobileButton?.addEventListener('click', handleToggle);

  document.addEventListener('click', e => {
    const isInside =
      e.target.closest('.share-button') || e.target.closest('.share-toast');

    if (!isInside && state.isTooltipVisible) {
      tooltip.hide();
      state.isTooltipVisible = false;
    }
  });
};

init();
