class Tooltip {
  constructor() {
    this.desktopWrapper = document.querySelector('.share-wrapper.desktop');
    this.desktopButton = document.querySelector('.share-button.desktop');

    this.mobileWrapper = document.querySelector('.share-wrapper.mobile');
    this.mobileButton = document.querySelector('.share-button.mobile');
  }

  show() {
    if (this.desktopButton) {
      this.desktopButton.setAttribute('aria-expanded', 'true');
    }

    if (this.mobileButton) {
      this.mobileButton.setAttribute('aria-expanded', 'true');
    }

    if (this.desktopWrapper) {
      this.desktopWrapper.classList.add('is-visible');
    }

    if (this.mobileWrapper) {
      this.mobileWrapper.classList.add('is-visible');
    }
  }

  hide() {}

  toggle() {}
}
