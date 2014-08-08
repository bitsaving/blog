{{#if site.googleAnalyticsTrackingID}}

  ga = function() { ga.q.push(arguments); };
  ga.q = []; ga.l = 1 * new Date();

  ga('create', '{{site.googleAnalyticsTrackingID}}', 'auto');

  {{#is site.env 'development'}}
    // In non-production mode, simply log GA hits to the console.
    ga(function(tracker) {
      tracker.set('sendHitTask', function(model) {
        var payload = model.get('hitPayload');
        console.log('%c' + model.get('hitType'), 'font-weight:bold;');
        console.log(decodeURIComponent(payload).replace(/&/g, '\n&'));

        // Throw to stop subsequent tasks.
        throw 'Abort tracking in non-production environments.'
      });
    });
  {{/is}}

  // Note, tasks must be set before sending the first hit
  ga('send', 'pageview');

{{/if}}