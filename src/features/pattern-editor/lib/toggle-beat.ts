export const togglePosition = (beatTrack: number[], position: number) => {
  const quantizedSet = new Set(beatTrack);

  if (quantizedSet.has(position)) {
    quantizedSet.delete(position);
  } else {
    quantizedSet.add(position);
  }

  return Array.from(quantizedSet).sort();
};
