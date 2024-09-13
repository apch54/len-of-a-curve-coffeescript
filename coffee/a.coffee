

# length of curve between a & b, itération is 100
a = 0 ; b = 1 ; n = 100 
# function to test is identity
F = (x) -> x 
dl = (x0, x1, y0, y1) -> Math.sqrt(Math.pow(x1-x0, 2) + Math.pow(y1-y0, 2))

curveLen = (a, b, n = 100) ->
    l = 0 
    dx =(b-a) / n
    x0 = a
    y0 = F(x0)
    for x in [1 .. n]  
        x1 = x0 + dx
        y1 = F(x1)  
        l += dl(x0,x1,y0,y1)
        x0 = x1
        y0 = y1
    return l


console.log curveLen(a,b)/Math.pow(2,.5)

