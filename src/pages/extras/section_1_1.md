# A&DS S01E01. Algorithms. Time complexity. Merge sort.

[https://rouge95.github.io/Data-Structures/](Index)

---

## **1.1. For each algorithm below calculate its time complexity.**

### **a)**

```python
for i in range(n):
    j = 0
    while j * j < i:
        j += 1
```

**Analysis**

- Inner loop runs while ( j^2 < i ).
- So ( j ) increases up to approximately ( \sqrt{i} ).
- Work for each ( i ): ( O(\sqrt{i}) ).

Total:

[
\sum_{i=1}^{n} \sqrt{i} \approx \int_1^n \sqrt{x},dx
= \frac{2}{3}n^{3/2}
]

**Time complexity:**
[
\boxed{O(n^{3/2})}
]

---

### **b)**

```python
for i in range(n):
    j = i
    while j > 0:
        j = j // 2
```

**Analysis**

- Each iteration divides ( j ) by 2.
- Inner loop runs ( O(\log i) ) times.
- Total:

[
\sum_{i=1}^{n} \log i = O(n \log n)
]

**Time complexity:**
[
\boxed{O(n \log n)}
]

---

### **c)**

```python
def f(n):
    if n == 0:
        return 1
    else:
        return 5 * f(n // 3)
```

Recurrence:

[
T(n) = T(n/3) + O(1)
]

Depth of recursion:

[
n \to n/3 \to n/9 \to \dots \to 1
]

Number of levels:

[
\log_3 n
]

**Time complexity:**
[
\boxed{O(\log n)}
]

---

### **d)**

```python
def f(n):
    if n == 0:
        return 1
    else:
        return f(n // 3) + f(n // 3)
```

Recurrence:

[
T(n) = 2T(n/3) + O(1)
]

Using Master Theorem:

- ( a = 2 )
- ( b = 3 )
- ( f(n) = O(1) )

[
n^{\log_3 2}
]

Since ( \log_3 2 \approx 0.63 ),

**Time complexity:**
[
\boxed{O(n^{\log_3 2}) \approx O(n^{0.63})}
]

---

## **1.2. Prove by induction that if**

[
T(n) = 2T(n/2) + n
]
then
[
T(n) = \Omega(n \log n)
]

### **Proof**

Assume:

[
T(k) \ge c k \log k \quad \text{for all } k < n
]

Then:

[
T(n) = 2T(n/2) + n
]

[
\ge 2 \cdot c \frac{n}{2} \log\left(\frac{n}{2}\right) + n
]

[
= c n (\log n - 1) + n
]

[
= c n \log n + (1 - c)n
]

Choose ( c \le 1 ). Then:

[
T(n) \ge c n \log n
]

[
\boxed{T(n) = \Omega(n \log n)}
]

---

## **1.3. Prove that if**

[
T(n) = 2T(n/2 + 20) + n
]
then
[
T(n) = O(n \log n)
]

### **Idea**

The +20 is a constant shift.

For large ( n ):

[
T(n) \le 2T(n/2) + O(n)
]

This behaves like standard merge sort.

By Master Theorem:

[
\boxed{O(n \log n)}
]

---

## **1.4. Prove that if**

[
T(n) = \log n \cdot T(n/\log n) + n
]

then

[
T(n) = O(n \log n)
]

### **Proof Sketch**

Assume:

[
T(k) \le c k \log k
]

Then:

[
T(n) = \log n \cdot T(n/\log n) + n
]

[
\le \log n \cdot c \frac{n}{\log n} \log\left(\frac{n}{\log n}\right) + n
]

[
= c n (\log n - \log\log n) + n
]

[
\le c n \log n
]

For sufficiently large ( n ).

[
\boxed{O(n \log n)}
]

---

## **1.5. Prove that if**

[
T(n) = 2T(\sqrt{n}) + 1
]

then

[
T(n) = O(\log n)
]

### **Substitution**

Let:

[
n = 2^m
]

Then:

[
\sqrt{n} = 2^{m/2}
]

Define:

[
S(m) = T(2^m)
]

Recurrence becomes:

[
S(m) = 2S(m/2) + 1
]

This solves to:

[
S(m) = O(m)
]

Since ( m = \log n ),

[
\boxed{T(n) = O(\log n)}
]

---

## **1.6. Common element in two sorted arrays (O(n))**

Use two pointers:

```
i = 0, j = 0
while i < n and j < n:
    if a[i] == b[j]: return True
    if a[i] < b[j]: i++
    else: j++
```

[
\boxed{O(n)}
]

---

## **1.7. Minimal |ai − bj| (O(n))**

```
i = 0, j = 0
min_diff = ∞
while i < n and j < n:
    update min_diff
    move pointer of smaller element
```

[
\boxed{O(n)}
]

---

## **1.8. Find ai + bj = S (O(n))**

```
i = 0
j = n-1
while i < n and j >= 0:
    if sum == S: return
    if sum < S: i++
    else: j--
```

[
\boxed{O(n)}
]

---

## **1.9. Count pairs ai = bj (O(n))**

Traverse like merge step:

- When equal, count duplicates
- Advance both pointers

[
\boxed{O(n)}
]

---

## **1.10. Count pairs ai > bj (O(n))**

```
j = 0
for each i:
    while j < n and b[j] < a[i]:
        j++
    count += j
```

[
\boxed{O(n)}
]

---

## **1.11. Count inversions (O(n log n))**

Use modified merge sort:

- Divide array
- Count inversions in left
- Count inversions in right
- During merge:
  - If right[j] < left[i], then add remaining elements in left

[
\boxed{O(n \log n)}
]

---

## **1.12. Merge sort stability**

During merge:

- If elements equal, choose element from left array first.
- Relative order preserved.

Therefore merge sort is **stable**.

---

## **1.13. Merge sort with single auxiliary array**

Allocate:

```
temp = new array of size n
```

During merge:

1. Copy merged elements into `temp`
2. Copy back into original array

No new arrays created per recursion.

---

## **1.14. Iterative merge sort**

Bottom-up approach:

```
size = 1
while size < n:
    merge subarrays of length size
    size *= 2
```

No recursion required.

Time complexity remains:

[
\boxed{O(n \log n)}
]

---

# End of Lesson 1

Page 1 of 1
