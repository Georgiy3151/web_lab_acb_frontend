from collections import Counter
import string
def histogram(text):
    char_counts = Counter(text)
    symbols = [char for char in char_counts if char not in string.whitespace]
    symbols.sort()
    max_count = max(char_counts.values())
    for i in range(max_count, 0, -1):
        for char in symbols:
            print('#' if char_counts[char] >= i else ' ', end=' ')
        print()
    for char in symbols:
        print(char, end=' ')
    print()
text = input("Enter text: ")
histogram(text)