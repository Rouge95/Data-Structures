# Algorithms and Data Structures

## Tasks for Lesson 1 — With Full Solutions

---

## **1.1. For each algorithm below calculate its time complexity.**

### **a)**

```python
for i in range(n):
    j = 0
    while j * j < i:
        j += 1
```

### **Solution**

For each fixed ( i ), the condition is:

[
j^2 < i
]

So ( j ) increases up to approximately ( \sqrt{i} ).
Thus, the inner loop runs ( O(\sqrt{i}) ) times.

Total work:

[
\sum_{i=1}^{n} \sqrt{i}
\approx \int_1^n \sqrt{x} dx
= \frac{2}{3} n^{3/2}
]

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

### **Solution**

Each iteration halves ( j ).
So the inner loop runs ( O(\log i) ) times.

Total work:

[
\sum_{i=1}^{n} \log i = O(n \log n)
]

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

### **Solution**

Recurrence:

[
T(n) = T(n/3) + O(1)
]

The recursion depth is:

[
\log_3 n
]

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

### **Solution**

Recurrence:

[
T(n) = 2T(n/3) + O(1)
]

Using Master Theorem:

[
T(n) = O(n^{\log_3 2})
]

Since ( \log_3 2 \approx 0.63 ),

[
\boxed{O(n^{0.63})}
]

---

## **1.2. Prove using mathematical induction that if**

[
T(n) = 2T(n/2) + n
]
then
[
T(n) = \Omega(n \log n)
]

### **Solution**

**Induction hypothesis:**
Assume

[
T(k) \ge c k \log k
\quad \text{for all } k < n
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
\boxed{\Omega(n \log n)}
]

---

## **1.3. Prove using mathematical induction that if**

[
T(n) = 2T(n/2 + 20) + n
]
then
[
T(n) = O(n \log n)
]

### **Solution**

The constant +20 does not change asymptotic behavior.

For sufficiently large ( n ):

[
T(n) \le 2T(n/2) + cn
]

This matches the standard merge sort recurrence.

[
\boxed{O(n \log n)}
]

---

## **1.4. Prove using mathematical induction that if**

[
T(n) = \log n \cdot T(n/\log n) + n
]
then
[
T(n) = O(n \log n)
]

### **Solution**

Assume:

[
T(k) \le c k \log k
]

Then:

[
T(n)
= \log n \cdot T(n/\log n) + n
]

[
\le \log n \cdot c \frac{n}{\log n}
\log\left(\frac{n}{\log n}\right) + n
]

[
= c n (\log n - \log\log n) + n
]

For sufficiently large ( n ), this is bounded by:

[
c n \log n
]

[
\boxed{O(n \log n)}
]

---

## **1.5. Prove using mathematical induction that if**

[
T(n) = 2T(\sqrt{n}) + 1
]
then
[
T(n) = O(\log n)
]

### **Solution**

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
\boxed{O(\log n)}
]

---

## **1.6. You are given two arrays a and b sorted in non-decreasing order. Determine if there is a number that occurs in both arrays. Time O(n).**

### **Solution**

Use two pointers:

- If ( a[i] = b[j] ) → return true
- If ( a[i] < b[j] ) → increment ( i )
- Else increment ( j )

Each element is visited at most once.

[
\boxed{O(n)}
]

---

## **1.7. You are given two arrays a and b sorted in non-decreasing order. Find i and j such that |ai − bj| is minimal. Time O(n).**

### **Solution**

Use two pointers:

- Compute difference
- Move pointer of smaller element

Each step reduces search space.

[
\boxed{O(n)}
]

---

## **1.8. You are given two arrays a and b sorted in non-decreasing order and a number S. Find i and j such that ai + bj = S. Time O(n).**

### **Solution**

Use:

- ( i = 0 )
- ( j = n-1 )

If sum < S → increment ( i )
If sum > S → decrement ( j )

[
\boxed{O(n)}
]

---

## **1.9. You are given two arrays a and b sorted in non-decreasing order. Find the number of pairs (i, j) such that ai = bj. Time O(n).**

### **Solution**

Traverse like merge:

- If equal → count duplicates
- Move both pointers

[
\boxed{O(n)}
]

---

## **1.10. You are given two arrays a and b sorted in non-decreasing order. Find the number of pairs (i, j) such that ai > bj. Time O(n).**

### **Solution**

Maintain pointer ( j ) in array b.

For each ( a[i] ):

- Move ( j ) while ( b[j] < a[i] )
- Add ( j ) to count

[
\boxed{O(n)}
]

---

## **1.11. Given an array a. The pair (i, j) such that i < j and ai > aj is called inversion. Find the number of inversions in array a. Time O(n log n).**

### **Solution**

Use modified merge sort:

- Count inversions in left half
- Count inversions in right half
- During merge:
  - If right[j] < left[i]
  - Add remaining left elements to inversion count

[
\boxed{O(n \log n)}
]

---

## **1.12. Show that, with the correct implementation, merge sort is stable.**

### **Solution**

During merge:

If elements are equal, choose the element from the left subarray first.

Thus relative order of equal elements is preserved.

Merge sort is **stable**.

---

## **1.13. Show how to implement merge sort with a single additional array of size n.**

### **Solution**

- Allocate one auxiliary array of size ( n ).
- Pass it to recursive calls.
- During merge:
  - Copy merged segment into auxiliary array
  - Copy back to original array

No new arrays per recursion.

---

## **1.14. Show how to implement merge sort without recursion.**

### **Solution**

Use bottom-up merge sort:

- Start with subarrays of size 1.
- Merge adjacent subarrays.
- Double size each iteration: 1, 2, 4, 8, …

Stop when size ≥ n.

Time complexity remains:

[
\boxed{O(n \log n)}
]

---

**End of Lesson 1**
Page 1 of 1
