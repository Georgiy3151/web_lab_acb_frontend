def count_paths(n, m):
    arr = [[0] * m for _ in range(n)]
    arr[0][0] = 1
    for i in range(1, n):
        for j in range(1, m):
            if i - 2 >= 0 and j - 1 >= 0:
                arr[i][j] += arr[i - 2][j - 1]
            if i - 1 >= 0 and j - 2 >= 0:
                arr[i][j] += arr[i - 1][j - 2]
    return arr[n - 1][m - 1]
n, m = map(int, input().split())
result = count_paths(n, m)
print(result)