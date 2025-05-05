import { state } from './model';
import Tooltip from './view';

const tooltip = new Tooltip();

const init = () => {
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
