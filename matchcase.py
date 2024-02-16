def sub():
    a, b = map(int, input().split())
    print(a * b)
    
def div():
    a, b = map(int, input().split())
    print(a // b)


match input("Do sub or div?"):
    case "sub":
        sub()
    case "div":
        div()
    case _:
        print("invalid input!")
        
    