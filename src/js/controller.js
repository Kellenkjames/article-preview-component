import { state } from './model.js';
import Tooltip from './view.js';

const tooltip = new Tooltip();

const isClickInsideTooltip = target =>
  target.closest('.share-button') || target.closest('.share-toast');

const init = () => {
  console.log('controller initialized');
  const handleDesktopToggle = e => {
    if (!e.target.closest('button')) return;
    tooltip.toggle();
    state.isTooltipVisible = !state.isTooltipVisible;
  };

  tooltip.desktopButton?.addEventListener('click', handleDesktopToggle);

  document.addEventListener('click', e => {
    if (!isClickInsideTooltip(e.target) && state.isTooltipVisible) {
      tooltip.hide();
      state.isTooltipVisible = false;
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && state.isTooltipVisible) {
      tooltip.hide();
      state.isTooltipVisible = false;
    }
  });
};

init();
