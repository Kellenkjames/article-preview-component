export default class Tooltip {
  constructor() {
    this.desktopWrapper = document.querySelector('.share-wrapper.desktop');
    this.desktopButton = document.querySelector('.share-button.desktop');
  }

  show() {
    this.desktopWrapper?.classList.add('is-visible');
    this.desktopButton?.setAttribute('aria-expanded', 'true');
  }

  hide() {
    this.desktopWrapper?.classList.remove('is-visible');
    this.desktopButton?.setAttribute('aria-expanded', 'false');
  }

  toggle() {
    if (!this.desktopWrapper) return;
    const isVisible = this.desktopWrapper?.classList.contains('is-visible');
    isVisible ? this.hide() : this.show();
  }
}
