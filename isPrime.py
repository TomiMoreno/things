# AI generated to make some tests with big prime numbers
import math
from sympy import totient as euler_phi


def perfectPower(n):
    """Check if n is a perfect power (i.e., if n = a^b for a > 1, b > 1)."""
    b = 2
    while (a := n ** (1.0 / b)) > b:
        if a == int(a):
            return True
        b += 1
    return False

def findR(n):
    """Find the smallest r such that the order of n (mod r) > log^2(n)."""
    maxK = math.log2(n) ** 2
    nexR = True
    r = 1
    while nexR:
        r += 1
        nexR = False
        for k in range(1, int(maxK) + 1):
            if pow(n, k, r) not in [0, 1]:
                break
            elif k == maxK:
                nexR = True
    return r

def aksPrimality(n):
    """Check if n is a prime number using the AKS primality test."""
    # Step 1: If n is a perfect power, return composite.
    if perfectPower(n):
        return False

    # Step 2: Find the smallest r such that the order of n (mod r) > log^2(n).
    r = findR(n)

    # Step 3: If 1 < gcd(a, n) < n for some a ≤ r, return composite.
    for a in range(2, min(r, n)):
        if math.gcd(a, n) > 1:
            return False

    # Step 4: If n ≤ r, return prime.
    if n <= r:
        return True

    # Step 5: For a = 1 to √φ(r) do if (X+a)^n ≠ X^n + a (mod X^r - 1,n), return composite.
    maxA = math.isqrt(euler_phi(r))
    for a in range(1, maxA + 1):
        if not (pow(a + n, n, n) == (pow(a, n, n) + a) % n):
            return False

    # Step 6: Return prime.
    return True

number = 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999989999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
number2 = 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999989999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
n = 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999989999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999


import random

def miller_rabin(n, k):
    if n == 2 or n == 3:
        return True

    if n % 2 == 0:
        return False

    # Write (n - 1) as 2^r * d
    r, d = 0, n - 1
    while d % 2 == 0:
        r += 1
        d //= 2

    # Witness loop
    for _ in range(k):
        a = random.randrange(2, n - 1)
        x = pow(a, d, n)  # Compute a^d % n
        if x == 1 or x == n - 1:
            continue
        for _ in range(r - 1):
            x = pow(x, 2, n)  # Square x modulo n
            if x == n - 1:
                break
        else:
            return False
    return True

print(miller_rabin(number, 10))
print(miller_rabin(number2, 10))
print(miller_rabin(n, 10))