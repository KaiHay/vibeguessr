export const PLACES = [
    {
        id: 'hallstatt',
        name: 'Hallstatt, Austria',
        description:
            'A postcard-perfect alpine lake village with pastel houses clinging to steep mountainsides and a church spire reflected in glassy water.',
        lat: 47.56,
        lng: 13.65,
        imagePrompt:
            'Realistic, High-resolution photo of Hallstatt village on a calm morning, pastel lakeside houses, church spire, steep forested Alps behind, light mist on water. Style like google street view  ',
        biome: 'alpine_lake',
        difficulty: 2,
    },
    {
        id: 'uyuni',
        name: 'Salar de Uyuni, Bolivia',
        description:
            'The world’s largest salt flat—an endless white expanse with hexagonal salt patterns, turning mirror-like when wet; distant Andean peaks on the horizon. Make sure theres no words that say the location in the image',
        lat: -20.13,
        lng: -67.49,
        imagePrompt:
            'realistic photo of Bolivia’s Uyuni salt flats at dawn, hexagonal salt crust under pink sky, thin water layer reflecting clouds, lone mountain on horizon. Style like Google street view. Make sure theres no words that say the location in the image',
        biome: 'salt_flat',
        difficulty: 3,
    },
    {
        id: 'nara_deer',
        name: 'Nara Deer Park, Japan',
        description:
            'A historic park where tame sika deer roam among stone lanterns, mossy temples, and vermilion torii gates beneath maple trees. Style like Google street view. Make sure theres no words that say the location in the image',
        lat: 34.69,
        lng: 135.84,
        imagePrompt:
            'Ultra-realistic photo inside Nara Deer Park, friendly deer, rows of moss-covered stone lanterns, red torii gate and temple roof beyond, autumn leaves. Style like Google Street view. Make sure theres no words that say the location in the image',
        biome: 'temple_garden',
        difficulty: 2,
    },
    {
        id: 'dune45',
        name: 'Dune 45, Namib Desert, Namibia',
        description:
            'Towering orange star dunes under a deep blue sky, with dead camel-thorn trees casting long shadows on salt-and-sand plains.',
        lat: -24.73,
        lng: 15.35,
        imagePrompt:
            'Realistic photo of Namib Desert’s Dune 45 at sunset, footprints on crest, stark dead acacia trees on white clay pan below. Style like google street view. Make sure theres no words that say the location in the image',
        biome: 'desert_dune',
        difficulty: 4,
    },
    {
        id: 'reine',
        name: 'Reine, Lofoten, Norway',
        description:
            'An Arctic fishing village of red rorbu cabins on stilts, set against sheer granite peaks rising from a tranquil fjord.',
        lat: 67.94,
        lng: 13.09,
        imagePrompt:
            'realistic photo of Reine village, red fishermen cabins on rocky islets, calm fjord water reflecting jagged granite mountains, soft Arctic light. Style like google street view. Make sure theres no words that say the location in the image',
        biome: 'arctic_fjord',
        difficulty: 3,
    },
    {
        id: 'meteora',
        name: 'Meteora Monasteries, Greece',
        description:
            'Ancient cliff-top monasteries perched on giant sandstone pillars above a rolling green valley.',
        lat: 39.715,
        lng: 21.631,
        imagePrompt:
            'Realistic photo from a high sandstone pillar showing stone monastery atop a neighboring tower, hazy valley and winding river below, late-afternoon sun. Style like google street view; no location text in image',
        biome: 'rocky_cliff',
        difficulty: 3,
    },
    {
        id: 'louise',
        name: 'Lake Louise, Banff NP, Canada',
        description:
            'Turquoise glacial lake rimmed by dense spruce forest and sheer ice-capped peaks.',
        lat: 51.416,
        lng: -116.212,
        imagePrompt:
            'Realistic photo beside vivid turquoise alpine lake with canoe dock, conifer forests and snow-patched crags reflecting in still water, soft morning haze. Style like google street view; no words in image',
        biome: 'alpine_lake',
        difficulty: 2,
    },
    {
        id: 'palawan',
        name: 'El Nido Limestone Cliffs, Palawan, Philippines',
        description:
            'Karst spires rising from emerald waters dotted with white-sand coves and jungle-topped islands.',
        lat: 11.181,
        lng: 119.391,
        imagePrompt:
            'Realistic photo from a boat in crystal-clear lagoon ringed by jagged limestone cliffs covered in lush vines, bright tropical sky. Style like google street view; no text in image',
        biome: 'karst_island',
        difficulty: 4,
    },
    {
        id: 'bolaven',
        name: 'Bolaven Plateau Waterfalls, Laos',
        description:
            'Twin tropical waterfalls plunging into a misty gorge edged by dense rainforest.',
        lat: 15.107,
        lng: 106.852,
        imagePrompt:
            'Realistic photo from jungle overlook showing twin cascades pouring into deep ravine, mossy rocks and broad-leafed plants in foreground, humid atmosphere. Style like google street view; no place words',
        biome: 'rainforest_falls',
        difficulty: 3,
    },
    {
        id: 'sossus',
        name: 'Deadvlei, Sossusvlei, Namibia',
        description:
            'Bleached clay pan with black skeletal camel-thorn trees set against towering red dunes.',
        lat: -24.739,
        lng: 15.315,
        imagePrompt:
            'Realistic photo of stark white clay flat with dark dead trees casting sharp shadows, immense red dune wall under deep blue sky. Style like google street view; no location text',
        biome: 'salt_pan',
        difficulty: 4,
    },
    {
        id: 'perito',
        name: 'Perito Moreno Glacier, Patagonia, Argentina',
        description:
            'Massive blue-white glacier wall calving into a milky turquoise lake framed by snow-capped Andes.',
        lat: -50.495,
        lng: -73.048,
        imagePrompt:
            'Realistic photo from boardwalk facing towering serrated ice wall meeting cloudy teal water, distant jagged peaks under cold sunlight. Style google street view; no words',
        biome: 'glacier_lake',
        difficulty: 3,
    },
    {
        id: 'pamukkale',
        name: 'Pamukkale Travertine Terraces, Türkiye',
        description:
            'Snow-white calcium pools cascading down a hillside, filled with aquamarine thermal water.',
        lat: 37.925,
        lng: 29.124,
        imagePrompt:
            'Realistic photo of bright white terraced pools brimming with pale blue mineral water, distant farmlands under hazy sunset. Style like google street view; omit location words',
        biome: 'travertine_terrace',
        difficulty: 2,
    },
    {
        id: 'lençois',
        name: 'Lençóis Maranhenses Dunes, Brazil',
        description:
            'Sweeping cream-colored dunes pocketed with rainwater lagoons that glow sapphire in the sun.',
        lat: -2.523,
        lng: -43.115,
        imagePrompt:
            'Realistic photo looking across undulating pale dunes with bright blue freshwater lagoon in middle ground, thin clouds in deep sky. Google street view style; no identifying text',
        biome: 'coastal_dune',
        difficulty: 4,
    },
    {
        id: 'uluru',
        name: 'Uluru (Ayers Rock), Australia',
        description:
            'Gigantic sandstone monolith rising from flat red desert scrub, changing hues at dusk.',
        lat: -25.345,
        lng: 131.036,
        imagePrompt:
            'Realistic photo of massive red rock formation dominating arid plain with sparse bushes, low sun casting long shadows, clear outback sky. Google street view style; no words shown',
        biome: 'desert_monolith',
        difficulty: 3,
    },
    {
        id: 'pliva',
        name: 'Pliva Watermills, Bosnia and Herzegovina',
        description:
            'Cluster of rustic wooden watermills straddling emerald streams and miniature waterfalls in a forest clearing.',
        lat: 44.349,
        lng: 17.261,
        imagePrompt:
            'Realistic photo at stream level showing old timber watermill huts on stilts over cascading crystal water, mossy banks and leafy trees, dappled sunlight. Street-view style; no text in image',
        biome: 'riparian_forest',
        difficulty: 2,
    },
    {
        id: 'chefchaouen',
        name: 'Chefchaouen, Morocco',
        description:
            'Labyrinth of blue-washed alleys and stairways hugging a Rif-mountain slope, accented by bright doorways and flower pots.',
        lat: 35.168,
        lng: -5.262,
        imagePrompt:
            'Realistic street-view style photo in narrow Chefchaouen alley, cobalt walls, painted stairs, colorful flower pots, afternoon dappled light; no location text',
        biome: 'medina_hill',
        difficulty: 3,
    },
    {
        id: 'dubrovnik',
        name: 'Dubrovnik Old Town, Croatia',
        description:
            'Medieval limestone lanes within massive sea-battered walls, orange terracotta roofs cascading toward the Adriatic.',
        lat: 42.640,
        lng: 18.111,
        imagePrompt:
            'Realistic street-view of Dubrovnik walls and limestone street, archways, orange roofs and turquoise sea backdrop; no identifying words',
        biome: 'walled_coast',
        difficulty: 3,
    },
    {
        id: 'matera',
        name: 'Matera Sassi, Italy',
        description:
            'Ancient cave dwellings stacked on a ravine cliffside, honey-colored stone lit by warm southern sun.',
        lat: 40.667,
        lng: 16.606,
        imagePrompt:
            'High-realism photo overlooking Matera cave houses, rock-hewn facades, winding alleys, golden hour tones; google street-view style, no text',
        biome: 'cave_city',
        difficulty: 3,
    },
    {
        id: 'colmar',
        name: 'Colmar, Alsace, France',
        description:
            'Fairytale timber-frame houses lining a quiet canal with geranium-filled window boxes and cobbled quays.',
        lat: 48.080,
        lng: 7.355,
        imagePrompt:
            'Realistic street-view photo along Colmar canal, half-timbered houses reflected in water, flower boxes, soft afternoon light; no location words',
        biome: 'canal_town',
        difficulty: 2,
    },
    {
        id: 'bergenbryggen',
        name: 'Bryggen Wharf, Bergen, Norway',
        description:
            'Row of colorful historic wooden warehouses facing a fjord, backed by steep forested hills and low clouds.',
        lat: 60.397,
        lng: 5.323,
        imagePrompt:
            'Realistic photo of Bryggen wharf, vibrant wooden facades, moored boats, misty hillside backdrop; google street-view look, no text',
        biome: 'fjord_wharf',
        difficulty: 2,
    },
    {
        id: 'bhaktapur',
        name: 'Bhaktapur Durbar Square, Nepal',
        description:
            'Red-brick pagoda temples, carved wooden struts, and stone guardians set around a bustling medieval square.',
        lat: 27.672,
        lng: 85.429,
        imagePrompt:
            'Street-view style photo in Bhaktapur square, tiered pagoda temple, brick pavement, locals in traditional dress, Himalaya haze; no identifying text',
        biome: 'pagoda_plaza',
        difficulty: 4,
    },
    {
        id: 'ushuaia',
        name: 'Ushuaia, Tierra del Fuego, Argentina',
        description:
            'Colorful port town squeezed between snow-capped mountains and the Beagle Channel at the edge of the world.',
        lat: -54.807,
        lng: -68.304,
        imagePrompt:
            'Realistic street-view photo along Ushuaia waterfront, bright houses, distant snowy peaks, cold blue channel; no location signage',
        biome: 'subantarctic_port',
        difficulty: 4,
    },
    {
        id: 'kotorbay',
        name: 'Kotor Old Town, Montenegro',
        description:
            'Venetian stone alleys enclosed by fortress walls, tucked between emerald bay waters and rugged limestone peaks.',
        lat: 42.424,
        lng: 18.771,
        imagePrompt:
            'Realistic photo inside Kotor alley, stone facades, bay glimmer visible through gate, towering mountains; street-view style, no text',
        biome: 'fjord_fort',
        difficulty: 3,
    },
    {
        id: 'gdansk',
        name: 'Gdańsk Long Market, Poland',
        description:
            'Historic riverside promenade lined with ornate Hanseatic facades and a Medieval crane overlooking Motława River.',
        lat: 54.350,
        lng: 18.657,
        imagePrompt:
            'Realistic street-view of Gdańsk waterfront, tall-gabled houses, river reflections, Medieval crane, evening glow; no identifying words',
        biome: 'riverside_hanse',
        difficulty: 2,
    },
    {
        id: 'lijiang',
        name: 'Lijiang Old Town, Yunnan, China',
        description:
            'Cobblestone canals spanned by arched bridges, traditional Naxi wooden houses roofed with grey tiles and lanterns.',
        lat: 26.872,
        lng: 100.240,
        imagePrompt:
            'Realistic street-view photo of Lijiang canal at dusk, orange lanterns, wooden houses, stone bridge, Jade Dragon Snow Mountain faint in background; no text',
        biome: 'canal_oldtown',
        difficulty: 4,
    }


] as const