import type { GeoLocation } from '../data/locations';

export function slowSyncFilter(
  locations: GeoLocation[],
  searchValue: string
): GeoLocation[] {
  return locations.filter((location) => {
    // Simulate extremely slow computation (for demo/testing)
    const now = performance.now();
    while (performance.now() - now < 0.9) {
      // busy wait
    }

    return location.name.toLowerCase().includes(searchValue.toLowerCase());
  });
}
