const im = iframemanager();

//document.body.classList.add('theme');

im.run({
  onChange: ({ changedServices, eventSource }) => {
    if (eventSource.type === 'click') {
      const servicesToAccept = [
        ...CookieConsent.getUserPreferences().acceptedServices['analytics'],
        ...changedServices,
      ];

      CookieConsent.acceptService(servicesToAccept, 'analytics');
    }
  },

  currLang: 'de',

  services: {
    youtube: {
      embedUrl: 'https://www.youtube-nocookie.com/embed/{data-id}',
      thumbnailUrl: 'https://i3.ytimg.com/vi/{data-id}/hqdefault.jpg',

      iframe: {
        allow:
          'accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;',
      },

      languages: {
        de: {
          notice:
            'Dieser Inhalt wir von einem Dritten gehostet. Durch akzeptieren von externem Inhalt akzeptierst du die <a rel="noreferrer noopener" href="https://www.youtube.com/t/terms" target="_blank">terms and conditions</a> von youtube.com.',
          loadAllBtn: 'Akzeptieren und laden',
        },
      },
    },
  },
});

CookieConsent.run({
  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom left',
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: 'box',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },

  categories: {
    necessary: {
      readOnly: true,
      enabled: true,
    },

    analytics: {
      services: {
        youtube: {
          label: 'Youtube Embed',
          onAccept: () => im.acceptService('youtube'),
          onReject: () => im.rejectService('youtube'),
        },
      },
    },

    ads: {},
  },

  language: {
    default: 'de',

    translations: {
      de: '/assets/js/de.json',
    },
  },
});