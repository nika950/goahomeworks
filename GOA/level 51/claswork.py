# products = {
#     "tomato": [ 12, 46, "yes "],
#     "grapes": [ 20, 44, "best "],
#     "banana": [ 22, 31, "its okeyy "],
#     "apple": [ 42, 33, "its good "],
#     "potato": [ 2, 43, "yes "]
# }
# def no_restock(key):
#     return prodcust[key[0]]>20

# new_products = filter(no_restock,prodcust)
# print(list(new_prodcust))

# data = [("b", 22,1 ),("z",11,44)]

# print(sorted(data, key=lambda x: x[1]))

# def mult(n):
#     return lambda a: a * n

# tripler = mult(3)
# dubler = mult(2)


# print(dubler(5))
# print(tripler(4))




# lambda funck = mult(25)

# print (lambda )


@decorator(func)
def wrapper():
    def func1():
        print("yess")
    return "helow world"


@decotrator
def func2():
    
    print("elephend")

f = func2(func1)
print(f)



