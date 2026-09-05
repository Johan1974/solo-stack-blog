(function(){
  // These are Kit's own, unmodified generated embeds (HTML tab, "Embed this
  // form") for the two Solo Stack forms. Do not hand-write a substitute for
  // this markup — two earlier attempts at reconstructing the submit
  // mechanism (a guessed v3 REST API call, then a guessed plain form POST
  // to app.convertkit.com) both silently failed. Kit's own ck.5.js script
  // intercepts the real <form> submit via AJAX and swaps in the success
  // message itself, so this widget only needs to toggle which of the two
  // forms is visible based on the frequency choice.
  var DAILY_HTML = '<form action="https://app.kit.com/forms/9884662/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="9884662" data-uid="9bacf18d5e" data-format="inline" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" min-width="400 500 600 700 800"><div data-style="clean"><ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul><div data-element="fields" data-stacked="false" class="seva-fields formkit-fields"><div class="formkit-field"><input class="formkit-input" name="email_address" aria-label="Email Address" placeholder="Email Address" required="" type="email"></div><button data-element="submit" class="formkit-submit formkit-submit"><div class="formkit-spinner"><div></div><div></div><div></div></div><span class="">Subscribe</span></button></div><div class="formkit-powered-by-convertkit-container"><a href="https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic" data-element="powered-by" class="formkit-powered-by-convertkit" data-variant="dark" target="_blank" rel="nofollow noopener">Built with Kit</a></div></div></form>';

  var WEEKLY_HTML = '<form action="https://app.kit.com/forms/9884665/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="9884665" data-uid="451896deb4" data-format="inline" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" min-width="400 500 600 700 800"><div data-style="clean"><ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul><div data-element="fields" data-stacked="false" class="seva-fields formkit-fields"><div class="formkit-field"><input class="formkit-input" name="email_address" aria-label="Email Address" placeholder="Email Address" required="" type="email"></div><button data-element="submit" class="formkit-submit formkit-submit"><div class="formkit-spinner"><div></div><div></div><div></div></div><span class="">Subscribe</span></button></div><div class="formkit-powered-by-convertkit-container"><a href="https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic" data-element="powered-by" class="formkit-powered-by-convertkit" data-variant="dark" target="_blank" rel="nofollow noopener">Built with Kit</a></div></div></form>';

  document.querySelectorAll('[data-subscribe-widget]').forEach(function(host){
    host.innerHTML =
      '<div class="subscribe-box">' +
        '<p class="kicker">Newsletter</p>' +
        '<h3>Get new reviews by email</h3>' +
        '<p class="subscribe-intro">Pick how often — no spam, unsubscribe anytime.</p>' +
        '<div class="subscribe-freq">' +
          '<label><input type="radio" name="freq" value="daily" checked> Daily — as new reviews go live</label>' +
          '<label><input type="radio" name="freq" value="weekly"> Weekly digest</label>' +
        '</div>' +
        '<div class="subscribe-kit-slot" data-slot="daily">' + DAILY_HTML + '</div>' +
        '<div class="subscribe-kit-slot" data-slot="weekly" hidden>' + WEEKLY_HTML + '</div>' +
      '</div>';

    var box = host.querySelector('.subscribe-box');
    var dailySlot = box.querySelector('[data-slot="daily"]');
    var weeklySlot = box.querySelector('[data-slot="weekly"]');
    box.querySelectorAll('input[name="freq"]').forEach(function(radio){
      radio.addEventListener('change', function(){
        var isDaily = box.querySelector('input[name="freq"]:checked').value === 'daily';
        dailySlot.hidden = !isDaily;
        weeklySlot.hidden = isDaily;
      });
    });
  });

  // Kit's own form-enhancement script: intercepts the real submit via AJAX
  // and swaps in the success message itself. Load once per page, after the
  // forms above are already in the DOM.
  if (document.querySelectorAll('[data-subscribe-widget]').length && !document.querySelector('script[data-ck-js]')) {
    var s = document.createElement('script');
    s.src = 'https://f.convertkit.com/ckjs/ck.5.js';
    s.setAttribute('data-ck-js', '1');
    document.body.appendChild(s);
  }
})();
