---
import BaseLayout from "../../layouts/BaseLayout.astro";

const pageTitle =
  "A&DS S01E01. Algorithms. Time Complexity & Merge Sort.";
const unit = "1.1";
---

<BaseLayout
  title={pageTitle}
  unit={unit}
>
  <h1 class="text-3xl font-bold mb-4">
    {pageTitle}
  </h1>
  <hr class="mb-6" />

  <!-- 1.1 Time Complexity -->
  <details
    class="mb-4 border rounded p-4"
  >
    <summary
      class="cursor-pointer font-semibold"
    >
      1.1 Time Complexity Analysis
    </summary>

    <p class="mt-2 font-semibold">
      Question a)
    </p>
    <p>
      for i = 1..n <br />
      &nbsp;&nbsp;for j = 1 while j² &lt;
      i
    </p>
    <p>
      For fixed i, j runs until √i. <br
      />
      Total work: Σ√i from 1 to n ≈ n^(3/2).
      <br />
      <strong>Answer:</strong> O(n^(3/2))
    </p>

    <p class="mt-4 font-semibold">
      Question b)
    </p>
    <p>
      for i = 1..n <br />
      &nbsp;&nbsp;j = n <br />
      &nbsp;&nbsp;while j &gt; 1: j = j/2
    </p>
    <p>
      Inner loop runs log n times. <br
      />
      Outer loop runs n times. <br />
      <strong>Answer:</strong> O(n log n)
    </p>

    <p class="mt-4 font-semibold">
      Question c)
    </p>
    <p>f(n) = 5 f(n/3) + O(1)</p>
    <p>
      Use Master Theorem. <br />
      a = 5, b = 3 → n^(log₃5) ≈ n^1.46 <br
      />
      <strong>Answer:</strong> O(n^1.46)
    </p>

    <p class="mt-4 font-semibold">
      Question d)
    </p>
    <p>f(n) = 2 f(n/3) + O(1)</p>
    <p>
      a = 2, b = 3 → n^(log₃2) ≈ n^0.63 <br
      />
      <strong>Answer:</strong> O(n^0.63)
    </p>
  </details>

  <!-- 1.2 -->
  <details
    class="mb-4 border rounded p-4"
  >
    <summary
      class="cursor-pointer font-semibold"
    >
      1.2 Prove T(n) = Ω(n log n)
    </summary>

    <p class="mt-2">
      Given: T(n) = 2T(n/2) + n
    </p>

    <p>
      Expand recurrence tree: <br />
      Level 0: n <br />
      Level 1: 2 × n/2 = n <br />
      Level 2: 4 × n/4 = n <br />
      Each level contributes n.
    </p>

    <p>
      Height = log n levels. <br />
      Total work = n log n.
    </p>

    <strong>Conclusion:</strong> Ω(n log n)
  </details>

  <!-- 1.3 -->
  <details
    class="mb-4 border rounded p-4"
  >
    <summary
      class="cursor-pointer font-semibold"
    >
      1.3 Prove T(n) = O(n log n)
    </summary>

    <p class="mt-2">
      T(n) = 2T(n/2 + 20) + n
    </p>

    <p>
      The +20 is constant shift. <br />
      It does not change asymptotic depth.
      <br />
      Recurrence behaves like 2T(n/2) + n.
    </p>

    <strong>Answer:</strong> O(n log n)
  </details>

  <!-- 1.4 -->
  <details
    class="mb-4 border rounded p-4"
  >
    <summary
      class="cursor-pointer font-semibold"
    >
      1.4 T(n) = log n · T(n/log n) + n
    </summary>

    <p class="mt-2">
      Each level shrinks problem to
      n/log n. <br />
      Depth becomes log n / log log n. <br
      />
      Each level costs n.
    </p>

    <strong>Answer:</strong> O(n log n)
  </details>

  <!-- 1.5 -->
  <details
    class="mb-4 border rounded p-4"
  >
    <summary
      class="cursor-pointer font-semibold"
    >
      1.5 T(n) = 2T(√n) + 1
    </summary>

    <p class="mt-2">
      Let n = 2^m. <br />
      Then √n = 2^(m/2).
    </p>

    <p>
      Define S(m) = T(2^m). <br />
      Recurrence becomes S(m) = 2S(m/2) +
      1.
    </p>

    <p>
      This solves to O(m). <br />
      Since m = log n:
    </p>

    <strong>Answer:</strong> O(log n)
  </details>

  <!-- Two pointer -->
  <details
    class="mb-4 border rounded p-4"
  >
    <summary
      class="cursor-pointer font-semibold"
    >
      1.6–1.10 Two-Pointer Problems
    </summary>

    <p class="mt-2">
      Assume arrays are sorted.
    </p>

    <p>
      <strong
        >1.6 Common element:</strong
      ><br />
      Move smaller pointer forward until equal
      found. O(n).
    </p>

    <p>
      <strong>1.7 Min |ai - bj|:</strong
      ><br />
      Always move pointer with smaller value.
      O(n).
    </p>

    <p>
      <strong>1.8 ai + bj = S:</strong
      ><br />
      i = 0, j = n-1. <br />
      If sum too small → i++ <br />
      If sum too large → j-- <br />
      O(n).
    </p>

    <p>
      <strong>1.9 Count ai = bj:</strong
      ><br />
      Merge-style traversal. O(n).
    </p>

    <p>
      <strong
        >1.10 Count ai &gt; bj:</strong
      ><br />
      When ai &gt; bj, add count of remaining
      smaller b’s. O(n).
    </p>
  </details>

  <!-- Inversions -->
  <details
    class="mb-4 border rounded p-4"
  >
    <summary
      class="cursor-pointer font-semibold"
    >
      1.11 Count Inversions (O(n log n))
    </summary>

    <p class="mt-2">
      Use modified merge sort.
    </p>

    <p>
      During merge: <br />
      If right element placed before left
      → <br />
      Add remaining left elements count.
    </p>

    <strong>Time:</strong> O(n log n)
  </details>

  <!-- Stability -->
  <details
    class="mb-4 border rounded p-4"
  >
    <summary
      class="cursor-pointer font-semibold"
    >
      1.12 Why Merge Sort Is Stable
    </summary>

    <p class="mt-2">
      When elements are equal, take from
      left subarray first.
    </p>

    <p>
      This preserves original order.
    </p>
  </details>

  <!-- Single array -->
  <details
    class="mb-4 border rounded p-4"
  >
    <summary
      class="cursor-pointer font-semibold"
    >
      1.13 Merge Sort with One Extra
      Array
    </summary>

    <p class="mt-2">
      Allocate temp[n] once.
    </p>

    <p>
      During merge: <br />
      Copy into temp → copy back.
    </p>

    <p>Avoids repeated allocations.</p>
  </details>

  <!-- Iterative -->
  <details
    class="mb-4 border rounded p-4"
  >
    <summary
      class="cursor-pointer font-semibold"
    >
      1.14 Iterative Merge Sort
    </summary>

    <p class="mt-2">
      Bottom-up approach:
    </p>

    <p>
      Merge size 1 → 2 → 4 → 8 → ... <br
      />
      Until size ≥ n.
    </p>

    <p>Eliminates recursion stack.</p>
  </details>
</BaseLayout>
