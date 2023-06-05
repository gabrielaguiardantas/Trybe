def recursive_sum_arg(arg):
    if arg == 0:
        return 0
    else:
        print(f"{arg}")
        if arg == 1:
            print("=")
        return arg + recursive_sum_arg(arg - 1)


print(recursive_sum_arg(5))
