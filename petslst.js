<script>
  var images = [
    './pets/ANTELOPE-Anzi-Anzi.png',
    './pets/ANTELOPE-Barkilly.png',
    './pets/ANTELOPE-Beerinna.png',
    './pets/ANTELOPE-Bigitso.png',
    './pets/ANTELOPE-Canisava.png',
    './pets/ANTELOPE-Chronotto.png',
    './pets/ANTELOPE-Cobaltoz.png',
    './pets/ANTELOPE-Colotto-Narpito.png',
    './pets/ANTELOPE-Cornella.png',
    './pets/ANTELOPE-Elderi-Megella.png',
    './pets/ANTELOPE-Felininny.png',
    './pets/ANTELOPE-Felisella.png',
    './pets/ANTELOPE-Fonzetta.png',
    './pets/ANTELOPE-Hania-Hania.png',
    './pets/ANTELOPE-Leo-Leotto.png',
    './pets/ANTELOPE-lizi-lizina.png',
    './pets/ANTELOPE-Nightica.png',
    './pets/ANTELOPE-Nipitso.png',
    './pets/ANTELOPE-Otee-Otee.png',
    './pets/ANTELOPE-Oza-Oza.png',
    './pets/ANTELOPE-Pollenoz.png',
    './pets/ANTELOPE-Regusia-Yookeeny.png',
    './pets/ANTELOPE-Ryui-Ryui.png',
    './pets/ANTELOPE-Shepiva.png',
    './pets/ANTELOPE-Slyee-Slyee.png',
    './pets/ANTELOPE-Somrazi.png',
    './pets/ANTELOPE-Sterlinnia.png',
    './pets/ANTELOPE-Sweetoop.png',
    './pets/ANTELOPE-Tacil-Tacil.png',
    './pets/ANTELOPE-Tapirinna.png',
    './pets/ANTELOPE-Unita-Unitazi.png',
    './pets/ANTELOPE-Ussa-Ussa.png',
    './pets/ANTELOPE-Utazi-Utazi.png',
    './pets/ANTELOPE-Yoa-Yoa.png',
    './pets/BIRD-Aga-Aga.png',
    './pets/BIRD-Akyia-Akyippo.png',
    './pets/BIRD-Bearetto.png',
    './pets/BIRD-Beerito.png',
    './pets/BIRD-Bloatipti.png',
    './pets/BIRD-Campetto.png',
    './pets/BIRD-Coldy-Coldy.png',
    './pets/BIRD-Colo-Colo.png',
    './pets/BIRD-Corpseeny.png',
    './pets/BIRD-Entelle.png',
    './pets/BIRD-Gekkico.png',
    './pets/BIRD-Geotto.png',
    './pets/BIRD-Grantiva.png',
    './pets/BIRD-Greenita.png',
    './pets/BIRD-Hayy-Hayia.png',
    './pets/BIRD-Hopil-Hopil.png',
    './pets/BIRD-Ingetto-Ushee.png',
    './pets/BIRD-Meri-Meri.png',
    './pets/BIRD-Microtto.png',
    './pets/BIRD-Ofui-Ofuy.png',
    './pets/BIRD-Okyo-Okyo.png',
    './pets/BIRD-Patho-Pathotto.png',
    './pets/BIRD-Picazi.png',
    './pets/BIRD-Sterloop.png',
    './pets/BIRD-Stonee.png',
    './pets/BIRD-Tasui-Tasui.png',
    './pets/BIRD-Ubuy-Ubuy.png',
    './pets/BIRD-Unomilly-Sosetta.png',
    './pets/BIRD-Waguy-Waguy.png',
    './pets/BIRD-Xeno-Xeno.png',
    './pets/BIRD-Zaka-Zaka.png',
    './pets/BLOB-Adomazi.png',
    './pets/BLOB-Aijo-Aijo.png',
    './pets/BLOB-Barkeeny.png',
    './pets/BLOB-Beeri-Beerita.png',
    './pets/BLOB-Chama-Chama.png',
    './pets/BLOB-Crocotto.png',
    './pets/BLOB-Diplotto.png',
    './pets/BLOB-Endonpito.png',
    './pets/BLOB-Falconitta.png',
    './pets/BLOB-Fonzi-Fonzi.png',
    './pets/BLOB-Halotto-Ikyetta.png',
    './pets/BLOB-Hofia-Hofina.png',
    './pets/BLOB-Ikazi-Ika.png',
    './pets/BLOB-Indiri-Ugista.png',
    './pets/BLOB-Kusiva.png',
    './pets/BLOB-Micia-Micico.png',
    './pets/BLOB-Microtto.png',
    './pets/BLOB-Milkinnia.png',
    './pets/BLOB-Mudil-Mudetta.png',
    './pets/BLOB-Nobee-Nobeenia.png',
    './pets/BLOB-Obeo-Obeo.png',
    './pets/BLOB-Oki-Oki.png',
    './pets/BLOB-Oraniva.png',
    './pets/BLOB-Proto-Prototto.png',
    './pets/BLOB-Radio-Radiotto.png',
    './pets/BLOB-Rihy-Rihy.png',
    './pets/BLOB-Rikpito.png',
    './pets/BLOB-Rivereve.png',
    './pets/BLOB-Ryuy-Ryuy.png',
    './pets/BLOB-Simia-Simia.png',
    './pets/BLOB-Simiazi.png',
    './pets/BLOB-Strixoz-Orotto.png',
    './pets/BLOB-Sweepito.png',
    './pets/BLOB-Sweetil-Saboop.png',
    './pets/BLOB-Taazi-Taa.png',
    './pets/BLOB-Tobil-Tobilly.png',
    './pets/BLOB-Tocie-Tocoop.png',
    './pets/BLOB-Towerelle.png',
    './pets/BLOB-Tricpito.png',
    './pets/BLOB-Xeno-Xeno.png',
    './pets/BONECAT-Bigina.png',
    './pets/BONECAT-Coba-Coba.png',
    './pets/BONECAT-Graininnia.png',
    './pets/BONECAT-Helo-Helo.png',
    './pets/BONECAT-Magil-Magil.png',
    './pets/BONECAT-Nitinnia.png',
    './pets/BONECAT-Pinee-Pineenia.png',
    './pets/CAT-Ambya-Ambya.png',
    './pets/CAT-Ameo-Ameo.png',
    './pets/CAT-Ana-Ana.png',
    './pets/CAT-Ayazi-Ayazi.png',
    './pets/CAT-Bearetta.png',
    './pets/CAT-Bosia-Bosia.png',
    './pets/CAT-Dinotto-Kirisiva.png',
    './pets/CAT-Drainoz.png',
    './pets/CAT-Erithita.png',
    './pets/CAT-Etazi-Eta.png',
    './pets/CAT-Etouy-Etouy.png',
    './pets/CAT-Flyi-Flyee.png',
    './pets/CAT-Gajo-Gajo.png',
    './pets/CAT-Gaokila.png',
    './pets/CAT-Homo-Homotto.png',
    './pets/CAT-Hopitso.png',
    './pets/CAT-Horsa-Horsella.png',
    './pets/CAT-Ido-Ido.png',
    './pets/CAT-Insecoz-Iseenia.png',
    './pets/CAT-Isesa-lsesa.png',
    './pets/CAT-Kuyava.png',
    './pets/CAT-Leafi-Leafi.png',
    './pets/CAT-Liverella.png',
    './pets/CAT-Macrotto.png',
    './pets/CAT-Minila.png',
    './pets/CAT-Mizitso.png',
    './pets/CAT-Moonoz-Satpito.png',
    './pets/CAT-Nightinso.png',
    './pets/CAT-Obi-Obi.png',
    './pets/CAT-Okyeve.png',
    './pets/CAT-Onui-Onui.png',
    './pets/CAT-Ovisi-Ovisita.png',
    './pets/CAT-Pupo-Pupo.png',
    './pets/CAT-Riveree-Orotto.png',
    './pets/CAT-Riyoz-Riyee.png',
    './pets/CAT-Ruoka-Ruokitso.png',
    './pets/CAT-Skipippo.png',
    './pets/CAT-Sokil-Sokil.png',
    './pets/CAT-Somrazi-Betetta.png',
    './pets/CAT-Suya-Suya.png',
    './pets/CAT-Terra-Terra.png',
    './pets/CAT-Tremotto.png',
    './pets/CAT-Waguy-Waguy.png',
    './pets/CAT-Warlo-Warlo.png',
    './pets/CAT-Weepi-Weepi.png',
    './pets/CAT-Xeno-Xenotto.png',
    './pets/CAT-Yazia-Yazia.png',
    './pets/CAT-Yewa-Yewa.png',
    './pets/COW-Beerella.png',
    './pets/COW-Carateve.png',
    './pets/COW-Chama-Chama.png',
    './pets/COW-Felinilly.png',
    './pets/COW-Flyito-Beotto.png',
    './pets/COW-Helo-Helo.png',
    './pets/COW-Hopil-Hopoz.png',
    './pets/COW-Macrotto.png',
    './pets/COW-Milki-Milkitso.png',
    './pets/COW-Mizuy-Mizui.png',
    './pets/COW-Naha-Naha.png',
    './pets/COW-Nako-Nakotto.png',
    './pets/COW-Nazia-Nazia.png',
    './pets/COW-Nemi-Nemi.png',
    './pets/COW-Ninui-Ninui.png',
    './pets/COW-Onmazi.png',
    './pets/COW-Osee-Osee.png',
    './pets/COW-Otazi-Otazi.png',
    './pets/COW-Patho-Pathotto.png',
    './pets/COW-Polypito.png',
    './pets/COW-Ratoop-Toginna.png',
    './pets/COW-Rideenia.png',
    './pets/COW-Rihoz-Rihito.png',
    './pets/COW-Shepinnia.png',
    './pets/COW-Snakoop.png',
    './pets/COW-Tetrazi-Tokoop.png',
    './pets/COW-Tritona-Uokelle.png',
    './pets/COW-Wingilly.png',
    './pets/COW-Woofeve.png',
    './pets/DRILL-Arazi-Ana.png',
    './pets/DRILL-Iawia-Iawee.png',
    './pets/DRILL-|jotto.png',
    './pets/DRILL-Quakilly.png',
    './pets/DRILL-Ragi-Ragi.png',
    './pets/DRILL-Rattusita.png',
    './pets/DRILL-Rattusitso.png',
    './pets/DRILL-Silverila.png',
    './pets/DRILL-Soma-Soma.png',
    './pets/DRILL-Uruy-Uruy.png',
    './pets/FIEND-Ogawix.png',
    './pets/FIEND-Papioss.png',
    './pets/FISH-Agazi-Agazi.png',
    './pets/FISH-Anista-Miokito.png',
    './pets/FISH-Azuy-Azuy.png',
    './pets/FISH-Beetil-Ojimoop.png',
    './pets/FISH-Blui-Bluy.png',
    './pets/FISH-Chromotto.png',
    './pets/FISH-Donketto.png',
    './pets/FISH-Doomippo.png',
    './pets/FISH-Doomitta.png',
    './pets/FISH-Doree-Doree.png',
    './pets/FISH-Felineeny.png',
    './pets/FISH-Hippo-Hippotto.png',
    './pets/FISH-Ido-Ido.png',
    './pets/FISH-Issia-Issita.png',
    './pets/FISH-Kashi-Kashi.png',
    './pets/FISH-Macro-Macro.png',
    './pets/FISH-Mamma-Mamma.png',
    './pets/FISH-Mandrakoz.png',
    './pets/FISH-Monkelle.png',
    './pets/FISH-Musta-Musta.png',
    './pets/FISH-Numa-Numazi.png',
    './pets/FISH-Obara-Obara.png',
    './pets/FISH-Ofuny-Ofuny.png',
    './pets/FISH-Ovineenia.png',
    './pets/FISH-Poroz-Porinnia.png',
    './pets/FISH-Quintila.png',
    './pets/FISH-Regusava.png',
    './pets/FISH-Rhinotto.png',
    './pets/FISH-Rioki-Rioki.png',
    './pets/FISH-Spellila.png',
    './pets/FISH-Strixpito.png',
    './pets/FISH-Tobitta.png',
    './pets/FISH-Trapipti.png',
    './pets/FISH-Unkyito.png',
    './pets/FISH-Uza-Uza.png',
    './pets/FISH-Warlo-Warlo.png',
    './pets/FISH-Weepella.png',
    './pets/FISH-Windinnia.png',
    './pets/FISH-Yazpito.png',
    './pets/FISH-Zerco-Zercotto.png',
    './pets/FLOATSPIDER-Achico.png',
    './pets/FLOATSPIDER-Bizito-Todazi.png',
    './pets/FLOATSPIDER-Hali-Hali.png',
    './pets/FLOATSPIDER-Joyo-Joyo.png',
    './pets/FLOATSPIDER-Portella.png',
    './pets/FLOATSPIDER-Radio-Radio.png',
    './pets/FLOATSPIDER-Scoopella.png',
    './pets/FLOATSPIDER-Stemipti.png',
    './pets/FLYINGBEETLE-losy-losy.png',
    './pets/FLYINGBEETLE-Ozazi-Ozazi.png',
    './pets/FLYINGBEETLE-Ptyerrotto.png',
    './pets/FLYINGBEETLE-Stonpito.png',
    './pets/FLYINGBEETLE-Swanella.png',
    './pets/FLYINGBEETLE-Sweetee-Hagista.png',
    './pets/FLYINGBEETLE-Uttee-Uttee.png',
    './pets/FLYINGLIZARD-Azazi-Aza.png',
    './pets/FLYINGLIZARD-Bara-Bara.png',
    './pets/FLYINGLIZARD-Beechil.png',
    './pets/FLYINGLIZARD-Blui-Blui.png',
    './pets/FLYINGLIZARD-Bovineeny.png',
    './pets/FLYINGLIZARD-Bovinico.png',
    './pets/FLYINGLIZARD-Bugella.png',
    './pets/FLYINGLIZARD-Chiril.png',
    './pets/FLYINGLIZARD-Cornico.png',
    './pets/FLYINGLIZARD-Crowa-Crowa.png',
    './pets/FLYINGLIZARD-Etho-Etho.png',
    './pets/FLYINGLIZARD-Felinitso.png',
    './pets/FLYINGLIZARD-Galo-Galo.png',
    './pets/FLYINGLIZARD-Greenpito.png',
    './pets/FLYINGLIZARD-Halista.png',
    './pets/FLYINGLIZARD-ii-Jii.png',
    './pets/FLYINGLIZARD-Itazi-Itazi.png',
    './pets/FLYINGLIZARD-Kucia-Kucia.png',
    './pets/FLYINGLIZARD-Liveritso.png',
    './pets/FLYINGLIZARD-Magippo.png',
    './pets/FLYINGLIZARD-Mogee-Mogee.png',
    './pets/FLYINGLIZARD-Najui-Najuy.png',
    './pets/FLYINGLIZARD-Nano-Nano.png',
    './pets/FLYINGLIZARD-Nomy-Nomy.png',
    './pets/FLYINGLIZARD-Oakia-Oakia.png',
    './pets/FLYINGLIZARD-Okazi-Okazi.png',
    './pets/FLYINGLIZARD-Okyo-Okyo.png',
    './pets/FLYINGLIZARD-Omni-Omni.png',
    './pets/FLYINGLIZARD-Oro-Oro.png',
    './pets/FLYINGLIZARD-Oucil-Oucelle.png',
    './pets/FLYINGLIZARD-Pineenia.png',
    './pets/FLYINGLIZARD-Postetto.png',
    './pets/FLYINGLIZARD-Quintava.png',
    './pets/FLYINGLIZARD-Rana-Rana.png',
    './pets/FLYINGLIZARD-Rattusinna.png',
    './pets/FLYINGLIZARD-Rorie-Rorie.png',
    './pets/FLYINGLIZARD-Scarippo.png',
    './pets/FLYINGLIZARD-Suceve.png',
    './pets/FLYINGLIZARD-Susoz-Susoz.png',
    './pets/FLYINGLIZARD-Tamil-Tameve.png',
    './pets/FLYINGLIZARD-Tamisava.png',
    './pets/FLYINGLIZARD-Tempo-Tempotto.png',
    './pets/FLYINGLIZARD-Tri-Tri.png',
    './pets/FLYINGLIZARD-Tri-Trista.png',
    './pets/FLYINGLIZARD-Uozuy-Uozui.png',
    './pets/FLYINGLIZARD-Wazella.png',
    './pets/FLYINGLIZARD-Witchelle.png',
    './pets/FLYINGLIZARD-Woofil-Migila.png',
    './pets/FLYINGLIZARD-Yagoop.png',
    './pets/FLYINGSNAKE-Amo-Amo.png',
    './pets/FLYINGSNAKE-Atsava.png',
    './pets/FLYINGSNAKE-Bloatibta.png',
    './pets/FLYINGSNAKE-Chili-Chili.png',
    './pets/FLYINGSNAKE-Cobaltella.png',
    './pets/FLYINGSNAKE-Erithilly.png',
    './pets/FLYINGSNAKE-Gekkinny.png',
    './pets/FLYINGSNAKE-Grabipti.png',
    './pets/FLYINGSNAKE-Lyco-Lyco.png',
    './pets/FLYINGSNAKE-Mizee-Mizee.png',
    './pets/FLYINGSNAKE-Moometta.png',
    './pets/FLYINGSNAKE-Mustila.png',
    './pets/FLYINGSNAKE-Mustinta.png',
    './pets/FLYINGSNAKE-Neckinna.png',
    './pets/FLYINGSNAKE-Nipa-Nipa.png',
    './pets/FLYINGSNAKE-Otaka-Otaka.png',
    './pets/FLYINGSNAKE-Pica-Pica.png',
    './pets/FLYINGSNAKE-Picazi.png',
    './pets/FLYINGSNAKE-Radio-Radio.png',
    './pets/FLYINGSNAKE-Sanguininny.png',
    './pets/FLYINGSNAKE-Scoopita.png',
    './pets/FLYINGSNAKE-Sei-Sei.png',
    './pets/FLYINGSNAKE-Slapitta.png',
    './pets/FLYINGSNAKE-Sternina.png',
    './pets/FLYINGSNAKE-Susito.png',
    './pets/FLYINGSNAKE-Woodetta.png',
    './pets/GRUNT-Bloodella.png',
    './pets/GRUNT-Buga-Buga.png',
    './pets/GRUNT-Etouy-Etoui.png',
    './pets/GRUNT-Ettil-Ettil.png',
    './pets/GRUNT-Hiui-Hiui.png',
    './pets/GRUNT-Killa-Killetta.png',
    './pets/GRUNT-Lanterninnia.png',
    './pets/GRUNT-Leafee-Yakpito.png',
    './pets/GRUNT-Leechitso.png',
    './pets/GRUNT-lha-lha.png',
    './pets/GRUNT-limetto-Nedai.png',
    './pets/GRUNT-Macrotto.png',
    './pets/GRUNT-Myo-Myo.png',
    './pets/GRUNT-Obazi-Obazi.png',
    './pets/GRUNT-Omi-Omi.png',
    './pets/GRUNT-Ovispito.png',
    './pets/GRUNT-Postina.png',
    './pets/GRUNT-Quarelle.png',
    './pets/GRUNT-Radio-Radio.png',
    './pets/GRUNT-Riyil-Riyil.png',
    './pets/GRUNT-Runy-Runpito.png',
    './pets/GRUNT-Simia-Simia.png',
    './pets/GRUNT-Somna-Somvazi.png',
    './pets/GRUNT-Suckoz.png',
    './pets/GRUNT-Taa-Taa.png',
    './pets/GRUNT-Ukazi-Ukazi.png',
    './pets/GRUNT-Uta-Utazi.png',
    './pets/GRUNT-Zamia-Zamoop.png',
    './pets/JELLYFISH-Aio-Aio.png',
    './pets/JELLYFISH-Allista-Nutaketto.png',
    './pets/JELLYFISH-Helazi-Betsico.png',
    './pets/JELLYFISH-Imazi-Ilma.png',
    './pets/JELLYFISH-Ito-Ito.png',
    './pets/JELLYFISH-Kuzeenia.png',
    './pets/JELLYFISH-Leafeeny.png',
    './pets/JELLYFISH-Molochia.png',
    './pets/JELLYFISH-Mustoop-Sasheve.png',
    './pets/JELLYFISH-Omista.png',
    './pets/JELLYFISH-Saginnia.png',
    './pets/JELLYFISH-Snakoz-Risheeny.png',
    './pets/JELLYFISH-Toi-Toi.png',
    './pets/JELLYFISH-Ursa-Ursazi.png',
    './pets/JELLYFISH-Yaby-Yaby.png',
    './pets/LAND_JELLYFISH-Petalie.png',
    './pets/LAND_JELLYFISH-Redi-Redetto.png',
    './pets/LARGEBUTTERFLY-Agui-Aguy.png',
    './pets/LARGEBUTTERFLY-Aldereve.png',
    './pets/LARGEBUTTERFLY-Anga-Anga.png',
    './pets/LARGEBUTTERFLY-Bomee-Bomoop.png',
    './pets/LARGEBUTTERFLY-Buzoz-Buzoz.png',
    './pets/LARGEBUTTERFLY-Cobita-Ukarito.png',
    './pets/LARGEBUTTERFLY-Etho-Etho.png',
    './pets/LARGEBUTTERFLY-Guardiva.png',
    './pets/LARGEBUTTERFLY-Ima-Ima.png',
    './pets/LARGEBUTTERFLY-Necro-Necro.png',
    './pets/LARGEBUTTERFLY-Necro-Necrotto.png',
    './pets/LARGEBUTTERFLY-Oyo-Oyo.png',
    './pets/LARGEBUTTERFLY-Redippo-Binipti.png',
    './pets/LARGEBUTTERFLY-Shadoz.png',
    './pets/LARGEBUTTERFLY-Sosa-Sosazi.png',
    './pets/LARGEBUTTERFLY-Suckelle.png',
    './pets/LARGEBUTTERFLY-Terra-Terra.png',
    './pets/LARGEBUTTERFLY-Warlotto.png',
    './pets/LARGEBUTTERFLY-Zushi-Zushista.png',
    './pets/MOLE-Aimizita.png',
    './pets/MOLE-Flo-Flo.png',
    './pets/MOLE-Omni-Omni.png',
    './pets/MOLE-Ovinee.png',
    './pets/MOLE-Quilinnia.png',
    './pets/MOLE-Roista.png',
    './pets/MOLE-Too-Too.png',
    './pets/MOLE-Uga-Uga.png',
    './pets/PLOUGH-Bokuy-Bokuy.png',
    './pets/PLOUGH-Drainina.png',
    './pets/PLOUGH-Gallpito.png',
    './pets/PLOUGH-Larva-Larva.png',
    './pets/PLOUGH-Livereve.png',
    './pets/PLOUGH-Mona-Mona.png',
    './pets/PLOUGH-Nugotina-Nibeenia.png',
    './pets/PLOUGH-Omazi-Oma.png',
    './pets/PLOUGH-Omnista.png',
    './pets/PLOUGH-Uefuy-Uefuy.png',
    './pets/PROTOFLYER-Barkico.png',
    './pets/PROTOFLYER-Chromotto.png',
    './pets/PROTOFLYER-Ehazi-Ehazi.png',
    './pets/PROTOFLYER-Grainninia.png',
    './pets/PROTOFLYER-Herbila-Ganonina.png',
    './pets/PROTOFLYER-Homo-Homo.png',
    './pets/PROTOFLYER-Kesiva.png',
    './pets/PROTOFLYER-lizoz-lizetta.png',
    './pets/PROTOFLYER-Nakyotto.png',
    './pets/PROTOFLYER-Naneeny.png',
    './pets/PROTOFLYER-Nano-Nano.png',
    './pets/PROTOFLYER-Obi-Obista.png',
    './pets/PROTOFLYER-Tempotto.png',
    './pets/PROTOFLYER-Uki-Uki.png',
    './pets/PROTOROLLER-Aio-Aio.png',
    './pets/PROTOROLLER-Akui-Akui.png',
    './pets/PROTOROLLER-Bihi-Bihi.png',
    './pets/PROTOROLLER-Boviditta.png',
    './pets/PROTOROLLER-Chama-Chamazi.png',
    './pets/PROTOROLLER-Copito.png',
    './pets/PROTOROLLER-Doga-Doga.png',
    './pets/PROTOROLLER-Flyoop.png',
    './pets/PROTOROLLER-Gao-Gao.png',
    './pets/PROTOROLLER-Gerbilita.png',
    './pets/PROTOROLLER-Lama-Lama.png',
    './pets/PROTOROLLER-Lyco-Lyco.png',
    './pets/PROTOROLLER-Noi-Noi.png',
    './pets/PROTOROLLER-Rotiva-Izeniva.png',
    './pets/PROTOROLLER-Sawa-Sawa.png',
    './pets/PROTOROLLER-Suckitso.png',
    './pets/QUAD_PET_Snak-I23-PU0.png',
    './pets/QUAD_PET-Succuss-H66-V.png',
    './pets/ROBO_PET-Beechinnia-V93K.png',
    './pets/ROBO_PET-Lycotto-L9.png',
    './pets/ROBOTANTELOPE-Acanoop.png',
    './pets/ROBOTANTELOPE-Aokai-Aokai.png',
    './pets/ROBOTANTELOPE-Aso-Aso.png',
    './pets/ROBOTANTELOPE-Betsuy.png',
    './pets/ROBOTANTELOPE-Boneenia.png',
    './pets/ROBOTANTELOPE-Bovinippo.png',
    './pets/ROBOTANTELOPE-Clayy-Clayipti.png',
    './pets/ROBOTANTELOPE-Entia-Entia.png',
    './pets/ROBOTANTELOPE-Hofil-Hofeve.png',
    './pets/ROBOTANTELOPE-Huntia-Tocpito.png',
    './pets/ROBOTANTELOPE-Huntiva.png',
    './pets/ROBOTANTELOPE-Hyui-Hyuy.png',
    './pets/ROBOTANTELOPE-Ijo-ljo.png',
    './pets/ROBOTANTELOPE-Kakipti.png',
    './pets/ROBOTANTELOPE-Kura-Kura.png',
    './pets/ROBOTANTELOPE-Lanternia.png',
    './pets/ROBOTANTELOPE-Nano-Nano.png',
    './pets/ROBOTANTELOPE-Papio-Papiotto.png',
    './pets/ROBOTANTELOPE-Pathotto.png',
    './pets/ROBOTANTELOPE-Photo-Phototto.png',
    './pets/ROBOTANTELOPE-Phototto.png',
    './pets/ROBOTANTELOPE-Polyie.png',
    './pets/ROBOTANTELOPE-Proto-Proto.png',
    './pets/ROBOTANTELOPE-Redava.png',
    './pets/ROBOTANTELOPE-Sai-Saista.png',
    './pets/ROBOTANTELOPE-Scrofetta.png',
    './pets/ROBOTANTELOPE-Shui-Shui.png',
    './pets/ROBOTANTELOPE-Xenotto.png',
    './pets/RODENT-Aibitta.png',
    './pets/RODENT-Barki-Barki.png',
    './pets/RODENT-Bearipti.png',
    './pets/RODENT-Chili-Chili.png',
    './pets/RODENT-Corninnia.png',
    './pets/RODENT-Echy-Echy.png',
    './pets/RODENT-Egui-Egui.png',
    './pets/RODENT-Ennee-Ennita.png',
    './pets/RODENT-Ezazi-Ezazi.png',
    './pets/RODENT-Itsil-Itsil.png',
    './pets/RODENT-lomoz-lomina.png',
    './pets/RODENT-Lycanil-Kiminnia.png',
    './pets/RODENT-Marrowava.png',
    './pets/RODENT-Micro-Micro.png',
    './pets/RODENT-Molochee.png',
    './pets/RODENT-Muko-Mukotto.png',
    './pets/RODENT-Numava.png',
    './pets/RODENT-Odee-Odee.png',
    './pets/RODENT-Otsuy-Otsuy.png',
    './pets/RODENT-Papiotto.png',
    './pets/RODENT-Riverelle.png',
    './pets/RODENT-Rotava-Annella.png',
    './pets/RODENT-Somna-Somnazi.png',
    './pets/RODENT-Toddi-Toddi.png',
    './pets/RODENT-Tribbil-Seista.png',
    './pets/RODENT-Uro-Uro.png',
    './pets/RODENT-Yania-Yana.png',
    './pets/SEASNAKE-Aimoop.png',
    './pets/SEASNAKE-Aiwee-Aiwil.png',
    './pets/SEASNAKE-Bira-Biretto.png',
    './pets/SEASNAKE-Ebazi-Ebazi.png',
    './pets/SEASNAKE-Falconico.png',
    './pets/SEASNAKE-Hali-Hali.png',
    './pets/SEASNAKE-Hippotto.png',
    './pets/SEASNAKE-Iro-lrotto.png',
    './pets/SEASNAKE-Jimasava.png',
    './pets/SEASNAKE-Mantidoop.png',
    './pets/SEASNAKE-Oki-Oki.png',
    './pets/SHARK-Aio-Aio.png',
    './pets/SHARK-Aiwa-Aiwazi.png',
    './pets/SHARK-Anno-Annotto.png',
    './pets/SHARK-Aurcheeny.png',
    './pets/SHARK-Bisoniva.png',
    './pets/SHARK-Brocetto.png',
    './pets/SHARK-Brocita-Aifina.png',
    './pets/SHARK-Cobaltico.png',
    './pets/SHARK-Funoop.png',
    './pets/SHARK-Nuya-Nuya.png',
    './pets/SHARK-Serpiva.png',
    './pets/SHARK-Terra-Terra.png',
    './pets/SHARK-Tribbpito.png',
    './pets/SHARK-Zuoka-Zuoka.png',
    './pets/SIXLEGCAT-Falconipti.png',
    './pets/SIXLEGCAT-Helo-Helo.png',
    './pets/SIXLEGCAT-Kedy-Kedico.png',
    './pets/SIXLEGCAT-Kobie-Kobie.png',
    './pets/SIXLEGCAT-lomil-tomil.png',
    './pets/SIXLEGCAT-Onmie-Onmava.png',
    './pets/SIXLEGCAT-Otazi-Ota.png',
    './pets/SIXLEGCAT-Ovisinna.png',
    './pets/SIXLEGCAT-Rattusilly.png',
    './pets/SIXLEGCAT-Risetta.png',
    './pets/SIXLEGCAT-Waili-Waili.png',
    './pets/SIXLEGCAT-Winga-Winga.png',
    './pets/SIXLEGCAT-Woofy-Woofetto.png',
    './pets/SIXLEGCOW-Formista.png',
    './pets/SIXLEGCOW-Hary-Harelle.png',
    './pets/SIXLEGCOW-Issia-Issia.png',
    './pets/SIXLEGCOW-Kofuy-Kofuy.png',
    './pets/SIXLEGCOW-Lyco-Lyco.png',
    './pets/SIXLEGCOW-Okki-Okkella.png',
    './pets/SIXLEGCOW-Uno-Uno.png',
    './pets/SIXLEGCOW-Wani-Wani.png',
    './pets/SPIDER-Aba-Abazi.png',
    './pets/SPIDER-Brickitso.png',
    './pets/SPIDER-Bugil-Bugil.png',
    './pets/SPIDER-Caratella.png',
    './pets/SPIDER-Coby-Coby.png',
    './pets/SPIDER-Eoky-Eokil.png',
    './pets/SPIDER-Erithiva.png',
    './pets/SPIDER-Felinetta.png',
    './pets/SPIDER-Festerila.png',
    './pets/SPIDER-Gifina.png',
    './pets/SPIDER-Grabitso.png',
    './pets/SPIDER-Helo-Helo.png',
    './pets/SPIDER-Ibuy-Ibui.png',
    './pets/SPIDER-Iryinna.png',
    './pets/SPIDER-Jacki-Jackilly.png',
    './pets/SPIDER-Jackipti.png',
    './pets/SPIDER-Mibitta.png',
    './pets/SPIDER-Musista.png',
    './pets/SPIDER-Naka-Naka.png',
    './pets/SPIDER-Oharie.png',
    './pets/SPIDER-Otee-Otee.png',
    './pets/SPIDER-Patoz-Patpito.png',
    './pets/SPIDER-Pavotto.png',
    './pets/SPIDER-Purpico.png',
    './pets/SPIDER-Robil-Robitso.png',
    './pets/SPIDER-Scarippo.png',
    './pets/SPIDER-Tahie-Tahee.png',
    './pets/SPIDER-Trapitta.png',
    './pets/SPIDER-Tricetto.png',
    './pets/SPIDER-Tritonilly.png',
    './pets/SPIDER-Uchie-Uchie.png',
    './pets/STRIDER-Ahokiva.png',
    './pets/STRIDER-Bista-Bista.png',
    './pets/STRIDER-Elderinnia.png',
    './pets/STRIDER-Eshi-Eshee.png',
    './pets/STRIDER-Formi-Formi.png',
    './pets/STRIDER-Gakista.png',
    './pets/STRIDER-Iso-lso.png',
    './pets/STRIDER-Luna-Luyazi.png',
    './pets/STRIDER-Mamma-Mamma.png',
    './pets/STRIDER-Nogotto.png',
    './pets/STRIDER-Papio-Papio.png',
    './pets/STRIDER-Patetta.png',
    './pets/STRIDER-Pollenila.png',
    './pets/STRIDER-Quakinnia.png',
    './pets/STRIDER-Sesito-Nato.png',
    './pets/STRIDER-Tempotto.png',
    './pets/STRIDER-Witchiva.png',
    './pets/SWIMCOW-Gerri-Gerri.png',
    './pets/SWIMCOW-Kona-Kovazi.png',
    './pets/SWIMRODENT-Cho-Cho.png',
    './pets/SWIMRODENT-Electrila.png',
    './pets/SWIMRODENT-Mantidico.png',
    './pets/SWIMRODENT-Odee-Odee.png',
    './pets/TREX-Anjoop-Kamotto.png',
    './pets/TREX-Bladeve.png',
    './pets/TREX-Caratila.png',
    './pets/TREX-Crowee.png',
    './pets/TREX-Emuy-Emui.png',
    './pets/TREX-Esazi-Esa.png',
    './pets/TREX-Gerri-Gerri.png',
    './pets/TREX-Gulotto-Rumeeny.png',
    './pets/TREX-Konito.png',
    './pets/TREX-Leotto.png',
    './pets/TREX-Livereeny.png',
    './pets/TREX-Nanotto-Aurilly.png',
    './pets/TREX-Necrotto.png',
    './pets/TREX-Nozakava.png',
    './pets/TREX-Oji-Oji.png',
    './pets/TREX-Ovineenia.png',
    './pets/TREX-Penta-Pentazi.png',
    './pets/TREX-Pentazi-Zusetto.png',
    './pets/TREX-Purpoz-Nuyazi.png',
    './pets/TREX-Rutoz-Rutiva.png',
    './pets/TREX-Serpeve-Oicetto.png',
    './pets/TREX-Tamisita.png',
    './pets/TREX-Taxi-Taxita.png',
    './pets/TREX-Treee-Treee.png',
    './pets/TREX-Vanadazi.png',
    './pets/TREX-Woofa-Woofetto.png',
    './pets/TREX-Yubinny-Akyetto.png',
    './pets/TREX-Yukil-Yukil.png',
    './pets/TRICERATOPS-Akee-Akeenia.png',
    './pets/TRICERATOPS-Akyy-Akyoz.png',
    './pets/TRICERATOPS-Andilly.png',
    './pets/TRICERATOPS-Asazi-Asazi.png',
    './pets/TRICERATOPS-Aso-Aso.png',
    './pets/TRICERATOPS-Bearitso.png',
    './pets/TRICERATOPS-Chama-Chama.png',
    './pets/TRICERATOPS-Dasyitso.png',
    './pets/TRICERATOPS-Eni-Eni.png',
    './pets/TRICERATOPS-Eta-Eta.png',
    './pets/TRICERATOPS-Foxinnia.png',
    './pets/TRICERATOPS-Gao-Gaotto.png',
    './pets/TRICERATOPS-Haydra-Ingetto.png',
    './pets/TRICERATOPS-Haydrotto.png',
    './pets/TRICERATOPS-Heydrotto.png',
    './pets/TRICERATOPS-Hizella.png',
    './pets/TRICERATOPS-Igui-Igui.png',
    './pets/TRICERATOPS-Iguy-Iguy.png',
    './pets/TRICERATOPS-logy-loginnia.png',
    './pets/TRICERATOPS-Mammazi-Gobetta.png',
    './pets/TRICERATOPS-Noo-Noo.png',
    './pets/TRICERATOPS-Oitia-Oitava.png',
    './pets/TRICERATOPS-Ondeeny.png',
    './pets/TRICERATOPS-Rano-Ranotto.png',
    './pets/TRICERATOPS-Rhinotto.png',
    './pets/TRICERATOPS-Sakuy-Sakuy.png',
    './pets/TRICERATOPS-Snakitta.png',
    './pets/TRICERATOPS-Terra-Terra.png',
    './pets/TRICERATOPS-Tigeretta.png',
    './pets/TRICERATOPS-Tigerinna.png',
    './pets/TRICERATOPS-Tremo-Tremo.png',
    './pets/TRICERATOPS-Ubui-Ubui.png',
    './pets/TRICERATOPS-Uhazi-Uhazi.png',
    './pets/TRICERATOPS-Ukuha-Ukuhazi.png',
    './pets/TRICERATOPS-Usuy-Usui.png',
    './pets/TRICERATOPS-Vulpasito.png',
    './pets/TRICERATOPS-Waterella.png',
    './pets/TRICERATOPS-Wingeve-Etseeny.png',
    './pets/TRICERATOPS-Yabi-Yaby.png',
    './pets/TRICERATOPS-Yonpito.png',
    './pets/TWOLEGANTELOPE-Gallella.png',
    './pets/TWOLEGANTELOPE-Irazi-lrazi.png',
    './pets/TWOLEGANTELOPE-Luxee-Luxee.png',
    './pets/TWOLEGANTELOPE-Spellito.png',
    './pets/TWOLEGANTELOPE-Tony-Tonoop.png',
    './pets/TWOLEGANTELOPE-Towerpito.png',
    './pets/TWOLEGANTELOPE-Wingita.png',
    './pets/TWOLEGANTELOPE-Yani-Yanetta.png',
    './pets/WEIRDBUTTERFLY-Rayee-Rayee.png',
    './pets/WEIRDBUTTERFLY-Uzee-Uzee.png',
    './pets/WEIRDFLOAT-Graspilo.png',
    './pets/WEIRDFLOAT-Nano-Nano.png',
    './pets/WEIRDFLOAT-Postella.png',
    './pets/WEIRDFLOAT-Robinee.png',
    './pets/WEIRDFLOAT-Zercotto.png',
    './pets/WEIRDROLL-Galo-Galo.png',
    './pets/WEIRDROLL-Grainy.png',
    './pets/WEIRDROLL-Magneto-Fuchoop.png'
  ];
</script>
