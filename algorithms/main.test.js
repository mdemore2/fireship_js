import { expect, test } from 'vitest';
import { cumulativeSum } from './cumulative_sum';
test('cumulative sum of an array', function() {
    expect(cumulativeSum([1, 3, 5, 7])).toBe(16);
    expect(cumulativeSum([-2, -4, -8])).toBe(-14);
});

import { binarySearch } from './binary_search';
test('binary search', () => {
    expect(binarySearch([1, 3, 5, 7], 5)).toBe(2);
    expect(binarySearch([1, 3, 5, 7], 2)).toBe(-1);
});

import { LRU } from './lru';
test('LRU cache', () => {
  const cache = new LRU(2);
  cache.putItem(1, 1);
  cache.putItem(2, 2);
  expect(cache.getItem(1)).toBe(1);
  cache.putItem(3, 3);
  expect(cache.getItem(2)).toBe(undefined);
});