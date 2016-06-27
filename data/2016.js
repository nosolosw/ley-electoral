var ElectionsDefaultModel = {
  'groupBy': 'province',
  'seats': 350,
  'threshold': 3
};

var seatsCurrent = {
  "pp":            137,
  "psoe":           85,
  "unidos_podemos": 71,
  "ciudadanos":     32,
  "erc":             9,
  "cdc":             8,
  "pnv":             5,
  "bildu":           2,
  "cc":              1,
  "pacma":           0,
  "recortes_cero":   0,
  "upyd":            0,
  "vox":             0,
  "bng":             0,
  "others":          0
};


var parties = ['pp', 'psoe', 'unidos_podemos', 'ciudadanos', 'erc', 'cdc', 'pnv', 'bildu', 'cc', 'pacma', 'recortes_cero', 'upyd', 'vox', 'bng', 'others'];
var colors = ['#0194D9', '#F82433', '#9C489E', '#EF7A36', '#F79F21', '#19204B', '#009526', '#C3CF34', '#FFFF96', '#BBBF11', '#6699FF', '#FF0090', '#00BB00', '#9CC1E6', '#f0f0f0'];
var names = {
  "pp":             "PP",
  "psoe":           "PSOE",
  "unidos_podemos": "UNIDOS PODEMOS",
  "ciudadanos":     "CIUDADANOS",
  "erc":            "ESQUERRA",
  "cdc":            "CDC",
  "pnv":            "EAJ-PNV",
  "bildu":          "EH BILDU",
  "cc":             "CCa-PNC",
  "pacma":          "PACMA",
  "recortes_cero":  "RECORTES CERO",
  "upyd":           "UPyD",
  "vox":            "VOX",
  "bng":            "BNG-NÓS",
  "others":         "OTROS"
};

// If there are several parties with stablished pacts, or one party with different
// brands we can calculate its seats individually and present it aggregated

var pacts = {
    'pp':             ['pp'],
    'psoe':           ['psoe'],
    'unidos_podemos': ['unidos_podemos', 'en_marea', 'compromis', 'en_comu_podem'],
    'ciudadanos':     ['ciudadanos'],
    'erc':            ['erc'],
    'cdc':            ['cdc'],
    'pnv':            ['pnv'],
    'bildu':          ['bildu'],
    'cc':             ['cc'],
    'pacma':          ['pacma'],
    'recortes_cero':  ['recortes_cero'],
    'upyd':           ['upyd'],
    'vox':            ['vox'],
    'bng':            ['bng'],
    'others':         ['others']
};

// 2016
var sqlCountry =  encodeURIComponent(
  'SELECT \'España\' as region, ' +
  'sum(seats) as seats, sum(total_votes) as "total votes", sum(abstention) as abstention, sum(invalid_votes) as "invalid votes", sum(blank_votes) as "blank votes", ' +
  'sum(pp) as pp, sum(psoe) as psoe, ' +
  'sum(compromis) as compromis, sum(en_comu_podem) as en_comu_podem, sum(en_marea) as en_marea, sum(unidos_podemos) as unidos_podemos, ' +
  'sum(ciudadanos) as ciudadanos, sum(erc) as erc, sum(cdc) as cdc, sum(pnv) as pnv, sum(bildu) as bildu, sum(cc) as cc, ' +
  'sum(pacma) as pacma, sum(recortes_cero) as recortes_cero, sum(upyd) as upyd, sum(vox) as vox, sum(bng) as bng, ' +
  'sum(pcpe) + sum(others) as others ' +
  ' FROM elections_2016'
);
var sqlCCAA =  encodeURIComponent(
  'SELECT ccaa as region, ' +
  'sum(seats) as seats, sum(total_votes) as "total votes", sum(abstention) as abstention, sum(invalid_votes) as "invalid votes", sum(blank_votes) as "blank votes", ' +
  'sum(pp) as pp, sum(psoe) as psoe, ' +
  'sum(compromis) as compromis, sum(en_comu_podem) as en_comu_podem, sum(en_marea) as en_marea, sum(unidos_podemos) as unidos_podemos, ' +
  'sum(ciudadanos) as ciudadanos, sum(erc) as erc, sum(cdc) as cdc, sum(pnv) as pnv, sum(bildu) as bildu, sum(cc) as cc, ' +
  'sum(pacma) as pacma, sum(recortes_cero) as recortes_cero, sum(upyd) as upyd, sum(vox) as vox, sum(bng) as bng, ' +
  'sum(pcpe) + sum(others) as others ' +
  ' FROM elections_2016 GROUP BY ccaa'
);
var sqlProvince =  encodeURIComponent(
  'SELECT province as region, ' +
  'sum(seats) as seats, sum(total_votes) as "total votes", sum(abstention) as abstention, sum(invalid_votes) as "invalid votes" , sum(blank_votes) as "blank votes", ' +
  'sum(pp) as pp, sum(psoe) as psoe, ' +
  'sum(compromis) as compromis, sum(en_comu_podem) as en_comu_podem, sum(en_marea) as en_marea, sum(unidos_podemos) as unidos_podemos, ' +
  'sum(ciudadanos) as ciudadanos, sum(erc) as erc, sum(cdc) as cdc, sum(pnv) as pnv, sum(bildu) as bildu, sum(cc) as cc, ' +
  'sum(pacma) as pacma, sum(recortes_cero) as recortes_cero, sum(upyd) as upyd, sum(vox) as vox, sum(bng) as bng, ' +
  'sum(pcpe) + sum(others) as others ' +
  ' FROM elections_2016 GROUP BY province'
);
