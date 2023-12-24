import bisect
def find_median_sum(n, sequence):
    sorted_sequence = []
    median_sum = 0
    for num in sequence:
        bisect.insort(sorted_sequence, num)
        i = len(sorted_sequence)
        median_sum += (sorted_sequence[i // 2 - 1] + sorted_sequence[i // 2]) / 2
    return median_sum
def main():
    N = int(input())
    X = list(map(int, input().split()))
    result = find_median_sum(N, X)
    print(result)
if __name__ == "__main__":
    main()
