"""Script finds all combinations of unique Sudoku numbers that sum to
each possible target and dumps the results to a JSON file
"""
import copy
import collections
import functools
import json
from typing import List

class ImpossibleCombo(Exception):
    """Exception raised if a combination sums too high"""
    pass

@functools.lru_cache(10000)
def get_combos(target: int, n: int) -> List[int]:

    if n == 2:
        # Base-case: Hard code the results n=2
        if target == 3:
            return [[1, 2]]
        elif target == 4:
            return [[1, 3]]
        elif target == 5:
            return [[1, 4], [2, 3]]
        elif target == 6:
            return [[1, 5], [2, 4]]
        elif target == 7:
            return [[1, 6], [2, 5], [3, 4]]
        elif target == 8:
            return [[1, 7], [2, 6], [3, 5]]
        elif target == 9:
            return [[1, 8], [2, 7], [3, 6], [4, 5]]
        elif target == 10:
            return [[1, 9], [2, 8], [3, 7], [4, 6]]
        elif target == 11:
            return [[2, 9], [3, 8], [4, 7], [5, 6]]
        elif target == 12:
            return [[3, 9], [4, 8], [5, 7]]
        elif target == 13:
            return [[4, 9], [5, 8], [6, 7]]
        elif target == 14:
            return [[5, 9], [6, 8]]
        elif target == 15:
            return [[6, 9], [7, 8]]
        elif target == 16:
            return [[7, 9]]
        elif target == 17:
            return [[8, 9]]
        else:
            return []
    else:
        # Else iterate over possible numbers and recurse
        result = []
        for i in range(1, 9):
            partial_results = get_combos(target-i, n-1)

            for partial_result in partial_results:
                if i not in partial_result:
                    pr = copy.deepcopy(partial_result)
                    pr.append(i)
                    pr.sort()
                    result.append(pr)

        return sorted([list(x) for x in set(tuple(x) for x in result)])


if __name__ == "__main__":

    combos = {
        2: collections.defaultdict(dict),
        3: collections.defaultdict(dict),
        4: collections.defaultdict(dict),
        5: collections.defaultdict(dict),
        6: collections.defaultdict(dict),
        7: collections.defaultdict(dict),
        8: collections.defaultdict(dict),
        9: collections.defaultdict(dict)
    }

    for n in range(2, 10):
        for t in range(sum(range(1, n+1)), 46):
            combo = get_combos(t, n)
            if len(combo) > 0:
                combos[n][t] = copy.deepcopy(combo)

    with open("combos.json", "w") as f:
        json.dump(combos, f, indent=2)
