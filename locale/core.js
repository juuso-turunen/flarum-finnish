app.translator.plural = function(count) {
  if (count >= 0 && count < 2) {
    return 'one';
    }
  else {
    return 'other';
  }
};

moment.locale('fi', {
  months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
  monthsShort : 'janv.févr._mars_avr._mai_juin_juil._août_sept._ oct.nov.déc.'.split('_'),
  weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
  weekdaysShort : 'su._ma._maaliskuuta._Ke._To._Pe._La.'.split('_'),
  weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
  longDateFormat : {
    LT : 'HH:mm',
    LTS : 'HH:mm:ss',
    L : 'DD/MM/YYYY',
    LL : 'D MMMM YYYY',
    LLL : 'D MMMM YYYY HH:mm',
    LLLL : 'dddd D MMMM YYYY HH:mm'
  },
  calendar : {
    sameDay: '[tänään\'hui à] LT',
    nextDay: '[huomenna à] LT',
    nextWeek: 'dddd [à] LT',
    lastDay: '[Eeilen à] LT',
    lastWeek: 'dddd [viimeisin à] LT',
    sameElse: 'L'
  },
  relativeTime : {
    future : 'sisään %s',
    past : 'se y a %s',
    s : 'sekuntia',
    m : 'minuutti',
    mm : '%d minuuttia',
    h : 'yksi tunti',
    hh : '%d tuntia',
    d : 'un päivä',
    dd : '%d päivää',
    M : 'un kuukausi',
    MM : '%d kuukausi',
    y : 'vuosi',
    yy : '%d vuotta'
  },
  ordinalParse: /\d{1,2}(er|)/,
  ordinal : function (number) {
    return number + (number === 1 ? 'er' : '');
  },
  week : {
    dow : 1,
    doy : 4
  }
});
