export const getRankColor = (rank) => {
    switch (rank) {
      case 1:
        return 'fill-yellow-400 text-yellow-400';
      case 2:
        return 'fill-gray-300 text-gray-300';
      case 3:
        return 'fill-amber-600 text-amber-600';
      default:
        return 'fill-transparent text-transparent';
    }
  }