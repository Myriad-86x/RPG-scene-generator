tempData = [
    { 
        name: "Hämähäkki", img: "👺", desc: "Pikkiriikkinen eläin, vakaumukseton", 
        xp: 10, hp: 3, ac: 12, atk: "1d4",
        stats: { voi: 2, ket: 14, sit: 8, äly: 1, vii: 10, kar: 2 },
        actions: "<b>Toiminnot</b><br/><b>Purema.</b> <i>Lähitaisteluhyökkäys:</i> +4 osumiseen, ulottuvuus 2 metriä, yksikohde. <i>Osuma:</i> 1 piste pistovahinkoa ja kohteen täytyy heittää VA 9 sitkeys-heitto tai kärsiä 2 (1d4) pistettä myrkkyvahinkoa, ja onnistuneella pelastusheitolla vain puolet vahingosta."
    },
    { 
        name: "Jättihämähäkki", img: "👺", desc: "Suuri eläin, vakaumukseton", 
        xp: 200, hp: 26, ac: 14, atk: "1d8+3",
        stats: { voi: 14, ket: 16, sit: 12, äly: 2, vii: 11, kar: 4 },
        actions: "<b>Toiminnot</b><br/><b>Purema.</b> <i>Lähitaisteluhyökkäys:</i> +5 osumiseen, ulottuvuus 2 metriä, yksi kohde. <i>Osuma:</i> 7 (1d8 +3) pistettä pistovahinkoa ja kohteen täytyy heittää VA 11 sitkeys-heitto tai kärsiä 9 (2d8) pistettä myrkkyvahinkoa, ja onnistuneella pelastusheitolla vain puolet vahingosta. Myrkyn laskiessa uhrin osumapisteet nollaan hän on <i>myrkytetty</i> ja tunnin ajan <i>halvaantunut,</i> vaikka hänen osumapisteensä tänä aikana paranisivat."
    },
    { 
        name: "Karhu", img: "👺", desc: "Suuri eläin, vakaumukseton", 
        xp: 200, hp: 34, ac: 11, atk: "1d8+4, 2d6+4",
        stats: { voi: 19, ket: 10, sit: 16, äly: 2, vii: 13, kar: 7 },
        actions: "<b>Toiminnot</b><br/><b>Sarjahyökkäys.</b> Karhu tekee kaksi hyökkäystä: yhden puremalla ja toisen kynsillä.<br/><b>Purema.</b> <i>Lähitaisteluhyökkäys:</i> +5 osumiseen, ulottuvuus 2 metriä, yksi kohde. <i>Osuma:</i> 8 (1d8 +4) pistettä pistovahinkoa.<br/><b>Kynnet.</b> <i>Lähitaisteluhyökkäys:</i> +5 osumiseen, ulottuvuus 2 metriä, yksi kohde. <i>Osuma:</i> 11 (2d6 +4) pistettä viiltovahinkoa."
    },
    { 
        name: "Krokotiili", img: "👺", desc: "Suuri eläin, vakaumukseton", 
        xp: 100, hp: 19, ac: 12, atk: "1d10+2",
        stats: { voi: 15, ket: 10, sit: 13, äly: 2, vii: 10, kar: 5 },
        actions: "<b>Toiminnot</b><br/><b>Purema.</b> <i>Lähitaisteluhyökkäys:</i> +4 osumiseen, ulottuvuus 2 metriä, yksi kohde. <i>Osuma:</i> 7 (1d10 +2) pistettä pistovahinkoa ja kohde on myös <i>kiinniotettu</i> (pakoyrityksen VA 12). Niin kauan kuin kohde on <i>kiinniotettu</i> on hän myös <i>sidottu</i>, ja krokotiili ei voi hyökätä puremalla toisen kohteen kimppuun."
    },
    { 
        name: "Luuranko", img: "👺", desc: "Keskikokoinen epäkuollut, tyypillisesti lainkuuliainen paha", 
        xp: 50, hp: 13, ac: 13, atk: "1d6+2",
        stats: { voi: 10, ket: 14, sit: 15, äly: 6, vii: 8, kar: 5 },
        actions: "<b>Toiminnot</b><br/><b>Lyhytmiekka.</b> <i>Lähitaisteluhyökkäys:</i> +4 osumiseen, ulottuvuus 2 metriä, yksi kohde. <i>Osuma:</i> 5 (1d6 +2) pistettä viiltovahinkoa.<br/><b>Lyhytjousi.</b> <i>Kantamahyökkäys:</i> +4 osumiseen, kantama 32/128 metriä, yksi kohde. <i>Osuma:</i> 5 (1d6 +2) pistettä pistovahinkoa."
    },
    { 
        name: "Zombi", img: "👺", desc: "Keskikokoinen epäkuollut, tyypillisesti neutraali paha", 
        xp: 50, hp: 22, ac: 8, atk: "1d6+1",
        stats: { voi: 13, ket: 6, sit: 16, äly: 3, vii: 6, kar: 5 },
        actions: "<b>Toiminnot</b><br/><b>Lyönti.</b> <i>Lähitaisteluhyökkäys:</i> +3 osumiseen, ulottuvuus 2 metriä, yksi kohde. <i>Osuma:</i> 4 (1d6 +1) pistettä murskausvahinkoa."
    }
];
