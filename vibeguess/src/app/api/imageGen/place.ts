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
] as const