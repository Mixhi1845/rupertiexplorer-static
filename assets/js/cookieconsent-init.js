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

    googlemaps : {
      embedUrl: 'https://www.google.com/maps/embed?pb={data-id}',

      iframe: {
          allow : 'picture-in-picture; fullscreen;'
      },

      languages : {
          en : {
              notice: 'This content is hosted by a third party. By showing the external content you accept the <a rel="noreferrer noopener" href="https://cloud.google.com/maps-platform/terms" target="_blank">terms and conditions</a> of Google Maps.',
              loadAllBtn: "Don't ask again"
          },
          de : {
              notice: 'Dieser Inhalt wird von einem Dritten gehostet. Durch die Anzeige der externen Inhalte akzeptieren Sie die <a rel="noreferrer noopener" href="https://cloud.google.com/maps-platform/terms" target="_blank">Allgemeine Geschäftsbedingungen</a> von Google Maps.',
              loadAllBtn: "Akzeptieren und laden"
          }
      }
  }
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
        googlemaps: {
          label: 'Google Maps Embed',
          onAccept: () => im.acceptService('googlemaps'),
          onReject: () => im.rejectService('googlemaps'),
        }
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