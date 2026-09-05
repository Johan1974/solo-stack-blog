(function(){
  var FORM_IDS = { daily: '9884662', weekly: '9884665' };

  var MARKUP =
    '<div class="subscribe-box">' +
      '<p class="kicker">Newsletter</p>' +
      '<h3>Get new reviews by email</h3>' +
      '<p class="subscribe-intro">Pick how often — no spam, unsubscribe anytime.</p>' +
      '<p class="subscribe-thanks" hidden>Thanks — check your inbox to confirm your subscription.</p>' +
      '<form class="subscribe-form" method="post" target="kit-subscribe-frame">' +
        '<div class="subscribe-freq">' +
          '<label><input type="radio" name="freq" value="daily" checked> Daily — as new reviews go live</label>' +
          '<label><input type="radio" name="freq" value="weekly"> Weekly digest</label>' +
        '</div>' +
        '<div class="subscribe-row">' +
          '<input type="email" name="email_address" placeholder="you@email.com" required aria-label="Email address">' +
          '<button type="submit" class="btn">Subscribe</button>' +
        '</div>' +
      '</form>' +
    '</div>';

  document.querySelectorAll('[data-subscribe-widget]').forEach(function(host){
    host.innerHTML = MARKUP;
    var form = host.querySelector('.subscribe-form');
    form.addEventListener('submit', function(){
      var freq = form.querySelector('input[name="freq"]:checked').value;
      form.action = 'https://app.convertkit.com/forms/' + FORM_IDS[freq] + '/subscriptions';
      setTimeout(function(){
        host.querySelector('.subscribe-intro').hidden = true;
        form.hidden = true;
        host.querySelector('.subscribe-thanks').hidden = false;
      }, 300);
    });
  });

  if (!document.querySelector('iframe[name="kit-subscribe-frame"]')) {
    var iframe = document.createElement('iframe');
    iframe.name = 'kit-subscribe-frame';
    iframe.hidden = true;
    document.body.appendChild(iframe);
  }
})();
