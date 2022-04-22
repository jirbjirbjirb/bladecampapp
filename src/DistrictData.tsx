import { DistrictInfoProps } from './components/DistrictInfo'

export const crestHillInfo: DistrictInfoProps = {
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
      hold: 2,
    },
    {
      name: 'Bright and Son Freight',
      textContent:
        'Horace, the younger Bright brother, manages this outpost of the family transport business. Brother Henry receives packages on the other side of the gap. Father Bright is somewhere away and above, installed behind a desk in deepest Astria. A glowering portrait of the old man hangs above the till.',
      affiliation: 'Apostles of Luton',
      hold: 2,
    },
    {
      name: 'Chapel of Luton',
      textContent:
        'Rapidly growing from a construction site at the apex of the hill, the chapel is a base from which Pastor Mac Steelhead extends the auspices of Luton and his holy Domain.',
      affiliation: 'Apostles of Luton',
      hold: 4,
    },
    {
      name: 'Hotel Belle Vie',
      textContent:
        'Proprietor Samuel Gantt is an early arrival, a grotesque sycophant eager to prove his value to those even he considers his betters. Nothing said within the walls of the Belle Vie stays secret for long. Pronounced "Belly V-eye"',
      affiliation: 'The Red Hand',
      hold: 3,
    },
  ],
  map: './map_cresthill.png',
}

export const crosswaterInfo: DistrictInfoProps = {
  districtName: 'Crosswater',
  developmentLevel: 'established',
  textContent:
    "True to its name, this disctrict straddles the Snake. It centers on Murdo's Ferry, which brings miners and their spoils back and forth across the river day and night, usually without losing anyone overboard.",
  landmarks: [
    {
      name: "Murdo's Ferry",
      textContent:
        "The grubby Burt Murdo stands atop his craft, avarice keen in his eye. The whiskey in his blood maintains a careful balance with the sway of the river. He sees himself as an arbiter of the river's will, and is not keen to reliquish that power.",
      affiliation: 'The Red Hand',
      hold: 2,
    },
    {
      name: 'Barton Hardware',
      textContent:
        'The old saying goes that in a mineral rush, the rich man sells shovels. Rose Barton and her softspoken partner Carol have taken this adage to heart, and their yield thus far has been bounteous.',
      affiliation: 'Wetherbilt Company',
      hold: 1,
    },
    {
      name: 'Waterside Lounge',
      textContent:
        'A cheap and smoky bar with pretensions to serving upscale clientele. For now, it is the only place with a craps table and a piano.',
      affiliation: 'Unknown',
      hold: 2,
    },
    {
      name: "Doc's",
      textContent:
        "No matter what ails you, Doc has something that'll either fix you up or at least make it hard to remember what your problem was. A gruff man in his late 50s who has seen much suffering, Doc commands respect from nearly everyone.",
      affiliation: 'Unknown',
      hold: 2,
    },
  ],
  map: './map_crosswater.png',
}

export const silversGulchInfo: DistrictInfoProps = {
  districtName: "Silver's Gulch",
  developmentLevel: 'established',
  textContent:
    "Deep in the miner's camp, this is the absolute heart of vice in Creekside. Eliza Silver and the The Red Hand have anything a miner might need, and their establishments accept shine as payment, which saves the miner a trip across the river.",
  landmarks: [
    {
      name: 'The Broken Spoke',
      textContent: 'Flagship establishment of the The Red Hand',
      affiliation: 'The Red Hand',
      hold: 4,
    },
    {
      name: 'Glendas Boarding House',
      textContent:
        'A cheap flop for the down on their luck. Food dangerous to human life, bedsheets cleaned quarterly. Glenda drinks heavy, sleeps late, and manages her business with a stern hand.',
      affiliation: 'Split Finger Gang',
      hold: 1,
    },
    {
      name: 'April Anvil Apothecary',
      textContent:
        "Doc for the body and soul, spells and salves offered. Dusty bottles labeled in fine and spiderlike script line April's shelves.",
      affiliation: 'Unknown',
      hold: 2,
    },
    {
      name: "Boss's Hogs",
      textContent:
        "This place reeks. Nothing hides the stink of sin quite like a hog, or at least that's what Boss says. In addition to providing nutritious hogmeat to hungry miners and Crest Hill snobs alike, the Boss seems to be on excellent terms with almost everyone, despite the miasma of odor which surrounds him.",
      affiliation: 'Unknown',
      hold: 2,
    },
  ],
  map: './map_silversgulch.png',
}

export const testDistrict: DistrictInfoProps = {
  districtName: 'testDistrict',
  developmentLevel: 'established',
  textContent:
    'test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test',
  landmarks: [
    {
      name: 'TestLandmark',
      textContent: 'test test test test test test test test',
      affiliation: 'Unknown',
      hold: 4,
    },
    {
      name: 'TestLandmark',
      textContent: 'test test test test test test test test',
      affiliation: 'Unknown',
      hold: 4,
    },
    {
      name: 'TestLandmark',
      textContent: 'test test test test test test test test',
      affiliation: 'Unknown',
      hold: 4,
    },
    {
      name: 'TestLandmark',
      textContent: 'test test test test test test test test',
      affiliation: 'Unknown',
      hold: 4,
    },
    {
      name: 'TestLandmark',
      textContent: 'test test test test test test test test',
      affiliation: 'Unknown',
      hold: 4,
    },
    {
      name: 'TestLandmark',
      textContent: 'test test test test test test test test',
      affiliation: 'Unknown',
      hold: 4,
    },
  ],
  map: './map_silversgulch.png',
}