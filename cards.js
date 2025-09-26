let _allCards = null;

export async function bringCards() {
  try {
    const response = await fetch('cards.json');
    if (!response.ok) throw new Error('Failed to fetch JSON');
    _allCards = await response.json();
    return _allCards;
  } catch (error) {
    console.error("Error loading cards:", error);
    throw error;
  }
}

export function getCardById(id) {
  if (!_allCards) throw new Error('Cards not loaded yet');
  return _allCards.Starter_cards.find(card => card.id === id);
}

export function getAllCards() {
  if (!_allCards) throw new Error('Cards not loaded yet');
  return _allCards.Starter_cards;
}

export function combineAllCards() {
  if (!_allCards) throw new Error('Cards not loaded yet');
  const catchableCards = [
  ..._allCards.Common_cards,
  ..._allCards.Uncommon_cards,
  ..._allCards.Rare_cards
  ];
  return catchableCards;
}
