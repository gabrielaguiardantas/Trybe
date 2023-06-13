import time

# exercício 1

# 1 - OK
# 0 - Instabilidades

valores_coletados1 = [0, 1, 1, 1, 0, 0, 1, 1]
resultado = 3

valores_coletados2 = [1, 1, 1, 1, 0, 0, 1, 1]
resultado = 4

# record start time
start = time.time()


# minha versão
def stable_period(collected_value):
    stable_time = 0
    stable_periods = []
    for check_stable in collected_value:
        if check_stable == 1:
            stable_time += 1
        else:
            if stable_time > 0:
                stable_periods.append(stable_time)
                stable_time = 0
    return max(stable_periods)


print(stable_period(valores_coletados2))

# record end time
end = time.time()
# print the difference between start
# and end time in milli. secs
print(
    "The time of execution of above program is :",
    (end - start) * 10**3,
    "ms",
)

# record start time
start = time.time()


# gabarito course
def verify_max_time_ok(collected_values):
    max_time = 0
    current_time = 0
    for value in collected_values:
        if value == 1:
            current_time += 1
        else:
            current_time = 0
        if current_time >= max_time:
            max_time = current_time
    return max_time


print(verify_max_time_ok(valores_coletados2))

# record end time
end = time.time()
# print the difference between start
# and end time in milli. secs
print(
    "The time of execution of above program is :",
    (end - start) * 10**3,
    "ms",
)
