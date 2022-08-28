import { DistrictKeyInfo } from './components/DistrictInfo'

export const crestHillInfo: DistrictKeyInfo = {
  districtName: 'Crest Hill',
  developmentLevel: 'established',
  textContent:
    "Located at the north end of town, this is the center of all things import and export. The Titan's Gap road ends here. Nearly anything shipping in or out of town passes through Crest Hill",
  landmarks: [
    {
      name: "Hawkshaw's Livery",
      textContent:
        'Providing for the needs of horses and other draught animals, the livery is an essential cog in the extractive machinery of the town. Proprietor Silas Greene is a fervent disciple of Luton, and has contributed heavily to construct the chapel.',
      affiliation: 'Apostles of Luton',
    },
    {
      name: 'Bright and Son Freight',
      textContent:
        'Horace, the younger Bright brother, manages this outpost of the family transport business. Brother Henry receives packages on the other side of the gap. Father Bright is somewhere away and above, installed behind a desk in deepest Astria. A glowering portrait of the old man hangs above the till.',
      affiliation: 'Apostles of Luton',
    },
    {
      name: 'Chapel of Luton',
      textContent:
        'Rapidly growing from a construction site at the apex of the hill, the chapel is a base from which Pastor Mac Steelhead extends the auspices of Luton and his holy Domain.',
      affiliation: 'Apostles of Luton',
    },
    {
      name: 'Hotel Belle Vie',
      textContent:
        'Proprietor Samuel Gantt is an early arrival, a grotesque sycophant eager to prove his value to those even he considers his betters. Nothing said within the walls of the Belle Vie stays secret for long. Pronounced "Belly V-eye"',
      affiliation: 'The Red Hand',
    },
  ],
  map: './map_cresthill.png',
}


export const theGroveInfo: DistrictKeyInfo = {
  districtName: 'The Grove',
  developmentLevel: 'established',
  textContent:
    "A pleasantly wooded lowland north of Crest Hill, this quiet and residential district is home to many of the Luton's most committed supplicants.",
  landmarks: [
    {
      name: "Plaza of the Saints",
      textContent:
        "A wide square whose main feature is statue of Luton and his first apostles, which church artisans are in the process coaxing from a large block of mountain granite. It is attended by a few businesses, mainly family establishments, and the Choir Hall, an open shelter constructed originally for community singing and worship events; it has of late served as the staging ground for the church's anti-demon militia",
      affiliation: 'Apostles of Luton',
    },
    {
      name: "Heaven's Lane",
      textContent:
        "A broad street of finely appointed houses constructed after the latest Astrian styles. Tithes paid by owners of these homes constitute a significant portion of the Church's income.",
      affiliation: 'Apostles of Luton',
    },
    {
      name: "Burtonville",
      textContent:
        "A neighborhood of modest homes inhabited by mining families. These disciples work their own claims and are known generally to be honest, if a little standoffish.",
      affiliation: 'Apostles of Luton',
    },
  ],
  map: './map_cresthill.png',
}

export const crosswaterInfo: DistrictKeyInfo = {
  districtName: 'Crosswater',
  developmentLevel: 'established',
  textContent:
    "True to its name, this district straddles the Snake. It centers on Murdo's Ferry, which brings miners and their spoils back and forth across the river day and night, usually without losing anyone overboard.",
  landmarks: [
    // {
    //   name: "Murdo's Ferry",
    //   textContent:
    //     "The grubby Burt Murdo stands atop his craft, avarice keen in his eye. The whiskey in his blood maintains a careful balance with the sway of the river. He sees himself as an arbiter of the river's will, and is not keen to reliquish that power.",
    //   affiliation: 'The Red Hand',
    // },
    {
      name: "Murdo's Ferry",
      textContent:
        "Despite still bearing his name, Burt Murdo is no more. Wetherbilt men now hold hte ferry, and have increased the tariff. Laborers are ",
      affiliation: 'Wetherbilt Company',
    },
    {
      name: 'Barton Hardware',
      textContent:
        'The old saying goes that in a mineral rush, the rich man sells shovels. Rose Barton and her softspoken partner Carol have taken this adage to heart, and their yield thus far has been bounteous.',
      affiliation: 'Wetherbilt Company',
    },
    {
      name: 'Waterside Lounge',
      textContent:
        'A cheap and smoky bar with pretensions to serving upscale clientele. For now, it is the only place with a craps table and a piano.',
      affiliation: 'Unknown',
    },
    {
      name: "Doc's",
      textContent:
        "No matter what ails you, Doc has something that'll either fix you up or at least make it hard to remember what your problem was. A gruff man in his late 50s who has seen much suffering, Doc commands respect from nearly everyone.",
      affiliation: 'Unknown',
    },
  ],
  map: './map_crosswater.png',
}

export const silversGulchInfo: DistrictKeyInfo = {
  districtName: "Silver's Gulch",
  developmentLevel: 'established',
  textContent:
    "Deep in the miner's camp, this is the absolute heart of vice in Creekside. Eliza Silver and the The Red Hand have anything a miner might need, and their establishments accept shine as payment, which saves the miner a trip across the river.",
  landmarks: [
    {
      name: 'The Broken Spoke Saloon',
      textContent:
        "Eliza Silver's place. The Flagship establishment of the The Red Hand, the Broken Spoke is the tallest building on the street and the oldest one in town. It's bar and a brothel and, for many miners who trade shine for food, booze, and sex, it might as well be a bank.",
      affiliation: 'The Red Hand',
    },
    {
      name: 'Glendas Boarding House',
      textContent:
        'A cheap flop for the down on their luck. Food dangerous to human life, bedsheets cleaned quarterly. Glenda drinks heavy, sleeps late, and manages her business with a stern hand.',
      affiliation: 'Split Finger Gang',
    },
    {
      name: 'April Anvil Apothecary',
      textContent:
        "Doc for the body and soul, spells and salves offered. Dusty bottles labeled in fine and spiderlike script line April's shelves.",
      affiliation: 'Unknown',
    },
    {
      name: "Boss's Hogs",
      textContent:
        "This place reeks. Nothing hides the stink of sin quite like a hog, or at least that's what Boss says. In addition to providing nutritious hogmeat to hungry miners and Crest Hill snobs alike, the Boss seems to be on excellent terms with almost everyone, despite the miasma of odor which surrounds him.",
      affiliation: 'Unknown',
    },
  ],
  map: './map_silversgulch.png',
}

export const hogsRun: DistrictKeyInfo = {
  districtName: "Hog's Run",
  developmentLevel: 'established',
  textContent:
    "Lying to the east and slightly downhill of Silver's Gulch, Hog's Run is a low and fallow strip of land which retains the smell of its namesakes, who were so recently the sole tenants. It's a bustling place organized around a high street which runs the full length of the distict. It's a place where some of the luckier miners hope to raise respectable homes and be joined by their families, though others view it more as a natural overflow from the madness of Silver's Gulch",
  landmarks: [
    {
      name: "Xander's Square",
      textContent:
        "The high street terminates in a public square attended by a variety of food and drink establishments and other amusements. Among the more striking features is a long and low slung building painted in an otherworldly blue. Every time the door swings open a gust of sickly-sweet smoke escapes into the street air.",
      affiliation: 'The Flock',
    },
    {
      name: "Meat Market and Stockyard",
      textContent:
        "Right down the slope from Boss's Hog's in Silver's Gulch, the meat market has sprung up as a secondary destination where merchants offer a wide variety of beasts, both game and domesticated. Rabbit, deer, and woodchuck are among the most common choices. There is also a fetid open-air agglomeration of pens where livestock are kept in common, though the brand of each beasts hide identifies the animal's owner.",
      affiliation: "Unknown",
    },
    {
      name: "Prospectors' Hall",
      textContent:
        "An open-sided shelter used for a variety of meetings and social gatherings. This is the center of John Bridger's nascent Prospector's League. A string band plays every Saturday and a family atmosphere is strictly enforced",
      affiliation: "Prospector's League",
    },
    {
      name: "Miner's Bazaar",
      textContent:
        "The Temple of the Hand stands along the high street, from which a short alley runs perpendicularly. It is filled with the close smell of incense and burned meat. While many here are shine-believers and visitors of the hand, it is still the place where anyone might go, especially if they sought something weird, used, or of dubious origin.",
      affiliation: "The Flock",
    },

  ],
  map: './map_silversgulch.png',
}