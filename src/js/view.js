export default class Tooltip {
  constructor() {
    this.desktopWrapper = document.querySelector('.share-wrapper.desktop');
    this.desktopButton = document.querySelector('.share-button.desktop');

    this.mobileWrapper = document.querySelector('.share-wrapper.mobile');
    this.mobileButton = document.querySelector('.share-button.mobile');
  }

  show() {
    this.desktopButton?.setAttribute('aria-expanded', 'true');
    this.mobileButton?.setAttribute('aria-expanded', 'true');

    this.desktopWrapper?.classList.add('is-visible');
    this.mobileWrapper?.classList.add('is-visible');
  }

  hide() {
    this.desktopButton?.setAttribute('aria-expanded', 'false');
    this.mobileButton?.setAttribute('aria-expanded', 'false');

    this.desktopWrapper?.classList.remove('is-visible');
    this.mobileWrapper?.classList.remove('is-visible');
  }

  toggle() {
    const isVisible =
      this.desktopWrapper?.classList.contains('is-visible') ||
      this.mobileWrapper?.classList.contains('is-visible');

    isVisible ? this.hide() : this.show();
  }
}
