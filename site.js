/* ============================================================
   TBD.ai — shared responsive nav behavior.
   Appends a hamburger button to the pill nav and injects a
   full-screen overlay menu. Included on every page.
   ============================================================ */
(function () {
  function init() {
    var nav = document.querySelector('nav.pill') || document.querySelector('nav');
    if (!nav) return;

    // ---- Hamburger button (becomes a direct flex child of the nav) ----
    var toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'nav-toggle';
    toggle.setAttribute('aria-label', 'Open menu');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<span class="bar"></span>';
    nav.appendChild(toggle);

    // ---- Overlay menu ----
    var overlay = document.createElement('div');
    overlay.className = 'm-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.innerHTML =
      '<a href="capabilities.html">Capabilities</a>' +
      '<a href="method.html">Method</a>' +
      '<a href="pricing.html">Pricing</a>' +
      '<a href="contact.html">Contact</a>' +
      '<a class="m-cta" href="contact.html">Get in touch</a>';
    document.body.appendChild(overlay);

    // Highlight the link for the current page.
    var here = location.pathname.split('/').pop() || 'index.html';
    var links = overlay.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      if (!links[i].classList.contains('m-cta') && links[i].getAttribute('href') === here) {
        links[i].classList.add('current');
      }
    }

    function open() {
      overlay.classList.add('open');
      toggle.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close menu');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      overlay.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', function () {
      if (overlay.classList.contains('open')) close(); else open();
    });
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay || e.target.tagName === 'A') close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('open')) close();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
