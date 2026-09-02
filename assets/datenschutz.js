/* Datenschutz-Lightbox – gemeinsamer Inhalt für alle Seiten.
   Wird von jeder Seite per <script src> eingebunden (wie Bootstrap) und
   baut sich ihr Overlay selbst. Öffnet per Klick auf einen Link mit der
   Klasse .ds-open; schließt per ×-Button, Klick auf den Hintergrund, Esc.
   Textquelle: einseitensprung.at/cl (Modal „Datenschutz & Privacy"). */
(function () {
  var CONTENT =
    '<h2>Datenschutz &amp; Privacy</h2>' +
    '<p>Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.</p>' +
    '<h3>Cookies</h3>' +
    '<p>Unsere Website verwendet so genannte Cookies. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an.</p>' +
    '<p>Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.</p>' +
    '<p>Wenn Sie dies nicht wünschen, so können Sie Ihren Browser so einrichten, dass er Sie über das Setzen von Cookies informiert und Sie dies nur im Einzelfall erlauben.</p>' +
    '<p><strong>notwendige cookies:</strong></p>' +
    '<table class="ds-table"><thead><tr><th>Name</th><th>Wert</th><th>Dauer</th></tr></thead><tbody>' +
    '<tr><td>ASPSESSION*</td><td>*</td><td>session</td></tr>' +
    '<tr><td>FC2020_BG</td><td>true/false</td><td>1 Jahr</td></tr>' +
    '<tr><td>EU_COOKIE_LAW_CONSENT</td><td>true/false</td><td>1 Jahr</td></tr>' +
    '</tbody></table>' +
    '<h3>Web-Analyse</h3><p>Es gibt KEINE Analyse.</p>' +
    '<h3>Social Media Plugins</h3><p>Es gibt KEINE Plugins.</p>' +
    '<h3>Externe Ressourcen</h3><p>Es gibt KEINE Externen Ressourcen (Google Maps, Recaptcha, Fonts, Libs, etc.), über die Drittanbieter persönliche Daten empfangen könnten.</p>' +
    '<h3>Ihre Rechte</h3><p>Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren. In Österreich ist dies die Datenschutzbehörde.</p>' +
    '<h3>Ansprechpartner für Datenschutz</h3>' +
    '<p>Stephan Fössl<br>+43 663 85 85 136<br>' +
    '<a href="mailto:office@einseitensprung.at">office@einseitensprung.at</a><br>' +
    '<a href="https://www.einseitensprung.at" target="_blank" rel="noopener">einseitensprung.at</a></p>';

  var box = document.createElement('div');
  box.className = 'lightbox';
  box.id = 'dsLightbox';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.setAttribute('aria-label', 'Datenschutz & Privacy');
  box.innerHTML =
    '<div class="lightbox-panel">' +
      '<button type="button" class="lightbox-close" id="dsLightboxClose" aria-label="Schließen">&times;</button>' +
      '<div class="lightbox-panel-body">' + CONTENT + '</div>' +
    '</div>';
  document.body.appendChild(box);

  var closeBtn = document.getElementById('dsLightboxClose');
  var lastFocus = null;

  function onKey(e) { if (e.key === 'Escape') close(); }
  function open(e) {
    if (e) e.preventDefault();
    lastFocus = document.activeElement;
    box.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
    document.addEventListener('keydown', onKey);
  }
  function close() {
    box.classList.remove('is-open');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKey);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  closeBtn.addEventListener('click', close);
  box.addEventListener('click', function (e) { if (e.target === box) close(); });
  document.querySelectorAll('.ds-open').forEach(function (a) {
    a.addEventListener('click', open);
  });
})();
