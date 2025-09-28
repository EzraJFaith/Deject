const json = localStorage.getItem("formInfo");
const formObj = JSON.parse(json);
const name = formObj[Object.keys(formObj)[0]];
const nameData = localStorage.getItem(name);
const nameObj = JSON.parse(nameData);

const cardHolder = document.querySelector('.cardHolder');
const collectMenu = document.querySelector('.collectMenu');
const playerMenu = document.querySelector('#playerMenu');
const homeMenu = document.querySelector('.home');
const cardStat = document.querySelector('.cardStats');
const buttonHolder = document.querySelector('.buttonHolder');
const tempMenu = document.querySelector('.tempStatMenu');
const bossPit = document.querySelector('.bossPit');
const wildPit = document.querySelector('.wildPit');
const fighterPit = document.querySelector('.fighterPit');
const bossPitPit = document.querySelector('.bossPitPit');
const showcaseMenu = document.querySelector('.showcaseMenu');
const pointMenu = document.querySelector('#pointMenu');
const popup = document.querySelector('.popup');

const cardColors = {
    starter: 'rgb(0, 255, 38)',   
    common: 'aqua',   
    uncommon: '#233eb7ff',  
    rare: '#db3cd0ff',
    commonTwo: 'aqua',
    uncommonTwo: '#233eb7ff', 
    rareTwo: '#db3cd0ff'
};



//Player Cards
const playerCards = [
];

//Placeholder Cards
const placeholderCards = [
];

//Enemy Cards
const enemyCards = [
];

const garbage = [
];

//Common Deject Cards
const S_cards = [
    {id: 0, deck: "starter", name: "Guncho", damage: 7, health: 6, speed: 3, type: "advanced", nature: "aggressive", ability: "speedup", abilityText: "Guncho gains +1 Speed every turn", description: "Guncho", version: "1/3", image: "Pictures/Guncho1.JPG"},
    {id: 1, deck: "starter", name: "Glittle", damage: 4, health: 10, speed: 5, type: "artificial", nature: "basic", ability: "bossfat", abilityText: "Glittle takes -1 Damage from Boss attacks", description: "Glittle", version: "1/3", image: "Pictures/Glittle1.JPG"},
    {id: 2, deck: "starter", name: "Douber", damage: 5, health: 8, speed: 4, type: "advanced", nature: "basic", ability: "pickup", abilityText: "Draw a Utility card before a battle, if it is a stat increase then attach to Douber", description: "Douber", version: "1/3", image: "Pictures/Douber1.JPG"},
    {id: 3, deck: "starter", name: "Paulmer", damage: 7, health: 4, speed: 6, type: "light", nature: "protective", ability: "healing", abilityText: "Paulmer can heal a teammate once a battle for 3HP", description: "Paulmer",version: "1/3", image: "Pictures/Paulmer1.JPG"},
    {id: 4, deck: "starter", name: "Spyke", damage: 3, health: 14, speed: 3, type: "natural", nature: "defensive", ability: "hardshell", abilityText: "Spyke takes -2 Damage on the 3rd turn of Battle", description: "Spyke", version: "1/3", image: "Pictures/Spyke1.JPG"},
    {id: 5, deck: "starter", name: "Rapleer", damage: 4, health: 6, speed: 7, type: "natural", nature: "sneaky", ability: "sneakattack", abilityText: "Rapleer deals +2 Damage if attacked while blocking", description: "Rapleer", version: "1/3", image: "Pictures/Rapleer1.JPG"},
    {id: 6, deck: "starter", name: "Stuic", damage: 4, health: 12, speed: 2, type: "dark", nature: "basic", ability: "draw", abilityText: "If Stuic wins a battle, draw a Utility card", description: "Stuic", version: "1/3", image: "Pictures/Stuic1.JPG"},
    {id: 7, deck: "starter", name: "Ssserpo", damage: 3, health: 12, speed: 6, type: "natural", nature: "basic", ability: "thicktounge", abilityText: "Ssserpo deals +2 Damage on the 3rd turn of Battle", description: "Ssserpo", version: "1/3", image: "Pictures/Ssserpo1.JPG"} 
];

const C_cards = [
  {id: 0, deck: "common", name: "Bladee", damage: 4, health: 8, speed: 3, type: "natural", nature: "passive", ability: "collectable", abilityText: "Gain 5TP if you hold 3 Bladee", description: "Bladee", version: "1/2", image: "Pictures/Bladee1.JPG"},
  {id: 1, deck: "common", name: "OffSpring", damage: 1, health: 9, speed: 4, type: "artificial", nature: "basic", ability: "mutualism", abilityText: "If Offspring transforms, transforms another deject", description: "Offspring", version: "1/3", image: "Pictures/Offspring1.JPG"},
  {id: 2, deck: "common", name: "Moxe", damage: 4, health: 9, speed: 4, type: "artificial", nature: "aggressive", ability: "pintup", abilityText: "Moxe can only double damage on turn 2", description: "Moxe", version: "1/2", image: "Pictures/Hotdog78.webp"},
  {id: 3, deck: "common", name: "Trixard", damage: 2, health: 6, speed: 3, type: "light", nature: "strategic", ability: "joker", abilityText: "Trixards attack is doubled every time a new target is attacked", description: "Trixard", version: "1/2", image: "Pictures/Trixard1.JPG"},
  {id: 4, deck: "common", name: "Bowly", damage: 4, health: 7, speed: 1, type: "advanced", nature: "aggressive", ability: "bully", abilityText: "Bowly gains +3 attack if opponents attack is below 4", description: "Bowly", version: "1/2", image: "Pictures/Bowly1.JPG"},
  {id: 5, deck: "common", name: "Sectoid", damage: 3, health: 3, speed: 2, type: "dark", nature: "basic", ability: "suck", abilityText: "Every attack Sectoid can heal opponent or itself for 3 hp", description: "Sectoud", version: "1/2", image: "Pictures/Sectoid1.JPG"},
  {id: 6, deck: "common", name: "Magmuck", damage: 6, health: 7, speed: 0, type: "artificial", nature: "basic", ability: "suck", abilityText: "Magmuck has a 1/6 chance to deal double damage every attack", description: "Magmuck", version: "1/2", image: "Pictures/Magmuck1.JPG"},
  {id: 7, deck: "common", name: "Pointdex", damage: 4, health: 8, speed: 0, type: "artificial", nature: "passive", ability: "mean", abilityText: "Reroll opponents movement dice once", description: "Pointdex", version: "1/2", image: "Pictures/Pointdex1.JPG"},
  {id: 8, deck: "common", name: "Nachovy", damage: 2, health: 12, speed: 4, type: "natural", nature: "defensive", ability: "pintup", abilityText: "Nachovy can only increase defense on turn 2", description: "Cheeps", version: "1/2", image: "Pictures/Nachovy1.JPG"},
  {id: 9, deck: "common", name: "Klep", damage: 3, health: 4, speed: 5, type: "natural", nature: "basic", ability: "kleptomancy", abilityText: "Gain 4p if Klep defeats a boss", description: "Klep", version: "1/2", image: "Pictures/Klep1.JPG"},
  {id: 10, deck: "common", name: "Glup", damage: 3, health: 9, speed: 2, type: "dark", nature: "sneaky", ability: "manipulate", abilityText: "You may repick a wild deject once", description: "Glup", version: "1/2", image: "Pictures/Massive.webp"},
  {id: 11, deck: "common", name: "Spung", damage: 3, health: 6, speed: 5, type: "natural", nature: "passive", ability: "kleptomancy", abilityText: "Prevent the effects of black spaces", description: "Spung", version: "1/2", image: "Pictures/Spung1.JPG"},
  {id: 12, deck: "common", name: "Mistnose", damage: 2, health: 16, speed: 1, type: "elemental", nature: "defensive", ability: "neutralize", abilityText: "prevent all abilities in battle until Mistnose dies", description: "Mistnose", version: "1/2", image: "Pictures/Mistnose1.JPG"},
  {id: 13, deck: "common", name: "Toofaze", damage: 3, health: 3, speed: 6, type: "natural", nature: "basic", ability: "scholar", abilityText: "Toofaze gains +3 attack against wild dejects", description: "Toofaze", version: "1/2", image: "Pictures/Toofaze1.JPG"},
  {id: 14, deck: "common", name: "Blaw", damage: 1, health: 9, speed: 2, type: "artificial", nature: "basic", ability: "connection", abilityText: "gain access to trade center from anywhere once", description: "Blaw", version: "1/2", image: "Pictures/Blaw1.JPG"},
  {id: 15, deck: "common", name: "Zoglox", damage: 3, health: 10, speed: 3, type: "natural", nature: "basic", ability: "thief", abilityText: "Steal -2p from a player", description: "Zoglox", version: "1/2", image: "Pictures/Zoglox1.JPG"},
  {id: 16, deck: "common", name: "Boomburst", damage: 1, health: 9, speed: 3, type: "natural", nature: "scary", ability: "weaken", abilityText: "Reduce the attack of a minion by -2", description: "Boomburst", version: "1/2", image: "Pictures/Boomburst1.JPG"},
  {id: 17, deck: "common", name: "Baclaphobe", damage: 1, health: 5, speed: 1, type: "artificial", nature: "basic", ability: "multiply", abilityText: "Baclaphobe doubles its attack every attack", description: "Baclaphobe", version: "1/3", image: "Pictures/Baclaphobe1.JPG"},
  {id: 18, deck: "common", name: "Tortish", damage: 3, health: 6, speed: 3, type: "dark", nature: "basic", ability: "stealcard", abilityText: "steal a utility card from one player", description: "Tortish", version: "1/2", image: "Pictures/Tortish1.JPG"},
  {id: 19, deck: "common", name: "Purrt", damage: 2, health: 7, speed: 5, type: "light", nature: "basic", ability: "takecard", abilityText: "draw a utility card", description: "Purrt", version: "1/2", image: "Pictures/Purrt1.JPG"},
  {id: 20, deck: "common", name: "Vervolve", damage: 3, health: 5, speed: 4, type: "natural", nature: "basic", ability: "weakling", abilityText: "transform with 3 TP instead of 5", description: "Vervolve", version: "1/3", image: "Pictures/Vervolve1.JPG"},
  {id: 21, deck: "common", name: "Claknid", damage: 4, health: 7, speed: 4, type: "natural", nature: "basic", ability: "gamble", abilityText: "choose to flip a coin, heads is double damage tails is attack miss", description: "Claknid", version: "1/2", image: "Pictures/Claknid1.JPG"},
  {id: 22, deck: "common", name: "Lolywallup", damage: 2, health: 5, speed: 6, type: "artificial", nature: "basic", ability: "hit", abilityText: "Deal +6 damage on turn 2", description: "Lolywallup", version: "1/2", image: "Pictures/Lolywallup1.JPG"},
  {id: 23, deck: "common", name: "Snorkin", damage: 2, health: 11, speed: 3, type: "elemental", nature: "basic", ability: "sponge", abilityText: "miss attack to take half damage", description: "Snorkin", version: "1/2", image: "Pictures/Hoso1.JPG"},
  {id: 24, deck: "common", name: "Charcog", damage: 4, health: 9, speed: 2, type: "elemental", nature: "basic", ability: "char", abilityText: "Redraw a utility card", description: "Charcog", version: "1/2", image: "Pictures/Charco1.JPG"},
  {id: 25, deck: "common", name: "Salmyte", damage: 2, health: 9, speed: 3, type: "artificial", nature: "basic", ability: "lick", abilityText: "double the effects of a utility card", description: "Salmyte", version: "1/2", image: "Pictures/Salmyte1.JPG"},
  {id: 26, deck: "common", name: "Raidt", damage: 1, health: 10, speed: 1, type: "elemental", nature: "basic", ability: "raidiate", abilityText: "Deal +1 damage to all opponenets every turn", description: "Raidt", version: "1/2", image: "Pictures/Raidt1.JPG"},
  {id: 27, deck: "common", name: "Pluge", damage: 3, health: 8, speed: 4, type: "natural", nature: "basic", ability: "plugin", abilityText: "Deal double damage to elemental dejects", description: "Pluge", version: "1/2", image: "Pictures/Pluge1.JPG"},
  {id: 28, deck: "common", name: "Goob", damage: 4, health: 6, speed: 4, type: "natural", nature: "wild", ability: "nothing", abilityText: "No ability", description: "Goob", version: "1/2", image: "Pictures/Goob1.JPG"},
  {id: 29, deck: "common", name: "Sonni", damage: 1, health: 5, speed: 2, type: "natural", nature: "passive", ability: "collectable", abilityText: "Deal 100 damage to all opponents on turn 5", description: "Sonni", version: "1/1", image: "Pictures/Sonni.JPG"},
];

const U_cards = [
  {id: 0, deck: "uncommon", name: "Gulpoin", damage: 5, health: 6, speed: 6, type: "dark", nature: "basic", ability: "x", abilityText: "Double the Effects of all Yellow Spaces", description: "x", version: "1/2", image: "Pictures/Gulpoin1.JPG"},
  {id: 1, deck: "uncommon", name: "Abysst", damage: 2, health: 11, speed: 4, type: "dark", nature: "protective", ability: "x", abilityText: "Instead of blocking one teammate, block two teammates", description: "x", version: "1/3", image: "Pictures/Abysst1.JPG"},
  {id: 2, deck: "uncommon", name: "Joctos", damage: 4, health: 8, speed: 4, type: "elemental", nature: "basic", ability: "x", abilityText: "Lower an oppenents speed by -2 before battle", description: "x", version: "1/3", image: "Pictures/Joctos1.JPG"},
  {id: 3, deck: "uncommon", name: "Wheedworth", damage: 3, health: 9, speed: 3, type: "elemental", nature: "protective", ability: "x", abilityText: "Lower an oppenents speed by -2 before battle", description: "x", version: "1/2", image: "Pictures/Gulpoin1.JPG"},
  {id: 4, deck: "uncommon", name: "Graver", damage: 4, health: 7, speed: 3, type: "natural", nature: "basic", ability: "x", abilityText: "Deal double damage to Wild Dejects", description: "x", version: "1/2", image: "Pictures/Graver1.JPG"},
  {id: 5, deck: "uncommon", name: "Twinilda", damage: 5, health: 6, speed: 3, type: "natural", nature: "sneaky", ability: "x", abilityText: "Deal double damage to light Dejects", description: "x", version: "1/3", image: "Pictures/Twinilda1.JPG"},
  {id: 6, deck: "uncommon", name: "Revorand", damage: 2, health: 5, speed: 1, type: "natural", nature: "basic", ability: "x", abilityText: "No ability", description: "x", version: "1/3", image: "Pictures/Revorand1.JPG"},
  {id: 7, deck: "uncommon", name: "Shrimpini", damage: 1, health: 10, speed: 6, type: "light", nature: "mystic", ability: "x", abilityText: "Redirect one enemies attack to any teammate or Shrimpini", description: "x", version: "1/2", image: "Pictures/Shrimpini1.JPG"},
  {id: 8, deck: "uncommon", name: "Whoul", damage: 3, health: 14, speed: 1, type: "natural", nature: "plotting", ability: "x", abilityText: "Gain +2 Attack and +3 Speed on turn 3", description: "x", version: "1/3", image: "Pictures/Whoul1.JPG"},
  {id: 9, deck: "uncommon", name: "Plauke", damage: 5, health: 8, speed: 3, type: "natural", nature: "sneaky", ability: "x", abilityText: "Raise each teammates health by +2", description: "x", version: "1/3", image: "Pictures/Plauke1.JPG"},
  {id: 10, deck: "uncommon", name: "Jyem", damage: 3, health: 12, speed: 2, type: "natural", nature: "basic", ability: "x", abilityText: "Flip a coin each turn, take 1/2 reduced damage rounded up for heads", description: "x", version: "1/3", image: "Pictures/Jyem1.JPG"},
  {id: 11, deck: "uncommon", name: "Cloptrop", damage: 2, health: 15, speed: 1, type: "natural", nature: "defensive", ability: "x", abilityText: "Block all damage to a teammate once a battle", description: "x", version: "1/2", image: "Pictures/Cloptrop1.JPG"},
  {id: 12, deck: "uncommon", name: "Stalkur", damage: 5, health: 4, speed: 2, type: "elemental", nature: "basic", ability: "x", abilityText: "Transform another Deject when Stalkur Transforms", description: "x", version: "1/3", image: "Pictures/Stalkur1.JPG"},
  {id: 13, deck: "uncommon", name: "Zinger", damage: 5, health: 5, speed: 4, type: "natural", nature: "basic", ability: "x", abilityText: "Deal +3 Damage to elemental Dejects", description: "x", version: "1/3", image: "Pictures/Zinger1.JPG"},
  {id: 14, deck: "uncommon", name: "Harte", damage: 3, health: 9, speed: 2, type: "natural", nature: "wild", ability: "x", abilityText: "Fully heal a teammate if Harte wins a battle", description: "x", version: "1/2", image: "Pictures/Harte1.JPG"},
  {id: 15, deck: "uncommon", name: "Shopop", damage: 2, health: 7, speed: 2, type: "natural", nature: "basic", ability: "x", abilityText: "gain access to shop from anywhere once", description: "x", version: "1/2", image: "Pictures/Shopop1.JPG"},
  {id: 16, deck: "uncommon", name: "Slidem", damage: 2, health: 6, speed: 7, type: "natural", nature: "scary", ability: "x", abilityText: "Gain an extra movement dice if Slidem wins a battle", description: "x", version: "1/3", image: "Pictures/Slidem1.JPG"},
  {id: 17, deck: "uncommon", name: "Fizzle", damage: 4, health: 3, speed: 5, type: "natural", nature: "brave", ability: "x", abilityText: "Gain +4 Attack against opponents with less speed", description: "x", version: "1/3", image: "Pictures/Fizzle1.JPG"},
  {id: 18, deck: "uncommon", name: "Portus", damage: 4, health: 9, speed: 3, type: "natural", nature: "basic", ability: "x", abilityText: "Portus must be attacked three times to die", description: "x", version: "1/2", image: "Pictures/Portus1.JPG"},
  {id: 19, deck: "uncommon", name: "Akpig", damage: 2, health: 10, speed: 4, type: "natural", nature: "basic", ability: "x", abilityText: "Deal +10 damage to an opponent on turn 3", description: "x", version: "1/3", image: "Pictures/Akpig1.JPG"},
  {id: 20, deck: "uncommon", name: "Valenticle", damage: 4, health: 10, speed: 2, type: "elemental", nature: "defensive", ability: "x", abilityText: "Skip attack to heal a teammate for 4HP", description: "x", version: "1/3", image: "Pictures/Valenticle1.JPG"},
  {id: 21, deck: "uncommon", name: "Scopscuff", damage: 7, health: 10, speed: 5, type: "natural", nature: "aggressive", ability: "x", abilityText: "Discard 1p everytime Scopscuff attacks or it cannot attack", description: "x", version: "1/3", image: "Pictures/Scopscuff1.JPG"},
  {id: 22, deck: "uncommon", name: "Smoldowl", damage: 3, health: 6, speed: 4, type: "natural", nature: "brave", ability: "x", abilityText: "Continue dealing damage to opponents even after Smoldowl dies", description: "x", version: "1/3", image: "Pictures/Smoldowl1.JPG"},
  {id: 23, deck: "uncommon", name: "Starbar", damage: 4, health: 8, speed: 4, type: "natural", nature: "basic", ability: "x", abilityText: "Heal a teammate for 6HP once a battle", description: "x", version: "1/3", image: "Pictures/Starbar1.JPG"},
  {id: 24, deck: "uncommon", name: "Grondid", damage: 5, health: 11, speed: 0, type: "natural", nature: "basic", ability: "x", abilityText: "Gain +3 Attack on turn 3", description: "x", version: "1/2", image: "Pictures/Grondid1.JPG"},
  {id: 25, deck: "uncommon", name: "Rayne", damage: 1, health: 8, speed: 3, type: "natural", nature: "basic", ability: "x", abilityText: "Roll a 1/6 dice before Attack and add that to Raynes damage", description: "x", version: "1/3", image: "Pictures/Rayne1.JPG"},
  {id: 26, deck: "uncommon", name: "Mummo", damage: 2, health: 8, speed: 2, type: "natural", nature: "basic", ability: "x", abilityText: "Fully heal a teammate outside of battle for 3p", description: "x", version: "1/3", image: "Pictures/Mummo1.JPG"},
  {id: 27, deck: "uncommon", name: "Sporll", damage: 3, health: 12, speed: 1, type: "natural", nature: "defensive", ability: "x", abilityText: "Block any enemies attack every third turn", description: "x", version: "1/3", image: "Pictures/Sporll1.JPG"},
  {id: 28, deck: "uncommon", name: "Fourcan", damage: 6, health: 6, speed: 3, type: "natural", nature: "basic", ability: "x", abilityText: "All damage boosts double their effeccts on Fourcan", description: "x", version: "1/2", image: "Pictures/Fourcan1.JPG"},
  {id: 29, deck: "uncommon", name: "Jhagger", damage: 2, health: 9, speed: 4, type: "natural", nature: "basic", ability: "x", abilityText: "Gain +4 attack against opponents with less speed", description: "x", version: "1/2", image: "Pictures/Jhagger1.JPG"},
  {id: 30, deck: "uncommon", name: "Mermunch", damage: 5, health: 3, speed: 2, type: "natural", nature: "aggressive", ability: "x", abilityText: "Teammates heal +1HP every turn", description: "x", version: "1/3", image: "Pictures/Fairy.JPG"},
  {id: 31, deck: "uncommon", name: "Powda", damage: 4, health: 11, speed: 1, type: "natural", nature: "sneaky", ability: "x", abilityText: "Deal double damage when dodging an attack", description: "x", version: "1/3", image: "Pictures/Powda1.JPG"},
  {id: 32, deck: "uncommon", name: "Buzzoff", damage: 6, health: 2, speed: 4, type: "natural", nature: "wild", ability: "x", abilityText: "Always attack first on the first turn", description: "x", version: "1/2", image: "Pictures/Buzzoff1.JPG"},
  {id: 33, deck: "uncommon", name: "Wartiaor", damage: 3, health: 7, speed: 6, type: "natural", nature: "basic", ability: "x", abilityText: "If team HP is over 25, gain +4 Attack", description: "x", version: "1/2", image: "Pictures/Wartiator1.JPG"},
  {id: 34, deck: "uncommon", name: "Goozer", damage: 5, health: 4, speed: 5, type: "natural", nature: "basic", ability: "x", abilityText: "Choose to move back one space instead of rolling", description: "x", version: "1/2", image: "Pictures/Goozer1.JPG"},
  {id: 35, deck: "uncommon", name: "Rolljab", damage: 4, health: 7, speed: 2, type: "natural", nature: "basic", ability: "x", abilityText: "Add +2 to your roll on Lavender squares", description: "x", version: "1/2", image: "Pictures/Rolljab1.JPG"},
  {id: 36, deck: "uncommon", name: "Karen", damage: 2, health: 10, speed: 3, type: "natural", nature: "scary", ability: "x", abilityText: "Get an item from a shop or hut half off", description: "x", version: "1/2", image: "Pictures/Karen1.JPG"},
  {id: 37, deck: "uncommon", name: "Floogyte", damage: 4, health: 5, speed: 3, type: "natural", nature: "basic", ability: "x", abilityText: "Spend -5p to block an attack during battle", description: "x", version: "1/3", image: "Pictures/Floogyte1.JPG"},
  {id: 38, deck: "uncommon", name: "Wigoo", damage: 2, health: 10, speed: 4, type: "natural", nature: "basic", ability: "x", abilityText: "Raise a teammates speed by +4", description: "x", version: "1/2", image: "Pictures/Jimmy.webp"},
  {id: 39, deck: "uncommon", name: "Clox", damage: 4, health: 7, speed: 3, type: "natural", nature: "basic", ability: "x", abilityText: "Give a teammate +2 Attack", description: "x", version: "1/2", image: "Pictures/Bravo.png"},
  {id: 40, deck: "uncommon", name: "Philanthorn", damage: 1, health: 13, speed: 1, type: "natural", nature: "basic", ability: "x", abilityText: "Give teammates +2 HP", description: "x", version: "1/3", image: "Pictures/Philanthorn1.JPG"},
];

const R_cards = [
  {id: 0, deck: "rare", name: "Giabog", damage: 4, health: 13, speed: 3, type: "natural", nature: "wild", ability: "x", abilityText: "Giabog can deal +4 damage to any oppoenet after death", description: "x", version: "1/3", image: "Pictures/Giabog1.JPG"},
  {id: 1, deck: "rare", name: "Shockstrum", damage: 2, health: 9, speed: 3, type: "natural", nature: "basic", ability: "x", abilityText: "Roll a d6 and add that to attack", description: "x", version: "1/3", image: "Pictures/Shockstrum1.JPG"},
  {id: 2, deck: "rare", name: "Newburn", damage: 5, health: 7, speed: 6, type: "natural", nature: "basic", ability: "x", abilityText: "If Newburn dies, revive it after battle", description: "x", version: "1/2", image: "Pictures/Newburn1.JPG"},
  {id: 3, deck: "rare", name: "Tiki", damage: 3, health: 12, speed: 3, type: "natural", nature: "aggressive", ability: "x", abilityText: "Tiki gains +2 Attack every turn ", description: "x", version: "1/2", image: "Pictures/Tiki1.JPG"},
  {id: 4, deck: "rare", name: "Mooses", damage: 4, health: 15, speed: 0, type: "natural", nature: "protective", ability: "x", abilityText: "If Mooses dies during battle, fully heal one teammember", description: "x", version: "1/2", image: "Pictures/Mooses1.JPG"},
  {id: 5, deck: "rare", name: "Picksur", damage: 5, health: 10, speed: 5, type: "natural", nature: "basic", ability: "x", abilityText: "You can only transform Picksur with 15TP", description: "x", version: "1/2", image: "Pictures/Picksur1.JPG"}, 
  {id: 6, deck: "rare", name: "Motivox", damage: 1, health: 14, speed: 8, type: "natural", nature: "defensive", ability: "x", abilityText: "Raise teammates speed by +3", description: "x", version: "1/2", image: "Pictures/Motivox1.JPG"},
  {id: 7, deck: "rare", name: "Cragila", damage: 4, health: 5, speed: 2, type: "natural", nature: "basic", ability: "x", abilityText: "No ability", description: "x", version: "1/3", image: "Pictures/Cragilla1.JPG"},
  {id: 8, deck: "rare", name: "Snatcher", damage: 3, health: 5, speed: 4, type: "natural", nature: "basic", ability: "x", abilityText: "No ability", description: "x", version: "1/3", image: "Pictures/Snatcher1.JPG"},
  {id: 9, deck: "rare", name: "Duune", damage: 2, health: 8, speed: 3, type: "natural", nature: "basic", ability: "x", abilityText: "No ability", description: "x", version: "1/3", image: "Pictures/Duune1.JPG"},
  {id: 10, deck: "rare", name: "Messaver", damage: 3, health: 4, speed: 8, type: "natural", nature: "brave", ability: "x", abilityText: "Allow access to battle station from anywhere once", description: "x", version: "1/2", image: "Pictures/Messaver1.JPG"},
  {id: 11, deck: "rare", name: "Guardinal", damage: 3, health: 15, speed: 1, type: "natural", nature: "mystic", ability: "x", abilityText: "Prevent enemy abilities until Guardinal dies", description: "x", version: "1/2", image: "Pictures/CatStupid.webp"},
  {id: 12, deck: "rare", name: "Mantox", damage: 8, health: 3, speed: 7, type: "natural", nature: "basic", ability: "x", abilityText: "Mantox must be attacked twice to die", description: "x", version: "1/2", image: "Pictures/Mantox1.JPG"},
  {id: 13, deck: "rare", name: "Spiritrap", damage: 4, health: 9, speed: 3, type: "natural", nature: "plotting", ability: "x", abilityText: "Gain double P from Yellow space", description: "x", version: "1/3", image: "Pictures/Spiritrap1.JPG"},
  {id: 14, deck: "rare", name: "Griffith", damage: 2, health: 11, speed: 5, type: "natural", nature: "basic", ability: "x", abilityText: "Add +2 to movement dice twice", description: "x", version: "1/3", image: "Pictures/Griffith1.JPG"},
  {id: 15, deck: "rare", name: "Flups", damage: 4, health: 10, speed: 5, type: "natural", nature: "protective", ability: "x", abilityText: "Heal a teammate for 7 health once", description: "x", version: "1/3", image: "Pictures/Flups1.JPG"},
  {id: 16, deck: "rare", name: "Whizz", damage: 2, health: 7, speed: 2, type: "natural", nature: "strategic", ability: "x", abilityText: "Gain +2 Attack against opponenets with speed under 4", description: "x", version: "1/3", image: "Pictures/Whizz1.JPG"},
  {id: 17, deck: "rare", name: "Stonepede", damage: 1, health: 18, speed: 1, type: "natural", nature: "basic", ability: "x", abilityText: "No ability", description: "x", version: "1/3", image: "Pictures/true.JPG"},
  {id: 18, deck: "rare", name: "Liogen", damage: 6, health: 4, speed: 4, type: "natural", nature: "basic", ability: "x", abilityText: "Teammates with Health below 6 gain +2 Attack", description: "x", version: "1/3", image: "Pictures/Liogen1.JPG"},
  {id: 19, deck: "rare", name: "Marrifuge", damage: 4, health: 9, speed: 2, type: "natural", nature: "basic", ability: "x", abilityText: "Marrifuge takes half damage rounded down for two turns", description: "x", version: "1/3", image: "Pictures/Halo1.JPG"},
  {id: 20, deck: "rare", name: "Snoball", damage: 6, health: 3, speed: 5, type: "natural", nature: "scary", ability: "x", abilityText: "Snoball gains +2 Attack every turn", description: "x", version: "1/3", image: "Pictures/Snoball1.JPG"},
  {id: 21, deck: "rare", name: "Hopper", damage: 6, health: 8, speed: 4, type: "natural", nature: "basic", ability: "x", abilityText: "Hopper regains missing Health after battle unless they die", description: "x", version: "1/3", image: "Pictures/Frog1.JPG"},
  {id: 22, deck: "rare", name: "Petloar", damage: 5, health: 9, speed: 5, type: "natural", nature: "mystic", ability: "x", abilityText: "Steal one TP when Petloar transforms", description: "x", version: "1/3", image: "Pictures/Garf.webp"},
  {id: 23, deck: "rare", name: "Einsaur", damage: 3, health: 6, speed: 3, type: "natural", nature: "strategic", ability: "x", abilityText: "Add +1 Attack for each opponent over 10 Health", description: "x", version: "1/3", image: "Pictures/Einsaur1.JPG"},
  {id: 24, deck: "rare", name: "Angeal", damage: 0, health: 15, speed: 3, type: "natural", nature: "mystic", ability: "x", abilityText: "Revive a teammember once", description: "x", version: "1/2", image: "Pictures/Angel1.JPG"},
  {id: 25, deck: "rare", name: "Empath", damage: 2, health: 20, speed: 5, type: "natural", nature: "basic", ability: "x", abilityText: "Block an teammate every turn but take double damage", description: "x", version: "1/3", image: "Pictures/Empath1.JPG"},
];

const Stwo_cards = [
  {id: 0, deck: "starterTwo", name: "Guncho", damage: 10, health: 9, speed: 4, type: "advanced", nature: "aggressive", ability: "speedup", abilityText: "Guncho gains +1 Speed every turn", description: "Guncho", version: "2/3", image: "Pictures/Guncho2.JPG"},
  {id: 1, deck: "starterTwo", name: "Glittle", damage: 5, health: 14, speed: 7, type: "artificial", nature: "basic", ability: "bossfat", abilityText: "Glittle takes -1 Damage from Boss attacks", description: "Glittle", version: "2/3", image: "Pictures/Glittle2.JPG"},
  {id: 2, deck: "starterTwo", name: "Douber", damage: 7, health: 11, speed: 6, type: "advanced", nature: "basic", ability: "pickup", abilityText: "Draw a Utility card before a battle, if it is a stat increase then attach to Douber", description: "Douber", version: "2/3", image: "Pictures/Douber2.JPG"},
  {id: 3, deck: "starterTwo", name: "Paulmer", damage: 11, health: 5, speed: 10, type: "light", nature: "protective", ability: "healing", abilityText: "Paulmer can heal a teammate once a battle for 5HP", description: "Paulmer", version: "2/3", image: "Pictures/Paulmer2.JPG"},
  {id: 4, deck: "starterTwo", name: "Spyke", damage: 4, health: 20, speed: 4, type: "natural", nature: "defensive", ability: "hardshell", abilityText: "Spyke takes -3 Damage on the 3rd turn of Battle", description: "Spyke", version: "2/3", image: "Pictures/Spyke2.JPG"},
  {id: 5, deck: "starterTwo", name: "Rapleer", damage: 6, health: 8, speed: 10, type: "natural", nature: "sneaky", ability: "sneakattack", abilityText: "Rapleer deals +3 Damage if attacked while blocking", description: "Rapleer", version: "2/3", image: "Pictures/Rapleer2.JPG"},
  {id: 6, deck: "starterTwo", name: "Stuic", damage: 6, health: 17, speed: 3, type: "dark", nature: "basic", ability: "draw", abilityText: "If Stuic wins a battle, draw a Utility card", description: "Stuic", version: "2/3", image: "Pictures/Stuic2.JPG"},
  {id: 7, deck: "starterTwo", name: "Ssserpo", damage: 5, health: 16, speed: 8, type: "natural", nature: "basic", ability: "thicktounge", abilityText: "Ssserpo deals +3 Damage on the 3rd turn of Battle", description: "Ssserpo", version: "2/3", image: "Pictures/Ssserpo2.JPG"}
];

const CTwo_cards = [
  {id: 0, name: "Bladee", damage: 6, health: 12, speed: 5, type: "natural", nature: "passive", ability: "collectable", abilityText: "Gain 10TP if you hold 2 Bladee", description: "Bladee", version: "2/2", image: "Pictures/Bladee2.JPG"},
  {id: 1, deck: "commonTwo", name: "OffSpring", damage: 2, health: 14, speed: 6, type: "artificial", nature: "basic", ability: "mutualism", abilityText: "If Offspring transforms, transforms another deject", description: "Offspring", version: "2/3", image: "Pictures/Offspring2.JPG"},
  {id: 2, name: "Moxe", damage: 6, health: 14, speed: 6, type: "artificial", nature: "aggressive", ability: "pintup", abilityText: "No ability", description: "Moxe", version: "2/2"},
  {id: 3, name: "Trixard", damage: 3, health: 9, speed: 5, type: "light", nature: "strategic", ability: "joker", abilityText: "Trixards attack is doubled every time a new target is attacked", description: "Trixard", version: "2/2", image: "Pictures/Trixard2.JPG"},
  {id: 4, name: "Bowly", damage: 6, health: 10, speed: 2, type: "advanced", nature: "aggressive", ability: "bully", abilityText: "Bowly gains +5 attack if opponents attack is below 5", description: "Bowly", version: "2/2", image: "Pictures/Bowly2.JPG"},
  {id: 5, name: "Sectoid", damage: 5, health: 5, speed: 3, type: "dark", nature: "basic", ability: "suck", abilityText: "Every attack Sectoid can heal opponent or itself for 5 hp", description: "Sectoid", version: "2/2", image: "Pictures/Sectoid2.JPG"},
  {id: 6, name: "Magmuck", damage: 9, health: 10, speed: 0, type: "artificial", nature: "basic", ability: "suck", abilityText: "Magmuck has a 1/6 chance to deal double damage every attack", description: "Magmuck", version: "2/2", image: "Pictures/Magmuck2.JPG"},
  {id: 7, name: "Pointdex", damage: 6, health: 12, speed: 0, type: "artificial", nature: "passive", ability: "mean", abilityText: "Reroll opponents movement dice once", description: "Pointdex", version: "2/2", image: "Pictures/Pointdex2.JPG"},
  {id: 8, name: "Nachovy", damage: 3, health: 18, speed: 6, type: "natural", nature: "defensive", ability: "pintup", abilityText: "No ability", description: "Cheeps", version: "2/2", image: "Pictures/Nachovy2.JPG"},
  {id: 9, name: "Klep", damage: 5, health: 6, speed: 8, type: "natural", nature: "basic", ability: "kleptomancy", abilityText: "Gain 6p if Klep defeats a boss", description: "Klep", version: "2/2", image: "Pictures/Klep2.JPG"},
  {id: 10, name: "Glup", damage: 5, health: 15, speed: 3, type: "dark", nature: "sneaky", ability: "manipulate", abilityText: "You may repick a wild deject once", description: "Glup", version: "2/2"},
  {id: 11, name: "Spung", damage: 5, health: 10, speed: 8, type: "natural", nature: "passive", ability: "kleptomancy", abilityText: "Prevent the effects of black spaces", description: "Spung", version: "2/2", image: "Pictures/Spung2.JPG"},
  {id: 12, name: "Mistnose", damage: 3, health: 26, speed: 2, type: "elemental", nature: "defensive", ability: "neutralize", abilityText: "prevent all abilities in battle until Mistnose dies", description: "Mistnose", version: "2/2", image: "Pictures/Mistnose2.JPG"},
  {id: 13, name: "Toofaze", damage: 5, health: 5, speed: 9, type: "natural", nature: "basic", ability: "scholar", abilityText: "You may use Toofaze against wild Dejects", description: "Toofaze", version: "2/2", image: "Pictures/Toofaze2.JPG"},
  {id: 14, name: "Blaw", damage: 3, health: 15, speed: 3, type: "artificial", nature: "basic", ability: "connection", abilityText: "gain access to trade center from anywhere", description: "Blaw", version: "2/2", image: "Pictures/Blaw2.JPG"},
  {id: 15, name: "Zoglox", damage: 5, health: 15, speed: 4, type: "natural", nature: "basic", ability: "thief", abilityText: "Steal -5p from a player", description: "Zoglox", version: "2/2", image: "Pictures/Zoglox2.JPG"},
  {id: 16, name: "Boomburst", damage: 2, health: 15, speed: 5, type: "natural", nature: "scary", ability: "weaken", abilityText: "Reduce the attack of a minion by -3", description: "Boomburst", version: "2/2", image: "Pictures/Boomburst2.JPG"},
  {id: 17, deck: "commonTwo", name: "Baclaphobe", damage: 2, health: 7, speed: 2, type: "artificial", nature: "basic", ability: "multiply", abilityText: "Baclaphobe doubles its attack every attack", description: "Baclaphobe", version: "2/3", image: "Pictures/Baclaphobe2.JPG"},
  {id: 18, name: "Tortish", damage: 5, health: 9, speed: 5, type: "dark", nature: "basic", ability: "stealcard", abilityText: "steal a utility card from one player", description: "Tortish", version: "2/2", image: "Pictures/Tortish2.JPG"},
  {id: 19, name: "Purrt", damage: 3, health: 10, speed: 7, type: "light", nature: "basic", ability: "takecard", abilityText: "draw a utility card", description: "Purrt", version: "2/2", image: "Pictures/Purrt2.JPG"},
  {id: 20, deck: "commonTwo", name: "Vervolve", damage: 5, health: 7, speed: 6, type: "natural", nature: "basic", ability: "weakling", abilityText: "transform with 5 TP instead of 8", description: "Vervolve", version: "2/3", image: "Pictures/Vervole2.JPG"},
  {id: 21, name: "Claknid", damage: 6, health: 10, speed: 6, type: "natural", nature: "basic", ability: "gamble", abilityText: "choose to flip a coin, heads is double damage tails is attack miss", description: "Claknid", version: "2/2", image: "Pictures/Claknid2.JPG"},
  {id: 22, name: "Lolywallup", damage: 3, health: 7, speed: 10, type: "artificial", nature: "basic", ability: "hit", abilityText: "Deal +10 damage on turn 2", description: "Lolywallup", version: "2/2", image: "Pictures/Lolywallup2.JPG"},
  {id: 23, name: "Snorkin", damage: 3, health: 17, speed: 5, type: "elemental", nature: "basic", ability: "sponge", abilityText: "miss attack to take half damage", description: "Snorkin", version: "2/2", image: "Pictures/Hoso2.JPG"},
  {id: 24, name: "Charcog", damage: 6, health: 17, speed: 3, type: "elemental", nature: "basic", ability: "char", abilityText: "Redraw any utility card", description: "Charcog", version: "2/2", image: "Pictures/Charcog2.JPG"},
  {id: 25, name: "Salmyte", damage: 3, health: 14, speed: 5, type: "artificial", nature: "basic", ability: "lick", abilityText: "double the effects of a utility card", description: "Salmyte", version: "2/2"},
  {id: 26, name: "Raidt", damage: 2, health: 15, speed: 2, type: "elemental", nature: "basic", ability: "raidiate", abilityText: "Deal +2 damage to all opponenets every turn", description: "Raidt", version: "2/2", image: "Pictures/Raidt2.JPG"},
  {id: 27, name: "Pluge", damage: 5, health: 14, speed: 6, type: "natural", nature: "basic", ability: "plugin", abilityText: "Deal double damage to elemental dejects", description: "Pluge", version: "2/2"},
  {id: 28, name: "Goob", damage: 6, health: 10, speed: 6, type: "natural", nature: "wild", ability: "nothing", abilityText: "No ability", description: "Goob", version: "2/2"}
];

const UTwo_cards = [
  {id: 0, name: "Gulpoin", damage: 7, health: 10, speed: 10, type: "dark", nature: "basic", ability: "x", abilityText: "Double the Effects of all Yellow Spaces and Green Spaces", description: "x", version: "2/2", image: "Pictures/Gulpoin2.JPG"},
  {id: 1, deck: "uncommonTwo", name: "Abysst", damage: 3, health: 16, speed: 6, type: "dark", nature: "protective", ability: "x", abilityText: "Instead of blocking one teammate, block two teammates", description: "x", version: "2/3", image: "Pictures/Abysst2.JPG"},
  {id: 2, deck: "uncommonTwo", name: "Joctos", damage: 6, health: 14, speed: 6, type: "elemental", nature: "basic", ability: "x", abilityText: "Lower an oppenents speed by -3 before battle", description: "x", version: "2/3", image: "Pictures/Joctos2.JPG"},
  {id: 3, name: "Wheedworth", damage: 5, health: 14, speed: 5, type: "elemental", nature: "protective", ability: "x", abilityText: "Lower an oppenents speed by -3 before battle", description: "x", version: "2/2", image: "Pictures/Gulpoin2.JPG"},
  {id: 4, name: "Graver", damage: 6, health: 10, speed: 5, type: "natural", nature: "basic", ability: "x", abilityText: "You may use Graver against Dejects", description: "x", version: "2/2", image: "Pictures/Graver2.JPG"},
  {id: 5, deck: "uncommonTwo", name: "Twinilda", damage: 7, health: 10, speed: 5, type: "natural", nature: "sneaky", ability: "x", abilityText: "Deal double damage to light Dejects", description: "x", version: "2/3", image: "Pictures/Twinilda2.JPG"},
  {id: 6, deck: "uncommonTwo", name: "Revorand", damage: 4, health: 10, speed: 3, type: "natural", nature: "basic", ability: "x", abilityText: "No ability", description: "x", version: "2/3", image: "Pictures/Revorand2.JPG"},
  {id: 7, name: "Shrimpini", damage: 2, health: 15, speed: 10, type: "light", nature: "mystic", ability: "x", abilityText: "Redirect one enemies attack to any teammate or Shrimpini", description: "x", version: "2/2", image: "Pictures/Shrimpini2.JPG"},
  {id: 8, deck: "uncommonTwo", name: "Whoul", damage: 5, health: 20, speed: 2, type: "natural", nature: "plotting", ability: "x", abilityText: "Gain +3 Attack and +5 Speed on turn 3", description: "x", version: "2/3", image: "Pictures/Whoul2.JPG"},
  {id: 9, deck: "uncommonTwo", name: "Plauke", damage: 7, health: 12, speed: 5, type: "natural", nature: "sneaky", ability: "x", abilityText: "Raise each teammates health by +3", description: "x", version: "2/3", image: "Pictures/Plauke2.JPG"},
  {id: 10, deck: "uncommonTwo", name: "Jyem", damage: 5, health: 17, speed: 3, type: "natural", nature: "basic", ability: "x", abilityText: "Flip a coin each turn, take 1/2 reduced damage rounded up for heads", description: "x", version: "2/3", image: "Pictures/Jyem2.JPG"},
  {id: 11, name: "Cloptrop", damage: 3, health: 21, speed: 2, type: "natural", nature: "defensive", ability: "x", abilityText: "Block all damage to a teammate once a battle", description: "x", version: "2/2", image: "Pictures/Cloptrop2.JPG"},
  {id: 12, deck: "uncommonTwo", name: "Stalkur", damage: 8, health: 6, speed: 3, type: "elemental", nature: "basic", ability: "x", abilityText: "Transform another Deject when Stalkur Transforms", description: "x", version: "2/3", image: "Pictures/Stalkur2.JPG"},
  {id: 13, deck: "uncommonTwo", name: "Zinger", damage: 7, health: 8, speed: 6, type: "natural", nature: "basic", ability: "x", abilityText: "Deal +5 Damage to elemental Dejects", description: "x", version: "2/3", image: "Pictures/Zinger2.JPG"},
  {id: 14, name: "Harte", damage: 5, health: 14, speed: 3, type: "natural", nature: "wild", ability: "x", abilityText: "Fully heal a teammate if Harte wins a battle", description: "x", version: "2/2", image: "Pictures/Harte2.JPG"},
  {id: 15, name: "Shopop", damage: 3, health: 10, speed: 3, type: "natural", nature: "basic", ability: "x", abilityText: "gain access to shop from anywhere once", description: "x", version: "2/2", image: "Pictures/Shopop2.JPG"},
  {id: 16, deck: "uncommonTwo", name: "Slidem", damage: 3, health: 10, speed: 11, type: "natural", nature: "scary", ability: "x", abilityText: "Gain an extra movement dice if Slidem wins a battle", description: "x", version: "2/3", image: "Pictures/Slidem2.JPG"},
  {id: 17, name: "Fizzle", damage: 6, health: 5, speed: 7, type: "natural", nature: "brave", ability: "x", abilityText: "Gain +6 Attack against opponents with less speed", description: "x", version: "2/3", image: "Pictures/Fizzle2.JPG"},
  {id: 18, name: "Portus", damage: 6, health: 15, speed: 5, type: "natural", nature: "basic", ability: "x", abilityText: "Portus must be attacked three times to die", description: "x", version: "2/2", image: "Pictures/Portus2.JPG"},
  {id: 19, deck: "uncommonTwo", name: "Akpig", damage: 3, health: 15, speed: 6, type: "natural", nature: "basic", ability: "x", abilityText: "Deal +15 damage to an opponent on turn 3", description: "x", version: "2/3", image: "Pictures/Akpig2.JPG"},
  {id: 20, deck: "uncommonTwo", name: "Valenticle", damage: 6, health: 15, speed: 3, type: "elemental", nature: "defensive", ability: "x", abilityText: "Skip attack to heal a teammate for 6HP", description: "x", version: "2/3", image: "Pictures/Valenticle2.JPG"},
  {id: 21, deck: "uncommonTwo", name: "Scopscuff", damage: 10, health: 15, speed: 7, type: "natural", nature: "aggressive", ability: "x", abilityText: "Discard 1p everytime Scopscuff attacks or it cannot attack", description: "x", version: "2/3", image: "Pictures/Scopscuff2.JPG"},
  {id: 22, deck: "uncommonTwo", name: "Smoldowl", damage: 5, health: 9, speed: 6, type: "natural", nature: "brave", ability: "x", abilityText: "Continue dealing damage to opponents even after Smoldowl dies", description: "x", version: "2/3", image: "Pictures/Smoldowl2.JPG"},
  {id: 23, deck: "uncommonTwo", name: "Starbar", damage: 6, health: 12, speed: 6, type: "natural", nature: "basic", ability: "x", abilityText: "Heal a teammate for 8HP once a battle", description: "x", version: "2/3", image: "Pictures/Starbar2.JPG"},
  {id: 24, name: "Grondid", damage: 7, health: 16, speed: 1, type: "natural", nature: "basic", ability: "x", abilityText: "Gain +5 Attack on turn 3", description: "x", version: "2/2", image: "Pictures/Grondid2.JPG"},
  {id: 25, deck: "uncommonTwo", name: "Rayne", damage: 3, health: 12, speed: 5, type: "natural", nature: "basic", ability: "x", abilityText: "Roll a 1/6 dice before Attack and add that to Raynes damage", description: "x", version: "2/3", image: "Pictures/Rayne2.JPG"},
  {id: 26, deck: "uncommonTwo", name: "Mummo", damage: 3, health: 12, speed: 3, type: "natural", nature: "basic", ability: "x", abilityText: "Fully heal a teammate outside of battle for 2p", description: "x", version: "2/3", image: "Pictures/Mummo2.JPG"},
  {id: 27, deck: "uncommonTwo", name: "Sporll", damage: 5, health: 17, speed: 2, type: "natural", nature: "defensive", ability: "x", abilityText: "Block any enemies attack every third turn", description: "x", version: "2/3", image: "Pictures/Sporll2.JPG"},
  {id: 28, name: "Fourcan", damage: 9, health: 10, speed: 5, type: "natural", nature: "basic", ability: "x", abilityText: "All damage boosts double their effeccts on Fourcan", description: "x", version: "2/2", image: "Pictures/Fourcan2.JPG"},
  {id: 29, name: "Jhagger", damage: 3, health: 14, speed: 6, type: "natural", nature: "basic", ability: "x", abilityText: "Gain +6 attack against opponents with less speed", description: "x", version: "2/2", image: "Pictures/Jhagger2.JPG"},
  {id: 30, deck: "uncommonTwo", name: "Mermunch", damage: 8, health: 5, speed: 3, type: "natural", nature: "aggressive", ability: "x", abilityText: "Teammates heal +2HP every turn", description: "x", version: "2/3", image: "Pictures/Fairy.JPG"},
  {id: 31, deck: "uncommonTwo", name: "Powda", damage: 6, health: 16, speed: 2, type: "natural", nature: "sneaky", ability: "x", abilityText: "Deal double damage when dodging an attack", description: "x", version: "2/3", image: "Pictures/Powda2.JPG"},
  {id: 32, name: "Buzzoff", damage: 10, health: 3, speed: 6, type: "natural", nature: "wild", ability: "x", abilityText: "Always attack first on the first two turns", description: "x", version: "2/2", image: "Pictures/Buzzoff2.JPG"},
  {id: 33, name: "Wartiaor", damage: 5, health: 11, speed: 9, type: "natural", nature: "basic", ability: "x", abilityText: "If team HP is over 30, gain +6 Attack", description: "x", version: "2/2", image: "Pictures/Wartiator2.JPG"},
  {id: 34, name: "Goozer", damage: 7, health: 6, speed: 7, type: "natural", nature: "basic", ability: "x", abilityText: "Choose to move back one space instead of rolling", description: "x", version: "2/2", image: "Pictures/Goozer2.JPG"},
  {id: 35, name: "Rolljab", damage: 6, health: 10, speed: 3, type: "natural", nature: "basic", ability: "x", abilityText: "Add +3 to your roll on Lavender squares", description: "x", version: "2/2", image: "Pictures/Rolljab2.JPG"},
  {id: 36, name: "Karen", damage: 3, health: 15, speed: 5, type: "natural", nature: "scary", ability: "x", abilityText: "Get two items from a shop or hut half off", description: "x", version: "2/2", image: "Pictures/Karen2.JPG"},
  {id: 37, deck: "uncommonTwo", name: "Floogyte", damage: 6, health: 7, speed: 5, type: "natural", nature: "basic", ability: "x", abilityText: "Spend -4p to block an attack during battle", description: "x", version: "2/3", image: "Pictures/Floogyte2.JPG"},
  {id: 38, name: "Wigoo", damage: 3, health: 14, speed: 7, type: "natural", nature: "basic", ability: "x", abilityText: "Raise a teammates speed by +6", description: "x", version: "2/2", image: "Pictures/Jimmy.webp"},
  {id: 39, name: "Clox", damage: 6, health: 10, speed: 5, type: "natural", nature: "basic", ability: "x", abilityText: "Give a teammate +3 Attack", description: "x", version: "2/2", image: "Pictures/Bravo.png"},
  {id: 40, deck: "uncommonTwo", name: "Philanthorn", damage: 2, health: 21, speed: 2, type: "natural", nature: "basic", ability: "x", abilityText: "Give teammates +3 HP", description: "x", version: "2/3", image: "Pictures/Philanthorn2.JPG"}
];

const Rtwo_cards = [
  {id: 0, deck: "rareTwo", name: "Giabog", damage: 6, health: 18, speed: 5, type: "natural", nature: "wild", ability: "x", abilityText: "Giabog can deal +6 damage to any oppoenet after death", description: "x", version: "2/3", image: "Pictures/Giabog2.JPG"},
  {id: 1, deck: "rareTwo", name: "Shockstrum", damage: 3, health: 14, speed: 5, type: "natural", nature: "basic", ability: "x", abilityText: "Roll a d6 and add that to attack", description: "x", version: "2/3", image: "Pictures/Shockstrum2.JPG"},
  {id: 2, name: "Newburn", damage: 7, health: 10, speed: 9, type: "natural", nature: "basic", ability: "x", abilityText: "If Newburn dies, revive it after battle", description: "x", version: "2/2", image: "Pictures/Newburn2.JPG"},
  {id: 3, name: "Tiki", damage: 5, health: 20, speed: 5, type: "natural", nature: "aggressive", ability: "x", abilityText: "Tiki gains +3 Attack every turn ", description: "x", version: "2/2", image: "Pictures/Tiki2.JPG"},
  {id: 4, name: "Mooses", damage: 7, health: 22, speed: 0, type: "natural", nature: "protective", ability: "x", abilityText: "If Mooses dies during battle, fully heal two teammembers", description: "x", version: "2/2", image: "Pictures/Mooses2.JPG"},
  {id: 5, name: "Picksur", damage: 10, health: 20, speed: 10, type: "natural", nature: "mystic", ability: "x", abilityText: "Attack 2 enemies at once", description: "x", version: "2/2", image: "Pictures/Picksur2.JPG"}, 
  {id: 6, name: "Motivox", damage: 2, health: 26, speed: 15, type: "natural", nature: "defensive", ability: "x", abilityText: "Raise teammates speed by +5", description: "x", version: "2/2", image: "Pictures/Motivox2.JPG"},
  {id: 7, deck: "rareTwo", name: "Cragila", damage: 8, health: 10, speed: 3, type: "natural", nature: "basic", ability: "x", abilityText: "No ability", description: "x", version: "2/3", image: "Pictures/Cragilla2.JPG"},
  {id: 8, deck: "rareTwo", name: "Snatcher", damage: 6, health: 10, speed: 8, type: "natural", nature: "basic", ability: "x", abilityText: "No ability", description: "x", version: "2/3", image: "Pictures/Snatcher2.JPG"},
  {id: 9, deck: "rareTwo", name: "Duune", damage: 4, health: 16, speed: 6, type: "natural", nature: "basic", ability: "x", abilityText: "No ability", description: "x", version: "2/3", image: "Pictures/Duune2.JPG"},
  {id: 10, name: "Messaver", damage: 5, health: 8, speed: 13, type: "natural", nature: "brave", ability: "x", abilityText: "Allow access to battle station from anywhere anytime", description: "x", version: "2/2", image: "Pictures/Messaver2.JPG"},
  {id: 11, name: "Guardinal", damage: 5, health: 25, speed: 2, type: "natural", nature: "mystic", ability: "x", abilityText: "Prevent enemy abilities until Guardinal dies", description: "x", version: "2/2", image: "Pictures/CatStupid.webp"},
  {id: 12, name: "Mantox", damage: 12, health: 5, speed: 10, type: "natural", nature: "basic", ability: "x", abilityText: "Mantox must be attacked twice to die", description: "x", version: "2/2", image: "Pictures/Mantox2.JPG"},
  {id: 13, deck: "rareTwo", name: "Spiritrap", damage: 6, health: 15, speed: 5, type: "plotting", nature: "basic", ability: "x", abilityText: "Gain triple P from Yellow space", description: "x", version: "2/3", image: "Pictures/Spiritrap2.JPG"},
  {id: 14, deck: "rareTwo", name: "Griffith", damage: 3, health: 16, speed: 8, type: "natural", nature: "basic", ability: "x", abilityText: "Add +2 to movement dice twice more", description: "x", version: "2/3", image: "Pictures/Griffith2.JPG"},
  {id: 15, deck: "rareTwo", name: "Flups", damage: 6, health: 15, speed: 7, type: "natural", nature: "protective", ability: "x", abilityText: "Heal a teammate for 10 health once", description: "x", version: "2/3", image: "Pictures/Flups2.JPG"},
  {id: 16, deck: "rareTwo", name: "Whizz", damage: 3, health: 10, speed: 3, type: "natural", nature: "strategic", ability: "x", abilityText: "Gain +3 Attack against opponenets with speed under 6", description: "x", version: "2/3", image: "Pictures/Whizz2.JPG"},
  {id: 17, deck: "rareTwo", name: "Stonepede", damage: 2, health: 25, speed: 2, type: "natural", nature: "basic", ability: "x", abilityText: "No ability", description: "x", version: "2/3", image: "Pictures/true.JPG"},
  {id: 18, deck: "rareTwo", name: "Liogen", damage: 9, health: 6, speed: 6, type: "natural", nature: "basic", ability: "x", abilityText: "Teammates with Health below 9 gain +2 Attack", description: "x", version: "2/3", image: "Pictures/Liogen2.JPG"},
  {id: 19, deck: "rareTwo", name: "Marrifuge", damage: 6, health: 15, speed: 3, type: "natural", nature: "basic", ability: "x", abilityText: "Marrifuge takes half damage rounded down for two turns", description: "x", version: "2/3", image: "Pictures/Halo2.JPG"},
  {id: 20, deck: "rareTwo", name: "Snoball", damage: 10, health: 4, speed: 7, type: "natural", nature: "scary", ability: "x", abilityText: "Snoball gains +3 Attack every turn", description: "x", version: "2/3", image: "Pictures/Snoball2.JPG"},
  {id: 21, deck: "rareTwo", name: "Hopper", damage: 9, health: 12, speed: 6, type: "natural", nature: "basic", ability: "x", abilityText: "Hopper regains missing Health after battle unless they die", description: "x", version: "2/3", image: "Pictures/Frog2.JPG"},
  {id: 22, deck: "rareTwo", name: "Petloar", damage: 7, health: 14, speed: 8, type: "natural", nature: "mystic", ability: "x", abilityText: "Steal one TP when Petloar transforms", description: "x", version: "2/3", image: "Pictures/Garf.webp"},
  {id: 23, deck: "rareTwo", name: "Einsaur", damage: 5, health: 9, speed: 5, type: "natural", nature: "strategic", ability: "x", abilityText: "Add +1 Attack for each opponent over 10 Health", description: "x", version: "2/3", image: "Pictures/Einsaur2.JPG"},
  {id: 24, name: "Angeal", damage: 0, health: 25, speed: 5, type: "natural", nature: "mystic", ability: "x", abilityText: "Revive a teammember anytime", description: "x", version: "2/2", image: "Pictures/Angel2.JPG"},
  {id: 25, deck: "rareTwo", name: "Empath", damage: 3, health: 25, speed: 8, type: "natural", nature: "basic", ability: "x", abilityText: "Block a teammate every turn but take double damage", description: "x", version: "2/3", image: "Pictures/Empath2.JPG"},
];

const Sthree_cards = [
  {id: 0, name: "Guncho", damage: 16, health: 14, speed: 5, type: "advanced", nature: "aggressive", ability: "speedup", abilityText: "Guncho gains +2 Speed every turn", description: "Guncho", version: "3/3", image: "Pictures/Guncho3.JPG"},
  {id: 1, name: "Glittle", damage: 7, health: 20, speed: 10, type: "artificial", nature: "basic", ability: "bossfat", abilityText: "Glittle takes -2 Damage from Boss attacks", description: "Glittle", version: "3/3", image: "Pictures/Glittle3.JPG"},
  {id: 2, name: "Douber", damage: 19, health: 16, speed: 9, type: "advanced", nature: "basic", ability: "pickup", abilityText: "Draw a Utility card before a battle, if it is a stat increase then attach to Douber", description: "Douber", version: "3/3", image: "Pictures/Douber3.JPG"},
  {id: 3, name: "Paulmer", damage: 16, health: 7, speed: 15, type: "light", nature: "protective", ability: "healing", abilityText: "Paulmer can heal a teammate once a battle for 8HP", description: "Paulmer", version: "3/3", image: "Pictures/Paulmer3.JPG"},
  {id: 4, name: "Spyke", damage: 6, health: 28, speed: 6, type: "natural", nature: "defensive", ability: "hardshell", abilityText: "Spyke takes -5 Damage on the 3rd turn of Battle", description: "Spyke", version: "3/3", image: "Pictures/Spyke3.JPG"},
  {id: 5, name: "Rapleer", damage: 9, health: 12, speed: 15, type: "natural", nature: "sneaky", ability: "sneakattack", abilityText: "Rapleer deals +5 Damage if attacked while blocking", description: "Rapleer", version: "3/3", image: "Pictures/Rapleer3.JPG"},
  {id: 6, name: "Stuic", damage: 9, health: 26, speed: 5, type: "dark", nature: "basic", ability: "draw", abilityText: "If Stuic wins a battle, draw a Utility card", description: "Stuic", version: "3/3", image: "Pictures/Stuic3.JPG"},
  {id: 7, name: "Ssserpo", damage: 7, health: 22, speed: 13, type: "natural", nature: "basic", ability: "thicktounge", abilityText: "Ssserpo deals +5 Damage on the 3rd turn of Battle", description: "Ssserpo", version: "3/3", image: "Pictures/Ssserpo3.JPG"}
];

const Cthree_cards = [
  {id: 1, name: "OffSpring", damage: 3, health: 20, speed: 8, type: "artificial", nature: "basic", ability: "mutualism", abilityText: "No ability", description: "Offspring", version: "3/3", image: "Pictures/Offspring3.JPG"},
  {id: 17, name: "Baclaphobe", damage: 3, health: 10, speed: 3, type: "artificial", nature: "basic", ability: "multiply", abilityText: "Baclaphobe doubles its attack every attack", description: "Baclaphobe", version: "3/3", image: "Pictures/Baclaphobe3.JPG"},
  {id: 20, name: "Vervolve", damage: 7, health: 10, speed: 9, type: "natural", nature: "basic", ability: "weakling", abilityText: "No ability", description: "Vervolve", version: "34/3", image: "Pictures/Vervole3.JPG"}
];

const Uthree_cards = [
  {id: 1, name: "Abysst", damage: 5, health: 22, speed: 9, type: "dark", nature: "protective", ability: "x", abilityText: "Instead of blocking one teammate, block three teammates", description: "x", version: "3/3", image: "Pictures/Abysst3.JPG"},
  {id: 2, name: "Joctos", damage: 9, health: 20, speed: 9, type: "elemental", nature: "basic", ability: "x", abilityText: "Lower an oppenents speed by -5 before battle", description: "x", version: "3/3", image: "Pictures/Joctos3.JPG"},
  {id: 5, name: "Twinilda", damage: 10, health: 15, speed: 7, type: "natural", nature: "sneaky", ability: "x", abilityText: "Deal double damage to light Dejects", description: "x", version: "3/3", image: "Pictures/Twinilda3.JPG"},
  {id: 6, name: "Revorand", damage: 8, health: 20, speed: 8, type: "natural", nature: "basic", ability: "x", abilityText: "deal double damage against minions", description: "x", version: "3/3", image: "Pictures/Revorand3.JPG"},
  {id: 8, name: "Whoul", damage: 7, health: 30, speed: 3, type: "natural", nature: "plotting", ability: "x", abilityText: "Gain +5 Attack and +7 Speed on turn 3", description: "x", version: "3/3", image: "Pictures/Whoul3.JPG"},
  {id: 9, name: "Plauke", damage: 10, health: 18, speed: 7, type: "natural", nature: "sneaky", ability: "x", abilityText: "Raise each teammates health by +5", description: "x", version: "3/3", image: "Pictures/Plauke3.JPG"},
  {id: 10, name: "Jyem", damage: 7, health: 24, speed: 4, type: "natural", nature: "basic", ability: "x", abilityText: "Flip a coin each turn, take 1/2 reduced damage rounded up for heads", description: "x", version: "3/3", image: "Pictures/Jyem3.JPG"},
  {id: 12, name: "Stalkur", damage: 12, health: 9, speed: 5, type: "elemental", nature: "basic", ability: "x", abilityText: "No ability", description: "x", version: "3/3", image: "Pictures/Stalkur3.JPG"},
  {id: 13, name: "Zinger", damage: 10, health: 12, speed: 9, type: "natural", nature: "basic", ability: "x", abilityText: "Deal +7 Damage to elemental Dejects", description: "x", version: "3/3", image: "Pictures/Zinger3.JPG"},
  {id: 16, name: "Slidem", damage: 5, health: 15, speed: 17, type: "natural", nature: "scary", ability: "x", abilityText: "Gain an extra movement dice if Slidem wins a battle", description: "x", version: "3/3", image: "Pictures/Slidem3.JPG"},
  {id: 17, name: "Fizzle", damage: 9, health: 7, speed: 10, type: "natural", nature: "basic", ability: "x", abilityText: "Gain +9 Attack against opponents with less speed", description: "x", version: "3/3", image: "Pictures/Fizzle3.JPG"},
  {id: 19, name: "Akpig", damage: 5, health: 21, speed: 9, type: "natural", nature: "basic", ability: "x", abilityText: "Deal +20 damage to an opponent on turn 3", description: "x", version: "3/3", image: "Pictures/Akpig3.JPG"},
  {id: 20, name: "Valenticle", damage: 9, health: 21, speed: 5, type: "elemental", nature: "defensive", ability: "x", abilityText: "Skip attack to heal a teammate for 9HP", description: "x", version: "3/3", image: "Pictures/Valenticle3.JPG"},
  {id: 21, name: "Scopscuff", damage: 15, health: 22, speed: 10, type: "natural", nature: "aggressive", ability: "x", abilityText: "Discard 2p everytime Scopscuff attacks or it cannot attack", description: "x", version: "3/3", image: "Pictures/Scopscuff3.JPG"},
  {id: 22, name: "Smoldowl", damage: 7, health: 15, speed: 9, type: "natural", nature: "brave", ability: "x", abilityText: "Continue dealing damage to opponents even after Smoldowl dies", description: "x", version: "3/3", image: "Pictures/Smoldowl3.JPG"},
  {id: 23, name: "Starbar", damage: 9, health: 16, speed: 8, type: "natural", nature: "basic", ability: "x", abilityText: "Heal a teammate for 12HP once a battle", description: "x", version: "3/3", image: "Pictures/Starbar3.JPG"},
  {id: 25, name: "Rayne", damage: 5, health: 19, speed: 7, type: "natural", nature: "basic", ability: "x", abilityText: "Roll a 1/6 dice before Attack and add that to Raynes damage", description: "x", version: "3/3", image: "Pictures/Rayne3.JPG"},
  {id: 26, name: "Mummo", damage: 5, health: 18, speed: 5, type: "natural", nature: "basic", ability: "x", abilityText: "Fully heal a teammate outside of battle for 1p", description: "x", version: "3/3", image: "Pictures/Mummo3.JPG"},
  {id: 26, name: "Philanthorn", damage: 3, health: 30, speed: 3, type: "natural", nature: "basic", ability: "x", abilityText: "Give teammates +5 HP", description: "x", version: "3/3", image: "Pictures/Philanthorn3.JPG"},
  {id: 27, name: "Sporll", damage: 7, health: 26, speed: 3, type: "natural", nature: "defensive", ability: "x", abilityText: "Block any enemies attack every third turn", description: "x", version: "3/3", image: "Pictures/Sporll3.JPG"},
  {id: 30, name: "Mermunch", damage: 12, health: 8, speed: 5, type: "natural", nature: "aggressive", ability: "x", abilityText: "Teammates heal +3HP every turn", description: "x", version: "3/3", image: "Pictures/Mermunch3.JPG"},
  {id: 31, name: "Powda", damage: 9, health: 24, speed: 3, type: "natural", nature: "sneaky", ability: "x", abilityText: "Deal double damage when dodging an attack", description: "x", version: "3/3", image: "Pictures/Powda3.JPG"},
  {id: 37, name: "Floogyte", damage: 9, health: 10, speed: 7, type: "natural", nature: "basic", ability: "x", abilityText: "Spend -3p to block an attack during battle", description: "x", version: "3/3", image: "Pictures/Floogyte3.JPG"},
];

const Rthree_cards = [
  {id: 0, name: "Giabog", damage: 8, health: 18, speed: 7, type: "natural", nature: "wild", ability: "x", abilityText: "Giabog can deal +8 damage to any oppoenet after death", description: "x", version: "3/3", image: "Pictures/Giabog3.JPG"},
  {id: 1, name: "Shockstrum", damage: 4, health: 15, speed: 5, type: "natural", nature: "basic", ability: "x", abilityText: "Roll a d6 and add that to attack", description: "x", version: "3/3", image: "Pictures/Shockstrum3.JPG"},
  {id: 7, name: "Cragila", damage: 10, health: 15, speed: 5, type: "natural", nature: "aggressive", ability: "x", abilityText: "No ability", description: "x", version: "3/3", image: "Pictures/Cragilla3.JPG"},
  {id: 8, name: "Snatcher", damage: 8, health: 12, speed: 10, type: "natural", nature: "scary", ability: "x", abilityText: "No ability", description: "x", version: "3/3", image: "Pictures/Snatcher3.JPG"},
  {id: 9,  name: "Duune", damage: 5, health: 20, speed: 8, type: "natural", nature: "defensive", ability: "x", abilityText: "No ability", description: "x", version: "3/3", image: "Pictures/Duune3.JPG"},
  {id: 13, name: "Spiritrap", damage: 8, health: 18, speed: 5, type: "natural", nature: "plotting", ability: "x", abilityText: "Gain quadruple P from Yellow space", description: "x", version: "3/3", image: "Pictures/Spiritrap3.JPG"},
  {id: 14, name: "Griffith", damage: 4, health: 22, speed: 12, type: "natural", nature: "basic", ability: "x", abilityText: "Add +2 to movement dice anytime", description: "x", version: "3/3", image: "Pictures/Griffith3.JPG"},
  {id: 15, name: "Flups", damage: 8, health: 20, speed: 10, type: "natural", nature: "protective", ability: "x", abilityText: "Heal a teammate for 15 health once", description: "x", version: "3/3", image: "Pictures/Flups3.JPG"},
  {id: 16, name: "Whizz", damage: 4, health: 14, speed: 4, type: "natural", nature: "strategic", ability: "x", abilityText: "Gain +4 Attack against opponenets with speed under 12", description: "x", version: "3/3", image: "Pictures/Whizz3.JPG"},
  {id: 17, name: "Stonepede", damage: 2, health: 45, speed: 2, type: "natural", nature: "basic", ability: "x", abilityText: "No ability", description: "x", version: "3/3", image: "Pictures/true.JPG"},
  {id: 18, name: "Liogen", damage: 12, health: 8, speed: 8, type: "natural", nature: "basic", ability: "x", abilityText: "Teammates with Health below 12 gain +3 Attack", description: "x", version: "3/3", image: "Pictures/Liogen3.JPG"},
  {id: 19, name: "Marrifuge", damage: 8, health: 20, speed: 4, type: "natural", nature: "basic", ability: "x", abilityText: "Marrifuge takes half damage rounded down for two turns", description: "x", version: "3/3", image: "Pictures/Halo3.JPG"},
  {id: 20, name: "Snoball", damage: 16, health: 5, speed: 19, type: "natural", nature: "scary", ability: "x", abilityText: "Snoball gains +3 Attack every turn", description: "x", version: "3/3", image: "Pictures/Snoball3.JPG"},
  {id: 21, name: "Hopper", damage: 12, health: 16, speed: 8, type: "natural", nature: "basic", ability: "x", abilityText: "Hopper regains missing Health after battle unless they die", description: "x", version: "3/3", image: "Pictures/Frog3.JPG"},
  {id: 22, name: "Petloar", damage: 10, health: 20, speed: 10, type: "natural", nature: "mystic", ability: "x", abilityText: "Steal one TP when Petloar transforms", description: "x", version: "3/3", image: "Pictures/Garf.webp"},
  {id: 23, name: "Einsaur", damage: 6, health: 12, speed: 6, type: "natural", nature: "strategic", ability: "x", abilityText: "Add +2 Attack for each opponent over 10 Health", description: "x", version: "3/3", image: "Pictures/Einsaur3.JPG"},
  {id: 25, name: "Empath", damage: 4, health: 50, speed: 10, type: "natural", nature: "basic", ability: "x", abilityText: "Block an teammate every turn but take double damage", description: "x", version: "3S/3", image: "Pictures/Empath3.JPG"},
];

const boss = [
    {id: 0, name: "Stremer", damage: 6, health: 10, speed: 0, type: "natural", nature: "Aggresive", ability: "x", abilityText: "Stremer deals +2 Damage to other teammembers not attacked", description: "x", image: "Pictures/Stremer.JPG"},
    {id: 1, name: "Trout-lout", damage: 8, health: 8, speed: 2, type: "natural", nature: "basic", ability: "x", abilityText: "Trout Lout gains +1 Speed every turn", description: "x", image: "Pictures/TroutLout.JPG"},
    {id: 2, name: "Franken-spider", damage: 4, health: 9, speed: 8, type: "natural", nature: "Scary", ability: "x", abilityText: "Franken Spider lowers the speed of any Deject by -1 every turn", description: "x", image: "Pictures/FrankenSpider.JPG"},
    {id: 3, name: "Slug-king", damage: 2, health: 18, speed: 1, type: "natural", nature: "Defensive", ability: "x", abilityText: "Slug King gains +1 attack if a slug knight dies", description: "x", image: "Pictures/SlugKing.JPG"},
    {id: 4, name: "Oxfoque", damage: 3, health: 10, speed: 5, type: "natural", nature: "Mystic", ability: "x", abilityText: "Only one Deject can attack Oxfoque at a time", description: "x", image: "Pictures/Oxfoque.JPG"},
    {id: 5, name: "Count-rona", damage: 5, health: 9, speed: 5, type: "natural", nature: "Plotting", ability: "x", abilityText: "Any Deject killed by Count Rona must be sold", description: "x", image: "Pictures/CountRona.JPG"},
    {id: 6, name: "Hailson", damage: 9, health: 14, speed: 7, type: "natural", nature: "Mystic", ability: "x", abilityText: "Hailson rolls a d6 every turn. Hailson kills oppoenent if they roll a 6", description: "x", image: "Pictures/Haildra.JPG"},
    {id: 7, name: "Cheruce", damage: 14, health: 8, speed: 9, type: "natural", nature: "Aggressive", ability: "x", abilityText: "Cherruce gains +5 Attack if they kill an opponent", description: "x", image: "Pictures/Cheruce.JPG"},
    {id: 8, name: "Pongu", damage: 3, health: 32, speed: 2, type: "natural", nature: "Defensive", ability: "x", abilityText: "If Pongu is still alive by turn 5, they revive both minions", description: "x", image: "Pictures/Spong.JPG"},
    {id: 9, name: "Levicorn", damage: 6, health: 18, speed: 9, type: "natural", nature: "Plotting", ability: "x", abilityText: "Levicorn negates all enemy abilities", description: "x", image: "Pictures/Levicorn.JPG"},
    {id: 10, name: "Wreckulate", damage: 8, health: 11, speed: 20, type: "natural", nature: "Wild", ability: "x", abilityText: "Wreckulate always attacks first", description: "x", image: "Pictures/Wreckulate.JPG"},
    {id: 11, name: "Goldytock", damage: 8, health: 18, speed: 2, type: "natural", nature: "Strategic", ability: "x", abilityText: "Goldytock gains +5HP if enemy teams total health is below 30", description: "x", image: "Pictures/Goldytock.JPG"},
    {id: 12, name: "Mearudge", damage: 7, health: 20, speed: 4, type: "natural", nature: "Sneaky", ability: "x", abilityText: "Mearrudge can use a sneak attack twice", description: "x", image: "Pictures/Mearrudge.JPG"},
    {id: 13, name: "Terregon", damage: 10, health: 20, speed: 10, type: "natural", nature: "Brave", ability: "x", abilityText: "No ability", description: "x", image: "Pictures/Terragon.JPG"},
];

const minion = [
    {id: 0, name: "Stremer-minion", damage: 4, health: 5, speed: 2, type: "natural", nature: "basic", ability: "x", abilityText: "x", description: "x", image: "Pictures/StremerMinion.JPG"},
    {id: 1, name: "Lout", damage: 5, health: 4, speed: 4, type: "natural", nature: "basic", ability: "x", abilityText: "x", description: "x", image: "Pictures/Lout.JPG"},
    {id: 2, name: "Franken", damage: 4, health: 4, speed: 7, type: "natural", nature: "basic", ability: "x", abilityText: "x", description: "x", image: "Pictures/Franken.JPG"},
    {id: 3, name: "Slug-knight", damage: 3, health: 8, speed: 2, type: "natural", nature: "basic", ability: "x", abilityText: "x", description: "x", image: "Pictures/SlugKnight.JPG"},
    {id: 4, name: "Oxfoque-Illusion", damage: 3, health: 9, speed: 3, type: "natural", nature: "basic", ability: "x", abilityText: "x", description: "x", image: "Pictures/OxfoqueIllusion.JPG"},
    {id: 5, name: "Rona", damage: 2, health: 10, speed: 4, type: "natural", nature: "basic", ability: "x", abilityText: "x", description: "x", image: "Pictures/Rona.JPG"},
    {id: 6, name: "Hailron", damage: 7, health: 13, speed: 5, type: "natural", nature: "basic", ability: "x", abilityText: "x", description: "x", image: "Pictures/Shark.jpg"},
    {id: 7, name: "Chur", damage: 4, health: 20, speed: 4, type: "natural", nature: "basic", ability: "x", abilityText: "x", description: "x", image: "Pictures/Chep.JPG"},
    {id: 8, name: "PonguBody", damage: 8, health: 15, speed: 2, type: "natural", nature: "basic", ability: "x", abilityText: "x", description: "x", image: "Pictures/SpongBeta.JPG"},
    {id: 9, name: "Terrecorn", damage: 6, health: 10, speed: 6, type: "natural", nature: "basic", ability: "x", abilityText: "x", description: "x", image: "Pictures/balloon.jpg"},
    {id: 10, name: "Wreck shedd", damage: 7, health: 18, speed: 0, type: "natural", nature: "basic", ability: "x", abilityText: "x", description: "x", image: "Pictures/Ed.webp"},
    {id: 11, name: "Tick Trim", damage: 9, health: 6, speed: 8, type: "natural", nature: "basic", ability: "x", abilityText: "x", description: "x", image: "Pictures/TickTrim.JPG"},
    {id: 12, name: "Mear", damage: 5, health: 16, speed: 3, type: "natural", nature: "basic", ability: "x", abilityText: "x", description: "x", image: "Pictures/Mear.JPG"},
    {id: 13, name: "TerreLarva", damage: 2, health: 15, speed: 2, type: "natural", nature: "basic", ability: "x", abilityText: "x", description: "x", image: "Pictures/Lee.webp"},
];


if (Array.isArray(nameObj) && nameObj.length > 0) {
    for (const obj of nameObj) {
        playerCards.push(obj);
    }

    const namesToRemove = new Set(playerCards.map(obj => obj.id));
    for (let i = S_cards.length - 1; i >= 0; i--) {
        if (namesToRemove.has(S_cards[i].id)) {
            S_cards.splice(i, 1);
        }
    }
    for (let i = C_cards.length - 1; i >= 0; i--) {
        if (namesToRemove.has(C_cards[i].id)) {
            C_cards.splice(i, 1);
        }
    }
    for (let i = U_cards.length - 1; i >= 0; i--) {
        if (namesToRemove.has(U_cards[i].id)) {
            U_cards.splice(i, 1);
        }
    }
    for (let i = R_cards.length - 1; i >= 0; i--) {
        if (namesToRemove.has(R_cards[i].id)) {
            R_cards.splice(i, 1);
        }
    }
}


else {
    if (playerCards.length == 0) {
        buttonHolder.style.display = "none";
        for (let i = S_cards.length - 1; i >= 0; i--) {
            const currentCard = S_cards[i];
            
                const mainPageElement = document.createElement('section');

                mainPageElement.className = 'cardTemp';
                mainPageElement.innerHTML = 
                `<h3>${currentCard.name}</h3>
                <img src="${currentCard.image}" alt="${currentCard.name}">`;
                mainPageElement.onclick = () => openTempCard(currentCard);

                cardHolder.appendChild(mainPageElement);
            
        }
    }
}


    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        // Skip non-card data
        if (key === "formInfo" || key === name || key.startsWith("user#")) {
            continue;
        }

        let value = JSON.parse(localStorage.getItem(key));
    
            const data = JSON.parse(localStorage.getItem(key));

            if (Array.isArray(value)) {
                value.forEach(obj => {
                    enemyCards.push({...obj, storageKey: key })
                })
            }
            
    }

   
function loadCards(array) {
    for (let i = 0; i < array.length; i++) {
            const currentCard = playerCards[i];
            console.log(currentCard.deck);
            const mainPageElement = document.createElement('section');

            mainPageElement.className = 'card';
            mainPageElement.innerHTML = `<h3>${currentCard.name}</h3>
            <img src="${currentCard.image}" alt="${currentCard.name}">`;
            mainPageElement.style.backgroundColor = cardColors[currentCard.deck]
            mainPageElement.onclick = () => openCard(currentCard);
        
            cardHolder.appendChild(mainPageElement);
}}


function openTempCard(card) {
   
    tempMenu.style.display = "grid";
    const tempCardStat = document.querySelector('.tempCardStats');
        tempCardStat.innerHTML = `
            <h3>${card.name}</h3>
            <img src="${card.image}" alt="${card.name}">
            <div class="card_type">
            <p>${card.type}</p>
            <p>${card.nature}</p>
            </div>
            <div class="card_stats">
            <p>Damage: ${card.damage}</p>
            <p>Health: ${card.health}</p>
            <p>Speed: ${card.speed}</p>
            </div>
            <p>${card.abilityText}</p>
            <button class="subMenuButton" type="button" id="chooseCardButton">choose</button>
            <button class="subMenuButton" type="button" onclick="showCardsOnly()">close</button>
        `;

        
        document.getElementById("chooseCardButton").onclick = function () {
        chooseStarter(card);
        }
        
}

function chooseStarter(card) {
    const menu = document.querySelector('.tempStatMenu');
    menu.style.display = "none"
    cardHolder.innerHTML = "";
    const index = S_cards.findIndex(c => c.id === card.id);
    const [item] = S_cards.splice(index, 1);
    playerCards.push(item);
    physicalCards();
    showHome();
}

    loadCards(playerCards);
    console.log("Player Cards", playerCards);
    console.log("Enemy Cards", enemyCards);












function createCard(type, typeName) {
    closeSubMenu('#collectMenu');
        if (type.length > 0) {
            randomizeDeject(type, placeholderCards, typeName) 
    }
}

function randomizeDeject(fromArray, toArray, typeName) {
    const index = Math.floor(Math.random() * fromArray.length);
    const [card] = fromArray.splice(index, 1);
    openShowcaseCard(card, () => {
        toArray.push(card);
        transferOwnership(placeholderCards, playerCards);
        physicalCards(typeName);
    });   
}

function openShowcaseCard(card, onChoose) {
  showcaseMenu.style.display = "block";
  const showcaseCard = document.querySelector('.showcaseCard');
        showcaseCard.innerHTML = `
            <h3>${card.name}</h3>
            <img src="${card.image}" alt="${card.name}">
            <div class="card_type">
            <p>${card.type}</p>
            <p>${card.nature}</p>
            </div>
            <div class="card_stats">
            <p>Damage: ${card.damage}</p>
            <p>Health: ${card.health}</p>
            <p>Speed: ${card.speed}</p>
            </div>
            <p>${card.abilityText}</p>
            <button class="subMenuButton" type="button" id="chooseCardButton">Choose</button>
            <button class="subMenuButton" type="button" onclick="closeMenu('.showcaseMenu')">close</button>
        `;

    const chooseBtn = document.getElementById("chooseCardButton");
    chooseBtn.onclick = () => {
        onChoose();
        closeMenu(".showcaseMenu");
    };
    chooseWildFighter();
}



function transferOwnership(fromArray, toArray) {
  if (fromArray.length > 0) {
    const item = fromArray.shift(); 
    toArray.push(item);             
  }
}

function physicalCards(typeName) {
            //creating main page card elements
            const currentCard = playerCards[playerCards.length -1];
            const mainPageElement = document.createElement('section');

            mainPageElement.className = 'card';
            mainPageElement.innerHTML = 
            `<h3>${currentCard.name}</h3>
             <img src="${currentCard.image}" alt="${currentCard.name}">`;
            mainPageElement.style.backgroundColor = cardColors[typeName]
            mainPageElement.onclick = () => openCard(currentCard);
        
            //Placing card in home page
            cardHolder.appendChild(mainPageElement);
}

function chooseWildFighter() {
    wildPit.innerHTML = "";

    playerCards.forEach(card => {
        const fighter = document.createElement('div');
        fighter.className = 'bossBox';
        fighter.innerHTML = `
        <h4>${card.name}</h4>
        <img src="${card.image}" alt="${card.name}" style="grid-area: box2">
        <p>____${card.damage}______${card.health}______${card.speed}____</p>
        <p>${card.abilityText}</p>
    `;
    fighter.onclick = () => showWildFighter(card);
    wildPit.appendChild(fighter);
    });
}

function showWildFighter(card) {
    wildPit.innerHTML = "";

      const fighter = document.createElement('div');
    fighter.className = 'bossBox';
    fighter.innerHTML = `
        <h4>${card.name}</h4>
        <img src="${card.image}" alt="${card.name}" style="grid-area: box2">
         <p>____${card.damage}______${card.health}______${card.speed}____</p>
        <p>${card.abilityText}</p>

    `;
    wildPit.appendChild(fighter);
}




function openCard(card) {
    homeMenu.style.display = "none";
    const menu = document.querySelector('.statMenu');
    menu.style.display = "grid";

        cardStat.innerHTML = `
            <h3 style="grid-area: box1">${card.name}</h3>
            <p class="stat" style="grid-area: box4">Type: ${card.nature}</p>
            <h3 style="grid-area: box11">${card.version}</h3>
            <img src="${card.image}" alt="${card.name}" style="grid-area: box2">
            <p class="stat damage" style="grid-area: box5">Damage: ${card.damage}</p>
            <p class="stat health edit-stat-btn" style="grid-area: box6">Health: ${card.health}</p>
            <p class="stat speed" style="grid-area: box7">Speed: ${card.speed}</p>
            <p style="grid-area: box8">${card.abilityText}</p>
            <button class="smallerButton transform-btn" style="grid-area: box10">Transform</button>
            <button class="smallerButton sell-btn" style="grid-area: box12">Sell</button>
            <button class="smallerButton" onclick="closeMenu('.statMenu')" style="grid-area: box13">Close</button>
        `;

        document.querySelector('.edit-stat-btn').addEventListener('click', () => editStat(card));
        document.querySelector('.transform-btn').addEventListener('click', () => openTransformationMenu(card));
        document.querySelector('.sell-btn').addEventListener('click', () => sell(card));
}

function refreshCardStats(card) {
    document.querySelector('.statMenu .damage').textContent = `Damage: ${card.damage}`;
    document.querySelector('.statMenu .health').textContent = `Health: ${card.health}`;
    document.querySelector('.statMenu .speed').textContent = `Speed: ${card.speed}`;
}

function editStat(card) {
    openMenu(".statChangeMenu");
    const slider = document.getElementById('healthSlider');

    for (let i = 0; i <= 50; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        if (i === card.health) option.selected = true; // preselect current health
        slider.appendChild(option);
    }

    slider.addEventListener('change', (e) => {
        const newHealth = parseInt(e.target.value, 10);
        card.health = newHealth;
        refreshCardStats(card);
    });
}



function openTransformationMenu(card) {
            
            closeSubMenu(".statMenu");

            const deck = card.deck;
            if (!deck) {
                closeMenu('.transformMenu');
                alert("This card cannot Transform");
                return;
            }
            
            let alternateForm;
            if (deck == "starter") {
                alternateForm = Stwo_cards.find(Stwo_cards => Stwo_cards.id === card.id);
            }
            if (deck == "common") {
                alternateForm = CTwo_cards.find(CTwo_cards => CTwo_cards.id === card.id);
            }
            if (deck == "uncommon") {
                alternateForm = UTwo_cards.find(UTwo_cards => UTwo_cards.id === card.id);
            }
            if (deck == "rare") {
                alternateForm = Rtwo_cards.find(RTwo_cards => RTwo_cards.id === card.id);
            }
            if (deck == "starterTwo") {
                alternateForm = Sthree_cards.find(Sthree_cards => Sthree_cards.id === card.id);
            }
            if (deck == "commonTwo") {
                alternateForm = Cthree_cards.find(Cthree_cards => Cthree_cards.id === card.id);
            }
            if (deck == "uncommonTwo") {
                alternateForm = Uthree_cards.find(Uthree_cards => Uthree_cards.id === card.id);
            }
            if (deck == "rareTwo") {
                alternateForm = Rthree_cards.find(Rthree_cards => Rthree_cards.id === card.id);
            }
            

            const popup = document.createElement('div');
            popup.className = 'transformMenu';
            popup.innerHTML = `
                <h3>Transform ${card.name}</h3>
                
                <div class="transformation-comparison">
                    <div class="current-form">
                        <h4>Current Form</h4>
                        <p><strong>${card.name}</strong></p>
                        <p>Damage: ${card.damage}</p>
                        <p>Health: ${card.health}</p>
                        <p>Speed: ${card.speed}</p>
                        <p>Ability: ${card.abilityText}</p>
                    </div>
                    
                    <div class="alternate-form">
                        <h4>Alternate Form</h4>
                        <p><strong>${alternateForm.name}</strong></p>
                        <p>Damage: ${alternateForm.damage}</p>
                        <p>Health: ${alternateForm.health}</p>
                        <p>Speed: ${alternateForm.speed}</p>
                        <p>Ability: ${alternateForm.abilityText}</p>
                    </div>
                </div>
                
                <div class="popup-actions">
                    <button class="subMenuButton transformButton">Transform</button>
                    <button class="subMenuButton" onclick="closeMenu('.transformMenu')">Cancel</button>
                </div>
            `;
            document.body.appendChild(popup);
            popup.style.display = 'block';

             document.querySelector('.transformButton').addEventListener('click', () => transformCard(card));
        }


function transformCard(card) {
                const cardIndex = playerCards.findIndex(c => c.id === card.id);

                console.log(card.name);

                let alternateForm;
                if (card.deck == "starter") {
                alternateForm = Stwo_cards.find(alt => alt.id === card.id);
                }
                if (card.deck == "common") {
                alternateForm = CTwo_cards.find(alt => alt.id === card.id);
                }
                if (card.deck == "uncommon") {
                alternateForm = UTwo_cards.find(alt => alt.id === card.id);
                }
                if (card.deck == "rare") {
                alternateForm = Rtwo_cards.find(alt => alt.id === card.id);
                }
                if (card.deck == "starterTwo") {
                alternateForm = Sthree_cards.find(alt => alt.id === card.id);
                }
                if (card.deck == "commonTwo") {
                alternateForm = Cthree_cards.find(alt => alt.id === card.id);
                }
                if (card.deck == "uncommonTwo") {
                alternateForm = Uthree_cards.find(alt => alt.id === card.id);
                }
                if (card.deck == "rareTwo") {
                alternateForm = Rthree_cards.find(alt => alt.id === card.id);
                }

                if (cardIndex !== -1 && alternateForm) {
                    // Replace the card with its alternate form
                    playerCards[cardIndex] = {...alternateForm};
                    
                    closeMenu('.transformMenu');
                    
                    // Refresh the card display
                    refreshCardDisplay();
                }
            }

function refreshCardDisplay() {
    cardHolder.innerHTML = '';
    loadCards(playerCards);
}






function bossList() {
    openMenu('.bossMenu');
    closeSubMenu('#battleMenu');

    bossPit.innerHTML = '';
    boss.forEach(boss => {
        const bossBox = document.createElement('div');
        bossBox.className = 'bossBox';
        bossBox.innerHTML = `
        <h4>${boss.name}</h4>
        <img src="${boss.image}" alt="${boss.name}" style="grid-area: box2">
        <p>Attack:${boss.damage}</p>
        <p>Health:${boss.health}</p>
        <p>Speed:${boss.speed}</p>
        <p>${boss.ability}</p>
    `;
    bossBox.onclick = () => showBoss(boss);
    bossPit.appendChild(bossBox);
    });
}

function showBoss(boss) {
    openMenu('.bossBattle');
    closeSubMenu('.bossMenu');

    bossPitPit.innerHTML = '';
    const bossBox = document.createElement('div');
    bossBox.className = 'bossBox';
    bossBox.innerHTML = `
        <h4>${boss.name}</h4>
        <img src="${boss.image}" alt="${boss.name}" style="grid-area: box2">
        <p>${boss.nature}</p>
        <p>____${boss.damage}____${boss.health}______${boss.speed}____</p>
        <p>${boss.abilityText}</p>
    `;

    const minionObj = minion.find(item => item.id === boss.id);

    const minionBox = document.createElement('div');
    minionBox.className = 'bossBox';
    minionBox.innerHTML = `
        <h4>${minionObj.name}</h4>
        <img src="${minionObj.image}" alt="${minionObj.name}" style="grid-area: box2">
        <p>${minionObj.nature}</p>
        <p>___${minionObj.damage}______${minionObj.health}______${minionObj.speed}____</p>
        <p>${minionObj.abilityText}</p>
    `

    const minionBoxTwo = document.createElement('div');
    minionBoxTwo.className = 'bossBox';
    minionBoxTwo.innerHTML = `
        <h4>${minionObj.name}</h4>
        <img src="${minionObj.image}" alt="${minionObj.name}" style="grid-area: box2">
        <p>${minionObj.nature}</p>
        <p>___${minionObj.damage}______${minionObj.health}______${minionObj.speed}____</p>
        <p>${minionObj.abilityText}</p>
    `

    bossPitPit.appendChild(minionBox);
    bossPitPit.appendChild(bossBox);
    bossPitPit.appendChild(minionBoxTwo);
}

function chooseFighters() {
    openMenu('.fighterBox');
    closeSubMenu('.bossButtons');
    fighterPit.innerHTML = "";

    let selectedCards = [];

    playerCards.forEach(card => {
        const fighters = document.createElement('section');
         fighters.className = 'fighterCard';
         fighters.innerHTML = `<h3>${card.name}</h3>`;

         fighters.addEventListener("click", () => {
            // If already selected → deselect
            if (selectedCards.includes(card)) {
                selectedCards = selectedCards.filter(c => c !== card);
                fighters.classList.remove("selected");
            } 
            // Otherwise select, but only if fewer than 3
            else if (selectedCards.length < 3) {
                selectedCards.push(card);
                fighters.classList.add("selected");
            }
            document.getElementById("confirmFighters").disabled = (selectedCards.length !== 3);
    });
            fighterPit.appendChild(fighters);
});

 let confirmBtn = document.getElementById("confirmFighters");
    if (!confirmBtn) {
        confirmBtn = document.createElement("button");
        confirmBtn.id = "confirmFighters";
        confirmBtn.textContent = "Confirm Fighters";
        confirmBtn.disabled = true; // disabled until 3 chosen
        confirmBtn.classList.add("subMenuButton");

        confirmBtn.addEventListener("click", () => {
            fighterPit.innerHTML = '';
            selectedCards.forEach(card => {
            const finalFighters = document.createElement('section');
            finalFighters.className = 'fighterCard';
            finalFighters.innerHTML = `
            <h4>${card.name}</h4>
            <img src="${card.image}" alt="${card.name}" style="grid-area: box2">
            <p>${card.nature}</p>
            <p>____${card.damage}______${card.health}______${card.speed}____</p>
            <p>${card.abilityText}</p>`;
            fighterPit.appendChild(finalFighters);
    });
            closeSubMenu('.fighterWords');
        });

        fighterPit.appendChild(confirmBtn);
    }
}

function closeMenu(menu) {
    const dynamicMenu = document.querySelector(menu);
    dynamicMenu.style.display = "none";
    homeMenu.style.display = "block";
} 

function closeSubMenu(menu) {
    const dynamicMenu = document.querySelector(menu);
    dynamicMenu.style.display = "none";
}

function openMenu(menu) {
    const dynamicMenu = document.querySelector(menu);
    dynamicMenu.style.display = "grid";
    homeMenu.style.display = "none";
}

function showHome() {
    homeMenu.style.display = "block";
    buttonHolder.style.display = "grid";
}

function showCardsOnly() {
    tempMenu.style.display = "none";
}

function showPoint() {
    pointMenu.style.display ="block";
}

function sell(card) {
    closeMenu(".statMenu");
    console.log(card);
    garbage.push(card);
    const index = playerCards.findIndex(c => c.id === card.id);
    playerCards.splice(index, 1);
    refreshCardDisplay();
}

function showPlayers() {
    playerMenu.style.display ="block";
    playerOptionsZone = document.getElementById("playerOptions")
    for (const obj of enemyCards) {
        console.log(obj.storageKey);
        const playerOptions = document.createElement("button");
        playerOptions.textContent = obj.storageKey;
        buttonHolder.className = "playerButton";
        playerOptionsZone.appendChild(playerOptions)
    }
}

function saveArray() {
    const jsonPlayerCards = JSON.stringify(playerCards);
    localStorage.setItem(name, jsonPlayerCards);
    location.reload();
}

function overwriteArray() {
    localStorage.setItem(name, JSON.stringify(placeholderCards));
    window.location.href = "whoareyou.html";
}









